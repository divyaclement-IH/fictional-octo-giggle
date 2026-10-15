/**
 * Request Card Component
 *
 * Flexible request status card with auto-advancing progress tracking.
 * Design: Adapted from Figma RequestCardAdvocacy imports
 *
 * Supports multiple status types with optional elements:
 * - Cancel button
 * - Wait time message
 * - Delayed warning callout
 */

import { useState, useEffect } from 'react';
import svgPathsBase from '@/imports/RequestCardAdvocacy/svg-bb2mo2dfvd';
import svgPathsComplete from '@/imports/RequestCardAdvocacy-2/svg-136q51fx0j';
import svgPathsCanceled from '@/imports/RequestCardAdvocacy-3/svg-6pjxcsqocd';
import svgPathsReview from '@/imports/StatusReview/svg-39qepepqpl';
import svgPathsDelayed from '@/imports/StatusReview-2/svg-fr8qyvqltf';

export type RequestStatus = 'in_progress' | 'delayed' | 'canceled' | 'complete';

export interface RequestStep {
  statusText: string;
  statusType: RequestStatus;
  duration?: number; // Duration in ms before advancing to next step
}

export interface RequestCardProps {
  title: string;
  description: string;
  steps?: RequestStep[]; // Auto-advancing steps
  initialStatus?: RequestStatus; // For static display
  initialStatusText?: string; // For static display
  showCancelButton?: boolean;
  showWaitTime?: boolean;
  waitTimeText?: string;
  showDelayedWarning?: boolean;
  delayedWarningText?: string;
  onCancel?: () => void;
  onComplete?: () => void;
}

const DEFAULT_STEP_DURATION = 2500; // 2.5 seconds per step

export function RequestCard({
  title,
  description,
  steps,
  initialStatus = 'in_progress',
  initialStatusText = 'Processing',
  showCancelButton = false,
  showWaitTime = false,
  waitTimeText = 'Typical wait time is less than 10 min.',
  showDelayedWarning = false,
  delayedWarningText = "We're experiencing longer than usual wait times.",
  onCancel,
  onComplete,
}: RequestCardProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentStatus, setCurrentStatus] = useState<RequestStatus>(
    steps && steps.length > 0 ? steps[0].statusType : initialStatus
  );
  const [currentStatusText, setCurrentStatusText] = useState(
    steps && steps.length > 0 ? steps[0].statusText : initialStatusText
  );

  // Auto-advance through steps
  useEffect(() => {
    if (!steps || steps.length === 0) return;

    if (currentStepIndex < steps.length - 1) {
      const currentStep = steps[currentStepIndex];
      const duration = currentStep.duration || DEFAULT_STEP_DURATION;

      const timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
        setCurrentStatus(steps[currentStepIndex + 1].statusType);
        setCurrentStatusText(steps[currentStepIndex + 1].statusText);
      }, duration);

      return () => clearTimeout(timer);
    } else {
      // Last step - wait then complete
      const currentStep = steps[currentStepIndex];
      const duration = currentStep.duration || DEFAULT_STEP_DURATION;

      const timer = setTimeout(() => {
        onComplete?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [currentStepIndex, steps, onComplete]);

  // Determine icon colors and backgrounds based on status
  const getIconStyles = () => {
    switch (currentStatus) {
      case 'complete':
        return {
          bgColor: '#EAFAF1',
          iconColor: '#00835D',
          svgPaths: svgPathsComplete,
        };
      case 'canceled':
        return {
          bgColor: '#FDF2F1',
          iconColor: '#CB0C31',
          svgPaths: svgPathsCanceled,
        };
      case 'delayed':
      case 'in_progress':
      default:
        return {
          bgColor: '#E6EFFE',
          iconColor: '#0012E7',
          svgPaths: svgPathsBase,
        };
    }
  };

  const iconStyles = getIconStyles();

  // Render status indicator
  const renderStatusIndicator = () => {
    switch (currentStatus) {
      case 'complete':
        return (
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPathsComplete.p28f49440} fill="#00835D" />
              </svg>
            </div>
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#00835d] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">{currentStatusText}</p>
            </div>
          </div>
        );

      case 'canceled':
        return (
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPathsCanceled.pdc3fb80} fill="#CB0C31" />
              </svg>
            </div>
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cb0c31] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">{currentStatusText}</p>
            </div>
          </div>
        );

      case 'delayed':
        return (
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[2.1%_0]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.3281">
                  <path d={svgPathsDelayed.pa1ca100} fill="#A55600" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a55600] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">{currentStatusText}</p>
            </div>
          </div>
        );

      case 'in_progress':
      default:
        return (
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[9.41%_2.15%_9.13%_2.34%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2822 13.0338">
                  <g>
                    <path d={svgPathsReview.p17df0e00} fill="#0012E7" />
                    <path d={svgPathsReview.p1f09be00} fill="#0012E7" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0012e7] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">{currentStatusText}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative rounded-[24px] w-full" data-name="Request Card">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />

      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
        {/* Header */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Icon, Title">
            <div className="relative shrink-0 size-[40px]" data-name="Icon container">
              <div className="-translate-y-1/2 absolute aspect-[40/40] left-0 right-0 top-1/2" data-name="Background">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" fill={iconStyles.bgColor} r="20" />
                </svg>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="Style=Regular">
                <div className="absolute inset-[0.04%_0.05%_0.06%_0.05%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9802 19.9811">
                    <path d={iconStyles.svgPaths.p163a7a10} fill={iconStyles.iconColor} />
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch" data-name="Text">
              <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">{title}</p>
            </div>
          </div>
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">{description}</p>
        </div>

        {/* Status row */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black w-[80px]">Status</p>
            {renderStatusIndicator()}
          </div>

          {/* Wait time message (optional) */}
          {showWaitTime && currentStatus === 'in_progress' && (
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#3b3b3b] text-[0px] w-full">
              <span className="leading-[16px] text-[12px]">Typical wait time is </span>
              <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] text-[12px]">less than</span>
              <span className="leading-[16px] text-[12px]"> </span>
              <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] text-[12px] text-black">10 min.</span>
            </p>
          )}
        </div>

        {/* Cancel button (optional) */}
        {showCancelButton && currentStatus === 'in_progress' && (
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CTA">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[120px]" data-name="Button">
              <button
                onClick={onCancel}
                className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full"
                data-name="Button"
              >
                <div aria-hidden="true" className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
                <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
                  <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
                    <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001048] text-[14px] text-center whitespace-nowrap">
                      <p className="leading-[20px]">Cancel request</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Delayed warning (optional) */}
        {showDelayedWarning && currentStatus !== 'complete' && currentStatus !== 'canceled' && (
          <div className="bg-[#fffbf5] relative rounded-[8px] shrink-0 w-full" data-name="Callout">
            <div aria-hidden="true" className="absolute border border-[#f5dcc3] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
                <div className="flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#662600] text-[12px]">
                  <p className="leading-[16px]">{delayedWarningText}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
