# Animations Folder

This folder contains pre-built animated components and Lottie animation wrappers.

**To see all animations in action:** Press ESC in the app to open the Prototype Guide, then navigate to the "Animation Components" section under the Components tab. All animations are actively looping so you can see how they work before using them.

**For easing functions:** See the `../easing/` folder and "Easing Components" section in the Prototype Guide.

## Animated Components

### AnimatedCard

Card with fade-in and slide-up animation:

```tsx
import { AnimatedCard } from "./components/animations/AnimatedCard";
import { easingPresets } from "./components/animations/easingFunctions";

<AnimatedCard
  easingFunction={easingPresets.bouncy}
  duration={600}
  delay={100}
>
  <div className="p-4">Card content</div>
</AnimatedCard>
```

### SkeletonCard

Pulsing skeleton loader for loading states (loops automatically):

```tsx
import { SkeletonCard } from "./components/animations/AnimatedCard";

<SkeletonCard className="h-4 w-3/4" duration={1500} />
```

### AnimatedProgressBar

Smooth progress bar with easing:

```tsx
import { AnimatedProgressBar } from "./components/animations/AnimatedCard";

<AnimatedProgressBar
  progress={0.75}
  easingFunction={easingPresets.ease}
  duration={300}
/>
```

### LoopingAnimatedCard

AnimatedCard that loops continuously (useful for demonstrations):

```tsx
import { LoopingAnimatedCard } from "./components/animations/LoopingAnimatedCard";

<LoopingAnimatedCard
  easingFunction={easingPresets.bouncy}
  duration={600}
>
  <div className="p-4">Card content</div>
</LoopingAnimatedCard>
```

### LoopingProgressBar

Progress bar that loops continuously (useful for demonstrations):

```tsx
import { LoopingProgressBar } from "./components/animations/LoopingProgressBar";

<LoopingProgressBar progress={0.75} duration={1000} />
```

## Easing Visualizers

### EasingVisualizer

Visual demonstration of a single easing function:

```tsx
import { EasingVisualizer } from "./components/animations/EasingVisualizer";
import { easeOutBack } from "./components/animations/easingFunctions";

<EasingVisualizer
  easingFunction={easeOutBack}
  label="easeOutBack"
  duration={1000}
/>
```

### EasingGrid

Grid of multiple easing visualizers:

```tsx
import { EasingGrid } from "./components/animations/EasingVisualizer";
import { easeInQuad, easeOutQuad, easeInOutQuad } from "./components/animations/easingFunctions";

<EasingGrid
  easings={[
    { fn: easeInQuad, label: 'easeInQuad' },
    { fn: easeOutQuad, label: 'easeOutQuad' },
    { fn: easeInOutQuad, label: 'easeInOutQuad' },
  ]}
/>
```

### EasingComparison

Side-by-side comparison of multiple easing functions:

```tsx
import { EasingComparison } from "./components/animations/EasingVisualizer";
import { linear, easeOutCubic, easeOutBack } from "./components/animations/easingFunctions";

<EasingComparison
  easings={[
    { fn: linear, label: 'Linear', color: '#3B82F6' },
    { fn: easeOutCubic, label: 'Ease Out', color: '#10B981' },
    { fn: easeOutBack, label: 'Bounce', color: '#8B5CF6' },
  ]}
/>
```

## Text Animations

### TypingText

Typewriter animation that reveals text character by character:

```tsx
import { TypingText } from "./components/animations/TypingText";

// For input boxes (with cursor)
<TypingText
  text="Type your message here..."
  speed={40}
  cursor={true}
  loop={false}
/>

// For Dot responses (no cursor, just types out)
<TypingText
  text="Hi! I'm Dot, your digital health assistant."
  speed={30}
  cursor={false}
  loop={false}
  onComplete={() => console.log('Done typing!')}
/>
```

**Props:**
- `text` - The text to animate
- `speed` - Milliseconds per character (default: 50)
- `delay` - Delay before starting (default: 0)
- `cursor` - Show blinking cursor (default: true) - use for input boxes only
- `loop` - Restart animation when complete (default: false)
- `onComplete` - Callback when animation finishes

### TypingMessageBubble

Pre-styled chat bubble with typing animation (no cursor by default):

```tsx
import { TypingMessageBubble } from "./components/animations/TypingText";

<TypingMessageBubble
  text="Based on your symptoms, I recommend scheduling a visit with your primary care physician."
  speed={30}
  senderName="Dot"
  cursor={false}
  loop={false}
/>
```

Perfect for:
- AI chat responses (Dot typing out replies)
- Conversational interfaces
- Interactive tutorials
- Natural chat interactions

**Note:** Use `cursor={true}` only for input fields. For Dot's responses, use `cursor={false}` so the text types out naturally without a blinking cursor.

## Lottie Animations

### ThinkingIndicator Component

Pre-built three-dot thinking indicator (uses thinking.json):

```tsx
import { ThinkingIndicator } from "./components/animations/ThinkingIndicator";

<ThinkingIndicator width={60} height={24} />
```

Perfect for:
- Chat typing indicators before responses appear
- Loading states
- "AI is thinking" messages
- Processing indicators

### LottieAnimation Component

Wrapper for Lottie JSON animations:

```tsx
import animationData from "./your-animation.json";
import { LottieAnimation } from "./components/animations/LottieAnimation";

<LottieAnimation 
  animationData={animationData}
  width={300}
  height={300}
  loop={true}
  autoplay={true}
/>
```

### Using Lottie Directly

```tsx
import Lottie from "lottie-react";
import animationData from "./your-animation.json";

<Lottie animationData={animationData} loop autoplay />
```

## Adding Animation Files

Place your `.json` Lottie animation files in this folder and import them as needed.

### Included Animations

- **thinking.json** - Three-dot animated thinking indicator (30x12px)
