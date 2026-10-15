/**
 * Spring Pop Animation Component
 *
 * Wraps content with a subtle spring pop-in animation.
 * Scales from 0 to 1 with a slight overshoot for natural feel.
 */

import { ReactNode } from 'react';

export interface SpringPopProps {
  children: ReactNode;
  /** Transform origin for the scale animation (default: 'center center') */
  origin?: 'left center' | 'center center' | 'right center';
  /** Duration in seconds (default: 0.4) */
  duration?: number;
  /** Delay in seconds before animation starts (default: 0) */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
}

export function SpringPop({
  children,
  origin = 'center center',
  duration = 0.4,
  delay = 0,
  className = '',
}: SpringPopProps) {
  return (
    <div
      className={className}
      style={{
        animation: `spring-pop ${duration}s ease-out ${delay}s`,
        transformOrigin: origin,
      }}
    >
      {children}
    </div>
  );
}
