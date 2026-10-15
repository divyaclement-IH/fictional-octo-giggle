import svgPaths from "./svg-7g7j714ygv";

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[155px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Figtree:SemiBold',sans-serif] font-semibold leading-[24px] left-[77.59px] text-[#1a1a23] text-[16px] text-center top-[-1px] whitespace-nowrap">Booking in progress...</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M15 12.5L10 7.5L5 12.5" id="Vector" stroke="var(--stroke-0, #1A1A23)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f0f0f0] h-[56px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[23.914px] pr-[24px] py-[16px] relative size-full">
          <Heading />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p336708f0} id="Vector" stroke="var(--stroke-0, #E1E1E2)" strokeWidth="2" />
          <path d={svgPaths.p11014a00} id="Vector_2" stroke="var(--stroke-0, #0012E7)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute left-[24px] size-[20px] top-[30px]" data-name="Container">
      <div className="absolute flex items-center justify-center left-[-2.19px] size-[24.371px] top-[-2.19px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-75.5deg]">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[48px] left-[56px] opacity-60 top-[16px] w-[261px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#222] text-[16px] top-[-1px] w-[261px]">{`Contact specialist's office to schedule appointment`}</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function ProgressTrackerCard() {
  return (
    <div className="bg-white h-[138px] relative rounded-[24px] shrink-0 w-full" data-name="ProgressTrackerCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Button />
          <Container1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e2] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-px pt-[16px] px-[16px] relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e1e1e2] border-b border-solid inset-0 pointer-events-none" />
      <ProgressTrackerCard />
    </div>
  );
}