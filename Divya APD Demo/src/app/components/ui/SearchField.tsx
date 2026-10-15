/**
 * Search Field Component
 *
 * Generic search input with icon. Used in Activity and Medicine tabs.
 * Currently non-functional (interactive UI only).
 *
 * Design: Included Health iOS app
 * Source: Figma My Health Activity/Medicine screens
 */

import React from 'react';
import searchIconPaths from '@/imports/TextField/svg-39133wrbca';

export interface SearchFieldProps {
  placeholder: string;
}

export function SearchField({ placeholder }: SearchFieldProps) {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[0.88%_1.05%_1.05%_0.87%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 19.6144 19.615"
              >
                <path d={searchIconPaths.p25477580} fill="#3B3B3B" />
              </svg>
            </div>
          </div>
          <input
            type="text"
            placeholder={placeholder}
            className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[#6d6d6d] text-[16px] bg-transparent border-none outline-none placeholder:text-[#6d6d6d]"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
