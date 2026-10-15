function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-[265.031px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Prototype Guide</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M1 13L13 1M1 1L13 13" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonCloseStyleGuide() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button - Close style guide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex h-[81px] items-center justify-between left-0 pb-[25px] pt-[24px] px-[24px] top-0 w-[1152px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Heading />
      <ButtonCloseStyleGuide />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1053px] items-center justify-center left-0 px-[24px] py-[16px] top-[129px] w-[1152px]">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Placeholder for later</p>
      </div>
    </div>
  );
}

export default function PrototypeGuideAbout() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Prototype Guide / About">
      <Container />
      <div className="absolute bg-white content-stretch flex h-[48px] items-start left-[-4px] top-[80.84px] w-[1156px]" data-name="Tabs">
        <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 1">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] whitespace-nowrap">Navigation</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 2">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] whitespace-nowrap">Components</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 3">
          <div aria-hidden="true" className="absolute border-[#0012e7] border-b-4 border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0012e7] text-[12px] whitespace-nowrap">About</p>
            </div>
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
}