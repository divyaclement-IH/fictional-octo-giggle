import svgPaths from "./svg-qt3j119hm5";

export default function TodayIcon() {
  return (
    <div className="relative size-full" data-name="Today Icon">
      <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="calendar">
        <div className="absolute inset-[0_2.08%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
            <path d={svgPaths.p3c5f4a80} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] text-[11px] text-black text-center top-[16.5px] whitespace-nowrap">
        <p className="leading-[11px]">15</p>
      </div>
    </div>
  );
}