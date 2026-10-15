import svgPaths from "./svg-wyi63ii6gh";
import imgAvatar from "./4bbd80505ce020561d1be47b697389fbaec2fe3b.png";
type DividerProps = {
  className?: string;
  type?: "content";
};

function Divider({ className, type = "content" }: DividerProps) {
  return (
    <div className={className || "relative w-[343px]"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name="Content Divider">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <div className="flex-[1_0_0] h-0 min-w-px relative">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" height="1.00003" preserveAspectRatio="none" viewBox="0 0 343 1.00003" width="343">
                      <line id="Line 6" stroke="#E1E1E1" strokeLinecap="round" x1="0.5" x2="342.5" y1="0.5" y2="0.50003" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type ProviderOfferingChipProps = {
  className?: string;
  type?: "In network" | "LGBTQ+ affirming" | "Premium care physician";
};

function ProviderOfferingChip({ className, type = "In network" }: ProviderOfferingChipProps) {
  const isLgbtqAffirming = type === "LGBTQ+ affirming";
  const isPremiumCarePhysician = type === "Premium care physician";
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className={`min-h-[24px] relative rounded-[8px] shrink-0 w-full ${isPremiumCarePhysician ? "bg-[#f2f2f2]" : "bg-[#edf9ed]"}`} data-name="Static chip">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Leading icon">
                {["LGBTQ+ affirming", "Premium care physician"].includes(type) && (
                  <div className={`absolute ${isPremiumCarePhysician ? "inset-[5.86%_0]" : "inset-[0.71%_0.63%_0.63%_0.62%]"}`} data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isPremiumCarePhysician ? "10.5932" : "11.8393"} preserveAspectRatio="none" viewBox={isPremiumCarePhysician ? "0 0 12.0004 10.5932" : "0 0 11.85 11.8393"} width={isPremiumCarePhysician ? "12.0004" : "11.85"}>
                      {isLgbtqAffirming && (
                        <g id="Vector">
                          <path d={svgPaths.p28a1de00} fill="#008200" />
                          <path d={svgPaths.p10811f0} fill="#008200" />
                          <path d={svgPaths.p3419ff80} fill="#008200" />
                          <path d={svgPaths.p1ed8a880} fill="#008200" />
                        </g>
                      )}
                      {isPremiumCarePhysician && <path clipRule="evenodd" d={svgPaths.p2ba35900} fill="black" fillRule="evenodd" id="Vector" />}
                    </svg>
                  </div>
                )}
                {type === "In network" && (
                  <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                    <path d={svgPaths.p1ab53880} fill="#008200" id="Vector" />
                  </svg>
                )}
              </div>
              <p className={`[word-break:break-word] font-["Figtree:Medium",sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis whitespace-nowrap ${isPremiumCarePhysician ? "text-black" : "text-[#004f00]"}`}>{isPremiumCarePhysician ? "Premium care physician" : isLgbtqAffirming ? "LGBTQ+ affirming" : "In network"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BadgeVerified() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Badge Verified">
      <div className="absolute inset-[-2.1%_0]">
        <svg className="block size-full" fill="none" height="16.6718" preserveAspectRatio="none" viewBox="0 0 16.0256 16.6718" width="16.0256">
          <path d={svgPaths.pefc7130} fill="#6A4CDE" id="Star 20" stroke="white" strokeWidth="0.727273" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute h-[6px] left-[31.25%] overflow-clip right-[31.25%] top-1/2" data-name="rating-star">
        <div className="absolute inset-[1.04%_1.41%_0.8%_1.49%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="5.88923" preserveAspectRatio="none" viewBox="0 0 5.8261 5.88923" width="5.8261">
            <path d={svgPaths.p2f785f80} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-end justify-end relative rounded-[46px] shrink-0 size-[48px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[46px] size-full" src={imgAvatar} />
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[46px]" />
      <BadgeVerified />
    </div>
  );
}

function ProfileHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-name="Profile Header">
      <Avatar />
      <div className="relative shrink-0" data-name="_Title Bar Title">
        <div className="[word-break:break-word] content-stretch flex flex-col items-start relative size-full">
          <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Dr. Julianna Smith, MD</p>
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">Internal Medicine</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <div className="bg-white max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[24px] shrink-0 size-[32px]" data-name="Icon Button">
        <div className="flex flex-row items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Style=Regular">
              <div className="absolute inset-[5.94%_18.32%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="14.0989" preserveAspectRatio="none" viewBox="0 0 10.1369 14.0989" width="10.1369">
                  <path d={svgPaths.p314dc2c0} fill="#3B3B3B" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Header">
      <ProfileHeader />
      <Button />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0" data-name="Chip Static">
        <div className="content-stretch flex items-start relative size-full">
          <div className="bg-[#f1f0ff] min-h-[24px] relative rounded-[8px] shrink-0" data-name="Chip Static">
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[0] overflow-hidden relative shrink-0 text-[#3c1b8f] text-[12px] text-center text-ellipsis whitespace-nowrap">
                  <span className="leading-[16px]">{` Preferred: `}</span>
                  <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px]">$30 Copay</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChipRow() {
  return (
    <div className="content-start flex flex-wrap gap-[8px_4px] items-start relative shrink-0 w-full" data-name=".chip-row">
      <Frame />
      <ProviderOfferingChip className="relative shrink-0" />
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Address">
      <p className="font-['Figtree:Bold',sans-serif] font-bold relative shrink-0 text-black w-full">Golden State Research Institute</p>
      <p className="font-['Figtree:Medium',sans-serif] font-medium relative shrink-0 text-[#3b3b3b] w-full">
        123 Street St
        <br aria-hidden />
        City Name, ST 11111
      </p>
    </div>
  );
}

function LocationInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Location info">
      <div className="relative shrink-0 w-full" data-name=".Location Address">
        <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start leading-[20px] relative size-full text-[14px]">
          <Address />
          <p className="font-['Figtree:Bold',sans-serif] font-bold relative shrink-0 text-[#008200] text-right whitespace-nowrap">17 mi</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Header />
      <ChipRow />
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">Has strong back and spine expertise, prioritizes safe and non-invasive care, and stays engaged in your long-term recovery, referring to trusted specialists.</p>
      <Divider className="relative shrink-0 w-full" />
      <LocationInfo />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#001048] min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Schedule appointment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#002380] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">View full profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewCardBase() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_34px] flex-col gap-[16px] items-start min-w-px p-[16px] relative rounded-[24px]" data-name="Preview Card Base">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Content />
      <div className="relative shrink-0 w-full" data-name="Button Group">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center relative size-full">
            <div className="relative shrink-0 w-full" data-name="Top Button">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                  <Button1 />
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Bottom Button">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                  <Button2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PreviewCard() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Preview Card">
      <PreviewCardBase />
    </div>
  );
}