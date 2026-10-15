import svgPaths from "./svg-wbxlhztogi";
import { imgBlur } from "./svg-3rk7z";

function Blur() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" style={{ maskImage: `url('${imgBlur}')` }} data-name="Blur">
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur />
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Icon() {
  return (
    <div className="bg-[#0012e7] overflow-clip relative rounded-[16px] shrink-0 size-[38px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24.938px] left-1/2 overflow-clip top-1/2 w-[23.75px]" data-name="Included Health Logo/IH white/False">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.462 24.9375">
          <g id="Mark">
            <path d={svgPaths.p3d240270} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a317000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f31770} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2ad75400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3792b580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1dd5db80} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TitleAndTime() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Title and Time">
      <p className="flex-[1_0_0] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[17px] min-w-px relative text-[15px] text-white tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Health Check-In
      </p>
      <div className="content-stretch flex items-center justify-center mix-blend-plus-lighter relative shrink-0" data-name="Time">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#4d4d4d] text-[15px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          9:41 AM
        </p>
      </div>
    </div>
  );
}

function TitleTimeAndDescription() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Title, Time and Description">
      <TitleAndTime />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[15px] text-white tracking-[-0.23px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        How are you feeling today?
      </p>
    </div>
  );
}

export default function IOsPushNotification() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center pl-[14px] pr-[17px] py-[13px] relative rounded-[24px] size-full" data-name="iOS/Push Notification">
      <Shadow />
      <GlassEffect />
      <div className="content-stretch flex flex-col gap-[2.969px] items-center relative rounded-[5.047px] shrink-0 w-[38px]" data-name="App Icon">
        <Icon />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TitleTimeAndDescription />
      </div>
    </div>
  );
}