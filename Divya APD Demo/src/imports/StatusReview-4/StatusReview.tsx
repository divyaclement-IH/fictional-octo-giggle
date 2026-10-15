import svgPaths from "./svg-qw5mnl41ey";

export default function StatusReview() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative size-full" data-name="Status - Review">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check-circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p28f49440} fill="var(--fill-0, #00835D)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#00835d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Complete</p>
      </div>
    </div>
  );
}