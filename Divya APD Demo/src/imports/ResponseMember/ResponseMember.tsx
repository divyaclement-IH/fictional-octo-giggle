function Bubble() {
  return (
    <div className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Bubble">
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">I’m feeling depressed</p>
      </div>
    </div>
  );
}

export default function ResponseMember() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[40px] relative size-full" data-name="Response - Member">
      <Bubble />
    </div>
  );
}