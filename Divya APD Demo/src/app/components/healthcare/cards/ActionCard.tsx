/**
 * ActionCard Component
 *
 * Displays an action item that needs user attention.
 * Used on Today screen in "Your actions" section.
 *
 * Design: Included Health Design System
 * Source: Figma Today screen
 */

import React from 'react';

export interface ActionTag {
  label: string;
  variant: 'new' | 'info';
  icon?: React.ReactNode;
}

export interface ActionCardProps {
  title: string;
  description: string;
  tags: ActionTag[];
  onMenuClick?: () => void;
  onClick?: () => void;
}

const TAG_VARIANT_STYLES = {
  new: {
    bg: 'bg-[#eafaf1]',
    text: 'text-[#005330]'
  },
  info: {
    bg: 'bg-[#f2f2f2]',
    text: 'text-black'
  }
};

export function ActionCard({ title, description, tags, onMenuClick, onClick }: ActionCardProps) {
  return (
    <div
      className="bg-white relative rounded-[24px] w-full cursor-pointer"
      onClick={onClick}
      data-name="Action Card"
    >
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[16px] px-[16px] relative size-full">
        {/* Title and description */}
        <div className="content-stretch flex items-center relative shrink-0 w-full mb-[4px]">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-w-px relative text-black">
            <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[16px] w-full">
              <p className="leading-[24px]">{title}</p>
            </div>
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[14px] w-[min-content]">
              <p className="leading-[20px]">{description}</p>
            </div>
          </div>
        </div>

        {/* Tags and menu button */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-center flex flex-wrap gap-[4px] items-center relative shrink-0">
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`${TAG_VARIANT_STYLES[tag.variant].bg} content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0`}
              >
                {tag.icon && (
                  <div className="overflow-clip relative shrink-0 size-[12px]">
                    {tag.icon}
                  </div>
                )}
                <p className={`font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 ${TAG_VARIANT_STYLES[tag.variant].text} text-[12px] text-center text-ellipsis whitespace-nowrap`}>
                  {tag.label}
                </p>
              </div>
            ))}
          </div>

          {/* Menu button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMenuClick?.();
            }}
            className="relative shrink-0 size-[48px]"
          >
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" fill="#F2F2F2" r="16" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2">
              <div className="absolute inset-[36.46%_0]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 3.79167">
                  <g>
                    <path d="M1.89585 3.79167C2.94168 3.79167 3.79169 2.94166 3.79169 1.89583C3.79169 0.849997 2.94168 0 1.89585 0C0.850013 0 0 0.849997 0 1.89583C0 2.94166 0.850013 3.79167 1.89585 3.79167Z" fill="#0012E7" />
                    <path d="M7 3.79167C8.04584 3.79167 8.89585 2.94166 8.89585 1.89583C8.89585 0.849997 8.04584 0 7 0C5.95417 0 5.10416 0.849997 5.10416 1.89583C5.10416 2.94166 5.95417 3.79167 7 3.79167Z" fill="#0012E7" />
                    <path d="M12.1042 3.79167C13.15 3.79167 14 2.94166 14 1.89583C14 0.849997 13.15 0 12.1042 0C11.0583 0 10.2083 0.849997 10.2083 1.89583C10.2083 2.94166 11.0583 3.79167 12.1042 3.79167Z" fill="#0012E7" />
                  </g>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
