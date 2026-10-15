import svgPaths from "./svg-sft7e9cnny";
import imgGeminiGeneratedImage1Y39Dl1Y39Dl1Y391 from "./4ec37523331295ff4a72799b66f6563936757cc3.png";

function HeaderContainer() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[8px] top-[7px] w-[327px]" data-name="Header Container">
      <div className="relative shrink-0 size-[48px]" data-name="Icon Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="var(--fill-0, #F2F2F2)" id="Background" r="16" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2" data-name="trash">
          <div className="absolute inset-[0.03%_8.33%_0_8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13.9955">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p26aa8880} fill="#0012E7" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p10b0d280} fill="#0012E7" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContainer() {
  return (
    <div className="h-[120px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Item Container">
      <div className="absolute h-[132px] left-0 top-0 w-[343px]" data-name="Gemini_Generated_Image_1y39dl1y39dl1y39 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImage1Y39Dl1Y39Dl1Y391} />
      </div>
      <HeaderContainer />
    </div>
  );
}

function Chips() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Chips">
      <div className="bg-[#e6effe] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Chip Static">
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#002380] text-[12px] text-center text-ellipsis whitespace-nowrap">Chip</p>
      </div>
      <div className="bg-[#eafaf1] content-stretch flex gap-[4px] items-center min-h-[24px] px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Chip Static">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
          <div className="absolute inset-[6.24%_0_6.22%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 10.5041">
              <path d={svgPaths.p2a331280} id="Vector" stroke="var(--stroke-0, #005330)" strokeWidth="0.666667" />
            </svg>
          </div>
        </div>
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#005330] text-[12px] text-center text-ellipsis whitespace-nowrap">Chip with Icon</p>
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Title Container">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Title</p>
      </div>
      <Chips />
    </div>
  );
}

function BodyContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body Container">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">This is a summary. Get help creating a pregnancy-friendly meal plan to meet your goals, validated by your dietitian.</p>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Container">
      <TitleContainer />
      <BodyContainer />
    </div>
  );
}

export default function ForYouItem() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full" data-name="For You Item">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <ItemContainer />
      <ContentContainer />
    </div>
  );
}