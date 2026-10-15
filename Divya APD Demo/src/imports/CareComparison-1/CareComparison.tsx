import svgPaths from "./svg-bsnncbh1xg";

function Bar() {
  return (
    <div className="col-1 h-[15px] ml-0 mt-[2px] relative row-1 w-[127px]" data-name="Bar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 15">
        <g id="Bar">
          <path d={svgPaths.p3467af00} fill="var(--fill-0, #EAFAF1)" />
          <path d={svgPaths.p1ec07d80} fill="url(#paint0_linear_15_1562)" id="Rectangle 26" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_15_1562" x1="112" x2="0" y1="7.49997" y2="7.49997">
            <stop offset="0.163462" stopColor="#008961" />
            <stop offset="1" stopColor="#00AB7E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <Bar />
      <div className="bg-[#3b3b3b] col-1 h-[18px] ml-[91px] mt-0 relative rounded-[10px] row-1 w-[2px]" data-name="Average">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container3 />
      <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[12px]" data-name="arrow-right">
            <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.6 12">
                <path d={svgPaths.p75b22f0} fill="var(--fill-0, #6D6D6D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Expertise</p>
      </div>
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] min-w-px relative text-[#3b3b3b] text-[12px]">How often they treat cases like yours</p>
    </div>
  );
}

function Ranking() {
  return (
    <div className="content-stretch flex gap-[4px] h-[12px] items-center relative shrink-0" data-name="Ranking">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check-circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p1ab53880} fill="var(--fill-0, #00A076)" id="Vector" />
        </svg>
      </div>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check-circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p1ab53880} fill="var(--fill-0, #00A076)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Strength() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Strength">
      <Ranking />
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#008961] text-[12px] whitespace-nowrap">Well-rounded</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Container">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <span className="leading-[16px] text-[#00a076] text-[12px]">12% above</span>
        <span className="leading-[16px] text-[12px]">{` `}</span>
        <span className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] text-[12px]">baseline</span>
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Strength />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[77px] relative shrink-0 w-[311px]" data-name="Container">
      <div className="absolute h-0 left-0 top-px w-[311px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 1">
            <line id="Line 4" stroke="var(--stroke-0, #F2F2F2)" x2="311" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[11px] top-[13px] w-[311px]">{`This composite score reflects Dr. Moreno's experience caring for patients with gastrointestinal conditions and how closely her treatment decisions align with established, evidence-based gastroenterology guidelines.`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Container">
      <Container1 />
      <Container4 />
      <Container5 />
      <Container7 />
    </div>
  );
}

function Bar1() {
  return (
    <div className="col-1 h-[15px] ml-0 mt-[2px] relative row-1 w-[127px]" data-name="Bar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 15">
        <g id="Bar">
          <path d={svgPaths.p3467af00} fill="var(--fill-0, #EAFAF1)" />
          <path d={svgPaths.p10e10500} fill="url(#paint0_linear_15_1544)" id="Rectangle 26" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_15_1544" x1="91" x2="0" y1="7.49997" y2="7.49997">
            <stop offset="0.163462" stopColor="#008961" />
            <stop offset="1" stopColor="#00AB7E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <Bar1 />
      <div className="bg-[#3b3b3b] col-1 h-[18px] ml-[79px] mt-0 relative rounded-[10px] row-1 w-[2px]" data-name="Average">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container11 />
      <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[12px]" data-name="arrow-right">
            <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.6 12">
                <path d={svgPaths.p75b22f0} fill="var(--fill-0, #6D6D6D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Care approach</p>
      </div>
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] min-w-px relative text-[#3b3b3b] text-[12px]">Use of evidence-based care</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Container">
      <Container9 />
      <Container12 />
    </div>
  );
}

function Bar2() {
  return (
    <div className="col-1 h-[15px] ml-0 mt-[2px] relative row-1 w-[127px]" data-name="Bar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 15">
        <g id="Bar">
          <path d={svgPaths.p3467af00} fill="var(--fill-0, #EAFAF1)" />
          <path d={svgPaths.p29b7d700} fill="url(#paint0_linear_15_1525)" id="Rectangle 26" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_15_1525" x1="97" x2="0" y1="7.49997" y2="7.49997">
            <stop offset="0.163462" stopColor="#008961" />
            <stop offset="1" stopColor="#00AB7E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <Bar2 />
      <div className="bg-[#3b3b3b] col-1 h-[18px] ml-[80px] mt-0 relative rounded-[10px] row-1 w-[2px]" data-name="Average">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container16 />
      <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[12px]" data-name="arrow-right">
            <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.6 12">
                <path d={svgPaths.p75b22f0} fill="var(--fill-0, #6D6D6D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Cost efficiency</p>
      </div>
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] min-w-px relative text-[#3b3b3b] text-[12px]">Avoids unnecessary tests or procedures</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Container">
      <Container14 />
      <Container17 />
    </div>
  );
}

function Below() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[343px]" data-name="Below">
      <Container />
      <Container8 />
      <Container13 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="Item">
      <div className="bg-[#3b3b3b] h-[12px] relative rounded-[10px] shrink-0 w-[2px]" data-name="Indicator">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[11px]" />
      </div>
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#3b3b3b] text-[11px] text-center whitespace-nowrap">CareMatch baseline</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="info-circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p9f23d20} fill="#6D6D6D" />
            <path d={svgPaths.p3d64e380} fill="#6D6D6D" />
            <path clipRule="evenodd" d={svgPaths.p1d701480} fill="#6D6D6D" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="Item">
      <div className="bg-gradient-to-b from-[#008961] from-[16.346%] rounded-[2px] shrink-0 size-[12px] to-[#00ab7e]" data-name="Indicator" />
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#3b3b3b] text-[11px] text-center whitespace-nowrap">Dr. Moreno</p>
    </div>
  );
}

function Key() {
  return (
    <div className="content-stretch flex gap-[24px] items-center px-[16px] relative shrink-0 w-[343px]" data-name="Key">
      <Item />
      <Item1 />
    </div>
  );
}

export default function CareComparison() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Care comparison">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-[343px]">Comparison with the CareMatch baseline</p>
      <Below />
      <Key />
    </div>
  );
}