import svgPaths from "./svg-9mvxnyfaaj";

function TextFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-w-px relative text-black" data-name="Text frame">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[16px] w-[311px]">
        <p className="leading-[24px]">Book your follow-up visit</p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[14px] w-[min-content]">
        <p className="leading-[20px]">Ordered by Dr. Janelle Martin, MD</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <TextFrame />
    </div>
  );
}

function Upper() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Upper">
      <div className="content-center flex flex-wrap gap-[4px] items-center relative shrink-0 w-[240px]" data-name="Tag Group">
        <div className="bg-[#eafaf1] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">New</p>
        </div>
        <div className="bg-[#f2f2f2] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag 3">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
            <div className="absolute inset-[0_-0.01%_0_0.01%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path clipRule="evenodd" d={svgPaths.p334a8200} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis whitespace-nowrap">Due in 3 months</p>
        </div>
      </div>
      <div className="relative shrink-0 size-[48px]" data-name="Icon Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="var(--fill-0, #F2F2F2)" id="Background" r="16" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2" data-name="dots-horizontal">
          <div className="absolute inset-[36.46%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 3.79167">
              <g id="Vector">
                <path d={svgPaths.p1ddf4800} fill="#0012E7" />
                <path d={svgPaths.p1872a380} fill="#0012E7" />
                <path d={svgPaths.p3397c480} fill="#0012E7" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[8px] pt-[16px] px-[16px] relative rounded-[24px] size-full">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame />
      <Upper />
    </div>
  );
}