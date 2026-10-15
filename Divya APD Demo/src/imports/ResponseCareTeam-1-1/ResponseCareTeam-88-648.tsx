import imgImage from "./57b3e0bd75751cb3bc88e2731d0a5fe5015d28db.png";

function AvatarLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Avatar, Label">
      <div className="relative shrink-0 size-[24px]" data-name="Avatar">
        <div className="-translate-y-1/2 absolute aspect-[48/48] left-0 right-0 top-1/2" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[12px]">
        <p className="leading-[16px]">First L. · Care Team member</p>
      </div>
    </div>
  );
}

function Bubble() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Bubble">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black">
            <p className="leading-[24px]">...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResponseCareTeam() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pr-[40px] relative size-full" data-name="Response - Care Team">
      <AvatarLabel />
      <Bubble />
    </div>
  );
}