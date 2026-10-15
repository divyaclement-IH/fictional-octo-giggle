import svgPaths from "./svg-kqm1nqagjx";

function TextFrame() {
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

export default function ListItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[8px] pt-[16px] relative size-full" data-name="List Item">
      <TextFrame />
      <div className="h-[56px] relative shrink-0 w-[36px]" data-name="Icon Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="var(--fill-0, #F2F2F2)" id="Background" r="16" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2" data-name="calendar-add">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Vector">
              <path d={svgPaths.p189a2500} fill="#0012E7" />
              <path clipRule="evenodd" d={svgPaths.p37a2d500} fill="#0012E7" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}