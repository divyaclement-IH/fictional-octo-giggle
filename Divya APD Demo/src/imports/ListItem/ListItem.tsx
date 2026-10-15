import svgPaths from "./svg-ent6txxqqx";

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

export default function ListItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[16px] pt-[8px] relative size-full" data-name="List Item">
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
  );
}