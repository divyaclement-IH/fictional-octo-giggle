import svgPaths from "./svg-987gwkwb09";

export default function StatusBar() {
  return (
    <div className="relative size-full" data-name="Status bar">
      <div className="-translate-y-1/2 absolute content-stretch flex h-[24px] items-center justify-between left-0 px-[10px] py-[12px] right-0 top-[calc(50%-0.13px)]" data-name="status bars/iPhone X/status bar/light">
        <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Time and location">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.24px] whitespace-nowrap">12:22</p>
          <div className="relative shrink-0 size-[14px]" data-name="icons/system/status bar/location">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <g id="icons/system/status bar/location">
                <path clipRule="evenodd" d={svgPaths.paed0100} fill="var(--fill-0, black)" fillRule="evenodd" id="Location" />
              </g>
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Status icons">
          <div className="h-[14px] relative shrink-0 w-[21px]" data-name="icons/system/status bar/signal">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 14">
              <g id="icons/system/status bar/signal">
                <path clipRule="evenodd" d={svgPaths.p342c3400} fill="var(--fill-0, black)" fillRule="evenodd" id="Empty Bar" opacity="0.25" />
                <path d={svgPaths.p210eef80} fill="var(--fill-0, black)" id="Full Bars" />
              </g>
            </svg>
          </div>
          <div className="h-[14px] relative shrink-0 w-[15px]" data-name="icons/system/status bar/wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
              <g id="icons/system/status bar/wifi">
                <path d={svgPaths.p1325ffc0} fill="var(--fill-0, black)" id="WiâFi" />
              </g>
            </svg>
          </div>
          <div className="h-[14px] relative shrink-0 w-[32px]" data-name="icons/system/status bar/battery">
            <div className="absolute inset-[10.71%_7.81%_7.14%_9.38%]" data-name="Group">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5 11.5">
                <g id="Group">
                  <path clipRule="evenodd" d={svgPaths.p39339f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Body" opacity="0.35" />
                  <path clipRule="evenodd" d={svgPaths.p2d520fc0} fill="var(--fill-0, black)" fillRule="evenodd" id="Terminal" opacity="0.4" />
                  <path clipRule="evenodd" d={svgPaths.p114f1780} fill="var(--fill-0, black)" fillRule="evenodd" id="Reserve" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}