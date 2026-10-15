import svgPaths from "./svg-zy66sawtlp";
import imgPreviewCard from "./8d01da423e62e216e7202fdfd094f8c2a37f13d3.png";

export default function PreviewCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] size-full" data-name="Preview Card">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
          <div className="relative shrink-0 size-[48px]" data-name="Avatar">
            <div className="-translate-y-1/2 absolute aspect-[96/96] left-0 right-0 top-1/2" data-name="image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPreviewCard} />
            </div>
            <div className="absolute left-[32px] size-[16px] top-[32px]" data-name="Badge/Status">
              <div className="absolute inset-[-2.1%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0256 16.6718">
                  <path d={svgPaths.pefc7130} fill="var(--fill-0, #0012E7)" id="Star 20" stroke="var(--stroke-0, white)" strokeWidth="0.727273" />
                </svg>
              </div>
              <div className="-translate-y-1/2 absolute aspect-[28.000289916992188/29.866695404052734] left-[31.25%] right-[31.25%] top-[calc(50%+0.25px)]" data-name="Logo">
                <div className="absolute inset-[71.59%_0_0_69.7%]" data-name="Bottom right circle">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816">
                    <path d={svgPaths.p4a0f800} fill="var(--fill-0, white)" id="Bottom right circle" />
                  </svg>
                </div>
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.39993">
                  <g id="Center shapes">
                    <path d={svgPaths.p24c24bf0} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p10931800} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p30d5de00} fill="var(--fill-0, white)" />
                  </g>
                </svg>
                <div className="absolute inset-[0_69.7%_71.59%_0]" data-name="Top left circle">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816">
                    <path d={svgPaths.p12e17e00} fill="var(--fill-0, white)" id="Top left circle" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch" data-name="Text">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Dr. Julianna Smith, MD</p>
            <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
              <p className="leading-[20px]">Internal Medicine</p>
            </div>
          </div>
          <div className="content-stretch flex items-center py-[12px] relative shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="bookmark">
              <div className="absolute inset-[5.94%_18.32%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2053 21.1484">
                  <path d={svgPaths.p23eb0cf0} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] w-full">Has strong back and spine expertise, prioritizes safe and non-invasive care, and stays engaged in your long-term recovery, referring to trusted specialists.</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 1">
              <line id="Divider" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" x1="0.5" x2="283.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Location info">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Clinic">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="Address">
              <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black w-full">Golden State Research Institute</p>
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] w-full">123 State St, San Francisco, CA 95118</p>
            </div>
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#00835d] text-[14px] text-right whitespace-nowrap">17 mi</p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[124px]" data-name="Provider offerings">
            <div className="bg-[#eafaf1] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Chip Static">
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.p1ab53880} fill="var(--fill-0, #00835D)" id="Vector" />
                </svg>
              </div>
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">In network</p>
            </div>
            <div className="bg-[#eafaf1] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Chip Static">
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
                <div className="absolute inset-[22.76%_0]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.53812">
                    <g id="Vector">
                      <path d={svgPaths.p3db2e000} fill="#00835D" />
                      <path d={svgPaths.p3c52ce00} fill="#00835D" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">Offers telehealth</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Button stack">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Button">
          <div className="bg-[#001048] min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
                <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                  <p className="leading-[20px]">Schedule appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Button">
          <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
            <div aria-hidden="true" className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
                <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001048] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[20px]">View full profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}