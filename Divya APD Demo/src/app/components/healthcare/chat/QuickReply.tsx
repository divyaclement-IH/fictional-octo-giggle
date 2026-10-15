/**
 * Quick Reply Component
 *
 * Displays quick reply chips for user to select from.
 * Design: Adapted from Figma import /src/imports/QuickReply/QuickReply.tsx
 */

export interface QuickReplyProps {
  label?: string;
  options: string[];
  onSelect: (option: string) => void;
}

export function QuickReply({ label = 'Select or describe what you need:', options, onSelect }: QuickReplyProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full" data-name="Quick Reply">
      {/* Label */}
      {label && (
        <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3b3b3b] text-[14px] w-[min-content]">
          <p className="leading-[20px]">{label}</p>
        </div>
      )}

      {/* Options */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="prompts">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className="content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0"
            data-name="Chip Interactive"
          >
            <div
              aria-hidden="true"
              className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]"
            />
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">
              {option}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
