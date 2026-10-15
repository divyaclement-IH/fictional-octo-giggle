import svgPaths from "./svg-zfxlf0xot0";

function AskDot() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Ask Dot">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dot">
        <div className="absolute inset-[31.25%_53.6%_31.25%_8.9%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p3488a200} fill="var(--fill-0, #0012E7)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%_9.85%_31.25%_52.65%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p3488a200} fill="var(--fill-0, #0012E7)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-[46.4%] right-[28.6%] top-3/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p969ae00} fill="var(--fill-0, #002380)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-3/4 left-[27.65%] right-[47.35%] top-0" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p969ae00} fill="var(--fill-0, #578EE8)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6d6d6d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Ask Dot...</p>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Message">
      <AskDot />
      <div className="relative shrink-0 size-[34px]" data-name="Chat Input - Send button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="var(--fill-0, #F2F2F2)" id="Background" r="16" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%+0.2px)] size-[14.4px] top-[calc(50%+0.2px)]" data-name="send">
          <div className="h-[12px] relative shrink-0 w-[13.091px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0909 12">
              <path d={svgPaths.p28106800} fill="var(--fill-0, #8F8F8F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChatInput() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[24px] size-full" data-name="Chat Input">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Message />
    </div>
  );
}