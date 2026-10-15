/**
 * Activity List Item Component
 *
 * Displays an activity entry (visit, lab result, prescription) from the My Health > Activity tab.
 * Supports different action types: chevron (navigate), icon button (add to calendar), or none.
 *
 * Design: Included Health iOS app
 * Source: Figma My Health Activity screens
 */

import React from 'react';
import type { ActivityItem } from '@/data/appState';
import chevronIconPaths from '@/imports/ListItem/svg-ent6txxqqx';
import calendarAddIconPaths from '@/imports/ListItem-1/svg-kqm1nqagjx';

export type ActivityActionType = 'chevron' | 'icon-button' | 'none';

export interface ActivityListItemProps {
  item: ActivityItem;
  actionType?: ActivityActionType;
  showBorder?: boolean;
  onClick?: () => void;
  onIconButtonClick?: () => void;
}

export function ActivityListItem({
  item,
  actionType = 'chevron',
  showBorder = true,
  onClick,
  onIconButtonClick
}: ActivityListItemProps) {
  const formattedDate = formatActivityDate(item.date, item.timeLocal);

  const handleClick = () => {
    if (actionType === 'chevron' && onClick) {
      onClick();
    }
  };

  const handleIconButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onIconButtonClick) {
      onIconButtonClick();
    }
  };

  return (
    <div
      className="content-stretch flex gap-[16px] items-center pb-[16px] pt-[8px] relative w-full"
      data-name="Activity List Item"
    >
      {/* Text content */}
      <button
        onClick={handleClick}
        disabled={actionType === 'none'}
        className="content-stretch flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-start leading-[0] min-w-px relative text-left"
      >
        <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-black w-full">
          <p className="leading-[24px]">{item.title}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
          <p className="leading-[20px]">{formattedDate}</p>
        </div>
      </button>

      {/* Action icons */}
      {actionType === 'chevron' && (
        <button
          onClick={handleClick}
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
      )}

      {actionType === 'icon-button' && (
        <button
          onClick={handleIconButtonClick}
          className="h-[56px] relative shrink-0 w-[36px]"
        >
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 32 32"
            >
              <circle cx="16" cy="16" fill="#F2F2F2" r="16" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 14 14"
            >
              <g>
                <path d={calendarAddIconPaths.p189a2500} fill="#0012E7" />
                <path
                  clipRule="evenodd"
                  d={calendarAddIconPaths.p37a2d500}
                  fill="#0012E7"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>
        </button>
      )}

      {/* Bottom border */}
      {showBorder && (
        <div className="absolute bottom-0 content-stretch flex flex-col h-px items-start left-0 right-0">
          <div className="bg-[#e1e1e1] h-px shrink-0 w-full" />
        </div>
      )}
    </div>
  );
}

/**
 * Format activity date with optional time
 */
function formatActivityDate(dateStr: string, timeLocal?: string): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  if (timeLocal) {
    return `${formattedDate} at ${timeLocal}`;
  }

  return formattedDate;
}
