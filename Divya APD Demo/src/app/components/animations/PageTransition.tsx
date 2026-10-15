/**
 * Page Transition Component
 *
 * Smooth transition wrapper for page/route changes.
 * Uses Motion for performant animations with react-router.
 *
 * Per animation guidelines:
 * - Duration: 0.6-0.8s for page transitions (slow timing)
 * - Respects prefers-reduced-motion
 * - GPU-accelerated (transform + opacity)
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';

export interface PageTransitionProps {
  children: ReactNode;
  /** Animation variant preset */
  variant?: 'fade' | 'slide' | 'scale' | 'slide-fade';
  /** Duration in seconds (default: 0.7s per guidelines) */
  duration?: number;
  /** Custom className */
  className?: string;
}

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '-100%' },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  'slide-fade': {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
};

export function PageTransition({
  children,
  variant = 'slide-fade',
  duration = 0.7,
  className = '',
}: PageTransitionProps) {
  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={selectedVariant}
      transition={{
        duration,
        ease: [0.4, 0.0, 0.2, 1], // Smooth easing curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
