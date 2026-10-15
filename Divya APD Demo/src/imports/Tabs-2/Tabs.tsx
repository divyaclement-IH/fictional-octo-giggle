export default function Tabs() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Tabs">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 1">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] whitespace-nowrap">Activity</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 2">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] whitespace-nowrap">Medicine</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 3">
        <div aria-hidden="true" className="absolute border-[#0012e7] border-b-4 border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0012e7] text-[12px] whitespace-nowrap">Care Team</p>
          </div>
        </div>
      </div>
    </div>
  );
}