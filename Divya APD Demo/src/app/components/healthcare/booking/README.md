# Booking Components

Request and booking progress components for tracking asynchronous operations.

## Components

### `RequestCard.tsx`

Flexible request status card with auto-advancing progress tracking or static display. **This is the primary booking/request component.**

**Props:**
- `title: string` - Request title (e.g., "Coverage check request")
- `description: string` - Request description
- `steps?: RequestStep[]` - Auto-advancing steps (optional)
- `initialStatus?: RequestStatus` - Status for static display (default: 'in_progress')
- `initialStatusText?: string` - Status text for static display (default: 'Processing')
- `showCancelButton?: boolean` - Show cancel button (default: false)
- `showWaitTime?: boolean` - Show typical wait time message (default: false)
- `waitTimeText?: string` - Custom wait time text
- `showDelayedWarning?: boolean` - Show delayed warning callout (default: false)
- `delayedWarningText?: string` - Custom delayed warning text
- `onCancel?: () => void` - Cancel button handler
- `onComplete?: () => void` - Called when all steps complete

**Types:**
```typescript
type RequestStatus = 'in_progress' | 'delayed' | 'canceled' | 'complete';

interface RequestStep {
  statusText: string;        // e.g., "Finding a specialist"
  statusType: RequestStatus; // Status type for this step
  duration?: number;         // Duration in ms (default: 2500)
}
```

**Design Source:** `/src/imports/RequestCardAdvocacy/` (multiple variants)

**Status Indicators:**
- **in_progress** - Blue sync arrows icon (#0012E7), blue text
- **delayed** - Orange alert triangle icon (#A55600), orange text
- **canceled** - Red close circle icon (#CB0C31), red text
- **complete** - Green check circle icon (#00835D), green text

**Optional Elements (controlled via props):**
- **Cancel button** - Shows when `showCancelButton={true}` and status is 'in_progress'
- **Wait time message** - Shows when `showWaitTime={true}` and status is 'in_progress'
- **Delayed warning** - Shows when `showDelayedWarning={true}` and status is not 'complete' or 'canceled'

**Icon Circle Colors:**
- **in_progress/delayed**: Light blue background (#E6EFFE), blue icon (#0012E7)
- **complete**: Light green background (#EAFAF1), green icon (#00835D)
- **canceled**: Light red background (#FDF2F1), red icon (#CB0C31)

**Usage Examples:**

```tsx
// Auto-advancing through steps (replaces ProgressTrackerCard)
<RequestCard
  title="Appointment booking request"
  description="Scheduling your appointment with a specialist."
  steps={[
    { statusText: 'Finding a specialist', statusType: 'in_progress', duration: 2500 },
    { statusText: 'Reviewing your request', statusType: 'in_progress', duration: 2500 },
    { statusText: 'Complete', statusType: 'complete', duration: 2500 },
  ]}
  showWaitTime={true}
  onComplete={() => console.log('Booking complete')}
/>

// Static display with cancel button
<RequestCard
  title="Coverage check request"
  description="Verifying In-lab sleep study coverage with a member of our care team."
  initialStatus="in_progress"
  initialStatusText="Reviewing your request"
  showCancelButton={true}
  showWaitTime={true}
  onCancel={() => handleCancelRequest()}
/>

// With delayed warning
<RequestCard
  title="Coverage check request"
  description="Verifying In-lab sleep study coverage with a member of our care team."
  initialStatus="in_progress"
  initialStatusText="Reviewing your request"
  showDelayedWarning={true}
  delayedWarningText="We're experiencing longer than usual wait times."
/>
```

**When to use:**
- Chapter 4: Appointment booking progress
- Coverage checks
- Specialist searches
- Any async request that needs status tracking

**Migration from ProgressTrackerCard:**
Old ProgressTrackerCard steps:
1. "Confirm availability"
2. "Contact specialist's office to schedule appointment"
3. "Notify member"

Map to RequestCard steps:
1. "Finding a specialist" (in_progress)
2. "Reviewing your request" (in_progress)
3. "Complete" (complete)

---

### `ProgressTrackerCard.tsx` (DEPRECATED)

**⚠️ This component has been replaced by `RequestCard.tsx`.**

Use `RequestCard` instead for all new implementations. The old ProgressTrackerCard is kept for backward compatibility but should not be used in new code.

**Props:**
- `onComplete?: () => void` - Callback when all steps complete

**Steps (Fixed):**
1. "Confirm availability"
2. "Contact specialist's office to schedule appointment"
3. "Notify member"

**To migrate:**
Replace with `RequestCard` using the steps mapping shown above.

---

## Common Patterns

### Auto-Advancing Progress
Use the `steps` array to automatically cycle through multiple statuses:

```typescript
steps={[
  { statusText: 'Step 1', statusType: 'in_progress', duration: 2000 },
  { statusText: 'Step 2', statusType: 'in_progress', duration: 2000 },
  { statusText: 'Done', statusType: 'complete', duration: 1000 },
]}
```

### Static Display
Omit `steps` and use `initialStatus` / `initialStatusText` for a card that doesn't auto-advance:

```typescript
initialStatus="in_progress"
initialStatusText="Reviewing your request"
```

### Conditional UI Elements
Show/hide optional elements based on use case:

```typescript
// Show cancel button only during active requests
showCancelButton={status === 'in_progress'}

// Show wait time for long-running operations
showWaitTime={true}

// Show delay warning when operations take longer than expected
showDelayedWarning={isDelayed}
```

## Status State Machine

Valid status transitions for auto-advancing:

```
in_progress → in_progress → complete
in_progress → delayed → complete
in_progress → canceled (manual via cancel button)
```

Once a request reaches `complete` or `canceled`, it does not transition further.
