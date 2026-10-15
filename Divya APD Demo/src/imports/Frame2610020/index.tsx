import svgPaths from "./svg-n8jsgb14n9";

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[10px] items-center px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[#6d6d6d] text-[16px]">Describe what you need...</p>
        </div>
      </div>
    </div>
  );
}

function UiRight() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="UI right">
      <div className="relative shrink-0 size-[48px]" data-name="Chat Input - Send button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <circle cx="16" cy="16" fill="#F2F2F2" id="Background" r="16" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.2px)] size-[14.4px] top-[calc(50%+0.2px)]" data-name="send">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative size-full">
              <div className="h-[12px] relative shrink-0 w-[13.091px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 13.0909 12" width="13.0909">
                  <path d={svgPaths.p28106800} fill="#8F8F8F" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Buttons">
      <div className="bg-[#f2f2f2] max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[24px] shrink-0 w-[32px]" data-name="Icon Button">
        <div className="flex flex-row items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Regular">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <path d={svgPaths.p2d425280} fill="#0012E7" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <UiRight />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[120px] top-[8px]">
      <div className="absolute bottom-[8px] h-[5px] left-[120px] w-[135px]" data-name="Home Indicator">
        <svg className="absolute block inset-0 size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 135 5" width="135">
          <path clipRule="evenodd" d={svgPaths.p2f14f2c0} fill="#1A1A23" fillRule="evenodd" id="Home Indicator" />
        </svg>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="absolute contents left-[120px] top-[8px]" data-name="Bottom nav">
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative size-full">
      <div className="bg-white drop-shadow-[0px_0px_7.5px_rgba(0,0,0,0.12)] relative rounded-[24px] shrink-0 w-[342px]" data-name="Chat Input">
        <div className="flex flex-col items-center justify-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-end pb-[8px] pt-[16px] px-[8px] relative size-full">
            <Text />
            <Buttons />
          </div>
        </div>
      </div>
      <div className="h-[21px] relative shrink-0 w-full" data-name="BOTTOM HOME ELEMENT BLACK">
        <BottomNav />
      </div>
    </div>
  );
}