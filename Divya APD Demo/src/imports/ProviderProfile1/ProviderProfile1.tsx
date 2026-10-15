import svgPaths from "./svg-s1hoxuivc9";
import imgPhoto from "./dddad36066e2264ca41ee1d48890ad2f53ee1384.png";
import imgMap from "./36fb6f7f6bb333b705b3c3cf0b13a39900ebd374.png";

function Pic() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Pic">
      <div className="absolute left-0 size-[48px] top-0" data-name="Photo">
        <div className="absolute inset-[-3.57%]">
          <img alt="" className="block max-w-none size-full" height="51.429" src={imgPhoto} width="51.429" />
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Name">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Dr. Elena Marquez, MD</p>
      </div>
    </div>
  );
}

function SpecialtyS() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Specialty(s)">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8f8f8f] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Internal Medicine</p>
      </div>
    </div>
  );
}

function NameSpecialty() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name, specialty">
      <Name />
      <SpecialtyS />
    </div>
  );
}

function PhotoNameSpecialty() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Photo, name, specialty">
      <Pic />
      <NameSpecialty />
      <div className="relative shrink-0 size-[24px]" data-name="Heart">
        <div className="absolute inset-0 overflow-clip" data-name="heart">
          <div className="absolute inset-[5.86%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0009 21.1864">
              <path clipRule="evenodd" d={svgPaths.p35544200} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function NetworkBadge() {
  return (
    <div className="bg-[#eafaf1] content-stretch flex gap-[4px] items-center px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="Network badge">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check-circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p1ab53880} fill="var(--fill-0, #008961)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#008961] text-[0px] text-right whitespace-nowrap">
        <p className="text-[12px]">
          <span className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px]">{`In-network: `}</span>
          <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px]">Tier 1</span>
        </p>
      </div>
    </div>
  );
}

function Badges() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Badges">
      <NetworkBadge />
    </div>
  );
}

function BadgesInfo() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[342px]" data-name="Badges, info">
      <Badges />
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="Info">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Vector">
              <path d={svgPaths.pf8c2d00} fill="#008961" />
              <path d={svgPaths.p3258e470} fill="#008961" />
              <path clipRule="evenodd" d={svgPaths.p247e8b80} fill="#008961" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Intro">
      <BadgesInfo />
    </div>
  );
}

function PersonalBadges() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Personal, badges">
      <PhotoNameSpecialty />
      <Intro />
    </div>
  );
}

function Copy() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Copy">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] min-w-full relative shrink-0 text-[16px] text-black w-[min-content]">Why our analysis shows a strong fit for you</p>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] w-[343px]">Dr. Marquez has deep experience with joint concerns and a strong record identifying symptoms early and guiding safe recovery.</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[12px] relative size-full text-black">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] w-full">Clinical encounters analyzed</p>
        <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] w-full">2,314</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[12px] relative size-full text-black">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] w-full">Match confidence based on available data</p>
        <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] w-full">High</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[344px]" data-name="Row 1">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Copy />
      <Row />
    </div>
  );
}

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

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Bar />
      <div className="bg-[#3b3b3b] col-1 h-[18px] ml-[91px] mt-0 relative rounded-[10px] row-1 w-[2px]" data-name="Average">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Group />
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

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Expertise</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] min-w-px relative text-[#3b3b3b] text-[12px]">How often they treat cases like yours</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[343px]">
      <Frame12 />
      <Frame13 />
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

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Bar1 />
      <div className="bg-[#3b3b3b] col-1 h-[18px] ml-[79px] mt-0 relative rounded-[10px] row-1 w-[2px]" data-name="Average">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Group1 />
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

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Care approach</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] min-w-px relative text-[#3b3b3b] text-[12px]">Practices according to guidelines</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[343px]">
      <Frame14 />
      <Frame15 />
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

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Bar2 />
      <div className="bg-[#3b3b3b] col-1 h-[18px] ml-[80px] mt-0 relative rounded-[10px] row-1 w-[2px]" data-name="Average">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Group2 />
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

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Cost efficiency</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] min-w-px relative text-[#3b3b3b] text-[12px]">Avoids unnecessary tests or procedures</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[343px]">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Below() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[343px]" data-name="Below">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="Item">
      <div className="bg-[#3b3b3b] h-[12px] relative rounded-[10px] shrink-0 w-[2px]">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[11px]" />
      </div>
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#3b3b3b] text-[11px] text-center whitespace-nowrap">Provider Match baseline</p>
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
      <div className="bg-gradient-to-b from-[#008961] from-[16.346%] rounded-[2px] shrink-0 size-[12px] to-[#00ab7e]" />
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#3b3b3b] text-[11px] text-center whitespace-nowrap">Dr. Marquez</p>
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

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-[343px]">Comparison with our Provider Match baseline</p>
      <Below />
      <Key />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="rating-star">
        <div className="absolute inset-[1.04%_1.41%_0.8%_1.49%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4783 17.6677">
            <path d={svgPaths.p1eb54400} fill="var(--fill-0, #008961)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Rating">
      <Frame4 />
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">4.9</p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6d6d6d] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">(175 reviews)</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Rating />
    </div>
  );
}

function HeaderSubhead() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Header, subhead">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">What patients appreciate</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <HeaderSubhead />
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

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item2 />
      <div className="content-stretch flex flex-col h-px items-start relative shrink-0 w-full" data-name="Border">
        <div className="bg-[#e1e1e2] h-px shrink-0 w-full" data-name="Line" />
      </div>
    </div>
  );
}

function HeaderSubhead1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Header, subhead">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Where experiences vary</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <HeaderSubhead1 />
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

function List1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Item3 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[343px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <List />
        <List1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#8f8f8f] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
            <p className="leading-[20px]">Google reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#8f8f8f] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
            <p className="leading-[20px]">Yelp reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[342px]">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative" data-name="Button">
        <Button />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative" data-name="Button">
        <Button1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] w-[233px]">Sequoia Medical Group</p>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">12.6 mi</p>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[80px]" data-name="Map">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgMap} />
    </div>
  );
}

function Telehealth() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Telehealth">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="video">
        <div className="absolute inset-[22.76%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.53812">
            <g id="Vector">
              <path d={svgPaths.p3db2e000} fill="#008961" />
              <path d={svgPaths.p3c52ce00} fill="#008961" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#008961] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Offers telehealth</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[202px]">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[16px]">(555) 908-4421</p>
      </div>
      <Telehealth />
    </div>
  );
}

function AddressPhone() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Address, phone">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black w-[199px]">
        <p className="leading-[20px]">123 Willow Creek Rd, Ste 400, Harmony Glade, GA 30303</p>
      </div>
      <Frame6 />
    </div>
  );
}

function MapContact() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Map, contact">
      <Map />
      <AddressPhone />
    </div>
  );
}

function HeaderSubhead2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Figtree:Bold',sans-serif] font-bold items-center justify-between leading-[0] min-w-px relative text-[#3b3b3b] text-[14px] whitespace-nowrap" data-name="Header, subhead">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">High-quality providers at this clinic</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">6</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <HeaderSubhead2 />
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

function List2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[343px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <List2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#8f8f8f] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
            <p className="leading-[20px]">See map</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#8f8f8f] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
            <p className="leading-[20px]">See all 3 locations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative" data-name="Button">
        <Button2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative" data-name="Button">
        <Button3 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] w-[233px]">Provider experience</p>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">28 years of practice</p>
      </div>
    </div>
  );
}

function GraduationHatStreamlineUltimateRegular() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Graduation Hat Streamline Ultimate Regular">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Graduation Hat Streamline Ultimate Regular">
          <path d={svgPaths.p30cb200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25455" />
          <path d={svgPaths.p37d80040} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25455" />
          <path d="M2.61896 6.17282V13.3586" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25455" />
          <path d={svgPaths.p29639080} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25455" />
        </g>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col items-center justify-center relative rounded-[50px] shrink-0 size-[32px]" data-name="Image">
      <GraduationHatStreamlineUltimateRegular />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Item">
      <Image />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Keck School of Medicine at University of Southern California</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Image">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Image">
          <rect fill="var(--fill-0, #F2F2F2)" height="32" rx="16" width="32" />
          <g id="Vector">
            <path d={svgPaths.p3e297d40} fill="black" />
            <path clipRule="evenodd" d={svgPaths.pa3e0900} fill="black" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative self-stretch" data-name="Item">
      <Image1 />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Board certified in Internal Medicine</p>
    </div>
  );
}

function Columns() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Columns">
      <Item5 />
      <Item6 />
    </div>
  );
}

function CostEstimate() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] pt-[16px] relative shrink-0 text-black w-full whitespace-nowrap" data-name="Cost estimate">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px]">
        <p className="leading-[16px]">Looking for a cost estimate?</p>
      </div>
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[0px]">
        <p className="decoration-solid leading-[16px] text-[12px] underline">Message Dot</p>
      </div>
    </div>
  );
}

function ProviderExperience() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[343px]" data-name="Provider experience">
      <Columns />
      <CostEstimate />
    </div>
  );
}

function Profile1Pcp() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 px-[16px] top-0 w-[375px]" data-name="Profile 1 (PCP)">
      <PersonalBadges />
      <Frame8 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
            <line id="Line 4" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" x1="0.5" x2="342.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame20 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
            <line id="Line 4" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" x1="0.5" x2="342.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame5 />
      <Card />
      <Frame3 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
            <line id="Divider" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" x1="0.5" x2="342.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Content />
      <MapContact />
      <Card1 />
      <Frame7 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
            <line id="Divider" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" x1="0.5" x2="342.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Content1 />
      <ProviderExperience />
    </div>
  );
}

function ScrollArea() {
  return (
    <div className="-translate-x-1/2 absolute h-[567px] left-1/2 top-[131px] w-[375px]" data-name="Scroll area">
      <Profile1Pcp />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#001048] min-h-[48px] min-w-[80px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[24px]">Get help with booking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="min-h-[48px] min-w-[80px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0012e7] text-[16px] text-center whitespace-nowrap">
            <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline">{`I'll book the appointment myself`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text bar">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] relative size-full">
          <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Button">
            <Button4 />
          </div>
          <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Button">
            <Button5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 pt-[16px] w-[375px]" data-name="Text field">
      <div aria-hidden="true" className="absolute bg-white inset-0 pointer-events-none" />
      <TextBar />
      <div className="h-[34px] relative shrink-0 w-[375px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-black h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_#e1e1e1]" />
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

function Container() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-between overflow-clip px-[16px]" data-name="Container">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Left action">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-left">
          <div className="absolute inset-[0_29.17%_0_15.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
              <path d={svgPaths.p851b00} fill="var(--fill-0, #001048)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative text-center" data-name="Title">
        <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Provider profile</p>
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#1a1a23] text-[12px] w-full">1 of 3 recommendations</p>
      </div>
      <div className="shrink-0 size-[24px]" data-name="Heart" />
    </div>
  );
}

function SecondaryNavigation() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-[375px]" data-name="Secondary Navigation">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function IOsTopNavWrapper() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 top-0 w-[375px]" data-name="iOS Top Nav Wrapper">
      <div className="bg-white h-[47px] overflow-clip relative shrink-0 w-[375px]" data-name="iOS/Status Bar">
        <Clock />
        <IndicatorsGroup />
      </div>
      <SecondaryNavigation />
    </div>
  );
}

export default function ProviderProfile() {
  return (
    <div className="bg-[#fafafa] relative rounded-[38px] size-full" data-name="Provider profile 1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ScrollArea />
        <TextField />
        <IOsTopNavWrapper />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-[-1px] pointer-events-none rounded-[39px]" />
    </div>
  );
}