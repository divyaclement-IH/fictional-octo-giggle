/**
 * Chip Component
 *
 * Small tag/pill for displaying status, categories, or filters.
 * Supports different variants with semantic colors.
 *
 * Design: Included Health Design System
 * Source: Figma My Health Medicine screens
 */

import React from 'react';

export type ChipVariant = 'success' | 'warning' | 'info' | 'neutral';

export interface ChipProps {
  label: string;
  variant?: ChipVariant;
  icon?: React.ReactNode;
}

const VARIANT_STYLES: Record<ChipVariant, { bg: string; text: string }> = {
  success: {
    bg: 'bg-[#eafaf1]',
    text: 'text-[#005330]'
  },
  warning: {
    bg: 'bg-[#fcf4e6]',
    text: 'text-[#662600]'
  },
  info: {
    bg: 'bg-[#e6effe]',
    text: 'text-[#002380]'
  },
  neutral: {
    bg: 'bg-[#f2f2f2]',
    text: 'text-[#3b3b3b]'
  }
};

export function Chip({ label, variant = 'neutral', icon }: ChipProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className={`${styles.bg} content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0`}
      data-name="Chip"
    >
      {icon && <div className="shrink-0">{icon}</div>}
      <p
        className={`font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 ${styles.text} text-[12px] text-center text-ellipsis whitespace-nowrap`}
      >
        {label}
      </p>
    </div>
  );
}
