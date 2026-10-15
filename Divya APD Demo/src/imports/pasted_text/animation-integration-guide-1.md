# Animation System Integration Prompt

Use this prompt when integrating the animation system into the target Figma Make project.

---

## Prompt for Claude/Developer

```
I need to integrate a complete animation system into this Figma Make project. The animation files have already been copied to:
- /src/app/components/animations/ (all animation components)
- /src/app/components/easing/ (all easing functions)

Please complete the integration by:

1. **Install Dependencies:**
   - Add `lottie-react` package via pnpm

2. **Add CSS Keyframes:**
   Add these animation keyframes to /src/styles/theme.css:
   - spring-pop (scale 0→1.05→1 with opacity)
   - fade-in (opacity 0→1)
   - slide-up (translateY 20px→0 with opacity)
   - scale-ease (scale 0.9→1 with opacity)

3. **Update StyleGuide.tsx:**
   Create two new sections in the component modal:
   
   a) **"Animation Components"** section with cards for:
      - AnimationWrapper (show spring-pop, scale-ease examples with live looping demos)
      - SpringPop (show left center and center center origins with live looping demos)
      - ThinkingIndicator (show live three-dot animation)
      - TypingText (show two examples: Dot response typing, and blinking cursor)
      - AnimatedCard (show smooth and bouncy easing with live looping demos)
      - SkeletonCard (show pulsing loader)
      - AnimatedProgressBar (show progress with smooth easing)
   
   b) **"Easing Components"** section with cards for:
      - Easing Presets (grid of 6 presets with visual demonstrations)
      - Quadratic easings (In, Out, InOut)
      - Cubic easings (In, Out, InOut)
      - Quartic easings (In, Out, InOut)
      - Back easings (In, Out, InOut)
      - Elastic easings (In, Out, InOut)
      - Bounce easings (In, Out, InOut)
      - Sine easings (In, Out, InOut)
      - Exponential easings (In, Out, InOut)
      - Circular easings (In, Out, InOut)
   
   Use the EasingVisualizer component to show animated blue balls moving along tracks for each easing function. Make all animations loop continuously for demonstration.

4. **Create Documentation Files:**
   
   a) /src/app/components/animations/GUIDELINES.md
      - Quick start examples for each animation type
      - When to use each animation
      - Chat flow example (avatar → thinking → typing → image)
      - Best practices (performance, accessibility, timing, easing selection)
      - Troubleshooting common issues
   
   b) /src/app/components/animations/README.md
      - List of all components with brief descriptions
      - Quick reference code snippets
      - Link to GUIDELINES.md
   
   c) /src/app/components/easing/README.md
      - List of all 33 easing functions
      - 6 presets with use cases
      - useAnimation hook example
      - Link to animations/GUIDELINES.md

5. **Important Implementation Notes:**
   - All live demos in StyleGuide should use the Looping* components (LoopingSpringPop, LoopingAnimatedCard, LoopingProgressBar)
   - Set all CategorySection components to defaultOpen={false}
   - Include code examples in <pre> blocks showing import statements and usage
   - For TypingText examples: one showing Dot response (text typing out), one showing just blinking cursor
   - For SpringPop examples: one with origin="left center" (avatar), one with origin="center center" (image)

Reference the complete implementation guide at ANIMATION_IMPLEMENTATION_GUIDE.md for full details on component APIs, props, and usage patterns.
```

---

## Verification Steps

After integration, verify:

1. **StyleGuide Modal (ESC key):**
   - [ ] Animation Components section appears (collapsed by default)
   - [ ] Easing Components section appears (collapsed by default)
   - [ ] All live demos are looping continuously
   - [ ] Code examples show correct import paths

2. **Documentation:**
   - [ ] GUIDELINES.md exists in animations folder
   - [ ] README.md exists in animations folder
   - [ ] README.md exists in easing folder
   - [ ] All markdown renders correctly

3. **Functionality:**
   - [ ] SpringPop animations scale from center correctly
   - [ ] TypingText types out character-by-character
   - [ ] ThinkingIndicator three-dot animation loops
   - [ ] Easing visualizers show animated balls moving
   - [ ] All animations respect their transform origins

4. **Dependencies:**
   - [ ] `lottie-react` installed
   - [ ] No console errors
   - [ ] thinking.json loads correctly

---

## Quick Command Reference

```bash
# Install dependency
pnpm add lottie-react

# Test the StyleGuide
# Open browser, press ESC key, navigate to Animation/Easing sections

# Check imports are correct
grep -r "from '@/app/components/animations" src/
grep -r "from '@/app/components/easing" src/
```

---

## File Manifest

Files already copied to target project:

### /src/app/components/animations/
- ✅ LottieAnimation.tsx
- ✅ ThinkingIndicator.tsx
- ✅ TypingText.tsx
- ✅ SpringPop.tsx
- ✅ AnimationWrapper.tsx
- ✅ AnimatedCard.tsx
- ✅ LoopingAnimatedCard.tsx
- ✅ LoopingProgressBar.tsx
- ✅ LoopingSpringPop.tsx
- ✅ thinking.json

### /src/app/components/easing/
- ✅ easingFunctions.ts
- ✅ useAnimation.ts
- ✅ EasingVisualizer.tsx

Files to create (via prompt above):
- ⬜ /src/app/components/animations/GUIDELINES.md
- ⬜ /src/app/components/animations/README.md
- ⬜ /src/app/components/easing/README.md
- ⬜ Update to /src/styles/theme.css (add keyframes)
- ⬜ Update to /src/app/components/StyleGuide.tsx (add sections)
