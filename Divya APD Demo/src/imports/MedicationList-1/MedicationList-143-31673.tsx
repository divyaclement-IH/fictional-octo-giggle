import svgPaths from "./svg-wtnbykeyps";

function TextFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text frame">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Amoxicillin</p>
      </div>
      <div className="content-center flex flex-wrap gap-[4px] items-center relative shrink-0 w-full" data-name="Tag Group">
        <div className="bg-[#fcf4e6] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#662600] text-[12px] text-center text-ellipsis whitespace-nowrap">Needs attention</p>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">2 days to go</p>
      </div>
    </div>
  );
}

function TextFrame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text frame">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Lisinopril</p>
      </div>
      <div className="content-center flex flex-wrap gap-[4px] items-center relative shrink-0 w-full" data-name="Tag Group">
        <div className="bg-[#eafaf1] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">Just started</p>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">12 weeks to go</p>
      </div>
    </div>
  );
}

function TextFrame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text frame">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Metformin</p>
      </div>
      <div className="content-center flex flex-wrap gap-[4px] items-center relative shrink-0 w-full" data-name="Tag Group">
        <div className="bg-[#eafaf1] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">Just started</p>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">4 weeks to go</p>
      </div>
    </div>
  );
}

export default function MedicationList() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Medication list">
      <div className="content-stretch flex gap-[16px] items-center py-[16px] relative shrink-0 w-full" data-name="List Item">
        <div className="overflow-clip relative shrink-0 size-[56px]" data-name="Leading visual">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
            <circle cx="28" cy="28" fill="var(--fill-0, #FFFBF5)" id="Circle" r="28" />
          </svg>
          <div className="absolute inset-[28.57%] overflow-clip" data-name="Style=Regular">
            <div className="absolute inset-[0_1.04%_0_2.08%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.25 24">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.pc74a530} fill="#A55600" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3a378300} fill="#A55600" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
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
        <div className="overflow-clip relative shrink-0 size-[56px]" data-name="Leading visual">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
            <circle cx="28" cy="28" fill="var(--fill-0, #F7FBF9)" id="Circle" r="28" />
          </svg>
          <div className="absolute inset-[28.57%] overflow-clip" data-name="Style=Regular">
            <div className="absolute inset-[0.79%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6215 23.619">
                <g id="Vector">
                  <path d={svgPaths.p25bc11c0} fill="#00835D" />
                  <path clipRule="evenodd" d={svgPaths.p35d14f00} fill="#00835D" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
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
      <div className="content-stretch flex gap-[16px] items-center py-[16px] relative shrink-0 w-full" data-name="List Item">
        <div className="overflow-clip relative shrink-0 size-[56px]" data-name="Leading visual">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
            <circle cx="28" cy="28" fill="var(--fill-0, #F7FBF9)" id="Circle" r="28" />
          </svg>
          <div className="absolute inset-[28.57%] overflow-clip" data-name="Style=Regular">
            <div className="absolute inset-[0_1.04%_0_2.08%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.25 24">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.pc74a530} fill="#00835D" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3a378300} fill="#00835D" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
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