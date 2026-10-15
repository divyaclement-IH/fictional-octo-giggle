function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#002380] text-[14px] whitespace-nowrap">Help me compare my 2027 plan options.</p>
    </div>
  );
}

export default function DotIntoButton() {
  return (
    <div className="bg-white border-[#df7cf5] border-[1.5px] border-solid content-stretch flex items-center mix-blend-multiply px-[16px] py-[12px] relative rounded-[9999px] size-full" data-name="Dot into button">
      <Paragraph />
    </div>
  );
}