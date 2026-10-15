import svgPaths from "./svg-zwruu89u60";
import imgIconClear from "./3618334e0e22f6b2ac78bad61c08dd4f6ee5c4a8.png";
import imgIconClear1 from "./709ba1ea2ddf7142b8d2c465341c0866c6690339.png";
import imgIconClear2 from "./0e95552984962e2c25e123f37020cbf241b822b7.png";
import imgIconClear3 from "./4f8a9f1a9b7c1838cb31317726a30d74a0e52921.png";
import imgIconClear4 from "./5a634ea175699d3a1f49dfa283089984231bbded.png";
type IOsStatusBarProps = {
  className?: string;
  background?: "White";
  textColor?: "Black";
};

function IOsStatusBar({ className, background = "White", textColor = "Black" }: IOsStatusBarProps) {
  return (
    <div className={className || "bg-white h-[47px] overflow-clip relative w-[375px]"}>
      <div className="absolute h-[47px] left-0 top-0 w-[88px]" data-name="Clock">
        <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+21.5px)] top-[21px]" data-name="Clock">
          <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#1a1a23] text-[17px] text-center tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss03" 1' }}>
            <p className="leading-[17px]">9:41</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[6.5px] items-center right-[18.7px] top-[23px]" data-name="Indicators group">
        <div className="h-[12px] relative shrink-0 w-[19.971px]" data-name="Signal">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.0001" preserveAspectRatio="none" viewBox="0 0 19.9707 12.0001" width="19.9707">
            <g id="Signal">
              <path d={svgPaths.pe92800} fill="#1A1A23" id="Cellular Connection" />
            </g>
          </svg>
        </div>
        <div className="h-[12.5px] relative shrink-0 w-[17px]" data-name="Connection">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.5001" preserveAspectRatio="none" viewBox="0 0 17 12.5001" width="17">
            <g id="Connection">
              <path d={svgPaths.p2b7cea80} fill="#1A1A23" id="Wifi" />
            </g>
          </svg>
        </div>
        <div className="h-[13px] relative shrink-0 w-[27.33px]" data-name="Battery">
          <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 27.33 13" width="27.33">
            <g id="Battery">
              <rect height="12" id="Border" opacity="0.4" rx="3.5" stroke="#1A1A23" width="24" x="0.5" y="0.5" />
              <path d={svgPaths.p223c2d00} fill="#1A1A23" id="Cap" opacity="0.5" />
              <rect fill="#1A1A23" height="9" id="Capacity" rx="2" width="21" x="2" y="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProgBarLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="prog bar label">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="check-badge">
        <div className="absolute inset-[2.16%_1.83%_2.03%_2.08%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="22.9946" preserveAspectRatio="none" viewBox="0 0 23.0637 22.9946" width="23.0637">
            <path d={svgPaths.p3a339480} fill="#00835D" id="Vector" />
          </svg>
        </div>
      </button>
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00835d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Coverage verified</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="badge">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]" data-name="bg">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="#E7EBEE" id="bg" r="10" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center ml-0 mt-0 relative row-1 size-[20px] text-[#3b3b3b] text-[12px] text-center">
        <p className="leading-[16px]">5</p>
      </div>
    </div>
  );
}

function LeftHalf() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0 w-[239px]" data-name="left half">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Top services</p>
      </div>
      <Badge />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute bg-white border border-[#dbe1e6] border-solid left-0 rounded-[60px] size-[24px] top-0" />
      <div className="absolute flex items-center justify-center left-[7.4px] size-[9.6px] top-[7.2px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[9.6px]" data-name="arrow-right">
            <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="9.6" preserveAspectRatio="none" viewBox="0 0 5.28 9.6" width="5.28">
                <path d={svgPaths.p14beb700} fill="#DBE1E6" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute bg-white border border-[#0012e7] border-solid left-0 rounded-[60px] size-[24px] top-0" />
      <div className="absolute left-[7.4px] overflow-clip size-[9.6px] top-[7.2px]" data-name="arrow-right">
        <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="9.6" preserveAspectRatio="none" viewBox="0 0 5.28 9.6" width="5.28">
            <path d={svgPaths.p14beb700} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Arrows() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="arrows">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[327px]" data-name="Controls">
      <LeftHalf />
      <Arrows />
    </div>
  );
}

function BenefitCopy() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[16px] w-[204px]" data-name="Benefit copy">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-black w-full">
        <p className="leading-[24px]">Medical video visits</p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b] w-full">
        <p className="leading-[24px]">On-demand or by appointment</p>
      </div>
    </div>
  );
}

function CardFooter() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col h-[144px] items-start left-0 px-[16px] py-[24px] w-[236px]" data-name="Card footer">
      <div aria-hidden className="absolute border-[#dbe1e6] border-solid border-t inset-0 pointer-events-none" />
      <BenefitCopy />
    </div>
  );
}

function BenefitCard() {
  return (
    <div className="bg-[#fafafa] h-[372px] relative rounded-[24px] shrink-0 w-[236px]" data-name="benefit card">
      <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip px-[16px] py-[24px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[188px]" data-name="icon-clear">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconClear} />
        </div>
        <CardFooter />
      </div>
      <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function BenefitCopy1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[16px] w-[204px]" data-name="Benefit copy">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-black w-full">
        <p className="leading-[24px]">Therapy video visits</p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b] w-full">
        <p className="leading-[24px]">By appointment</p>
      </div>
    </div>
  );
}

function CardFooter1() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col h-[144px] items-start left-0 px-[16px] py-[24px] w-[236px]" data-name="Card footer">
      <div aria-hidden className="absolute border-[#dbe1e6] border-solid border-t inset-0 pointer-events-none" />
      <BenefitCopy1 />
    </div>
  );
}

function BenefitCard1() {
  return (
    <div className="bg-[#fafafa] h-[372px] relative rounded-[24px] shrink-0 w-[236px]" data-name="benefit card">
      <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip px-[16px] py-[24px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[188px]" data-name="icon-clear">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconClear1} />
        </div>
        <CardFooter1 />
      </div>
      <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function BenefitCopy2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[16px] w-[204px]" data-name="Benefit copy">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-black w-full">
        <p className="leading-[24px]">Psychiatry video visits</p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b] w-full">
        <p className="leading-[24px]">By appointment</p>
      </div>
    </div>
  );
}

function CardFooter2() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col h-[144px] items-start left-0 px-[16px] py-[24px] w-[236px]" data-name="Card footer">
      <div aria-hidden className="absolute border-[#dbe1e6] border-solid border-t inset-0 pointer-events-none" />
      <BenefitCopy2 />
    </div>
  );
}

function BenefitCard2() {
  return (
    <div className="bg-[#fafafa] h-[372px] relative rounded-[24px] shrink-0 w-[236px]" data-name="benefit card">
      <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip px-[16px] py-[24px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[188px]" data-name="icon-clear">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconClear2} />
        </div>
        <CardFooter2 />
      </div>
      <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function BenefitCopy3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[16px] w-[204px]" data-name="Benefit copy">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-black w-full">
        <p className="leading-[24px]">Second medical opinion</p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b] w-full">
        <p className="leading-[24px]">A trusted second point of view</p>
      </div>
    </div>
  );
}

function CardFooter3() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col h-[144px] items-start left-0 px-[16px] py-[24px] w-[236px]" data-name="Card footer">
      <div aria-hidden className="absolute border-[#dbe1e6] border-solid border-t inset-0 pointer-events-none" />
      <BenefitCopy3 />
    </div>
  );
}

function BenefitCard3() {
  return (
    <div className="bg-[#fafafa] h-[372px] relative rounded-[24px] shrink-0 w-[236px]" data-name="benefit card">
      <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip px-[16px] py-[24px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[188px]" data-name="icon-clear">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconClear3} />
        </div>
        <CardFooter3 />
      </div>
      <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function BenefitCopy4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[16px] w-[204px]" data-name="Benefit copy">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-black w-full">
        <p className="leading-[24px]">Let us find you a provider</p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b] w-full">
        <p className="leading-[24px]">Based on your needs and preferences</p>
      </div>
    </div>
  );
}

function CardFooter4() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col h-[144px] items-start left-0 px-[16px] py-[24px] w-[236px]" data-name="Card footer">
      <div aria-hidden className="absolute border-[#dbe1e6] border-solid border-t inset-0 pointer-events-none" />
      <BenefitCopy4 />
    </div>
  );
}

function BenefitCard4() {
  return (
    <div className="bg-[#fafafa] h-[372px] relative rounded-[24px] shrink-0 w-[236px]" data-name="benefit card">
      <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip px-[16px] py-[24px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[188px]" data-name="icon-clear">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconClear4} />
        </div>
        <CardFooter4 />
      </div>
      <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function CardPull() {
  return (
    <div className="content-stretch flex gap-[24px] items-start pr-[24px] relative shrink-0 w-[351px]" data-name="Card pull">
      <BenefitCard />
      <BenefitCard1 />
      <BenefitCard2 />
      <BenefitCard3 />
      <BenefitCard4 />
    </div>
  );
}

function BenefitsCarousel() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]" data-name="Benefits carousel">
      <Controls />
      <CardPull />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0012e7] min-h-[48px] min-w-[80px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[24px]">Next</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] top-[143px] w-[327px]">
      <ProgBarLabel />
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[20px] text-black w-[327px]">
        <span className="leading-[32px]">{`{`}</span>
        <span className="leading-[32px]">Customer or Health plan</span>
        <span className="leading-[32px]">{`}`}</span>
        <span className="leading-[32px]">{` covers {brandName} for you`}</span>
      </p>
      <BenefitsCarousel />
      <div className="relative shrink-0 w-full" data-name="Button">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function LeftAction() {
  return <div className="content-stretch flex items-center min-w-[48px] overflow-clip relative shrink-0 size-[48px]" data-name="Left action" />;
}

function RightActions() {
  return <div className="content-stretch flex gap-[24px] items-center justify-end min-w-[48px] overflow-clip relative shrink-0 size-[48px]" data-name="Right actions" />;
}

function Container() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-between overflow-clip px-[12px]" data-name="Container">
      <LeftAction />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 w-[229px]" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[#1a1a23] text-[16px] text-center">Care services</p>
          </div>
        </div>
      </div>
      <RightActions />
    </div>
  );
}

function TopDock() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="Top dock">
      <IOsStatusBar className="bg-white h-[47px] overflow-clip relative shrink-0 w-[375px]" />
      <div className="bg-white h-[64px] relative shrink-0 w-[375px]" data-name="Secondary Navigation">
        <div aria-hidden className="absolute border-[#e1e1e2] border-b border-solid inset-0 pointer-events-none" />
        <Container />
      </div>
      <div className="bg-[#f0f0f0] h-[8px] relative shrink-0 w-[375px]" data-name="Progress bar">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start pr-[24px] relative size-full">
            <div className="bg-[#0012e7] h-[8px] relative shrink-0 w-[375px]" data-name="Progress indicator" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CombinedCoverageSummary() {
  return (
    <div className="bg-white relative size-full" data-name="combined coverage summary">
      <div className="relative size-full">
        <Frame />
        <TopDock />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}