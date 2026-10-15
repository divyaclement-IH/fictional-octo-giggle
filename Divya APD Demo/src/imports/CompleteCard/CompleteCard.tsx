import svgPaths from "./svg-ao9e83by22";
import imgDrScott from "./c2071e1555b3d00978596b90d0aa0feaa59bf039.png";

function Avatar() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Avatar">
      <div className="-translate-y-1/2 absolute aspect-[65/65] left-0 right-0 top-1/2" data-name="Dr. Scott">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="48" src={imgDrScott} width="48" />
      </div>
      <div className="absolute left-[32px] size-[16px] top-[32px]" data-name="Badge/Status">
        <div className="absolute inset-[-2.1%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0256 16.6718">
            <path d={svgPaths.pefc7130} fill="var(--fill-0, #0012E7)" id="Star 20" stroke="var(--stroke-0, white)" strokeWidth="0.727273" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute aspect-[28.000289916992188/29.866695404052734] left-[31.25%] right-[31.25%] top-[calc(50%+0.25px)]" data-name="Logo">
          <div className="absolute inset-[71.59%_0_0_69.7%]" data-name="Bottom right circle">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816">
              <path d={svgPaths.p4a0f800} fill="var(--fill-0, white)" id="Bottom right circle" />
            </svg>
          </div>
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.39993">
            <g id="Center shapes">
              <path d={svgPaths.p24c24bf0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p10931800} fill="var(--fill-0, white)" />
              <path d={svgPaths.p30d5de00} fill="var(--fill-0, white)" />
            </g>
          </svg>
          <div className="absolute inset-[0_69.7%_71.59%_0]" data-name="Top left circle">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81816 1.81816">
              <path d={svgPaths.p12e17e00} fill="var(--fill-0, white)" id="Top left circle" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function NameDetails() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 text-black w-full whitespace-nowrap" data-name="Name, Details">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center">
        <p className="leading-[24px]">Dr. Scott Henderson</p>
      </div>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px]">Primary Care</p>
    </div>
  );
}

function AvatarDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Avatar, Details">
      <Avatar />
      <NameDetails />
    </div>
  );
}

function DateAlerts() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Date, Alerts">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Visit completed!</p>
      </div>
    </div>
  );
}

function Clinic() {
  return (
    <div className="content-stretch flex font-['Figtree:Medium',sans-serif] font-medium gap-[12px] items-start leading-[0] relative shrink-0 text-[14px] text-black w-full" data-name="Clinic">
      <div className="flex flex-col justify-center relative shrink-0 w-[86px]">
        <p className="leading-[20px]">Duration</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative">
        <p className="leading-[20px]">38:22</p>
      </div>
    </div>
  );
}

function ClinicAddress() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Clinic, address">
      <Clinic />
    </div>
  );
}

function ClinicContactInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Clinic, contact info">
      <ClinicAddress />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <ClinicContactInfo />
    </div>
  );
}

function Button() {
  return (
    <div className="min-h-[36px] min-w-[68px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#002380] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001048] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Notes from your provider</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonStack() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button stack">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Button">
        <Button />
      </div>
    </div>
  );
}

export default function CompleteCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] size-full" data-name="Complete card">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <AvatarDetails />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 1">
            <line id="Divider" stroke="var(--stroke-0, #E1E1E1)" x2="365" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <DateAlerts />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 1">
            <line id="Divider" stroke="var(--stroke-0, #E1E1E1)" x2="365" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Table />
      <ButtonStack />
    </div>
  );
}