import { LottieAnimation } from './LottieAnimation';
import thinkingAnimation from './thinking.json';

export interface ThinkingIndicatorProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

/**
 * Thinking Indicator
 *
 * Animated three-dot indicator for loading states, typing indicators,
 * or "thinking" states in chat interfaces.
 *
 * @example
 * ```tsx
 * <ThinkingIndicator width={60} height={24} />
 * ```
 */
export function ThinkingIndicator({
  width = 60,
  height = 24,
  className = '',
}: ThinkingIndicatorProps) {
  return (
    <LottieAnimation
      animationData={thinkingAnimation}
      width={width}
      height={height}
      loop={true}
      autoplay={true}
      className={className}
    />
  );
}
