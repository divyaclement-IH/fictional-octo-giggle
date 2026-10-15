/**
 * Progress Tracker Card Component
 *
 * Shows booking progress with auto-advancing steps.
 * Design: Adapted from Figma Container import
 *
 * Behavior: Shows one step at a time, auto-advances through:
 * 1. Confirm availability
 * 2. Contact specialist's office
 * 3. Notify member
 */

import { useState, useEffect } from 'react';
import svgPaths from '@/imports/Container/svg-7g7j714ygv';

const STEPS = [
  'Confirm availability',
  "Contact specialist's office to schedule appointment",
  'Notify member',
];

const STEP_DURATION = 2500; // 2.5 seconds per step

export interface ProgressTrackerCardProps {
  onComplete?: () => void;
}

export function ProgressTrackerCard({ onComplete }: ProgressTrackerCardProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentStepIndex < STEPS.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, STEP_DURATION);
      return () => clearTimeout(timer);
    } else {
      // Last step - wait then mark complete
      const timer = setTimeout(() => {
        setIsComplete(true);
        onComplete?.();
      }, STEP_DURATION);
      return () => clearTimeout(timer);
    }
  }, [currentStepIndex, onComplete]);

  const currentStep = STEPS[currentStepIndex];

  return (
    <div className="bg-white h-[138px] relative rounded-[24px] shrink-0 w-full" data-name="ProgressTrackerCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          {/* Header */}
          <div className="bg-[#f0f0f0] h-[56px] relative shrink-0 w-full" data-name="Button">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[23.914px] pr-[24px] py-[16px] relative size-full">
                <div className="h-[24px] relative shrink-0" data-name="Heading 4">
                  <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[24px] text-[#1a1a23] text-[16px]">
                    Booking in progress...
                  </p>
                </div>
                <div className="relative shrink-0 size-[20px]" data-name="Icon">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d="M15 12.5L10 7.5L5 12.5" stroke="#1A1A23" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Step content */}
          <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="Container">
            {/* Icon (spinner or checkmark) */}
            <div className="absolute left-[24px] size-[20px] top-[30px]" data-name="Container">
              <div className="absolute flex items-center justify-center left-[-2.19px] size-[24.371px] top-[-2.19px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
                <div className="flex-none" style={{ animation: isComplete ? 'none' : 'spin 1s linear infinite' }}>
                  {isComplete ? (
                    // Checkmark icon
                    <div className="relative size-[20px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="9" stroke="#008961" strokeWidth="2" fill="none" />
                        <path d="M6 10L9 13L14 7" stroke="#008961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  ) : (
                    // Spinner icon
                    <div className="relative size-[20px]" style={{ transform: 'rotate(-75.5deg)' }}>
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p336708f0} stroke="#E1E1E2" strokeWidth="2" />
                        <path d={svgPaths.p11014a00} stroke="#0012E7" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step text */}
            <div className="absolute h-[48px] left-[56px] opacity-60 top-[16px] w-[261px]" data-name="Paragraph">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] text-[#222] text-[16px]">
                {currentStep}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e2] border-solid inset-0 pointer-events-none rounded-[24px]" />

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(-75.5deg);
          }
          to {
            transform: rotate(284.5deg);
          }
        }
      `}</style>
    </div>
  );
}
