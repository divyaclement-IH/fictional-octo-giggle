function Bubble() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[24px] shrink-0 w-full" data-name="Bubble">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black">
            <p className="leading-[24px]">Hi Riley, good to see you again. What’s going on?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResponseCareTeam() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[40px] relative size-full" data-name="Response - Care Team">
      <Bubble />
    </div>
  );
}