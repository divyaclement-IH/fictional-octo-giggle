import svgPaths from "./svg-bb2mo2dfvd";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch" data-name="Text">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Coverage check request</p>
    </div>
  );
}

function IconTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Icon, Title">
      <div className="relative shrink-0 size-[40px]" data-name="Icon container">
        <div className="-translate-y-1/2 absolute aspect-[40/40] left-0 right-0 top-1/2" data-name="Background">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <circle cx="20" cy="20" fill="var(--fill-0, #E6EFFE)" id="Background" r="20" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="Style=Regular">
          <div className="absolute inset-[0.04%_0.05%_0.06%_0.05%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9802 19.9811">
              <path d={svgPaths.p163a7a10} fill="var(--fill-0, #0012E7)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <IconTitle />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">Verifying In-lab sleep study coverage with a member of our care team.</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black w-[80px]">Status</p>
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Status - Review">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="synchronize-arrows">
          <div className="absolute inset-[9.41%_2.15%_9.13%_2.34%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2822 13.0338">
              <g id="Vector">
                <path d={svgPaths.p17df0e00} fill="#0012E7" />
                <path d={svgPaths.p1f09be00} fill="#0012E7" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0012e7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Finding a specialist</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#3b3b3b] text-[0px] w-full">
        <span className="leading-[16px] text-[12px]">{`Typical wait time is `}</span>
        <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] text-[12px]">less than</span>
        <span className="leading-[16px] text-[12px]">{` `}</span>
        <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] text-[12px] text-black">10 min.</span>
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001048] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Cancel request</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CTA">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[120px]" data-name="Button">
        <Button />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Header />
      <Content1 />
      <Cta />
    </div>
  );
}

export default function RequestCardAdvocacy() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative rounded-[24px] size-full" data-name="Request Card - Advocacy">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Content />
    </div>
  );
}