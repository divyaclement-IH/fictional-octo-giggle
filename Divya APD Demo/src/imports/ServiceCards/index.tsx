import svgPaths from "./svg-6g97jc679x";
type ServiceCardTypeProps = {
  className?: string;
  category?: "Service";
  type?: "Therapy" | "ProviderMatch";
};

function ServiceCardType({ className, category = "Service", type = "Therapy" }: ServiceCardTypeProps) {
  const isProviderMatchAndService = type === "ProviderMatch" && category === "Service";
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="bg-white relative rounded-[24px] shrink-0 w-[300px]" data-name="Service Card">
          <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Image, Chip">
                <div className="bg-[#e6effe] max-h-[40px] max-w-[40px] min-h-[40px] min-w-[40px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon container">
                  <div className="flex flex-row items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Regular">
                        <div className={`absolute ${isProviderMatchAndService ? "inset-[0.43%_1.21%_0.43%_1.27%]" : "inset-[0.11%_3.75%_0.11%_3.74%]"}`} data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height={isProviderMatchAndService ? "19.8278" : "19.9548"} preserveAspectRatio="none" viewBox={isProviderMatchAndService ? "0 0 19.5041 19.8278" : "0 0 18.5016 19.9548"} width={isProviderMatchAndService ? "19.5041" : "18.5016"}>
                            <path d={isProviderMatchAndService ? svgPaths.p28ad1f80 : svgPaths.p3f0a500} fill="#0012E7" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center justify-end min-w-px relative" data-name="Recommended" />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Copy">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title, SLA">
                  <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">{isProviderMatchAndService ? "In-person visit" : "Virtual therapy visit"}</p>
                  <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="Time and Price">
                    <div className="content-stretch flex gap-[4px] items-center leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Descriptor">
                      <p className="font-['Figtree:Medium',sans-serif] font-medium relative shrink-0 text-[#6d6d6d]">{isProviderMatchAndService ? "Various availability and costs" : "Appointments:"}</p>
                      <p className="font-['Figtree:Bold',sans-serif] font-bold relative shrink-0 text-[#008200]">time</p>
                    </div>
                    <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium items-center relative shrink-0" data-name="Price">
                      <p className="leading-[0] relative shrink-0 text-[#3b3b3b] text-[0px] w-[10px]">
                        <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[20px] text-[#008200] text-[14px]">{` `}</span>
                        <span className="leading-[20px] text-[#6d6d6d] text-[14px]">{`· `}</span>
                      </p>
                      <p className="leading-[20px] relative shrink-0 text-[#6d6d6d] text-[14px] whitespace-nowrap">Price</p>
                    </div>
                  </div>
                </div>
                <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">{isProviderMatchAndService ? "Find providers near you that are in-network, high quality, and relevant to you" : "An appointment with a licensed counselor to discuss mental health and wellness."}</p>
              </div>
            </div>
            <div className="min-h-[24px] relative rounded-[24px] shrink-0 w-full" data-name="Chip button">
              <div aria-hidden className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
              <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
                  <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">{isProviderMatchAndService ? "Find local providers" : "Book therapy visit"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceCards() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative size-full" data-name="service cards">
      <ServiceCardType className="relative shrink-0 w-[300px]" />
      <ServiceCardType className="relative shrink-0 w-[300px]" type="ProviderMatch" />
    </div>
  );
}