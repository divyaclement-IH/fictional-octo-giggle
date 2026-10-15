# App Architecture Guidelines

**Scope:** Desktop wrapper, chapter-specific app state, adding new chapters  
**Related files:** `app-navigation.md`, `chat-scripts.md`

---

## Viewport & Wrapper

**On desktop/tablet viewports (≥640px / sm breakpoint):**
- Center app in fixed phone frame: **375×812px**
- **24px corner radius**, overflow hidden
- Subtle shadow for depth
- Full-viewport background: **#5D5D69** (or equivalent neutral)
- Outer container: `min-h-screen`, flex center, padding (frame never touches edges)

**On mobile viewports (<640px):**
- Hide wrapper completely
- App fills viewport edge-to-edge
- Same app content, no simulated phone chrome

**Implementation:**
- Use Tailwind responsive utilities (`sm:` prefix for ≥640px)
- Wrapper is infrastructure (not a visual component requiring Figma design)
- App components inside frame remain unchanged regardless of wrapper visibility

---

## Chapter-Specific App State

**Location:** `/src/data/appState.ts`

**Purpose:** Manages content displayed in app navigation screens (My Health, Get Care, My Plan) that changes based on chapter progression.

**Pattern:**
```typescript
// Type definitions for screen data
export interface ActivityItem { ... }
export interface MedicationItem { ... }
export interface CareTeamMember { ... }

// Chapter-specific state
export const chapter6AppState: ChapterAppState = {
  myHealth: {
    activity: { items: [...] },
    medicine: { resolvedRows: [...] },
    careTeam: { members: [...] }
  }
};

// Configuration mapping chapters to states
export const appStateConfig: AppStateConfig = {
  chapters: {
    'chapter6_myhealth': chapter6AppState,
    // Future chapters added here
  }
};

// Utility to get state for current chapter
export function getAppStateForChapter(chapterId: string): ChapterAppState {
  return appStateConfig.chapters[chapterId] || {};
}
```

**Usage in screens:**
```typescript
function MyHealthScreen() {
  const journey = useJourneyOptional();
  const chapterState = getAppStateForChapter(journey?.currentChapter || '');
  const myHealthData = chapterState.myHealth;
  
  // Render tabs with chapter-specific data
  return <ActivityTab items={myHealthData.activity.items} />;
}
```

**When to use:**
- App navigation screens that show different content per chapter
- Exploration chapters where user navigates between screens
- Screens that need chapter-specific lists, details, or states

**When NOT to use:**
- Chat conversation content (use chapter script files)
- Lock screen notifications (use story bible)
- Static component content (hardcode or use props)

---

## Deep Linking to App Navigation Screens

**Purpose:** Control exactly which screen, tab, or detail screen the user lands on when transitioning to app navigation from chat, lock screen, or other contexts.

### AppNavigationShell Deep Link Props

**CRITICAL:** Pass props directly to `AppNavigationShell`, not to `AppNavProvider`. AppNavigationShell wraps its own provider internally - wrapping it in another provider causes the inner defaults to override your props.

```typescript
<AppNavigationShell
  key="unique-key"                        // Forces remount when switching chapters
  initialScreen="home"                    // Main screen: 'home' | 'my-health' | 'get-care' | 'my-plan'
  initialTab={null}                       // Optional: tab within screen (null for no tab, or 'activity', 'medicine', etc.)
  initialDetailScreen="activity-detail"   // Optional: detail screen overlay
  initialDetailScreenProps={{ id: '123' }} // Optional: props for detail screen
/>
```

### Common Use Cases

**1. Notification → Today Screen**
```typescript
// User taps notification, lands on home screen
<AppNavigationShell
  key="chapter7-home"
  initialScreen="home"
  initialTab={null}
/>
```

**2. Notification → Activity Detail**
```typescript
// User taps notification about specific activity, deep links to detail screen
<AppNavigationShell
  key="notification-activity"
  initialScreen="my-health"
  initialTab="activity"
  initialDetailScreen="activity-detail"
  initialDetailScreenProps={{ activityId: 'colonoscopy-2026-03-22' }}
/>
```

**3. Chat → Medication Detail**
```typescript
// User clicks medication link in chat, lands on medication detail
<AppNavigationShell
  key="chat-medication"
  initialScreen="my-health"
  initialTab="medicine"
  initialDetailScreen="prescription-detail"
  initialDetailScreenProps={{ prescriptionId: 'lisinopril-10mg' }}
/>
```

**4. Chapter Flow → Specific Tab**
```typescript
// Chapter 6 starts on My Health Activity tab
<AppNavigationShell
  key="chapter6-myhealth"
  initialScreen="my-health"
  initialTab="activity"
/>
```

### Screen Names Reference

**Main Screens (bottom navigation):**
- `'home'` - Today screen with upcoming appointments and actions
- `'my-health'` - My Health with Activity, Medicine, Care Team tabs
- `'get-care'` - Get Care (placeholder)
- `'my-plan'` - My Plan (placeholder)

**Detail Screens (overlays):**
- `'activity-detail'` - Activity detail screen (requires `activityId` prop)
- `'prescription-detail'` - Medication detail screen (requires `prescriptionId` prop)
- Add custom detail screens as needed

### Implementation Pattern in Chapters

**CRITICAL:** Pass props directly to `AppNavigationShell`, do NOT wrap it in `AppNavProvider`.

AppNavigationShell creates its own AppNavProvider internally. Wrapping it in another provider causes the inner defaults to win.

```typescript
const [viewState, setViewState] = useState<'lock' | 'chat' | 'app_navigation'>('lock');
const [deepLinkTarget, setDeepLinkTarget] = useState<{
  screen: MainScreen;
  tab?: string | null;
  detailScreen?: string;
  detailProps?: any;
}>({ screen: 'home', tab: null });

// When user clicks notification about activity
const handleNotificationTap = () => {
  setDeepLinkTarget({
    screen: 'my-health',
    tab: 'activity',
    detailScreen: 'activity-detail',
    detailProps: { activityId: 'colonoscopy-2026-03-22' }
  });
  setViewState('app_navigation');
};

// Render - pass props DIRECTLY to AppNavigationShell
if (viewState === 'app_navigation') {
  return (
    <AppNavigationShell
      key="unique-key-per-chapter"
      initialScreen={deepLinkTarget.screen}
      initialTab={deepLinkTarget.tab}
      initialDetailScreen={deepLinkTarget.detailScreen}
      initialDetailScreenProps={deepLinkTarget.detailProps}
    />
  );
}

// ❌ WRONG - Do NOT wrap in AppNavProvider
if (viewState === 'app_navigation') {
  return (
    <AppNavProvider initialScreen="home">
      <AppNavigationShell />  {/* Shell defaults to my-health/activity, outer provider is ignored */}
    </AppNavProvider>
  );
}
```

### Notes

- Deep link props only apply on initial mount
- Once AppNavProvider is mounted, user can navigate freely
- To force a new deep link, unmount and remount AppNavProvider with new props
- Detail screens automatically hide bottom navigation
- Use `openDetailScreen()` from `useAppNav()` for runtime navigation (not initial mount)

---

## Prototype Guide (Developer Tool)

**Location:** `/src/app/components/PrototypeGuide.tsx`

**Purpose:** Developer/design reference modal with tabbed navigation for browsing chapters, components, and prototype information.

### Accessing the Prototype Guide

**Trigger:** Press **ESC key** (when not typing in an input field)
- Opens modal overlay outside phone frame
- Full viewport display (max-w-6xl, centered)
- Click backdrop or close button to dismiss

### Tab Structure

**Navigation Tab:**
- Lists all chapters from `CHAPTER_ORDER` in `JourneyContext.tsx`
- Displays chapter title and short description
- Chapters shown in 2-column layout
- Final item: "App Navigation Test" link
- **Behavior:** Clicking a chapter closes modal and navigates to that route

**Components Tab:**
- Full component library (formerly "Style Guide")
- All reusable components with live examples
- Collapsible category sections
- Uses `StyleGuideContent` from `StyleGuide.tsx`

**About Tab:**
- Placeholder for prototype information and links
- Reserved for future content

### Chapter Metadata

**Location:** `/src/app/context/JourneyContext.tsx`

```typescript
export const CHAPTER_METADATA: Record<string, { 
  title: string; 
  description: string; 
  route: string 
}> = {
  chapter1_tour: {
    title: 'Chapter 1: App Tour',
    description: 'Introduction to the Included Health app and Dot virtual assistant',
    route: '/chapter1'
  },
  // ... additional chapters
};
```

**Usage:**
- Powers Prototype Guide Navigation tab
- Provides user-friendly chapter titles and descriptions
- Maps chapter IDs to routes for navigation
- **Must be updated** when adding new chapters

### Implementation Details

- Uses `TabNavigation` component (same as My Health/Get Care)
- Chapter list dynamically generated from `CHAPTER_ORDER`
- App Navigation Test always appears as final item
- Clicking chapter/test item: `onClose()` → `navigate(route)`
- Modal rendered outside `DesktopWrapper` for full viewport access

---

## Time and Date Formatting

**Location:** `/src/utils/formatters.ts`

**Critical Convention:** All times in the app use **12-hour format without AM/PM** on lock screens and status bars (iOS style).

### Time Format Rules

**Lock Screen & Status Bar:**
- ✅ **12-hour format, no AM/PM**: "9:41", "2:30", "11:15"
- ❌ **24-hour format**: Never use "14:30" or "21:00"
- ❌ **With AM/PM**: Never use "9:41 AM" or "2:30 PM" on lock screen/status bar

**Notifications & Chat:**
- ✅ **12-hour format with AM/PM**: "11:15 AM", "4:00 PM"
- Used for notification timestamps and chat system messages

### Formatter Functions

```typescript
// Lock screen large time display - 12-hour, no AM/PM
formatLockScreenTime(date)  // "11:15" or "2:30"

// Status bar time - 12-hour, no AM/PM  
formatStatusBarTime(date)   // "9:41" or "2:30"

// Notifications - 12-hour with AM/PM
formatNotificationTime(date) // "11:15 AM" or "4:00 PM"

// Appointments - Full date/time
formatAppointmentDateTime(date) // "Friday, Jan 8 at 9:30 AM"
```

**Implementation:**
- Both lock screen and status bar formatters use `hour12: true` with `.replace(/\s?(AM|PM)/i, '')` to strip AM/PM
- Always use these formatters, never format dates/times directly in components
- All dates come from story bible (`/src/data/storyBible.ts`)

---

## Adding New Chapters

### Standard Chapter Structure

All chapters follow this consistent file organization:

**1. Narrative Script:** `/src/data/narratives/chapterN-name.ts`
```typescript
// Chapter N: Description
export interface ConversationTurn { ... }
export const chapterNScript: ConversationTurn[] = [ ... ];
export function interpolateText(text: string, variables: Record<string, string>): string { ... }
export const chapterNDefaultVariables: Record<string, string> = { ... };
export const chapterNDisclaimer = "...";
```

**2. Chapter Component:** `/src/app/chapters/ChapterN_Name.tsx`
```typescript
// Manages view state (lock screen, chat, other views)
// Integrates with StoryBible and Journey contexts
// Handles navigation between views
export default function ChapterNName() { ... }
```

**3. Story Bible Entry:** `/src/data/storyBible.ts`
```typescript
chapters: {
  chapterN_name: {
    date: new Date(...),
    notification: { title: "...", body: "..." }
  }
}
```

**4. Story Manifest Entry:** `/src/data/storyManifest.ts`
```typescript
import ChapterNName from '@/app/chapters/ChapterN_Name';
// ...
export const STORY_MANIFEST = {
  chapters: [
    // ...
    {
      id: 'chapterN_name',
      title: 'Chapter N: Name',
      description: 'Short description',
      route: '/chapterN',
      component: ChapterNName,
      narrativeModulePath: './narratives/chapterN-name',
      storyBibleKey: 'chapterN_name',
      usesLockScreen: true, // or false
      usesAppNavigation: false, // or true
    },
  ],
};
```

**Note:** Routes, CHAPTER_ORDER, and CHAPTER_METADATA are automatically derived from the manifest.

### Adding a New Chapter

When adding new chapters beyond initial scope:

1. User provides chapter requirements + Figma designs
2. **Create narrative script** at `/src/data/narratives/chapterN-name.ts` using ConversationTurn interface
3. **Add story bible entry** with chapter date and notification details to `/src/data/storyBible.ts`
4. **Create chapter component** at `/src/app/chapters/ChapterN_Name.tsx` following established pattern
   - Use `const CHAPTER_ID = 'chapterN_name'` at top of component
   - Use `getNextChapterRoute(CHAPTER_ID)` for navigation
   - Use `story.chapters[CHAPTER_ID]` to access storyBible data
5. **Add manifest entry** to `/src/data/storyManifest.ts` (single edit point)
   - Import chapter component
   - Add chapter object to manifest.chapters array
6. **Optional: Add app state** if chapter uses app navigation screens (`appState.ts`)
7. **Build required components** per Figma designs (check catalog first for reuse)
8. **Document new components** in appropriate category READMEs + StyleGuide.tsx (Components tab)

Routes, JourneyContext metadata, and PrototypeGuide listings are automatically derived from the manifest.

### Scope Management

- Project may expand beyond initial 7 chapters
- Architecture must support scalable chapter addition
- Each new chapter requires Figma design before implementation
