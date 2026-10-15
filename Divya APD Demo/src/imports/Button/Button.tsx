import svgPaths from "./svg-i4nfbzcn9k";

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[68px] relative rounded-[24px] shrink-0" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Leading icon">
        <div className="absolute inset-[5.86%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0006 14.1242">
            <path clipRule="evenodd" d={svgPaths.p1ee3e080} fill="var(--fill-0, #0012E7)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0012e7] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">everything</p>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Button">
      <Button1 />
    </div>
  );
}