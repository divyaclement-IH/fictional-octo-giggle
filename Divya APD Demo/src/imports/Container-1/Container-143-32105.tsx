import svgPaths from "./svg-5v0d02r7so";

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[68px] relative rounded-[24px] shrink-0" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Leading icon">
        <div className="absolute inset-[0_6.46%_0_6.04%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p1c6c2000} fill="#0012E7" fillRule="evenodd" />
              <path d={svgPaths.p3f5035f0} fill="#0012E7" />
              <path d={svgPaths.p11746800} fill="#0012E7" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0012e7] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Primary Care</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Button1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[68px] relative rounded-[24px] shrink-0" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Leading icon">
        <div className="absolute inset-[0_3.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
            <g id="Vector">
              <path d={svgPaths.p357e0a00} fill="#0012E7" />
              <path d={svgPaths.p2afabe80} fill="#0012E7" />
              <path d={svgPaths.p35c5f700} fill="#0012E7" />
              <path clipRule="evenodd" d={svgPaths.p3a250b80} fill="#0012E7" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0012e7] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Documents</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Button3 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[4px_8px] items-center p-[16px] relative rounded-[16px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[20px]">{`Showing `}</p>
      </div>
      <Button />
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[20px]">,</p>
      </div>
      <Button2 />
    </div>
  );
}