function New() {
  return (
    <div className="h-[16px] relative shrink-0 w-[94px]" data-name="New">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center left-[2px] text-[#3b3b3b] top-[8px]">
        <p className="leading-[16px]">·</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center left-[50.5px] text-[#0012e7] top-[8px]">
        <p className="leading-[16px]">3 New message</p>
      </div>
    </div>
  );
}

export default function SystemMessage() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center leading-[0] px-[32px] relative size-full text-[12px] text-center" data-name="System Message">
      <div className="content-stretch flex gap-[3px] items-center justify-center px-[32px] relative shrink-0 w-[343px] whitespace-nowrap" data-name="Timestamp">
        <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b]">
          <p className="leading-[16px]">12:34 PM</p>
        </div>
        <New />
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center max-w-[440px] min-w-full relative shrink-0 text-[#3b3b3b] w-[min-content]">
        <p className="leading-[16px]">Carrie R is now your Care Team member.</p>
      </div>
    </div>
  );
}