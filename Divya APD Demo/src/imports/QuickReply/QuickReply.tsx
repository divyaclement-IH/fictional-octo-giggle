export default function QuickReply() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Quick Reply">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3b3b3b] text-[14px] w-[min-content]">
        <p className="leading-[20px]">Select or describe what you need:</p>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="prompts">
        <div className="content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
          <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Option 1</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
          <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Option 2</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
          <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Option 3</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
          <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Option 4</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
          <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Option 5</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
          <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Option 6</p>
        </div>
      </div>
    </div>
  );
}