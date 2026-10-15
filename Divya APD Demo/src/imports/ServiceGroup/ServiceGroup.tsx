import svgPaths from "./svg-zfiefmo8tc";
type ServiceItemProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function ServiceItem({ className, property1 = "Default" }: ServiceItemProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "bg-white relative rounded-[8px] w-[327px]"}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="<Slot>">
          <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Leading visual">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={isVariant2 ? "0 0 56 56" : "0 0 40 40"}>
              <circle cx={isVariant2 ? "28" : "20"} cy={isVariant2 ? "28" : "20"} fill={isVariant2 ? "var(--fill-0, #FAFAFA)" : "var(--fill-0, #E6EFFE)"} id="Circle" r={isVariant2 ? "28" : "20"} />
            </svg>
            {property1 === "Default" && (
              <div className="absolute inset-[28.57%] overflow-clip" data-name="Icon">
                <div className="absolute inset-[0_0.01%_0_0]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1415 17.1421">
                    <path clipRule="evenodd" d={svgPaths.p327d8780} fill="var(--fill-0, #002380)" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </div>
            )}
            {isVariant2 && (
              <div className="absolute inset-[28.57%] overflow-clip" data-name="Style=Regular">
                <div className="absolute inset-[0_0.01%_0_0]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.998 23.9989">
                    <path clipRule="evenodd" d={svgPaths.p28040a80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text frame">
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
              <p className="leading-[24px]">{isVariant2 ? "External Benefit Name" : "Service Name"}</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function ServiceGroup({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[8px] items-start relative w-[343px]"} data-name="Service Group">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Title</p>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Service item list">
        <ServiceItem className="bg-white relative rounded-[8px] shrink-0 w-full" />
        <ServiceItem className="bg-white relative rounded-[8px] shrink-0 w-full" />
        <ServiceItem className="bg-white relative rounded-[8px] shrink-0 w-full" />
        <ServiceItem className="bg-white relative rounded-[8px] shrink-0 w-full" />
      </div>
    </div>
  );
}