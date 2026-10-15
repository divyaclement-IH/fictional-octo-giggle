/**
 * PromptInput Component
 *
 * Chat input variant for prompting conversations outside of messaging interface.
 * Used on Today screen to initiate conversations with Dot.
 *
 * Design: Included Health Design System
 * Source: Figma Today screen
 */

import React from 'react';
import svgPaths from '@/imports/ChatInput-3/svg-zfxlf0xot0';

export interface PromptInputProps {
  placeholder?: string;
  onSubmit?: () => void;
  onClick?: () => void;
}

export function PromptInput({
  placeholder = 'Ask Dot...',
  onSubmit,
  onClick
}: PromptInputProps) {
  return (
    <div
      className="bg-[rgba(255,255,255,0.7)] h-[62px] relative rounded-[24px] w-full cursor-pointer"
      onClick={onClick}
      data-name="Prompt Input"
    >
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            {/* Dot icon + placeholder */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[31.25%_53.6%_31.25%_8.9%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                    <path d={svgPaths.p3488a200} fill="#0012E7" />
                  </svg>
                </div>
                <div className="absolute inset-[31.25%_9.85%_31.25%_52.65%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                    <path d={svgPaths.p3488a200} fill="#0012E7" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-[46.4%] right-[28.6%] top-3/4">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <path d={svgPaths.p969ae00} fill="#002380" />
                  </svg>
                </div>
                <div className="absolute bottom-3/4 left-[27.65%] right-[47.35%] top-0">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <path d={svgPaths.p969ae00} fill="#578EE8" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6d6d6d] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">{placeholder}</p>
              </div>
            </div>

            {/* Send button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSubmit?.();
              }}
              className="relative shrink-0 size-[34px]"
            >
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" fill="#F2F2F2" r="16" />
                </svg>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%+0.2px)] size-[14.4px] top-[calc(50%+0.2px)]">
                <div className="h-[12px] relative shrink-0 w-[13.091px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0909 12">
                    <path d={svgPaths.p28106800} fill="#8F8F8F" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
