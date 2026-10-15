/**
 * Looping Spring Pop Animation Component
 *
 * For demonstration purposes in style guide.
 * Continuously loops the spring pop animation.
 */

import { ReactNode, useState, useEffect } from 'react';

export interface LoopingSpringPopProps {
  children: ReactNode;
  origin?: 'left center' | 'center center' | 'right center';
  duration?: number;
  interval?: number; // Time between loops in ms
  className?: string;
}

export function LoopingSpringPop({
  children,
  origin = 'center center',
  duration = 0.4,
  interval = 3000,
  className = '',
}: LoopingSpringPopProps) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setKey((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div
      key={key}
      className={className}
      style={{
        animation: `spring-pop ${duration}s ease-out`,
        transformOrigin: origin,
      }}
    >
      {children}
    </div>
  );
}
