import svgPaths from "./svg-2wn9nfn3zy";

export default function ServiceCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] size-full" data-name="Service Card">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Image, Chip">
          <div className="relative shrink-0 size-[40px]" data-name="Icon container">
            <div className="-translate-y-1/2 absolute aspect-[40/40] left-0 right-0 top-1/2" data-name="Background">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <circle cx="20" cy="20" fill="var(--fill-0, #E6EFFE)" id="Background" r="20" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="Style=Regular">
              <div className="absolute inset-[0_0.01%_0_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9984 19.9991">
                  <path clipRule="evenodd" d={svgPaths.p51fdf0} fill="var(--fill-0, #0012E7)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Recommended">
            <div className="bg-[#e6effe] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Chip Static">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#002380] text-[12px] text-center text-ellipsis whitespace-nowrap">Recommended</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Copy">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title, SLA">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Title</p>
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#3b3b3b] text-[0px] w-full">
              <span className="leading-[20px] text-[#6d6d6d] text-[14px]">SLA</span>
              <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[20px] text-[#00835d] text-[14px]">{` `}</span>
              <span className="leading-[20px] text-[#6d6d6d] text-[14px]">{`· `}</span>
              <span className="leading-[20px] text-[#6d6d6d] text-[14px]">SLA</span>
            </p>
          </div>
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">Description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[24px] px-[16px] py-[12px] relative rounded-[24px] shrink-0 w-[319px]" data-name="Chip Interactive">
        <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">Chip interactive label</p>
      </div>
    </div>
  );
}