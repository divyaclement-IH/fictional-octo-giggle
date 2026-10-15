import svgPaths from "./svg-kj483hgii7";

function IconsSystemStatusBarLocation() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icons/system/status bar/location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icons/system/status bar/location">
          <path clipRule="evenodd" d={svgPaths.paed0100} fill="var(--fill-0, #1A1A23)" fillRule="evenodd" id="Location" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[158.5px]">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a23] text-[15px] text-center tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">12:22</p>
      </div>
      <IconsSystemStatusBarLocation />
    </div>
  );
}

function IconsSystemStatusBarSignal() {
  return (
    <div className="h-[14px] relative shrink-0 w-[21px]" data-name="icons/system/status bar/signal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 14">
        <g id="icons/system/status bar/signal">
          <path clipRule="evenodd" d={svgPaths.p342c3400} fill="var(--fill-0, #1A1A23)" fillRule="evenodd" id="Empty Bar" opacity="0.25" />
          <path d={svgPaths.p210eef80} fill="var(--fill-0, #1A1A23)" id="Full Bars" />
        </g>
      </svg>
    </div>
  );
}

function IconsSystemStatusBarWifi() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15px]" data-name="icons/system/status bar/wifi">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
        <g id="icons/system/status bar/wifi">
          <path d={svgPaths.p34149c00} fill="var(--fill-0, #1A1A23)" id="WiâFi" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[10.71%_7.81%_7.14%_9.38%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5 11.5">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p39339f00} fill="var(--fill-0, #1A1A23)" fillRule="evenodd" id="Body" opacity="0.35" />
          <path clipRule="evenodd" d={svgPaths.p694f5c0} fill="var(--fill-0, #1A1A23)" fillRule="evenodd" id="Terminal" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p114f1780} fill="var(--fill-0, #1A1A23)" fillRule="evenodd" id="Reserve" />
        </g>
      </svg>
    </div>
  );
}

function IconsSystemStatusBarBattery() {
  return (
    <div className="h-[14px] relative shrink-0 w-[32px]" data-name="icons/system/status bar/battery">
      <Group />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <IconsSystemStatusBarSignal />
      <IconsSystemStatusBarWifi />
      <IconsSystemStatusBarBattery />
    </div>
  );
}

function StatusBarsIPhoneXStatusBarLight() {
  return (
    <div className="relative shrink-0 w-full" data-name="status bars/iPhone X/status bar/light">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame3 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[999px] size-[48px] top-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-left">
        <div className="absolute inset-[0_29.17%_0_15.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
            <path d={svgPaths.p851b00} fill="var(--fill-0, #0012E7)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a23] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">New Conversation with Dot</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-start left-1/2 top-[12.47px]">
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <Icon />
      <Frame5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <StatusBarsIPhoneXStatusBarLight />
      <Frame1 />
    </div>
  );
}

function AvatarLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Avatar, Label">
      <div className="relative shrink-0 size-[24px]" data-name="Avatar/Dot/xxsmall">
        <div className="-translate-y-1/2 absolute aspect-[24/24] left-0 overflow-clip right-0 top-[calc(50%+0.1px)]" data-name="Dot">
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
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[12px]">
        <p className="leading-[16px]">Dot</p>
      </div>
    </div>
  );
}

function Bubble() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip py-[8px] relative rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-[343px]">
        <p className="leading-[1.5]">Welcome Riley! How can I help you today?</p>
      </div>
    </div>
  );
}

function ChatThread() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[-1px] overflow-clip px-[12px] py-[16px] top-[99px] w-[375px]" data-name="chat thread">
      <div className="relative shrink-0 w-full" data-name="Disclaimer">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[32px] relative size-full">
            <div className="flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] max-w-[440px] min-w-px relative text-[#3b3b3b] text-[12px] text-center">
              <p className="leading-[16px]">Dot can provide generalized AI-generated answers for select healthcare questions and connect you to the Care Team any time, but it is not a substitute for professional medical advice.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[351px]" data-name="Response - Dot">
        <AvatarLabel />
        <Bubble />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[10px] items-center px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[#6d6d6d] text-[16px]">Describe your issue...</p>
        </div>
      </div>
    </div>
  );
}

function UiRight() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="UI right">
      <div className="relative shrink-0 size-[48px]" data-name="Chat Input - Send button">
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

function Buttons() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Buttons">
      <div className="relative shrink-0 size-[48px]" data-name="Icon Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="var(--fill-0, #F2F2F2)" id="Background" r="16" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2" data-name="plus">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p12d51800} fill="var(--fill-0, #3B3B3B)" id="Vector" />
          </svg>
        </div>
      </div>
      <UiRight />
    </div>
  );
}

export default function StartOfConversation() {
  return (
    <div className="bg-white border border-[#8f8f8f] border-solid overflow-clip relative rounded-[30px] size-full" data-name="Start of conversation">
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-start left-1/2 top-[-1px] w-[375px]" data-name="Chat bot Header">
        <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
        <Frame />
      </div>
      <ChatThread />
      <div className="absolute bg-white content-stretch flex flex-col gap-[8px] items-start justify-end left-[11px] pb-[8px] pt-[16px] px-[8px] rounded-[24px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.12)] top-[685px] w-[351px]" data-name="Chat Input">
        <Text />
        <Buttons />
      </div>
    </div>
  );
}