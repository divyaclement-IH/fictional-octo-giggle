import svgPaths from "./svg-k3bzldbs3o";

function TextFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text frame">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">3 pending actions</p>
      </div>
    </div>
  );
}

export default function PendingActions() {
  return (
    <div className="bg-white relative rounded-[24px] size-full" data-name="Pending Actions">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="<Slot>">
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name=".pending actions">
            <TextFrame />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
              <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8 16">
                  <path d={svgPaths.p178c6e80} fill="var(--fill-0, #0012E7)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}