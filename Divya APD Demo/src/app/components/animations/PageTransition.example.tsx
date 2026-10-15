/**
 * PageTransition Usage Examples
 *
 * How to add smooth transitions to any page component
 */

import { PageTransition } from './PageTransition';

// Example 1: Fade transition (default)
export function MyPageWithFade() {
  return (
    <PageTransition variant="fade">
      <div className="p-8">
        <h1>My Page Content</h1>
        <p>This will fade in when navigating to this route.</p>
      </div>
    </PageTransition>
  );
}

// Example 2: Slide from right (like Chapter 1 Chat)
export function MyPageWithSlide() {
  return (
    <PageTransition variant="slide" className="h-full">
      <div className="flex flex-col h-full bg-white">
        <h1>Sliding Page</h1>
        <p>This slides in from right to left.</p>
      </div>
    </PageTransition>
  );
}

// Example 3: Slide-fade vertical
export function MyPageWithSlideFade() {
  return (
    <PageTransition variant="slide-fade">
      <div className="p-8">
        <h1>Vertical Slide</h1>
        <p>This slides up while fading in.</p>
      </div>
    </PageTransition>
  );
}

// Example 4: Scale (zoom in)
export function MyPageWithScale() {
  return (
    <PageTransition variant="scale">
      <div className="p-8">
        <h1>Scaling Page</h1>
        <p>This scales up while fading in.</p>
      </div>
    </PageTransition>
  );
}

// Example 5: Custom duration
export function MyPageWithCustomTiming() {
  return (
    <PageTransition variant="slide" duration={0.4}>
      <div className="p-8">
        <h1>Faster Transition</h1>
        <p>This slides in with a faster 0.4s animation.</p>
      </div>
    </PageTransition>
  );
}

// Example 6: Full-height page (important for layouts)
export function FullHeightPage() {
  return (
    <PageTransition variant="fade" className="h-full">
      <div className="flex flex-col h-full">
        <header>Header</header>
        <main className="flex-1">Content</main>
        <footer>Footer</footer>
      </div>
    </PageTransition>
  );
}
