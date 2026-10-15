import svgPaths from "./svg-z8qcinvbm4";
import imgVideoScreen from "./d32a186e686c2c879324a9f2c37bbc38f4573ecf.png";
import imgImage3 from "./a614d743d130c5aae505a7dc0d5cafb01aaad38e.png";

function OnSelfRestingControl() {
  return (
    <div className="absolute bottom-[24.48px] h-[171.52px] overflow-clip right-[17.15px] rounded-[8.576px] shadow-[0px_2.144px_8.576px_0px_rgba(0,0,0,0.08)] w-[128.64px]" data-name="on, self, resting + control">
      <div className="absolute inset-[2.92%_-0.51%_-3.19%_0.23%]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute inset-[83.88%_11.33%_4.12%_72.67%] shadow-[0px_2.144px_10.72px_0px_rgba(0,0,0,0.64)]" data-name="ios/Visit-camera-flip">
        <div className="absolute inset-[0_3.01%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3439 20.5828">
            <g id="Vector">
              <path d={svgPaths.p3c4bef80} fill="white" />
              <path clipRule="evenodd" d={svgPaths.p2b978e00} fill="white" fillRule="evenodd" />
              <path d={svgPaths.p14769000} fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Controls1() {
  return (
    <div className="absolute bottom-[139.36px] content-stretch flex flex-col gap-[25.728px] items-start justify-center left-[30.02px]" data-name="controls">
      <button className="backdrop-blur-[4.288px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center p-[12.864px] relative rounded-[112px] shrink-0" data-name="ios/mic">
        <div className="relative shrink-0 size-[25.728px]" data-name="microphone">
          <div className="absolute inset-[0_16.67%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.152 25.728">
              <g id="Vector">
                <path d={svgPaths.p2e0fcf52} fill="var(--fill-0, white)" />
                <path d={svgPaths.p36c7da80} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
      </button>
      <button className="backdrop-blur-[4.288px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center p-[12.864px] relative rounded-[112px] shrink-0" data-name="ios/video">
        <div className="relative shrink-0 size-[25.728px]" data-name="video">
          <div className="absolute inset-[22.76%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.728 14.0177">
              <g id="Vector">
                <path d={svgPaths.pbbff00} fill="white" />
                <path d={svgPaths.p35452800} fill="white" />
              </g>
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

function Controls() {
  return (
    <div className="absolute bottom-[24.18px] contents cursor-pointer left-[17.15px]" data-name="Controls">
      <div className="absolute bg-[#e72218] bottom-[24.18px] content-stretch flex items-center justify-center left-[17.15px] p-[25.728px] rounded-[112px] shadow-[0px_2.144px_10.72px_0px_rgba(0,0,0,0.16)]" data-name="ios/End call">
        <div className="relative shrink-0 size-[25.728px]" data-name="phone-down">
          <div className="absolute inset-[28.87%_0_29.59%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.728 10.6867">
              <path d={svgPaths.p1e1fc600} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Controls1 />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute backdrop-blur-[4.288px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center left-[17.15px] px-[17.152px] py-[12.864px] rounded-[8.576px] top-[60.03px]" data-name="title">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[14px] text-white whitespace-pre">{`Dr. Henderson  7:41`}</p>
    </div>
  );
}

export default function VideoScreen() {
  return (
    <div className="relative size-full" data-name="Video Screen">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-black inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgVideoScreen} />
      </div>
      <OnSelfRestingControl />
      <Controls />
      <Title />
    </div>
  );
}