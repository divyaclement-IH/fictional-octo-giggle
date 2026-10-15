import svgPaths from "./svg-fr8qyvqltf";

export default function StatusReview() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative size-full" data-name="Status - Review">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="alert-triangle">
        <div className="absolute inset-[2.1%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.3281">
            <path d={svgPaths.pa1ca100} fill="var(--fill-0, #A55600)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a55600] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Delayed</p>
      </div>
    </div>
  );
}