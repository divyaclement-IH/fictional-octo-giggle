# Animation System Guidelines

## Quick Start

### 1. Spring Pop Animations (Chat Entrance Effects)

Use for elements appearing in chat (avatars, images, cards):

```tsx
import { SpringPop } from '@/app/components/animations/SpringPop';

// Avatar/logo (left-aligned)
<SpringPop origin="left center">
  <Avatar />
</SpringPop>

// Image/card (center-aligned)
<SpringPop origin="center center">
  <img src="..." />
</SpringPop>
```

**When to use:** Chat messages appearing, notification badges, modals opening

### 2. Typing Text Animation (Dot Responses)

Use for conversational AI responses:

```tsx
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
```

**When to use:** AI responses, streaming text, input field cursors

### 3. Thinking Indicator (Three Dots)

Use while AI is "thinking" before responding:

```tsx
import { ThinkingIndicator } from '@/app/components/animations/ThinkingIndicator';

<ThinkingIndicator width={24} height={24} />
```

**When to use:** Loading states, before streaming responses, processing indicators

### 4. Generic Animation Wrapper

Use for other entrance animations:

```tsx
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
```

**When to use:** Modals, panels, tooltips, dropdown menus

### 5. Page Transitions (Route Changes)

Use for smooth transitions between pages/routes:

```tsx
import { PageTransition } from '@/app/components/animations/PageTransition';

// Basic usage (default: slide-fade, 0.7s)
export function MyPage() {
  return (
    <PageTransition>
      <div>Your page content</div>
    </PageTransition>
  );
}

// Different variants
<PageTransition variant="fade">...</PageTransition>
<PageTransition variant="slide">...</PageTransition>  // Slides right to left
<PageTransition variant="scale">...</PageTransition>
<PageTransition variant="slide-fade">...</PageTransition>  // Slides vertically

// Custom duration
<PageTransition variant="slide-fade" duration={0.5}>...</PageTransition>

// Full-height pages (important for layouts)
<PageTransition variant="slide" className="h-full">
  <div className="flex flex-col h-full">...</div>
</PageTransition>
```

**Available Variants:**
- `fade` - Simple fade in/out
- `slide` - Horizontal slide (right to left on enter, left to right on exit)
- `slide-fade` - Vertical slide with fade
- `scale` - Scale up/down with fade

**When to use:** Wrapping page/route components for smooth navigation transitions

**Setup:** AnimatePresence is already configured in App.tsx. Just wrap your page components with PageTransition.

**Important:** For full-height pages or layouts, add `className="h-full"` to PageTransition.

### 6. Easing Functions

Use for custom animations requiring smooth motion curves:

```tsx
import { easingPresets, easeOutBack } from '@/app/components/easing/easingFunctions';
import { useAnimation } from '@/app/components/easing/useAnimation';

const { value, start } = useAnimation({
  duration: 600,
  easingFunction: easingPresets.smooth,
  onComplete: () => console.log('Done!'),
});

// Use value (0-1) to interpolate any property
const scale = 0.9 + (value * 0.1); // 0.9 → 1.0
```

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
