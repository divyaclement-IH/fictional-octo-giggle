/**
 * Filter Bar Component
 *
 * Generic filter display showing current active filters with chips.
 * Currently non-functional (interactive UI only).
 *
 * Design: Included Health iOS app
 * Source: Figma My Health Activity/Medicine screens
 */

import React from 'react';

export interface FilterChip {
  label: string;
  icon: React.ReactNode;
}

export interface FilterBarProps {
  filters: FilterChip[];
}

export function FilterBar({ filters }: FilterBarProps) {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[4px_8px] items-center p-[16px] relative rounded-[16px] w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[20px]">Showing </p>
      </div>
      {filters.map((filter, index) => (
        <React.Fragment key={index}>
          <button
            className="content-stretch flex gap-[4px] items-center justify-center min-w-[68px] relative rounded-[24px] shrink-0"
            disabled
          >
            <div className="overflow-clip relative shrink-0 size-[16px]">
              {filter.icon}
            </div>
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0012e7] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">{filter.label}</p>
            </div>
          </button>
          {index < filters.length - 1 && (
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
              <p className="leading-[20px]">,</p>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
