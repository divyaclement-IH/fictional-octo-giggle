function Cards() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[390px]" data-name="Cards">
      <div className="bg-white relative rounded-[24px] shrink-0 w-[109px]" data-name="Card">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
          <div className="bg-[rgba(253,32,178,0.1)] relative shrink-0 w-full" data-name="<Slot>">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fd20b2] text-[16px] text-center whitespace-nowrap">
                  <p className="leading-[24px]">Slot</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#fd20b2] border-dashed inset-0 pointer-events-none" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
      <div className="bg-white relative rounded-[24px] shrink-0 w-[109px]" data-name="Card">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
          <div className="bg-[rgba(253,32,178,0.1)] relative shrink-0 w-full" data-name="<Slot>">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fd20b2] text-[16px] text-center whitespace-nowrap">
                  <p className="leading-[24px]">Slot</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#fd20b2] border-dashed inset-0 pointer-events-none" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
      <div className="bg-white relative rounded-[24px] shrink-0 w-[109px]" data-name="Card">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
          <div className="bg-[rgba(253,32,178,0.1)] relative shrink-0 w-full" data-name="<Slot>">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fd20b2] text-[16px] text-center whitespace-nowrap">
                  <p className="leading-[24px]">Slot</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#fd20b2] border-dashed inset-0 pointer-events-none" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
      <div className="bg-white relative rounded-[24px] shrink-0 w-[109px]" data-name="Card">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
          <div className="bg-[rgba(253,32,178,0.1)] relative shrink-0 w-full" data-name="<Slot>">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fd20b2] text-[16px] text-center whitespace-nowrap">
                  <p className="leading-[24px]">Slot</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#fd20b2] border-dashed inset-0 pointer-events-none" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
    </div>
  );
}

function Dots() {
  return (
    <div className="h-[8px] relative shrink-0 w-[375px]" data-name="Dots">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 8">
        <g id="Dots">
          <rect fill="var(--fill-0, #002380)" height="8" id="Rectangle 6304" rx="4" width="20" x="158" />
          <circle cx="187" cy="4" id="Dot 2" r="3.5" stroke="var(--stroke-0, #578EE8)" />
          <circle cx="200" cy="4" id="Dot 3" r="3.5" stroke="var(--stroke-0, #578EE8)" />
          <circle cx="213" cy="4" id="Dot 4" r="3.5" stroke="var(--stroke-0, #578EE8)" />
        </g>
      </svg>
    </div>
  );
}

function Carousel1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Carousel">
      <Cards />
      <Dots />
    </div>
  );
}

export default function Carousel() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Carousel">
      <Carousel1 />
    </div>
  );
}