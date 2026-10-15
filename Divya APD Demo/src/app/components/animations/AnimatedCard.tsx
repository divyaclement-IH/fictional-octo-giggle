import { useAnimation } from '../easing/useAnimation';
import { easingPresets } from '../easing/easingFunctions';

export interface AnimatedCardProps {
  children: React.ReactNode;
  easingFunction?: (t: number) => number;
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * Animated Card Component
 *
 * Demonstrates fade-in and slide-up animation with configurable easing
 *
 * @example
 * ```tsx
 * <AnimatedCard easingFunction={easeOutBack} duration={600}>
 *   <div className="p-4">Card content</div>
 * </AnimatedCard>
 * ```
 */
export function AnimatedCard({
  children,
  easingFunction = easingPresets.smooth,
  duration = 500,
  delay = 0,
  className = '',
}: AnimatedCardProps) {
  const { value } = useAnimation({
    duration,
    delay,
    easingFunction,
    autoStart: true,
  });

  return (
    <div
      className={className}
      style={{
        opacity: value,
        transform: `translateY(${(1 - value) * 20}px)`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Skeleton Loading Card
 *
 * Demonstrates pulsing animation for loading states
 */
export function SkeletonCard({
  className = '',
  duration = 1500,
}: {
  className?: string;
  duration?: number;
}) {
  const { value, start } = useAnimation({
    duration,
    easingFunction: easingPresets.smooth,
    autoStart: true,
    onComplete: () => {
      // Loop the animation by restarting
      setTimeout(() => start(), 0);
    },
  });

  // Create pulsing effect by going 0 -> 1 -> 0
  const pulse = value < 0.5 ? value * 2 : (1 - value) * 2;
  const opacity = 0.3 + pulse * 0.4;

  return (
    <div
      className={`bg-gray-200 rounded ${className}`}
      style={{
        opacity,
      }}
    />
  );
}

/**
 * Progress Bar with Easing
 *
 * Demonstrates smooth progress animation
 */
export function AnimatedProgressBar({
  progress = 0,
  easingFunction = easingPresets.ease,
  duration = 300,
  className = '',
}: {
  progress: number;
  easingFunction?: (t: number) => number;
  duration?: number;
  className?: string;
}) {
  const { value } = useAnimation({
    duration,
    easingFunction,
    autoStart: true,
  });

  const currentProgress = progress * value;

  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className="bg-blue-600 h-full transition-all"
        style={{
          width: `${currentProgress * 100}%`,
        }}
      />
    </div>
  );
}
