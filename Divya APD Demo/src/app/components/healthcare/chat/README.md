# Chat Components

Reusable chat interface components for scripted conversations per §6.4 of the APD Stakeholder Plan.

## Components

### `ChatContainer.tsx`

Main conversation orchestrator that manages scripted dialogue flow.

**Props:**
- `script: ConversationTurn[]` - Array of conversation turns from narrative script
- `disclaimer?: string` - Optional disclaimer text shown at top
- `variables: Record<string, string>` - Variables for text interpolation (userName, planName, etc.)
- `onComplete?: () => void` - Callback when conversation reaches end

**Features:**
- Auto-advances through Dot messages with natural timing
- **Streaming text animation** for longer messages (>20 characters)
- Waits for user input at designated turns
- Handles embedded UI components (carousels, cards, etc.)
- Auto-scrolls to new messages
- Interpolates variables into conversation text

**Usage:**
```tsx
import { ChatContainer } from './ChatContainer';
import { chapter1Script, chapter1Disclaimer } from '../../../data/narratives/chapter1-tour';

<ChatContainer
  script={chapter1Script}
  disclaimer={chapter1Disclaimer}
  variables={{ userName: 'Charles', planName: 'Personalized Wellbeing Copay Plan' }}
  onComplete={() => console.log('Conversation complete')}
/>
```

### `MessageBubble.tsx`

Individual message bubble for Dot, Sarah, or Member.

**Props:**
- `speaker: 'dot' | 'sarah' | 'member'` - Who is speaking
- `text: string` - Message text
- `showAvatar?: boolean` - Show avatar and name label (default: true)
- `speakerName?: string` - Custom speaker name
- `isStreaming?: boolean` - Show blinking cursor for streaming animation (default: false)

**Design:**
- **Dot/Sarah**: Left-aligned, no background, avatar + name label
- **Member**: Right-aligned, light blue background (#e6effe), no avatar

### `CareTeamBubble.tsx`

Message bubble specifically for Care Team members (distinct visual style from Dot/Sarah).

**Props:**
- `text: string` - Message text
- `showAvatar?: boolean` - Show avatar and name label (default: true)
- `careTeamName?: string` - Care team member name (default: "Sarah")
- `careTeamTitle?: string` - Care team member title (default: "Care Team member")
- `isTyping?: boolean` - Show typing indicator ("...") before fading in message (default: false)

**Design:**
- Left-aligned, gray background (#f2f2f2)
- Rounded corners: bottom-left, bottom-right, top-right
- Avatar + "Name · Title" label format
- Distinct from Dot/Sarah style (which has no background)
- Uses typing indicator instead of character-by-character streaming
- Message fades in after typing indicator disappears

**Behavior:**
- When `isTyping={true}`: Shows "..." as typing indicator
- When `isTyping={false}`: Fades in complete message with smooth opacity transition
- Different from Dot's streaming: Care Team shows full message at once, not character-by-character

**Usage:**
```tsx
<CareTeamBubble
  text="Hi Charles, I'm Sarah, a Nurse Care Manager..."
  showAvatar={true}
  careTeamName="Sarah"
  careTeamTitle="Nurse Care Manager"
  isTyping={false}
/>
```

### `SystemMessage.tsx`

Centered system messages for status updates (e.g., "Sarah is now your Care Team member").

**Props:**
- `text: string` - System message text
- `timestamp?: string` - Optional timestamp (e.g., "12:34 PM")
- `showNewBadge?: boolean` - Show "X New message" badge (default: false)
- `newMessageCount?: number` - Number of new messages (default: 0)

**Design:**
- Center-aligned, gray text (#3b3b3b)
- Optional timestamp with "New message" badge
- Badge shows blue text (#0012e7) with count

**Usage:**
```tsx
<SystemMessage
  text="Sarah is now your Care Team member."
  timestamp="12:34 PM"
  showNewBadge={true}
  newMessageCount={3}
/>
```

### `ChatInput.tsx`

Message input field with send and plus buttons.

**Props:**
- `placeholder?: string` - Placeholder text (default: "Describe your issue...")
- `onSend: (message: string) => void` - Callback when message sent
- `onPlusClick?: () => void` - Callback for plus button (optional)
- `disabled?: boolean` - Disable input (default: false)

**Features:**
- Enter key to send (Shift+Enter for new line)
- Send button disabled when empty
- Clears input after send

### `ChatDisclaimer.tsx`

Disclaimer text shown at conversation start.

**Props:**
- `text: string` - Disclaimer text

### `Avatar.tsx`

Reusable avatar component.

**Props:**
- `type: 'dot' | 'sarah' | 'provider'` - Avatar type
- `size?: 'xxsmall' | 'small' | 'medium' | 'large'` - Size (default: xxsmall)
- `name?: string` - Name for fallback initial
- `imageUrl?: string` - Image URL for Sarah/providers

### `QuickReply.tsx`

Quick reply chips for user selection.

**Props:**
- `label?: string` - Prompt text above options (default: "Select or describe what you need:")
- `options: string[]` - Array of option text
- `onSelect: (option: string) => void` - Callback when option selected

**Design:**
- Vertical stack of pill-shaped chips
- Blue text (#0012e7) with gray borders
- Tappable buttons that trigger onSelect

**Usage:**
```tsx
<QuickReply
  label="Would you like to:"
  options={['Confirm appointment', 'Find other times']}
  onSelect={(option) => console.log('Selected:', option)}
/>
```

## Conversation Flow

### Scripted Interaction Model

Per user requirements, the chat is **scripted** but feels interactive:

1. **User types** in the input field
2. **User hits send** 
3. **Message displays** in chat (whatever they typed)
4. **Auto-advance** to next scripted Dot response

The prototype **does not validate or parse** user input - it simply displays it and continues with the pre-written script.

### Turn Types

**`utterance`** - Dot/Sarah speaks:
```typescript
{
  id: 'p1_welcome',
  speaker: 'dot',
  type: 'utterance',
  text: 'Hi {userName}! 👋'
}
```

**`user_input`** - Wait for member to type and send:
```typescript
{
  id: 'p1_user_ready',
  speaker: 'user',
  type: 'user_input',
  expectation: 'Tap Okay / Okay, I'm ready'
}
```

**`ui_embed`** - Inline component (carousel, card, etc.):
```typescript
{
  id: 'p1_ui_care_tiles',
  speaker: 'system',
  type: 'ui_embed',
  component: 'CardCarousel'
}
```

**`transition`** - Skipped automatically (navigation markers):
```typescript
{
  id: 'p5_transition_booked',
  speaker: 'system',
  type: 'transition',
  note: 'Chapter 1 exit; proceed to wellness lock'
}
```

## Streaming Text Animation

ChatContainer uses streaming text to make longer Dot messages feel more natural and dynamic.

### How It Works

**Triggering:**
- Only Dot/Sarah messages (not user messages) are streamed
- Only messages **longer than 20 characters** (`MIN_CHARS_FOR_STREAMING`)
- Shorter messages appear instantly for snappier feel

**Implementation:**
```typescript
// ChatContainer.tsx manages streaming state
const [streamingTurnId, setStreamingTurnId] = useState<string | null>(null);
const [streamingFullText, setStreamingFullText] = useState('');

// Uses custom hook: useTextStreaming
const { displayedText, isStreaming, start: startStreaming } = useTextStreaming({
  text: streamingFullText,
  speed: 375, // words per minute (25% faster than default)
  onComplete: () => {
    // Auto-advance to next turn when streaming completes
  },
  autoStart: false,
});
```

**Flow:**
1. Message is added to displayedTurns with **empty text** initially
2. `streamingTurnId` tracks which message is currently streaming
3. `useTextStreaming` hook progressively reveals characters
4. `displayedText` updates continuously as streaming progresses
5. Message bubble re-renders with growing text + blinking cursor
6. When complete, cursor disappears and next turn begins

**Visual Indicator:**
- Blinking cursor (`|`) appears at end of streaming text
- Implemented in `MessageBubble.tsx` with CSS animation
- Cursor only shows when `isStreaming={true}`

### Duplicate Message Prevention

The implementation includes safeguards against duplicate messages:

**1. Separate Rendering Paths for Different Turn Types:**

The rendering logic has two distinct paths that are mutually exclusive:

```typescript
// Path 1: Renders Dot/Sarah utterances (type === 'utterance')
if (turn.type === 'utterance' && turn.text !== undefined) {
  return <MessageBubble speaker={turn.speaker === 'dot' ? 'dot' : 'member'} ... />;
}

// Path 2: Renders user messages (type === 'user_input' with text)
if (turn.speaker === 'user' && turn.text) {
  return <MessageBubble speaker="member" ... />;
}
```

**Why two conditions?** Different turn types:
- Dot messages in the script have `type: 'utterance'` and `speaker: 'dot'`
- User input slots in the script have `type: 'user_input'` and `speaker: 'user'` (no text initially)
- When user responds, handleUserSend creates a turn with `type: 'user_input'`, `speaker: 'user'`, and `text: "user input"`

**No turn has both `type: 'utterance' AND speaker: 'user'`**, so these conditions never overlap or create duplicates.

**2. Duplicate Detection in setState:**

Before adding any turn to `displayedTurns`, the code checks if it already exists:

```typescript
setDisplayedTurns((prev) => {
  // Don't add if already exists
  if (prev.some((t) => t.id === currentTurn.id)) {
    return prev;
  }
  // ... add the turn
});
```

**Why this is needed:** The auto-advance useEffect depends on `startStreaming`, which changes identity when streaming state changes. This can cause the effect to re-run for the same turn index, potentially scheduling duplicate additions. The defensive check prevents this.

## Variable Interpolation

Text containing `{variableName}` is replaced with actual values:

```typescript
const variables = {
  userName: 'Charles',
  planName: 'Personalized Wellbeing Copay Plan'
};

// Input: "Hi {userName}! Welcome to {planName}."
// Output: "Hi Charles! Welcome to Personalized Wellbeing Copay Plan."
```

## Embedded UI Components

ChatContainer renders these embedded components inline:

- `CardCarousel` / `BenefitsCarousel` - Horizontal scrollable cards
- `ProviderMapIllustration` - Map visual (placeholder)
- `DeductibleTrackingVisual` - Spending tracker (placeholder)
- `HealthPlanCard` - Care plan card (placeholder)
- `ProviderCard` - Dr. Scott Henderson card (awaiting design)
- `QuickTaps` - Quick reply chips ✅
- `ConfirmationCard` - Appointment confirmation card ✅

Placeholders display a dashed border with "Awaiting design" label.

## Story Bible Integration

All conversations use story bible data:

```typescript
import { useStoryBible } from '../context/StoryBibleContext';

const story = useStoryBible();

const variables = {
  userName: story.member.firstName, // "Charles"
  planName: story.member.plan,      // "Personalized Wellbeing Copay Plan"
};
```

## Design Source

Adapted from Figma imports:
- `/src/imports/StartOfConversation/StartOfConversation.tsx`
- `/src/imports/ResponseDot/ResponseDot.tsx`
- `/src/imports/ResponseMember/ResponseMember.tsx`
- `/src/imports/ChatInput/ChatInput.tsx`
