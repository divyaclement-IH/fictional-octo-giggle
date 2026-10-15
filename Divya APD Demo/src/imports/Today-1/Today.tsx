import svgPaths from "./svg-7al2f5ttrf";

function NavigationMenuStreamlineUltimate() {
  return (
    <div className="overflow-clip relative shrink-0 size-[26px]" data-name="Navigation-Menu Streamline Ultimate">
      <div className="absolute inset-[24.03%_9.62%_24.05%_9.62%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9985 13.4979">
          <path clipRule="evenodd" d={svgPaths.p17d15640} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#cb0c31] left-[calc(50%+9px)] max-h-[8px] max-w-[8px] rounded-[999px] size-[8px] top-[2px]" data-name="Badge/Notification" />
    </div>
  );
}

function Text() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[26/32] left-[22.92%] right-[22.92%] top-[calc(50%+0.13px)]" data-name="Text">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] left-1/2 text-[14px] text-black text-center top-[calc(50%-0.13px)] whitespace-nowrap">
        <p className="leading-[20px]">CM</p>
      </div>
    </div>
  );
}

function UserContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="User Container">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[20px] text-black text-right whitespace-nowrap">Charles</p>
      <div className="relative shrink-0 size-[32px]" data-name="Avatar">
        <div className="-translate-y-1/2 absolute aspect-[48/48] left-0 right-0 top-1/2" data-name="Background">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="var(--fill-0, #F2F2F2)" id="Background" r="16" />
          </svg>
        </div>
        <Text />
      </div>
    </div>
  );
}

function MenuUser() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Menu + User">
      <NavigationMenuStreamlineUltimate />
      <UserContainer />
    </div>
  );
}

function AskDot1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Ask Dot">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dot">
        <div className="absolute inset-[31.25%_53.6%_31.25%_8.9%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p3488a200} fill="var(--fill-0, #0012E7)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%_9.85%_31.25%_52.65%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p3488a200} fill="var(--fill-0, #0012E7)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-[46.4%] right-[28.6%] top-3/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p969ae00} fill="var(--fill-0, #002380)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-3/4 left-[27.65%] right-[47.35%] top-0" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p969ae00} fill="var(--fill-0, #578EE8)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6d6d6d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Ask Dot...</p>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Message">
      <AskDot1 />
      <div className="relative shrink-0 size-[34px]" data-name="Chat Input - Send button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="var(--fill-0, #F2F2F2)" id="Background" r="16" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%+0.2px)] size-[14.4px] top-[calc(50%+0.2px)]" data-name="send">
          <div className="h-[12px] relative shrink-0 w-[13.091px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0909 12">
              <path d={svgPaths.p28106800} fill="var(--fill-0, #8F8F8F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatInput() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[62px] relative rounded-[24px] shrink-0 w-full" data-name="Chat Input">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <Message />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-x-auto overflow-y-clip relative shrink-0 w-[368px]" data-name>
      <div className="bg-white content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
        <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">I’m feeling sick</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
        <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Check out-of-pocket cost</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
        <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">I have UTI</p>
      </div>
    </div>
  );
}

function AskDot() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-[343px]" data-name="Ask Dot">
      <ChatInput />
      <Component />
    </div>
  );
}

function SalutationDotQuickPrompt() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pb-[16px] relative shrink-0 w-[343px]" data-name="Salutation + Dot Quick Prompt">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">{`Good morning Riley! `}</p>
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[40px] min-w-full relative shrink-0 text-[32px] text-black w-[min-content]">What would you like to do today?</p>
      <AskDot />
    </div>
  );
}

function TextFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-w-px relative text-black" data-name="Text frame">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[16px] w-[311px]">
        <p className="leading-[24px]">Pick up Rx: Ciprofloxacin 20mg</p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[14px] w-[min-content]">
        <p className="leading-[20px]">Ready at your CVS Pharmacy</p>
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
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <g id="Vector">
                <path d={svgPaths.p1bca31f0} fill="black" />
                <path clipRule="evenodd" d={svgPaths.p227c0300} fill="black" fillRule="evenodd" />
              </g>
            </svg>
          </div>
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis whitespace-nowrap">Estimated copay: $3.49</p>
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

function TextFrame1() {
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

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <TextFrame1 />
    </div>
  );
}

function Upper1() {
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

function TextFrame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text frame">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">3 pending actions</p>
      </div>
    </div>
  );
}

function ActionCards() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Action Cards">
      <div className="bg-white relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col items-start pb-[8px] pt-[16px] px-[16px] relative size-full">
          <Frame />
          <Upper />
        </div>
      </div>
      <div className="bg-white relative rounded-[24px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col items-start pb-[8px] pt-[16px] px-[16px] relative size-full">
          <Frame1 />
          <Upper1 />
        </div>
      </div>
      <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Pending Actions">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="<Slot>">
              <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name=".pending actions">
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
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
    </div>
  );
}

function YourActions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[343px]" data-name="Your Actions">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[32px]">Your actions</p>
      </div>
      <ActionCards />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-0 overflow-x-clip overflow-y-auto pb-[24px] pt-[16px] px-[16px] top-[47px]" data-name="Body">
      <MenuUser />
      <SalutationDotQuickPrompt />
      <YourActions />
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

function IOsNavigation() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="iOS + Navigation">
      <div className="h-[47px] overflow-clip relative shrink-0 w-[375px]" data-name="iOS/Status Bar">
        <Clock />
        <IndicatorsGroup />
      </div>
    </div>
  );
}

function HighlightContainer() {
  return (
    <div className="h-[2px] relative shrink-0 w-[36px]" data-name="Highlight-container">
      <div className="-translate-x-1/2 absolute bg-black bottom-0 h-[2px] left-1/2 opacity-99 w-[36px]" data-name="Vector-highlight" />
    </div>
  );
}

function IconBadgeStack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
        <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="calendar">
          <div className="absolute inset-[0_2.08%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
              <path d={svgPaths.p3c5f4a80} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] text-[11px] text-black text-center top-[16.5px] whitespace-nowrap">
          <p className="leading-[11px]">15</p>
        </div>
      </div>
    </div>
  );
}

function TextIconStack() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
      <IconBadgeStack />
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[11px] text-black text-center w-[min-content]">
        <p className="leading-[16px]">Today</p>
      </div>
    </div>
  );
}

function HighlightContainer1() {
  return <div className="h-[2px] shrink-0 w-[36px]" data-name="Highlight-container" />;
}

function IconBadgeStack1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon">
        <div className="absolute inset-[8.24%_0.64%_8.25%_0.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6988 20.0421">
            <path d={svgPaths.p20094830} fill="var(--fill-0, #3B3B3B)" id="Vector" />
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
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3b3b3b] text-[11px] text-center w-[min-content]">
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
              <path d={svgPaths.p392fd480} fill="#3B3B3B" />
              <path d={svgPaths.p5790980} fill="#3B3B3B" />
              <path d={svgPaths.p171a6200} fill="#3B3B3B" />
              <path clipRule="evenodd" d={svgPaths.pe5abe00} fill="#3B3B3B" fillRule="evenodd" />
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

function ForegroundContainer() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Foreground-container">
      <div className="absolute content-stretch flex items-start justify-between left-0 px-[4px] right-0 top-0" data-name="Main Nav">
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
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white bottom-0 h-[100px] left-0 overflow-clip w-[375px]" data-name="Navigation">
      <div className="absolute bg-[#e1e1e1] h-px left-0 right-0 top-0" data-name="Vector-border" />
      <ForegroundContainer />
    </div>
  );
}

export default function Today() {
  return (
    <div className="bg-white relative size-full" data-name="Today">
      <div className="absolute h-[496px] left-[-484px] top-[-57px] w-[1253px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1253 496">
          <path d={svgPaths.p1e9a3800} fill="url(#paint0_linear_214_3624)" id="Ellipse 2304" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_214_3624" x1="626.5" x2="626.5" y1="496" y2="0">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="#E2ECFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Body />
      <IOsNavigation />
      <Navigation />
    </div>
  );
}