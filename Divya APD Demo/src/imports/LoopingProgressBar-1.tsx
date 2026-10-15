import { useEffect, useState } from 'react';
import { AnimatedProgressBar } from './AnimatedCard';

/**
 * AnimatedProgressBar that loops continuously
 * Used for demonstrations in the prototype guide
 */
export function LoopingProgressBar({
  progress = 0.75,
  duration = 1000,
  easingFunction,
  className = '',
}: {
  progress?: number;
  duration?: number;
  easingFunction?: (t: number) => number;
  className?: string;
}) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((k) => k + 1);
    }, duration + 500);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <AnimatedProgressBar
      key={key}
      progress={progress}
      duration={duration}
      easingFunction={easingFunction}
      className={className}
    />
  );
}
