# Component Guidelines

**Scope:** Component reuse, generic vs feature-specific patterns, documentation  
**Related files:** `component-behaviors.md`, `assets-and-icons.md`

---

## Component Catalog & Reuse

**BEFORE building any component, check the component catalog:**

📚 **Master Catalog:** `/src/app/components/healthcare/README.md`

This catalog documents all 22+ existing components across 7 categories:
- Lock screen components (LockScreen, LockNotification)
- Chat components (ChatContainer, MessageBubble, ChatInput, QuickReply, Avatar, ChatDisclaimer)
- Card components (Carousel, ConfirmationCard, ServiceCard, ProviderCard, SpecialistCard, VisitCompleteCard, PlaceholderComponents, CareTeamMemberCard, ForYouItem, ServiceItem, ServiceGroup)
- Video visit components (VideoVisit)
- Booking components (ProgressTrackerCard)
- Specialist components (SpecialistProfile, CareComparison)
- UI components (SearchField, FilterBar, Chip, PillIcon)
- App navigation components (AppNavigationShell, BottomNavigation, MyHealthScreen, GetCareScreen)

**Check the catalog to:**
1. Avoid rebuilding existing components
2. Find similar components that can be customized with props
3. Understand what's already available
4. Maintain consistency across chapters

**Category READMEs:**
- `/src/app/components/healthcare/lock-screen/README.md`
- `/src/app/components/healthcare/chat/README.md`
- `/src/app/components/healthcare/cards/README.md`
- `/src/app/components/healthcare/video/README.md`
- `/src/app/components/healthcare/booking/README.md`
- `/src/app/components/healthcare/specialist/README.md`
- `/src/app/components/ui/README.md` (generic reusable UI components)
- `/src/app/components/app-navigation/README.md` (navigation shell and screens)

### Get Care Components

**ForYouItem** (`/src/app/components/healthcare/cards/ForYouItem.tsx`)
- Personalized content recommendation card
- Features: image, trash button, title, optional chips (max 2), summary text
- Props:
  - `imageSrc`: Image URL for the card
  - `title`: Content title
  - `chips`: Array of chip objects with label, variant, and optional icon
  - `summary`: Description text
  - `showBorder`: Whether to display bottom border (default true)
  - `onClick`: Handler when card is tapped
  - `onRemove`: Handler when trash button is clicked
- Usage: Get Care "For You" tab for personalized content feeds
- Pattern: Uses existing Chip component for tags, implements showBorder pattern like ActivityListItem

**ServiceItem** (`/src/app/components/healthcare/cards/ServiceItem.tsx`)
- Individual service card for service listings
- Visual variants:
  - Internal (IH): Blue background (#E6EFFE) with blue icon (#002380)
  - External: Gray background (#FAFAFA) with black icon
- Props:
  - `name`: Service name
  - `isExternal`: Boolean for external services (affects styling)
  - `icon`: Optional custom icon/logo component
  - `onClick`: Handler for clickable services
- Usage: Get Care "Services" tab for service listings
- Note: Currently uses placeholder icon, designed for future logo integration

**ServiceGroup** (`/src/app/components/healthcare/cards/ServiceGroup.tsx`)
- Groups related services with title header
- Props:
  - `title`: Group heading (e.g., "Common Searches", "Everyday Care")
  - `services`: Array of ServiceItem props
- Behavior: Auto-hides if services array is empty
- Usage: Organize services by category in Get Care Services tab
- Pattern: Flexible title allows dynamic group naming

### Today Components

**PromptInput** (`/src/app/components/ui/PromptInput.tsx`)
- Chat input variant for prompting conversations outside messaging interface
- Features: Dot icon, placeholder text, send button, semi-transparent background
- Props:
  - `placeholder`: Placeholder text (default "Ask Dot...")
  - `onClick`: Handler when input area is clicked
  - `onSubmit`: Handler when send button is clicked
- Usage: Today screen to initiate conversations with Dot
- Pattern: Different from ChatInput - designed for use over gradient backgrounds

**PromptChip** (`/src/app/components/ui/PromptChip.tsx`)
- Interactive chip for quick prompt suggestions
- Visual: White background with blue text, rounded corners
- Props:
  - `label`: Chip text
  - `onClick`: Handler when chip is clicked
- Usage: Today screen below Dot prompt input for quick actions
- Note: Different from Chip component - larger size, interactive styling

**ChipScroller** (`/src/app/components/ui/ChipScroller.tsx`)
- Horizontal scrolling container for chips
- Similar to Carousel but without pagination dots
- Props:
  - `children`: PromptChip components to display
- Behavior: Horizontal scroll with snap points, hidden scrollbar
- Usage: Contains multiple PromptChip components on Today screen

**ActionCard** (`/src/app/components/healthcare/cards/ActionCard.tsx`)
- Displays action item that needs user attention
- Features: title, description, tags array, menu button
- Props:
  - `title`: Action title (bold, 16px)
  - `description`: Action description (medium, 14px)
  - `tags`: Array of ActionTag objects (label, variant, optional icon)
  - `onClick`: Handler when card is clicked
  - `onMenuClick`: Handler when menu button is clicked
- Tag variants:
  - `new`: Green background (#EAFAF1) with green text
  - `info`: Gray background (#F2F2F2) with black text
- Usage: Today screen "Your actions" section
- Pattern: Reusable with props for different action types

**PendingActionsCard** (`/src/app/components/healthcare/cards/PendingActionsCard.tsx`)
- Card showing count of pending actions with arrow navigation
- Features: count display, arrow icon
- Props:
  - `count`: Number of pending actions
  - `onClick`: Handler when card is clicked
- Usage: Today screen at end of action cards list
- Pattern: Automatically pluralizes "action" vs "actions"

---

## Generic vs Feature-Specific Components

**Prefer generic over feature-specific components** when building reusable UI elements:

**Generic components** (`/src/app/components/ui/`):
- Accept props to customize behavior/appearance
- Not tied to specific features or data structures
- Can be used across multiple screens and contexts
- Examples: `SearchField`, `FilterBar`, `Chip`, `PillIcon`

**Feature-specific components** (`/src/app/components/healthcare/`):
- Tied to specific healthcare workflows or data
- Accept domain-specific props (e.g., `ActivityItem`, `CareTeamMember`)
- Examples: `ActivityListItem`, `MedicationListItem`, `CareTeamMemberCard`

**Pattern:**

```typescript
// ✅ GOOD - Generic component with props
export function SearchField({ placeholder }: { placeholder: string }) {
  return <input placeholder={placeholder} ... />;
}

// Usage in multiple contexts
<SearchField placeholder="Provider, date, visit type" />
<SearchField placeholder="Medication name, prescriber" />

// ❌ AVOID - Feature-specific component doing the same thing
export function ActivitySearchField() {
  return <input placeholder="Provider, date, visit type" ... />;
}
export function MedicineSearchField() {
  return <input placeholder="Medication name, prescriber" ... />;
}
```

**When to extract to generic:**
- Component appears in 2+ feature areas with only content differences
- Component could logically be used outside current feature
- Props can describe all variations without feature-specific logic

**When to keep feature-specific:**
- Component contains complex domain logic
- Component tightly coupled to specific data structure
- Making it generic would require many conditional props

---

## Documentation & Style Guide

**Component documentation has two parts that must be updated together:**
1. **README files** - Text documentation (props, usage, when to use)
2. **StyleGuide.tsx** - Visual catalog (live examples, quick browse)

Both serve the same goal: prevent duplicate work and show what's available.

### When to ADD a component

✅ **Add to both README + StyleGuide when:**
- Creating a new reusable component (used in 2+ chapters or designed for reuse)
- Implementing a new Figma design that establishes a new UI pattern
- Adding a visually distinct variant worth showing separately

**Steps:**
1. Create component code in appropriate directory
2. Document in category README (props, usage, when to use, design source)
3. Add live example in StyleGuide.tsx under correct category
4. Update master catalog README if introducing new component

### When to UPDATE a component

✅ **Update both README + StyleGuide when:**
- Component props change in ways that affect visual appearance
- Component is renamed or moved to different category
- Default styling changes significantly
- New required props are added that developers need to see

**Steps:**
1. Update component code
2. Update README with new prop documentation
3. Verify StyleGuide example still accurate (update if needed)
4. Update master catalog if component moved categories

### When to REMOVE a component

✅ **Remove from both README + StyleGuide when:**
- Component is deleted/deprecated
- Component becomes chapter-specific (not reusable) and was mistakenly added

**Steps:**
1. Delete component code
2. Remove from category README
3. Remove from StyleGuide.tsx
4. Update master catalog

### When NOT to update documentation

❌ **Skip documentation updates for:**
- Minor bug fixes that don't affect the public interface
- Internal refactoring that doesn't change props or appearance
- Performance optimizations
- Small CSS tweaks that don't change overall visual appearance

### Accessing the Style Guide

Press **ESC** key (when not typing in an input field) to open the visual component catalog. This shows live examples of all reusable components with story bible data.

**Why keep them in sync:**
- README out of date → developers don't know how to use components correctly
- StyleGuide out of date → developers can't see what's visually available
- Both out of sync → leads to duplicate components and wasted effort
