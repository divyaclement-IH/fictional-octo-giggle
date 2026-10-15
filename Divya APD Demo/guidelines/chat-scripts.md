# Chat Scripts & Narrative Guidelines

**Scope:** Conversation scripts, action gates, chat behavior, script formatting  
**Related files:** `app-navigation.md`, `component-behaviors.md`

---

## ConversationTurn Interface

All chapter conversation scripts must use this exact interface structure:

```typescript
export interface ConversationTurn {
  id: string;                                                    // Unique turn identifier
  speaker: 'dot' | 'sarah' | 'care_team' | 'user' | 'system';  // Who is speaking (lowercase)
  type: 'utterance' | 'user_input' | 'ui_embed' | 'transition' | 'action_gate'; // Turn type
  text?: string;           // Message text (optional - not used for ui_embed/transition)
  component?: string;      // Component name for ui_embed (e.g., "SystemMessage", "RequestCard")
  expectation?: string;    // Description of expected user input for user_input turns
  note?: string;           // Implementation notes (not shown to user)
  requiredAction?: string; // For action_gate: action ID that resumes script (e.g., 'wellness:viewed_history')
}
```

**Critical field rules:**
- **speaker values**: Always lowercase with underscores (`'care_team'` not `'CareTeam'`)
- **type values**: Must be one of the 5 valid types: `'utterance'`, `'user_input'`, `'ui_embed'`, `'transition'`, `'action_gate'`
- **text field**: Single unified field for all message text (not separate `utterance` or `user_input` fields)
- **User messages**: Use `speaker: 'user'` + `type: 'user_input'` (not `type: 'utterance'`)

---

## Action Gates

**Purpose:** Pause the script to let users explore the app freely. The script resumes when a specific action is triggered.

**When to use:**
- Let users navigate screens and interact with features between story beats
- Allow hands-on exploration during tutorials
- Create breathing room in long narratives
- Wait for interactive component clicks (buttons on cards, navigation actions)

**Two action gate patterns:**

### 1. Text-based action gates (exploration/navigation)

Shows a message and waits for a navigation or interaction action:

```typescript
{
  id: 'explore_wellness',
  speaker: 'dot',
  type: 'action_gate',
  text: "Go ahead and explore your wellness dashboard. I'll be here when you're ready.",
  requiredAction: 'wellness:viewed_history'
}
```

### 2. Component-based action gates (interactive cards)

**CRITICAL:** Use `action_gate` (not `ui_embed`) when displaying interactive components that require user clicks:

```typescript
// ✅ CORRECT - Waits for button click before advancing
{
  id: 'show_next_steps_card',
  speaker: 'system',
  type: 'action_gate',  // NOT ui_embed!
  component: 'ServiceCard',
  text: 'Body text:Review your next steps Button text:Show me',
  requiredAction: 'service_card:next_steps_clicked',
}

// ❌ WRONG - Will display card and immediately skip to next turn
{
  type: 'ui_embed',  // This will NOT wait for user interaction
  component: 'ServiceCard',
  text: '...',
}
```

**When to use `ui_embed` vs `action_gate` for components:**
- **`ui_embed`**: Component is informational only, script continues immediately
- **`action_gate`**: Component has interactive buttons/actions, script must wait for user click

**Component implementation:**
```typescript
import { useJourney } from '../context/JourneyContext';

export default function YourChapter() {
  const { triggerAction } = useJourney();
  
  // When user completes the action
  const handleUserAction = () => {
    triggerAction('wellness:viewed_history');  // Script continues
  };
}
```

**Action naming convention:**
- Format: `namespace:action_name`
- Common namespaces: `wellness:`, `provider:`, `navigation:`, `appointment:`, `message:`, `service_card:`
- Examples: `wellness:viewed_history`, `provider:selected_specialist`, `navigation:get_care_clicked`, `service_card:next_steps_clicked`

**Key behaviors:**
- Script waits indefinitely (no auto-progression)
- Message displays like a normal Dot utterance (if text provided)
- Components render normally (if component provided)
- Chat input remains disabled during wait
- Script advances immediately when action is triggered

**See also:** `/docs/ACTION_GATES.md` for full documentation and examples

---

## Chat Message Behavior

Different speakers have different message rendering behaviors:

**Dot (Virtual Assistant):**
- Uses `MessageBubble` component
- Character-by-character **streaming animation** for messages >20 characters
- Left-aligned, no background color, blue avatar
- Blinking cursor appears during streaming

**Sarah / Care Team:**
- Uses `CareTeamBubble` component
- Shows **typing indicator** ("...") for ~1.5 seconds
- Then **fades in** complete message (no character-by-character)
- Left-aligned, gray background (#f2f2f2), "Name · Title" format
- Distinct from Dot's no-background style

**User / Member:**
- Uses `MessageBubble` with `speaker: 'member'`
- Appears **instantly** (no animation)
- Right-aligned, light blue background (#e6effe), no avatar

**System Messages:**
- Uses `SystemMessage` component
- Center-aligned, gray text, optional timestamp + "New message" badge

---

## Chat Interaction Timing

The chat system uses specific timing patterns for natural conversation flow:

**Consecutive Care Team Messages:**
- First message: 500ms delay → 2s typing indicator → message appears
- Consecutive messages: **1.2s delay** → 2s typing indicator → message appears
- Extra breathing room between back-to-back messages improves readability

**System Messages:**
- Appear with **100ms delay** (nearly instant)
- No streaming or typing indicators
- Used for "User joined chat" / "User left chat" events

**User Input Processing:**
- Each `user_input` turn is tracked by ID to prevent duplicate submissions
- Chat input is disabled while waiting (`waitingForInput` state)
- Turn advancement happens automatically after user submits message

**Auto-advancement Logic:**
- Effect processes turns when not waiting for input
- Checks if next turn is `user_input` before advancing
- Sets `waitingForInput = true` only for unprocessed user_input turns

---

## Script Export Requirements

When exporting conversation scripts from source documents:

1. **Field naming**: Use exact field names from interface (`text` not `utterance`, `expectation` not `user_input`)
2. **Speaker mapping**: Map human-readable names to lowercase (`"Sarah"` → `'sarah'`, `"Assistant"` → `'care_team'`)
3. **Type mapping**: Convert note-style turns to use `note:` field instead of `type: 'note'`
4. **User input**: Empty `text` field for user_input turns (user provides text), use `expectation` to describe what's expected
5. **Variable interpolation**: Use `{variableName}` syntax in text for dynamic values

---

## Script Formatting

**CRITICAL:** Conversation script files use specific formatting rules to prevent parsing errors and ensure consistent rendering.

### String Quote Usage

**Use double quotes** for strings containing apostrophes/contractions:

```typescript
// ✅ CORRECT
text: "I'll help you with that.",
expectation: "Member responds (e.g., \"Yes\" or \"No\") to Sarah's question.",

// ❌ WRONG - Will cause parsing errors
text: 'I'll help you with that.',  // Unescaped apostrophe
expectation: 'Member responds to Sarah's question.',  // Unescaped apostrophe
```

**Use template literals (backticks)** for complex strings with both quotes:

```typescript
// ✅ CORRECT - for strings with both single and double quotes
text: `She said "I'm ready" and left.`,
```

**Escape apostrophes** only when using single-quoted strings:

```typescript
// ⚠️ WORKS but not recommended - requires manual escaping
text: 'I\'ll help you with that.',
```

### Bulleted List Formatting

For care team messages with bulleted lists, use this exact format:

```typescript
// ✅ CORRECT - double newlines between items, bullet character •
text: "Here are the steps:\n\n• First item: Details about first step.\n\n• Second item: Details about second step.\n\n• Third item: Details about third step.",

// ❌ WRONG - Using middle dot ·, asterisk *, or no spacing
text: "Steps: · First · Second · Third",  // Wrong bullet, no spacing
text: "Steps: * First\n* Second",  // Wrong bullet, single newline
```

**Pattern:**
- Intro sentence
- Double newline (`\n\n`)
- Bullet character `•` (not `·` or `*`)
- Item label and details
- Double newline before next bullet
- Repeat

### Component Text Parsing

Some components parse structured text from the `text` field:

**ServiceCard** - expects `"Body text:... Button text:..."`
```typescript
{
  type: 'ui_embed',
  component: 'ServiceCard',
  text: "Body text:Review your next steps and track progress Button text:Show me",
}
```

**SystemMessage** - auto-parses timestamps from format `"HH:MM AM/PM Message text"`
```typescript
{
  speaker: 'system',
  type: 'utterance',
  text: '12:34 PM Sarah has joined the chat',
  component: 'SystemMessage',
}
```

---

## Narrative File Structure (Post-Refactoring)

After the manifest-driven refactoring, narrative files must follow strict naming and structure conventions to integrate with the centralized story configuration.

### Chapter ID Naming Convention

**CRITICAL:** Chapter IDs must be consistent across all files.

**Format:** `chapter{N}_{descriptive_name}`

**Rules:**
- Use lowercase letters only
- Use underscores (`_`) not hyphens in the ID itself
- Start with `chapter` + number
- Follow with descriptive name

**Examples:**
- ✅ `chapter1_tour`
- ✅ `chapter5_hitl`
- ✅ `chapter6_myhealth`
- ❌ `chapter1-tour` (hyphens not allowed in ID)
- ❌ `Chapter1_Tour` (uppercase not allowed)
- ❌ `ch1_tour` (must start with full word "chapter")

**Filename Convention:** Use hyphens in filename, not underscores

- Narrative file: `chapter1-tour.ts` (hyphens)
- Chapter ID: `chapter1_tour` (underscores)

### Required File Header

Every narrative file must include a header comment documenting:

```typescript
/**
 * Chapter N: Title
 * Story Bible: chapterN_name  // ← CRITICAL: Must match manifest
 * Filename: chapterN-name.ts
 *
 * Date / Notification Details:
 * - Date: [chapter date from story bible]
 * - Lock screen notification: "[title]"
 * - Notification body: "[body text]"
 *
 * Variables used:
 * - {variableName}: Description — Usage context
 *
 * Required Actions:
 * - action_id — Description of what triggers this action
 *
 * Assumptions / inferences:
 * - [Document any assumptions made during generation]
 */
```

**Critical header fields:**
- **Story Bible key** - Must match `storyManifest.ts` and `storyBible.ts`
- **Required Actions** - Document all action gate IDs used in script
- **Variables** - List all placeholder variables with descriptions

### Required Exports

Every narrative file must export exactly these items (no more, no less):

```typescript
// 1. Interface definitions (copy these exactly)
export interface ConversationTurn { ... }
export interface CastMember { ... }

// 2. Utility function (standard implementation)
export function interpolateText(text: string, variables: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
}

// 3. Chapter script
export const chapterNScript: ConversationTurn[] = [ ... ];

// 4. Cast members
export const chapterNCast: CastMember[] = [ ... ];

// 5. Default variables
export const chapterNDefaultVariables: Record<string, string> = { ... };

// 6. Disclaimer
export const chapterNDisclaimer = "...";
```

### What NOT to Export

**REMOVED in refactoring:** `chapterNStoryBible`

This export is **no longer needed** and should not be included. Story bible data now lives in the centralized `/src/data/storyBible.ts` file.

```typescript
// ❌ DO NOT EXPORT (obsolete after refactoring)
export const chapterNStoryBible = {
  chapter: N,
  flowId: '...',
  title: '...',
  facts: { ... },
  labelsByKey: { ... },
};
```

### Cross-File Dependencies

The chapter ID in the narrative file must match across **4 locations**:

**1. Narrative file header:**
```typescript
// /src/data/narratives/chapter5-hitl.ts
/**
 * Story Bible: chapter5_hitl  // ← Must match
 */
```

**2. Story manifest:**
```typescript
// /src/data/storyManifest.ts
{
  id: 'chapter5_hitl',  // ← Must match
  narrativeModulePath: './narratives/chapter5-hitl',
  storyBibleKey: 'chapter5_hitl',  // ← Must match
}
```

**3. Story bible:**
```typescript
// /src/data/storyBible.ts
chapters: {
  chapter5_hitl: {  // ← Must match
    date: new Date(...),
    notification: { ... }
  }
}
```

**4. Chapter component:**
```typescript
// /src/app/chapters/Chapter5_HITL.tsx
const CHAPTER_ID = 'chapter5_hitl';  // ← Must match
```

### Action Gate ID Conventions

Action gates use namespaced IDs for clarity:

**Formats:**
- Navigation actions: `navigation:{action_name}`
  - Example: `navigation:get_care_clicked`
- UI element actions: `action:{element_id}`
  - Example: `action:followup_visit`, `action:take_me_there`
- Component actions: `{component}:{action_name}`
  - Example: `service_card:next_steps_clicked`

**Documentation requirement:**
All action gate IDs must be documented in the file header under "Required Actions":

```typescript
/**
 * Required Actions:
 * - action:take_me_there — Triggered when member taps ServiceCard "Take me there" button
 * - navigation:my_health_clicked — Triggered when member taps My Health nav item
 */
```

### Integration Checklist

When creating a new narrative file, verify:

- [ ] Chapter ID uses correct format (`chapterN_name`)
- [ ] Filename uses hyphens (`chapterN-name.ts`)
- [ ] Header includes Story Bible key matching manifest
- [ ] All action gates documented in header
- [ ] Required exports present (script, cast, variables, disclaimer)
- [ ] `chapterNStoryBible` export removed (obsolete)
- [ ] Chapter ID will be added to `storyManifest.ts`
- [ ] Chapter entry will be added to `storyBible.ts`
- [ ] Chapter component will use matching `CHAPTER_ID` constant
