# Video Visit Components

Mock video visit interface for wellness exams and virtual appointments.

## Components

### `VideoVisit.tsx`

Active video visit interface with provider video feed, self-view picture-in-picture, and call controls.

**Props:**
- `providerName: string` - Provider full name (displayed in header)
- `duration: string` - Call duration timer (e.g., "18:00")
- `onEndCall: () => void` - End call button handler

**Features:**
- **Provider video feed** - Full-screen background showing provider
- **Self-view PiP** - Bottom-right corner with camera flip button
- **Call controls:**
  - Red "End call" button (bottom left)
  - Microphone toggle (left side)
  - Video toggle (left side)
- **Header overlay** - Provider name and duration with frosted glass effect

**Important:** This is a **mock interface only**. No actual WebRTC or video streaming is implemented. The component displays static images to simulate an active video call.

**Story Bible Dependencies:**
- Provider name: `chapter2DefaultVariables.providerName` or `storyBible.providers[providerKey].name`
- Duration: Passed as prop from chapter logic

**Design Source:** `/src/imports/VideoScreen/VideoScreen.tsx`

**Usage:**
```tsx
import { VideoVisit } from './VideoVisit';

<VideoVisit
  providerName={chapter2DefaultVariables.providerName}
  duration={chapter2DefaultVariables.duration}
  onEndCall={() => navigate('/chapter3')}
/>
```

**When to use:**
- Chapter 2: Wellness exam video visit
- Any virtual appointment simulation
- Video call mockups

**Design Notes:**
- Full-screen (375×812px on mobile)
- Black background with provider image overlay
- Frosted glass effects on PiP and header
- iOS-style controls (rounded buttons, blur effects)
- Self-view dimensions: 128.64×171.52px
- Call button: Red (#e72218) with white phone icon

**Interaction Flow:**
1. Component mounts → Video interface displays
2. User clicks "End call" → `onEndCall()` fires
3. Navigate to next screen (typically post-visit chat or summary)

## Before Creating a New Video Component

- This is the **only** video component needed for the prototype
- Variations (different providers, call states) should be handled via props
- Do not implement actual video streaming
- Maintain the mock interface pattern per Guidelines.md
