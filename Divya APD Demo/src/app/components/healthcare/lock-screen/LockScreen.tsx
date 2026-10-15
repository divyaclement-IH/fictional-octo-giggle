/**
 * Lock Screen Component (§6.1)
 *
 * Reusable iOS lock screen with:
 * - Background wallpaper
 * - Status bar (time, signal, wifi, battery)
 * - Large time display
 * - Date display
 * - Notification area (optional)
 *
 * Design: Adapted from Figma import /src/imports/IOsLockScreen/IOsLockScreen.tsx
 * Story consistency: Date/time values pulled from story bible via props
 */

import React, { ReactNode } from 'react';
import { formatLockScreenDate, formatLockScreenTime } from '../../../../utils/formatters';
import imgIOsLockScreen from '@/imports/IOsLockScreen/f4e8b98baf01df251fad69c06120eb2503116f35.png';
import svgPaths from '@/imports/IOsLockScreen/svg-uaip6vwm1b';

export interface LockScreenProps {
  /** Date/time for this lock screen moment (from story bible) */
  dateTime: Date;
  /** Notification component to display (optional) */
  notification?: ReactNode;
  /** Click handler for notification tap */
  onNotificationTap?: () => void;
}

export function LockScreen({ dateTime, notification, onNotificationTap }: LockScreenProps) {
  const lockDate = formatLockScreenDate(dateTime);
  const lockTime = formatLockScreenTime(dateTime);

  return (
    <div className="relative size-full" data-name="iOS/Lock Screen">
      <div className="absolute inset-0 overflow-clip rounded-[24px]" data-name="Lock Screen">
        {/* Background wallpaper */}
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgIOsLockScreen}
        />

        {/* Overlay gradients */}
        <div
          className="absolute h-[815.299px] left-0 top-0 w-[375px]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)',
          }}
          data-name="Overlay"
        />

        {/* Large time display */}
        <div
          className="-translate-x-1/2 absolute h-[68.002px] left-[calc(50%-7.83px)] top-[111.32px] w-[159.711px]"
          data-name="Time"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 159.711 68.002"
          >
            <g id="Time">
              <text
                x="80"
                y="50"
                textAnchor="middle"
                className="fill-white text-[56px] font-['SF_Pro:Medium',sans-serif]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {lockTime}
              </text>
            </g>
          </svg>
        </div>

        {/* Date display */}
        <p
          className="-translate-x-1/2 absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] left-[calc(50%-0.47px)] text-white text-[20.522px] text-center top-[70.9px] w-[200.56px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {lockDate}
        </p>

        {/* Status bar */}
        <div className="absolute h-[57.836px] left-0 right-0 top-0" data-name="Progressive Blur">
          <div
            aria-hidden="true"
            className="absolute backdrop-blur-[0px] bg-black inset-0 mix-blend-screen pointer-events-none"
          />
          <div
            className="absolute content-stretch flex items-center justify-end left-0 pb-[17.724px] pt-[19.59px] px-[22.388px] top-0 w-[375px]"
            data-name="Status bar - iPhone"
          >
            {/* Status bar icons (signal, wifi, battery) */}
            <div className="h-[20.522px] relative" data-name="Levels">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[6.53px] items-center justify-center pr-[0.933px] pt-[0.933px] relative size-full">
                  {/* Cellular signal */}
                  <div className="h-[11.405px] relative shrink-0 w-[17.91px]" data-name="Cellular Connection">
                    <svg
                      className="absolute block inset-0 size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 17.9104 11.4052"
                    >
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p418eda0}
                        fill="white"
                        fillRule="evenodd"
                        id="Cellular Connection"
                      />
                    </svg>
                  </div>

                  {/* Wifi */}
                  <div className="h-[11.5px] relative shrink-0 w-[15.99px]" data-name="Wifi">
                    <svg
                      className="absolute block inset-0 size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 15.9904 11.5003"
                    >
                      <path clipRule="evenodd" d={svgPaths.p13dddb00} fill="white" fillRule="evenodd" id="Wifi" />
                    </svg>
                  </div>

                  {/* Battery */}
                  <div className="h-[12.127px] relative shrink-0 w-[25.493px]" data-name="Frame">
                    <div className="absolute inset-[0_0_0_-0.23%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 25.5523 12.1269"
                      >
                        <g id="Frame">
                          <rect
                            height="11.194"
                            id="Border"
                            opacity="0.35"
                            rx="3.54478"
                            stroke="white"
                            strokeWidth="0.932836"
                            width="22.3881"
                            x="0.466418"
                            y="0.466418"
                          />
                          <path d={svgPaths.p31d47b00} fill="white" id="Cap" opacity="0.4" />
                          <rect
                            fill="white"
                            height="8.39552"
                            id="Capacity"
                            rx="2.33209"
                            width="19.5896"
                            x="1.86567"
                            y="1.86567"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification area */}
      {notification && (
        <div
          className="absolute bottom-[113.81px] content-stretch flex flex-col gap-[18.657px] items-center justify-end left-0 p-[18.657px] right-0 rounded-[4.664px]"
          data-name="Notifications"
          onClick={onNotificationTap}
        >
          <div
            className="absolute bg-[rgba(0,0,0,0.05)] blur-[46.642px] inset-[-9.33px_0_-15.56px_0]"
            data-name="Shadow"
          />
          {notification}
        </div>
      )}
    </div>
  );
}
