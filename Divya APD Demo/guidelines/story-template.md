# Story Template Guide

**Purpose:** This guide explains how to swap or extend the story content in this prototype while preserving the reusable engine architecture.

---

## Architecture Overview

This prototype separates **reusable engine code** from **story-specific content**, enabling you to tell different stories (e.g., healthcare onboarding, e-commerce tutorial, game walkthrough) without rewriting core functionality.

### Reusable Engine (don't change for new stories)

These components work with any story:

- **Chat runtime** - `ChatContainer`, action gates, timing system
- **Chapter progression** - `JourneyContext` (progression logic, action gates)
- **Routing infrastructure** - `App.tsx` auto-generates routes from manifest
- **Context providers** - `StoryBibleContext`, `JourneyProvider`, `AppNavProvider`
- **Generic UI components** - `SecondaryNavigation`, `TabNavigation`, `StatusBar`, `DesktopWrapper`
- **Navigation helpers** - `getNextChapterRoute()`, `getPreviousChapterRoute()`

### Story-Specific Content (change for new stories)

These files contain your story:

- **`storyManifest.ts`** - Chapter list, order, routes, metadata (single source of truth)
- **`storyBible.ts`** - Domain schema (characters, entities, timeline)
- **`/src/data/narratives/*.ts`** - Conversation scripts using `ConversationTurn` interface
- **`/src/app/chapters/*.tsx`** - Chapter screen implementations
- **`/src/app/components/{domain}/`** - Domain-specific components (healthcare → products, providers → NPCs, etc.)
- **`appState.ts`** - Optional, only if using app navigation pattern

---

## Swapping Stories: Step-by-Step Checklist

### Step 1: Define Your Story Manifest

**File:** `/src/data/storyManifest.ts`

This is your single source of truth for chapters. Update:

```typescript
import Chapter1Welcome from '@/app/chapters/Chapter1_Welcome';
import Chapter2Tutorial from '@/app/chapters/Chapter2_Tutorial';
// ... your chapter imports

export const STORY_MANIFEST = {
  chapters: [
    {
      id: 'chapter1_welcome',
      title: 'Chapter 1: Welcome',
      description: 'Introduction to your app',
      route: '/chapter1',
      component: Chapter1Welcome,
      narrativeModulePath: './narratives/chapter1-welcome',
      storyBibleKey: 'chapter1_welcome',
      usesLockScreen: true,
      usesAppNavigation: false,
    },
    // ... more chapters
  ],
  defaultRoute: '/chapter1',
} as const;
```

**Key fields:**
- `id` - Unique chapter ID (must match storyBible.chapters key)
- `title` / `description` - For Prototype Guide display
- `route` - URL path (auto-registered in App.tsx)
- `component` - React component to render
- `storyBibleKey` - Key in storyBible.chapters object
- `usesAppNavigation` - (Optional) Set true if chapter uses AppNavigationShell
- `usesLockScreen` - (Optional) Set true if chapter starts with lock screen

### Step 2: Create Story Bible

**File:** `/src/data/storyBible.ts`

Define your domain schema. The only **required** section for the engine is:

```typescript
export const storyBible = {
  // Required: Chapter timeline data
  chapters: {
    chapter1_welcome: {
      date: new Date(2026, 5, 1, 10, 0),
      notification: {
        title: "Welcome!",
        body: "Let's get started.",
      },
    },
    // ... more chapters
  },

  // Required: Protagonist/user info (field names are flexible)
  protagonist: {
    firstName: "Alex",
    // ... other fields as needed
  },

  // Optional: Your domain-specific schema
  products: {
    // ... product catalog
  },
  orders: {
    // ... order history  
  },
} as const;
```

**Important:**
- **`chapters`** - Required by engine (dates, notifications)
- **Protagonist field** - Required (can be named `member`, `user`, `protagonist`, `customer`, etc.)
- **Top-level schema** - Optional, define what your story needs

**Healthcare story example:**
```typescript
{
  providers: { ... },
  appointments: { ... },
  member: { firstName: "Charles", ... },
  chapters: { ... }
}
```

**E-commerce story example:**
```typescript
{
  products: { ... },
  orders: { ... },
  customer: { firstName: "Alex", ... },
  chapters: { ... }
}
```

### Step 3: Write Narrative Scripts

**Location:** `/src/data/narratives/chapter1-yourchapter.ts`

Use the `ConversationTurn` interface:

```typescript
export interface ConversationTurn {
  id: string;
  speaker: 'assistant' | 'user' | 'system' | string; // String allows custom speaker names
  type: 'utterance' | 'user_input' | 'ui_embed' | 'transition' | 'action_gate';
  text?: string;
  component?: string;
  expectation?: string;
  note?: string;
  requiredAction?: string; // For action gates
}

export const chapter1Script: ConversationTurn[] = [
  {
    id: 'welcome_001',
    speaker: 'assistant',
    type: 'utterance',
    text: "Hello {userName}! Welcome to our app.",
  },
  // ... more turns
];

export const chapter1DefaultVariables: Record<string, string> = {
  userName: 'Alex',
  appName: 'My App',
};

export const chapter1Disclaimer = "This is a prototype.";
```

**Required exports:**
- `chapterNScript: ConversationTurn[]`
- `chapterNDefaultVariables: Record<string, string>`
- `chapterNDisclaimer: string`

### Step 4: Build Chapter Components

**Location:** `/src/app/chapters/ChapterN_Name.tsx`

Follow this pattern:

```typescript
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useStoryBible } from '../context/StoryBibleContext';
import { useJourney } from '../context/JourneyContext';
import { getNextChapterRoute } from '../../utils/navigationHelpers';
// ... other imports

const CHAPTER_ID = 'chapter1_welcome'; // Constant at top

export default function Chapter1Welcome() {
  const story = useStoryBible();
  const { setCurrentChapter, completeChapter } = useJourney();
  const navigate = useNavigate();

  // Register chapter on mount
  useEffect(() => {
    setCurrentChapter(CHAPTER_ID);
  }, [setCurrentChapter]);

  const chapterData = story.chapters[CHAPTER_ID];

  const handleComplete = () => {
    completeChapter(CHAPTER_ID);
    const nextRoute = getNextChapterRoute(CHAPTER_ID);
    if (nextRoute) {
      navigate(nextRoute);
    }
  };

  // ... render your chapter UI
}
```

**Key patterns:**
- Define `CHAPTER_ID` constant at top
- Use `setCurrentChapter(CHAPTER_ID)` on mount
- Use `story.chapters[CHAPTER_ID]` to access data
- Use `getNextChapterRoute(CHAPTER_ID)` for navigation
- Call `completeChapter(CHAPTER_ID)` before navigating

### Step 5: Create Domain Components

**Location:** `/src/app/components/{yourDomain}/`

If your story needs domain-specific UI (not provided by healthcare components):

**Example:** E-commerce story might create:
- `/src/app/components/ecommerce/ProductCard.tsx`
- `/src/app/components/ecommerce/CartSummary.tsx`
- `/src/app/components/ecommerce/OrderHistory.tsx`

**Guidelines:**
- Follow design system patterns
- Document in `StyleGuide.tsx` (Components tab)
- Reuse generic UI components where possible

### Step 6: Optional - App Navigation State

**File:** `/src/data/appState.ts`

Only needed if your story uses app navigation screens (like My Health, Get Care, My Plan).

**When to use:**
- Chapter uses `AppNavigationShell` component
- Set `usesAppNavigation: true` in manifest
- Define screen data for navigation tabs

**When NOT to use:**
- Pure chat chapters
- Lock screen + chat chapters
- Single-screen chapters

**Example:**
```typescript
export const chapter6AppState: ChapterAppState = {
  myProducts: {
    items: [...], // Your domain data
  },
};

export const appStateConfig: AppStateConfig = {
  chapters: {
    'chapter6_products': chapter6AppState,
  }
};
```

---

## Required Contracts

### StoryBible Required Structure

```typescript
{
  // Required: Protagonist info
  protagonist: { // Can be named member/user/customer/player
    firstName: string,
    // ... other fields as needed
  },

  // Required: Chapter timeline
  chapters: {
    [chapterId: string]: {
      date: Date,
      notification?: { title: string; body: string } | null,
    }
  },

  // Optional: Your domain schema
  // ... any other fields
}
```

### Narrative Module Required Exports

```typescript
export const chapterNScript: ConversationTurn[];
export const chapterNDefaultVariables: Record<string, string>;
export const chapterNDisclaimer: string;
```

### Chapter Component Required Pattern

```typescript
const CHAPTER_ID = 'your_chapter_id'; // Must match manifest

export default function YourChapter() {
  const { setCurrentChapter, completeChapter } = useJourney();
  
  useEffect(() => {
    setCurrentChapter(CHAPTER_ID);
  }, [setCurrentChapter]);

  // Use getNextChapterRoute(CHAPTER_ID) for navigation
}
```

---

## UI Patterns (Optional per Story)

### Lock Screen / Phone Simulation

**Current healthcare story uses:**
- `LockScreen` component
- `DesktopWrapper` (phone frame on desktop)
- `StatusBar` (12-hour time without AM/PM)
- Notification system

**For different presentation modes:**
- Browser chrome simulation: Replace DesktopWrapper
- Desktop app: No phone frame needed
- Game HUD: Custom wrapper component

These are **story presentation choices**, not mandatory engine features.

### App Navigation Pattern

**Current healthcare story uses:**
- `AppNavigationShell` (bottom nav, multiple screens)
- `appState.ts` (screen-specific data)
- Tab navigation within screens

**Alternative patterns:**
- Pure chat story: No app navigation needed
- Linear tutorial: Just chat + transitions
- Free exploration: Custom navigation structure

---

## Examples by Story Type

### Healthcare Onboarding (Current)
- **Domain:** Providers, appointments, medications
- **Components:** `/components/healthcare/`
- **Screens:** My Health, Get Care, My Plan
- **Schema:** providers, appointments, member

### E-commerce Tutorial (Hypothetical)
- **Domain:** Products, cart, orders
- **Components:** `/components/ecommerce/`
- **Screens:** Product catalog, cart, order history
- **Schema:** products, orders, customer

### Game Walkthrough (Hypothetical)
- **Domain:** Characters, quests, inventory
- **Components:** `/components/game/`
- **Screens:** Quest log, inventory, map
- **Schema:** npcs, quests, player

### Educational Course (Hypothetical)
- **Domain:** Lessons, quizzes, progress
- **Components:** `/components/education/`
- **Screens:** Course list, lesson viewer, quiz
- **Schema:** courses, lessons, student

---

## Testing Your Story Swap

After swapping stories, verify:

1. **Routes work** - Navigate to each chapter by URL
2. **Progression works** - Complete chapter → auto-navigate to next
3. **Prototype Guide** - ESC opens guide, shows all chapters with correct metadata
4. **Action gates** - If using action gates, verify they trigger correctly
5. **TypeScript compiles** - No type errors, autocomplete works for chapter IDs
6. **Story independence** - Comment out old domain schema, verify engine still works

---

## Common Pitfalls

### ❌ Hardcoding chapter IDs
```typescript
// Bad:
setCurrentChapter('chapter1_tour');
navigate('/chapter2');

// Good:
const CHAPTER_ID = 'chapter1_tour';
setCurrentChapter(CHAPTER_ID);
const nextRoute = getNextChapterRoute(CHAPTER_ID);
if (nextRoute) navigate(nextRoute);
```

### ❌ Assuming storyBible schema
```typescript
// Bad:
const providerName = story.providers.primaryCare.name; // Only works for healthcare story

// Good:
const protagonistName = story.protagonist.firstName; // Works for any story
```

### ❌ Not updating manifest
```typescript
// Bad: Adding chapter component + route without updating manifest
// Good: Add to manifest, route auto-generates
```

---

## Reference Files

- **Manifest:** `/src/data/storyManifest.ts`
- **Story Bible:** `/src/data/storyBible.ts`
- **Narratives:** `/src/data/narratives/*.ts`
- **Chapters:** `/src/app/chapters/*.tsx`
- **Navigation Helpers:** `/src/utils/navigationHelpers.ts`
- **App State:** `/src/data/appState.ts` (optional)

---

## Questions?

See current healthcare story implementation as reference:
- Manifest defines 6 chapters
- StoryBible has healthcare schema
- Narratives use ConversationTurn interface
- Chapters use navigation helpers
- Components in `/components/healthcare/`
