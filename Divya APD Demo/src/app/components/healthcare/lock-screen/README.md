# Lock Screen Components

Reusable iOS lock screen components per §6.1 and §6.2 of the APD Stakeholder Plan.

## Components

### `LockScreen.tsx`

Main lock screen container with status bar, time, date, and optional notification area.

**Props:**
- `dateTime: Date` - Date/time for this lock screen moment (from story bible)
- `notification?: ReactNode` - Notification component to display (optional)
- `onNotificationTap?: () => void` - Handler for notification tap

**Story Bible Dependencies:**
- Date/time values must come from `storyBible.chapters[chapterKey].date`
- Ensures consistency across all lock screens in the journey

**Usage:**
```tsx
import { LockScreen } from './LockScreen';
import { LockNotification } from './LockNotification';
import { useStoryBible } from '../../../context/StoryBibleContext';

function Chapter1() {
  const story = useStoryBible();
  const chapterData = story.chapters.chapter1_tour;

  return (
    <LockScreen
      dateTime={chapterData.date}
      notification={
        <LockNotification
          title={chapterData.notification.title}
          body={chapterData.notification.body}
          timestamp={chapterData.date}
        />
      }
      onNotificationTap={() => {
        // Navigate to next screen
      }}
    />
  );
}
```

### `LockNotification.tsx`

iOS push notification card with frosted glass effect.

**Props:**
- `title: string` - Notification title
- `body: string` - Notification body text
- `timestamp: Date` - Timestamp for notification

**Story Bible Dependencies:**
- Title/body text from `storyBible.chapters[chapterKey].notification`
- Timestamp from `storyBible.chapters[chapterKey].date`

**Design Notes:**
- Frosted glass/blur effect per iOS design language
- App icon: Included Health logo on blue background
- Fixed width (358px) for consistent presentation
- White text with semi-transparent backgrounds

## When to Use

Use these components for:
- Chapter entry points (Tour, Wellness, Specialist Day, Follow-up)
- Any screen that should appear as a lock screen notification
- Day-of appointment reminders with insurance access

## Design Source

Adapted from Figma import: `/src/imports/IOsLockScreen/IOsLockScreen.tsx`

Design fidelity: Match exact spacing, typography, blur effects, and colors from Figma.

## Variants

**Standard lock screen:**
```tsx
<LockScreen dateTime={date} />
```

**Lock screen with notification:**
```tsx
<LockScreen
  dateTime={date}
  notification={<LockNotification title="..." body="..." timestamp={date} />}
  onNotificationTap={handleTap}
/>
```

**Lock screen with insurance gesture (Chapter 4):**
See `InsuranceCard.tsx` for press-and-hold overlay variant.
