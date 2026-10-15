import svgPaths from "./svg-fkmsjxi8f2";

function Field() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Bold">
            <div className="absolute inset-[0.88%_1.05%_1.05%_0.87%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6144 19.615">
                <path d={svgPaths.p25477580} fill="var(--fill-0, #3B3B3B)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[#6d6d6d] text-[16px]">Medication name, prescriber</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[68px] relative rounded-[24px] shrink-0" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Leading icon">
        <div className="absolute inset-[0.79%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7477 15.746">
            <g id="Vector">
              <path d={svgPaths.p625b030} fill="#0012E7" />
              <path clipRule="evenodd" d={svgPaths.p38b8f600} fill="#0012E7" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0012e7] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Active</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Button1 />
    </div>
  );
}

function Filters() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[4px_8px] items-center p-[16px] relative rounded-[16px] shrink-0 w-[343px]" data-name="Filters">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[20px]">{`Showing `}</p>
      </div>
      <Button />
    </div>
  );
}

function TextFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text frame">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Amoxicillin</p>
      </div>
      <div className="content-center flex flex-wrap gap-[4px] items-center relative shrink-0 w-full" data-name="Tag Group">
        <div className="bg-[#fcf4e6] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="[DEPRECATED] Tag">
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
        <div className="bg-[#eafaf1] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="[DEPRECATED] Tag">
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
        <div className="bg-[#eafaf1] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="[DEPRECATED] Tag">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">Just started</p>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">4 weeks to go</p>
      </div>
    </div>
  );
}

function MedicationList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[343px]" data-name="Medication list">
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

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[553px] items-center left-0 overflow-x-clip overflow-y-auto pt-[16px] px-[16px] top-[159px] w-[375px]" data-name="Body">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Field">
        <Field />
      </div>
      <Filters />
      <MedicationList />
    </div>
  );
}

function Clock1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+21.5px)] top-[21px]" data-name="Clock">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[17px] text-black text-center tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss03'" }}>
        <p className="leading-[17px]">9:41</p>
      </div>
    </div>
  );
}

function Clock() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[88px]" data-name="Clock">
      <Clock1 />
    </div>
  );
}

function Signal() {
  return (
    <div className="h-[12px] relative shrink-0 w-[19.971px]" data-name="Signal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9707 12.0001">
        <g id="Signal">
          <path d={svgPaths.pe92800} fill="var(--fill-0, black)" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function Connection() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[17px]" data-name="Connection">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12.5001">
        <g id="Connection">
          <path d={svgPaths.p2b7cea80} fill="var(--fill-0, black)" id="Wifi" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.33px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.33 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.4" rx="3.5" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p223c2d00} fill="var(--fill-0, black)" id="Cap" opacity="0.5" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function IndicatorsGroup() {
  return (
    <div className="absolute content-stretch flex gap-[6.5px] items-center right-[18.7px] top-[23px]" data-name="Indicators group">
      <Signal />
      <Connection />
      <Battery />
    </div>
  );
}

function LeftAction() {
  return <div className="content-stretch flex items-center min-w-[48px] overflow-clip shrink-0 size-[48px]" data-name="Left action" />;
}

function RightActions() {
  return <div className="content-stretch flex gap-[24px] items-center justify-end min-w-[48px] overflow-clip shrink-0 size-[48px]" data-name="Right actions" />;
}

function Container() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-between overflow-clip px-[12px]" data-name="Container">
      <LeftAction />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 top-1/2 w-[229px]" data-name="Title">
        <p className="flex-[1_0_0] font-['Figtree:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[16px] text-black text-center">My Health</p>
      </div>
      <RightActions />
    </div>
  );
}

function IOsNavigation() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="iOS + Navigation">
      <div className="bg-white h-[47px] overflow-clip relative shrink-0 w-[375px]" data-name="iOS/Status Bar">
        <Clock />
        <IndicatorsGroup />
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-[375px]" data-name="Secondary Navigation">
        <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
        <Container />
      </div>
    </div>
  );
}

function HighlightContainer() {
  return <div className="h-[2px] shrink-0 w-[36px]" data-name="Highlight-container" />;
}

function IconBadgeStack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
        <div className="absolute inset-[0_0_-0.01%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.003">
            <path clipRule="evenodd" d={svgPaths.p3f978980} fill="var(--fill-0, #3B3B3B)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextIconStack() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
      <IconBadgeStack />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3b3b3b] text-[11px] text-center w-[min-content]">
        <p className="leading-[16px]">Today</p>
      </div>
    </div>
  );
}

function HighlightContainer1() {
  return (
    <div className="h-[2px] relative shrink-0 w-[36px]" data-name="Highlight-container">
      <div className="-translate-x-1/2 absolute bg-black bottom-0 h-[2px] left-1/2 opacity-99 w-[36px]" data-name="Vector-highlight" />
    </div>
  );
}

function IconBadgeStack1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon">
        <div className="absolute inset-[8.23%_0.57%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.727 20.0487">
            <path d={svgPaths.p6ca400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextIconStack1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
      <IconBadgeStack1 />
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[11px] text-black text-center w-[min-content]">
        <p className="leading-[16px]">My Health</p>
      </div>
    </div>
  );
}

function HighlightContainer2() {
  return <div className="h-[2px] shrink-0 w-[36px]" data-name="Highlight-container" />;
}

function IconBadgeStack2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon">
        <div className="absolute inset-[0.62%_0.05%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.976 23.7032">
            <path d={svgPaths.p2af27b00} fill="var(--fill-0, #3B3B3B)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextIconStack2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
      <IconBadgeStack2 />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3b3b3b] text-[11px] text-center w-[min-content]">
        <p className="leading-[16px]">Get Care</p>
      </div>
    </div>
  );
}

function HighlightContainer3() {
  return <div className="h-[2px] shrink-0 w-[36px]" data-name="Highlight-container" />;
}

function IconBadgeStack3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon">
        <div className="absolute inset-[9.38%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 19.5">
            <g id="Vector">
              <path d={svgPaths.p392fd480} fill="black" />
              <path d={svgPaths.p5790980} fill="black" />
              <path d={svgPaths.p171a6200} fill="black" />
              <path clipRule="evenodd" d={svgPaths.pe5abe00} fill="black" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextIconStack3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
      <IconBadgeStack3 />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3b3b3b] text-[11px] text-center w-[min-content]">
        <p className="leading-[16px]">My Plan</p>
      </div>
    </div>
  );
}

function TabItemsContainer() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 px-[4px] right-0 top-0" data-name="TabItems-container">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0 w-[59px]" data-name="_TabItem">
        <HighlightContainer />
        <TextIconStack />
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0 w-[59px]" data-name="_TabItem">
        <HighlightContainer1 />
        <TextIconStack1 />
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0 w-[59px]" data-name="_TabItem">
        <HighlightContainer2 />
        <TextIconStack2 />
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0 w-[59px]" data-name="_TabItem">
        <HighlightContainer3 />
        <TextIconStack3 />
      </div>
    </div>
  );
}

function ForegroundContainer() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Foreground-container">
      <TabItemsContainer />
    </div>
  );
}

export default function MyHealthMedicine() {
  return (
    <div className="bg-white relative size-full" data-name="My Health / Medicine">
      <Body />
      <div className="absolute content-stretch flex h-[48px] items-start left-0 top-[111px] w-[375px]" data-name="Tabs">
        <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 1">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] whitespace-nowrap">Activity</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 2">
          <div aria-hidden="true" className="absolute border-[#0012e7] border-b-4 border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0012e7] text-[12px] whitespace-nowrap">Medicine</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 3">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] whitespace-nowrap">Care Team</p>
            </div>
          </div>
        </div>
      </div>
      <IOsNavigation />
      <div className="absolute bg-white bottom-0 h-[100px] left-0 overflow-clip w-[375px]" data-name="Navigation">
        <div className="absolute bg-[#e1e1e1] h-px left-0 right-0 top-0" data-name="Vector-border" />
        <ForegroundContainer />
      </div>
    </div>
  );
}