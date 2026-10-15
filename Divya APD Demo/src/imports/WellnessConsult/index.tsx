import svgPaths from "./svg-mshmj6z54p";
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

function Frame5() {
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
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_310)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_310)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_310)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_310)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">{`Hi Riley — glad you're here. What would you like to work on?`}</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name />
      <Frame40 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame51 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Bubble() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-[303px]" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black text-right">
        <p className="leading-[24px]">{`I've been worried about my blood sugar, and the stress isn't helping. I'd like a plan I can actually stick to.`}</p>
      </div>
    </div>
  );
}

function Frame6() {
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
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_310)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_310)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_310)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_310)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">{`Thank you for sharing that. To be sure I have it right: you're watching your blood sugar, stress is making it harder, and you want a simple plan you can stick with. There's a visit designed for that — here's what it involves.`}</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name1 />
      <Frame41 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0 w-[10px]">
        <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
              <path clipRule="evenodd" d={svgPaths.p3144e000} fill="url(#paint0_linear_0_307)" fillRule="evenodd" id="Vector" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_307" x1="0.141403" x2="9.75175" y1="6.875" y2="3.635">
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
      <Frame4 />
      <div className="[word-break:break-word] bg-center bg-clip-text bg-cover bg-no-repeat flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: `url("${imgWhatAPrimaryCareVisitCosts}")` }}>
        <p className="leading-[20px]">What a primary care visit costs</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header />
    </div>
  );
}

function Frame57() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Figtree:Bold',sans-serif] font-bold gap-[4px] items-start justify-center leading-[0] relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[24px] text-black w-[53px]">
        <p className="leading-[32px]">$0</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#008200] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">no cost</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[0] min-w-px relative">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">A 30-minute visit</p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#6d6d6d] text-[12px] w-[min-content]">
        <p className="leading-[16px]">In person or by video, and you keep the plan</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
      <Frame57 />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#e1e1e1] h-full relative shrink-0 w-px" />
      </div>
      <Frame58 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function CardBase1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Card Base">
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[0px] w-full">
        <p className="text-[12px]">
          <span className="leading-[16px]">{`One thing to know up front: there's a `}</span>
          <span className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[16px]">$30 fee for a missed appointment</span>
          <span className="leading-[16px]">, so please cancel ahead of time if your plans change.</span>
        </p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame36 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame37 />
      <CardBase1 />
      <Frame32 />
    </div>
  );
}

function CardBase() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-[343px]" data-name="Card Base">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Frame34 />
      </div>
      <div aria-hidden className="absolute border-[#df7cf5] border-[1.5px] border-solid inset-[-1.5px] pointer-events-none rounded-[25.5px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame52 />
      <CardBase />
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

function Name2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_310)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_310)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_310)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_310)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[16px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5] whitespace-pre-wrap">{`Would you like me to pull up who's  available?`}</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name2 />
      <Frame42 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame53 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Bubble1() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">{`Yes, let's do it`}</p>
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

function Name3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_310)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_310)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_310)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_310)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">Great. Would you rather do this by video, or see someone in person?</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name3 />
      <Frame43 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame54 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function Bubble2() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">By video</p>
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

function Name4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_310)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_310)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_310)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_310)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">{`Providers can only see you in the state you're in at the time of the visit. Which state will that be?`}</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name4 />
      <Frame44 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame21 />
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

function Bubble3() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">California</p>
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

function Name5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_310)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_310)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_310)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_310)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">{`Providers can only see you in the state you're in at the time of the visit. Which state will that be?`}</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name5 />
      <Frame45 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame22 />
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

function Name6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_310)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_310)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_310)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_310)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame47() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#8f8f8f] text-[16px]">
        <p className="leading-[1.5]">Searching for Preferred primary care doctors near 94709 who are taking new patients...</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name6 />
      <Frame47 />
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

function Name7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_310)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_310)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_310)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_310)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame49() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">Found two who match, and both are no cost to you.</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name7 />
      <Frame49 />
    </div>
  );
}

function Name8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Name">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">Renata Alvarez, NP</p>
      </div>
    </div>
  );
}

function SpecialtyS() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Specialty(s)">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8f8f8f] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">{`Family medicine `}</p>
      </div>
    </div>
  );
}

function NameSpecialty() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name, specialty">
      <Name8 />
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#6d6d6d] text-[14px]">Works with members on blood sugar and stress, and keeps plans short enough to stick with.</p>
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
                <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#004f00] text-[12px] text-center text-ellipsis whitespace-nowrap">Licensed in California</p>
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
      <Frame28 />
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

function Name9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Name">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">Daniel Okonkwo, PA</p>
      </div>
    </div>
  );
}

function SpecialtyS1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Specialty(s)">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8f8f8f] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Internal medicine</p>
      </div>
    </div>
  );
}

function NameSpecialty1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name, specialty">
      <Name9 />
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#6d6d6d] text-[14px]">Focuses on small changes to daily routines rather than long lists of goals.</p>
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

function Frame29() {
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
                <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#004f00] text-[12px] text-center text-ellipsis whitespace-nowrap">Licensed in California</p>
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
      <Frame29 />
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

function Frame33() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full">
      <DotResult />
      <DotResult1 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[8px] relative shrink-0 w-[34px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 34 8" width="34">
        <g id="Frame 427322270">
          <circle cx="4" cy="4" fill="url(#paint0_linear_0_296)" id="Ellipse 2305" r="4" />
          <circle cx="17" cy="4" fill="#D9D9D9" id="Ellipse 2306" r="4" />
          <circle cx="30" cy="4" fill="#D9D9D9" id="Ellipse 2307" r="4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_296" x1="0.113122" x2="7.8014" y1="5.5" y2="2.908">
            <stop stopColor="#0012E7" />
            <stop offset="1" stopColor="#6A4CDE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame38 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[343px]">
      <Frame33 />
      <Frame39 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame48 />
      <Frame50 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame25 />
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

function Name10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_310)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_310)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_310)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_310)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_310" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">Tap Schedule on whichever one suits you. And for this or anything else in your healthcare, just ask me anytime.</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name10 />
      <Frame55 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame27 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[15px] top-[132px] w-[343px]">
      <Frame14 />
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble />
          </div>
        </div>
      </div>
      <Frame16 />
      <Frame31 />
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble1 />
          </div>
        </div>
      </div>
      <Frame59 />
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble2 />
          </div>
        </div>
      </div>
      <Frame19 />
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble3 />
          </div>
        </div>
      </div>
      <Frame60 />
      <Frame46 />
      <Frame24 />
      <Frame61 />
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
        <g clipPath="url(#clip0_0_301)" id="MoreVertIcon">
          <path d={svgPaths.p1946ea00} fill="#4B5563" id="Vector" />
          <path d={svgPaths.p3f6fc150} fill="#4B5563" id="Vector_2" />
          <path d={svgPaths.p39c93a80} fill="#4B5563" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_0_301">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
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
      <Button4 />
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

function Text() {
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
            <Text />
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

export default function WellnessConsult() {
  return (
    <div className="bg-white border border-black border-solid relative size-full" data-name="Wellness consult">
      <Frame3 />
      <Group1 />
      <Frame />
    </div>
  );
}