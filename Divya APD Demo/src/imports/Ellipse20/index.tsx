export default function Ellipse() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-100.58%]">
        <svg className="block size-full" fill="none" height="515" preserveAspectRatio="none" viewBox="0 0 515 515" width="515">
          <g filter="url(#filter0_f_0_4)" id="Ellipse 20" opacity="0.24">
            <circle cx="257.5" cy="257.5" fill="url(#paint0_linear_0_4)" r="85.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="515" id="filter0_f_0_4" width="515" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_0_4" stdDeviation="86" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_4" x1="171.657" x2="342.37" y1="175" y2="189.308">
              <stop offset="0.120192" stopColor="#DF7CF5" />
              <stop offset="0.605769" stopColor="#0012E7" />
              <stop offset="0.875" stopColor="#6A4CDE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}