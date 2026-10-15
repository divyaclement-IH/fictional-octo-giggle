/**
 * Specialist Profile Component
 *
 * Full-screen specialist profile view with comprehensive provider information.
 * Design: Adapted from Figma import /src/imports/ProviderProfile1/ProviderProfile1.tsx
 */

import { StatusBar } from '../../StatusBar';
import { formatStatusBarTime } from '../../../../utils/formatters';
import svgPaths from '@/imports/ProviderProfile1/svg-s1hoxuivc9';
import imgMap from '@/imports/ProviderProfile1/36fb6f7f6bb333b705b3c3cf0b13a39900ebd374.png';
import { CareComparison } from './CareComparison';

export interface SpecialistProfileProps {
  providerName: string;
  providerImage: string;
  specialty: string;
  networkTier: string;
  rating: number;
  reviewCount: number;
  clinicName: string;
  clinicAddress: string;
  clinicPhone: string;
  distance: string;
  yearsOfPractice: number;
  medicalSchool: string;
  boardCertification: string;
  currentTime: Date;
  onBack: () => void;
  onGetHelpBooking: () => void;
  onBookMyself?: () => void;
}

export function SpecialistProfile({
  providerName,
  providerImage,
  specialty,
  networkTier,
  rating,
  reviewCount,
  clinicName,
  clinicAddress,
  clinicPhone,
  distance,
  yearsOfPractice,
  medicalSchool,
  boardCertification,
  currentTime,
  onBack,
  onGetHelpBooking,
  onBookMyself,
}: SpecialistProfileProps) {
  return (
    <div className="flex flex-col h-full bg-[#fafafa]">
      {/* Status Bar */}
      <div className="bg-white">
        <StatusBar time={formatStatusBarTime(currentTime)} />
      </div>

      {/* Header */}
      <div className="bg-white border-b border-[#e1e1e1] h-[68px] relative shrink-0">
        <div className="absolute content-stretch flex inset-0 items-center justify-between overflow-clip px-[16px]">
          <button onClick={onBack} className="content-stretch flex items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute inset-[0_29.17%_0_15.83%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
                  <path d={svgPaths.p851b00} fill="#001048" />
                </svg>
              </div>
            </div>
          </button>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative text-center">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">
              Provider profile
            </p>
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#1a1a23] text-[12px] w-full">
              1 of 3 recommendations
            </p>
          </div>
          <div className="shrink-0 size-[24px]" />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[16px]">
          {/* Provider info */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="relative shrink-0 size-[48px]">
              <img
                alt={providerName}
                className="absolute inset-0 max-w-none object-cover size-full rounded-full"
                src={providerImage}
              />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
              <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] text-[16px] text-black w-full">
                {providerName}
              </p>
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] text-[#8f8f8f] text-[12px] w-full">
                {specialty}
              </p>
            </div>
          </div>

          {/* Network badge */}
          <div className="bg-[#eafaf1] content-stretch flex gap-[4px] items-center px-[6px] py-[4px] relative rounded-[8px] shrink-0">
            <div className="overflow-clip relative shrink-0 size-[12px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d={svgPaths.p1ab53880} fill="#008961" />
              </svg>
            </div>
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] text-[#008961] text-[12px]">
              In-network: <span className="font-bold">{networkTier}</span>
            </p>
          </div>

          {/* Why a strong fit */}
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] text-[16px] text-black w-full">
              Why our analysis shows a strong fit for you
            </p>
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] text-[#3b3b3b] text-[14px] w-full">
              {providerName.split(',')[0]} specializes in digestive health with expertise in managing chronic GI conditions through evidence-based care.
            </p>
          </div>

          {/* Stats */}
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
            <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]">
              <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[12px] relative size-full text-black">
                <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] text-[12px] w-full">
                  Clinical encounters analyzed
                </p>
                <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] text-[16px] w-full">2,314</p>
              </div>
            </div>
            <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]">
              <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[12px] relative size-full text-black">
                <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] text-[12px] w-full">
                  Match confidence based on available data
                </p>
                <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] text-[16px] w-full">High</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-0 relative shrink-0 w-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
              <line stroke="#E1E1E1" strokeLinecap="round" x1="0.5" x2="342.5" y1="0.5" y2="0.5" />
            </svg>
          </div>

          {/* Care Comparison */}
          <CareComparison />

          {/* Divider */}
          <div className="h-0 relative shrink-0 w-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
              <line stroke="#E1E1E1" strokeLinecap="round" x1="0.5" x2="342.5" y1="0.5" y2="0.5" />
            </svg>
          </div>

          {/* Rating */}
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[18px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4783 17.6677">
                <path d={svgPaths.p1eb54400} fill="#008961" />
              </svg>
            </div>
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] text-[16px] text-black">
              {rating}
            </p>
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] text-[#6d6d6d] text-[16px]">
              ({reviewCount} reviews)
            </p>
          </div>

          {/* Review categories */}
          <div className="bg-white relative rounded-[16px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-['Figtree:Bold',sans-serif] font-bold leading-[20px] text-[#3b3b3b] text-[14px] min-w-px">
                  What patients appreciate
                </p>
              </div>
              <div className="h-px bg-[#e1e1e2] shrink-0 w-full" />
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[20px] text-[#3b3b3b] text-[14px]">
                  Where experiences vary
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>

          {/* Divider */}
          <div className="h-0 relative shrink-0 w-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
              <line stroke="#E1E1E1" strokeLinecap="round" x1="0.5" x2="342.5" y1="0.5" y2="0.5" />
            </svg>
          </div>

          {/* Clinic info */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 text-black w-full">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] text-[16px]">{clinicName}</p>
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] text-[12px]">{distance}</p>
          </div>

          {/* Map and contact */}
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <div className="relative rounded-[8px] shrink-0 size-[80px]">
              <img alt="Map" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgMap} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-black w-full">
                {clinicAddress}
              </p>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] text-[12px] text-black">
                  {clinicPhone}
                </p>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[12px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.53812">
                      <path d={svgPaths.p3db2e000} fill="#008961" />
                      <path d={svgPaths.p3c52ce00} fill="#008961" />
                    </svg>
                  </div>
                  <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] text-[#008961] text-[11px]">
                    Offers telehealth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-0 relative shrink-0 w-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
              <line stroke="#E1E1E1" strokeLinecap="round" x1="0.5" x2="342.5" y1="0.5" y2="0.5" />
            </svg>
          </div>

          {/* Provider experience */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 text-black w-full">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] text-[16px]">Provider experience</p>
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] text-[12px]">
              {yearsOfPractice} years of practice
            </p>
          </div>

          {/* Education and certification */}
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
              <div className="bg-[#f2f2f2] content-stretch flex flex-col items-center justify-center relative rounded-[50px] shrink-0 size-[32px]">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p30cb200} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25455" />
                    <path d={svgPaths.p37d80040} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25455" />
                    <path d="M2.61896 6.17282V13.3586" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25455" />
                    <path d={svgPaths.p29639080} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25455" />
                  </svg>
                </div>
              </div>
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-black w-full">
                {medicalSchool}
              </p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
              <div className="relative shrink-0 size-[32px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <rect fill="#F2F2F2" height="32" rx="16" width="32" />
                  <path d={svgPaths.p3e297d40} fill="black" />
                  <path clipRule="evenodd" d={svgPaths.pa3e0900} fill="black" fillRule="evenodd" />
                </svg>
              </div>
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-black w-full">
                {boardCertification}
              </p>
            </div>
          </div>

          {/* Bottom padding for fixed buttons */}
          <div className="h-[140px]" />
        </div>
      </div>

      {/* Fixed bottom buttons */}
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-center px-[16px] pt-[16px] relative">
        <button
          onClick={onGetHelpBooking}
          className="bg-[#001048] min-h-[48px] relative rounded-[24px] shrink-0 w-full"
        >
          <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] text-[16px] text-center text-white whitespace-nowrap">
                Get help with booking
              </p>
            </div>
          </div>
        </button>
        {onBookMyself && (
          <button onClick={onBookMyself} className="min-h-[48px] relative rounded-[24px] shrink-0 w-full">
            <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative">
                <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] text-[#0012e7] text-[16px] text-center underline whitespace-nowrap">
                  I'll book the appointment myself
                </p>
              </div>
            </div>
          </button>
        )}
        {/* Home indicator */}
        <div className="h-[34px] relative shrink-0 w-full">
          <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 flex h-[5px] items-center justify-center w-[144px]">
            <div className="bg-black h-[5px] rounded-[100px] w-[144px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
