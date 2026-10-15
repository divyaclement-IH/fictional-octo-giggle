/**
 * Lock Notification Component (§6.2)
 *
 * Reusable iOS push notification card with:
 * - App icon
 * - Title
 * - Timestamp
 * - Body text
 * - Frosted glass/blur effect styling
 *
 * Design: Adapted from Figma import /src/imports/IOsLockScreen/IOsLockScreen.tsx
 * Story consistency: Title/body text from story bible via props
 */

import React, { useRef } from 'react';
import { formatNotificationTime } from '../../../../utils/formatters';
import svgPaths from '@/imports/IOsPushNotification/svg-wbxlhztogi';
import { imgBlur } from '@/imports/IOsPushNotification/svg-3rk7z';

export interface LockNotificationProps {
  /** Notification title */
  title: string;
  /** Notification body text */
  body: string;
  /** Timestamp for notification */
  timestamp: Date;
  /** Optional callback when notification is tapped */
  onTap?: () => void;
  /** Optional callback when notification is pressed and held */
  onPressAndHold?: () => void;
  /** Duration in ms for press-and-hold to trigger (default: 500) */
  pressHoldDuration?: number;
}

export function LockNotification({
  title,
  body,
  timestamp,
  onTap,
  onPressAndHold,
  pressHoldDuration = 500
}: LockNotificationProps) {
  const time = formatNotificationTime(timestamp);
  const pressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseDown = () => {
    if (onPressAndHold) {
      pressTimerRef.current = setTimeout(() => {
        onPressAndHold();
      }, pressHoldDuration);
    }
  };

  const handleMouseUp = () => {
    if (pressTimerRef.current) {
      clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
  };

  const handleClick = () => {
    // Only trigger tap if press-and-hold didn't fire
    if (onTap && !pressTimerRef.current) {
      onTap();
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      className="content-stretch flex gap-[10px] items-center justify-center pl-[14px] pr-[17px] py-[13px] relative rounded-[24px] shrink-0 w-[358px] cursor-pointer"
      data-name="iOS/Push Notification"
    >
      {/* Shadow effect */}
      <div className="absolute inset-[-26px]" data-name="Shadow">
        <div
          className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]"
          style={{ maskImage: `url('${imgBlur}')` }}
          data-name="Blur"
        >
          <div
            aria-hidden="true"
            className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]"
          />
        </div>
      </div>

      {/* Glass effect overlay */}
      <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />

      {/* App icon */}
      <div
        className="content-stretch flex flex-col gap-[2.969px] items-center relative rounded-[5.047px] shrink-0 w-[38px] z-10"
        data-name="App Icon"
      >
        <div className="bg-[#0012e7] overflow-clip relative rounded-[9.5px] shrink-0 size-[38px]" data-name="Icon">
          <div
            className="-translate-x-1/2 -translate-y-1/2 absolute h-[24.938px] left-1/2 overflow-clip top-1/2 w-[23.75px]"
            data-name="Included Health Logo/IH white/False"
          >
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 23.462 24.9375"
            >
              <g id="Mark">
                <path d={svgPaths.p3d240270} fill="white" />
                <path d={svgPaths.p1a317000} fill="white" />
                <path d={svgPaths.p33f31770} fill="white" />
                <path d={svgPaths.p2ad75400} fill="white" />
                <path d={svgPaths.p3792b580} fill="white" />
                <path d={svgPaths.p1dd5db80} fill="white" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Notification content */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch z-10">
        <div
          className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative"
          data-name="Title, Time and Description"
        >
          {/* Title and timestamp */}
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Title and Time">
            <p
              className="flex-[1_0_0] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[17px] min-w-px relative text-[15px] text-white tracking-[-0.23px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {title}
            </p>
            <div className="content-stretch flex items-center justify-center mix-blend-plus-lighter relative shrink-0" data-name="Time">
              <p
                className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-white text-[15px] text-right whitespace-nowrap opacity-70"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {time}
              </p>
            </div>
          </div>

          {/* Body text */}
          <p
            className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[15px] text-white tracking-[-0.23px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
