/**
 * Provider Card Component
 *
 * Provider preview card with avatar, description, and optional time slots.
 * Design: Adapted from Figma import /src/imports/PreviewCard/PreviewCard.tsx
 */

import svgPaths from '@/imports/PreviewCard/svg-qgziiwukqm';

export interface TimeSlot {
  time: string;
  date: string;
}

export interface ProviderCardProps {
  providerName: string;
  providerImage: string;
  description: string;
  timeSlots?: TimeSlot[];
  showFullProfileButton?: boolean;
  onTimeSlotClick?: (slot: TimeSlot) => void;
  onFullProfileClick?: () => void;
}

export function ProviderCard({
  providerName,
  providerImage,
  description,
  timeSlots,
  showFullProfileButton = false,
  onTimeSlotClick,
  onFullProfileClick,
}: ProviderCardProps) {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] w-full"
      data-name="Provider Card"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]"
      />
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
          <div className="relative shrink-0 size-[48px]" data-name="Avatar">
            <div className="-translate-y-1/2 absolute aspect-[96/96] left-0 right-0 top-1/2" data-name="image">
              <img
                alt={providerName}
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-full"
                src={providerImage}
              />
            </div>
            <div className="absolute left-[32px] size-[16px] top-[32px]" data-name="Badge/Status">
              <div className="absolute inset-[-2.1%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0256 16.6718">
                  <path d={svgPaths.pefc7130} fill="#0012E7" stroke="white" strokeWidth="0.727273" />
                </svg>
              </div>
              <div
                className="-translate-y-1/2 absolute aspect-[28.000289916992188/29.866695404052734] left-[31.25%] right-[31.25%] top-[calc(50%+0.25px)]"
                data-name="Logo"
              >
                <div className="absolute inset-[71.59%_0_0_69.7%]" data-name="Bottom right circle">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816">
                    <path d={svgPaths.p4a0f800} fill="white" />
                  </svg>
                </div>
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.39993">
                  <g id="Center shapes">
                    <path d={svgPaths.p24c24bf0} fill="white" />
                    <path d={svgPaths.p10931800} fill="white" />
                    <path d={svgPaths.p30d5de00} fill="white" />
                  </g>
                </svg>
                <div className="absolute inset-[0_69.7%_71.59%_0]" data-name="Top left circle">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816">
                    <path d={svgPaths.p12e17e00} fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch"
            data-name="Text"
          >
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">
              {providerName}
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] w-full">
            {description}
          </p>
        </div>
      </div>

      {/* Optional time slots and full profile button */}
      {(timeSlots || showFullProfileButton) && (
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Button stack">
          {timeSlots && timeSlots.length > 0 && (
            <div className="content-stretch flex gap-[7px] h-[44px] items-start relative shrink-0 w-full" data-name="Appt buttons">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => onTimeSlotClick?.(slot)}
                  className="flex-[1_0_0] min-w-px relative rounded-[69px] self-stretch"
                  data-name={`Appt ${index + 1}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[69px]"
                  />
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col items-center justify-center leading-[0] px-[12px] py-[6px] relative size-full whitespace-nowrap">
                      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0012e7] text-[12px] text-center">
                        <p className="leading-[16px]">{slot.time}</p>
                      </div>
                      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b] text-[11px] text-right">
                        <p className="leading-[16px]">{slot.date}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {showFullProfileButton && (
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Button">
              <button
                onClick={onFullProfileClick}
                className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full"
                data-name="Button"
              >
                <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
                    <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001048] text-[14px] text-center whitespace-nowrap">
                      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] underline">
                        View full profile and availability
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
