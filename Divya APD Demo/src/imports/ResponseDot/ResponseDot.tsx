import svgPaths from "./svg-ztt4jl4dlz";

function AvatarLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Avatar, Label">
      <div className="relative shrink-0 size-[24px]" data-name="Avatar/Dot/xxsmall">
        <div className="-translate-y-1/2 absolute aspect-[24/24] left-0 overflow-clip right-0 top-[calc(50%+0.1px)]" data-name="Dot">
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
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[12px]">
        <p className="leading-[16px]">Dot</p>
      </div>
    </div>
  );
}

function Bubble() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip py-[8px] relative rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-[343px] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`I'm here to help you find the right mental health services for your needs. I'll need to ask a few questions to get you to the right kind of help. `}</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">{`First off, can you describe what you're experiencing right now?`}</p>
      </div>
    </div>
  );
}

export default function ResponseDot() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Response - Dot">
      <AvatarLabel />
      <Bubble />
    </div>
  );
}