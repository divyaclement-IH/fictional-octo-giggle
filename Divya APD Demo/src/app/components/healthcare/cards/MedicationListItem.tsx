/**
 * Medication List Item Component
 *
 * Displays a medication entry from the My Health > Medicine tab.
 * Includes leading pill icon, medication name, status chip, subline, and chevron.
 *
 * Design: Included Health iOS app
 * Source: Figma My Health Medicine screens
 */

import React from 'react';
import type { MedicationItem } from '@/data/appState';
import { Chip, type ChipVariant } from '../../ui/Chip';
import { PillIcon, type PillIconTone } from '../../ui/icons/PillIcon';
import chevronIconPaths from '@/imports/ListItem/svg-ent6txxqqx';

export interface MedicationListItemProps {
  item: MedicationItem;
  showBorder?: boolean;
  onClick?: () => void;
}

export function MedicationListItem({ item, showBorder = true, onClick }: MedicationListItemProps) {
  // Map leadingTone to visual properties
  const tone: PillIconTone = item.leadingTone === 'success' ? 'success' : 'warning';
  const bgColor = item.leadingTone === 'success' ? '#F7FBF9' : '#FFFBF5';

  // Map statusTag variant to chip variant
  const chipVariant: ChipVariant = item.statusTag.variant === 'just_started' ? 'success' : 'warning';

  return (
    <div
      className="content-stretch flex gap-[16px] items-center py-[16px] relative w-full"
      data-name="Medication List Item"
    >
      {/* Leading visual - pill icon */}
      <div className="overflow-clip relative shrink-0 size-[56px]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 56 56"
        >
          <circle cx="28" cy="28" fill={bgColor} r="28" />
        </svg>
        <div className="absolute inset-[28.57%]">
          <PillIcon tone={tone} size={24} />
        </div>
      </div>

      {/* Content */}
      <button
        onClick={onClick}
        className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative text-left"
      >
        {/* Medication name */}
        <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
          <p className="leading-[24px]">{item.name}</p>
        </div>

        {/* Status chip */}
        {item.statusTag && (
          <div className="content-center flex flex-wrap gap-[4px] items-center relative shrink-0 w-full">
            <Chip label={item.statusTag.label} variant={chipVariant} />
          </div>
        )}

        {/* Subline */}
        <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
          <p className="leading-[20px]">{item.subline}</p>
        </div>
      </button>

      {/* Chevron */}
      <button
        onClick={onClick}
        className="overflow-clip relative shrink-0 size-[16px]"
      >
        <div className="absolute inset-[0_15.83%_0_29.17%]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8.8 16"
          >
            <path d={chevronIconPaths.p178c6e80} fill="#0012E7" />
          </svg>
        </div>
      </button>

      {/* Bottom border */}
      {showBorder && (
        <div className="absolute bottom-0 content-stretch flex flex-col h-px items-start left-0 right-0">
          <div className="bg-[#e1e1e1] h-px shrink-0 w-full" />
        </div>
      )}
    </div>
  );
}
