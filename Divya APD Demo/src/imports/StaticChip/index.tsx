export default function StaticChip() {
  return (
    <div className="bg-[#e6effe] relative rounded-[8px] size-full" data-name="Static chip">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#002380] text-[12px] text-center text-ellipsis whitespace-nowrap">Recommended</p>
        </div>
      </div>
    </div>
  );
}