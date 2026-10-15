import svgPaths from "./svg-t2oj4d832y";
import imgLeadingVisual from "./48422ff0aa86d9a09767d8b59c82691fc8308e32.png";
type TabItemProps = {
  className?: string;
  activeTab?: boolean;
  badged?: boolean;
  platform?: "iPhone";
};

function TabItem({ className, activeTab = false, badged = false, platform = "iPhone" }: TabItemProps) {
  const isActiveTabAndBadgedAndIPhone = activeTab && badged && platform === "iPhone";
  const isNotActiveTabAndNotBadgedAndIPhone = !activeTab && !badged && platform === "iPhone";
  return (
    <div className={className || "relative w-[59px]"}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center relative size-full">
          <div className="h-[2px] relative shrink-0 w-[36px]" data-name="Highlight-container">
            {isActiveTabAndBadgedAndIPhone && <div className="-translate-x-1/2 absolute bg-black bottom-0 h-[2px] left-1/2 opacity-99 w-[36px]" data-name="Vector-highlight" />}
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
            <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
              <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
                <div className="absolute inset-[0_0_-0.01%_0]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="24.003" preserveAspectRatio="none" viewBox="0 0 24 24.003" width="24">
                    <path clipRule={isNotActiveTabAndNotBadgedAndIPhone ? "evenodd" : undefined} d={isActiveTabAndBadgedAndIPhone ? svgPaths.p19226700 : svgPaths.p3f978980} fill={isActiveTabAndBadgedAndIPhone ? "black" : "#3B3B3B"} fillRule={isNotActiveTabAndNotBadgedAndIPhone ? "evenodd" : undefined} id="Vector" />
                  </svg>
                </div>
              </div>
              {isActiveTabAndBadgedAndIPhone && (
                <div className="-translate-x-1/2 absolute bottom-[17px] flex items-center justify-center left-[calc(50%+8px)] size-[6px]">
                  <div className="-scale-y-100 flex-none rotate-180">
                    <div className="relative size-[6px]" data-name="Vector-badge">
                      <div className="absolute inset-[-33.33%]">
                        <svg className="block size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                          <path d={svgPaths.pc7f0500} fill="#CB0C31" id="Vector-badge" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={`[word-break:break-word] flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[11px] text-center w-[min-content] ${isActiveTabAndBadgedAndIPhone ? 'font-["Figtree:SemiBold",sans-serif] font-semibold text-black' : 'font-["Figtree:Medium",sans-serif] font-medium text-[#3b3b3b]'}`}>
              <p className="leading-[16px]">Home</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type DotIndicatorsProps = {
  className?: string;
  selected?: "1";
  type?: "Continuous";
};

function DotIndicators({ className, selected = "1", type = "Continuous" }: DotIndicatorsProps) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-[#3b3b3b] h-full relative rounded-[40px] shrink-0 w-[20px]" />
          </div>
          <div className="relative shrink-0 size-[8px]" data-name="Dot 2">
            <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
              <circle cx="4" cy="4" fill="#C6C6C6" id="Dot 2" r="4" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[8px]" data-name="Dot 3">
            <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
              <circle cx="4" cy="4" fill="#C6C6C6" id="Dot 2" r="4" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[8px]" data-name="Dot 4">
            <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
              <circle cx="4" cy="4" fill="#C6C6C6" id="Dot 2" r="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type ActioncenterVProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3" | "Variant4";
};

function ActioncenterV({ className, property1 = "Default" }: ActioncenterVProps) {
  const isVariant2 = property1 === "Variant2";
  const isVariant3 = property1 === "Variant3";
  const isVariant4 = property1 === "Variant4";
  return (
    <div className={className || "h-[136px] relative w-[320px]"}>
      {["Variant2", "Variant3", "Variant4"].includes(property1) && (
        <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.08)] flex flex-col h-[136px] items-start left-0 right-0 rounded-[24px] top-0" data-name="General card component 2.5">
          <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <div className="flex-[1_0_0] min-h-px relative w-full">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-between p-[16px] relative size-full">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text frame">
                    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[16px] text-black">
                        <p className="leading-[24px]">{isVariant4 ? "Schedule your colonoscopy" : isVariant3 ? "Pay your $10 bill" : isVariant2 ? "Update your coverage on file" : ""}</p>
                      </div>
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
                      <p className="leading-[20px]">{isVariant4 ? "Let’s get started by finding a doctor" : isVariant3 ? "For your visit on Aug 25, 2025" : isVariant2 ? "For accurate benefits and pricing" : ""}</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[32px]">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2">
                      <div className="absolute left-0 overflow-clip size-[18px] top-0" data-name="arrow-right">
                        <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 9.9 18" width="9.9">
                            <path d={svgPaths.p39931290} fill="#0012E7" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Upper">
                  <div className="relative shrink-0 w-[240px]" data-name="Tag Group">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-center flex flex-wrap gap-[4px] items-center relative size-full">
                        {["Variant3", "Variant4"].includes(property1) && (
                          <div className={`min-h-[24px] relative rounded-[8px] shrink-0 ${isVariant4 ? "bg-[#f2f2f2]" : "bg-[#fcf4e6]"}`} data-name="Tag 2">
                            <div className="flex flex-row items-center min-h-[inherit] size-full">
                              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                                {isVariant3 && (
                                  <>
                                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Style=Bold">
                                      <div className="absolute inset-[0_2.08%]" data-name="Vector">
                                        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 11.5 12" width="11.5">
                                          <path d={svgPaths.p5f6dc40} fill="#662600" id="Vector" />
                                        </svg>
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#662600] text-[12px] text-center text-ellipsis whitespace-nowrap">Due in 2 days</p>
                                  </>
                                )}
                                {isVariant4 && (
                                  <>
                                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
                                      <div className="absolute inset-[0_2.08%]" data-name="Vector">
                                        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 11.5 12" width="11.5">
                                          <path d={svgPaths.p5f6dc40} fill="black" id="Vector" />
                                        </svg>
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis whitespace-nowrap">Referred 4 days ago</p>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                        {isVariant2 && (
                          <>
                            <div className="bg-[#fdf2f1] min-h-[24px] relative rounded-[8px] shrink-0" data-name="Tag">
                              <div className="flex flex-row items-center min-h-[inherit] size-full">
                                <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                                  <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Style=Bold">
                                    <div className="absolute inset-[0_2.08%]" data-name="Vector">
                                      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 11.5 12" width="11.5">
                                        <path d={svgPaths.p5f6dc40} fill="#7F0009" id="Vector" />
                                      </svg>
                                    </div>
                                  </div>
                                  <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#7f0009] text-[12px] text-center text-ellipsis whitespace-nowrap">Overdue</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-[#f2f2f2] min-h-[24px] relative rounded-[8px] shrink-0" data-name="Tag 2">
                              <div className="flex flex-row items-center min-h-[inherit] size-full">
                                <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                                  <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
                                    <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                                      <g id="Vector">
                                        <path d={svgPaths.p31bd0e00} fill="black" />
                                        <path clipRule="evenodd" d={svgPaths.p38a52900} fill="black" fillRule="evenodd" />
                                      </g>
                                    </svg>
                                  </div>
                                  <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis whitespace-nowrap">Takes 5 min</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative rounded-[80px] shrink-0 size-[32px]">
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="dots-horizontal">
                      <div className="absolute inset-[36.46%_0]" data-name="Vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="3.25" preserveAspectRatio="none" viewBox="0 0 12 3.25" width="12">
                          <g id="Vector">
                            <path d={svgPaths.p26278180} fill="#0012E7" />
                            <path d={svgPaths.p186c9d00} fill="#0012E7" />
                            <path d={svgPaths.p18b06780} fill="#0012E7" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {property1 === "Default" && (
        <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.08)] flex flex-col h-[136px] items-start left-0 right-0 rounded-[24px] top-0" data-name="Upcoming visit (scheduled) 2.5">
          <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="overflow-clip relative shrink-0 size-[56px]" data-name="Leading visual">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgLeadingVisual} width="56" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text frame">
                    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[16px] text-black">
                        <p className="leading-[24px]">Video visit for Riley</p>
                      </div>
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
                      <p className="leading-[20px]">Dr. Jane Smith, MD</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[32px]">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2">
                      <div className="absolute left-0 overflow-clip size-[18px] top-0" data-name="arrow-right">
                        <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 9.9 18" width="9.9">
                            <path d={svgPaths.p39931290} fill="#0012E7" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Upper">
                <div className="relative shrink-0 w-[240px]" data-name="Tag Group">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-center flex flex-wrap gap-[4px] items-center relative size-full">
                      <div className="bg-[#00835d] min-h-[24px] relative rounded-[8px] shrink-0" data-name="Tag">
                        <div className="flex flex-row items-center min-h-[inherit] size-full">
                          <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white whitespace-nowrap">New</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f2f2f2] min-h-[24px] relative rounded-[8px] shrink-0" data-name="Tag 2">
                        <div className="flex flex-row items-center min-h-[inherit] size-full">
                          <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
                              <div className="absolute inset-[0_2.08%]" data-name="Vector">
                                <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 11.5 12" width="11.5">
                                  <path d={svgPaths.p5f6dc40} fill="black" id="Vector" />
                                </svg>
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis whitespace-nowrap">Mon Oct 20, 8:30 AM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[4px] relative rounded-[80px] shrink-0 size-[32px]">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="calendar-add">
                    <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                      <g id="Vector">
                        <path clipRule="evenodd" d={svgPaths.pa86af80} fill="#0012E7" fillRule="evenodd" />
                        <path d={svgPaths.p295ef500} fill="#0012E7" />
                        <path clipRule="evenodd" d={svgPaths.p225da200} fill="#0012E7" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
type ChatInputSendButtonProps = {
  className?: string;
  state?: "default";
  type?: "disabled";
};

function ChatInputSendButton({ className, state = "default", type = "disabled" }: ChatInputSendButtonProps) {
  return (
    <div className={className || "relative size-[48px]"}>
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
  );
}
type DotProps = {
  className?: string;
  property1?: "Default";
};

function Dot({ className, property1 = "Default" }: DotProps) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"}>
      <div className="-translate-x-1/2 absolute aspect-[22.63525390625/24] bottom-0 left-1/2 top-0" data-name="Dot">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 22.6353 24" width="22.6353">
          <g id="Dot">
            <path d={svgPaths.p19854a00} fill="url(#paint0_linear_0_921)" />
            <path d={svgPaths.p1dd35780} fill="url(#paint1_linear_0_921)" />
            <path d={svgPaths.p1d86dd00} fill="url(#paint2_linear_0_921)" />
            <path d={svgPaths.pf0dad40} fill="url(#paint3_linear_0_921)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_921" x1="0.320069" x2="22.3214" y1="16.5" y2="9.50432">
              <stop stopColor="#0012E7" />
              <stop offset="1" stopColor="#6A4CDE" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_921" x1="0.320069" x2="22.3214" y1="16.5" y2="9.50432">
              <stop stopColor="#0012E7" />
              <stop offset="1" stopColor="#6A4CDE" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_921" x1="0.320069" x2="22.3214" y1="16.5" y2="9.50432">
              <stop stopColor="#0012E7" />
              <stop offset="1" stopColor="#6A4CDE" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_921" x1="0.320069" x2="22.3214" y1="16.5" y2="9.50432">
              <stop stopColor="#0012E7" />
              <stop offset="1" stopColor="#6A4CDE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
type StatusBarProps = {
  className?: string;
  mode?: "Light";
  os?: "iOS";
};

function StatusBar({ className, mode = "Light", os = "iOS" }: StatusBarProps) {
  return (
    <div className={className || "h-[24px] relative w-[375px]"}>
      <div className="-translate-y-1/2 absolute content-stretch flex h-[24px] items-center justify-between left-0 px-[10px] py-[12px] right-0 top-[calc(50%-0.13px)]" data-name="status bars/iPhone X/status bar/light">
        <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Time and location">
          <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.24px] whitespace-nowrap">12:22</p>
          <div className="relative shrink-0 size-[14px]" data-name="icons/system/status bar/location">
            <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
              <g id="icons/system/status bar/location">
                <path clipRule="evenodd" d={svgPaths.paed0100} fill="black" fillRule="evenodd" id="Location" />
              </g>
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Status icons">
          <div className="h-[14px] relative shrink-0 w-[21px]" data-name="icons/system/status bar/signal">
            <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 21 14" width="21">
              <g id="icons/system/status bar/signal">
                <path clipRule="evenodd" d={svgPaths.p342c3400} fill="black" fillRule="evenodd" id="Empty Bar" opacity="0.25" />
                <path d={svgPaths.p210eef80} fill="black" id="Full Bars" />
              </g>
            </svg>
          </div>
          <div className="h-[14px] relative shrink-0 w-[15px]" data-name="icons/system/status bar/wifi">
            <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 15 14" width="15">
              <g id="icons/system/status bar/wifi">
                <path d={svgPaths.p1325ffc0} fill="black" id="WiâFi" />
              </g>
            </svg>
          </div>
          <div className="h-[14px] relative shrink-0 w-[32px]" data-name="icons/system/status bar/battery">
            <div className="absolute inset-[10.71%_7.81%_7.14%_9.38%]" data-name="Group">
              <svg className="absolute block inset-0 size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 26.5 11.5" width="26.5">
                <g id="Group">
                  <path clipRule="evenodd" d={svgPaths.p39339f00} fill="black" fillRule="evenodd" id="Body" opacity="0.35" />
                  <path clipRule="evenodd" d={svgPaths.p2d520fc0} fill="black" fillRule="evenodd" id="Terminal" opacity="0.4" />
                  <path clipRule="evenodd" d={svgPaths.p114f1780} fill="black" fillRule="evenodd" id="Reserve" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GraphicBg() {
  return (
    <div className="-translate-x-1/2 absolute h-[421px] left-1/2 top-[40px] w-[377px]" data-name="graphic bg">
      <svg className="absolute block inset-0 size-full" fill="none" height="421" preserveAspectRatio="none" viewBox="0 0 377 421" width="377">
        <g clipPath="url(#clip0_0_934)" id="graphic bg">
          <path d={svgPaths.p203f3900} fill="url(#paint0_linear_0_934)" id="Ellipse 2304" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_934" x1="163" x2="163" y1="-118" y2="366">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#E2ECFF" />
          </linearGradient>
          <clipPath id="clip0_0_934">
            <rect fill="white" height="421" width="377" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[26px] relative shrink-0 w-[24.462px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 24.4616 26" width="24.4616">
        <g id="Group">
          <path d={svgPaths.p20d08600} fill="#0012E7" id="Vector" />
          <path d={svgPaths.p43d1f00} fill="#0012E7" id="Vector_2" />
          <path d={svgPaths.p1802c00} fill="#0012E7" id="Vector_3" />
          <path d={svgPaths.p2307bb00} fill="#0012E7" id="Vector_4" />
          <path d={svgPaths.p16581a80} fill="#0012E7" id="Vector_5" />
          <path d={svgPaths.pbbdcd00} fill="#0012E7" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="max-h-[93.746826171875px] max-w-[88.19999694824219px] relative shrink-0" data-name="Logo">
            <div className="flex flex-row items-center max-h-[inherit] max-w-[inherit] size-full">
              <div className="content-stretch flex items-center max-h-[inherit] max-w-[inherit] relative size-full">
                <Group />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container />
    </div>
  );
}

function TopNavigation() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top navigation">
      <StatusBar className="h-[24px] relative shrink-0 w-full" />
      <Frame />
    </div>
  );
}

function CoveredLine() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[100px] shrink-0" data-name="Covered line">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Covered by Google</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check-badge">
        <div className="absolute inset-[2.16%_1.83%_2.03%_2.08%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.3297" preserveAspectRatio="none" viewBox="0 0 15.3758 15.3297" width="15.3758">
            <path d={svgPaths.p29cb3080} fill="#008200" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-black w-[345px]">What’s on your mind, Riley?</p>
      <CoveredLine />
    </div>
  );
}

function HomeWelcomeMessage() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="home welcome message">
      <Frame14 />
    </div>
  );
}

function HomeWelcomeLockUp() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Home welcome lock-up">
      <div className="relative shrink-0 w-[375px]" data-name="Top Nav - Native">
        <div className="content-stretch flex flex-col items-start pt-px relative size-full">
          <TopNavigation />
        </div>
      </div>
      <HomeWelcomeMessage />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[202.5px]">
      <Dot className="overflow-clip relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6d6d6d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Ask Dot about care, benefits, costs...</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Button() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border border-[#002380] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#002380] text-[0px] text-center whitespace-nowrap">
            <p className="text-[14px]">
              <span className="leading-[20px]">{`For: `}</span>
              <span className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[20px]">You</span>
            </p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="Trailing Icon">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[12px] top-1/2" data-name="arrow-down">
              <div className="absolute inset-[29.17%_0_15.83%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="6.6" preserveAspectRatio="none" viewBox="0 0 12 6.6" width="12">
                  <path d={svgPaths.p1fa8f200} fill="#002380" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Button />
          </div>
        </div>
      </div>
      <ChatInputSendButton className="relative shrink-0 size-[34px]" />
    </div>
  );
}

function Message() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_5px_rgba(0,0,0,0.16)] flex flex-col gap-[16px] items-center p-[16px] relative rounded-[24px] shrink-0 w-full" data-name="Message">
      <Frame12 />
      <Frame11 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Message />
    </div>
  );
}

function Prompts() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="prompts">
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
        <div aria-hidden className="absolute border border-[#6a4cde] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#002380] text-[14px] text-center text-ellipsis whitespace-nowrap">Ask about coverage</p>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
        <div aria-hidden className="absolute border border-[#6a4cde] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#002380] text-[14px] text-center text-ellipsis whitespace-nowrap">Find a doctor</p>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[24px] relative rounded-[24px] shrink-0" data-name="Chip Interactive">
        <div aria-hidden className="absolute border border-[#6a4cde] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#002380] text-[14px] text-center text-ellipsis whitespace-nowrap">Feeling sick</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Why</p>
      </div>
      <div className="relative shrink-0" data-name="Text Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0012e7] text-[14px] underline whitespace-nowrap">trust Dot</p>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">with your healthcare?</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <div className="relative shrink-0" data-name="Quick Reply">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <Prompts />
        </div>
      </div>
      <Frame18 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function DotOnHome() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-[375px]" data-name="Dot on home">
      <div className="relative shrink-0 w-[343px]" data-name=".Learn More">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame16 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#0012e7] relative rounded-[999px] shrink-0 size-[20px]" data-name="Badge Notification">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] left-1/2 text-[12px] text-center text-white top-1/2 whitespace-nowrap">
          <p className="leading-[16px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
        <div className="absolute inset-[0_15.83%_0_29.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 8.8 16" width="8.8">
            <path d={svgPaths.p178c6e80} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PageButtons() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-full" data-name="Page buttons">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Bold',sans-serif] font-bold h-[25px] leading-[32px] min-w-px relative text-[#001048] text-[20px]">Your actions</p>
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Gallery() {
  return (
    <div className="content-stretch flex gap-[8px] h-[136px] items-start relative shrink-0" data-name="Gallery">
      <ActioncenterV className="h-[180px] relative shrink-0 w-[327px]" />
      <ActioncenterV className="h-[180px] relative shrink-0 w-[327px]" property1="Variant2" />
      <ActioncenterV className="h-[180px] relative shrink-0 w-[327px]" property1="Variant3" />
      <ActioncenterV className="h-[180px] relative shrink-0 w-[327px]" property1="Variant4" />
    </div>
  );
}

function GalleryPadding() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Gallery padding">
      <PageButtons />
      <Gallery />
    </div>
  );
}

function Carousel() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Carousel">
      <GalleryPadding />
      <DotIndicators className="relative shrink-0" />
    </div>
  );
}

function ActionCenter() {
  return (
    <div className="content-stretch flex flex-col h-[201px] items-start relative shrink-0 w-full" data-name="Action center">
      <Carousel />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[32px] relative shrink-0 w-[343px]" data-name="Header">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[20px] text-black top-[16px] whitespace-nowrap">
        <p className="leading-[32px]">Get care</p>
      </div>
    </div>
  );
}

function IconAndAvatar() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[48px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="stethoscope-heart">
        <div className="absolute inset-[0.03%_0.05%_0.03%_0.06%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.9873" preserveAspectRatio="none" viewBox="0 0 19.978 19.9873" width="19.978">
            <path d={svgPaths.p20842200} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTag() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[143px]" data-name="Icon + tag">
      <IconAndAvatar />
      <div className="bg-[#eafaf1] min-h-[24px] opacity-0 relative rounded-[8px] shrink-0" data-name="Tag">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">For you</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Book primary care visit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[20px] row-2 self-stretch shrink-0" data-name="Primary">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-[12px] relative size-full">
        <IconTag />
        <Frame1 />
      </div>
    </div>
  );
}

function IconAndAvatar1() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[48px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="video">
        <div className="absolute inset-[18.79%_0_18.71%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.5" preserveAspectRatio="none" viewBox="0 0 19.9999 12.5" width="19.9999">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p17d68300} fill="#0012E7" fillRule="evenodd" />
              <path d={svgPaths.p31dfbbc0} fill="#0012E7" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTag1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Icon + tag">
      <IconAndAvatar1 />
      <div className="bg-[#eafaf1] min-h-[24px] relative rounded-[8px] shrink-0" data-name="Tag">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">No cost</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Start urgent care visit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UrgentCare() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[20px] row-1 self-stretch shrink-0" data-name="Urgent care">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <IconTag1 />
        <Frame2 />
      </div>
    </div>
  );
}

function IconAndAvatar2() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[48px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="bill-hand">
        <div className="absolute inset-[0_0.01%_0.01%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.9975" preserveAspectRatio="none" viewBox="0 0 19.9978 19.9975" width="19.9978">
            <path d={svgPaths.p380d4580} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Review bills and insurance info</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bills() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[20px] row-3 self-stretch shrink-0" data-name="Bills">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-[12px] relative size-full">
        <IconAndAvatar2 />
        <Frame3 />
      </div>
    </div>
  );
}

function IconAndAvatar3() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[48px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="head-heart">
        <div className="absolute inset-[0.11%_3.75%_0.11%_3.74%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.9548" preserveAspectRatio="none" viewBox="0 0 18.5016 19.9548" width="18.5016">
            <path d={svgPaths.p17778c00} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTag2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Icon + tag">
      <IconAndAvatar3 />
      <div className="bg-[#eafaf1] min-h-[24px] relative rounded-[8px] shrink-0" data-name="Tag">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">No cost</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Book therapy or psychiatry</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bh() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[20px] row-1 self-stretch shrink-0" data-name="BH">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-[12px] relative size-full">
        <IconTag2 />
        <Frame4 />
      </div>
    </div>
  );
}

function IconAndAvatar4() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[48px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="location-medical">
        <div className="absolute inset-[0.43%_1.21%_0.43%_1.27%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.8278" preserveAspectRatio="none" viewBox="0 0 19.5041 19.8278" width="19.5041">
            <path d={svgPaths.p95c1200} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Find in-network local care</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Local() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[20px] row-2 self-stretch shrink-0" data-name="Local">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-[12px] relative size-full">
        <IconAndAvatar4 />
        <Frame5 />
      </div>
    </div>
  );
}

function IconAndAvatar5() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[48px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="medical-cancer-ribbon">
        <div className="absolute inset-[0.03%_10.41%_0_14.6%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.9934" preserveAspectRatio="none" viewBox="0 0 14.9974 19.9934" width="14.9974">
            <path d={svgPaths.p205bfb00} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Book cancer support consult</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cancer() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[20px] row-3 self-stretch shrink-0" data-name="Cancer">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-[12px] relative size-full">
        <IconAndAvatar5 />
        <Frame6 />
      </div>
    </div>
  );
}

function IconAndAvatar6() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[48px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chat-bubble-medical-qs">
        <div className="absolute inset-[0.31%_0.51%_1.32%_0.56%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.6746" preserveAspectRatio="none" viewBox="0 0 19.7865 19.6746" width="19.7865">
            <path d={svgPaths.p1d378000} fill="#0012E7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">Get a second opinion or advice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CareAdvice() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[20px] row-4 self-stretch shrink-0" data-name="Care advice">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-[12px] relative size-full">
        <IconAndAvatar6 />
        <Frame7 />
      </div>
    </div>
  );
}

function IconAndAvatar7() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-center justify-center p-[12px] relative rounded-[48px] shrink-0 size-[40px]" data-name="Icon and avatar">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="list-bullets">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1dcff580} fill="#0012E7" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2e8ddb00} fill="#0012E7" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2baaba00} fill="#0012E7" fillRule="evenodd" />
            <path d={svgPaths.p26221b00} fill="#0012E7" />
            <path d={svgPaths.p32e34800} fill="#0012E7" />
            <path d={svgPaths.p331a2200} fill="#0012E7" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
            <p className="leading-[24px]">View more benefits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondOpinion() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[20px] row-4 self-stretch shrink-0" data-name="Second opinion">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-[12px] relative size-full">
        <IconAndAvatar7 />
        <Frame8 />
      </div>
    </div>
  );
}

function GetCareTiles() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] h-[528px] relative shrink-0 w-[342px]" data-name="Get care tiles">
      <Primary />
      <UrgentCare />
      <Bills />
      <Bh />
      <Local />
      <Cancer />
      <CareAdvice />
      <SecondOpinion />
    </div>
  );
}

function GetCare() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Get Care">
      <Header />
      <GetCareTiles />
    </div>
  );
}

function Sections1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Sections">
      <GetCare />
    </div>
  );
}

function Sections() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[512px] items-start overflow-clip relative shrink-0" data-name="Sections">
      <ActionCenter />
      <Sections1 />
    </div>
  );
}

function UiContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[901px] items-center left-0 top-[-0.36px]" data-name="UI container">
      <GraphicBg />
      <HomeWelcomeLockUp />
      <DotOnHome />
      <Sections />
    </div>
  );
}

function HomeContainer() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 right-0" data-name="Home-container">
      <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Vector-home" />
    </div>
  );
}

function HighlightContainer() {
  return <div className="h-[2px] relative shrink-0 w-[36px]" data-name="Highlight-container" />;
}

function IconBadgeStack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
        <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                <path clipRule="evenodd" d={svgPaths.p2ba71280} fill="#3B3B3B" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextIconStack() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
      <IconBadgeStack />
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3b3b3b] text-[11px] text-center w-[min-content]">
        <p className="leading-[16px]">Messages</p>
      </div>
    </div>
  );
}

function HighlightContainer1() {
  return <div className="h-[2px] relative shrink-0 w-[36px]" data-name="Highlight-container" />;
}

function IconBadgeStack1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p33cc7c80} fill="#3B3B3B" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pe9d1380} fill="#3B3B3B" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3f744600} fill="#3B3B3B" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3c435600} fill="#3B3B3B" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2a713500} fill="#3B3B3B" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p332d7900} fill="#3B3B3B" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TextIconStack1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
      <IconBadgeStack1 />
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3b3b3b] text-[11px] text-center w-[min-content]">
        <p className="leading-[16px]">Activity</p>
      </div>
    </div>
  );
}

function HighlightContainer2() {
  return <div className="h-[2px] relative shrink-0 w-[36px]" data-name="Highlight-container" />;
}

function IconBadgeStack2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-badge-stack">
      <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <path clipRule="evenodd" d={svgPaths.p24a0a740} fill="#3B3B3B" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function TextIconStack2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Text-icon-stack">
      <IconBadgeStack2 />
      <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3b3b3b] text-[11px] text-center w-[min-content]">
        <p className="leading-[16px]">Me</p>
      </div>
    </div>
  );
}

function TabItemsContainer() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 px-[4px] right-0 top-0" data-name="TabItems-container">
      <TabItem activeTab badged className="relative shrink-0 w-[59px]" />
      <div className="relative shrink-0 w-[59px]" data-name="_TabItem">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center relative size-full">
            <HighlightContainer />
            <TextIconStack />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[59px]" data-name="_TabItem">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center relative size-full">
            <HighlightContainer1 />
            <TextIconStack1 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[59px]" data-name="_TabItem">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center relative size-full">
            <HighlightContainer2 />
            <TextIconStack2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ForegroundContainer() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Foreground-container">
      <TabItemsContainer />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Home">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <UiContainer />
        <div className="-translate-x-1/2 absolute bg-white bottom-0 h-[100px] left-1/2 overflow-clip rounded-bl-[48px] rounded-br-[24px] w-[375px]" data-name="Bottom tab bar">
          <HomeContainer />
          <div className="absolute bg-[#e1e1e1] h-px left-0 right-0 top-0" data-name="Vector-border" />
          <ForegroundContainer />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#181818] border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
    </div>
  );
}