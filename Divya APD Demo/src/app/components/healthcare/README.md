# Healthcare Components Catalog

Master index of all reusable healthcare components in the APD prototype.

## Quick Reference

Before building a new component, **check this catalog** to ensure you're not duplicating existing work.

## Component Categories

### 🔒 Lock Screen Components
**Location:** [`./lock-screen/`](./lock-screen/README.md)

| Component | Purpose | When to Use |
|-----------|---------|-------------|
| `LockScreen` | iOS lock screen container | Chapter entry points, notification flows |
| `LockNotification` | Push notification card | Lock screen notifications |

---

### 💬 Chat Components
**Location:** [`./chat/`](./chat/README.md)

| Component | Purpose | When to Use |
|-----------|---------|-------------|
| `ChatContainer` | Conversation orchestrator | All scripted chat flows |
| `MessageBubble` | Individual message | Rendered by ChatContainer |
| `ChatInput` | Message input field | Bottom of chat interface |
| `ChatDisclaimer` | Disclaimer text | Top of conversation |
| `QuickReply` | Quick reply chips | User selection options |
| `Avatar` | Profile avatars | Dot, Sarah, provider avatars |

**Key Features:**
- Text streaming animation (375 WPM)
- Variable interpolation
- Embedded UI components
- Auto-advancement

---

### 🎴 Card Components
**Location:** [`./cards/`](./cards/README.md)

| Component | Purpose | When to Use |
|-----------|---------|-------------|
| `Carousel` | Horizontal card scroll | Multiple cards, benefits, specialists |
| `ConfirmationCard` | Appointment confirmation | Booking confirmations |
| `ServiceCard` | Benefits/services | Gym access, meal planning, benefits |
| `ProviderCard` | Provider preview | Provider introductions, matches |
| `SpecialistCard` | External provider card | Specialist referrals, external providers |
| `VisitCompleteCard` | Post-visit summary | After video visits |
| `PlaceholderComponents` | Tour visuals | Onboarding illustrations |
| `ForYouItem` | Personalized content card | Get Care "For You" tab recommendations |
| `ServiceItem` | Service listing item | Get Care "Services" tab items |
| `ServiceGroup` | Service group with title | Organize services by category |
| `ActivityListItem` | My Health activity entry | My Health Activity tab |
| `MedicationListItem` | My Health medication entry | My Health Medicine tab |
| `CareTeamMemberCard` | Care team member profile | My Health Care Team tab |
| `ActionCard` | Action item needing attention | Today screen action items |
| `PendingActionsCard` | Pending actions count/nav | Today screen actions summary |

**Common Patterns:**
- White background, 24px radius
- 16px padding
- 1px light gray border
- Provider badge (blue circle with logo)
- 343px width (mobile)

---

### 📹 Video Visit Components
**Location:** [`./video/`](./video/README.md)

| Component | Purpose | When to Use |
|-----------|---------|-------------|
| `VideoVisit` | Video call interface | Wellness exams, virtual appointments |

**Important:** Mock interface only - no actual WebRTC/streaming.

---

### 📅 Booking Components
**Location:** [`./booking/`](./booking/README.md)

| Component | Purpose | When to Use |
|-----------|---------|-------------|
| `ProgressTrackerCard` | Multi-step booking progress | Specialist booking flows |

**Key Features:**
- Auto-advancing steps (2.5s per step)
- Spinner → Checkmark transition
- Manual turn advancement

---

### 👨‍⚕️ Specialist Components
**Location:** [`./specialist/`](./specialist/README.md)

| Component | Purpose | When to Use |
|-----------|---------|-------------|
| `SpecialistProfile` | Full provider profile | Detail view from SpecialistCard |
| `CareComparison` | Quality metrics | Embedded in SpecialistProfile |

**Navigation:** SpecialistCard → SpecialistProfile → Chat

---

### 🎨 UI Components
**Location:** [`../ui/`](../ui/README.md)

| Component | Purpose | When to Use |
|-----------|---------|-------------|
| `PromptInput` | Dot prompt input (non-chat) | Today screen conversation prompt |
| `PromptChip` | Interactive suggestion chip | Today screen quick actions |
| `ChipScroller` | Horizontal chip scroll | Container for multiple PromptChips |
| `SearchField` | Search input | My Health, Get Care screens |
| `FilterBar` | Filter toggle | My Health Activity tab |
| `Chip` | Status/category tag | Medicine, activity labels |
| `PillIcon` | Medication icon | My Health Medicine tab |

**Key Features:**
- Generic, reusable across screens
- Prop-based customization
- No business logic

---

## Component Selection Flowchart

```
Need to display...

├─ Lock screen notification?
│  └─ Use: LockScreen + LockNotification
│
├─ Conversation/chat?
│  └─ Use: ChatContainer + script
│
├─ Appointment confirmation?
│  └─ Use: ConfirmationCard
│
├─ Benefits or services?
│  └─ Use: ServiceCard in Carousel
│
├─ Provider introduction?
│  └─ Use: ProviderCard
│
├─ Specialist referral?
│  └─ Use: SpecialistCard in Carousel
│
├─ Specialist details?
│  └─ Use: SpecialistProfile
│
├─ Post-visit summary?
│  └─ Use: VisitCompleteCard
│
├─ Video visit?
│  └─ Use: VideoVisit
│
├─ Booking progress?
│  └─ Use: ProgressTrackerCard
│
├─ Personalized content recommendation?
│  └─ Use: ForYouItem
│
├─ Service listing?
│  └─ Use: ServiceItem in ServiceGroup
│
├─ My Health activity list?
│  └─ Use: ActivityListItem
│
├─ My Health medication list?
│  └─ Use: MedicationListItem
│
├─ Care team member profile?
│  └─ Use: CareTeamMemberCard
│
├─ Today screen action item?
│  └─ Use: ActionCard
│
├─ Today screen pending actions?
│  └─ Use: PendingActionsCard
│
├─ Dot conversation prompt (non-chat)?
│  └─ Use: PromptInput + PromptChip in ChipScroller
│
└─ None of the above?
   └─ Check Guidelines.md → Wait for Figma design
```

## Before Building a New Component

### ✅ Checklist

1. **Search this catalog** - Does a similar component exist?
2. **Read component README** - Can you customize an existing component?
3. **Check Figma design** - Is it a variant of an existing component?
4. **Review Guidelines.md** - Is Figma design provided?
5. **Consider props** - Could props handle the variation?

### 🔍 Common Variations That DON'T Need New Components

- ❌ Different provider names → **Use props**
- ❌ Different card content → **Use props**
- ❌ Different button labels → **Use props**
- ❌ Different time/date → **Story bible + props**
- ❌ Different conversation script → **Different script file**

### 🆕 When to Create a New Component

- ✅ Fundamentally different UI pattern
- ✅ New Figma design provided
- ✅ Cannot be achieved with existing component + props
- ✅ Reusable across multiple chapters

## Story Bible Integration

All components should pull data from the story bible when possible:

```typescript
import { useStoryBible } from '../context/StoryBibleContext';

const story = useStoryBible();

// Provider data
const provider = story.providers.primaryCare;

// Chapter data
const chapterData = story.chapters.chapter1_tour;

// Member data
const memberName = story.member.firstName;
```

**Never hardcode:** Dates, times, provider names, member names, appointment details.

## Image and SVG Import Pattern

**CRITICAL: Always use the `@/` alias for ALL assets (images AND SVGs):**

```typescript
// ✅ CORRECT - Use @/ alias (vite.config.ts alias to ./src)
import imgExample from '@/imports/image-5.png';
import svgPaths from '@/imports/PreviewCard/svg-qgziiwukqm';
import { imgIOsLockScreen1 } from '@/imports/IOsLockScreen/svg-6o9wv';

// ❌ WRONG - Relative paths
import imgExample from '../../../../imports/image-5.png';
import svgPaths from '../../../../imports/PreviewCard/svg-qgziiwukqm';
```

**Why:** The `@/` alias (configured in vite.config.ts) prevents broken links and intermittent loading failures. Relative SVG imports cause race conditions where images fail to load on initial render but work after refresh. See Guidelines.md for details.

## Component Documentation Standard

Each component directory should have a `README.md` containing:

1. **Component list** - What components are in this directory
2. **Props documentation** - TypeScript interfaces + descriptions
3. **Usage examples** - Code snippets showing how to use
4. **When to use** - Clear guidance on appropriate use cases
5. **Design sources** - Figma import paths
6. **Story bible dependencies** - What data comes from story bible

## Reusability Score

| Component | Reusability | Chapters Used In |
|-----------|-------------|------------------|
| `ChatContainer` | ⭐⭐⭐⭐⭐ | 1, 3, 4 |
| `LockScreen` | ⭐⭐⭐⭐⭐ | 1, 2, 4 |
| `MessageBubble` | ⭐⭐⭐⭐⭐ | All chat chapters |
| `Carousel` | ⭐⭐⭐⭐ | 1, 3 |
| `ServiceCard` | ⭐⭐⭐ | 1 |
| `ConfirmationCard` | ⭐⭐⭐ | 1 |
| `SpecialistCard` | ⭐⭐⭐ | 3 |
| `ProviderCard` | ⭐⭐ | 1 |
| `VideoVisit` | ⭐⭐ | 2 |
| `VisitCompleteCard` | ⭐⭐ | 2 |
| `ProgressTrackerCard` | ⭐⭐ | 4 |
| `SpecialistProfile` | ⭐⭐ | 3 |
| `ForYouItem` | ⭐⭐⭐ | Get Care |
| `ServiceItem` | ⭐⭐⭐ | Get Care |
| `ServiceGroup` | ⭐⭐⭐ | Get Care |
| `ActivityListItem` | ⭐⭐⭐⭐ | My Health |
| `MedicationListItem` | ⭐⭐⭐⭐ | My Health |
| `CareTeamMemberCard` | ⭐⭐⭐⭐ | My Health |

## Architecture Principles

### 1. Simplicity
Choose the simplest implementation that accurately represents the Figma design.

### 2. Reusability
Build components that can be composed and reused across chapters.

### 3. Design Fidelity
Match Figma designs precisely. Do not embellish or improve.

### 4. Props Over Duplication
Use props to handle variations instead of creating new components.

### 5. Story Bible First
Pull data from centralized story bible, not hardcoded values.

## Related Documentation

- **Guidelines.md** - Project-wide development guidelines
- **Component READMEs** - Detailed docs for each component directory
- **Chat README** - Streaming text, conversation flow, turn types
- **Story Bible** - Centralized data source (`/src/data/storyBible.ts`)

## Need Help?

1. Check component directory README
2. Review Guidelines.md
3. Search for similar existing components
4. Review Figma design carefully
5. Ask before building new components

---

**Last Updated:** Component catalog updated 2026-05-04

**Components Documented:** 25 components across 6 categories
