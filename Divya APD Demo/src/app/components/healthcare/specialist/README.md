# Specialist Profile Components

Full-screen specialist profile view with comprehensive provider information and care quality metrics.

## Components

### `SpecialistProfile.tsx`

Full-screen specialist profile view with provider details, clinic information, qualifications, and booking actions.

**Props:**
- `providerName: string` - Specialist full name
- `providerImage: string` - Specialist photo URL
- `specialty: string` - Medical specialty
- `networkTier: string` - Network tier (e.g., "Tier 1 - In Network")
- `rating: number` - Provider rating (1-5)
- `reviewCount: number` - Number of reviews
- `clinicName: string` - Clinic/practice name
- `clinicAddress: string` - Full clinic address
- `clinicPhone: string` - Clinic phone number
- `distance: string` - Distance from patient (e.g., "2.3 mi")
- `yearsOfPractice: number` - Years in practice
- `medicalSchool: string` - Medical school attended
- `boardCertification: string` - Board certification details
- `currentTime: Date` - Current time for status bar
- `onBack: () => void` - Back button handler
- `onGetHelpBooking: () => void` - "Get help with booking" button handler
- `onBookMyself?: () => void` - "Book myself" button handler (optional)

**Features:**
- **Status bar** - Shows current time
- **Header** - "Provider profile" title with back button and pagination (1 of 3)
- **Provider info** - Avatar, name, specialty, network tier
- **Ratings** - Star rating and review count
- **Clinic info** - Name, address, phone, distance with map image
- **About** - Provider bio/description
- **Qualifications** - Years of practice, medical school, board certification
- **Care comparison** - CareComparison component showing quality metrics
- **Action buttons** - "Get help with booking" (primary) and optional "Book myself" (secondary)

**Story Bible Dependencies:**
- Provider details: `storyBible.providers.gastro`
- Current time: Story bible chapter date

**Design Source:** `/src/imports/ProviderProfile1/ProviderProfile1.tsx`

**Usage:**
```tsx
<SpecialistProfile
  providerName={storyBible.providers.gastro.name}
  providerImage={storyBible.providers.primaryCare.photo || ''}
  specialty={storyBible.providers.gastro.specialty}
  networkTier={`In network: ${storyBible.providers.gastro.tier}`}
  rating={4.9}
  reviewCount={247}
  clinicName="Valley Medical Center"
  clinicAddress="456 Oak Avenue, San Jose, CA 95113"
  clinicPhone="(408) 555-0123"
  distance={storyBible.providers.gastro.distance}
  yearsOfPractice={15}
  medicalSchool="Stanford University School of Medicine"
  boardCertification="Board Certified in Gastroenterology"
  currentTime={chapterData.date}
  onBack={() => setViewState('chat')}
  onGetHelpBooking={() => handleUserSend('Get help with booking')}
/>
```

**When to use:**
- Chapter 3: Specialist profile detail view (after tapping "See full profile" on SpecialistCard)
- Any detailed provider profile view

**Layout:**
- Full screen view (replaces chat/main view)
- Scrollable content area
- Fixed header with back button
- Fixed action buttons at bottom

---

### `CareComparison.tsx`

Care quality comparison metrics showing specialist performance vs. baseline.

**Props:** None (fully self-contained component)

**Features:**
- **Three comparison metrics:**
  1. **Expertise** - How often they treat similar cases (12% above baseline)
  2. **Care approach** - Use of evidence-based care
  3. **Cost efficiency** - Avoids unnecessary tests/procedures
- **Visual elements:**
  - Horizontal bar graphs (green gradient)
  - Baseline indicator (gray vertical line)
  - Arrow indicators (up/down from baseline)
  - Checkmark badges for strengths
- **Legend** - Shows what bar colors represent (Dr. Moreno vs. CareMatch baseline)

**Design Source:** `/src/imports/CareComparison-1/` (Figma import)

**Usage:**
```tsx
<CareComparison />
```

**When to use:**
- Embedded in SpecialistProfile component
- Anywhere care quality metrics should be displayed

**Design Notes:**
- Self-contained component with hardcoded Dr. Moreno data
- Future enhancement: Make data-driven with props for different providers
- Green gradient bars: #008961 to #00AB7E
- Baseline markers at different positions per metric
- "Well-rounded" strength indicator with checkmarks

**Data Structure (currently hardcoded):**
```typescript
{
  expertise: {
    score: 112, // 12% above baseline (100)
    label: "How often they treat cases like yours",
    strength: "Well-rounded",
    explanation: "This composite score reflects Dr. Moreno's experience..."
  },
  careApproach: {
    score: 91,
    label: "Use of evidence-based care"
  },
  costEfficiency: {
    score: 97,
    label: "Avoids unnecessary tests or procedures"
  }
}
```

---

## Component Hierarchy

```
SpecialistProfile (full screen)
├── StatusBar
├── Header (back button, title, pagination)
├── Scrollable content
│   ├── Provider info (avatar, name, specialty)
│   ├── Network tier & ratings
│   ├── Clinic info (name, address, phone, distance, map)
│   ├── About section
│   ├── Qualifications
│   └── CareComparison
└── Action buttons (Get help / Book myself)
```

## Before Creating New Specialist Components

1. **Check SpecialistCard** (`../cards/SpecialistCard.tsx`) - For list/carousel views
2. **Check SpecialistProfile** - For detailed full-screen views
3. **Consult Guidelines.md** - Ensure Figma design is provided before building new specialist UI

## Navigation Pattern

**Chapter 3 Flow:**
1. Chat displays SpecialistCard carousel (3 specialists)
2. User taps "See full profile" on a card
3. Chapter switches view to SpecialistProfile (full screen)
4. User taps "Get help with booking"
5. Chapter switches back to chat view
6. Chat displays ProgressTrackerCard

**Implementation:**
```typescript
const [viewState, setViewState] = useState<'chat' | 'profile'>('chat');
const [selectedSpecialistId, setSelectedSpecialistId] = useState<string | null>(null);

// In ChatContainer:
onViewSpecialistProfile={(specialistId) => {
  setSelectedSpecialistId(specialistId);
  setViewState('profile');
}}

// In SpecialistProfile:
onBack={() => setViewState('chat')}
onGetHelpBooking={() => {
  setViewState('chat');
  handleUserSend('Get help with booking');
}}
```
