# Chapter Script Template with Action Gates

## Quick Start: Adding an Action Gate to Your Script

Copy this pattern into your chapter script file (e.g., `chapter2-wellness.ts`):

```typescript
export const chapterXScript: ConversationTurn[] = [
  // ... your normal conversation turns ...
  
  {
    id: 'pause_for_exploration',           // Unique ID for this turn
    speaker: 'dot',                         // Who's "speaking"
    type: 'action_gate',                    // Special type for interactive pauses
    text: "Go ahead and explore the [feature name]. I'll be here when you're ready.",
    requiredAction: 'namespace:action_name'   // What action unlocks the next beat
  },
  
  // Script automatically pauses here until the action is triggered
  
  {
    id: 'resume_after_exploration',
    speaker: 'dot',
    type: 'utterance',
    text: "Great work! Now let me explain what you just saw..."
  },
  
  // ... rest of your script ...
];
```

## Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `id` | string | Unique identifier | `'explore_wellness_dashboard'` |
| `speaker` | string | Who delivers the message | `'dot'`, `'system'`, `'sarah'` |
| `type` | string | Must be `'action_gate'` | `'action_gate'` |
| `text` | string | Message shown to user | `"Explore the dashboard..."` |
| `requiredAction` | string | Action ID to resume | `'wellness:viewed_history'` |

## Optional Fields

Currently, action gates only have one required field (`requiredAction`). All other ConversationTurn fields (like `text`, `id`, etc.) follow the standard pattern.

## Action Naming Convention

Format: `namespace:action_name`

**Suggested namespaces:**
- `wellness:` - Wellness/health tracking features
- `provider:` - Provider/specialist interactions
- `navigation:` - General navigation
- `appointment:` - Appointment-related actions
- `message:` - Chat/messaging actions

**Examples:**
- `wellness:viewed_history`
- `provider:selected_specialist`
- `navigation:visited_settings`
- `appointment:confirmed_booking`
- `message:sent_first_reply`

## Full Example Script

```typescript
import { ConversationTurn } from './chapter1-tour';

export const chapter2Script: ConversationTurn[] = [
  // Introduction
  {
    id: 'wellness_intro',
    speaker: 'dot',
    type: 'utterance',
    text: "Hi {userName}! Let's explore your wellness dashboard together."
  },
  
  // First action gate - let user explore
  {
    id: 'explore_dashboard',
    speaker: 'dot',
    type: 'action_gate',
    text: "Go ahead and tap on the wellness dashboard. Check out your activity history.",
    requiredAction: 'wellness:viewed_dashboard'
  },
  
  // Resume after exploration
  {
    id: 'dashboard_explanation',
    speaker: 'dot',
    type: 'utterance',
    text: "Great! Your dashboard shows your health metrics over time. You can set goals and track progress."
  },
  
  // Another action gate - deeper interaction
  {
    id: 'set_first_goal',
    speaker: 'dot',
    type: 'action_gate',
    text: "Try setting your first health goal. Tap 'Set Goal' to get started.",
    requiredAction: 'wellness:goal_created'
  },
  
  // Continue the story
  {
    id: 'goal_confirmation',
    speaker: 'dot',
    type: 'utterance',
    text: "Perfect! I'll remind you about your goal and track your progress."
  }
];
```

## What NOT to Do

### ❌ Don't use for simple questions
```typescript
// Bad - this should be user_input, not action_gate
{
  type: 'action_gate',
  text: "Are you ready to continue?",
  requiredAction: 'user:clicked_yes'  // Just use a button instead
}
```

### ❌ Don't create too many consecutive gates
```typescript
// Bad - too fragmented
{ requiredAction: 'wellness:step1' },
{ requiredAction: 'wellness:step2' },
{ requiredAction: 'wellness:step3' },

// Good - one gate for related exploration
{ requiredAction: 'wellness:tutorial_complete' }
```

## Testing Your Action Gate

1. **Add to script**: Include the action_gate turn in your chapter script
2. **Trigger from component**: Call `triggerAction('namespace:action_name')` when user performs the action
3. **Test the trigger**: Verify the script resumes correctly when action is triggered
4. **Test without triggering**: Ensure the script waits indefinitely (as designed for prototypes)

## Need Help?

See full documentation: `/docs/ACTION_GATES.md`
