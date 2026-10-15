/**
 * Looping Animation Wrapper
 *
 * Continuously loops an AnimationWrapper animation for demonstration purposes.
 * Used in StyleGuide to show live animation examples.
 */

import { useState, useEffect, ReactNode } from 'react';
import { AnimationWrapper, AnimationType, TransformOrigin } from './AnimationWrapper';

export interface LoopingAnimationWrapperProps {
  children: ReactNode;
  type?: AnimationType;
  origin?: TransformOrigin;
  duration?: number;
  interval?: number; // Time between loops in ms
  className?: string;
}

export function LoopingAnimationWrapper({
  children,
  type = 'spring-pop',
  origin = 'center center',
  duration = 0.4,
  interval = 3000,
  className = '',
}: LoopingAnimationWrapperProps) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setKey((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <AnimationWrapper
      key={key}
      type={type}
      origin={origin}
      duration={duration}
      className={className}
    >
      {children}
    </AnimationWrapper>
  );
}
