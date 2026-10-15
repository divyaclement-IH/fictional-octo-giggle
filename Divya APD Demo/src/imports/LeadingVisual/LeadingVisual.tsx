import svgPaths from "./svg-hyzvarz2v4";

export default function LeadingVisual() {
  return (
    <div className="relative size-full" data-name="Leading visual">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" fill="var(--fill-0, #FFFBF5)" id="Circle" r="28" />
      </svg>
      <div className="absolute inset-[28.57%] overflow-clip" data-name="Style=Regular">
        <div className="absolute inset-[0_1.04%_0_2.08%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.25 24">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.pc74a530} fill="#A55600" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3a378300} fill="#A55600" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}