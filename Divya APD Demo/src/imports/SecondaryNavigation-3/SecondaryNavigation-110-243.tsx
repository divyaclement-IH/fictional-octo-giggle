import svgPaths from "./svg-o5t5i8ckzk";

function LeftAction() {
  return (
    <div className="content-stretch flex h-[48px] items-center min-w-[48px] overflow-clip relative shrink-0" data-name="Left action">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Left action">
        <div className="overflow-clip relative shrink-0 size-[22px]" data-name="arrow-left">
          <div className="absolute inset-[0_29.17%_0_15.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1 22">
              <path d={svgPaths.p1deb8200} fill="var(--fill-0, #0012E7)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightActions() {
  return (
    <div className="content-stretch flex gap-[24px] h-[48px] items-center justify-end min-w-[48px] overflow-clip relative shrink-0" data-name="Right actions">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Right action 2">
        <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Style=Bold">
          <div className="absolute inset-[0_0.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.78 22">
              <g id="Vector">
                <path d={svgPaths.p287d9840} fill="#0012E7" />
                <path d={svgPaths.p118fda00} fill="#0012E7" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex inset-[0_0_-1px_0] items-center justify-between overflow-clip px-[12px]" data-name="Container">
      <LeftAction />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 text-black text-center top-1/2 w-[229px]" data-name="Title">
        <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] w-full">Messaging</p>
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] w-full">Subtitle or recipient</p>
      </div>
      <RightActions />
    </div>
  );
}

export default function SecondaryNavigation() {
  return (
    <div className="bg-white border-[#e1e1e1] border-b border-solid relative size-full" data-name="Secondary Navigation">
      <Container />
    </div>
  );
}