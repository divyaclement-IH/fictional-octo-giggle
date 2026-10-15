# Component-Specific Behaviors

**Scope:** Behavior patterns for specific components (Carousel, LockNotification, etc.)  
**Related files:** `components.md`, `chat-scripts.md`

---

## Carousel

The `Carousel` component automatically tracks which card is in view and updates the pagination dots accordingly. **Key behaviors:**

- **Auto-tracking dots**: No need to manually manage `activeIndex` prop - the component uses Intersection Observer to detect which card is currently visible (50% threshold)
- **Equal height cards**: All cards in a carousel automatically stretch to match the height of the tallest card (using `items-stretch`)
- **Snap scrolling**: Cards snap into position as user scrolls for smooth transitions

**Usage:**
```tsx
// ✅ CORRECT - Let component auto-track
<Carousel>
  <SpecialistCard {...} />
  <SpecialistCard {...} />
</Carousel>

// ❌ WRONG - Don't hardcode activeIndex
<Carousel activeIndex={0}>
  <SpecialistCard {...} />
</Carousel>
```

The `activeIndex` prop is optional and only used for setting the initial position. The component handles all dot updates automatically as the user scrolls.

---

## LockNotification

The `LockNotification` component supports **press-and-hold** interactions for special actions (like showing insurance card):

- **onTap**: Triggered by normal tap/click (short press)
- **onPressAndHold**: Triggered after holding for duration (default 500ms)
- **pressHoldDuration**: Customizable hold duration in milliseconds

**Usage:**
```tsx
<LockNotification
  title="Your visit is coming up"
  body="Press and hold to access your insurance card"
  timestamp={date}
  onTap={handleOpenChat}
  onPressAndHold={handleShowInsuranceCard}
  pressHoldDuration={500}
/>
```

This pattern allows one notification to support multiple interaction modes (quick tap vs long press).

---

## SecondaryNavigation

The `SecondaryNavigation` component supports 4 variants from IH Anatomy:

**Variants:**
1. **Simple** - Title only (no back button, no actions)
2. **With back** - Title + back arrow
3. **With actions** - Title + back + right actions (icon or text button)
4. **With subtitle** - Title + subtitle + back + actions

**Props:**
- `title: string` - Main heading (required)
- `subtitle?: string` - Optional subtitle below title
- `onBackClick?: () => void` - Back button handler (shows arrow if provided)
- `rightActions?: ReactNode` - Custom right-side content (icons, text buttons, etc.)

**Helper Components:**
```typescript
// For icon-based actions
<SecondaryNavIconButton icon={<YourIcon />} label="Info" onClick={...} />

// For text-based actions
<SecondaryNavTextButton text="Help" onClick={...} />
```

**Usage Examples:**
```tsx
// Simple - title only
<SecondaryNavigation title="Settings" />

// With back and text button
<SecondaryNavigation 
  title="Conversation" 
  onBackClick={() => navigate(-1)}
  rightActions={<SecondaryNavTextButton text="Help" onClick={...} />}
/>

// With subtitle and icon
<SecondaryNavigation 
  title="Messaging"
  subtitle="Sarah · Nurse Care Manager"
  onBackClick={() => navigate(-1)}
  rightActions={<SecondaryNavIconButton icon={<MenuIcon />} label="Menu" />}
/>
```

**Layout behavior:**
- Always preserves 48px left/right spacing (even when no actions present)
- Title is horizontally centered
- Subtitle appears below title, both center-aligned
- 48px fixed height

---

## CareTeamMemberCard

The `CareTeamMemberCard` component has two distinct variants based on provider type:

**Internal Providers (Included Health):**
- Blue star badge with IH logo on avatar
- Shows appointment slot buttons (up to 2 slots)
- "View full profile and availability" link
- Used for: PCPs, therapists, dietitians, care managers

**External Providers (Specialists):**
- No star badge on avatar
- "Schedule appointment" primary button
- "View full profile" outlined button
- Used for: External specialists, consultants

**Data Structure:**

```typescript
interface CareTeamMember {
  id: string;
  isInternal: boolean;              // Determines which variant to show
  relationshipLabel: string;        // "Your PCP", "Specialist", etc.
  displayName: string;              // "Dr. Elena Marquez"
  nameSuffix: string;               // ", MD"
  specialtyLine: string;            // "Internal Medicine"
  headshotFile: string;             // "elena-marquez.jpg"
  providerCatalogId: string;
  description: string;              // Bio text
  lastSeenDate?: string;            // "1/8/27" - for badge
  slots: {                          // Only shown for internal providers
    timeLabel: string;              // "4:00 pm"
    dayLabel: string;               // "Today", "Thu, Nov 13"
  }[];
}
```

**Usage:**

```tsx
<CareTeamMemberCard
  member={member}
  onSchedule={member.isInternal ? undefined : handleSchedule}  // External only
  onViewProfile={handleViewProfile}                             // Both variants
/>
```

The component automatically renders the correct variant based on `member.isInternal`.
