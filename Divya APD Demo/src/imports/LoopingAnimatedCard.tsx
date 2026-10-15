import { useEffect, useState } from 'react';
import { AnimatedCard, AnimatedCardProps } from './AnimatedCard';

/**
 * AnimatedCard that loops continuously
 * Used for demonstrations in the prototype guide
 */
export function LoopingAnimatedCard(props: AnimatedCardProps) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const totalDuration = (props.duration || 500) + (props.delay || 0) + 500;
    const interval = setInterval(() => {
      setKey((k) => k + 1);
    }, totalDuration);

    return () => clearInterval(interval);
  }, [props.duration, props.delay]);

  return <AnimatedCard key={key} {...props} />;
}
