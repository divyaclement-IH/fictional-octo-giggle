import svgPaths from "./svg-96qrpbz4gz";

export default function TodayIcon() {
  return (
    <div className="relative size-full" data-name="Today Icon">
      <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="calendar">
        <div className="absolute inset-[0_-0.01%_0_0.01%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p10027a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] text-[11px] text-black text-center top-[16.5px] whitespace-nowrap">
        <p className="leading-[11px]">15</p>
      </div>
    </div>
  );
}