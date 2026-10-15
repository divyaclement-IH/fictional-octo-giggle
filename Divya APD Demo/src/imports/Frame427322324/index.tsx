import svgPaths from "./svg-swxf88pgrr";
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-black w-full">Good news, Riley! You’re fully covered.</p>
    </div>
  );
}

function Bubble() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">Healthcare can be complex, but Included Health is here to make it simpler. I can help you find the right care, explain your benefits, and make sense of confusing bills or coverage questions.</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">Tell me what you need help with today, or choose a prompt below to get started.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Bubble />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[614px] min-w-px relative" data-name="Text">
      <Frame3 />
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

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0 w-full">
      <Utterance />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame33 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 37.7254 40" width="37.7254">
            <g id="Dot">
              <path d={svgPaths.p33c6fd00} fill="url(#paint0_linear_0_177)" />
              <path d={svgPaths.p19131200} fill="url(#paint1_linear_0_177)" />
              <path d={svgPaths.pd42dd00} fill="url(#paint2_linear_0_177)" />
              <path d={svgPaths.pd346c00} fill="url(#paint3_linear_0_177)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_177" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_177" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_177" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_177" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame24 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0012e7] text-[14px] whitespace-nowrap">Find a doctor</p>
    </div>
  );
}

function V() {
  return (
    <div className="bg-white border-[#6a4cde] border-[1.5px] border-solid content-stretch flex items-center px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="V3">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0012e7] text-[14px] whitespace-nowrap">Ask about my coverage</p>
    </div>
  );
}

function V1() {
  return (
    <div className="bg-white border-[#6a4cde] border-[1.5px] border-solid content-stretch flex items-center px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="V3">
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0012e7] text-[14px] whitespace-nowrap">Understand my plan</p>
    </div>
  );
}

function V2() {
  return (
    <div className="bg-white border-[#6a4cde] border-[1.5px] border-solid content-stretch flex items-center px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="V3">
      <Paragraph2 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <V />
      <V1 />
      <V2 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame39 />
    </div>
  );
}

function Bubble1() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Find a doctor</p>
      </div>
    </div>
  );
}

function Frame7() {
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
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_187)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_187)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_187)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_187)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">Happy to help. What kind of doctor are you looking for, and what would you like them to help with?</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name />
      <Frame32 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Bubble2() {
  return (
    <div className="bg-[#e6effe] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Bubble">
      <div className="flex flex-row justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-end p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black">
            <p className="leading-[24px]">An orthopedist. My knee has been bothering me since I started running.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
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
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_187)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_187)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_187)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_187)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">Should I use 94709 as the zip code for this search?</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name1 />
      <Frame35 />
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

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Bubble3() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Yes</p>
      </div>
    </div>
  );
}

function Frame9() {
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
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_187)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_187)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_187)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_187)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-[rgba(0,0,0,0.8)]">
        <p className="leading-[1.5]">Before I pull your matches, do you have any personal preferences?</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-start pr-[32px] relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="bulb-lit">
        <div className="absolute inset-[0_3.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 15 16" width="15">
            <g id="Vector">
              <path d={svgPaths.p1961a570} fill="#6D6D6D" />
              <path clipRule="evenodd" d={svgPaths.p255eda00} fill="#6D6D6D" fillRule="evenodd" />
              <path d={svgPaths.p5500100} fill="#6D6D6D" />
              <path d={svgPaths.p3fb28980} fill="#6D6D6D" />
              <path d={svgPaths.p38c7ea00} fill="#6D6D6D" />
              <path d={svgPaths.p25a7a80} fill="#6D6D6D" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#6d6d6d] text-[0px]">
        <p className="font-['Figtree:Medium_Italic',sans-serif] italic leading-[1.5] text-[16px]">Tip: You can mention gender, languages spoken or expertise.</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name2 />
      <Frame57 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function Bubble4() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">No preferences</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame40 />
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble4 />
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

function Name3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_187)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_187)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_187)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_187)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5] mb-0 whitespace-pre-wrap">Your plan separates in-network providers into two tiers: Preferred and Standard.</p>
        <p className="leading-[1.5] mb-0 whitespace-pre-wrap">​</p>
        <ul className="leading-[1.5] list-disc">
          <li className="mb-[16px] ms-[24px]">
            <span className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold">{`Preferred providers `}</span>meet Included Health’s highest quality standards and have a lower copay.
          </li>
          <li className="ms-[24px]">
            <span className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold">Standard providers</span>
            {` are still covered, but your copay will be higher.`}
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name3 />
      <Frame38 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame20 />
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

function Name4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_187)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_187)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_187)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_187)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#8f8f8f] text-[16px]">
        <p className="leading-[1.5]">Searching for orthopedists near 94709 who are taking new patients...</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name4 />
      <Frame42 />
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

function Name5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_187)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_187)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_187)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_187)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">Here are the Preferred orthopedists closest to you, so a visit with any of them is a $30 copay.</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name5 />
      <Frame46 />
    </div>
  );
}

function Name6() {
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
      <Name6 />
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

function Frame() {
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

function Frame25() {
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
      <Frame />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 284 1" width="284">
            <line id="Line 4" stroke="#F2F2F2" x2="284" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame52 />
      <Frame25 />
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

function Name7() {
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
      <Name7 />
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

function Frame1() {
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
      <Frame1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 284 1" width="284">
            <line id="Line 4" stroke="#F2F2F2" x2="284" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame53 />
      <Frame26 />
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

function Name8() {
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
      <Name8 />
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

function Frame2() {
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
      <Frame2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 284 1" width="284">
            <line id="Line 4" stroke="#F2F2F2" x2="284" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame54 />
      <Frame27 />
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

function Frame29() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full">
      <DotResult />
      <DotResult1 />
      <DotResult2 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[8px] relative shrink-0 w-[34px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 34 8" width="34">
        <g id="Frame 427322270">
          <circle cx="4" cy="4" fill="url(#paint0_linear_0_183)" id="Ellipse 2305" r="4" />
          <circle cx="17" cy="4" fill="#D9D9D9" id="Ellipse 2306" r="4" />
          <circle cx="30" cy="4" fill="#D9D9D9" id="Ellipse 2307" r="4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_183" x1="0.113122" x2="7.8014" y1="5.5" y2="2.908">
            <stop stopColor="#0012E7" />
            <stop offset="1" stopColor="#6A4CDE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[343px]">
      <Frame29 />
      <Frame31 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Show me more providers</p>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Refine search criteria</p>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">These providers don’t have availability</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame45 />
      <Frame47 />
      <Frame48 />
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

function Name9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_187)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_187)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_187)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_187)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_187" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-[rgba(0,0,0,0.8)]">
        <p className="leading-[1.5]">Heads up: If you end up needing lab tests or imaging, keep in mind that freestanding imaging centers usually cost less than hospital based departments. The two settings bill differently and your plan copay reflects that difference.</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name9 />
      <Frame51 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame50 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble1 />
          </div>
        </div>
      </div>
      <Frame15 />
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble2 />
          </div>
        </div>
      </div>
      <Frame28 />
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble3 />
          </div>
        </div>
      </div>
      <Frame56 />
      <Frame19 />
      <Frame41 />
      <Frame21 />
      <Frame49 />
    </div>
  );
}

export default function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      <Frame34 />
      <Frame4 />
    </div>
  );
}