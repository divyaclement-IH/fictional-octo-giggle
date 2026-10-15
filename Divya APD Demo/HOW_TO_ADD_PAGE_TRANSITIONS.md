# How to Add Page Transitions

This guide shows you how to add smooth page transitions to any page in your app.

## Quick Start

1. Import the `PageTransition` component
2. Wrap your page content with it
3. Choose a variant (optional)

```tsx
import { PageTransition } from '@/app/components/animations/PageTransition';

export default function MyPage() {
  return (
    <PageTransition variant="slide">
      <div className="p-8">
        <h1>My Page</h1>
        <p>Content here</p>
      </div>
    </PageTransition>
  );
}
```

## Available Variants

### 1. Fade (Simple)
Best for: Simple content pages, modals

```tsx
<PageTransition variant="fade">
  <div>Content</div>
</PageTransition>
```

### 2. Slide (Horizontal)
Best for: Forward progression, chat interfaces, detail views

```tsx
<PageTransition variant="slide">
  <div>Content</div>
</PageTransition>
```

- Enters from right → left
- Exits from left → right

### 3. Slide-Fade (Vertical)
Best for: Lists, feeds, general pages

```tsx
<PageTransition variant="slide-fade">
  <div>Content</div>
</PageTransition>
```

- Enters from bottom → top with fade
- Exits from top → bottom with fade

### 4. Scale
Best for: Pop-up content, emphasis

```tsx
<PageTransition variant="scale">
  <div>Content</div>
</PageTransition>
```

## Important Tips

### Full-Height Pages
If your page uses `h-full` or `flex-col h-full`, add `className="h-full"` to PageTransition:

```tsx
<PageTransition variant="slide" className="h-full">
  <div className="flex flex-col h-full">
    <header>Header</header>
    <main className="flex-1">Content</main>
    <footer>Footer</footer>
  </div>
</PageTransition>
```

### Custom Duration
Default is 0.7s. Adjust for faster/slower transitions:

```tsx
<PageTransition variant="slide" duration={0.4}>
  <div>Faster transition</div>
</PageTransition>
```

### No Exit Animation
If you want the page to transition in but NOT animate out, use Motion directly:

```tsx
import { motion } from 'motion/react';

export default function MyPage() {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
    >
      <div>Content</div>
    </motion.div>
  );
}
```

## Examples from the App

### Lock Screen (Fade)
```tsx
// src/app/components/healthcare/skeleton/SkeletonPage.tsx
<PageTransition variant="fade">
  <div className="relative size-full bg-[#f0f0f0] overflow-hidden flex flex-col">
    {/* Skeleton content */}
  </div>
</PageTransition>
```

### Chat (Slide from Right)
```tsx
// src/app/chapters/Chapter1_Chat.tsx
<motion.div
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
  className="flex flex-col h-full bg-white"
>
  {/* Chat content */}
</motion.div>
```

## How It Works

The PageTransition component is already set up to work with react-router through AnimatePresence in `App.tsx`. 

When you navigate between routes:
1. The old page plays its `exit` animation
2. The new page plays its `initial` → `animate` animation
3. AnimatePresence manages the timing

You don't need to configure anything else - just wrap your page content!

## Troubleshooting

**Transition not showing?**
- Make sure AnimatePresence is configured in App.tsx (it already is)
- Check that you're using react-router navigation (`navigate()` or `<Link>`)
- Verify the component is directly returned from the route component

**Page height issues?**
- Add `className="h-full"` to PageTransition
- Make sure parent elements have proper height set

**Want to disable transitions?**
- Simply remove the PageTransition wrapper
- The page will render instantly without animation
