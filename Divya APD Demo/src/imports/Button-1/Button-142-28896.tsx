import svgPaths from "./svg-jvcw1pq6yr";

export default function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[24px] size-full" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Leading icon">
        <div className="absolute inset-[0.79%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7477 15.746">
            <g id="Vector">
              <path d={svgPaths.p625b030} fill="#0012E7" />
              <path clipRule="evenodd" d={svgPaths.p38b8f600} fill="#0012E7" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0012e7] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Active</p>
      </div>
    </div>
  );
}