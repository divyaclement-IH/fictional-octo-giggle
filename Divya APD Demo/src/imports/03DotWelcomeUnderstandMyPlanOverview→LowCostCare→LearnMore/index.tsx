import svgPaths from "./svg-xr5ee24h88";
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[32px] text-black w-full">
        <span className="leading-[40px]">{`Good news, Riley! You’re fully `}</span>
        <span className="leading-[40px] text-[#6a4cde]">covered</span>
        <span className="leading-[40px]">.</span>
      </p>
    </div>
  );
}

function Bubble() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5] mb-[16px]">Healthcare can be complex, but Included Health is here to make it simpler. I can help you find the right care, explain your benefits, and make sense of confusing bills or coverage questions.</p>
        <p className="leading-[1.5]">Tell me what you need help with today, or choose a prompt below to get started.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Bubble />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[614px] min-w-px relative" data-name="Text">
      <Frame1 />
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

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0 w-full">
      <Utterance />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame18 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 37.7254 40" width="37.7254">
            <g id="Dot">
              <path d={svgPaths.p33c6fd00} fill="url(#paint0_linear_0_194)" />
              <path d={svgPaths.p19131200} fill="url(#paint1_linear_0_194)" />
              <path d={svgPaths.pd42dd00} fill="url(#paint2_linear_0_194)" />
              <path d={svgPaths.pd346c00} fill="url(#paint3_linear_0_194)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_194" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_194" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_194" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_194" x1="0.533449" x2="37.2024" y1="27.5" y2="15.8405">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame16 />
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

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <V />
      <V1 />
      <V2 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame24 />
    </div>
  );
}

function Bubble1() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Understand my plan</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame29 />
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
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
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_202)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_202)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_202)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_202)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5] mb-[16px]">The Included Health plan combines the care you may already know from us with real, up-front savings. It gives you access to:</p>
        <ul className="list-disc mb-[16px]">
          <li className="mb-[8px] ms-[24px]">
            <span className="leading-[1.5]">$0 virtual primary, urgent, and mental health care visits</span>
          </li>
          <li className="mb-[8px] ms-[24px]">
            <span className="leading-[1.5]">Clear, fixed, predictable copays</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[1.5]">Support finding the right provider for your needs</span>
          </li>
        </ul>
        <p className="leading-[1.5]">The more you understand the Included Health Plan, the more you’ll get out of it. Feel free to ask any follow-up questions you may have, or select an option below to learn more.</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name />
      <Frame17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">High-quality, low-cost care</p>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Visit costs</p>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Surgery support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame25 />
    </div>
  );
}

function Bubble2() {
  return (
    <div className="bg-[#e6effe] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Bubble">
      <div className="flex flex-row justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-end p-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black">
            <p className="leading-[24px]">High-quality, low-cost care</p>
          </div>
        </div>
      </div>
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

function Name1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_202)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_202)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_202)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_202)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name1 />
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[0px] w-full">
        <p className="leading-[1.5] mb-[16px] text-[16px]">The providers and facilities you choose can affect what you pay.</p>
        <p className="mb-[16px] text-[16px]">
          <span className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[24px]">Providers</span>
          <span className="leading-[1.5]">
            <br aria-hidden />
            Your plan has two in-network provider tiers:
          </span>
        </p>
        <ul className="leading-[1.5] list-disc mb-[16px] text-[16px]">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold">Preferred:</span>
            {` Higher quality care with a lower copay`}
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold">Standard:</span>
            {` Covered care with a higher copay`}
          </li>
        </ul>
        <p className="mb-[16px] text-[16px]">
          <span className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[24px]">Facilities</span>
          <span className="leading-[1.5]">
            <br aria-hidden />
            Freestanding labs and imaging centers often cost less than hospital-based facilities for the same service.
          </span>
        </p>
        <p className="leading-[1.5] text-[16px]">Here are some ways I can help you find the right care at the lowest cost:</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Find preferred providers/facilities</p>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Check if a provider is in network</p>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Explain how tiering works</p>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Learn more about my plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame21 />
    </div>
  );
}

function Bubble3() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Learn more about my plan</p>
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

function Name2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Dot">
        <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18.8627 20" width="18.8627">
            <g id="Dot">
              <path d={svgPaths.p2770d280} fill="url(#paint0_linear_0_202)" />
              <path d={svgPaths.p3403c600} fill="url(#paint1_linear_0_202)" />
              <path d={svgPaths.p3a73f700} fill="url(#paint2_linear_0_202)" />
              <path d={svgPaths.p1f581600} fill="url(#paint3_linear_0_202)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
                <stop stopColor="#0012E7" />
                <stop offset="1" stopColor="#6A4CDE" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_202" x1="0.266724" x2="18.6012" y1="13.75" y2="7.92027">
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

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[32px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[16px]">
        <p className="leading-[1.5]">I can walk you through the topics below, or you can ask any followup questions you may have.</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Name2 />
      <Frame23 />
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

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Visit costs</p>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip button">
        <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Surgery support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[15px] top-[132px] w-[343px]">
      <Frame19 />
      <Frame8 />
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble2 />
          </div>
        </div>
      </div>
      <Frame20 />
      <div className="relative shrink-0 w-full" data-name="Response - Member">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[48px] relative size-full">
            <Bubble3 />
          </div>
        </div>
      </div>
      <Frame22 />
    </div>
  );
}

function LeftAction() {
  return <div className="content-stretch flex items-center min-w-[48px] overflow-clip relative shrink-0 size-[48px]" data-name="Left action" />;
}

function RightActions() {
  return (
    <div className="content-stretch flex gap-[24px] h-[48px] items-center justify-end min-w-[48px] overflow-clip relative shrink-0" data-name="Right actions">
      <div className="relative shrink-0" data-name="_Title Bar Buttons">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0012e7] text-[16px] whitespace-nowrap">close</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-between overflow-clip px-[12px]" data-name="Container">
      <LeftAction />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 w-[229px]" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[#111827] text-[16px] text-center">Welcome to Included Health</p>
          </div>
        </div>
      </div>
      <RightActions />
    </div>
  );
}

function TopDock() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[-1px]" data-name="Top dock">
      <IOsStatusBar className="bg-white h-[47px] overflow-clip relative shrink-0 w-[375px]" />
      <div className="bg-white h-[56px] relative shrink-0 w-[375px]" data-name="Secondary Navigation">
        <div aria-hidden className="absolute border-[#e1e1e2] border-b border-solid inset-0 pointer-events-none" />
        <Container />
      </div>
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

export default function Component03DotWelcomeUnderstandMyPlanOverviewLowCostCareLearnMore() {
  return (
    <div className="bg-white border border-[#e1e1e1] border-solid relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] size-full" data-name="03 Dot – Welcome + Understand my plan (overview → low-cost care → Learn more)">
      <Frame28 />
      <TopDock />
      <Frame />
    </div>
  );
}