function LeftAction() {
  return <div className="content-stretch flex items-center min-w-[48px] overflow-clip shrink-0 size-[48px]" data-name="Left action" />;
}

function RightActions() {
  return <div className="content-stretch flex gap-[24px] items-center justify-end min-w-[48px] overflow-clip shrink-0 size-[48px]" data-name="Right actions" />;
}

function Container() {
  return (
    <div className="absolute content-stretch flex inset-[0_0_-1px_0] items-center justify-between overflow-clip px-[12px]" data-name="Container">
      <LeftAction />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 top-1/2 w-[229px]" data-name="Title">
        <p className="flex-[1_0_0] font-['Figtree:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[16px] text-black text-center">Simple header bar</p>
      </div>
      <RightActions />
    </div>
  );
}

export default function SecondaryNavigation() {
  return (
    <div className="bg-white border-[#e1e1e1] border-b border-solid relative size-full" data-name="Secondary Navigation">
      <Container />
    </div>
  );
}