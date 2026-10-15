# Card Components

Reusable card components for inline chat display and carousels.

## Components

### `Carousel.tsx`

Horizontal scrollable carousel with auto-tracking pagination dots and equal-height cards.

**Props:**
- `children: ReactNode[]` - Array of card components to display
- `activeIndex?: number` - Optional initial active index (default: 0). Component auto-tracks scroll position.

**Features:**
- Horizontal scroll with snap-to-card behavior
- **Auto-tracking pagination dots** - Active dot updates as user scrolls (uses Intersection Observer)
- **Equal height cards** - All cards in carousel stretch to match tallest card
- Pagination dots only shown when >1 card

**Implementation Details:**
- Uses Intersection Observer to detect which card is in view (50% visibility threshold)
- Cards use `items-stretch` to ensure equal heights
- Snap scrolling for smooth card-to-card transitions

**Design Source:** `/src/imports/Carousel-1/Carousel-13-1257.tsx`

**Usage:**
```tsx
<Carousel>
  <ServiceCard title="Tivity Health" ... />
  <ServiceCard title="Fresh Tri" ... />
</Carousel>
```

**Note:** No need to manually track `activeIndex` - the component handles this automatically based on scroll position.

**When to use:**
- Benefits carousel (multiple service offerings)
- Specialist referral carousel (multiple providers)
- Any horizontal scrolling card display

---

### `ConfirmationCard.tsx`

Appointment confirmation card with provider details, appointment info, optional warning callouts, and action buttons.

**Props:**
- `providerName: string` - Provider full name
- `providerSpecialty: string` - Provider specialty
- `providerImage?: string` - Provider photo URL
- `appointmentDate: string` - Date (e.g., "Friday, January 8")
- `appointmentTime: string` - Time (e.g., "10:00 AM EST")
- `patientName: string` - Patient/member name
- `duration: string` - Visit duration (e.g., "30 minutes")
- `estimatedCost: string` - Cost estimate (e.g., "$0")
- `primaryButtonLabel?: string` - Primary button text (default: "Confirm appointment")
- `secondaryButtonLabel?: string` - Secondary button text (default: "View details")
- `onPrimaryClick?: () => void` - Primary button handler
- `onSecondaryClick?: () => void` - Secondary button handler
- `showLateArrivalWarning?: boolean` - Show orange warning about late arrival fee (default: false)
- `showCancellationWarning?: boolean` - Show orange warning about cancellation fee (default: false)

**Warning Callouts:**
Both warning callouts are hidden by default. Enable them as needed:
- **Late Arrival Warning**: "Arriving later than 5 min or missing an appointment may result in a $25.00 fee."
- **Cancellation Warning**: "Canceling with less than 24 hours before a visit may result in a $25.00 fee."

**Story Bible Dependencies:**
- Provider info: `storyBible.providers[providerKey]`
- Patient name: `variables.userName` from conversation context

**Design Source:** `/src/imports/ConfirmationCard/ConfirmationCard.tsx`

**Usage:**
```tsx
// Without warnings (Chapter 1)
<ConfirmationCard
  providerName={storyBible.providers.primaryCare.name}
  providerSpecialty={storyBible.providers.primaryCare.specialty}
  appointmentDate="Friday, January 8"
  appointmentTime="10:00 AM EST"
  patientName={variables.userName}
  duration="30 minutes"
  estimatedCost="$0"
  onPrimaryClick={() => handleUserSend('Complete intake')}
  onSecondaryClick={() => handleUserSend('Skip for now')}
/>

// With warnings enabled
<ConfirmationCard
  providerName={storyBible.providers.primaryCare.name}
  providerSpecialty={storyBible.providers.primaryCare.specialty}
  appointmentDate="Friday, January 8"
  appointmentTime="10:00 AM EST"
  patientName={variables.userName}
  duration="30 minutes"
  estimatedCost="$0"
  showLateArrivalWarning={true}
  showCancellationWarning={true}
  onPrimaryClick={() => handleUserSend('Complete intake')}
  onSecondaryClick={() => handleUserSend('Skip for now')}
/>
```

**When to use:**
- Chapter 1: Tour conversation (appointment booking confirmation, no warnings)
- Any appointment confirmation flow

---

### `ServiceCard.tsx`

Card for benefits and service offerings (gym access, meal planning, urgent care, etc.).

**Props:**
- `title: string` - Service name
- `description: string` - Service description
- `buttonLabel: string` - CTA button text
- `showRecommended?: boolean` - Show "Recommended" chip (default: false)
- `sla?: string` - Service level agreement/timing text (optional)
- `onButtonClick?: () => void` - Button click handler

**Design Source:** `/src/imports/ExpandedQuickReply/ExpandedQuickReply.tsx`

**Usage:**
```tsx
<ServiceCard
  title="Tivity Health Fitness Pass"
  description="Get affordable access to thousands of gyms nationwide..."
  buttonLabel="View benefit"
  showRecommended={true}
  onButtonClick={() => console.log('Clicked')}
/>
```

**When to use:**
- Benefits carousel (Chapter 1)
- Service offering displays
- Benefit recommendations

---

### `ProviderCard.tsx`

Provider preview card with avatar, description, and optional time slots.

**Props:**
- `providerName: string` - Provider full name
- `providerImage: string` - Provider photo URL
- `description: string` - Provider bio/description
- `timeSlots?: TimeSlot[]` - Available appointment slots
- `showFullProfileButton?: boolean` - Show "See full profile" button
- `onTimeSlotClick?: (slot: TimeSlot) => void` - Time slot click handler
- `onFullProfileClick?: () => void` - Full profile button handler

**Types:**
```typescript
interface TimeSlot {
  time: string;
  date: string;
}
```

**Story Bible Dependencies:**
- Provider info: `storyBible.providers[providerKey]`

**Design Source:** `/src/imports/PreviewCard/PreviewCard.tsx`

**Usage:**
```tsx
<ProviderCard
  providerName={storyBible.providers.primaryCare.name}
  providerImage={storyBible.providers.primaryCare.photo || ''}
  description={storyBible.providers.primaryCare.description || ''}
/>
```

**When to use:**
- Chapter 1: Provider match display
- Provider introductions in chat

---

### `SpecialistCard.tsx`

Specialist/external provider card with clinic info, distance, network status, and optional action buttons.

**Props:**
- `providerName: string` - Specialist full name
- `providerImage: string` - Specialist photo URL
- `specialty: string` - Medical specialty
- `description: string` - Specialist bio
- `clinicName: string` - Clinic/practice name
- `clinicAddress: string` - Full address
- `distance: string` - Distance from patient (e.g., "2.3 mi")
- `offerings: SpecialistOffering[]` - Network/telehealth badges
- `showScheduleButton?: boolean` - Show "Schedule appointment" button (default: false)
- `showViewProfileButton?: boolean` - Show "View full profile" button (default: false)
- `onSchedule?: () => void` - Schedule button handler
- `onViewProfile?: () => void` - View profile handler

**Types:**
```typescript
interface SpecialistOffering {
  icon: 'network' | 'telehealth';
  label: string;
}
```

**Button Visibility:**
- Both buttons are hidden by default
- Set `showScheduleButton={true}` to show the schedule button
- Set `showViewProfileButton={true}` to show the view profile button
- If both are false (or omitted), no button section is rendered

**Design Source:** `/src/imports/PreviewCard-1/PreviewCard-13-3021.tsx`

**Usage:**
```tsx
// With both buttons visible
<SpecialistCard
  providerName="Joseph Moreno, MD"
  specialty="Gastroenterology"
  description="Specializes in digestive health..."
  clinicName="Valley Medical Center"
  clinicAddress="456 Oak Avenue, San Jose, CA 95113"
  distance="2.3 mi"
  offerings={[
    { icon: 'network', label: 'In network' },
    { icon: 'telehealth', label: 'Offers telehealth' },
  ]}
  showScheduleButton={true}
  showViewProfileButton={true}
  onSchedule={() => handleUserSend('Schedule appointment')}
  onViewProfile={() => onViewSpecialistProfile('joseph-moreno')}
/>

// With no buttons (display only)
<SpecialistCard
  providerName="Joseph Moreno, MD"
  specialty="Gastroenterology"
  description="Specializes in digestive health..."
  clinicName="Valley Medical Center"
  clinicAddress="456 Oak Avenue, San Jose, CA 95113"
  distance="2.3 mi"
  offerings={[
    { icon: 'network', label: 'In network' },
  ]}
/>
```

**When to use:**
- Chapter 3: Specialist referral carousel (with view profile button)
- Chapter 4: Specialist confirmation (no buttons, display only)
- External provider recommendations
- Specialist booking flows

---

### `VisitCompleteCard.tsx`

Post-visit summary card with provider details, duration, and notes access.

**Props:**
- `providerName: string` - Provider full name
- `providerSpecialty: string` - Provider specialty
- `providerImage: string` - Provider photo URL
- `duration: string` - Visit duration (e.g., "18:00")
- `onNotesClick?: () => void` - View notes button handler

**Story Bible Dependencies:**
- Provider info: `storyBible.providers[providerKey]`

**Design Source:** `/src/imports/CompleteCard/CompleteCard.tsx`

**Usage:**
```tsx
<VisitCompleteCard
  providerName={storyBible.providers.primaryCare.name}
  providerSpecialty={storyBible.providers.primaryCare.specialty}
  providerImage={storyBible.providers.primaryCare.photo || ''}
  duration="18:00"
  onNotesClick={() => console.log('View notes')}
/>
```

**When to use:**
- Chapter 2: After wellness video visit
- Post-visit summaries

---

### `PlaceholderComponents.tsx`

Inline visual components for onboarding/tour conversation.

**Components:**
- `ProviderMapIllustration` - Row of provider avatars with Dot logo
- `DeductibleTrackingVisual` - Spending alert pill  
- `HealthPlanCard` - Split image showing appointment booking

**Design Source:** `image-5.png`, `image-6.png`, `image-7.png`

**Usage:**
```tsx
<ProviderMapIllustration />
<DeductibleTrackingVisual />
<HealthPlanCard />
```

**When to use:**
- Chapter 1: Tour conversation onboarding visuals
- Inline illustrations in chat

---

## Common Patterns

### Provider Badge
All provider cards include an Included Health badge on the avatar (blue circle with white logo).

### Card Container
All cards share the same container styling:
- White background
- 24px border radius
- 16px padding
- 1px light gray border (#e1e1e1)

### Responsive Width
Cards are designed for 343px width (mobile) but adapt to container width using `w-full`.

## Component Selection Guide

| Use Case | Component |
|----------|-----------|
| Appointment confirmation | `ConfirmationCard` |
| Benefits/services display | `ServiceCard` in `Carousel` |
| Primary care provider intro | `ProviderCard` |
| Specialist referrals | `SpecialistCard` in `Carousel` |
| Post-visit summary | `VisitCompleteCard` |
| Tour onboarding visuals | `PlaceholderComponents` |
| Multiple cards horizontal scroll | `Carousel` |

## Before Creating a New Card

1. **Check this inventory** - Does a similar card exist?
2. **Review props** - Can you customize an existing card instead?
3. **Check Figma design** - Is it a variant of an existing card type?
4. **Consult Guidelines.md** - Ensure Figma design is provided
