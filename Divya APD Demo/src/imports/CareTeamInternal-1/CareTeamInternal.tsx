import svgPaths from "./svg-0knzo7tyhm";
import imgImage from "./8d01da423e62e216e7202fdfd094f8c2a37f13d3.png";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch" data-name="Text">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Elena Marquez, MD</p>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">Internal Medicine</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="relative shrink-0 size-[48px]" data-name="Avatar">
        <div className="-translate-y-1/2 absolute aspect-[96/96] left-0 right-0 top-1/2" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
        </div>
        <div className="absolute left-[32px] size-[16px] top-[32px]" data-name="Badge/Status">
          <div className="absolute inset-[-2.1%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0256 16.6718">
              <path d={svgPaths.pefc7130} fill="var(--fill-0, #0012E7)" id="Star 20" stroke="var(--stroke-0, white)" strokeWidth="0.727273" />
            </svg>
          </div>
          <div className="-translate-y-1/2 absolute aspect-[28.000289916992188/29.866695404052734] left-[31.25%] right-[31.25%] top-[calc(50%+0.25px)]" data-name="Logo">
            <div className="absolute inset-[71.59%_0_0_69.7%]" data-name="Bottom right circle">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816">
                <path d={svgPaths.p4a0f800} fill="var(--fill-0, white)" id="Bottom right circle" />
              </svg>
            </div>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.39993">
              <g id="Center shapes">
                <path d={svgPaths.p24c24bf0} fill="var(--fill-0, white)" />
                <path d={svgPaths.p10931800} fill="var(--fill-0, white)" />
                <path d={svgPaths.p30d5de00} fill="var(--fill-0, white)" />
              </g>
            </svg>
            <div className="absolute inset-[0_69.7%_71.59%_0]" data-name="Top left circle">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816">
                <path d={svgPaths.p12e17e00} fill="var(--fill-0, white)" id="Top left circle" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Text />
      <div className="relative shrink-0 size-[48px]" data-name="Icon Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="var(--fill-0, #F2F2F2)" id="Background" r="16" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2" data-name="dots-vertical">
          <div className="absolute inset-[0_36.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79167 14">
              <g id="Vector">
                <path d={svgPaths.p1ddf4800} fill="#0012E7" />
                <path d={svgPaths.p376bfc00} fill="#0012E7" />
                <path d={svgPaths.p656ac00} fill="#0012E7" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Badges() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Badges">
      <div className="bg-[#e6effe] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Chip Static">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#002380] text-[12px] text-center text-ellipsis whitespace-nowrap">Your PCP</p>
      </div>
      <div className="bg-[#f2f2f2] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Chip Static">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
          <div className="absolute inset-[0_2.08%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 12">
              <path d={svgPaths.p5f6dc40} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis whitespace-nowrap">Last seen: 1/8/27</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Header />
      <Badges />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#3b3b3b] text-[12px] w-[min-content]">Has strong back and spine expertise, prioritizes safe and non-invasive care, and stays engaged in your long-term recovery, referring to trusted specialists.</p>
    </div>
  );
}

function Appt() {
  return (
    <div className="bg-[#0012e7] flex-[1_0_0] min-w-px relative rounded-[69px] self-stretch" data-name="Appt 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center leading-[0] px-[12px] py-[6px] relative size-full text-white whitespace-nowrap">
          <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[12px] text-center">
            <p className="leading-[16px]">4:00 pm</p>
          </div>
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[11px] text-right">
            <p className="leading-[16px]">Today</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Appt1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[69px] self-stretch" data-name="Appt 2">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[69px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center leading-[0] px-[12px] py-[6px] relative size-full whitespace-nowrap">
          <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0012e7] text-[12px] text-center">
            <p className="leading-[16px]">12:30 pm</p>
          </div>
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b] text-[11px] text-right">
            <p className="leading-[16px]">Thu, Nov 13</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApptButtons() {
  return (
    <div className="content-stretch flex gap-[7px] h-[44px] items-start relative shrink-0 w-[284px]" data-name="Appt buttons">
      <Appt />
      <Appt1 />
    </div>
  );
}

function Button() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001048] text-[14px] text-center whitespace-nowrap">
            <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] underline">View full profile and availability</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonStack() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Button stack">
      <ApptButtons />
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Button">
        <Button />
      </div>
    </div>
  );
}

export default function CareTeamInternal() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] size-full" data-name="Care Team Internal">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Content />
      <ButtonStack />
    </div>
  );
}