# Skeleton Page Transition

Smooth page transition with skeleton loading state.

## Overview

Chapter 1 flow:
1. **Lock Screen** (`/chapter1`) → High-fidelity iOS design with notification
2. **Tap notification** → Navigates to `/chapter1-skeleton`
3. **Skeleton Page** → Health app interface with skeleton loaders
4. **After 500ms** → Navigates to `/chapter1-chat` (original chat with Dot)

## Usage

Start at `/chapter1` (or just `/` which redirects there). Tap the notification to begin the flow.

### Components

#### SkeletonPage
Health app interface with skeleton loading states.

```tsx
import { SkeletonPage } from '@/app/components/healthcare/skeleton/SkeletonPage';

<SkeletonPage />
```

Features:
- Health app interface with skeleton loaders
- Profile section, action cards, "Get care" cards
- Bottom navigation
- Auto-navigates to chat after 500ms delay


## Design Pattern

**Page transition sequence:**
- Lock Screen = High-fidelity iOS design with background image
- Skeleton = Medium-fidelity health app with skeleton loaders
- Chat = Original Chapter 1 chat interface with Dot

**Timing:**
- Lock → Skeleton: Page transition with 0.7s fade
- Skeleton → Chat: 1000ms delay (to show pulsing) then chat slides in from right (0.7s slide animation)

## Routes

**Chapter 1 Flow:**
1. `/chapter1` - Lock screen
2. `/chapter1-skeleton` - Skeleton page
3. `/chapter1-chat` - Chat with Dot

**Defined in:** `src/data/storyManifest.ts`
**Components:**
- `src/app/chapters/Chapter1_Tour.tsx` (lock screen)
- `src/app/chapters/Chapter1_Skeleton.tsx` (skeleton page wrapper)
- `src/app/chapters/Chapter1_Chat.tsx` (chat interface)
