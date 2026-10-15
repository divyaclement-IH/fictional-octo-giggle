/**
 * Service Item Component
 *
 * Individual service card for the Get Care > Services screen.
 * Supports internal (IH) and external services with different visual styling.
 *
 * Design: Figma Get Care Services screen
 * Source: /src/imports/ServiceItem/ServiceItem.tsx
 */

import React from 'react';
import svgPaths from '@/imports/ServiceItem/svg-zy3o4n5d3v';

export interface ServiceItemProps {
  /** Service name */
  name: string;
  /** Whether this is an external service (affects visual styling) */
  isExternal?: boolean;
  /** Optional icon/logo component */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
}

export function ServiceItem({
  name,
  isExternal = false,
  icon,
  onClick
}: ServiceItemProps) {
  // Visual styling based on service type
  const circleColor = isExternal ? '#FAFAFA' : '#E6EFFE';
  const iconColor = isExternal ? 'black' : '#002380';

  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className="bg-white relative rounded-[8px] shrink-0 w-full text-left"
      data-name="Service Item"
    >
      <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="<Slot>">
          {/* Leading visual - icon or placeholder */}
          <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Leading visual">
            {icon ? (
              <>{icon}</>
            ) : (
              <>
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 40 40"
                >
                  <circle cx="20" cy="20" fill={circleColor} id="Circle" r="20" />
                </svg>
                <div className="absolute inset-[28.57%] overflow-clip" data-name="Icon">
                  <div className="absolute inset-[0_0.01%_0_0]" data-name="Vector">
                    <svg
                      className="absolute block inset-0 size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 17.1415 17.1421"
                    >
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p327d8780}
                        fill={iconColor}
                        fillRule="evenodd"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Text frame */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text frame">
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
              <p className="leading-[24px]">{name}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </button>
  );
}
