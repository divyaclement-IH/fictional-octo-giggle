# App Navigation Guidelines

**Scope:** App navigation shell, bottom navigation, exploration chapters  
**Related files:** `app-architecture.md`, `chat-scripts.md`

---

## App Navigation Shell

**Purpose:** Provides a complete navigation experience with bottom tabs, screens, and detail views for chapters that show the full app interface (e.g., Chapter 6: My Health Exploration).

**When to use:**
- Chapters that display the full app navigation (My Health, Get Care, My Plan, Today)
- Exploration chapters where users navigate between screens
- Chapters using action gates triggered by navigation clicks

**Structure:**

```
AppNavigationShell
├── StatusBar (story bible time)
├── SecondaryNavigation (screen title, optional back)
├── MainScreenRenderer
│   ├── MyHealthScreen (Activity/Medicine/Care Team tabs)
│   ├── GetCareScreen (placeholder)
│   ├── MyPlanScreen (placeholder)
│   └── HomeScreen (placeholder)
├── DetailScreenRenderer (overlays main screen when active)
└── BottomNavigation (4 tabs: Today, My Health, Get Care, My Plan)
```

**Key Components:**

1. **AppNavProvider** - Context managing navigation state
   - `currentScreen`: Which main screen is active
   - `currentTab`: Active tab within screen (e.g., 'activity' in My Health)
   - `detailScreen`: Detail view overlaying main screen (or null)
   - `navigateToScreen()`, `navigateToTab()`, `openDetailScreen()`, `closeDetailScreen()`

2. **BottomNavigation** - Main tab bar
   - Auto-highlights active screen
   - Triggers action gates when navigation occurs (e.g., `navigation:get_care_clicked`)
   - Hidden when detail screen is open

3. **Screen Components** - Full-screen views
   - MyHealthScreen: 3 tabs (Activity, Medicine, Care Team) with chapter-specific data from appState.ts
   - GetCare/MyPlan/Home: Placeholder screens (to be built)

**Data Pattern:**

Chapter-specific screen content comes from `appState.ts`:

```typescript
// /src/data/appState.ts
export const chapter6AppState: ChapterAppState = {
  myHealth: {
    activity: { items: [...] },
    medicine: { resolvedRows: [...] },
    careTeam: { members: [...] }
  }
};
```

Screens use `getAppStateForChapter(journey.currentChapter)` to load the right data.

**Key Behaviors:**
- Bottom nav triggers action gates on navigation (e.g., clicking "Get Care" fires `navigation:get_care_clicked`)
- Detail screens hide bottom nav and show back button
- Scroll is contained within main content area (not whole shell)
- Story bible date determines "Today" tab calendar number

---

## Exploration Chapters (e.g., Chapter 6 My Health)

Chapter 6 demonstrates the **exploration chapter pattern** with app navigation and action gates:

**Script Structure** (`chapter6-myhealth.ts`):
```typescript
export const chapter6Script: ConversationTurn[] = [
  {
    id: 'my_health_exploration_001',
    speaker: 'system',
    type: 'action_gate',
    component: 'My Health Section of the App',
    note: 'Member explores My Health tabs. Script resumes when user navigates to Get Care.',
    requiredAction: 'navigation:get_care_clicked',
  },
];
```

**Chapter Component** (`Chapter6_MyHealth.tsx`):
```typescript
export default function Chapter6MyHealth() {
  const { setCurrentChapter, completeChapter, registerActionGate, clearActionGate } = useJourney();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentChapter('chapter6_myhealth');
  }, [setCurrentChapter]);

  // Register action gate
  useEffect(() => {
    const actionId = 'navigation:get_care_clicked';
    registerActionGate(actionId, () => {
      completeChapter('chapter6_myhealth');
      navigate('/chapter7');
    });
    return () => clearActionGate(actionId);
  }, []);

  return (
    <AppNavProvider initialScreen="my-health" initialTab="activity">
      <AppNavigationShell />
    </AppNavProvider>
  );
}
```

**Action Gate Integration** (`BottomNavigation.tsx`):
```typescript
const handleNavigate = (screen: MainScreen) => {
  // Trigger action gate when Get Care is clicked
  if (screen === 'get-care' && journey) {
    journey.triggerAction('navigation:get_care_clicked');
  }
  onNavigate(screen);
};
```

**Key Patterns:**
- No chat interface - just app navigation shell
- Action gate in script with no `text` field (silent pause)
- Bottom navigation triggers action on click
- Screen data comes from `appState.ts` via `getAppStateForChapter()`
- Chapter completes and navigates to next chapter when action triggered

**When to use this pattern:**
- Exploration chapters (no conversation, just UI interaction)
- Tutorial chapters teaching navigation
- Free-form chapters between story beats
