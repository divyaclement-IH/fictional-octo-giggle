/**
 * PromptChip Component
 *
 * Interactive chip for quick prompt suggestions.
 * Used on Today screen below Dot prompt input.
 *
 * Design: Included Health Design System
 * Source: Figma Today screen
 */

import React from 'react';

export interface PromptChipProps {
  label: string;
  onClick?: () => void;
}

export function PromptChip({ label, onClick }: PromptChipProps) {
  return (
    <div
      className="bg-white content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0 cursor-pointer"
      onClick={onClick}
      data-name="Prompt Chip"
    >
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}
