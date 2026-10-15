/**
 * Care Team Member Card Component
 *
 * Displays a care team member with two variants:
 * - Internal: IH providers with star badge, appointment slot buttons
 * - External: Specialists with schedule button
 *
 * Design: Included Health iOS app - My Health Care Team tab
 */

import React from 'react';
import type { CareTeamMember } from '@/data/appState';
import svgPaths from '@/imports/CareTeamInternal-1/svg-0knzo7tyhm';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export interface CareTeamMemberCardProps {
  member: CareTeamMember;
  onSchedule?: () => void;
  onViewProfile?: () => void;
}

export function CareTeamMemberCard({ member, onSchedule, onViewProfile }: CareTeamMemberCardProps) {
  const headshotUrl = `/images/providers/${member.headshotFile}`;

  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] w-full">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />

      {/* Content */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">

        {/* Header */}
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
          {/* Avatar */}
          <div className="relative shrink-0 size-[48px]">
            <div className="-translate-y-1/2 absolute aspect-[96/96] left-0 right-0 top-1/2">
              <ImageWithFallback
                alt={member.displayName}
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-full"
                src={headshotUrl}
              />
            </div>

            {/* IH Badge (internal providers only) */}
            {member.isInternal && (
              <div className="absolute left-[32px] size-[16px] top-[32px]">
                <div className="absolute inset-[-2.1%_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0256 16.6718">
                    <path d={svgPaths.pefc7130} fill="#0012E7" stroke="white" strokeWidth="0.727273" />
                  </svg>
                </div>
                <div className="-translate-y-1/2 absolute aspect-[28.000289916992188/29.866695404052734] left-[31.25%] right-[31.25%] top-[calc(50%+0.25px)]">
                  <div className="absolute inset-[71.59%_0_0_69.7%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816">
                      <path d={svgPaths.p4a0f800} fill="white" />
                    </svg>
                  </div>
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.39993">
                    <g>
                      <path d={svgPaths.p24c24bf0} fill="white" />
                      <path d={svgPaths.p10931800} fill="white" />
                      <path d={svgPaths.p30d5de00} fill="white" />
                    </g>
                  </svg>
                  <div className="absolute inset-[0_69.7%_71.59%_0]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816">
                      <path d={svgPaths.p12e17e00} fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Name and specialty */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">
              {member.displayName}{member.nameSuffix}
            </p>
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
              <p className="leading-[20px]">{member.specialtyLine}</p>
            </div>
          </div>

          {/* Menu button */}
          <div className="relative shrink-0 size-[48px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" fill="#F2F2F2" r="16" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2">
              <div className="absolute inset-[0_36.46%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79167 14">
                  <g>
                    <path d={svgPaths.p1ddf4800} fill="#0012E7" />
                    <path d={svgPaths.p376bfc00} fill="#0012E7" />
                    <path d={svgPaths.p656ac00} fill="#0012E7" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          {/* Relationship badge */}
          <div className="bg-[#e6effe] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#002380] text-[12px] text-center text-ellipsis whitespace-nowrap">
              {member.relationshipLabel}
            </p>
          </div>

          {/* Last seen badge */}
          {member.lastSeenDate && (
            <div className="bg-[#f2f2f2] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0">
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="absolute inset-[0_2.08%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 12">
                    <path d={svgPaths.p5f6dc40} fill="black" />
                  </svg>
                </div>
              </div>
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis whitespace-nowrap">
                Last seen: {member.lastSeenDate}
              </p>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#3b3b3b] text-[12px] w-[min-content]">
          {member.description}
        </p>
      </div>

      {/* Action buttons - different for internal vs external */}
      {member.isInternal ? (
        <InternalProviderActions member={member} onViewProfile={onViewProfile} />
      ) : (
        <ExternalProviderActions onSchedule={onSchedule} onViewProfile={onViewProfile} />
      )}
    </div>
  );
}

// Internal provider: Appointment slot buttons + view profile link
function InternalProviderActions({ member, onViewProfile }: { member: CareTeamMember; onViewProfile?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      {/* Appointment slot buttons */}
      {member.slots.length > 0 && (
        <div className="content-stretch flex gap-[7px] h-[44px] items-start relative shrink-0 w-full">
          {member.slots.slice(0, 2).map((slot, index) => (
            <button
              key={index}
              className="flex-[1_0_0] min-w-px relative rounded-[69px] self-stretch"
            >
              <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[69px]" />
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center leading-[0] px-[12px] py-[6px] relative size-full whitespace-nowrap">
                  <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[12px] text-center text-[#0012e7]">
                    <p className="leading-[16px]">{slot.timeLabel}</p>
                  </div>
                  <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[11px] text-right text-[#3b3b3b]">
                    <p className="leading-[16px]">{slot.dayLabel}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* View profile link */}
      <button
        onClick={onViewProfile}
        className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full"
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
  );
}

// External provider: Schedule button + view profile button
function ExternalProviderActions({ onSchedule, onViewProfile }: { onSchedule?: () => void; onViewProfile?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {/* Schedule appointment button */}
      {onSchedule && (
        <button
          onClick={onSchedule}
          className="bg-[#001048] min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full"
        >
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
              <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                <p className="leading-[20px]">Schedule appointment</p>
              </div>
            </div>
          </div>
        </button>
      )}

      {/* View full profile button */}
      {onViewProfile && (
        <button
          onClick={onViewProfile}
          className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full"
        >
          <div aria-hidden="true" className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
            <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
              <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001048] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[20px]">View full profile</p>
              </div>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
