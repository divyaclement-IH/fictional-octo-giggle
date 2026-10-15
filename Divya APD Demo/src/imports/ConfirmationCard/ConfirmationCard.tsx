import svgPaths from "./svg-otmg9aqx3a";
import imgConfirmationCard from "./8d01da423e62e216e7202fdfd094f8c2a37f13d3.png";

export default function ConfirmationCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] size-full" data-name="Confirmation Card">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Avatar, Details">
        <div className="relative shrink-0 size-[48px]" data-name="Avatar">
          <div className="-translate-y-1/2 absolute aspect-[96/96] left-0 right-0 top-1/2" data-name="image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgConfirmationCard} />
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
        <div className="content-stretch flex flex-col items-center relative shrink-0 text-black w-full whitespace-nowrap" data-name="Name, Details">
          <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center">
            <p className="leading-[24px]">Name/Title</p>
          </div>
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px]">Specialty or SLA</p>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 1">
            <line id="Divider" stroke="var(--stroke-0, #E1E1E1)" x2="365" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Date, Alerts">
        <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
          <p className="leading-[24px]">Appointment date · Time Timezone</p>
        </div>
        <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
          <p className="leading-[20px]">{`You'll be notified via text and email when it's time for your visit.`}</p>
        </div>
        <div className="bg-[#fffbf5] relative rounded-[8px] shrink-0 w-full" data-name="Optinoal callout">
          <div aria-hidden="true" className="absolute border border-[#f5dcc3] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
              <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#662600] text-[0px] w-[311px]">
                <p className="text-[12px]">
                  <span className="leading-[16px]">{`Arriving later than 5 min or missing an appointment may result in a `}</span>
                  <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px]">[</span>
                  <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px]">$00.00] fee.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 1">
            <line id="Divider" stroke="var(--stroke-0, #E1E1E1)" x2="365" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Table">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Clinic, contact info">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Clinic, address">
            <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[12px] items-start leading-[0] relative shrink-0 text-[14px] text-black w-full" data-name="Clinic">
              <div className="flex flex-col justify-center relative shrink-0 w-[86px]">
                <p className="leading-[20px]">For</p>
              </div>
              <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative">
                <p className="leading-[20px]">First Last</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Clinic, contact info">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Clinic, address">
            <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[12px] items-start leading-[0] relative shrink-0 text-[14px] text-black w-full" data-name="Clinic">
              <div className="flex flex-col justify-center relative shrink-0 w-[86px]">
                <p className="leading-[20px]">Duration</p>
              </div>
              <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative">
                <p className="leading-[20px]">[duration]</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Clinic, contact info">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Clinic, address">
            <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[12px] items-start leading-[0] relative shrink-0 text-[14px] text-black w-full" data-name="Clinic">
              <div className="flex flex-col justify-center relative shrink-0 w-[86px]">
                <p className="leading-[20px]">Est. Cost</p>
              </div>
              <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative">
                <p className="leading-[20px]">[$0]</p>
              </div>
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
                  <p className="leading-[20px]">Primary label</p>
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
                  <p className="leading-[20px]">Secondary label</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fffbf5] relative rounded-[8px] shrink-0 w-full" data-name="Callout">
        <div aria-hidden="true" className="absolute border border-[#f5dcc3] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
            <div className="flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#662600] text-[0px]">
              <p className="text-[12px]">
                <span className="leading-[16px]">{`Canceling with less than 24 hours before a visit may result in a `}</span>
                <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px]">[$00.00] fee.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}