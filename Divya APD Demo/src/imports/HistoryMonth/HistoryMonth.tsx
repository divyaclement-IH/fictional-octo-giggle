import svgPaths from "./svg-qlhjylh283";

function TextFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-start leading-[0] min-w-px relative" data-name="Text frame">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Visit with Dr. Elena Marquez, MD</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">Friday, Mar 14, 2:15 PM</p>
      </div>
    </div>
  );
}

function TextFrame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-start leading-[0] min-w-px relative" data-name="Text frame">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Visit with Dr. Elena Marquez, MD</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">Friday, Mar 14, 2:15 PM</p>
      </div>
    </div>
  );
}

function TextFrame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-start leading-[0] min-w-px relative" data-name="Text frame">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Visit with Maria Gonzales, RDN</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">Thursday, Mar 18, 12:45 PM</p>
      </div>
    </div>
  );
}

function ListItems() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Items">
      <div className="content-stretch flex gap-[16px] items-center pb-[16px] pt-[8px] relative shrink-0 w-full" data-name="List Item">
        <TextFrame />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
          <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8 16">
              <path d={svgPaths.p178c6e80} fill="var(--fill-0, #0012E7)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 content-stretch flex flex-col h-px items-start left-0 right-0" data-name="Border">
          <div className="bg-[#e1e1e1] h-px shrink-0 w-full" data-name="Line" />
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center py-[16px] relative shrink-0 w-full" data-name="List Item">
        <TextFrame1 />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
          <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8 16">
              <path d={svgPaths.p178c6e80} fill="var(--fill-0, #0012E7)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 content-stretch flex flex-col h-px items-start left-0 right-0" data-name="Border">
          <div className="bg-[#e1e1e1] h-px shrink-0 w-full" data-name="Line" />
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center pb-[8px] pt-[16px] relative shrink-0 w-full" data-name="List Item">
        <TextFrame2 />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
          <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8 16">
              <path d={svgPaths.p178c6e80} fill="var(--fill-0, #0012E7)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HistoryMonth() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="History Month">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#6d6d6d] text-[16px] w-full">March 2026</p>
      <ListItems />
    </div>
  );
}