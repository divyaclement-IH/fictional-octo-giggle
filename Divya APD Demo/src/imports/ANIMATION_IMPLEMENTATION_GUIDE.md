# Animation System Implementation Guide

This document outlines the complete animation system built for the healthcare chat prototype, ready to be integrated into the source Figma Make project.

## Overview

A comprehensive animation system consisting of:
- **Lottie animations** (JSON-based animations from After Effects)
- **Typing/streaming text effects** (character-by-character text reveal)
- **Spring pop animations** (scale-based entrance animations)
- **Mathematical easing functions** (33 easing variations for smooth motion)
- **Generic animation wrapper** (unified API for all animation types)

---

## File Structure

### Animation Components (Copy from `/src/app/components/animations/`)

**Core Animation Components:**
- `LottieAnimation.tsx` - Wrapper for Lottie JSON animations
- `ThinkingIndicator.tsx` - Three-dot typing indicator (uses `thinking.json`)
- `TypingText.tsx` - Character-by-character text reveal with optional cursor
- `SpringPop.tsx` - Scale entrance animation with spring effect
- `AnimationWrapper.tsx` - **Universal animation component** (spring-pop, fade-in, slide-up, scale-ease)

**Supporting Components:**
- `AnimatedCard.tsx` - Card with fade/slide animations using easing functions
- `LoopingAnimatedCard.tsx` - Demo version that loops for style guide
- `LoopingProgressBar.tsx` - Demo progress bar for style guide
- `LoopingSpringPop.tsx` - Demo version of SpringPop for style guide

**Lottie JSON Asset:**
- `thinking.json` - Three-dot animation data (30x12px, loops continuously)

### Easing Functions (Copy from `/src/app/components/easing/`)

**Core Easing:**
- `easingFunctions.ts` - 33 mathematical easing functions + 6 presets
- `useAnimation.ts` - React hook for animations with easing support
- `EasingVisualizer.tsx` - Visual demonstrations of easing curves (for style guide only)

### CSS Keyframes (Add to `/src/styles/theme.css`)

```css
/* Animation keyframes for chat elements */

/* Spring pop - scale from 0 with overshoot */
@keyframes spring-pop {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  60% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Fade in - simple opacity transition */
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Slide up - fade in with upward movement */
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale ease - smooth scale without overshoot */
@keyframes scale-ease {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## Installation in Target Project

### Step 1: Copy Files

```
src/app/components/
├── animations/
│   ├── LottieAnimation.tsx
│   ├── ThinkingIndicator.tsx
│   ├── TypingText.tsx
│   ├── SpringPop.tsx
│   ├── AnimationWrapper.tsx
│   ├── AnimatedCard.tsx
│   ├── LoopingAnimatedCard.tsx        # Optional: For style guide demos
│   ├── LoopingProgressBar.tsx         # Optional: For style guide demos
│   ├── LoopingSpringPop.tsx           # Optional: For style guide demos
│   └── thinking.json
└── easing/
    ├── easingFunctions.ts
    ├── useAnimation.ts
    └── EasingVisualizer.tsx            # Optional: For style guide demos
```

### Step 2: Install Dependencies

```bash
pnpm add lottie-react
```

### Step 3: Add CSS Keyframes

Append the animation keyframes (shown above) to `/src/styles/theme.css`

---

## Documentation in Style Guide Modal

### Modal Location
Add to existing `StyleGuide.tsx` or component reference modal

### Import Statements

```tsx
// Animation Components
import { LottieAnimation } from './animations/LottieAnimation';
import { ThinkingIndicator } from './animations/ThinkingIndicator';
import { TypingText } from './animations/TypingText';
import { SpringPop } from './animations/SpringPop';
import { AnimationWrapper, FadeIn, SlideUp, ScaleEase } from './animations/AnimationWrapper';
import { AnimatedCard, SkeletonCard, AnimatedProgressBar } from './animations/AnimatedCard';
import { LoopingAnimatedCard } from './animations/LoopingAnimatedCard';
import { LoopingProgressBar } from './animations/LoopingProgressBar';
import { LoopingSpringPop } from './animations/LoopingSpringPop';

// Easing Components
import { EasingVisualizer, EasingGrid, EasingComparison } from './easing/EasingVisualizer';
import * as easingFunctions from './easing/easingFunctions';
import thinkingAnimation from './animations/thinking.json';
```

### Section Structure in Modal

Create two main sections:

#### 1. **Animation Components** Section

```tsx
<CategorySection title="Animation Components" defaultOpen={false}>
  {/* AnimationWrapper Card */}
  <ComponentCard
    name="AnimationWrapper"
    description="Universal animation wrapper with multiple animation types (pop, ease, fade, slide)"
  >
    <div className="w-full max-w-md bg-white p-4 rounded space-y-4">
      {/* Live demos here */}
    </div>
  </ComponentCard>

  {/* SpringPop Card */}
  <ComponentCard
    name="SpringPop"
    description="Subtle spring scale animation for chat elements appearing"
  >
    {/* Live demos with LoopingSpringPop */}
  </ComponentCard>

  {/* ThinkingIndicator Card */}
  <ComponentCard
    name="ThinkingIndicator"
    description="Three-dot thinking/typing indicator for loading states"
  >
    {/* Live demo */}
  </ComponentCard>

  {/* TypingText Card */}
  <ComponentCard
    name="TypingText"
    description="Typewriter animation for chat responses"
  >
    {/* Live demos showing cursor and typing */}
  </ComponentCard>

  {/* AnimatedCard Card */}
  <ComponentCard
    name="AnimatedCard"
    description="Card with fade-in and slide-up animation using easing functions"
  >
    {/* Live demos with LoopingAnimatedCard */}
  </ComponentCard>

  {/* SkeletonCard Card */}
  {/* AnimatedProgressBar Card */}
</CategorySection>
```

#### 2. **Easing Components** Section

```tsx
<CategorySection title="Easing Components" defaultOpen={false}>
  {/* Easing Presets */}
  <ComponentCard
    name="Easing Presets (Most Common)"
    description="Pre-configured easing functions for common use cases"
  >
    <EasingGrid
      easings={[
        { name: 'smooth', fn: easingFunctions.easingPresets.smooth },
        { name: 'ease', fn: easingFunctions.easingPresets.ease },
        { name: 'easeIn', fn: easingFunctions.easingPresets.easeIn },
        { name: 'bouncy', fn: easingFunctions.easingPresets.bouncy },
        { name: 'spring', fn: easingFunctions.easingPresets.spring },
        { name: 'sharp', fn: easingFunctions.easingPresets.sharp },
      ]}
    />
  </ComponentCard>

  {/* Quadratic, Cubic, etc. organized by family */}
</CategorySection>
```

---

## Guidelines Documentation

### Create: `/src/app/components/animations/GUIDELINES.md`

```markdown
# Animation System Guidelines

## Quick Start

### 1. Spring Pop Animations (Chat Entrance Effects)

Use for elements appearing in chat (avatars, images, cards):

\`\`\`tsx
import { SpringPop } from '@/app/components/animations/SpringPop';

// Avatar/logo (left-aligned)
<SpringPop origin="left center">
  <Avatar />
</SpringPop>

// Image/card (center-aligned)
<SpringPop origin="center center">
  <img src="..." />
</SpringPop>
\`\`\`

**When to use:** Chat messages appearing, notification badges, modals opening

### 2. Typing Text Animation (Dot Responses)

Use for conversational AI responses:

\`\`\`tsx
import { TypingText } from '@/app/components/animations/TypingText';

// Dot response typing out
<TypingText
  text="Based on your symptoms, I recommend..."
  speed={30}          // ms per character
  cursor={false}      // No cursor, just typing
  loop={false}
/>

// Blinking cursor for input fields
<TypingText
  text=""
  cursor={true}
  className="text-gray-600"
/>
\`\`\`

**When to use:** AI responses, streaming text, input field cursors

### 3. Thinking Indicator (Three Dots)

Use while AI is "thinking" before responding:

\`\`\`tsx
import { ThinkingIndicator } from '@/app/components/animations/ThinkingIndicator';

<ThinkingIndicator width={24} height={24} />
\`\`\`

**When to use:** Loading states, before streaming responses, processing indicators

### 4. Generic Animation Wrapper

Use for other entrance animations:

\`\`\`tsx
import { AnimationWrapper, FadeIn, SlideUp, ScaleEase } from '@/app/components/animations/AnimationWrapper';

// Fade in
<FadeIn duration={0.3}>
  <div>Content</div>
</FadeIn>

// Slide up
<SlideUp duration={0.4} delay={0.1}>
  <div>Content</div>
</SlideUp>

// Smooth scale (no overshoot)
<ScaleEase origin="center center">
  <div>Content</div>
</ScaleEase>
\`\`\`

**When to use:** Modals, panels, tooltips, dropdown menus

### 5. Easing Functions

Use for custom animations requiring smooth motion curves:

\`\`\`tsx
import { easingPresets, easeOutBack } from '@/app/components/easing/easingFunctions';
import { useAnimation } from '@/app/components/easing/useAnimation';

const { value, start } = useAnimation({
  duration: 600,
  easingFunction: easingPresets.smooth,
  onComplete: () => console.log('Done!'),
});

// Use value (0-1) to interpolate any property
const scale = 0.9 + (value * 0.1); // 0.9 → 1.0
\`\`\`

**When to use:** Custom scroll animations, progress indicators, complex transitions

## Animation Flow Example (Chat)

**Sequence when Dot responds:**

1. **Avatar pops in** (SpringPop, 0.4s, origin: left center)
2. **Thinking indicator appears** (ThinkingIndicator, 0.8s)
3. **Text types out** (TypingText, 30ms per character, no cursor)
4. **Image/card pops in** (SpringPop, 0.4s, origin: center center)

## Best Practices

### Performance
- Use `will-change` CSS property sparingly
- Avoid animating expensive properties (box-shadow, filters)
- Keep animations under 0.6s for snappy feel
- Use `transform` and `opacity` when possible (GPU accelerated)

### Accessibility
- Respect `prefers-reduced-motion` media query
- Provide instant fallback for users with motion sensitivity
- Don't rely on animation alone to convey information

### Timing
- **Fast** (0.2-0.3s): Small elements, tooltips, dropdowns
- **Medium** (0.4-0.5s): Cards, modals, chat messages (default)
- **Slow** (0.6-0.8s): Large panels, page transitions

### Easing Selection
- **smooth** (easeInOutCubic): Default for most animations
- **ease** (easeOutCubic): Elements entering viewport
- **easeIn** (easeInCubic): Elements exiting viewport
- **bouncy** (easeOutBack): Playful, attention-grabbing
- **spring** (easeOutElastic): Very playful, use sparingly
- **sharp** (easeInOutQuart): Fast, precise, no-nonsense

## Troubleshooting

### Animation not playing
- Check that CSS keyframes are in `theme.css`
- Verify component is mounted (not conditional rendered)
- Ensure `lottie-react` is installed for Lottie animations

### Animation playing twice
- Use unique `key` prop on animated elements
- Check that parent isn't re-rendering unnecessarily
- For SpringPop, ensure it only wraps first appearance

### Janky/laggy animation
- Reduce animation complexity
- Check CPU/GPU usage in DevTools Performance tab
- Use simpler easing function
- Reduce number of simultaneous animations
\`\`\`

---

## Create: `/src/app/components/animations/README.md`

```markdown
# Animation Components

Reusable animation components for chat interface, modals, and UI transitions.

## Components

### Core Animations
- **LottieAnimation** - Wrapper for Lottie JSON animations
- **ThinkingIndicator** - Three-dot typing indicator (uses thinking.json)
- **TypingText** - Character-by-character text reveal with cursor
- **SpringPop** - Scale entrance with spring overshoot
- **AnimationWrapper** - Universal wrapper (pop, fade, slide, scale)

### Demo Components (Style Guide Only)
- **LoopingAnimatedCard** - Loops for demonstrations
- **LoopingProgressBar** - Loops for demonstrations
- **LoopingSpringPop** - Loops for demonstrations

## Quick Reference

\`\`\`tsx
// Spring pop (chat entrance)
<SpringPop origin="left center"><Avatar /></SpringPop>

// Typing text (AI response)
<TypingText text="Hello!" speed={30} cursor={false} />

// Thinking indicator
<ThinkingIndicator width={24} height={24} />

// Generic animations
<FadeIn><Content /></FadeIn>
<SlideUp><Content /></SlideUp>
<ScaleEase><Content /></ScaleEase>
\`\`\`

See `GUIDELINES.md` for detailed usage and best practices.
\`\`\`

---

## Create: `/src/app/components/easing/README.md`

```markdown
# Easing Functions

Mathematical easing functions for smooth, natural motion.

## Files

- **easingFunctions.ts** - 33 easing functions + 6 presets
- **useAnimation.ts** - React hook for easing-based animations
- **EasingVisualizer.tsx** - Visual demonstrations (style guide only)

## Presets

\`\`\`tsx
import { easingPresets } from '@/app/components/easing/easingFunctions';

easingPresets.smooth  // easeInOutCubic - Default, balanced
easingPresets.ease    // easeOutCubic - Entering elements
easingPresets.easeIn  // easeInCubic - Exiting elements
easingPresets.bouncy  // easeOutBack - Playful overshoot
easingPresets.spring  // easeOutElastic - Very playful
easingPresets.sharp   // easeInOutQuart - Fast, precise
\`\`\`

## All Functions

**Linear:** `linear`

**Quadratic:** `easeInQuad`, `easeOutQuad`, `easeInOutQuad`

**Cubic:** `easeInCubic`, `easeOutCubic`, `easeInOutCubic`

**Quartic:** `easeInQuart`, `easeOutQuart`, `easeInOutQuart`

**Quintic:** `easeInQuint`, `easeOutQuint`, `easeInOutQuint`

**Sinusoidal:** `easeInSine`, `easeOutSine`, `easeInOutSine`

**Exponential:** `easeInExpo`, `easeOutExpo`, `easeInOutExpo`

**Circular:** `easeInCirc`, `easeOutCirc`, `easeInOutCirc`

**Back:** `easeInBack`, `easeOutBack`, `easeInOutBack`

**Elastic:** `easeInElastic`, `easeOutElastic`, `easeInOutElastic`

**Bounce:** `easeInBounce`, `easeOutBounce`, `easeInOutBounce`

## Usage with useAnimation Hook

\`\`\`tsx
import { useAnimation } from '@/app/components/easing/useAnimation';
import { easingPresets } from '@/app/components/easing/easingFunctions';

const { value, isAnimating, start, reset } = useAnimation({
  duration: 600,
  easingFunction: easingPresets.smooth,
  autoStart: false,
  onComplete: () => console.log('Animation complete!'),
});

// Start animation
useEffect(() => {
  start();
}, []);

// Use value (0-1) to interpolate
const opacity = value;
const scale = 0.9 + (value * 0.1);
const translateY = (1 - value) * 20;
\`\`\`

See `GUIDELINES.md` in animations folder for selection criteria.
\`\`\`

---

## Integration Checklist

### Files to Copy
- [ ] Copy `/src/app/components/animations/` folder (all files)
- [ ] Copy `/src/app/components/easing/` folder (all files)
- [ ] Add CSS keyframes to `/src/styles/theme.css`

### Dependencies
- [ ] Run `pnpm add lottie-react`

### Documentation
- [ ] Add "Animation Components" section to StyleGuide.tsx
- [ ] Add "Easing Components" section to StyleGuide.tsx
- [ ] Create `animations/GUIDELINES.md`
- [ ] Create `animations/README.md`
- [ ] Create `easing/README.md`

### Testing
- [ ] Verify SpringPop animations work (avatars, images)
- [ ] Verify TypingText works (streaming text)
- [ ] Verify ThinkingIndicator works (three dots)
- [ ] Verify easing functions work (AnimatedCard, ProgressBar)
- [ ] Test in StyleGuide modal (ESC key to open)

---

## Usage Examples in Target Project

### Chat Interface (Primary Use Case)

```tsx
import { SpringPop } from '@/app/components/animations/SpringPop';
import { ThinkingIndicator } from '@/app/components/animations/ThinkingIndicator';
import { TypingText } from '@/app/components/animations/TypingText';

// Dot message appearing
{showAvatar && isDotMessage && (
  <SpringPop origin="left center" className="flex items-center gap-2">
    <Avatar type="dot" />
    <span>Dot</span>
  </SpringPop>
)}

// Thinking state
{isThinking && <ThinkingIndicator width={24} height={24} />}

// Typing response
{!isThinking && (
  <TypingText
    text={message}
    speed={30}
    cursor={false}
    loop={false}
  />
)}

// Image appearing
<SpringPop origin="center center">
  <img src="provider-map.png" alt="..." />
</SpringPop>
```

### Modal Opening

```tsx
import { ScaleEase } from '@/app/components/animations/AnimationWrapper';

<ScaleEase duration={0.3} origin="center center">
  <div className="modal">
    {/* Modal content */}
  </div>
</ScaleEase>
```

### Loading State

```tsx
import { SkeletonCard } from '@/app/components/animations/AnimatedCard';

{isLoading ? (
  <>
    <SkeletonCard className="h-4 w-3/4" />
    <SkeletonCard className="h-4 w-full" />
    <SkeletonCard className="h-4 w-5/6" />
  </>
) : (
  <ActualContent />
)}
```

---

## Support & Maintenance

### File Dependencies

**LottieAnimation & ThinkingIndicator** depend on:
- `lottie-react` package
- `thinking.json` file

**TypingText** depends on:
- React useState, useEffect hooks only (no external deps)

**SpringPop & AnimationWrapper** depend on:
- CSS keyframes in `theme.css`

**Easing functions** depend on:
- Nothing (pure math functions)

### Future Enhancements

Consider adding:
- `prefers-reduced-motion` support (instant fallback)
- Stagger animations (sequential entrance)
- Path-based animations (SVG morphing)
- Gesture-based animations (drag, swipe)
- Sound effects sync (optional audio cues)

---

## Credits

All animations designed for conversational AI chat interface, following:
- Material Design motion principles
- Apple Human Interface Guidelines
- Healthcare accessibility standards (WCAG 2.1 AA)
