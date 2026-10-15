import svgPaths from "./svg-zy3o4n5d3v";

function TextFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text frame">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Service Name</p>
      </div>
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="<Slot>">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Leading visual">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #E6EFFE)" id="Circle" r="20" />
        </svg>
        <div className="absolute inset-[28.57%] overflow-clip" data-name="Icon">
          <div className="absolute inset-[0_0.01%_0_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1415 17.1421">
              <path clipRule="evenodd" d={svgPaths.p327d8780} fill="var(--fill-0, #002380)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <TextFrame />
    </div>
  );
}

export default function ServiceItem() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Service Item">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <Slot />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}