import svgPaths from "./svg-uoioz7jo8q";

export default function StatusReview() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative size-full" data-name="Status - Review">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="close-circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.pdc3fb80} fill="var(--fill-0, #CB0C31)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cb0c31] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Canceled</p>
      </div>
    </div>
  );
}