# Easing Components

Mathematical easing functions and animation utilities for smooth, natural motion.

**To see all easing functions in action:** Press ESC in the app to open the Prototype Guide, then navigate to the "Easing Components" section under the Components tab. All easing functions have live animated visualizations that loop continuously so you can see how they work before using them.

## Easing Functions

Mathematical easing functions for smooth animations. All easing functions take a value `t` (0-1) and return the eased value.

### Available Easing Functions

- **Linear:** `linear`
- **Quadratic:** `easeInQuad`, `easeOutQuad`, `easeInOutQuad`
- **Cubic:** `easeInCubic`, `easeOutCubic`, `easeInOutCubic`
- **Quartic:** `easeInQuart`, `easeOutQuart`, `easeInOutQuart`
- **Quintic:** `easeInQuint`, `easeOutQuint`, `easeInOutQuint`
- **Sine:** `easeInSine`, `easeOutSine`, `easeInOutSine`
- **Exponential:** `easeInExpo`, `easeOutExpo`, `easeInOutExpo`
- **Circular:** `easeInCirc`, `easeOutCirc`, `easeInOutCirc`
- **Back:** `easeInBack`, `easeOutBack`, `easeInOutBack`
- **Elastic:** `easeInElastic`, `easeOutElastic`, `easeInOutElastic`
- **Bounce:** `easeInBounce`, `easeOutBounce`, `easeInOutBounce`

### Easing Presets

Common presets for typical use cases:
- `smooth` - easeInOutCubic (smooth and natural)
- `ease` - easeOutCubic (quick start, slow end - good for dropdowns, modals)
- `easeIn` - easeInCubic (slow start, quick end - good for dismissals)
- `bouncy` - easeOutBack (bouncy entrance - good for success states)
- `spring` - easeOutElastic (springy - good for interactive elements)
- `sharp` - easeInOutQuart (sharp - good for attention-grabbing)

### Usage Examples

```tsx
import { easeOutCubic, easingPresets, applyEasing } from "./components/easing/easingFunctions";
import { useAnimation, useAnimatedValue } from "./components/easing/useAnimation";

// Basic animation hook (0 to 1)
const { value, start, reset } = useAnimation({
  duration: 500,
  easingFunction: easeOutCubic,
  autoStart: true,
  onComplete: () => console.log('Animation complete')
});

// Animate between custom values
const { value } = useAnimatedValue({
  from: 0,
  to: 100,
  duration: 1000,
  easingFunction: easingPresets.bouncy,
  autoStart: true
});

// Use in styles
<div style={{
  opacity: value,
  transform: `translateY(${(1 - value) * 20}px)`
}}>
  Animated content
</div>

// Apply easing to a range manually
const width = applyEasing(easeOutBack, t, 0, 300);
```

## Animation Hooks

### useAnimation

Animates a value from 0 to 1 with easing:

```tsx
import { useAnimation } from "./components/easing/useAnimation";
import { easeOutCubic } from "./components/easing/easingFunctions";

const { value, start, reset, stop, isAnimating } = useAnimation({
  duration: 500,
  delay: 0,
  easingFunction: easeOutCubic,
  autoStart: true,
  onComplete: () => console.log('Done!')
});
```

### useAnimatedValue

Animates between custom numeric values:

```tsx
import { useAnimatedValue } from "./components/easing/useAnimation";
import { easingPresets } from "./components/easing/easingFunctions";

const { value, start } = useAnimatedValue({
  from: 0,
  to: 100,
  duration: 1000,
  easingFunction: easingPresets.bouncy,
  autoStart: true
});

<div style={{ width: `${value}%` }}>Loading...</div>
```

## Animation Patterns

Pre-configured timing patterns for common UI patterns:

```tsx
import { animationPatterns, timings, getCardAnimation } from "./components/easing/animationPatterns";

// Use pattern for card entrance
const cardConfig = animationPatterns.card.slideUp; // { duration: 400, delay: 0 }

// Stagger multiple cards
const cards = items.map((item, index) => ({
  ...item,
  animation: getCardAnimation(index, 100) // 100ms stagger delay
}));

// Use timing constants
import { timings } from "./components/easing/animationPatterns";
const duration = timings.normal; // 300ms
```

Available patterns:
- **card**: fadeIn, slideUp, bounceIn
- **loading**: skeleton, spinner, progressBar
- **modal**: fadeIn, scaleIn, slideDown
- **stagger**: fast (50ms), medium (100ms), slow (150ms)
- **notification**: slideInRight, fadeOut
- **button**: press, hover, ripple
- **page**: fadeIn, slideIn

## Easing Visualizers

Visual demonstration components for showcasing easing functions:

### EasingVisualizer

Shows a single easing function with an animated ball:

```tsx
import { EasingVisualizer } from "./components/easing/EasingVisualizer";
import { easeOutBack } from "./components/easing/easingFunctions";

<EasingVisualizer
  easingFunction={easeOutBack}
  label="easeOutBack"
  duration={1000}
/>
```

### EasingGrid

Displays multiple easing functions in a grid:

```tsx
import { EasingGrid } from "./components/easing/EasingVisualizer";
import { easeInQuad, easeOutQuad, easeInOutQuad } from "./components/easing/easingFunctions";

<EasingGrid
  easings={[
    { fn: easeInQuad, label: 'easeInQuad' },
    { fn: easeOutQuad, label: 'easeOutQuad' },
    { fn: easeInOutQuad, label: 'easeInOutQuad' },
  ]}
/>
```

### EasingComparison

Side-by-side comparison with colored balls:

```tsx
import { EasingComparison } from "./components/easing/EasingVisualizer";
import { linear, easeOutCubic, easeOutBack } from "./components/easing/easingFunctions";

<EasingComparison
  easings={[
    { fn: linear, label: 'Linear', color: '#3B82F6' },
    { fn: easeOutCubic, label: 'Ease Out', color: '#10B981' },
    { fn: easeOutBack, label: 'Bounce', color: '#8B5CF6' },
  ]}
/>
```

## Quick Reference

**Most Common Easing Functions:**
- `easingPresets.smooth` - Best for most UI animations
- `easingPresets.ease` - Dropdowns, modals (quick start)
- `easingPresets.bouncy` - Success states, buttons
- `easingPresets.spring` - Interactive elements

**When to use what:**
- **In/Out variants**: "In" = slow start, "Out" = slow end, "InOut" = slow both
- **Back**: Overshoots target (playful, attention-grabbing)
- **Elastic**: Springs and oscillates (use sparingly)
- **Bounce**: Bouncing ball effect (use for landing/dropping)
- **Expo**: Very fast, dramatic (good for hero animations)

## Files

```
src/app/components/easing/
├── easingFunctions.ts      - 33 easing functions + presets
├── useAnimation.ts          - Animation hooks
├── animationPatterns.ts     - Pre-configured timing patterns
├── EasingVisualizer.tsx     - Visual demonstration components
└── index.ts                 - Main exports
```
