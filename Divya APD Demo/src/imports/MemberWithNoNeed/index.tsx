import svgPaths from "./svg-uddnt2nzn4";
import imgWhatAPrimaryCareVisitCosts from "./e9b28ec59ad56788f227d2f7cb5c427ff44459b8.png";
type AvatarProps = {
  className?: string;
  showBadge?: boolean;
  size?: "small (48)";
  type?: "provider fallback";
};

function Avatar({ className, showBadge = true, size = "small (48)", type = "provider fallback" }: AvatarProps) {
  return (
    <div className={className || "relative size-[48px]"}>
      <div className="-translate-y-1/2 absolute aspect-[48/48] left-0 right-0 top-1/2" data-name="Background">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="#F2F2F2" id="Background" r="24" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute h-[24px] left-1/4 overflow-clip right-1/4 top-[calc(50%+0.2px)]" data-name="person-medical">
        <div className="absolute inset-[0_6.46%_0_6.04%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 21 24" width="21">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3e7df180} fill="#6D6D6D" fillRule="evenodd" />
              <path d={svgPaths.p345e8d80} fill="#6D6D6D" />
              <path d={svgPaths.p3d03c300} fill="#6D6D6D" />
            </g>
          </svg>
        </div>
      </div>
      {showBadge && (
        <div className="absolute left-[32px] size-[16px] top-[32px]" data-name="Verification Badge">
          <div className="absolute inset-[-2.1%_0]">
            <svg className="block size-full" fill="none" height="16.6718" preserveAspectRatio="none" viewBox="0 0 16.0256 16.6718" width="16.0256">
              <path d={svgPaths.pefc7130} fill="#0012E7" id="Star 20" stroke="white" strokeWidth="0.727273" />
            </svg>
          </div>
          <div className="-translate-y-1/2 absolute aspect-[28.000289916992188/29.866695404052734] left-[31.25%] right-[31.25%] top-[calc(50%+0.25px)]" data-name="Logo">
            <div className="absolute inset-[71.59%_0_0_69.7%]" data-name="Bottom right circle">
              <svg className="absolute block inset-0 size-full" fill="none" height="1.81816" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816" width="1.81816">
                <path d={svgPaths.p4a0f800} fill="white" id="Bottom right circle" />
              </svg>
            </div>
            <svg className="absolute block inset-0 size-full" fill="none" height="6.39993" preserveAspectRatio="none" viewBox="0 0 6 6.39993" width="6">
              <g id="Center shapes">
                <path d={svgPaths.p24c24bf0} fill="white" />
                <path d={svgPaths.p10931800} fill="white" />
                <path d={svgPaths.p30d5de00} fill="white" />
              </g>
            </svg>
            <div className="absolute inset-[0_69.7%_71.59%_0]" data-name="Top left circle">
              <svg className="absolute block inset-0 size-full" fill="none" height="1.81816" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816" width="1.81816">
                <path d={svgPaths.p12e17e00} fill="white" id="Top left circle" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-black w-full">
        <span className="leading-[32px] text-[24px]">Hi</span>
        <span className="leading-[32px] text-[24px]">,</span>
        <span className="leading-[32px] text-[24px]">{` Riley! I’m `}</span>
        <span className="leading-[32px] text-[#0012e7] text-[24px]">Dot</span>
        <span className="leading-[32px] text-[24px]">, your healthcare guide.</span>
      </p>
    </div>
  );
}

function Bubble() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`Now that you’re all set up, I can help you make the most of your Included Health benefits. `}</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">Not sure where to begin? Choose a path below or describe what’s going on so I can point you towards the best next step.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Bubble />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[614px] min-w-px relative" data-name="Text">
      <Frame4 />
    </div>
  );
}

function Utterance() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Utterance">
      <Text />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0 w-full">
      <Utterance />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame38 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 37.7254 40" width="37.7254">
            <g id="Dot">
              <path d={svgPaths.p33c6fd00} fill="url(#paint0_linear_0_308)" />
              <path d={svgPaths.p19131200} fill="url(#paint1_linear_0_308)" />
              <path d={svgPaths.pd42dd00} fill="url(#paint2_linear_0_308)" />
              <path d={svgPaths.pd346c00} fill="url(#paint3_linear_0_308)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_308" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_308" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_308" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_308" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame25 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0012e7] text-[14px] whitespace-nowrap">Understand my plan</p>
    </div>
  );
}

function V() {
  return (
    <div className="bg-white content-stretch flex items-center mix-blend-multiply p-[12px] relative rounded-[9999px] shrink-0" data-name="V3">
      <div aria-hidden className="absolute border-[#df7cf5] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0012e7] text-[14px] whitespace-nowrap">Find a new doctor</p>
    </div>
  );
}

function V1() {
  return (
    <div className="bg-white content-stretch flex items-center mix-blend-multiply p-[12px] relative rounded-[9999px] shrink-0" data-name="V3">
      <div aria-hidden className="absolute border-[#df7cf5] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0012e7] text-[14px] whitespace-nowrap">Something else</p>
    </div>
  );
}

function V2() {
  return (
    <div className="bg-white content-stretch flex items-center mix-blend-multiply p-[12px] relative rounded-[9999px] shrink-0" data-name="V3">
      <div aria-hidden className="absolute border-[#df7cf5] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Paragraph2 />
    </div>
  );
}

function Prompts() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="prompts">
      <V />
      <V1 />
      <V2 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[15px] top-[132px] w-[343px]">
      <Frame8 />
      <Prompts />
    </div>
  );
}

function Bubble1() {
  return (
    <div className="bg-[#e6effe] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Bubble">
      <div className="flex flex-row justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-end p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black text-right">
            <p className="leading-[24px]">{`Honestly I'm just setting up my account. Nothing's wrong.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-center leading-[0] relative shrink-0 text-[#5d5d69] text-[12px]">
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">Dot</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[2.5px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">AI Assistant</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_339)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_339)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_339)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_339)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame10 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">{`That's a great time to be here, actually. Is there anything about your health you've been meaning to take care of and haven't gotten to yet?`}</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name />
      <Frame37 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Bubble2() {
  return (
    <div className="bg-[#e6effe] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Bubble">
      <div className="flex flex-row justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-end p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black text-right">
            <p className="leading-[24px]">{`I don't have a regular doctor. Haven't seen one in about three years.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-center leading-[0] relative shrink-0 text-[#5d5d69] text-[12px]">
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">Dot</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[2.5px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">AI Assistant</p>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_339)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_339)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_339)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_339)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">{`That's one of the most common things members tell me, and it's also one of the easiest to fix. Here's what a visit would cost you.`}</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name1 />
      <Frame40 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0 w-[10px]">
        <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
              <path clipRule="evenodd" d={svgPaths.p3144e000} fill="url(#paint0_linear_0_317)" fillRule="evenodd" id="Vector" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_317" x1="0.141403" x2="9.75175" y1="6.875" y2="3.635">
                  <stop stopColor="#0012E7" />
                  <stop offset="1" stopColor="#6A4CDE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="header">
      <Frame6 />
      <div className="[word-break:break-word] bg-center bg-clip-text bg-cover bg-no-repeat flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: `url("${imgWhatAPrimaryCareVisitCosts}")` }}>
        <p className="leading-[20px]">What a primary care visit costs</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header />
    </div>
  );
}

function Frame50() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Figtree:Bold',sans-serif] font-bold gap-[4px] items-start justify-center leading-[0] relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[24px] text-black">
        <p className="leading-[32px]">$30</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#008200] text-[12px]">
        <p className="leading-[16px]">Preferred</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-center leading-[0] relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-black">
        <p className="leading-[24px]">Primary care</p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#6d6d6d] text-[12px]">
        <p className="leading-[16px]">$30 with a standard doctor</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
      <Frame50 />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#e1e1e1] h-full relative shrink-0 w-px" />
      </div>
      <Frame51 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <Frame49 />
    </div>
  );
}

function CardBase1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Card Base">
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[12px] w-full">
        <p className="leading-[16px]">Preferred doctors meet the highest standards for clinical quality and outcomes, so your copay is lower. Standard doctors are covered too, usually at a higher copay.</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame34 />
      <CardBase1 />
      <Frame29 />
    </div>
  );
}

function CardBase() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-[343px]" data-name="Card Base">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Frame31 />
      </div>
      <div aria-hidden className="absolute border-[#df7cf5] border-[1.5px] border-solid inset-[-1.5px] pointer-events-none rounded-[25.5px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame21 />
      <CardBase />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-center leading-[0] relative shrink-0 text-[#5d5d69] text-[12px]">
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">Dot</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[2.5px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">AI Assistant</p>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_339)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_339)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_339)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_339)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name2 />
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[16px] w-full">
        <p className="leading-[1.5]">Would you like to see a few near you? It takes a minute now and saves you the scramble later.</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Bubble3() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">Yes, show me</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[40px] relative size-full">
            <Bubble3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-center leading-[0] relative shrink-0 text-[#5d5d69] text-[12px]">
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">Dot</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[2.5px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">AI Assistant</p>
      </div>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_339)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_339)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_339)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_339)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#8f8f8f] text-[16px]">
        <p className="leading-[1.5]">Searching for Preferred primary care doctors near 94709 who are taking new patients...</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name3 />
      <Frame41 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-center leading-[0] relative shrink-0 text-[#5d5d69] text-[12px]">
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">Dot</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[2.5px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">AI Assistant</p>
      </div>
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_339)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_339)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_339)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_339)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">Found three! All of them are Preferred, so a visit is $0 instead of $30.</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name4 />
      <Frame45 />
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Name">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">Dr. Ana Villareal, MD</p>
      </div>
    </div>
  );
}

function SpecialtyS() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Specialty(s)">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8f8f8f] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Family medicine</p>
      </div>
    </div>
  );
}

function NameSpecialty() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name, specialty">
      <Name5 />
      <SpecialtyS />
    </div>
  );
}

function PhotoNameSpecialty() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Photo, name, specialty">
      <Avatar className="relative shrink-0 size-[48px]" showBadge={false} />
      <NameSpecialty />
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="bookmark">
          <div className="absolute inset-[5.94%_18.32%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="21.1484" preserveAspectRatio="none" viewBox="0 0 15.2053 21.1484" width="15.2053">
              <path d={svgPaths.p23eb0cf0} fill="black" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalBadges() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Personal, badges">
      <PhotoNameSpecialty />
    </div>
  );
}

function Why() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Why">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#6d6d6d] text-[14px]">Takes on patients who have been away from care for a while and starts with a full catch-up visit.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Why />
    </div>
  );
}

function Frame52() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[12px] items-start leading-[20px] relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#6d6d6d]">1820 Alder St, Suite 200, Berkeley, CA 94709</p>
      <p className="relative shrink-0 text-[#008200] whitespace-nowrap">1.4 mi</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0" data-name="Provider Offering Chip">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[#edf9ed] min-h-[24px] relative rounded-[8px] shrink-0 w-full" data-name="Static chip">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                    <path d={svgPaths.p1ab53880} fill="#008200" id="Vector" />
                  </svg>
                </div>
                <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#004f00] text-[12px] text-center text-ellipsis whitespace-nowrap">Preferred</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Provider Offering Chip">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[#edf9ed] min-h-[24px] relative rounded-[8px] shrink-0 w-full" data-name="Static chip">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#004f00] text-[12px] text-center text-ellipsis whitespace-nowrap">$0 copay</p>
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
    <div className="bg-[#001048] min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Schedule</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001048] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">See profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonStack() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Button stack">
      <div className="relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Button />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Button1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Info">
      <Frame1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 284 1" width="284">
            <line id="Line 4" stroke="#F2F2F2" x2="284" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame52 />
      <Frame26 />
      <ButtonStack />
    </div>
  );
}

function DotResult() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] shrink-0 w-[316px]" data-name="Dot result">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <PersonalBadges />
      <Info />
    </div>
  );
}

function Name6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Name">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">Dr. Marcus Bell, MD</p>
      </div>
    </div>
  );
}

function SpecialtyS1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Specialty(s)">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8f8f8f] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Internal Medicine</p>
      </div>
    </div>
  );
}

function NameSpecialty1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name, specialty">
      <Name6 />
      <SpecialtyS1 />
    </div>
  );
}

function PhotoNameSpecialty1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Photo, name, specialty">
      <Avatar className="relative shrink-0 size-[48px]" showBadge={false} />
      <NameSpecialty1 />
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="bookmark">
          <div className="absolute inset-[5.94%_18.32%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="21.1484" preserveAspectRatio="none" viewBox="0 0 15.2053 21.1484" width="15.2053">
              <path d={svgPaths.p23eb0cf0} fill="black" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalBadges1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Personal, badges">
      <PhotoNameSpecialty1 />
    </div>
  );
}

function Why1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Why">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#6d6d6d] text-[14px]">Known for straight answers and for keeping routine care simple once you are on his list.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Why1 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[12px] items-start leading-[20px] relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#6d6d6d]">455 Shattuck Ave, Berkeley, CA 94704</p>
      <p className="relative shrink-0 text-[#008200] whitespace-nowrap">2.8 mi</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0" data-name="Provider Offering Chip">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[#edf9ed] min-h-[24px] relative rounded-[8px] shrink-0 w-full" data-name="Static chip">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                    <path d={svgPaths.p1ab53880} fill="#008200" id="Vector" />
                  </svg>
                </div>
                <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#004f00] text-[12px] text-center text-ellipsis whitespace-nowrap">Preferred</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Provider Offering Chip">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[#edf9ed] min-h-[24px] relative rounded-[8px] shrink-0 w-full" data-name="Static chip">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#004f00] text-[12px] text-center text-ellipsis whitespace-nowrap">$0 copay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#001048] min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Schedule</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001048] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">See profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonStack1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px relative w-full" data-name="Button stack">
      <div className="relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Button2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Button3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px relative w-full" data-name="Info">
      <Frame2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 284 1" width="284">
            <line id="Line 4" stroke="#F2F2F2" x2="284" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame53 />
      <Frame27 />
      <ButtonStack1 />
    </div>
  );
}

function DotResult1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] self-stretch shrink-0 w-[316px]" data-name="Dot result">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <PersonalBadges1 />
      <Info1 />
    </div>
  );
}

function Name7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Name">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">Dr. Ji-woo Han, MD</p>
      </div>
    </div>
  );
}

function SpecialtyS2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Specialty(s)">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8f8f8f] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Family Medicine</p>
      </div>
    </div>
  );
}

function NameSpecialty2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name, specialty">
      <Name7 />
      <SpecialtyS2 />
    </div>
  );
}

function PhotoNameSpecialty2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Photo, name, specialty">
      <Avatar className="relative shrink-0 size-[48px]" showBadge={false} />
      <NameSpecialty2 />
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="bookmark">
          <div className="absolute inset-[5.94%_18.32%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="21.1484" preserveAspectRatio="none" viewBox="0 0 15.2053 21.1484" width="15.2053">
              <path d={svgPaths.p23eb0cf0} fill="black" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalBadges2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Personal, badges">
      <PhotoNameSpecialty2 />
    </div>
  );
}

function Why2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Why">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#6d6d6d] text-[14px]">Same-week openings most weeks, and handles referrals to specialists without you chasing them.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Why2 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[12px] items-start leading-[20px] relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#6d6d6d]">3110 Telegraph Ave, Oakland, CA 94609</p>
      <p className="relative shrink-0 text-[#008200] whitespace-nowrap">3.1 mi</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0" data-name="Provider Offering Chip">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[#edf9ed] min-h-[24px] relative rounded-[8px] shrink-0 w-full" data-name="Static chip">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                    <path d={svgPaths.p1ab53880} fill="#008200" id="Vector" />
                  </svg>
                </div>
                <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#004f00] text-[12px] text-center text-ellipsis whitespace-nowrap">Preferred</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Provider Offering Chip">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[#edf9ed] min-h-[24px] relative rounded-[8px] shrink-0 w-full" data-name="Static chip">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#004f00] text-[12px] text-center text-ellipsis whitespace-nowrap">$0 copay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#001048] min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Schedule</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001048] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">See profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonStack2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px relative w-full" data-name="Button stack">
      <div className="relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Button4 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Button5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px relative w-full" data-name="Info">
      <Frame3 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 284 1" width="284">
            <line id="Line 4" stroke="#F2F2F2" x2="284" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame54 />
      <Frame28 />
      <ButtonStack2 />
    </div>
  );
}

function DotResult2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] self-stretch shrink-0 w-[316px]" data-name="Dot result">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <PersonalBadges2 />
      <Info2 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full">
      <DotResult />
      <DotResult1 />
      <DotResult2 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[8px] relative shrink-0 w-[34px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 34 8" width="34">
        <g id="Frame 427322270">
          <circle cx="4" cy="4" fill="url(#paint0_linear_0_310)" id="Ellipse 2305" r="4" />
          <circle cx="17" cy="4" fill="#D9D9D9" id="Ellipse 2306" r="4" />
          <circle cx="30" cy="4" fill="#D9D9D9" id="Ellipse 2307" r="4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_310" x1="0.113122" x2="7.8014" y1="5.5" y2="2.908">
            <stop stopColor="#0012E7" />
            <stop offset="1" stopColor="#6A4CDE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame35 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[343px]">
      <Frame30 />
      <Frame36 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame42 />
      <Frame46 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-center leading-[0] relative shrink-0 text-[#5d5d69] text-[12px]">
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">Dot</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[2.5px]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[16px]">AI Assistant</p>
      </div>
    </div>
  );
}

function Name8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_339)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_339)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_339)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_339)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_339" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame15 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[16px] w-full">
        <p className="leading-[1.5]">Tap Schedule on whichever one suits you. And for this or anything else in your healthcare, just ask me anytime.</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name8 />
      <Frame48 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[15px] top-[657px] w-[343px]">
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble1 />
          </div>
        </div>
      </div>
      <Frame18 />
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble2 />
          </div>
        </div>
      </div>
      <Frame20 />
      <Frame17 />
      <Frame7 />
      <Frame44 />
      <Frame23 />
      <Frame47 />
    </div>
  );
}

function Clock1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+20.52px)] top-[20.04px]" data-name="Clock">
      <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#1a1a23] text-[16.22px] text-center tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss03" 1' }}>
        <p className="leading-[16.221px]">9:41</p>
      </div>
    </div>
  );
}

function Clock() {
  return (
    <div className="absolute h-[44.847px] left-0 top-0 w-[83.969px]" data-name="Clock">
      <Clock1 />
    </div>
  );
}

function Signal() {
  return (
    <div className="h-[11.451px] relative shrink-0 w-[19.056px]" data-name="Signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.4505" preserveAspectRatio="none" viewBox="0 0 19.0559 11.4505" width="19.0559">
        <g id="Signal">
          <path d={svgPaths.p2b9ac200} fill="#1A1A23" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function Connection() {
  return (
    <div className="h-[11.927px] relative shrink-0 w-[16.221px]" data-name="Connection">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.9275" preserveAspectRatio="none" viewBox="0 0 16.2214 11.9275" width="16.2214">
        <g id="Connection">
          <path d={svgPaths.p14106fc0} fill="#1A1A23" id="Wifi" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[12.405px] relative shrink-0 w-[26.078px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.4046" preserveAspectRatio="none" viewBox="0 0 26.0782 12.4046" width="26.0782">
        <g id="Battery">
          <rect height="11.4504" id="Border" opacity="0.4" rx="3.33969" stroke="#1A1A23" strokeWidth="0.954198" width="22.9008" x="0.477099" y="0.477099" />
          <path d={svgPaths.p385cfd80} fill="#1A1A23" id="Cap" opacity="0.5" />
          <rect fill="#1A1A23" height="8.58779" id="Capacity" rx="1.9084" width="20.0382" x="1.9084" y="1.9084" />
        </g>
      </svg>
    </div>
  );
}

function IndicatorsGroup() {
  return (
    <div className="absolute content-stretch flex gap-[6.202px] items-center right-[17.84px] top-[21.95px]" data-name="Indicators group">
      <Signal />
      <Connection />
      <Battery />
    </div>
  );
}

function Container1() {
  return <div className="h-0 relative shrink-0 w-[32px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#111827] text-[18px] tracking-[-0.18px] whitespace-nowrap">Welcome to Included Health</p>
    </div>
  );
}

function MoreVertIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="MoreVertIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_283)" id="MoreVertIcon">
          <path d={svgPaths.p1946ea00} fill="#4B5563" id="Vector" />
          <path d={svgPaths.p3f6fc150} fill="#4B5563" id="Vector_2" />
          <path d={svgPaths.p39c93a80} fill="#4B5563" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_0_283">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[4px] relative shrink-0" data-name="Button">
      <MoreVertIcon />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-px pb-[8px] pt-[16px] px-[16px] top-[45px] w-[375px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e1e1e1] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Container1 />
      <Container2 />
      <Button6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-1px] top-[-1px]">
      <div className="absolute bg-white h-[45px] left-0 overflow-clip top-0 w-[374px]" data-name="iOS/Status Bar">
        <Clock />
        <IndicatorsGroup />
      </div>
      <Container />
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[10px] items-center px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[#6d6d6d] text-[16px]">Describe what you need...</p>
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
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Buttons">
      <div className="bg-[#f2f2f2] max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[24px] shrink-0 w-[32px]" data-name="Icon Button">
        <div className="flex flex-row items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Regular">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <path d={svgPaths.p2d425280} fill="#0012E7" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <UiRight />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[120px] top-[8px]">
      <div className="absolute bottom-[8px] h-[5px] left-[120px] w-[135px]" data-name="Home Indicator">
        <svg className="absolute block inset-0 size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 135 5" width="135">
          <path clipRule="evenodd" d={svgPaths.p2f14f2c0} fill="#1A1A23" fillRule="evenodd" id="Home Indicator" />
        </svg>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="absolute contents left-[120px] top-[8px]" data-name="Bottom nav">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col gap-[16px] items-center left-[-1px] w-[375px]">
      <div className="bg-white drop-shadow-[0px_0px_7.5px_rgba(0,0,0,0.12)] relative rounded-[24px] shrink-0 w-[342px]" data-name="Chat Input">
        <div className="flex flex-col items-center justify-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-end pb-[8px] pt-[16px] px-[8px] relative size-full">
            <Text1 />
            <Buttons />
          </div>
        </div>
      </div>
      <div className="h-[21px] relative shrink-0 w-full" data-name="BOTTOM HOME ELEMENT BLACK">
        <BottomNav />
      </div>
    </div>
  );
}

export default function MemberWithNoNeed() {
  return (
    <div className="bg-white border border-black border-solid relative size-full" data-name="Member with no need">
      <div className="-translate-x-1/2 absolute left-1/2 size-[171px] top-[-33px]">
        <div className="absolute inset-[-100.58%]">
          <svg className="block size-full" fill="none" height="515" preserveAspectRatio="none" viewBox="0 0 515 515" width="515">
            <g filter="url(#filter0_f_0_320)" id="Ellipse 20" opacity="0.24">
              <circle cx="257.5" cy="257.5" fill="url(#paint0_linear_0_320)" r="85.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="515" id="filter0_f_0_320" width="515" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_320" stdDeviation="86" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_320" x1="171.657" x2="342.37" y1="175" y2="189.308">
                <stop offset="0.120192" stopColor="#DF7CF5" />
                <stop offset="0.605769" stopColor="#0012E7" />
                <stop offset="0.875" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame39 />
      <Frame5 />
      <Group1 />
      <Frame />
    </div>
  );
}