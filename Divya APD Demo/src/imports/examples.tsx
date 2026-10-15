/**
 * Animation Examples
 *
 * Demonstrates common use cases for easing functions and animated components
 */

import { useState } from 'react';
import { AnimatedCard, SkeletonCard, AnimatedProgressBar } from './AnimatedCard';
import { useAnimation, useAnimatedValue } from '../easing/useAnimation';
import { easingPresets, easeOutBack, easeOutElastic } from '../easing/easingFunctions';

/**
 * Example: Card loading with staggered animation
 */
export function StaggeredCards() {
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];

  return (
    <div className="space-y-4">
      {cards.map((card, index) => (
        <AnimatedCard
          key={card}
          easingFunction={easingPresets.bouncy}
          duration={600}
          delay={index * 100}
          className="bg-white border border-gray-200 p-4 rounded-lg shadow"
        >
          <h3 className="font-bold">{card}</h3>
          <p className="text-sm text-gray-600">This card animates with a delay</p>
        </AnimatedCard>
      ))}
    </div>
  );
}

/**
 * Example: Loading state with skeleton
 */
export function LoadingCards({ isLoading = true }: { isLoading?: boolean }) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white border border-gray-200 p-4 rounded-lg">
            <SkeletonCard className="h-6 w-3/4 mb-2" />
            <SkeletonCard className="h-4 w-full mb-1" />
            <SkeletonCard className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i, index) => (
        <AnimatedCard
          key={i}
          easingFunction={easingPresets.smooth}
          duration={500}
          delay={index * 50}
          className="bg-white border border-gray-200 p-4 rounded-lg"
        >
          <h3 className="font-bold">Loaded Card {i}</h3>
          <p className="text-sm text-gray-600">Content loaded successfully</p>
        </AnimatedCard>
      ))}
    </div>
  );
}

/**
 * Example: Interactive button with scale animation
 */
export function AnimatedButton() {
  const [isPressed, setIsPressed] = useState(false);
  const { value } = useAnimation({
    duration: 200,
    easingFunction: easeOutBack,
    autoStart: isPressed,
  });

  const scale = isPressed ? 0.95 : 1 + value * 0.05;

  return (
    <button
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      style={{
        transform: `scale(${scale})`,
        transition: 'transform 0.1s',
      }}
    >
      Press Me
    </button>
  );
}

/**
 * Example: Number counter animation
 */
export function AnimatedCounter({ target = 100 }: { target?: number }) {
  const { value } = useAnimatedValue({
    from: 0,
    to: target,
    duration: 2000,
    easingFunction: easeOutElastic,
    autoStart: true,
  });

  return (
    <div className="text-4xl font-bold text-blue-600">
      {Math.round(value)}
    </div>
  );
}

/**
 * Example: Multi-step progress with easing
 */
export function MultiStepProgress({ currentStep = 0, totalSteps = 4 }: { currentStep?: number; totalSteps?: number }) {
  const progress = currentStep / totalSteps;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Step {currentStep} of {totalSteps}</span>
        <span>{Math.round(progress * 100)}%</span>
      </div>
      <AnimatedProgressBar
        progress={progress}
        easingFunction={easingPresets.ease}
        duration={500}
      />
    </div>
  );
}
