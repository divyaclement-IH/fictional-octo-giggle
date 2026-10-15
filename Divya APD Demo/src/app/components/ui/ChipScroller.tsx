/**
 * ChipScroller Component
 *
 * Horizontal scrolling container for chips.
 * Similar to Carousel but without pagination dots.
 *
 * Design: Included Health Design System
 * Source: Figma Today screen
 */

import React from 'react';

export interface ChipScrollerProps {
  children: React.ReactNode;
}

export function ChipScroller({ children }: ChipScrollerProps) {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start overflow-x-auto overflow-y-clip relative shrink-0 w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      style={{
        scrollSnapType: 'x proximity',
        WebkitOverflowScrolling: 'touch'
      }}
      data-name="Chip Scroller"
    >
      {children}
    </div>
  );
}
