export default function ChipInteractive() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[24px] size-full" data-name="Chip Interactive">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#0012e7] text-[14px] text-center text-ellipsis whitespace-nowrap">I’m feeling sick</p>
    </div>
  );
}