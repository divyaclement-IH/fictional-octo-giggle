/**
 * Animation Wrapper Component
 *
 * Generic wrapper that can apply different animation types.
 * Supports: spring-pop, fade-in, slide-up, etc.
 */

import { ReactNode } from 'react';

export type AnimationType = 'spring-pop' | 'fade-in' | 'slide-up' | 'scale-ease';
export type TransformOrigin = 'left center' | 'center center' | 'right center' | 'top center' | 'bottom center';

export interface AnimationWrapperProps {
  children: ReactNode;
  /** Animation type */
  type?: AnimationType;
  /** Transform origin for scale/pop animations */
  origin?: TransformOrigin;
  /** Duration in seconds */
  duration?: number;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
}

export function AnimationWrapper({
  children,
  type = 'spring-pop',
  origin = 'center center',
  duration = 0.4,
  delay = 0,
  className = '',
}: AnimationWrapperProps) {
  return (
    <div
      className={className}
      style={{
        animation: `${type} ${duration}s ease-out ${delay}s`,
        transformOrigin: origin,
      }}
    >
      {children}
    </div>
  );
}

// Convenience exports for specific animation types
export const SpringPop = (props: Omit<AnimationWrapperProps, 'type'>) => (
  <AnimationWrapper {...props} type="spring-pop" />
);

export const FadeIn = (props: Omit<AnimationWrapperProps, 'type'>) => (
  <AnimationWrapper {...props} type="fade-in" />
);

export const SlideUp = (props: Omit<AnimationWrapperProps, 'type'>) => (
  <AnimationWrapper {...props} type="slide-up" />
);

export const ScaleEase = (props: Omit<AnimationWrapperProps, 'type'>) => (
  <AnimationWrapper {...props} type="scale-ease" />
);
