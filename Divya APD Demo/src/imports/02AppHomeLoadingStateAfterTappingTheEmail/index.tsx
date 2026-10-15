import svgPaths from "./svg-yz1f6e1xgs";
import imgLinkC6B92E5CDa9240Ed8970316Ca7C3F907Jpg from "./6a2b45feb150b47dc755c25bd2c29bfd0bec317a.png";
import imgAvatar from "./f440e2634ac9c2e0ef194745174e1b73f8fbdb8c.png";
import imgAvatar1 from "./7b882d8ce4c8d72e22fe57bf85d57a62bbd2ffef.png";
import imgPatientDrTeam from "./e7e3c92ecc09e82198fc702d9770f242c8f00ab9.png";
type ChatInputSendButtonProps = {
  className?: string;
  state?: "default";
  type?: "disabled";
};

function ChatInputSendButton({ className, state = "default", type = "disabled" }: ChatInputSendButtonProps) {
  return (
    <div className={className || "relative size-[48px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <circle cx="16" cy="16" fill="#F2F2F2" id="Background" r="16" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.2px)] size-[14.4px] top-[calc(50%+0.2px)]" data-name="send">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="h-[12px] relative shrink-0 w-[13.091px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 13.0909 12" width="13.0909">
                <path d={svgPaths.p28106800} fill="#8F8F8F" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type DotProps = {
  className?: string;
  property?: "Default";
};

function Dot({ className, property = "Default" }: DotProps) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"}>
      <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 22.6353 24" width="22.6353">
          <g id="Dot">
            <path d={svgPaths.p19854a00} fill="url(#paint0_linear_0_302)" />
            <path d={svgPaths.p1dd35780} fill="url(#paint1_linear_0_302)" />
            <path d={svgPaths.p1d86dd00} fill="url(#paint2_linear_0_302)" />
            <path d={svgPaths.pf0dad40} fill="url(#paint3_linear_0_302)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_302" x1="0.320069" x2="22.3214" y1="16.5" y2="9.50432">
              <stop stopColor="#0012E7" />
              <stop offset="1" stopColor="#6A4CDE" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_302" x1="0.320069" x2="22.3214" y1="16.5" y2="9.50432">
              <stop stopColor="#0012E7" />
              <stop offset="1" stopColor="#6A4CDE" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_302" x1="0.320069" x2="22.3214" y1="16.5" y2="9.50432">
              <stop stopColor="#0012E7" />
              <stop offset="1" stopColor="#6A4CDE" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_302" x1="0.320069" x2="22.3214" y1="16.5" y2="9.50432">
              <stop stopColor="#0012E7" />
              <stop offset="1" stopColor="#6A4CDE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function GraphicBg() {
  return <div className="-translate-x-1/2 absolute h-[421px] left-1/2 top-[15px] w-[377px]" data-name="graphic bg" />;
}

function Container1() {
  return (
    <div className="h-[29.867px] relative shrink-0 w-[28px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="29.8667" preserveAspectRatio="none" viewBox="0 0 28.0003 29.8667" width="28.0003">
        <g id="Container">
          <path d={svgPaths.p1ed75f00} fill="#C6C6C6" id="Bottom right circle" />
          <g id="Center shapes">
            <path d={svgPaths.p27d34900} fill="#C6C6C6" />
            <path d={svgPaths.p5c6ce30} fill="#C6C6C6" />
            <path d={svgPaths.p29a41d00} fill="#C6C6C6" />
          </g>
          <path d={svgPaths.p1e343c00} fill="#C6C6C6" id="Top left circle" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Logo">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center overflow-clip px-[16px]" data-name="Container">
      <Logo />
    </div>
  );
}

function TempUtilityNavigation() {
  return (
    <div className="h-[64px] relative shrink-0 w-[375px]" data-name="TEMP_Utility Navigation">
      <Container />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[21px] relative rounded-[30px] shrink-0 to-1/2 to-[#dbdbdb] w-[183px]" data-name="Rectangle" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Frame 10123177">
          <g id="Union">
            <path d={svgPaths.p34a5680} fill="#C6C6C6" />
            <path d={svgPaths.p20803680} fill="#C6C6C6" />
            <path d={svgPaths.p19c3ec00} fill="#C6C6C6" />
            <path d={svgPaths.p1d1d8600} fill="#C6C6C6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[202.5px]">
      <Frame19 />
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[12.25px] relative rounded-[17.5px] shrink-0 to-1/2 to-[#dbdbdb] w-[175px]" data-name="Rectangle" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function Button1() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-[#e1e1e1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[12.25px] relative rounded-[17.5px] shrink-0 to-1/2 to-[#dbdbdb] w-[41px]" data-name="Rectangle" />
          <div className="relative shrink-0 size-[16px]" data-name="Trailing Icon">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[12px] top-1/2" data-name="arrow-down">
              <div className="absolute inset-[29.17%_0_15.83%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="6.6" preserveAspectRatio="none" viewBox="0 0 12 6.6" width="12">
                  <path d={svgPaths.p1fa8f200} fill="#E1E1E1" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
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

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
      <Button />
      <ChatInputSendButton className="relative shrink-0 size-[34px]" />
    </div>
  );
}

function Message() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Message">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
          <Frame20 />
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function ChipButton() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip button">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[12.25px] relative rounded-[17.5px] shrink-0 to-1/2 to-[#dbdbdb] w-[72px]" data-name="Rectangle" />
    </div>
  );
}

function ChipButton1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip button">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[12.25px] relative rounded-[17.5px] shrink-0 to-1/2 to-[#dbdbdb] w-[66px]" data-name="Rectangle" />
    </div>
  );
}

function ChipButton2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip button">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[12.25px] relative rounded-[17.5px] shrink-0 to-1/2 to-[#dbdbdb] w-[70px]" data-name="Rectangle" />
    </div>
  );
}

function ChipButton3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0" data-name="Chip button">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[12.25px] relative rounded-[17.5px] shrink-0 to-1/2 to-[#dbdbdb] w-[167px]" data-name="Rectangle" />
    </div>
  );
}

function Prompts() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="prompts">
      <ChipButton />
      <ChipButton1 />
      <ChipButton2 />
      <ChipButton3 />
    </div>
  );
}

function QuickReply() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[327px]" data-name="Quick Reply">
      <Prompts />
    </div>
  );
}

function RegularQuickPromptStyle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center p-[8px] relative shrink-0 w-[343px]" data-name="regular quick prompt style">
      <Message />
      <QuickReply />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[12.25px] relative rounded-[17.5px] shrink-0 to-1/2 to-[#dbdbdb] w-[81px]" data-name="Rectangle" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center px-[16px] relative shrink-0 w-[375px]">
      <Frame24 />
      <RegularQuickPromptStyle />
      <Frame5 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-0 top-[63px]">
      <TempUtilityNavigation />
      <Frame26 />
    </div>
  );
}

function Header() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Header">
      <div className="absolute bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[17.5px] left-0 rounded-[25px] to-1/2 to-[#dbdbdb] top-0 w-[99px]" data-name="Rectangle" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
        <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 8.8 16" width="8.8">
            <path d={svgPaths.p4e6b180} fill="#C6C6C6" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[343px]">
      <Header />
      <Frame17 />
    </div>
  );
}

function TextFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text frame">
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[14px] relative rounded-[20px] shrink-0 to-1/2 to-[#dbdbdb] w-[183px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[12.25px] relative rounded-[17.5px] shrink-0 to-1/2 to-[#dbdbdb] w-[184px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[12.25px] relative rounded-[17.5px] shrink-0 to-1/2 to-[#dbdbdb] w-[252px]" data-name="Rectangle" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2">
      <div className="absolute left-0 overflow-clip size-[18px] top-0" data-name="arrow-right">
        <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 9.9 18" width="9.9">
            <path d={svgPaths.p39931290} fill="#C6C6C6" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px relative w-full">
      <TextFrame />
      <Frame8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[5.333px] relative rounded-[96px] shrink-0 size-[32px]">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="dots-horizontal">
        <div className="absolute inset-[36.46%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="3.25" preserveAspectRatio="none" viewBox="0 0 12 3.25" width="12">
            <g id="Vector">
              <path d={svgPaths.p26278180} fill="#6D6D6D" />
              <path d={svgPaths.p186c9d00} fill="#6D6D6D" />
              <path d={svgPaths.p18b06780} fill="#6D6D6D" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Upper() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Upper">
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Frame3 />
        <Upper />
      </div>
    </div>
  );
}

function GeneralCardComponent() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[136px] items-start justify-center min-w-px relative rounded-[24px]" data-name="General card component 2.5">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame2 />
    </div>
  );
}

function Carousel() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[343px]" data-name="Carousel">
      <GeneralCardComponent />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame23 />
      <Carousel />
    </div>
  );
}

function CarouselDots() {
  return (
    <div className="content-stretch flex gap-[5px] items-start justify-center relative shrink-0 w-full" data-name="Carousel dots">
      <div className="bg-[#c6c6c6] relative rounded-[8px] self-stretch shrink-0 w-[20px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Dot 2">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#F2F2F2" id="Dot 2" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]" data-name="Dot 3">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#F2F2F2" id="Dot 2" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]" data-name="Dot 4">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#F2F2F2" id="Dot 2" r="4" />
        </svg>
      </div>
    </div>
  );
}

function ActionCenter() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Action center">
      <Frame30 />
      <CarouselDots />
    </div>
  );
}

function Header1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[343px]" data-name="Header">
      <div className="absolute bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[17.5px] left-0 rounded-[25px] to-1/2 to-[#dbdbdb] top-0 w-[47px]" data-name="Rectangle" />
    </div>
  );
}

function IconAndAvatar() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="stethoscope-heart">
        <div className="absolute inset-[0.03%_0.05%_0.03%_0.06%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.9873" preserveAspectRatio="none" viewBox="0 0 19.978 19.9873" width="19.978">
            <path d={svgPaths.p20842200} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTag() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[143px]" data-name="Icon + tag">
      <IconAndAvatar />
      <div className="bg-[#eafaf1] min-h-[24px] opacity-0 relative rounded-[8px] shrink-0" data-name="Tag">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">For you</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Book primary care visit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[20px] row-2 self-stretch shrink-0" data-name="Primary">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[10px] py-[10.12px] relative size-full">
        <IconTag />
        <Frame9 />
      </div>
    </div>
  );
}

function IconAndAvatar1() {
  return <div className="bg-[#f2f2f2] relative rounded-[50px] shrink-0 size-[40px]" data-name="Icon and avatar" />;
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[14px] relative rounded-[20px] shrink-0 to-1/2 to-[#dbdbdb] w-[119px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[14px] relative rounded-[20px] shrink-0 to-1/2 to-[#dbdbdb] w-[120px]" data-name="Rectangle" />
    </div>
  );
}

function UrgentCare() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[20px] row-1 self-stretch shrink-0" data-name="Urgent care">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <IconAndAvatar1 />
        <Frame10 />
      </div>
    </div>
  );
}

function IconAndAvatar2() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="bill-hand">
        <div className="absolute inset-[0_0.01%_0.01%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.9975" preserveAspectRatio="none" viewBox="0 0 19.9978 19.9975" width="19.9978">
            <path d={svgPaths.p380d4580} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Review bills and insurance info</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bills() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[20px] row-3 self-stretch shrink-0" data-name="Bills">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[10px] py-[10.12px] relative size-full">
        <IconAndAvatar2 />
        <Frame11 />
      </div>
    </div>
  );
}

function IconAndAvatar3() {
  return <div className="bg-[#f2f2f2] relative rounded-[50px] shrink-0 size-[40px]" data-name="Icon and avatar" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[14px] relative rounded-[20px] shrink-0 to-1/2 to-[#dbdbdb] w-[95px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(219,219,219,0.05)] h-[14px] relative rounded-[20px] shrink-0 to-1/2 to-[#dbdbdb] w-[114px]" data-name="Rectangle" />
    </div>
  );
}

function Bh() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[20px] row-1 self-stretch shrink-0" data-name="BH">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[10px] py-[10.12px] relative size-full">
        <IconAndAvatar3 />
        <Frame12 />
      </div>
    </div>
  );
}

function IconAndAvatar4() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="location-medical">
        <div className="absolute inset-[0.43%_1.21%_0.43%_1.27%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.8278" preserveAspectRatio="none" viewBox="0 0 19.5041 19.8278" width="19.5041">
            <path d={svgPaths.p95c1200} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Find in-network local care</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Local() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[20px] row-2 self-stretch shrink-0" data-name="Local">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[10px] py-[10.12px] relative size-full">
        <IconAndAvatar4 />
        <Frame13 />
      </div>
    </div>
  );
}

function IconAndAvatar5() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="medical-cancer-ribbon">
        <div className="absolute inset-[0.03%_10.41%_0_14.6%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.9934" preserveAspectRatio="none" viewBox="0 0 14.9974 19.9934" width="14.9974">
            <path d={svgPaths.p205bfb00} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Book cancer support consult</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cancer() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[20px] row-3 self-stretch shrink-0" data-name="Cancer">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[10px] py-[10.12px] relative size-full">
        <IconAndAvatar5 />
        <Frame14 />
      </div>
    </div>
  );
}

function IconAndAvatar6() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chat-bubble-medical-qs">
        <div className="absolute inset-[0.31%_0.51%_1.32%_0.56%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.6746" preserveAspectRatio="none" viewBox="0 0 19.7865 19.6746" width="19.7865">
            <path d={svgPaths.p1d378000} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Get a second opinion or advice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CareAdvice() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[20px] row-4 self-stretch shrink-0" data-name="Care advice">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[10px] py-[10.12px] relative size-full">
        <IconAndAvatar6 />
        <Frame15 />
      </div>
    </div>
  );
}

function IconAndAvatar7() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="list-bullets">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1dcff580} fill="#0012E7" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2e8ddb00} fill="#0012E7" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2baaba00} fill="#0012E7" fillRule="evenodd" />
            <path d={svgPaths.p26221b00} fill="#0012E7" />
            <path d={svgPaths.p32e34800} fill="#0012E7" />
            <path d={svgPaths.p331a2200} fill="#0012E7" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">View more benefits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondOpinion() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[20px] row-4 self-stretch shrink-0" data-name="Second opinion">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[10px] py-[10.12px] relative size-full">
        <IconAndAvatar7 />
        <Frame16 />
      </div>
    </div>
  );
}

function GetCareTiles() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] h-[528px] relative shrink-0 w-[342px]" data-name="Get care tiles">
      <Primary />
      <UrgentCare />
      <Bills />
      <Bh />
      <Local />
      <Cancer />
      <CareAdvice />
      <SecondOpinion />
    </div>
  );
}

function GetCare() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Get Care">
      <Header1 />
      <GetCareTiles />
    </div>
  );
}

function BadgeCount() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="bg-[#e6effe] relative rounded-[152px] size-[32px]" data-name="Badge count">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[16px] size-[32px] top-[16px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative size-[32px] text-[12px] text-black text-center">
                <p className="leading-[16px]">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Title">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[32px]">Your Care Team</p>
      </div>
      <BadgeCount />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Header">
      <Title />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="relative rounded-[72.727px] shrink-0 size-[72px]" data-name="Link → c6b92e5c-da92-40ed-8970-316ca7c3f907.jpg">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[72.727px] size-full" src={imgLinkC6B92E5CDa9240Ed8970316Ca7C3F907Jpg} />
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Name">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[16px] text-black text-center">Dr. Jessica Smith, MD</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] text-center whitespace-nowrap">Primary Care</p>
    </div>
  );
}

function CopyBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full" data-name="Copy block">
      <Name />
      <Title1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-center min-w-px relative" data-name="Content">
      <Frame />
      <CopyBlock />
    </div>
  );
}

function CareTeamMember() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center p-[24px] relative rounded-[24px] shrink-0 w-[224px]" data-name="Care team member">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Content />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[72px]" data-name="Avatar">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="72" src={imgAvatar} width="72" />
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Name">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[16px] text-black text-center">Dr. Erika Stephens, DO</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] text-center whitespace-nowrap">Psychiatry</p>
    </div>
  );
}

function CopyBlock1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full" data-name="Copy block">
      <Name1 />
      <Title2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-center min-w-px relative" data-name="Content">
      <Frame1 />
      <CopyBlock1 />
    </div>
  );
}

function CareTeamMember1() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center p-[24px] relative rounded-[24px] shrink-0 w-[224px]" data-name="Care team member">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Content1 />
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Name">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[16px] text-black text-center">{`Michelle Young, LCSW `}</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] text-center whitespace-nowrap">Therapy</p>
    </div>
  );
}

function CopyBlock2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full" data-name="Copy block">
      <Name2 />
      <Title3 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-center min-w-px relative" data-name="Content">
      <div className="relative rounded-[104px] shrink-0 size-[72px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[104px] size-full" src={imgAvatar1} />
      </div>
      <CopyBlock2 />
    </div>
  );
}

function CareTeamMember2() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center p-[24px] relative rounded-[24px] shrink-0 w-[224px]" data-name="Care team member">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Content2 />
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Name">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[16px] text-black text-center">What is a Care Team?</p>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] text-center whitespace-nowrap">Learn more</p>
    </div>
  );
}

function CopyBlock3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full" data-name="Copy block">
      <Name3 />
      <Title4 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-center min-w-px relative" data-name="Content">
      <div className="relative shrink-0 size-[72px]" data-name="patient-dr-team">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPatientDrTeam} />
      </div>
      <CopyBlock3 />
    </div>
  );
}

function CareTeamMember3() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center p-[24px] relative rounded-[24px] shrink-0 w-[224px]" data-name="Care team member">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Content3 />
    </div>
  );
}

function Carousel1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Carousel">
      <CareTeamMember />
      <CareTeamMember1 />
      <CareTeamMember2 />
      <CareTeamMember3 />
    </div>
  );
}

function CareTeamCarousel() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[343px]" data-name="Care Team Carousel">
      <Header2 />
      <Carousel1 />
    </div>
  );
}

function Sections1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0" data-name="Sections">
      <GetCare />
      <CareTeamCarousel />
    </div>
  );
}

function Sections() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[16px] top-[427px]" data-name="Sections">
      <ActionCenter />
      <Sections1 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Dot className="overflow-clip relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6d6d6d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Find care for me or my family</p>
      </div>
    </div>
  );
}

function Message2() {
  return (
    <div className="content-stretch flex h-[56px] items-start relative shrink-0 w-full" data-name="Message">
      <Frame29 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
      <div className="bg-white min-h-[32px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[12px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Who is this for</p>
          </div>
        </div>
      </div>
      <ChatInputSendButton className="relative shrink-0 size-[34px]" />
    </div>
  );
}

function Message1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_5px_rgba(0,0,0,0.16)] flex flex-col items-center p-[16px] relative rounded-[24px] shrink-0 w-[343px]" data-name="Message">
      <Message2 />
      <Frame22 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-black w-[345px]">Hi Riley, how can I help you?</p>
      <Message1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Covered by Walmart</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="card-medical">
        <div className="absolute inset-[9.38%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 16 13" width="16">
            <g id="Vector">
              <path d={svgPaths.p37672af0} fill="#002380" />
              <path d={svgPaths.p2a88a300} fill="#002380" />
              <path d={svgPaths.p29f10a80} fill="#002380" />
              <path clipRule="evenodd" d={svgPaths.pacd7c00} fill="#002380" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 top-[1469px] w-[375px]">
      <Frame25 />
      <Frame6 />
    </div>
  );
}

function HomeContainer() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 right-0" data-name="Home-container">
      <div className="-translate-x-1/2 absolute bg-[#6d6d6d] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Vector-home" />
    </div>
  );
}

function HighlightContainer() {
  return (
    <div className="h-[2px] relative shrink-0 w-[36px]" data-name="Highlight-container">
      <div className="-translate-x-1/2 absolute bg-[#6d6d6d] bottom-0 h-[2px] left-1/2 opacity-99 w-[36px]" data-name="Vector-highlight" />
    </div>
  );
}

function IconBadgeStack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
        <div className="absolute inset-[0_0_-0.01%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="24.003" preserveAspectRatio="none" viewBox="0 0 24 24.003" width="24">
            <path d={svgPaths.p19226700} fill="#6D6D6D" id="Vector" />
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
      <div className="[word-break:break-word] flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#6d6d6d] text-[11px] text-center w-[min-content]">
        <p className="leading-[16px]">Home</p>
      </div>
    </div>
  );
}

function HighlightContainer1() {
  return <div className="h-[2px] relative shrink-0 w-[36px]" data-name="Highlight-container" />;
}

function IconBadgeStack1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
        <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                <path clipRule="evenodd" d={svgPaths.p2ba71280} fill="#6D6D6D" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextIconStack1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
      <IconBadgeStack1 />
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#6d6d6d] text-[11px] text-center w-[min-content]">
        <p className="leading-[16px]">Messages</p>
      </div>
    </div>
  );
}

function HighlightContainer2() {
  return <div className="h-[2px] relative shrink-0 w-[36px]" data-name="Highlight-container" />;
}

function IconBadgeStack2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p33cc7c80} fill="#6D6D6D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pe9d1380} fill="#6D6D6D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3f744600} fill="#6D6D6D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3c435600} fill="#6D6D6D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2a713500} fill="#6D6D6D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p332d7900} fill="#6D6D6D" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TextIconStack2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
      <IconBadgeStack2 />
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#6d6d6d] text-[11px] text-center w-[min-content]">
        <p className="leading-[16px]">Activity</p>
      </div>
    </div>
  );
}

function HighlightContainer3() {
  return <div className="h-[2px] relative shrink-0 w-[36px]" data-name="Highlight-container" />;
}

function IconBadgeStack3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <path clipRule="evenodd" d={svgPaths.p24a0a740} fill="#6D6D6D" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function TextIconStack3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
      <IconBadgeStack3 />
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#6d6d6d] text-[11px] text-center w-[min-content]">
        <p className="leading-[16px]">Me</p>
      </div>
    </div>
  );
}

function TabItemsContainer() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 px-[4px] right-0 top-0" data-name="TabItems-container">
      <div className="relative shrink-0 w-[59px]" data-name="_TabItem">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center relative size-full">
            <HighlightContainer />
            <TextIconStack />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[59px]" data-name="_TabItem">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center relative size-full">
            <HighlightContainer1 />
            <TextIconStack1 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[59px]" data-name="_TabItem">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center relative size-full">
            <HighlightContainer2 />
            <TextIconStack2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[59px]" data-name="_TabItem">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center relative size-full">
            <HighlightContainer3 />
            <TextIconStack3 />
          </div>
        </div>
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

function Clock1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+21.5px)] top-[21px]" data-name="Clock">
      <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[17px] text-black text-center tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss03" 1' }}>
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
      <svg className="absolute block inset-0 size-full" fill="none" height="12.0001" preserveAspectRatio="none" viewBox="0 0 19.9707 12.0001" width="19.9707">
        <g id="Signal">
          <path d={svgPaths.pe92800} fill="black" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function Connection() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[17px]" data-name="Connection">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.5001" preserveAspectRatio="none" viewBox="0 0 17 12.5001" width="17">
        <g id="Connection">
          <path d={svgPaths.p2b7cea80} fill="black" id="Wifi" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.33px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 27.33 13" width="27.33">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.4" rx="3.5" stroke="black" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p223c2d00} fill="black" id="Cap" opacity="0.5" />
          <rect fill="black" height="9" id="Capacity" rx="2" width="21" x="2" y="2" />
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

function IOsTopNavWrapper() {
  return (
    <div className="absolute backdrop-blur-[6px] content-stretch flex flex-col items-start left-0 top-0" data-name="iOS Top Nav Wrapper">
      <div className="h-[47px] overflow-clip relative shrink-0 w-[375px]" data-name="iOS/Status Bar">
        <Clock />
        <IndicatorsGroup />
      </div>
    </div>
  );
}

export default function Component02AppHomeLoadingStateAfterTappingTheEmail() {
  return (
    <div className="bg-white relative size-full" data-name="02 App – Home loading state (after tapping the email)">
      <div className="relative size-full">
        <GraphicBg />
        <Frame18 />
        <Sections />
        <Frame27 />
        <div className="-translate-x-1/2 absolute bg-white bottom-0 h-[100px] left-1/2 overflow-clip rounded-bl-[48px] rounded-br-[24px] w-[375px]" data-name="Bottom tab bar">
          <HomeContainer />
          <div className="absolute bg-[#e1e1e1] h-px left-0 right-0 top-0" data-name="Vector-border" />
          <ForegroundContainer />
        </div>
        <IOsTopNavWrapper />
      </div>
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-[-1px] pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}