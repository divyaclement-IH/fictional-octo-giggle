# Action Gates - Interactive Chapter Breaks

Action gates allow you to pause the scripted conversation and let users explore the app freely. The script resumes when a specific user action is triggered.

## Use Cases

- **UI Exploration**: Let users navigate screens and interact with features between story beats
- **Tutorial Breaks**: Allow hands-on practice before continuing instruction
- **Natural Pacing**: Give users breathing room during long narratives

## Script Syntax

Add an `action_gate` turn to your conversation script:

```typescript
export const chapterScript: ConversationTurn[] = [
  // ... conversation turns leading up to exploration ...
  
  {
    id: 'explore_wellness_dashboard',
    speaker: 'dot',
    type: 'action_gate',
    text: "Take a look around your wellness dashboard. I'll be here when you're ready to continue.",
    requiredAction: 'wellness:viewed_history'
  },
  
  // Script pauses here until 'wellness:viewed_history' is triggered
  
  {
    id: 'after_exploration',
    speaker: 'dot',
    type: 'utterance',
    text: "Great! I see you've looked at your wellness history. Let me explain what you saw..."
  }
];
```

### Field Reference

- **`requiredAction`** (required): The action ID that resumes the script
  - Format: `namespace:action_name`
  - Example: `wellness:viewed_history`, `provider:selected_specialist`

## Component Implementation

In your chapter component (e.g., `Chapter2_Wellness.tsx`):

```typescript
import { useJourney } from '../context/JourneyContext';

export default function Chapter2Wellness() {
  const { triggerAction } = useJourney();
  
  // When user performs the required action
  const handleViewWellnessHistory = () => {
    // Your component logic here
    // ...
    
    // Trigger the action to resume the script
    triggerAction('wellness:viewed_history');
  };
  
  return (
    <div>
      <button onClick={handleViewWellnessHistory}>
        View History
      </button>
    </div>
  );
}
```

### Deep Link Actions

For actions triggered by navigation:

```typescript
useEffect(() => {
  // If user navigated to this screen via a specific route
  if (location.pathname === '/wellness/history') {
    triggerAction('wellness:viewed_history');
  }
}, [location.pathname, triggerAction]);
```

## Action Naming Conventions

Use consistent namespace prefixes:

| Namespace | Purpose | Examples |
|-----------|---------|----------|
| `wellness:` | Wellness dashboard interactions | `wellness:viewed_history`, `wellness:set_goal` |
| `provider:` | Provider/specialist interactions | `provider:selected_specialist`, `provider:viewed_profile` |
| `navigation:` | Screen navigation | `navigation:visited_billing`, `navigation:opened_settings` |
| `appointment:` | Appointment actions | `appointment:confirmed`, `appointment:rescheduled` |
| `message:` | Messaging actions | `message:sent_reply`, `message:viewed_thread` |

## Best Practices

### 1. **Provide Clear Instructions**

```typescript
{
  text: "Go ahead and explore your wellness dashboard. Tap on 'View History' when you're ready.",
  // ✅ Clear what the user should do
}
```

### 2. **Group Related Explorations**

```typescript
// ❌ Don't create too many consecutive gates
{ requiredAction: 'wellness:viewed_tab1' },
{ requiredAction: 'wellness:viewed_tab2' },
{ requiredAction: 'wellness:viewed_tab3' },

// ✅ Use one gate for related exploration
{ requiredAction: 'wellness:finished_exploration' }
```

### 3. **Provide Escape Routes**

Consider adding visual hints or alternate paths:
- Show a "Continue anyway" button if the user gets stuck
- Display progress indicators for multi-step explorations
- Provide clear visual feedback when action is triggered

## Debugging

Enable action gate logging in your chapter:

```typescript
const { triggerAction } = useJourney();

const handleTrigger = (actionId: string) => {
  console.log('[ActionGate] Triggering:', actionId);
  triggerAction(actionId);
};
```

Check if an action gate is blocking:
1. Look at the ChatContainer - is `waitingForInput` stuck as `true`?
2. Check console for action gate registration
3. Verify the action ID matches exactly (case-sensitive)

## Complete Example

```typescript
// chapter2-wellness.ts
export const chapter2Script: ConversationTurn[] = [
  {
    id: 'wellness_intro',
    speaker: 'dot',
    type: 'utterance',
    text: "Now let's look at your wellness dashboard. It tracks your health goals and activities."
  },
  {
    id: 'explore_wellness',
    speaker: 'dot',
    type: 'action_gate',
    text: "Take a moment to explore your dashboard. Check out your activity history when you're ready.",
    requiredAction: 'wellness:viewed_history'
  },
  {
    id: 'wellness_explanation',
    speaker: 'dot',
    type: 'utterance',
    text: "Nice! Your wellness dashboard shows your progress over time. You can set new goals anytime."
  }
];
```

```typescript
// Chapter2_Wellness.tsx
export default function Chapter2Wellness() {
  const { triggerAction } = useJourney();
  const [view, setView] = useState<'chat' | 'dashboard'>('chat');
  
  const handleViewHistory = () => {
    setView('dashboard');
    // User can explore freely now
  };
  
  const handleOpenHistory = () => {
    // When they open the specific history screen
    triggerAction('wellness:viewed_history');
    // Script will automatically resume in the chat
  };
  
  return (
    <div>
      {view === 'chat' ? (
        <ChatContainer
          script={chapter2Script}
          variables={{ userName: 'Charles' }}
        />
      ) : (
        <WellnessDashboard onViewHistory={handleOpenHistory} />
      )}
    </div>
  );
}
```

## Migration from user_input

If you have existing patterns like this:

```typescript
// ❌ Old pattern
{
  type: 'user_input',
  text: "Type 'done' when finished exploring",
  expectation: 'done'
}
```

Convert to:

```typescript
// ✅ New pattern
{
  type: 'action_gate',
  text: "Explore the dashboard. I'll continue when you're ready.",
  requiredAction: 'wellness:exploration_complete'
}
```

And trigger programmatically instead of requiring text input.
