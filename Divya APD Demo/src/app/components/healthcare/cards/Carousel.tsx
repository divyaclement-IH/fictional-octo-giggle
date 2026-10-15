/**
 * Carousel Component
 *
 * Horizontal scrollable carousel with pagination dots.
 * Design: Adapted from Figma import /src/imports/Carousel-1/Carousel-13-1257.tsx
 *
 * Features:
 * - Auto-tracking active dot based on scroll position
 * - Equal height cards
 * - Snap scrolling
 *
 * Used for:
 * - Care tiles (CardCarousel)
 * - Benefits carousel (BenefitsCarousel)
 * - Specialist referrals
 */

import { ReactNode, useRef, useEffect, useState } from 'react';

export interface CarouselProps {
  children: ReactNode[];
  activeIndex?: number; // Optional initial index, will auto-track scroll position
}

export function Carousel({ children, activeIndex: initialIndex = 0 }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalDots = children.length;
  const showDots = totalDots > 1;

  // Track which card is in view using Intersection Observer
  useEffect(() => {
    if (!containerRef.current || children.length === 0) return;

    const observerOptions = {
      root: containerRef.current,
      threshold: 0.5, // Card is considered "active" when 50% visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [children.length]);

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full" data-name="Carousel">
      {/* Scrollable cards container */}
      <div
        ref={containerRef}
        className="content-stretch flex gap-[8px] items-stretch overflow-x-auto relative shrink-0 w-full"
        data-name="Cards"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="shrink-0 flex"
            style={{ scrollSnapAlign: 'start' }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Pagination dots - only show when more than 1 item */}
      {showDots && (
        <div className="flex items-center justify-center gap-[13px] relative h-[8px] w-full" data-name="Dots">
          {Array.from({ length: totalDots }).map((_, index) => {
            const isActive = index === activeIndex;
            if (isActive) {
              return (
                <svg
                  key={index}
                  className="shrink-0"
                  width="20"
                  height="8"
                  viewBox="0 0 20 8"
                  fill="none"
                >
                  <rect width="20" height="8" rx="4" fill="#002380" />
                </svg>
              );
            } else {
              return (
                <svg
                  key={index}
                  className="shrink-0"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <circle cx="4" cy="4" r="3.5" stroke="#578EE8" />
                </svg>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

/**
 * Carousel Card - Wrapper for individual carousel items
 */
export interface CarouselCardProps {
  children: ReactNode;
}

export function CarouselCard({ children }: CarouselCardProps) {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-[109px] border border-[#e1e1e1]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        {children}
      </div>
    </div>
  );
}
