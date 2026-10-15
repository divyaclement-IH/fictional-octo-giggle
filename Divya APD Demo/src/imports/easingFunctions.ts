/**
 * Easing Functions
 *
 * Collection of easing equations for smooth animations.
 * Each function takes a value t (0-1) and returns the eased value.
 *
 * Usage:
 * - t: current time (0 to 1)
 * - Returns: eased value (typically 0 to 1, but may overshoot for elastic/back)
 */

// Linear
export const linear = (t: number): number => t;

// Quadratic
export const easeInQuad = (t: number): number => t * t;
export const easeOutQuad = (t: number): number => t * (2 - t);
export const easeInOutQuad = (t: number): number =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

// Cubic
export const easeInCubic = (t: number): number => t * t * t;
export const easeOutCubic = (t: number): number => (--t) * t * t + 1;
export const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

// Quartic
export const easeInQuart = (t: number): number => t * t * t * t;
export const easeOutQuart = (t: number): number => 1 - (--t) * t * t * t;
export const easeInOutQuart = (t: number): number =>
  t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;

// Quintic
export const easeInQuint = (t: number): number => t * t * t * t * t;
export const easeOutQuint = (t: number): number => 1 + (--t) * t * t * t * t;
export const easeInOutQuint = (t: number): number =>
  t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;

// Sine
export const easeInSine = (t: number): number => 1 - Math.cos((t * Math.PI) / 2);
export const easeOutSine = (t: number): number => Math.sin((t * Math.PI) / 2);
export const easeInOutSine = (t: number): number => -(Math.cos(Math.PI * t) - 1) / 2;

// Exponential
export const easeInExpo = (t: number): number =>
  t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
export const easeOutExpo = (t: number): number =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
export const easeInOutExpo = (t: number): number => {
  if (t === 0 || t === 1) return t;
  if (t < 0.5) return Math.pow(2, 20 * t - 10) / 2;
  return (2 - Math.pow(2, -20 * t + 10)) / 2;
};

// Circular
export const easeInCirc = (t: number): number => 1 - Math.sqrt(1 - t * t);
export const easeOutCirc = (t: number): number => Math.sqrt(1 - (--t) * t);
export const easeInOutCirc = (t: number): number =>
  t < 0.5
    ? (1 - Math.sqrt(1 - 4 * t * t)) / 2
    : (Math.sqrt(1 - (-2 * t + 2) * (-2 * t + 2)) + 1) / 2;

// Back
export const easeInBack = (t: number): number => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return c3 * t * t * t - c1 * t * t;
};

export const easeOutBack = (t: number): number => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

export const easeInOutBack = (t: number): number => {
  const c1 = 1.70158;
  const c2 = c1 * 1.525;
  return t < 0.5
    ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
    : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
};

// Elastic
export const easeInElastic = (t: number): number => {
  const c4 = (2 * Math.PI) / 3;
  return t === 0
    ? 0
    : t === 1
    ? 1
    : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
};

export const easeOutElastic = (t: number): number => {
  const c4 = (2 * Math.PI) / 3;
  return t === 0
    ? 0
    : t === 1
    ? 1
    : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
};

export const easeInOutElastic = (t: number): number => {
  const c5 = (2 * Math.PI) / 4.5;
  return t === 0
    ? 0
    : t === 1
    ? 1
    : t < 0.5
    ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c5)) / 2
    : (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c5)) / 2 + 1;
};

// Bounce
export const easeInBounce = (t: number): number => 1 - easeOutBounce(1 - t);

export const easeOutBounce = (t: number): number => {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (t < 1 / d1) {
    return n1 * t * t;
  } else if (t < 2 / d1) {
    return n1 * (t -= 1.5 / d1) * t + 0.75;
  } else if (t < 2.5 / d1) {
    return n1 * (t -= 2.25 / d1) * t + 0.9375;
  } else {
    return n1 * (t -= 2.625 / d1) * t + 0.984375;
  }
};

export const easeInOutBounce = (t: number): number =>
  t < 0.5
    ? (1 - easeOutBounce(1 - 2 * t)) / 2
    : (1 + easeOutBounce(2 * t - 1)) / 2;

// Helper function to apply easing to a range
export const applyEasing = (
  easingFunction: (t: number) => number,
  t: number,
  start: number,
  end: number
): number => {
  return start + (end - start) * easingFunction(t);
};

// Easing presets for common use cases
export const easingPresets = {
  // Smooth and natural
  smooth: easeInOutCubic,

  // Quick start, slow end (good for dropdowns, modals)
  ease: easeOutCubic,

  // Slow start, quick end (good for dismissals)
  easeIn: easeInCubic,

  // Bouncy entrance (good for success states, notifications)
  bouncy: easeOutBack,

  // Springy (good for interactive elements)
  spring: easeOutElastic,

  // Sharp (good for attention-grabbing)
  sharp: easeInOutQuart,
} as const;
