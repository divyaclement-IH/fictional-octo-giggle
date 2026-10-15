/**
 * Animation Patterns
 *
 * Common animation timing and sequencing patterns for UI elements
 */

export const animationPatterns = {
  /**
   * Card entrance animations
   */
  card: {
    fadeIn: {
      duration: 300,
      delay: 0,
    },
    slideUp: {
      duration: 400,
      delay: 0,
    },
    bounceIn: {
      duration: 600,
      delay: 0,
    },
  },

  /**
   * Loading state animations
   */
  loading: {
    skeleton: {
      duration: 1500,
      delay: 0,
    },
    spinner: {
      duration: 1000,
      delay: 0,
    },
    progressBar: {
      duration: 300,
      delay: 0,
    },
  },

  /**
   * Modal/Dialog animations
   */
  modal: {
    fadeIn: {
      duration: 200,
      delay: 0,
    },
    scaleIn: {
      duration: 250,
      delay: 0,
    },
    slideDown: {
      duration: 300,
      delay: 0,
    },
  },

  /**
   * List item stagger delays
   */
  stagger: {
    fast: 50, // 50ms between items
    medium: 100, // 100ms between items
    slow: 150, // 150ms between items
  },

  /**
   * Notification/Toast animations
   */
  notification: {
    slideInRight: {
      duration: 300,
      delay: 0,
    },
    fadeOut: {
      duration: 200,
      delay: 3000, // Auto-dismiss after 3s
    },
  },

  /**
   * Button interactions
   */
  button: {
    press: {
      duration: 100,
      delay: 0,
    },
    hover: {
      duration: 150,
      delay: 0,
    },
    ripple: {
      duration: 600,
      delay: 0,
    },
  },

  /**
   * Page transitions
   */
  page: {
    fadeIn: {
      duration: 400,
      delay: 0,
    },
    slideIn: {
      duration: 500,
      delay: 0,
    },
  },
} as const;

/**
 * Timing functions for common UI patterns
 */
export const timings = {
  instant: 0,
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 750,
  slowest: 1000,
} as const;

/**
 * Calculate staggered delay for list items
 */
export function getStaggerDelay(index: number, baseDelay: number = 100): number {
  return index * baseDelay;
}

/**
 * Get animation config for a card entrance
 */
export function getCardAnimation(index: number = 0, staggerDelay: number = 100) {
  return {
    duration: animationPatterns.card.slideUp.duration,
    delay: getStaggerDelay(index, staggerDelay),
  };
}
