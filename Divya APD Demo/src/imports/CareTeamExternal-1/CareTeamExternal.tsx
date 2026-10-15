import svgPaths from "./svg-z8lno32gig";
import imgImage from "./8d01da423e62e216e7202fdfd094f8c2a37f13d3.png";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch" data-name="Text">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Joseph Moreno, MD</p>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
        <p className="leading-[20px]">Gastroenterology</p>
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

function Button() {
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

function Button1() {
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

function ButtonStack() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Button stack">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Button">
        <Button />
      </div>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Button">
        <Button1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Header />
      <Badges />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#3b3b3b] text-[12px] w-[min-content]">Focuses on comprehensive care for all ages, emphasizing preventive measures and holistic health strategies.</p>
      <ButtonStack />
    </div>
  );
}

export default function CareTeamExternal() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative rounded-[24px] size-full" data-name="Care Team  External">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Content />
    </div>
  );
}