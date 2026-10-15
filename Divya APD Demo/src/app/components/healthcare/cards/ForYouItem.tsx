/**
 * For You Item Component
 *
 * Card for personalized content recommendations in the Get Care screen.
 * Displays image, title, optional chips, and summary text.
 *
 * Design: Figma Get Care screen "For You" items
 * Source: /src/imports/ForYouItem/ForYouItem.tsx
 */

import React from 'react';
import { Chip, type ChipVariant } from '../../ui/Chip';
import svgPaths from '@/imports/ForYouItem/svg-sft7e9cnny';

export interface ForYouChip {
  label: string;
  variant: ChipVariant;
  icon?: React.ReactNode;
}

export interface ForYouItemProps {
  /** Image source URL */
  imageSrc: string;
  /** Item title */
  title: string;
  /** Optional chips (max 2) */
  chips?: ForYouChip[];
  /** Summary text */
  summary: string;
  /** Show bottom border */
  showBorder?: boolean;
  /** Callback when item is tapped */
  onClick?: () => void;
  /** Callback when trash icon is clicked */
  onRemove?: () => void;
}

export function ForYouItem({
  imageSrc,
  title,
  chips = [],
  summary,
  showBorder = true,
  onClick,
  onRemove
}: ForYouItemProps) {
  const handleRemoveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full"
      data-name="For You Item"
    >
      {/* Bottom border */}
      {showBorder && (
        <div
          aria-hidden="true"
          className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none"
        />
      )}

      {/* Item Container with Image and Trash Button */}
      <div
        onClick={onClick}
        className="h-[120px] overflow-clip relative rounded-[16px] shrink-0 w-full cursor-pointer"
        data-name="Item Container"
      >
        <div className="absolute h-[132px] left-0 top-0 w-full" data-name="Image Container">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imageSrc}
          />
        </div>

        {/* Header Container with Trash Button */}
        <div
          className="absolute content-stretch flex items-center justify-end left-[8px] top-[7px] right-[8px]"
          data-name="Header Container"
        >
          <button
            onClick={handleRemoveClick}
            className="relative shrink-0 size-[48px]"
            data-name="Icon Button"
            aria-label="Remove item"
          >
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 32 32"
              >
                <circle cx="16" cy="16" fill="#F2F2F2" r="16" />
              </svg>
            </div>
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2"
              data-name="trash"
            >
              <div className="absolute inset-[0.03%_8.33%_0_8.33%]" data-name="Vector">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 11.6667 13.9955"
                >
                  <g id="Vector">
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p26aa8880}
                      fill="#0012E7"
                      fillRule="evenodd"
                    />
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p10b0d280}
                      fill="#0012E7"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div
        onClick={onClick}
        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full cursor-pointer"
        data-name="Content Container"
      >
        {/* Title Container */}
        <div
          className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full"
          data-name="Title Container"
        >
          <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[16px] text-black">
            <p className="leading-[24px]">{title}</p>
          </div>

          {/* Chips */}
          {chips.length > 0 && (
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Chips">
              {chips.slice(0, 2).map((chip, index) => (
                <Chip
                  key={index}
                  label={chip.label}
                  variant={chip.variant}
                  icon={chip.icon}
                />
              ))}
            </div>
          )}
        </div>

        {/* Body Container */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body Container">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
