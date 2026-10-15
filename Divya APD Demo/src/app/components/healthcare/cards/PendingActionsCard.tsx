/**
 * PendingActionsCard Component
 *
 * Card that displays count of pending actions and navigates to full actions list.
 * Used on Today screen in "Your actions" section.
 *
 * Design: Included Health Design System
 * Source: Figma Today screen
 */

import React from 'react';
import chevronIconPaths from '@/imports/ListItem/svg-ent6txxqqx';

export interface PendingActionsCardProps {
  count: number;
  onClick?: () => void;
}

export function PendingActionsCard({ count, onClick }: PendingActionsCardProps) {
  return (
    <div
      className="bg-white relative rounded-[24px] w-full cursor-pointer"
      onClick={onClick}
      data-name="Pending Actions Card"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
              {/* Text */}
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
                  <p className="leading-[24px]">{count} pending action{count !== 1 ? 's' : ''}</p>
                </div>
              </div>

              {/* Arrow icon */}
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute inset-[0_15.83%_0_29.17%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8 16">
                    <path d={chevronIconPaths.p178c6e80} fill="#0012E7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}
