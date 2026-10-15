/**
 * Service Card Component
 *
 * Card for benefits and service offerings (e.g., gym access, meal planning, urgent care).
 * Design: Adapted from Figma import /src/imports/ExpandedQuickReply/ExpandedQuickReply.tsx
 */

export interface ServiceCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  showRecommended?: boolean;
  sla?: string;
  onButtonClick?: () => void;
}

export function ServiceCard({
  title,
  description,
  buttonLabel,
  showRecommended = false,
  sla,
  onButtonClick,
}: ServiceCardProps) {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] w-full"
      data-name="Service Card"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]"
      />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Image, Chip">
          <div className="relative shrink-0 size-[40px]" data-name="Icon container">
            <div className="-translate-y-1/2 absolute aspect-[40/40] left-0 right-0 top-1/2" data-name="Background">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <circle cx="20" cy="20" fill="#D1D1D1" r="20" />
              </svg>
            </div>
          </div>
          {showRecommended && (
            <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Recommended">
              <div
                className="bg-[#e6effe] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0"
                data-name="Chip Static"
              >
                <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#002380] text-[12px] text-center text-ellipsis whitespace-nowrap">
                  Recommended
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Copy">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title, SLA">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">
              {title}
            </p>
            {sla && (
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#6d6d6d] text-[14px] w-full">
                {sla}
              </p>
            )}
          </div>
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
            {description}
          </p>
        </div>
      </div>
      <button
        onClick={onButtonClick}
        className="content-stretch flex gap-[8px] items-center justify-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0 w-full"
        data-name="Chip Interactive"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]"
        />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">
          {buttonLabel}
        </p>
      </button>
    </div>
  );
}
