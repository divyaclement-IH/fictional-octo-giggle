import svgPaths from "./svg-8mx2iug7n3";

function Icon() {
  return (
    <div className="bg-[#0012e7] overflow-clip relative rounded-[16px] shrink-0 size-[64px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[42px] left-1/2 overflow-clip top-1/2 w-[40px]" data-name="Included Health Logo/IH white/False">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.462 24.9375">
          <g id="Mark">
            <path d={svgPaths.p3d240270} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a317000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f31770} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2ad75400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3792b580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1dd5db80} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function AppIcon() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative rounded-[5.047px] size-full" data-name="App Icon">
      <Icon />
    </div>
  );
}