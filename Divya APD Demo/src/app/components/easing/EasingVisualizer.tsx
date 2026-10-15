import { useEffect, useState } from 'react';
import { useAnimation } from './useAnimation';

export interface EasingVisualizerProps {
  easingFunction: (t: number) => number;
  label: string;
  duration?: number;
}

/**
 * Visual demonstration of an easing function
 * Shows a ball moving with the specified easing
 */
export function EasingVisualizer({
  easingFunction,
  label,
  duration = 1000,
}: EasingVisualizerProps) {
  const { value, start } = useAnimation({
    duration,
    easingFunction,
    autoStart: true,
    onComplete: () => {
      // Loop the animation
      setTimeout(() => start(), 300);
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs font-medium text-gray-700">{label}</div>
      <div className="relative h-8 bg-gray-100 rounded overflow-hidden">
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full"
          style={{
            left: `calc(${value * 100}% - 12px)`,
            transition: 'none',
          }}
        />
      </div>
    </div>
  );
}

/**
 * Grid of easing visualizers
 */
export function EasingGrid({
  easings,
}: {
  easings: Array<{ fn: (t: number) => number; label: string }>;
}) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {easings.map((easing) => (
        <EasingVisualizer
          key={easing.label}
          easingFunction={easing.fn}
          label={easing.label}
        />
      ))}
    </div>
  );
}

/**
 * Comparison view showing multiple easing functions side by side
 */
export function EasingComparison({
  easings,
}: {
  easings: Array<{ fn: (t: number) => number; label: string; color: string }>;
}) {
  const [time, setTime] = useState(0);
  const duration = 1500;

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = (elapsed % (duration + 300)) / duration;

      setTime(t > 1 ? 0 : t);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration]);

  return (
    <div className="relative h-48 bg-gray-100 rounded overflow-hidden">
      {easings.map((easing, index) => {
        const easedValue = time <= 1 ? easing.fn(time) : 0;
        return (
          <div
            key={easing.label}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `calc(${easedValue * 100}% - 6px)`,
              top: `${20 + index * 30}px`,
              backgroundColor: easing.color,
            }}
            title={easing.label}
          />
        );
      })}
      <div className="absolute bottom-2 left-2 right-2">
        {easings.map((easing) => (
          <div key={easing.label} className="flex items-center gap-2 text-xs">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: easing.color }}
            />
            <span className="text-gray-700">{easing.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
