import svgPaths from "./svg-39133wrbca";

function Field() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Bold">
            <div className="absolute inset-[0.88%_1.05%_1.05%_0.87%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6144 19.615">
                <path d={svgPaths.p25477580} fill="var(--fill-0, #3B3B3B)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[#6d6d6d] text-[16px]">Provider, date, visit type</p>
        </div>
      </div>
    </div>
  );
}

export default function TextField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Text Field">
      <Field />
    </div>
  );
}