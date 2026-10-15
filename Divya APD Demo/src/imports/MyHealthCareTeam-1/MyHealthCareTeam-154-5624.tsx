import svgPaths from "./svg-5s1vvrpqmz";
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

function CareTeamInternal() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Care Team Internal">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Content />
        <ButtonStack />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch" data-name="Text">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Joseph Moreno, MD</p>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">Gastroenterology</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="relative shrink-0 size-[48px]" data-name="Avatar">
        <div className="-translate-y-1/2 absolute aspect-[96/96] left-0 right-0 top-1/2" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
        </div>
      </div>
      <Text1 />
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

function Badges1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Badges">
      <div className="bg-[#e6effe] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Chip Static">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#002380] text-[12px] text-center text-ellipsis whitespace-nowrap">Specialist</p>
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

function Button1() {
  return (
    <div className="bg-[#001048] min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Schedule appointment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001048] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">View full profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonStack1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Button stack">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Button">
        <Button1 />
      </div>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Button">
        <Button2 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Header1 />
      <Badges1 />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#3b3b3b] text-[12px] w-[min-content]">Focuses on comprehensive care for all ages, emphasizing preventive measures and holistic health strategies.</p>
      <ButtonStack1 />
    </div>
  );
}

function CareTeamExternal() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Care Team  External">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Content1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch" data-name="Text">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Erika Stephenson, NP</p>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">Registered Nurse</p>
      </div>
    </div>
  );
}

function Header2() {
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
      <Text2 />
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

function Badges2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Badges">
      <div className="bg-[#e6effe] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Chip Static">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#002380] text-[12px] text-center text-ellipsis whitespace-nowrap">Nurse Case Manager</p>
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

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Header2 />
      <Badges2 />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#3b3b3b] text-[12px] w-[min-content]">Dedicated to children’s health, providing friendly and approachable care, and ensuring a safe environment for young patients.</p>
    </div>
  );
}

function Appt2() {
  return (
    <div className="bg-[#0012e7] flex-[1_0_0] min-w-px relative rounded-[69px] self-stretch" data-name="Appt 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center leading-[0] px-[12px] py-[6px] relative size-full text-white whitespace-nowrap">
          <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[12px] text-center">
            <p className="leading-[16px]">2:00 pm</p>
          </div>
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[11px] text-right">
            <p className="leading-[16px]">Today</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Appt3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[69px] self-stretch" data-name="Appt 2">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[69px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center leading-[0] px-[12px] py-[6px] relative size-full whitespace-nowrap">
          <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0012e7] text-[12px] text-center">
            <p className="leading-[16px]">10:00 am</p>
          </div>
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b] text-[11px] text-right">
            <p className="leading-[16px]">Sat, Nov 15</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApptButtons1() {
  return (
    <div className="content-stretch flex gap-[7px] h-[44px] items-start relative shrink-0 w-[284px]" data-name="Appt buttons">
      <Appt2 />
      <Appt3 />
    </div>
  );
}

function Button3() {
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

function ButtonStack2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Button stack">
      <ApptButtons1 />
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Button">
        <Button3 />
      </div>
    </div>
  );
}

function CareTeamInternal1() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Care Team Internal">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Content2 />
        <ButtonStack2 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-0 overflow-x-clip overflow-y-auto pt-[16px] px-[16px] top-[159px] w-[375px]" data-name="Body">
      <CareTeamInternal />
      <CareTeamExternal />
      <CareTeamInternal1 />
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

function LeftAction() {
  return <div className="content-stretch flex items-center min-w-[48px] overflow-clip shrink-0 size-[48px]" data-name="Left action" />;
}

function RightActions() {
  return <div className="content-stretch flex gap-[24px] items-center justify-end min-w-[48px] overflow-clip shrink-0 size-[48px]" data-name="Right actions" />;
}

function Container() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-between overflow-clip px-[12px]" data-name="Container">
      <LeftAction />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 top-1/2 w-[229px]" data-name="Title">
        <p className="flex-[1_0_0] font-['Figtree:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[16px] text-black text-center">My Health</p>
      </div>
      <RightActions />
    </div>
  );
}

function IOsNavigation() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="iOS + Navigation">
      <div className="bg-white h-[47px] overflow-clip relative shrink-0 w-[375px]" data-name="iOS/Status Bar">
        <Clock />
        <IndicatorsGroup />
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-[375px]" data-name="Secondary Navigation">
        <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
        <Container />
      </div>
    </div>
  );
}

function HighlightContainer() {
  return <div className="h-[2px] shrink-0 w-[36px]" data-name="Highlight-container" />;
}

function IconBadgeStack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
        <div className="absolute inset-[0_0_-0.01%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.003">
            <path clipRule="evenodd" d={svgPaths.p3f978980} fill="var(--fill-0, #3B3B3B)" fillRule="evenodd" id="Vector" />
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
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3b3b3b] text-[11px] text-center w-[min-content]">
        <p className="leading-[16px]">Today</p>
      </div>
    </div>
  );
}

function HighlightContainer1() {
  return (
    <div className="h-[2px] relative shrink-0 w-[36px]" data-name="Highlight-container">
      <div className="-translate-x-1/2 absolute bg-black bottom-0 h-[2px] left-1/2 opacity-99 w-[36px]" data-name="Vector-highlight" />
    </div>
  );
}

function IconBadgeStack1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon">
        <div className="absolute inset-[8.23%_0.57%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.727 20.0487">
            <path d={svgPaths.p6ca400} fill="var(--fill-0, black)" id="Vector" />
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
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[11px] text-black text-center w-[min-content]">
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
              <path d={svgPaths.p392fd480} fill="black" />
              <path d={svgPaths.p5790980} fill="black" />
              <path d={svgPaths.p171a6200} fill="black" />
              <path clipRule="evenodd" d={svgPaths.pe5abe00} fill="black" fillRule="evenodd" />
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

function TabItemsContainer() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 px-[4px] right-0 top-0" data-name="TabItems-container">
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
  );
}

function ForegroundContainer() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Foreground-container">
      <TabItemsContainer />
    </div>
  );
}

export default function MyHealthCareTeam() {
  return (
    <div className="bg-white relative size-full" data-name="My Health / Care Team">
      <Body />
      <div className="absolute content-stretch flex h-[48px] items-start left-0 top-[111px] w-[375px]" data-name="Tabs">
        <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 1">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] whitespace-nowrap">Activity</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 2">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] whitespace-nowrap">Medicine</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 3">
          <div aria-hidden="true" className="absolute border-[#0012e7] border-b-4 border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0012e7] text-[12px] whitespace-nowrap">Care Team</p>
            </div>
          </div>
        </div>
      </div>
      <IOsNavigation />
      <div className="absolute bg-white bottom-0 h-[100px] left-0 overflow-clip w-[375px]" data-name="Navigation">
        <div className="absolute bg-[#e1e1e1] h-px left-0 right-0 top-0" data-name="Vector-border" />
        <ForegroundContainer />
      </div>
    </div>
  );
}