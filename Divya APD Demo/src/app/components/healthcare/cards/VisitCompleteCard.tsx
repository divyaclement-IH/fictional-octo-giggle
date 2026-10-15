/**
 * Visit Complete Card Component
 *
 * Card shown after completing a video visit with provider details and duration.
 * Design: Adapted from Figma import /src/imports/CompleteCard/CompleteCard.tsx
 */

import svgPaths from '@/imports/CompleteCard/svg-ao9e83by22';

export interface VisitCompleteCardProps {
  providerName: string;
  providerSpecialty: string;
  providerImage: string;
  duration: string;
  onNotesClick?: () => void;
}

export function VisitCompleteCard({
  providerName,
  providerSpecialty,
  providerImage,
  duration,
  onNotesClick,
}: VisitCompleteCardProps) {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] w-full"
      data-name="Complete card"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]"
      />

      {/* Avatar and name */}
      <div
        className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full"
        data-name="Avatar, Details"
      >
        <div className="relative shrink-0 size-[48px]" data-name="Avatar">
          <div className="-translate-y-1/2 absolute aspect-[65/65] left-0 right-0 top-1/2" data-name="Provider Photo">
            <img
              alt={providerName}
              className="absolute block inset-0 max-w-none size-full rounded-full"
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
          className="content-stretch flex flex-col items-center relative shrink-0 text-black w-full whitespace-nowrap"
          data-name="Name, Details"
        >
          <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center">
            <p className="leading-[24px]">{providerName}</p>
          </div>
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px]">
            {providerSpecialty}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 1">
            <line stroke="#E1E1E1" x2="365" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Visit completed */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Date, Alerts">
        <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
          <p className="leading-[24px]">Visit completed!</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 1">
            <line stroke="#E1E1E1" x2="365" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Duration */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
        <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[12px] items-start leading-[0] relative shrink-0 text-[14px] text-black w-full">
          <div className="flex flex-col justify-center relative shrink-0 w-[86px]">
            <p className="leading-[20px]">Duration</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative">
            <p className="leading-[20px]">{duration}</p>
          </div>
        </div>
      </div>

      {/* Notes button */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button stack">
        <button
          onClick={onNotesClick}
          className="min-h-[36px] relative rounded-[24px] shrink-0 w-full"
          data-name="Button"
        >
          <div
            aria-hidden="true"
            className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]"
          />
          <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] text-[#001048] text-[14px] text-center whitespace-nowrap">
                Notes from your provider
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
