/**
 * Specialist Card Component
 *
 * Specialist referral card for external providers with clinic info, distance, and offerings.
 * Design: Adapted from Figma import /src/imports/PreviewCard-1/PreviewCard-13-3021.tsx
 */

import svgPaths from '@/imports/PreviewCard-1/svg-zy66sawtlp';

export interface SpecialistOffering {
  icon: 'network' | 'telehealth';
  label: string;
}

export interface SpecialistCardProps {
  providerName: string;
  providerImage: string;
  specialty: string;
  description: string;
  clinicName: string;
  clinicAddress: string;
  distance: string;
  offerings: SpecialistOffering[];
  showScheduleButton?: boolean;
  showViewProfileButton?: boolean;
  onSchedule?: () => void;
  onViewProfile?: () => void;
}

export function SpecialistCard({
  providerName,
  providerImage,
  specialty,
  description,
  clinicName,
  clinicAddress,
  distance,
  offerings,
  showScheduleButton = false,
  showViewProfileButton = false,
  onSchedule,
  onViewProfile,
}: SpecialistCardProps) {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] w-full"
      data-name="Specialist Card"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]"
      />
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
        {/* Header with avatar and name */}
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
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
              <p className="leading-[20px]">{specialty}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] w-full">
            {description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 1">
              <line stroke="#E1E1E1" strokeLinecap="round" x1="0.5" x2="283.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>

        {/* Location info */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Location info">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Clinic">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="Address">
              <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black w-full">
                {clinicName}
              </p>
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] w-full">
                {clinicAddress}
              </p>
            </div>
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#00835d] text-[14px] text-right whitespace-nowrap">
              {distance}
            </p>
          </div>

          {/* Offering chips */}
          {offerings.length > 0 && (
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 flex-wrap" data-name="Provider offerings">
              {offerings.map((offering, index) => (
                <div
                  key={index}
                  className="bg-[#eafaf1] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0"
                  data-name="Chip Static"
                >
                  <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
                    {offering.icon === 'network' ? (
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p1ab53880} fill="#00835D" />
                      </svg>
                    ) : (
                      <div className="absolute inset-[22.76%_0]" data-name="Vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.53812">
                          <g id="Vector">
                            <path d={svgPaths.p3db2e000} fill="#00835D" />
                            <path d={svgPaths.p3c52ce00} fill="#00835D" />
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">
                    {offering.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Button stack - only show if at least one button is visible */}
      {(showScheduleButton || showViewProfileButton) && (
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Button stack">
          {showScheduleButton && (
            <button
              onClick={onSchedule}
              className="bg-[#001048] min-h-[36px] relative rounded-[24px] shrink-0 w-full"
              data-name="Schedule Button"
            >
              <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative">
                  <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-center text-white whitespace-nowrap">
                    Schedule appointment
                  </p>
                </div>
              </div>
            </button>
          )}
          {showViewProfileButton && (
            <button
              onClick={onViewProfile}
              className="min-h-[36px] relative rounded-[24px] shrink-0 w-full"
              data-name="View Profile Button"
            >
              <div
                aria-hidden="true"
                className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]"
              />
              <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative">
                  <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] text-[#001048] text-[14px] text-center whitespace-nowrap">
                    View full profile
                  </p>
                </div>
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
