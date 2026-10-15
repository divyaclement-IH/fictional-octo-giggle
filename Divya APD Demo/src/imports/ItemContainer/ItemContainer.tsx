import svgPaths from "./svg-49zk4j0xru";
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

export default function ItemContainer() {
  return (
    <div className="overflow-clip relative rounded-[16px] size-full" data-name="Item Container">
      <div className="absolute h-[132px] left-0 top-0 w-[343px]" data-name="Gemini_Generated_Image_1y39dl1y39dl1y39 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImage1Y39Dl1Y39Dl1Y391} />
      </div>
      <HeaderContainer />
    </div>
  );
}