import { useState, useEffect, useRef } from 'react';
import { linear } from './easingFunctions';

export interface UseAnimationOptions {
  duration?: number; // in milliseconds
  delay?: number; // in milliseconds
  easingFunction?: (t: number) => number;
  onComplete?: () => void;
  autoStart?: boolean;
}

/**
 * Hook for animating a value from 0 to 1 with easing
 *
 * @example
 * ```tsx
 * const { value, start, reset } = useAnimation({
 *   duration: 1000,
 *   easingFunction: easeOutCubic,
 *   autoStart: true
 * });
 *
 * // Use value (0-1) to animate properties
 * <div style={{ opacity: value, transform: `translateY(${(1 - value) * 20}px)` }}>
 *   Animated content
 * </div>
 * ```
 */
export function useAnimation({
  duration = 300,
  delay = 0,
  easingFunction = linear,
  onComplete,
  autoStart = false,
}: UseAnimationOptions = {}) {
  const [value, setValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp + delay;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    const easedValue = easingFunction(progress);
    setValue(easedValue);

    if (progress < 1) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
      onComplete?.();
    }
  };

  const start = () => {
    setIsAnimating(true);
    startTimeRef.current = undefined;
    requestRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    setValue(0);
    setIsAnimating(false);
    startTimeRef.current = undefined;
  };

  const stop = () => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    setIsAnimating(false);
  };

  useEffect(() => {
    if (autoStart) {
      start();
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return { value, isAnimating, start, reset, stop };
}

/**
 * Hook for animating between two numeric values with easing
 *
 * @example
 * ```tsx
 * const { value, start } = useAnimatedValue({
 *   from: 0,
 *   to: 100,
 *   duration: 500,
 *   easingFunction: easeOutBack
 * });
 *
 * <div style={{ width: `${value}%` }}>Loading...</div>
 * ```
 */
export function useAnimatedValue({
  from = 0,
  to = 1,
  duration = 300,
  delay = 0,
  easingFunction = linear,
  onComplete,
  autoStart = false,
}: UseAnimationOptions & { from?: number; to?: number } = {}) {
  const { value: t, isAnimating, start, reset, stop } = useAnimation({
    duration,
    delay,
    easingFunction,
    onComplete,
    autoStart,
  });

  const value = from + (to - from) * t;

  return { value, isAnimating, start, reset, stop };
}
