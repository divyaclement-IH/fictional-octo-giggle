import svgPaths from "./svg-2mm169w2iv";
import imgContainer from "./f4e8b98baf01df251fad69c06120eb2503116f35.png";
import imgImageSarah from "./57b3e0bd75751cb3bc88e2731d0a5fe5015d28db.png";
import imgImageDrScottHenderson from "./7c1a82157c0f940a596dba4a3a774915e2c9315f.png";
import imgVideoVisit from "./d32a186e686c2c879324a9f2c37bbc38f4573ecf.png";
import imgImage from "./a614d743d130c5aae505a7dc0d5cafb01aaad38e.png";
import imgImage1 from "./4ec37523331295ff4a72799b66f6563936757cc3.png";

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-[265.031px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Prototype Guide</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M1 13L13 1M1 1L13 13" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonCloseStyleGuide() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button - Close style guide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex h-[81px] items-center justify-between left-0 pb-[25px] pt-[24px] px-[24px] top-0 w-[1152px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Heading />
      <ButtonCloseStyleGuide />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[240.797px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Lock Screen Components</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[10.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">▼</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Heading1 />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">LockScreen + LockNotification</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">iOS lock screen with push notification card</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading2 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container7() {
  return <div className="absolute h-[815.297px] left-0 top-0 w-[375px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)" }} data-name="Container" />;
}

function Time() {
  return (
    <div className="absolute contents inset-[55.88%_41.77%_22.06%_40.7%]" data-name="Time">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[55.88%_41.77%_22.06%_40.7%] leading-[normal] not-italic text-[12px] text-center text-white whitespace-nowrap">11:15</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[68px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Time />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[68px] items-start left-[99.66px] px-[0.148px] top-[111.31px] w-[160px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start left-[86.52px] top-[70.89px] w-[201px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[20.522px] text-center text-white">Thu, January 1</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[11.391px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9062 11.3906">
        <path clipRule="evenodd" d={svgPaths.pa382180} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.391px] items-start left-0 top-[5.02px] w-[17.906px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[11.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9844 11.5">
        <path clipRule="evenodd" d={svgPaths.p35f7e800} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.5px] items-start left-[24.42px] top-[4.97px] w-[15.984px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute contents inset-[3.85%_0.23%_3.85%_1.83%]" data-name="Frame">
      <div className="absolute inset-[3.85%_10.56%_3.85%_1.83%]" data-name="Border">
        <div className="absolute inset-[-4.17%_-2.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.302 12.1246">
            <path d={svgPaths.p1fa90bf0} id="Border" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="0.932378" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[34.62%_0.23%_34.03%_94.92%]" data-name="Cap">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.23788 3.80115">
          <path d={svgPaths.p14bf1600} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute inset-[15.38%_16.03%_15.38%_7.3%]" data-name="Capacity">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5734 8.39421">
          <path d={svgPaths.p36bb59f0} fill="var(--fill-0, white)" id="Capacity" />
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[12.125px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Frame />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12.125px] items-start left-[46.92px] top-[4.66px] w-[25.531px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[20.516px] left-[279.3px] top-[19.58px] w-[73.328px]" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-black h-[57.828px] left-0 top-0 w-[375px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[600px] left-0 overflow-clip rounded-[24px] top-0 w-[375px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgContainer} />
      <Container7 />
      <Container8 />
      <Paragraph1 />
      <Container9 />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[rgba(0,0,0,0.05)] blur-[46.642px] h-[126.188px] left-0 top-[-9.33px] w-[375px]" data-name="Container" />;
}

function Container18() {
  return <div className="bg-[rgba(0,0,0,0.08)] h-[64px] rounded-[24px] shrink-0 w-full" data-name="Container" />;
}

function Container17() {
  return (
    <div className="blur-[20px] content-stretch flex flex-col h-[64px] items-start relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[116px] items-start left-[-26px] pt-[31px] px-[26px] top-[-26px] w-[410px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] h-[64px] left-0 rounded-[24px] top-0 w-[358px]" data-name="Container" />;
}

function Mark() {
  return (
    <div className="absolute contents inset-0" data-name="Mark">
      <div className="absolute inset-[71.59%_0_0_69.7%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.19687 7.0843">
          <path d={svgPaths.p2b9aef80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_69.7%_71.59%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.19686 7.08435">
          <path d={svgPaths.p2731400} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_71.59%_69.7%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.19687 7.08435">
          <path d={svgPaths.p9c3e000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[71.59%_69.7%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.19687 7.0843">
          <path d={svgPaths.p3f94d300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.79%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.7498 7.08646">
          <path d={svgPaths.p34448b00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.79%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.7498 7.08645">
          <path d={svgPaths.p136c9940} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[24.938px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Mark />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25px] items-start left-[7px] overflow-clip pt-[0.031px] px-[0.125px] top-[6.5px] w-[24px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#0012e7] left-[14px] overflow-clip rounded-[9.5px] size-[38px] top-[13px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[62px] top-[13px] w-[200.719px]" data-name="Paragraph">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17px] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.23px] whitespace-nowrap">Welcome to Included Health</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[278.72px] opacity-70 top-[13px] w-[62.281px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17px] not-italic relative shrink-0 text-[15px] text-right text-white whitespace-nowrap">11:15 AM</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[62px] top-[30px] w-[279px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-px not-italic relative text-[15px] text-white tracking-[-0.23px]">Your personal plan starts here.</p>
    </div>
  );
}

function LockNotification() {
  return (
    <div className="absolute h-[64px] left-[8.5px] rounded-[24px] top-[18.66px] w-[358px]" data-name="LockNotification">
      <Container16 />
      <Container19 />
      <Container20 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[101.313px] left-0 rounded-[4.664px] top-[384.89px] w-[375px]" data-name="Container">
      <Container15 />
      <LockNotification />
    </div>
  );
}

function StyleGuide() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[600px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[375px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container6 />
        <Container14 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[339.5px] relative size-full">
          <StyleGuide />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f3f4f6] h-[648px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function ComponentCard() {
  return (
    <div className="bg-white h-[735px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f9fafb] h-[783px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <ComponentCard />
      </div>
    </div>
  );
}

function CategorySection() {
  return (
    <div className="content-stretch flex flex-col h-[844px] items-start pb-px relative shrink-0 w-full" data-name="CategorySection">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Button />
      <Container2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[170.234px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Chat Components</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[10.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">▼</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Heading3 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">MessageBubble (Dot)</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Left-aligned message from Dot with avatar</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[9px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.01562 9">
        <path d={svgPaths.pc12b480} fill="var(--fill-0, #0012E7)" id="Vector" />
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2.13px] px-[-0.008px] size-[9px] top-[7.5px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[9px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.01562 9">
        <path d={svgPaths.pc12b480} fill="var(--fill-0, #0012E7)" id="Vector" />
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12.63px] px-[-0.008px] size-[9px] top-[7.5px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[6px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.01562 6">
        <path d={svgPaths.p22d9b480} fill="var(--fill-0, #002380)" id="Vector" />
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.13px] px-[-0.008px] size-[6px] top-[18px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[6px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.01562 6">
        <path d={svgPaths.p22d9b480} fill="var(--fill-0, #578EE8)" id="Vector" />
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[6.63px] px-[-0.008px] size-[6px] top-0" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-[0.09px]" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[16px] left-[32px] top-[4px] w-[384px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[12px] top-0 whitespace-nowrap">Dot</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[416px]" data-name="Container">
      <Container27 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[64px] left-0 rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] top-[28px] w-[416px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-[7px] w-[343px]">{`Hi Charles! 👋 I'm Dot, your Included Health digital assistant.`}</p>
    </div>
  );
}

function MessageBubble() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="MessageBubble">
      <Container26 />
      <Container33 />
    </div>
  );
}

function StyleGuide1() {
  return (
    <div className="bg-white h-[124px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <MessageBubble />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide1 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f3f4f6] h-[172px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function ComponentCard1() {
  return (
    <div className="bg-white h-[259px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container23 />
          <Container24 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">MessageBubble (Member)</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Right-aligned message from member</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[174.844px]" data-name="Container">
      <p className="-translate-x-full absolute font-['Figtree:Medium',sans-serif] font-medium leading-[24px] left-[175px] text-[16px] text-black text-right top-[-1px] whitespace-nowrap">{`I'm ready to get started!`}</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[#e6effe] h-[56px] left-[209.16px] overflow-clip rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] top-0 w-[206.844px]" data-name="Container">
      <Container38 />
    </div>
  );
}

function MessageBubble1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="MessageBubble">
      <Container37 />
    </div>
  );
}

function StyleGuide2() {
  return (
    <div className="bg-white h-[88px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <MessageBubble1 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide2 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#f3f4f6] h-[136px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function ComponentCard2() {
  return (
    <div className="bg-white h-[223px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container34 />
          <Container35 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">CareTeamBubble</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Left-aligned message from Care Team with gray background</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function ImageSarah() {
  return (
    <div className="absolute left-0 rounded-[33554400px] size-[24px] top-0" data-name="Image (Sarah)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgImageSarah} />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[16px] left-[32px] top-[4px] w-[344px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[12px] top-0 whitespace-nowrap">Sarah · Nurse Care Manager</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[104px] left-0 overflow-clip rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] top-[28px] w-[376px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[24px] left-[16px] text-[16px] text-black top-[15px] w-[344px]">{`Hi Charles, I'm Sarah, a Nurse Care Manager here at Included Health. I'd be happy to help you with that question.`}</p>
    </div>
  );
}

function CareTeamBubble() {
  return (
    <div className="h-[132px] relative shrink-0 w-full" data-name="CareTeamBubble">
      <ImageSarah />
      <Container42 />
      <Container43 />
    </div>
  );
}

function StyleGuide3() {
  return (
    <div className="bg-white h-[164px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <CareTeamBubble />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide3 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#f3f4f6] h-[212px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container41 />
      </div>
    </div>
  );
}

function ComponentCard3() {
  return (
    <div className="bg-white h-[299px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container39 />
          <Container40 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">SystemMessage</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Centered system message with timestamp and new badge</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[16px] left-[132.11px] top-0 w-[49.156px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[25px] text-[#3b3b3b] text-[12px] text-center top-0 whitespace-nowrap">12:34 PM</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[16px] left-[184.27px] top-0 w-[3.078px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[2px] text-[#3b3b3b] text-[12px] text-center top-0 whitespace-nowrap">·</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[16px] left-[191.34px] top-0 w-[92.547px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[16px] left-[46.5px] text-[#0012e7] text-[12px] text-center top-0 whitespace-nowrap">3 New messages</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[16px] left-[32px] top-[22px] w-[352px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[176.3px] text-[#3b3b3b] text-[12px] text-center top-0 whitespace-nowrap">Sarah has joined the chat</p>
    </div>
  );
}

function SystemMessage() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="SystemMessage">
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function StyleGuide4() {
  return (
    <div className="bg-white h-[70px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <SystemMessage />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide4 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f3f4f6] h-[118px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container46 />
      </div>
    </div>
  );
}

function ComponentCard4() {
  return (
    <div className="bg-white h-[205px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container44 />
          <Container45 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">QuickReply</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Quick reply chips for user selection</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[416px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[-1px] whitespace-nowrap">Would you like to:</p>
    </div>
  );
}

function Container55() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-0 rounded-[24px] top-[28px] w-[169.875px]" data-name="Container" />;
}

function Paragraph10() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[40px] w-[137.875px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[69px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">Confirm appointment</p>
    </div>
  );
}

function Container56() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-0 rounded-[24px] top-[80px] w-[135.5px]" data-name="Container" />;
}

function Paragraph11() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[92px] w-[103.5px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[52px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">Find other times</p>
    </div>
  );
}

function QuickReply() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="QuickReply">
      <Container54 />
      <Container55 />
      <Paragraph10 />
      <Container56 />
      <Paragraph11 />
    </div>
  );
}

function StyleGuide5() {
  return (
    <div className="bg-white h-[156px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <QuickReply />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide5 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#f3f4f6] h-[204px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container53 />
      </div>
    </div>
  );
}

function ComponentCard5() {
  return (
    <div className="bg-white h-[291px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container51 />
          <Container52 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ChatInput</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Message input field with send button</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading9 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center left-[24px] overflow-clip top-[16px] w-[400px]" data-name="Text Input">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6d6d6d] text-[16px] whitespace-nowrap">Type something here...</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p1199c300} fill="var(--fill-0, #F2F2F2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[32px] top-[8px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d={svgPaths.p364fc500} fill="var(--fill-0, #3B3B3B)" id="Vector" />
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] overflow-clip size-[14px] top-[17px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function ButtonAddAttachment() {
  return (
    <div className="absolute left-0 opacity-50 size-[48px] top-0" data-name="Button - Add attachment">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p1199c300} fill="var(--fill-0, #F2F2F2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[32px] top-[8px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0781 12">
        <path d={svgPaths.p36239500} fill="var(--fill-0, #8F8F8F)" id="Vector" />
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[17.69px] px-[-0.039px] top-[18.18px] w-[13px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function ButtonSendMessage() {
  return (
    <div className="absolute left-[384px] size-[48px] top-0" data-name="Button - Send message">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[48px] left-[8px] top-[48px] w-[432px]" data-name="Container">
      <ButtonAddAttachment />
      <ButtonSendMessage />
    </div>
  );
}

function ChatInput() {
  return (
    <div className="bg-white drop-shadow-[0px_0px_7.5px_rgba(0,0,0,0.12)] h-[104px] relative rounded-[24px] shrink-0 w-[448px]" data-name="ChatInput">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TextInput />
        <Container60 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#f3f4f6] h-[152px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container59 />
      </div>
    </div>
  );
}

function ComponentCard6() {
  return (
    <div className="bg-white h-[239px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container57 />
          <Container58 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ChatDisclaimer</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Disclaimer text shown at conversation start</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading10 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function ChatDisclaimer() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="ChatDisclaimer">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[208px] text-[#3b3b3b] text-[12px] text-center top-0 w-[352px]">Dot can provide generalized AI-generated answers for select healthcare questions and connect you to the Care Team any time, but it is not a substitute for professional medical advice.</p>
    </div>
  );
}

function StyleGuide6() {
  return (
    <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <ChatDisclaimer />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide6 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#f3f4f6] h-[128px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container67 />
      </div>
    </div>
  );
}

function ComponentCard7() {
  return (
    <div className="bg-white h-[215px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container65 />
          <Container66 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f9fafb] h-[1971px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[24px] px-[24px] relative size-full">
        <ComponentCard1 />
        <ComponentCard2 />
        <ComponentCard3 />
        <ComponentCard4 />
        <ComponentCard5 />
        <ComponentCard6 />
        <ComponentCard7 />
      </div>
    </div>
  );
}

function CategorySection1() {
  return (
    <div className="content-stretch flex flex-col h-[2032px] items-start pb-px relative shrink-0 w-full" data-name="CategorySection">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Container22 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[170.688px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Card Components</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[10.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">▼</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Heading11 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ConfirmationCard</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Appointment confirmation with provider details and action buttons</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading12 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container72() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[426px] left-0 rounded-[24px] top-0 w-[448px]" data-name="Container" />;
}

function ImageDrScottHenderson() {
  return (
    <div className="absolute left-0 rounded-[33554400px] size-[48px] top-0" data-name="Image (Dr. Scott Henderson)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgImageDrScottHenderson} />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[16.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[2.18%_2.27%]" data-name="Vector">
        <div className="absolute inset-[-2.28%_-2.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0009 16.6563">
            <path d={svgPaths.p7ce8100} fill="var(--fill-0, #0012E7)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.726352" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.656px] items-start left-0 top-[-0.33px] w-[16px]" data-name="Container">
      <Icon14 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[1.828px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82812 1.82812">
        <path d={svgPaths.p1aec7c80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4.09px] pt-[0.086px] px-[0.086px] size-[2px] top-[4.28px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute h-[6.391px] left-0 overflow-clip top-[-0.2px] w-[6px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.39062">
        <g id="Center shapes">
          <path d={svgPaths.p1a005000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p30ed2800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p18640200} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[1.828px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82812 1.82812">
        <path d={svgPaths.p25cfdd80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-0.09px] pt-[0.086px] px-[0.086px] size-[2px] top-[-0.28px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute left-[5px] size-[6px] top-[5.25px]" data-name="Container">
      <Container78 />
      <Icon16 />
      <Container79 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute left-[32px] size-[16px] top-[32px]" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute left-[184px] size-[48px] top-0" data-name="Container">
      <ImageDrScottHenderson />
      <Container75 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[24px] left-[133.14px] top-[52px] w-[149.719px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-[75px] text-[16px] text-black text-center top-[-1px] whitespace-nowrap">Dr. Scott Henderson</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[20px] left-[166.95px] top-[76px] w-[82.094px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[14px] text-black top-[-1px] whitespace-nowrap">Primary Care</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[96px] left-[16px] top-[16px] w-[416px]" data-name="Container">
      <Container74 />
      <Container80 />
      <Paragraph15 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-px overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.53px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416 1.06758">
            <path d="M0 0.53379H416" id="Vector" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="1.06758" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col h-px items-start relative shrink-0 w-full" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[16px] pt-[-1px] top-[128px] w-[416px]" data-name="Container">
      <Container82 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[52px] left-[16px] top-[144px] w-[416px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[-1px]">Friday, January 8 · 10:00 AM EST</p>
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[31px]">{`You'll be notified via text and email when it's time for your visit.`}</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-px overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.53px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416 1.06758">
            <path d="M0 0.53379H416" id="Vector" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="1.06758" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col h-px items-start relative shrink-0 w-full" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[16px] pt-[-1px] top-[212px] w-[416px]" data-name="Container">
      <Container85 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute font-['Figtree:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[16px] text-[14px] text-black top-[228px] w-[416px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-[-1px]">For</p>
      <p className="absolute left-[98px] top-[-1px]">Charles</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute font-['Figtree:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[16px] text-[14px] text-black top-[260px] w-[416px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-[-1px]">Duration</p>
      <p className="absolute left-[98px] top-[-1px]">30 minutes</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute font-['Figtree:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[16px] text-[14px] text-black top-[292px] w-[416px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-[-1px]">Est. Cost</p>
      <p className="absolute left-[98px] top-[-1px]">$0</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[20px] left-[155.63px] top-[8px] w-[104.734px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[52.5px] text-[14px] text-center text-white top-[-1px] whitespace-nowrap">Complete intake</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#001048] h-[36px] left-[16px] rounded-[24px] top-[328px] w-[416px]" data-name="Button">
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[20px] left-[167.39px] top-[8px] w-[79.203px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[40px] text-[#001048] text-[14px] text-center top-[-1px] whitespace-nowrap">Skip for now</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[38px] items-start left-[16px] p-px rounded-[24px] top-[372px] w-[416px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#002380] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container89 />
    </div>
  );
}

function StyleGuide7() {
  return (
    <div className="bg-white h-[426px] relative rounded-[24px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container72 />
        <Container73 />
        <Container81 />
        <Container83 />
        <Container84 />
        <Container86 />
        <Container87 />
        <Container88 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[426px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide7 />
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#f3f4f6] h-[474px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function ComponentCard8() {
  return (
    <div className="bg-white h-[561px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container69 />
          <Container70 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ServiceCard</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Benefits and service offerings card</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading13 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container93() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[208px] left-0 rounded-[24px] top-0 w-[448px]" data-name="Container" />;
}

function Icon20() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p1fd92980} fill="var(--fill-0, #D1D1D1)" id="Vector" />
      </svg>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[40px] top-0" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[83.391px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[42px] text-[#002380] text-[12px] text-center top-0 whitespace-nowrap">Recommended</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute bg-[#e6effe] h-[24px] left-[316.61px] rounded-[8px] top-0 w-[99.391px]" data-name="Container">
      <Paragraph19 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[416px]" data-name="Container">
      <Container96 />
      <Container97 />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute h-[68px] left-0 top-[48px] w-[416px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Tivity Health Fitness Pass</p>
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[27px] w-[416px]">Get affordable access to thousands of gyms and fitness centers nationwide.</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute h-[116px] left-[16px] top-[16px] w-[416px]" data-name="Container">
      <Container95 />
      <Container98 />
    </div>
  );
}

function Container99() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-[16px] rounded-[24px] top-[148px] w-[416px]" data-name="Container" />;
}

function Paragraph20() {
  return (
    <div className="absolute h-[20px] left-[183.66px] overflow-clip top-[160px] w-[80.672px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[40.5px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">View benefit</p>
    </div>
  );
}

function StyleGuide8() {
  return (
    <div className="bg-white h-[208px] relative rounded-[24px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container93 />
        <Container94 />
        <Container99 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[208px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide8 />
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#f3f4f6] h-[256px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container92 />
      </div>
    </div>
  );
}

function ComponentCard9() {
  return (
    <div className="bg-white h-[343px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container90 />
          <Container91 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ProviderCard</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Provider preview card with avatar and description</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading14 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container103() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[140px] left-0 rounded-[24px] top-0 w-[448px]" data-name="Container" />;
}

function ImageDrScottHenderson1() {
  return (
    <div className="absolute left-0 rounded-[33554400px] size-[48px] top-0" data-name="Image (Dr. Scott Henderson)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgImageDrScottHenderson} />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[16.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[2.18%_2.27%]" data-name="Vector">
        <div className="absolute inset-[-2.28%_-2.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0009 16.6563">
            <path d={svgPaths.p7ce8100} fill="var(--fill-0, #0012E7)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.726352" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.656px] items-start left-0 top-[-0.33px] w-[16px]" data-name="Container">
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[1.828px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82812 1.82812">
        <path d={svgPaths.p1aec7c80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4.09px] pt-[0.086px] px-[0.086px] size-[2px] top-[4.28px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute h-[6.391px] left-0 overflow-clip top-[-0.2px] w-[6px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.39062">
        <g id="Center shapes">
          <path d={svgPaths.p1a005000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p30ed2800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p18640200} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[1.828px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82812 1.82812">
        <path d={svgPaths.p25cfdd80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-0.09px] pt-[0.086px] px-[0.086px] size-[2px] top-[-0.28px]" data-name="Container">
      <Icon24 />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute left-[5px] size-[6px] top-[5.25px]" data-name="Container">
      <Container110 />
      <Icon23 />
      <Container111 />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute left-[32px] size-[16px] top-[32px]" data-name="Container">
      <Container108 />
      <Container109 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute left-0 size-[48px] top-0" data-name="Container">
      <ImageDrScottHenderson1 />
      <Container107 />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute h-[48px] left-[56px] top-0 w-[360px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[11px] whitespace-nowrap">Dr. Scott Henderson</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[416px]" data-name="Container">
      <Container106 />
      <Container112 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute h-[48px] left-0 top-[60px] w-[416px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[12px] top-0 w-[416px]">Dr Henderson has 18 years of experience in caring for patients managing blood pressure issues, with a focus on evidence-based care for hypertension and diabetes.</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute h-[108px] left-[16px] top-[16px] w-[416px]" data-name="Container">
      <Container105 />
      <Container113 />
    </div>
  );
}

function StyleGuide9() {
  return (
    <div className="bg-white h-[140px] relative rounded-[24px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container103 />
        <Container104 />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide9 />
        </div>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[#f3f4f6] h-[188px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container102 />
      </div>
    </div>
  );
}

function ComponentCard10() {
  return (
    <div className="bg-white h-[275px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container100 />
          <Container101 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">SpecialistCard</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">External provider card with clinic info and network status</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading15 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container117() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[314px] left-0 rounded-[24px] top-0 w-[448px]" data-name="Container" />;
}

function ImageJosephMorenoMd() {
  return (
    <div className="absolute left-0 rounded-[33554400px] size-[48px] top-0" data-name="Image (Joseph Moreno, MD)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgImageDrScottHenderson} />
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[16.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[2.18%_2.27%]" data-name="Vector">
        <div className="absolute inset-[-2.28%_-2.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0009 16.6563">
            <path d={svgPaths.p7ce8100} fill="var(--fill-0, #0012E7)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.726352" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.656px] items-start left-0 top-[-0.33px] w-[16px]" data-name="Container">
      <Icon25 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[1.828px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82812 1.82812">
        <path d={svgPaths.p1aec7c80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4.09px] pt-[0.086px] px-[0.086px] size-[2px] top-[4.28px]" data-name="Container">
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute h-[6.391px] left-0 overflow-clip top-[-0.2px] w-[6px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.39062">
        <g id="Center shapes">
          <path d={svgPaths.p1a005000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p30ed2800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p18640200} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[1.828px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82812 1.82812">
        <path d={svgPaths.p25cfdd80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-0.09px] pt-[0.086px] px-[0.086px] size-[2px] top-[-0.28px]" data-name="Container">
      <Icon28 />
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute left-[5px] size-[6px] top-[5.25px]" data-name="Container">
      <Container124 />
      <Icon27 />
      <Container125 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute left-[32px] size-[16px] top-[32px]" data-name="Container">
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute left-0 size-[48px] top-0" data-name="Container">
      <ImageJosephMorenoMd />
      <Container121 />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute h-[48px] left-[56px] top-0 w-[360px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-px">Joseph Moreno, MD</p>
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[25px]">Gastroenterology</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[416px]" data-name="Container">
      <Container120 />
      <Container126 />
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute h-[32px] left-0 top-[60px] w-[416px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[12px] top-0 w-[416px]">Specializes in digestive health with expertise in managing chronic GI conditions.</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-px overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[0.18%] right-[0.18%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.61px_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 415.746 1.21028">
            <path d="M0.605142 0.605142H415.14" id="Vector" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" strokeWidth="1.21028" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col h-px items-start relative shrink-0 w-full" data-name="Container">
      <Icon29 />
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-0 pt-[-1px] top-[104px] w-[416px]" data-name="Container">
      <Container129 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[20px] left-[377.03px] top-0 w-[38.969px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[39px] text-[#00835d] text-[14px] text-right top-[-1px] whitespace-nowrap">2.3 mi</p>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute h-[38px] left-0 top-0 w-[416px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-0 text-[14px] text-black top-[-1px] whitespace-nowrap">Valley Medical Center</p>
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[12px] top-[22px] whitespace-nowrap">456 Oak Avenue, San Jose, CA 95113</p>
      <Paragraph23 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d={svgPaths.p48ee480} fill="var(--fill-0, #00835D)" id="Vector" />
      </svg>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] overflow-clip size-[12px] top-[6px]" data-name="Container">
      <Icon30 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[16px] left-[24px] overflow-clip top-[4px] w-[57.469px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[29px] text-[#005330] text-[12px] text-center top-0 whitespace-nowrap">In network</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute bg-[#eafaf1] h-[24px] left-0 rounded-[8px] top-0 w-[89.469px]" data-name="Container">
      <Container134 />
      <Paragraph24 />
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute contents inset-0" data-name="Vector">
      <div className="absolute inset-[0_31.88%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.17464 6.5625">
          <path d={svgPaths.p210d6a00} fill="var(--fill-0, #00835D)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.3%_0_8.1%_72.72%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.2736 5.48662">
          <path d={svgPaths.pf419780} fill="var(--fill-0, #00835D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-[6.563px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Vector />
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col h-[6.563px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon31 />
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] overflow-clip pt-[2.719px] size-[12px] top-[6px]" data-name="Container">
      <Container137 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[16px] left-[24px] overflow-clip top-[4px] w-[91.641px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[46px] text-[#005330] text-[12px] text-center top-0 whitespace-nowrap">Offers telehealth</p>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute bg-[#eafaf1] h-[24px] left-[101.47px] rounded-[8px] top-0 w-[123.641px]" data-name="Container">
      <Container136 />
      <Paragraph25 />
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute h-[24px] left-0 top-[46px] w-[225.109px]" data-name="Container">
      <Container133 />
      <Container135 />
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute h-[70px] left-0 top-[116px] w-[416px]" data-name="Container">
      <Container131 />
      <Container132 />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute h-[186px] left-[16px] top-[16px] w-[416px]" data-name="Container">
      <Container119 />
      <Container127 />
      <Container128 />
      <Container130 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[20px] left-[135.88px] top-[8px] w-[144.234px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[72.5px] text-[14px] text-center text-white top-[-1px] whitespace-nowrap">Schedule appointment</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#001048] h-[36px] left-[16px] rounded-[24px] top-[218px] w-[416px]" data-name="Button">
      <Paragraph26 />
    </div>
  );
}

function Container138() {
  return <div className="absolute border border-[#002380] border-solid h-[36px] left-[16px] rounded-[24px] top-[262px] w-[416px]" data-name="Container" />;
}

function Paragraph27() {
  return (
    <div className="absolute h-[20px] left-[174.53px] top-[270px] w-[98.922px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[49.5px] text-[#001048] text-[14px] text-center top-[-1px] whitespace-nowrap">View full profile</p>
    </div>
  );
}

function StyleGuide10() {
  return (
    <div className="bg-white h-[314px] relative rounded-[24px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container117 />
        <Container118 />
        <Button5 />
        <Container138 />
        <Paragraph27 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[314px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide10 />
        </div>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="bg-[#f3f4f6] h-[362px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container116 />
      </div>
    </div>
  );
}

function ComponentCard11() {
  return (
    <div className="bg-white h-[449px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container114 />
          <Container115 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">VisitCompleteCard</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Post-visit summary card</p>
    </div>
  );
}

function Container139() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading16 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container142() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[288px] left-0 rounded-[24px] top-0 w-[448px]" data-name="Container" />;
}

function ImageDrScottHenderson2() {
  return (
    <div className="absolute left-0 rounded-[33554400px] size-[48px] top-0" data-name="Image (Dr. Scott Henderson)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[33554400px] size-full" src={imgImageDrScottHenderson} />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[16.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[2.18%_2.27%]" data-name="Vector">
        <div className="absolute inset-[-2.28%_-2.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0009 16.6563">
            <path d={svgPaths.p7ce8100} fill="var(--fill-0, #0012E7)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.726352" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.656px] items-start left-0 top-[-0.33px] w-[16px]" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[1.828px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82812 1.82812">
        <path d={svgPaths.p1aec7c80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4.09px] pt-[0.086px] px-[0.086px] size-[2px] top-[4.28px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute h-[6.391px] left-0 overflow-clip top-[-0.2px] w-[6px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.39062">
        <g id="Center shapes">
          <path d={svgPaths.p1a005000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p30ed2800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p18640200} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[1.828px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82812 1.82812">
        <path d={svgPaths.p25cfdd80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-0.09px] pt-[0.086px] px-[0.086px] size-[2px] top-[-0.28px]" data-name="Container">
      <Icon35 />
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute left-[5px] size-[6px] top-[5.25px]" data-name="Container">
      <Container148 />
      <Icon34 />
      <Container149 />
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute left-[32px] size-[16px] top-[32px]" data-name="Container">
      <Container146 />
      <Container147 />
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute left-[184px] size-[48px] top-0" data-name="Container">
      <ImageDrScottHenderson2 />
      <Container145 />
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute h-[24px] left-[133.14px] top-[52px] w-[149.719px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-[75px] text-[16px] text-black text-center top-[-1px] whitespace-nowrap">Dr. Scott Henderson</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[20px] left-[166.95px] top-[76px] w-[82.094px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[14px] text-black top-[-1px] whitespace-nowrap">Primary Care</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute h-[96px] left-[16px] top-[16px] w-[416px]" data-name="Container">
      <Container144 />
      <Container150 />
      <Paragraph29 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-px overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.53px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416 1.06758">
            <path d="M0 0.53379H416" id="Vector" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="1.06758" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col h-px items-start relative shrink-0 w-full" data-name="Container">
      <Icon36 />
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[16px] pt-[-1px] top-[128px] w-[416px]" data-name="Container">
      <Container152 />
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[144px] w-[416px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Visit completed!</p>
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-px overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.53px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416 1.06758">
            <path d="M0 0.53379H416" id="Vector" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="1.06758" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-col h-px items-start relative shrink-0 w-full" data-name="Container">
      <Icon37 />
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[16px] pt-[-1px] top-[184px] w-[416px]" data-name="Container">
      <Container155 />
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute font-['Figtree:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[16px] text-[14px] text-black top-[200px] w-[416px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-[-1px]">Duration</p>
      <p className="absolute left-[98px] top-[-1px]">18:00</p>
    </div>
  );
}

function Container157() {
  return <div className="absolute border border-[#002380] border-solid h-[36px] left-[16px] rounded-[24px] top-[236px] w-[416px]" data-name="Container" />;
}

function Paragraph30() {
  return (
    <div className="absolute h-[20px] left-[143.67px] top-[244px] w-[160.641px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[80.5px] text-[#001048] text-[14px] text-center top-[-1px] whitespace-nowrap">Notes from your provider</p>
    </div>
  );
}

function StyleGuide11() {
  return (
    <div className="bg-white h-[288px] relative rounded-[24px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container142 />
        <Container143 />
        <Container151 />
        <Container153 />
        <Container154 />
        <Container156 />
        <Container157 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[288px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide11 />
        </div>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="bg-[#f3f4f6] h-[336px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container141 />
      </div>
    </div>
  );
}

function ComponentCard12() {
  return (
    <div className="bg-white h-[423px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container139 />
          <Container140 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Carousel</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Horizontal scrollable carousel with cards</p>
    </div>
  );
}

function Container158() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading17 />
        <Paragraph31 />
      </div>
    </div>
  );
}

function Container162() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[208px] left-0 rounded-[24px] top-0 w-[343px]" data-name="Container" />;
}

function Icon38() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p1fd92980} fill="var(--fill-0, #D1D1D1)" id="Vector" />
      </svg>
    </div>
  );
}

function Container165() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[40px] top-0" data-name="Container">
      <Icon38 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[83.391px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[42px] text-[#002380] text-[12px] text-center top-0 whitespace-nowrap">Recommended</p>
    </div>
  );
}

function Container166() {
  return (
    <div className="absolute bg-[#e6effe] h-[24px] left-[211.61px] rounded-[8px] top-0 w-[99.391px]" data-name="Container">
      <Paragraph32 />
    </div>
  );
}

function Container164() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[311px]" data-name="Container">
      <Container165 />
      <Container166 />
    </div>
  );
}

function Container167() {
  return (
    <div className="absolute h-[68px] left-0 top-[48px] w-[311px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Tivity Health Fitness Pass</p>
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[27px] w-[311px]">Get affordable access to thousands of gyms nationwide.</p>
    </div>
  );
}

function Container163() {
  return (
    <div className="absolute h-[116px] left-[16px] top-[16px] w-[311px]" data-name="Container">
      <Container164 />
      <Container167 />
    </div>
  );
}

function Container168() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-[16px] rounded-[24px] top-[148px] w-[311px]" data-name="Container" />;
}

function Paragraph33() {
  return (
    <div className="absolute h-[20px] left-[131.16px] overflow-clip top-[160px] w-[80.672px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[40.5px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">View benefit</p>
    </div>
  );
}

function Container161() {
  return (
    <div className="bg-white h-[208px] relative rounded-[24px] shrink-0 w-[343px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container162 />
        <Container163 />
        <Container168 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function Container170() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[208px] left-0 rounded-[24px] top-0 w-[343px]" data-name="Container" />;
}

function Icon39() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p1fd92980} fill="var(--fill-0, #D1D1D1)" id="Vector" />
      </svg>
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[40px] top-0" data-name="Container">
      <Icon39 />
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute h-[68px] left-0 top-[48px] w-[311px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Fresh Tri</p>
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[27px] w-[311px]">Science-based habit-building app for better health.</p>
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute h-[116px] left-[16px] top-[16px] w-[311px]" data-name="Container">
      <Container172 />
      <Container173 />
    </div>
  );
}

function Container174() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-[16px] rounded-[24px] top-[148px] w-[311px]" data-name="Container" />;
}

function Paragraph34() {
  return (
    <div className="absolute h-[20px] left-[131.16px] overflow-clip top-[160px] w-[80.672px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[40.5px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">View benefit</p>
    </div>
  );
}

function Container169() {
  return (
    <div className="bg-white h-[208px] relative rounded-[24px] shrink-0 w-[343px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container170 />
        <Container171 />
        <Container174 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[208px] items-start left-[303px] overflow-clip top-0 w-[448px]" data-name="Container">
      <Container161 />
      <Container169 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="h-[8px] relative shrink-0 w-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 8">
        <g clipPath="url(#clip0_218_7519)" id="Icon">
          <path d={svgPaths.pe42d780} fill="var(--fill-0, #002380)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_218_7519">
            <rect fill="white" height="8" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_218_7587)" id="Icon">
          <path d={svgPaths.p11894c80} id="Vector" stroke="var(--stroke-0, #578EE8)" />
        </g>
        <defs>
          <clipPath id="clip0_218_7587">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute content-stretch flex gap-[13px] h-[8px] items-center justify-center left-[303px] px-[203.5px] top-[220px] w-[448px]" data-name="Container">
      <Icon40 />
      <Icon41 />
    </div>
  );
}

function StyleGuide12() {
  return (
    <div className="h-[228px] overflow-clip relative shrink-0 w-full" data-name="StyleGuide">
      <Container160 />
      <Container175 />
    </div>
  );
}

function Container159() {
  return (
    <div className="bg-[#f3f4f6] h-[276px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <StyleGuide12 />
      </div>
    </div>
  );
}

function ComponentCard13() {
  return (
    <div className="bg-white h-[363px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container158 />
          <Container159 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[#f9fafb] h-[2622px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[24px] px-[24px] relative size-full">
        <ComponentCard8 />
        <ComponentCard9 />
        <ComponentCard10 />
        <ComponentCard11 />
        <ComponentCard12 />
        <ComponentCard13 />
      </div>
    </div>
  );
}

function CategorySection2() {
  return (
    <div className="content-stretch flex flex-col h-[2683px] items-start pb-px relative shrink-0 w-full" data-name="CategorySection">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Button2 />
      <Container68 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[28px] relative shrink-0 w-[226.031px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Video Visit Components</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[10.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">▼</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Heading18 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">VideoVisit</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Mock video call interface (static display)</p>
    </div>
  );
}

function Container177() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading19 />
        <Paragraph35 />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[171.984px] left-[0.28px] top-[5px] w-[128.984px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Vector1() {
  return (
    <div className="absolute contents inset-0" data-name="Vector">
      <div className="absolute inset-[0_6.55%_62.26%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1054 7.77208">
          <path d={svgPaths.p35781a40} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[23.46%_17.24%_31.29%_17.24%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6957 9.31853">
          <path clipRule="evenodd" d={svgPaths.pf455500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[62.25%_0_0_6.55%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1054 7.77416">
          <path d={svgPaths.p34f6800} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="h-[20.594px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Vector1 />
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex flex-col h-[20.594px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon42 />
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch drop-shadow-[0px_2.144px_5.36px_rgba(0,0,0,0.64)] flex flex-col items-start left-[93.47px] px-[0.609px] size-[20.594px] top-[143.86px]" data-name="Container">
      <Container182 />
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[171.516px] left-[229.23px] overflow-clip rounded-[8.576px] shadow-[0px_2.144px_8.576px_0px_rgba(0,0,0,0.08)] top-[404.02px] w-[128.625px]" data-name="Container">
      <Image />
      <Container181 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="h-[10.688px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.7188 10.6875">
        <path d={svgPaths.p135cf2} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex flex-col h-[10.688px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon43 />
    </div>
  );
}

function Container183() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25.72px] pt-[7.422px] size-[25.719px] top-[25.72px]" data-name="Container">
      <Container184 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#e72218] drop-shadow-[0px_2.144px_5.36px_rgba(0,0,0,0.16)] left-[17.14px] rounded-[112px] size-[77.156px] top-[498.67px]" data-name="Button">
      <Container183 />
    </div>
  );
}

function Vector2() {
  return (
    <div className="absolute contents inset-0" data-name="Vector">
      <div className="absolute inset-[0_21.88%_33.33%_21.88%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.65036 17.1459">
          <path d={svgPaths.p20fcf300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.5%_0_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1562 16.0743">
          <path d={svgPaths.pd59dec0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="h-[25.719px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Vector2 />
    </div>
  );
}

function Container186() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12.86px] px-[4.281px] size-[25.719px] top-[12.86px]" data-name="Container">
      <Icon44 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] left-0 rounded-[112px] size-[51.438px] top-0" data-name="Button">
      <Container186 />
    </div>
  );
}

function Vector3() {
  return (
    <div className="absolute contents inset-0" data-name="Vector">
      <div className="absolute inset-[0_31.88%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5201 14.0312">
          <path d={svgPaths.p339b5900} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.3%_0_8.1%_72.72%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.01609 11.7309">
          <path d={svgPaths.p2d803b40} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="h-[14.031px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Vector3 />
    </div>
  );
}

function Container188() {
  return (
    <div className="content-stretch flex flex-col h-[14.031px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon45 />
    </div>
  );
}

function Container187() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12.86px] pt-[5.844px] size-[25.719px] top-[12.86px]" data-name="Container">
      <Container188 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] left-0 rounded-[112px] size-[51.438px] top-[77.16px]" data-name="Button">
      <Container187 />
    </div>
  );
}

function Container185() {
  return (
    <div className="absolute h-[128.594px] left-[30.02px] top-[332.05px] w-[51.438px]" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[17.14px] top-[12.86px] w-[174.531px]" data-name="Paragraph">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[14px] text-white whitespace-pre">{`Dr. Scott Henderson  18:00`}</p>
    </div>
  );
}

function Container189() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] h-[43.719px] left-[17.14px] rounded-[8.576px] top-[60.02px] w-[208.813px]" data-name="Container">
      <Paragraph36 />
    </div>
  );
}

function VideoVisit() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="VideoVisit">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-black inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgVideoVisit} />
      </div>
      <Container180 />
      <Button7 />
      <Container185 />
      <Container189 />
    </div>
  );
}

function StyleGuide13() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[600px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[375px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <VideoVisit />
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[339.5px] relative size-full">
          <StyleGuide13 />
        </div>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="bg-[#f3f4f6] h-[648px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container179 />
      </div>
    </div>
  );
}

function ComponentCard14() {
  return (
    <div className="bg-white h-[735px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container177 />
          <Container178 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container176() {
  return (
    <div className="bg-[#f9fafb] h-[783px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <ComponentCard14 />
      </div>
    </div>
  );
}

function CategorySection3() {
  return (
    <div className="content-stretch flex flex-col h-[844px] items-start pb-px relative shrink-0 w-full" data-name="CategorySection">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Button6 />
      <Container176 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[28px] relative shrink-0 w-[202.391px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Booking Components</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[10.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">▼</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Heading20 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">RequestCard</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Auto-advancing request status card with flexible options</p>
    </div>
  );
}

function Container191() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading21 />
        <Paragraph37 />
      </div>
    </div>
  );
}

function Container194() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[136px] left-0 rounded-[24px] top-0 w-[448px]" data-name="Container" />;
}

function Icon46() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p1fd92980} fill="var(--fill-0, #EAFAF1)" id="Vector" />
      </svg>
    </div>
  );
}

function Container199() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[40px] top-0" data-name="Container">
      <Icon46 />
    </div>
  );
}

function Icon47() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0001 20.0001">
        <path d={svgPaths.p2a5abff0} fill="var(--fill-0, #00835D)" id="Vector" />
      </svg>
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[10px] overflow-clip size-[20px] top-[10px]" data-name="Container">
      <Icon47 />
    </div>
  );
}

function Container198() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Container">
      <Container199 />
      <Container200 />
    </div>
  );
}

function Container201() {
  return (
    <div className="absolute h-[40px] left-[48px] top-0 w-[368px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[7px] whitespace-nowrap">Appointment booking request</p>
    </div>
  );
}

function Container197() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[416px]" data-name="Container">
      <Container198 />
      <Container201 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[20px] left-0 top-[48px] w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[-1px] whitespace-nowrap">Scheduling your appointment with a specialist.</p>
    </div>
  );
}

function Container196() {
  return (
    <div className="absolute h-[68px] left-0 top-0 w-[416px]" data-name="Container">
      <Container197 />
      <Paragraph38 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-0 text-[14px] text-black top-[-1px] whitespace-nowrap">Status</p>
    </div>
  );
}

function Icon48() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p3ea09c00} fill="var(--fill-0, #00835D)" id="Vector" />
      </svg>
    </div>
  );
}

function Container204() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip size-[16px] top-[2px]" data-name="Container">
      <Icon48 />
    </div>
  );
}

function Container205() {
  return (
    <div className="absolute h-[20px] left-[22px] top-0 w-[63.094px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#00835d] text-[14px] top-[-1px] whitespace-nowrap">Complete</p>
    </div>
  );
}

function Container203() {
  return (
    <div className="absolute h-[20px] left-[80px] top-0 w-[85.094px]" data-name="Container">
      <Container204 />
      <Container205 />
    </div>
  );
}

function Container202() {
  return (
    <div className="absolute h-[20px] left-0 top-[84px] w-[416px]" data-name="Container">
      <Paragraph39 />
      <Container203 />
    </div>
  );
}

function Container195() {
  return (
    <div className="absolute h-[104px] left-[16px] top-[16px] w-[416px]" data-name="Container">
      <Container196 />
      <Container202 />
    </div>
  );
}

function StyleGuide14() {
  return (
    <div className="bg-white h-[136px] relative rounded-[24px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container194 />
        <Container195 />
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="h-[136px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide14 />
        </div>
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="bg-[#f3f4f6] h-[184px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container193 />
      </div>
    </div>
  );
}

function ComponentCard15() {
  return (
    <div className="bg-white h-[271px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container191 />
          <Container192 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">RequestCard (with cancel button)</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Request card with cancel button option</p>
    </div>
  );
}

function Container206() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading22 />
        <Paragraph40 />
      </div>
    </div>
  );
}

function Container209() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[232px] left-0 rounded-[24px] top-0 w-[448px]" data-name="Container" />;
}

function Icon49() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p1fd92980} fill="var(--fill-0, #E6EFFE)" id="Vector" />
      </svg>
    </div>
  );
}

function Container214() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[40px] top-0" data-name="Container">
      <Icon49 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0001 20.0001">
        <path d={svgPaths.p2a5abff0} fill="var(--fill-0, #0012E7)" id="Vector" />
      </svg>
    </div>
  );
}

function Container215() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[10px] overflow-clip size-[20px] top-[10px]" data-name="Container">
      <Icon50 />
    </div>
  );
}

function Container213() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Container">
      <Container214 />
      <Container215 />
    </div>
  );
}

function Container216() {
  return (
    <div className="absolute h-[40px] left-[48px] top-0 w-[368px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[7px] whitespace-nowrap">Coverage check request</p>
    </div>
  );
}

function Container212() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[416px]" data-name="Container">
      <Container213 />
      <Container216 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute h-[40px] left-0 top-[48px] w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[-1px] w-[416px]">Verifying In-lab sleep study coverage with a member of our care team.</p>
    </div>
  );
}

function Container211() {
  return (
    <div className="absolute h-[88px] left-0 top-0 w-[416px]" data-name="Container">
      <Container212 />
      <Paragraph41 />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-0 text-[14px] text-black top-[-1px] whitespace-nowrap">Status</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[0_16.92%_34.87%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.708 8.49801">
          <path d={svgPaths.p297b2980} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.46%_0_0_16.25%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8106 8.55099">
          <path d={svgPaths.p206d6000} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon51() {
  return (
    <div className="h-[13.047px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex flex-col h-[13.047px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon51 />
    </div>
  );
}

function Container220() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pl-[0.359px] pr-[0.344px] pt-[1.5px] size-[16px] top-[2px]" data-name="Container">
      <Container221 />
    </div>
  );
}

function Container222() {
  return (
    <div className="absolute h-[20px] left-[22px] top-0 w-[148.422px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#0012e7] text-[14px] top-[-1px] whitespace-nowrap">Reviewing your request</p>
    </div>
  );
}

function Container219() {
  return (
    <div className="absolute h-[20px] left-[80px] top-0 w-[170.422px]" data-name="Container">
      <Container220 />
      <Container222 />
    </div>
  );
}

function Container218() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[416px]" data-name="Container">
      <Paragraph42 />
      <Container219 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute h-[16px] left-0 top-[28px] w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[0] left-0 text-[#3b3b3b] text-[0px] top-0 whitespace-nowrap">
        <span className="leading-[16px] text-[12px]">{`Typical wait time is `}</span>
        <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] text-[12px]">less than</span>
        <span className="leading-[16px] text-[12px]">{` `}</span>
        <span className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] text-[12px] text-black">10 min.</span>
      </p>
    </div>
  );
}

function Container217() {
  return (
    <div className="absolute h-[44px] left-0 top-[104px] w-[416px]" data-name="Container">
      <Container218 />
      <Paragraph43 />
    </div>
  );
}

function Container223() {
  return <div className="absolute border border-[#002380] border-solid h-[36px] left-0 rounded-[24px] top-[164px] w-[120px]" data-name="Container" />;
}

function Container224() {
  return (
    <div className="absolute h-[20px] left-[12.39px] top-[172px] w-[95.203px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[48px] text-[#001048] text-[14px] text-center top-[-1px] whitespace-nowrap">Cancel request</p>
    </div>
  );
}

function Container210() {
  return (
    <div className="absolute h-[200px] left-[16px] top-[16px] w-[416px]" data-name="Container">
      <Container211 />
      <Container217 />
      <Container223 />
      <Container224 />
    </div>
  );
}

function StyleGuide15() {
  return (
    <div className="bg-white h-[232px] relative rounded-[24px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container209 />
        <Container210 />
      </div>
    </div>
  );
}

function Container208() {
  return (
    <div className="h-[232px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide15 />
        </div>
      </div>
    </div>
  );
}

function Container207() {
  return (
    <div className="bg-[#f3f4f6] h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container208 />
      </div>
    </div>
  );
}

function ComponentCard16() {
  return (
    <div className="bg-white h-[367px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container206 />
          <Container207 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading23() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">RequestCard (with delay warning)</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Request card with delayed status warning</p>
    </div>
  );
}

function Container225() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading23 />
        <Paragraph44 />
      </div>
    </div>
  );
}

function Container228() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[204px] left-0 rounded-[24px] top-0 w-[448px]" data-name="Container" />;
}

function Icon52() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p1fd92980} fill="var(--fill-0, #E6EFFE)" id="Vector" />
      </svg>
    </div>
  );
}

function Container233() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[40px] top-0" data-name="Container">
      <Icon52 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0001 20.0001">
        <path d={svgPaths.p2a5abff0} fill="var(--fill-0, #0012E7)" id="Vector" />
      </svg>
    </div>
  );
}

function Container234() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[10px] overflow-clip size-[20px] top-[10px]" data-name="Container">
      <Icon53 />
    </div>
  );
}

function Container232() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Container">
      <Container233 />
      <Container234 />
    </div>
  );
}

function Container235() {
  return (
    <div className="absolute h-[40px] left-[48px] top-0 w-[368px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[7px] whitespace-nowrap">Coverage check request</p>
    </div>
  );
}

function Container231() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[416px]" data-name="Container">
      <Container232 />
      <Container235 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[40px] left-0 top-[48px] w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[-1px] w-[416px]">Verifying In-lab sleep study coverage with a member of our care team.</p>
    </div>
  );
}

function Container230() {
  return (
    <div className="absolute h-[88px] left-0 top-0 w-[416px]" data-name="Container">
      <Container231 />
      <Paragraph45 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-0 text-[14px] text-black top-[-1px] whitespace-nowrap">Status</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[0_16.92%_34.87%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.708 8.49801">
          <path d={svgPaths.p297b2980} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.46%_0_0_16.25%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8106 8.55099">
          <path d={svgPaths.p206d6000} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon54() {
  return (
    <div className="h-[13.047px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group1 />
    </div>
  );
}

function Container239() {
  return (
    <div className="content-stretch flex flex-col h-[13.047px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon54 />
    </div>
  );
}

function Container238() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pl-[0.359px] pr-[0.344px] pt-[1.5px] size-[16px] top-[2px]" data-name="Container">
      <Container239 />
    </div>
  );
}

function Container240() {
  return (
    <div className="absolute h-[20px] left-[22px] top-0 w-[148.422px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#0012e7] text-[14px] top-[-1px] whitespace-nowrap">Reviewing your request</p>
    </div>
  );
}

function Container237() {
  return (
    <div className="absolute h-[20px] left-[80px] top-0 w-[170.422px]" data-name="Container">
      <Container238 />
      <Container240 />
    </div>
  );
}

function Container236() {
  return (
    <div className="absolute h-[20px] left-0 top-[104px] w-[416px]" data-name="Container">
      <Paragraph46 />
      <Container237 />
    </div>
  );
}

function Container242() {
  return <div className="absolute border border-[#f5dcc3] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[416px]" data-name="Container" />;
}

function Container243() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[416px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[12px] text-[#662600] text-[12px] top-[8px] whitespace-nowrap">{`We're experiencing longer than usual wait times.`}</p>
    </div>
  );
}

function Container241() {
  return (
    <div className="absolute bg-[#fffbf5] h-[32px] left-0 rounded-[8px] top-[140px] w-[416px]" data-name="Container">
      <Container242 />
      <Container243 />
    </div>
  );
}

function Container229() {
  return (
    <div className="absolute h-[172px] left-[16px] top-[16px] w-[416px]" data-name="Container">
      <Container230 />
      <Container236 />
      <Container241 />
    </div>
  );
}

function StyleGuide16() {
  return (
    <div className="bg-white h-[204px] relative rounded-[24px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container228 />
        <Container229 />
      </div>
    </div>
  );
}

function Container227() {
  return (
    <div className="h-[204px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide16 />
        </div>
      </div>
    </div>
  );
}

function Container226() {
  return (
    <div className="bg-[#f3f4f6] h-[252px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container227 />
      </div>
    </div>
  );
}

function ComponentCard17() {
  return (
    <div className="bg-white h-[339px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container225 />
          <Container226 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container190() {
  return (
    <div className="bg-[#f9fafb] h-[1089px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[24px] px-[24px] relative size-full">
        <ComponentCard15 />
        <ComponentCard16 />
        <ComponentCard17 />
      </div>
    </div>
  );
}

function CategorySection4() {
  return (
    <div className="content-stretch flex flex-col h-[1150px] items-start pb-px relative shrink-0 w-full" data-name="CategorySection">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Button10 />
      <Container190 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="h-[28px] relative shrink-0 w-[217.5px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Specialist Components</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[10.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">▼</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Heading24 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Heading25() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">CareComparison</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Care quality metrics comparison with baseline</p>
    </div>
  );
}

function Container245() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading25 />
        <Paragraph47 />
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute h-[24px] left-[303px] top-0 w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Comparison with the CareMatch baseline</p>
    </div>
  );
}

function Container249() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[60.813px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[-1px] whitespace-nowrap">Expertise</p>
    </div>
  );
}

function Bar1() {
  return (
    <div className="absolute contents inset-0" data-name="Bar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 15">
        <path d={svgPaths.p3467af00} fill="var(--fill-0, #EAFAF1)" id="Vector" />
      </svg>
      <div className="absolute inset-[0_11.81%_0_0]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 15">
          <path d={svgPaths.p1ec07d80} fill="url(#paint0_linear_218_7493)" id="Rectangle 26" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_218_7493" x1="112" x2="0" y1="7.49997" y2="7.49997">
              <stop offset="0.163462" stopColor="#008961" />
              <stop offset="1" stopColor="#00AB7E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon55() {
  return (
    <div className="h-[15px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Bar1 />
    </div>
  );
}

function Bar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[15px] items-start left-0 top-[2px] w-[127px]" data-name="Bar">
      <Icon55 />
    </div>
  );
}

function Container253() {
  return (
    <div className="h-[22px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container252() {
  return (
    <div className="absolute bg-[#3b3b3b] content-stretch flex flex-col h-[18px] items-start left-[91px] pt-[-2px] px-[-2px] rounded-[10px] top-0 w-[2px]" data-name="Container">
      <Container253 />
    </div>
  );
}

function Container251() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[127px]" data-name="Container3">
      <Bar />
      <Container252 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.60938 12">
        <path d={svgPaths.p31548c00} fill="var(--fill-0, #6D6D6D)" id="Vector" />
      </svg>
    </div>
  );
}

function Container257() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[0.195px] relative size-full">
        <Icon56 />
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[3.305px] pr-[1.695px] relative size-full">
          <Container257 />
        </div>
      </div>
    </div>
  );
}

function Container255() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[12px]" data-name="Container">
      <Container256 />
    </div>
  );
}

function Container254() {
  return (
    <div className="absolute left-[139px] size-[12px] top-[3px]" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[12px] top-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Container255 />
        </div>
      </div>
    </div>
  );
}

function Container250() {
  return (
    <div className="absolute h-[18px] left-[160px] top-px w-[151px]" data-name="Container2">
      <Container251 />
      <Container254 />
    </div>
  );
}

function Container248() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[12px] w-[311px]" data-name="Container1">
      <Container249 />
      <Container250 />
    </div>
  );
}

function Container258() {
  return (
    <div className="absolute h-[16px] left-[16px] top-[38px] w-[311px]" data-name="Container4">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[12px] top-0 whitespace-nowrap">How often they treat cases like yours</p>
    </div>
  );
}

function Icon57() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d={svgPaths.p48ee480} fill="var(--fill-0, #00A076)" id="Vector" />
      </svg>
    </div>
  );
}

function Container260() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip size-[12px] top-0" data-name="Container">
      <Icon57 />
    </div>
  );
}

function Icon58() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d={svgPaths.p48ee480} fill="var(--fill-0, #00A076)" id="Vector" />
      </svg>
    </div>
  );
}

function Container261() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] overflow-clip size-[12px] top-0" data-name="Container">
      <Icon58 />
    </div>
  );
}

function Ranking() {
  return (
    <div className="absolute h-[12px] left-0 top-[2px] w-[28px]" data-name="Ranking">
      <Container260 />
      <Container261 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="absolute h-[16px] left-[32px] top-0 w-[74.859px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#008961] text-[12px] top-0 whitespace-nowrap">Well-rounded</p>
    </div>
  );
}

function Strength() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[106.859px]" data-name="Strength">
      <Ranking />
      <Paragraph49 />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="absolute h-[16px] left-[206.16px] top-0 w-[104.844px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[0] left-0 text-[#00a076] text-[0px] top-0 whitespace-nowrap">
        <span className="leading-[16px] text-[12px]">12% above</span>
        <span className="leading-[16px] text-[12px] text-black">{` `}</span>
        <span className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] text-[12px] text-black">baseline</span>
      </p>
    </div>
  );
}

function Container259() {
  return (
    <div className="absolute h-[16px] left-[16px] top-[60px] w-[311px]" data-name="Container5">
      <Strength />
      <Paragraph50 />
    </div>
  );
}

function Icon59() {
  return (
    <div className="h-px overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 1">
            <path d="M0 0.5H311" id="Line 4" stroke="var(--stroke-0, #F2F2F2)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container264() {
  return (
    <div className="content-stretch flex flex-col h-px items-start relative shrink-0 w-full" data-name="Container">
      <Icon59 />
    </div>
  );
}

function Container263() {
  return (
    <div className="content-stretch flex flex-col h-0 items-start pt-[-1px] relative shrink-0 w-full" data-name="Container">
      <Container264 />
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[11px] top-[-1px] w-[311px]">{`This composite score reflects Dr. Moreno's experience caring for patients with gastrointestinal conditions and how closely his treatment decisions align with established, evidence-based gastroenterology guidelines.`}</p>
    </div>
  );
}

function Container262() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[77px] items-start left-[16px] pt-px top-[82px] w-[311px]" data-name="Container7">
      <Container263 />
      <Paragraph51 />
    </div>
  );
}

function Container247() {
  return (
    <div className="absolute bg-white h-[171px] left-0 overflow-clip rounded-[12px] top-0 w-[343px]" data-name="Container">
      <Container248 />
      <Container258 />
      <Container259 />
      <Container262 />
    </div>
  );
}

function Container267() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[94.813px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[-1px] whitespace-nowrap">Care approach</p>
    </div>
  );
}

function Bar3() {
  return (
    <div className="absolute contents inset-0" data-name="Bar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 15">
        <path d={svgPaths.p3467af00} fill="var(--fill-0, #EAFAF1)" id="Vector" />
      </svg>
      <div className="absolute inset-[0_28.35%_0_0]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 15">
          <path d={svgPaths.p10e10500} fill="url(#paint0_linear_218_7489)" id="Rectangle 26" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_218_7489" x1="91" x2="0" y1="7.49997" y2="7.49997">
              <stop offset="0.163462" stopColor="#008961" />
              <stop offset="1" stopColor="#00AB7E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon60() {
  return (
    <div className="h-[15px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Bar3 />
    </div>
  );
}

function Bar2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[15px] items-start left-0 top-[2px] w-[127px]" data-name="Bar1">
      <Icon60 />
    </div>
  );
}

function Container271() {
  return (
    <div className="h-[22px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container270() {
  return (
    <div className="absolute bg-[#3b3b3b] content-stretch flex flex-col h-[18px] items-start left-[79px] pt-[-2px] px-[-2px] rounded-[10px] top-0 w-[2px]" data-name="Container">
      <Container271 />
    </div>
  );
}

function Container269() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[127px]" data-name="Container11">
      <Bar2 />
      <Container270 />
    </div>
  );
}

function Icon61() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.60938 12">
        <path d={svgPaths.p31548c00} fill="var(--fill-0, #6D6D6D)" id="Vector" />
      </svg>
    </div>
  );
}

function Container275() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[0.195px] relative size-full">
        <Icon61 />
      </div>
    </div>
  );
}

function Container274() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[3.305px] pr-[1.695px] relative size-full">
          <Container275 />
        </div>
      </div>
    </div>
  );
}

function Container273() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[12px]" data-name="Container">
      <Container274 />
    </div>
  );
}

function Container272() {
  return (
    <div className="absolute left-[139px] size-[12px] top-[3px]" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[12px] top-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Container273 />
        </div>
      </div>
    </div>
  );
}

function Container268() {
  return (
    <div className="absolute h-[18px] left-[160px] top-px w-[151px]" data-name="Container10">
      <Container269 />
      <Container272 />
    </div>
  );
}

function Container266() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[12px] w-[311px]" data-name="Container9">
      <Container267 />
      <Container268 />
    </div>
  );
}

function Container276() {
  return (
    <div className="absolute h-[16px] left-[16px] top-[38px] w-[311px]" data-name="Container12">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[12px] top-0 whitespace-nowrap">Use of evidence-based care</p>
    </div>
  );
}

function Container265() {
  return (
    <div className="absolute bg-white h-[66px] left-0 overflow-clip rounded-[12px] top-[177px] w-[343px]" data-name="Container8">
      <Container266 />
      <Container276 />
    </div>
  );
}

function Container279() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[98.625px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[-1px] whitespace-nowrap">Cost efficiency</p>
    </div>
  );
}

function Bar5() {
  return (
    <div className="absolute contents inset-0" data-name="Bar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 15">
        <path d={svgPaths.p3467af00} fill="var(--fill-0, #EAFAF1)" id="Vector" />
      </svg>
      <div className="absolute inset-[0_23.62%_0_0]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 15">
          <path d={svgPaths.p29b7d700} fill="url(#paint0_linear_218_7487)" id="Rectangle 26" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_218_7487" x1="97" x2="0" y1="7.49997" y2="7.49997">
              <stop offset="0.163462" stopColor="#008961" />
              <stop offset="1" stopColor="#00AB7E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon62() {
  return (
    <div className="h-[15px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Bar5 />
    </div>
  );
}

function Bar4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[15px] items-start left-0 top-[2px] w-[127px]" data-name="Bar2">
      <Icon62 />
    </div>
  );
}

function Container283() {
  return (
    <div className="h-[22px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container282() {
  return (
    <div className="absolute bg-[#3b3b3b] content-stretch flex flex-col h-[18px] items-start left-[80px] pt-[-2px] px-[-2px] rounded-[10px] top-0 w-[2px]" data-name="Container">
      <Container283 />
    </div>
  );
}

function Container281() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[127px]" data-name="Container16">
      <Bar4 />
      <Container282 />
    </div>
  );
}

function Icon63() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.60938 12">
        <path d={svgPaths.p31548c00} fill="var(--fill-0, #6D6D6D)" id="Vector" />
      </svg>
    </div>
  );
}

function Container287() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[0.195px] relative size-full">
        <Icon63 />
      </div>
    </div>
  );
}

function Container286() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[3.305px] pr-[1.695px] relative size-full">
          <Container287 />
        </div>
      </div>
    </div>
  );
}

function Container285() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[12px]" data-name="Container">
      <Container286 />
    </div>
  );
}

function Container284() {
  return (
    <div className="absolute left-[139px] size-[12px] top-[3px]" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[12px] top-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Container285 />
        </div>
      </div>
    </div>
  );
}

function Container280() {
  return (
    <div className="absolute h-[18px] left-[160px] top-px w-[151px]" data-name="Container15">
      <Container281 />
      <Container284 />
    </div>
  );
}

function Container278() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[12px] w-[311px]" data-name="Container14">
      <Container279 />
      <Container280 />
    </div>
  );
}

function Container288() {
  return (
    <div className="absolute h-[16px] left-[16px] top-[38px] w-[311px]" data-name="Container17">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[12px] top-0 whitespace-nowrap">Avoids unnecessary tests or procedures</p>
    </div>
  );
}

function Container277() {
  return (
    <div className="absolute bg-white h-[66px] left-0 overflow-clip rounded-[12px] top-[249px] w-[343px]" data-name="Container13">
      <Container278 />
      <Container288 />
    </div>
  );
}

function Below() {
  return (
    <div className="absolute bg-[#fafafa] h-[315px] left-[303px] overflow-clip top-[36px] w-[343px]" data-name="Below">
      <Container247 />
      <Container265 />
      <Container277 />
    </div>
  );
}

function Container290() {
  return (
    <div className="h-[14px] relative rounded-[11px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Container289() {
  return (
    <div className="absolute bg-[#3b3b3b] content-stretch flex flex-col h-[12px] items-start left-0 pt-[-1px] px-[-1px] rounded-[10px] top-[2px] w-[2px]" data-name="Container">
      <Container290 />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="absolute h-[16px] left-[8px] top-0 w-[100.188px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[16px] left-[50.5px] text-[#3b3b3b] text-[11px] text-center top-[-1px] whitespace-nowrap">CareMatch baseline</p>
    </div>
  );
}

function Vector4() {
  return (
    <div className="absolute contents inset-0" data-name="Vector">
      <div className="absolute bottom-[65.63%] left-[43.75%] right-[46.88%] top-1/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 1.125">
          <path d={svgPaths.p2f8aaff0} fill="var(--fill-0, #6D6D6D)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.63%_37.5%_28.13%_40.63%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.625 3.75">
          <path d={svgPaths.p26fe6a00} fill="var(--fill-0, #6D6D6D)" id="Vector" />
        </svg>
      </div>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path clipRule="evenodd" d={svgPaths.p1d701480} fill="var(--fill-0, #6D6D6D)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Icon64() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Vector4 />
    </div>
  );
}

function Container291() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[114.19px] overflow-clip size-[12px] top-[2px]" data-name="Container">
      <Icon64 />
    </div>
  );
}

function Item() {
  return (
    <div className="absolute h-[16px] left-[16px] top-0 w-[143.5px]" data-name="Item">
      <Container289 />
      <Paragraph52 />
      <Container291 />
    </div>
  );
}

function Container292() {
  return <div className="absolute left-[183.5px] rounded-[2px] size-[12px] top-[2px]" style={{ backgroundImage: "linear-gradient(rgb(0, 137, 97) 16.346%, rgb(0, 145, 104) 37.26%, rgb(0, 154, 111) 58.173%, rgb(0, 162, 119) 79.087%, rgb(0, 171, 126) 100%)" }} data-name="Container" />;
}

function Paragraph53() {
  return (
    <div className="absolute h-[16px] left-[201.5px] top-0 w-[55.953px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[16px] left-[28px] text-[#3b3b3b] text-[11px] text-center top-[-1px] whitespace-nowrap">Dr. Moreno</p>
    </div>
  );
}

function Key() {
  return (
    <div className="absolute h-[16px] left-[303px] top-[363px] w-[343px]" data-name="Key">
      <Item />
      <Container292 />
      <Paragraph53 />
    </div>
  );
}

function StyleGuide17() {
  return (
    <div className="h-[379px] relative shrink-0 w-full" data-name="StyleGuide">
      <Paragraph48 />
      <Below />
      <Key />
    </div>
  );
}

function Container246() {
  return (
    <div className="bg-[#f3f4f6] h-[427px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <StyleGuide17 />
      </div>
    </div>
  );
}

function ComponentCard18() {
  return (
    <div className="bg-white h-[514px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container245 />
          <Container246 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container244() {
  return (
    <div className="bg-[#f9fafb] h-[562px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <ComponentCard18 />
      </div>
    </div>
  );
}

function CategorySection5() {
  return (
    <div className="content-stretch flex flex-col h-[623px] items-start pb-px relative shrink-0 w-full" data-name="CategorySection">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Button11 />
      <Container244 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="h-[28px] relative shrink-0 w-[220.609px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">My Health Components</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[10.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">▼</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Heading26 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Heading27() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">SearchField</p>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Generic search field with customizable placeholder (non-functional UI)</p>
    </div>
  );
}

function Container294() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading27 />
        <Paragraph54 />
      </div>
    </div>
  );
}

function Container297() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[48px] left-0 rounded-[8px] top-0 w-[448px]" data-name="Container" />;
}

function Icon65() {
  return (
    <div className="h-[19.625px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.625 19.625">
        <path d={svgPaths.p37ed1380} fill="var(--fill-0, #3B3B3B)" id="Vector" />
      </svg>
    </div>
  );
}

function Container300() {
  return (
    <div className="content-stretch flex flex-col h-[19.625px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon65 />
    </div>
  );
}

function Container299() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] overflow-clip pl-[0.172px] pr-[0.203px] pt-[0.172px] size-[20px] top-[14px]" data-name="Container">
      <Container300 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center left-[52px] overflow-clip top-[12px] w-[380px]" data-name="Text Input">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6d6d6d] text-[16px] whitespace-nowrap">Provider, date, visit type</p>
    </div>
  );
}

function Container298() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[448px]" data-name="Container">
      <Container299 />
      <TextInput1 />
    </div>
  );
}

function StyleGuide18() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container297 />
        <Container298 />
      </div>
    </div>
  );
}

function Container296() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide18 />
        </div>
      </div>
    </div>
  );
}

function Container295() {
  return (
    <div className="bg-[#f3f4f6] h-[96px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container296 />
      </div>
    </div>
  );
}

function ComponentCard19() {
  return (
    <div className="bg-white h-[183px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container294 />
          <Container295 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading28() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">FilterBar</p>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Generic filter display with icon chips (non-functional UI)</p>
    </div>
  );
}

function Container301() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading28 />
        <Paragraph55 />
      </div>
    </div>
  );
}

function Container304() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[52px] left-0 rounded-[16px] top-0 w-[448px]" data-name="Container" />;
}

function Container305() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[16px] w-[55px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[27.5px] text-[14px] text-black text-center top-[-1px] whitespace-nowrap">{`Showing `}</p>
    </div>
  );
}

function Icon66() {
  return (
    <div className="h-[14.125px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_0_0.01%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0006 14.1242">
          <path clipRule="evenodd" d={svgPaths.p2e6a5d80} fill="var(--fill-0, #0012E7)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function StyleGuide20() {
  return (
    <div className="content-stretch flex flex-col h-[14.125px] items-start relative shrink-0 w-full" data-name="StyleGuide">
      <Icon66 />
    </div>
  );
}

function Container306() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pt-[0.938px] size-[16px] top-[2px]" data-name="Container">
      <StyleGuide20 />
    </div>
  );
}

function Container307() {
  return (
    <div className="absolute h-[20px] left-[20px] top-0 w-[67.563px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[34px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">everything</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute h-[20px] left-[79px] rounded-[24px] top-[16px] w-[87.563px]" data-name="Button">
      <Container306 />
      <Container307 />
    </div>
  );
}

function StyleGuide19() {
  return (
    <div className="bg-white h-[52px] relative rounded-[16px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container304 />
        <Container305 />
        <Button13 />
      </div>
    </div>
  );
}

function Container303() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide19 />
        </div>
      </div>
    </div>
  );
}

function Container302() {
  return (
    <div className="bg-[#f3f4f6] h-[100px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container303 />
      </div>
    </div>
  );
}

function ComponentCard20() {
  return (
    <div className="bg-white h-[187px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container301 />
          <Container302 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading29() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Chip</p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Small tag/pill for status, categories, or filters</p>
    </div>
  );
}

function Container308() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading29 />
        <Paragraph56 />
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[44.859px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[22.5px] text-[#005330] text-[12px] text-center top-0 whitespace-nowrap">Success</p>
    </div>
  );
}

function Chip() {
  return (
    <div className="absolute bg-[#eafaf1] h-[24px] left-[16px] rounded-[8px] top-[16px] w-[60.859px]" data-name="Chip">
      <Paragraph57 />
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[44.938px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[22.5px] text-[#662600] text-[12px] text-center top-0 whitespace-nowrap">Warning</p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="absolute bg-[#fcf4e6] h-[24px] left-[84.86px] rounded-[8px] top-[16px] w-[60.938px]" data-name="Chip">
      <Paragraph58 />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[21.453px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[11px] text-[#002380] text-[12px] text-center top-0 whitespace-nowrap">Info</p>
    </div>
  );
}

function Chip2() {
  return (
    <div className="absolute bg-[#e6effe] h-[24px] left-[153.8px] rounded-[8px] top-[16px] w-[37.453px]" data-name="Chip">
      <Paragraph59 />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[40.328px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[20.5px] text-[#3b3b3b] text-[12px] text-center top-0 whitespace-nowrap">Neutral</p>
    </div>
  );
}

function Chip3() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[24px] left-[199.25px] rounded-[8px] top-[16px] w-[56.328px]" data-name="Chip">
      <Paragraph60 />
    </div>
  );
}

function StyleGuide21() {
  return (
    <div className="bg-white h-[56px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Chip />
        <Chip1 />
        <Chip2 />
        <Chip3 />
      </div>
    </div>
  );
}

function Container310() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide21 />
        </div>
      </div>
    </div>
  );
}

function Container309() {
  return (
    <div className="bg-[#f3f4f6] h-[104px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container310 />
      </div>
    </div>
  );
}

function ComponentCard21() {
  return (
    <div className="bg-white h-[191px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container308 />
          <Container309 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading30() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">PillIcon</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Medication pill icon with tone variants</p>
    </div>
  );
}

function Container311() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading30 />
        <Paragraph61 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[14.94%_18.66%_75.91%_62.45%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.46319 2.15998">
          <path d={svgPaths.pdfcde00} fill="var(--fill-0, #00835D)" id="Vector" />
        </svg>
      </div>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.625 23.625">
        <path clipRule="evenodd" d={svgPaths.p25e52f00} fill="var(--fill-0, #00835D)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Icon67() {
  return (
    <div className="h-[23.625px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group2 />
    </div>
  );
}

function Container315() {
  return (
    <div className="content-stretch flex flex-col h-[23.625px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon67 />
    </div>
  );
}

function PillIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.69px] overflow-clip pt-[0.188px] px-[0.188px] size-[24px] top-0" data-name="PillIcon">
      <Container315 />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[32px] w-[47.391px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Success</p>
    </div>
  );
}

function Container314() {
  return (
    <div className="h-[48px] relative shrink-0 w-[47.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PillIcon />
        <Paragraph62 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[14.94%_18.66%_75.91%_62.45%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.46319 2.15998">
          <path d={svgPaths.pdfcde00} fill="var(--fill-0, #A55600)" id="Vector" />
        </svg>
      </div>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.625 23.625">
        <path clipRule="evenodd" d={svgPaths.p25e52f00} fill="var(--fill-0, #A55600)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Icon68() {
  return (
    <div className="h-[23.625px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group3 />
    </div>
  );
}

function Container317() {
  return (
    <div className="content-stretch flex flex-col h-[23.625px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon68 />
    </div>
  );
}

function PillIcon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.31px] overflow-clip pt-[0.188px] px-[0.188px] size-[24px] top-0" data-name="PillIcon">
      <Container317 />
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[32px] w-[46.625px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Warning</p>
    </div>
  );
}

function Container316() {
  return (
    <div className="h-[48px] relative shrink-0 w-[46.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PillIcon1 />
        <Paragraph63 />
      </div>
    </div>
  );
}

function StyleGuide22() {
  return (
    <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
        <Container314 />
        <Container316 />
      </div>
    </div>
  );
}

function Container313() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide22 />
        </div>
      </div>
    </div>
  );
}

function Container312() {
  return (
    <div className="bg-[#f3f4f6] h-[128px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container313 />
      </div>
    </div>
  );
}

function ComponentCard22() {
  return (
    <div className="bg-white h-[215px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container311 />
          <Container312 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading31() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">MedicationListItem</p>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Medication list item with pill icon, chip, and details</p>
    </div>
  );
}

function Container318() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading31 />
        <Paragraph64 />
      </div>
    </div>
  );
}

function Icon69() {
  return (
    <div className="absolute left-0 size-[56px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g clipPath="url(#clip0_218_7474)" id="Icon">
          <path d={svgPaths.p17515680} fill="var(--fill-0, #F7FBF9)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_218_7474">
            <rect fill="white" height="56" width="56" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[14.94%_18.66%_75.91%_62.45%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.46319 2.15998">
          <path d={svgPaths.pdfcde00} fill="var(--fill-0, #00835D)" id="Vector" />
        </svg>
      </div>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.625 23.625">
        <path clipRule="evenodd" d={svgPaths.p25e52f00} fill="var(--fill-0, #00835D)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Icon70() {
  return (
    <div className="h-[23.625px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group4 />
    </div>
  );
}

function Container322() {
  return (
    <div className="content-stretch flex flex-col h-[23.625px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon70 />
    </div>
  );
}

function PillIcon2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15.98px] overflow-clip pt-[0.188px] px-[0.188px] size-[24px] top-[15.98px]" data-name="PillIcon">
      <Container322 />
    </div>
  );
}

function Container321() {
  return (
    <div className="absolute left-0 overflow-clip size-[56px] top-[26px]" data-name="Container">
      <Icon69 />
      <PillIcon2 />
    </div>
  );
}

function Container323() {
  return (
    <div className="absolute h-[24px] left-[72px] top-[16px] w-[312px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Metformin</p>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[64.906px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[32.5px] text-[#005330] text-[12px] text-center top-0 whitespace-nowrap">Just started</p>
    </div>
  );
}

function Chip4() {
  return (
    <div className="absolute bg-[#eafaf1] h-[24px] left-[72px] rounded-[8px] top-[44px] w-[80.906px]" data-name="Chip">
      <Paragraph65 />
    </div>
  );
}

function Container324() {
  return (
    <div className="absolute h-[20px] left-[72px] top-[72px] w-[312px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[-1px] whitespace-nowrap">4 weeks to go</p>
    </div>
  );
}

function Icon71() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8125 16">
        <path d={svgPaths.pe522700} fill="var(--fill-0, #0012E7)" id="Vector" />
      </svg>
    </div>
  );
}

function Container325() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon71 />
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[400px] overflow-clip pl-[4.656px] pr-[2.531px] size-[16px] top-[46px]" data-name="Button">
      <Container325 />
    </div>
  );
}

function MedicationListItem() {
  return (
    <div className="h-[108px] relative shrink-0 w-full" data-name="MedicationListItem">
      <Container321 />
      <Container323 />
      <Chip4 />
      <Container324 />
      <Button14 />
    </div>
  );
}

function StyleGuide23() {
  return (
    <div className="bg-white h-[140px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <MedicationListItem />
      </div>
    </div>
  );
}

function Container320() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide23 />
        </div>
      </div>
    </div>
  );
}

function Container319() {
  return (
    <div className="bg-[#f3f4f6] h-[188px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container320 />
      </div>
    </div>
  );
}

function ComponentCard23() {
  return (
    <div className="bg-white h-[275px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container318 />
          <Container319 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading32() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ActivityListItem - Chevron</p>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Past activity item with chevron for navigation</p>
    </div>
  );
}

function Container326() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading32 />
        <Paragraph66 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute font-['Figtree:Medium',sans-serif] font-medium h-[48px] left-0 top-[8px] w-[384px] whitespace-nowrap" data-name="Button">
      <p className="absolute leading-[24px] left-0 text-[16px] text-black top-[-1px]">Visit with Dr. Elena Marquez, MD</p>
      <p className="absolute leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[27px]">Mar 13, 2026 at 2:15 PM</p>
    </div>
  );
}

function Icon72() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8125 16">
        <path d={svgPaths.pe522700} fill="var(--fill-0, #0012E7)" id="Vector" />
      </svg>
    </div>
  );
}

function Container329() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon72 />
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[400px] overflow-clip pl-[4.656px] pr-[2.531px] size-[16px] top-[24px]" data-name="Button">
      <Container329 />
    </div>
  );
}

function Container330() {
  return <div className="absolute bg-[#e1e1e1] h-px left-0 top-[71px] w-[416px]" data-name="Container" />;
}

function ActivityListItem() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="ActivityListItem">
      <Button15 />
      <Button16 />
      <Container330 />
    </div>
  );
}

function StyleGuide24() {
  return (
    <div className="bg-white h-[104px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <ActivityListItem />
      </div>
    </div>
  );
}

function Container328() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide24 />
        </div>
      </div>
    </div>
  );
}

function Container327() {
  return (
    <div className="bg-[#f3f4f6] h-[152px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container328 />
      </div>
    </div>
  );
}

function ComponentCard24() {
  return (
    <div className="bg-white h-[239px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container326 />
          <Container327 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading33() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ActivityListItem - Icon Button</p>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Upcoming activity item with calendar add button</p>
    </div>
  );
}

function Container331() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading33 />
        <Paragraph67 />
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute font-['Figtree:Medium',sans-serif] font-medium h-[48px] left-0 top-[12px] w-[364px] whitespace-nowrap" data-name="Button">
      <p className="absolute leading-[24px] left-0 text-[16px] text-black top-[-1px]">Visit with Maria Gonzales, RDN</p>
      <p className="absolute leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[27px]">May 7, 2026 at 2:15 PM</p>
    </div>
  );
}

function Icon73() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p1199c300} fill="var(--fill-0, #F2F2F2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container334() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2px] size-[32px] top-[12px]" data-name="Container">
      <Icon73 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[0_22.92%_22.92%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7917 10.7917">
          <path d={svgPaths.p189a2500} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.83%_0_0_45.83%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5833 7.58331">
          <path clipRule="evenodd" d={svgPaths.p2d4fcc00} fill="var(--fill-0, #0012E7)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon74() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group5 />
    </div>
  );
}

function Container335() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11px] overflow-clip size-[14px] top-[21px]" data-name="Container">
      <Icon74 />
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute h-[56px] left-[380px] top-[8px] w-[36px]" data-name="Button">
      <Container334 />
      <Container335 />
    </div>
  );
}

function Container336() {
  return <div className="absolute bg-[#e1e1e1] h-px left-0 top-[79px] w-[416px]" data-name="Container" />;
}

function ActivityListItem1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="ActivityListItem">
      <Button17 />
      <Button18 />
      <Container336 />
    </div>
  );
}

function StyleGuide25() {
  return (
    <div className="bg-white h-[112px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <ActivityListItem1 />
      </div>
    </div>
  );
}

function Container333() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide25 />
        </div>
      </div>
    </div>
  );
}

function Container332() {
  return (
    <div className="bg-[#f3f4f6] h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container333 />
      </div>
    </div>
  );
}

function ComponentCard25() {
  return (
    <div className="bg-white h-[247px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container331 />
          <Container332 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading34() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ActivityListItem - No Action</p>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Activity item with no action icon (data only)</p>
    </div>
  );
}

function Container337() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading34 />
        <Paragraph68 />
      </div>
    </div>
  );
}

function ActivityListItem2() {
  return (
    <div className="font-['Figtree:Medium',sans-serif] font-medium h-[72px] relative shrink-0 w-full whitespace-nowrap" data-name="ActivityListItem">
      <p className="absolute leading-[24px] left-0 text-[16px] text-black top-[7px]">Lipid panel results posted</p>
      <p className="absolute leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[35px]">Apr 18, 2026</p>
    </div>
  );
}

function StyleGuide26() {
  return (
    <div className="bg-white h-[104px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <ActivityListItem2 />
      </div>
    </div>
  );
}

function Container339() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide26 />
        </div>
      </div>
    </div>
  );
}

function Container338() {
  return (
    <div className="bg-[#f3f4f6] h-[152px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container339 />
      </div>
    </div>
  );
}

function ComponentCard26() {
  return (
    <div className="bg-white h-[239px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container337 />
          <Container338 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading35() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Grouped Activities Example</p>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Activity list grouped by upcoming and past months</p>
    </div>
  );
}

function Container340() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading35 />
        <Paragraph69 />
      </div>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#6d6d6d] text-[16px] top-[-1px] whitespace-nowrap">Upcoming</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute font-['Figtree:Medium',sans-serif] font-medium h-[48px] left-0 top-[12px] w-[364px] whitespace-nowrap" data-name="Button">
      <p className="absolute leading-[24px] left-0 text-[16px] text-black top-[-1px]">Visit with Dr. Elena Marquez, MD</p>
      <p className="absolute leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[27px]">May 14, 2026 at 10:30 AM</p>
    </div>
  );
}

function Icon75() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p1199c300} fill="var(--fill-0, #F2F2F2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container345() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2px] size-[32px] top-[12px]" data-name="Container">
      <Icon75 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[0_22.92%_22.92%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7917 10.7917">
          <path d={svgPaths.p189a2500} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.83%_0_0_45.83%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5833 7.58331">
          <path clipRule="evenodd" d={svgPaths.p2d4fcc00} fill="var(--fill-0, #0012E7)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon76() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group6 />
    </div>
  );
}

function Container346() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11px] overflow-clip size-[14px] top-[21px]" data-name="Container">
      <Icon76 />
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute h-[56px] left-[380px] top-[8px] w-[36px]" data-name="Button">
      <Container345 />
      <Container346 />
    </div>
  );
}

function Container347() {
  return <div className="absolute bg-[#e1e1e1] h-px left-0 top-[79px] w-[416px]" data-name="Container" />;
}

function ActivityListItem3() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[416px]" data-name="ActivityListItem">
      <Button19 />
      <Button20 />
      <Container347 />
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute font-['Figtree:Medium',sans-serif] font-medium h-[48px] left-0 top-[12px] w-[364px] whitespace-nowrap" data-name="Button">
      <p className="absolute leading-[24px] left-0 text-[16px] text-black top-[-1px]">Visit with Maria Gonzales, RDN</p>
      <p className="absolute leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[27px]">May 7, 2026 at 2:15 PM</p>
    </div>
  );
}

function Icon77() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p1199c300} fill="var(--fill-0, #F2F2F2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container348() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2px] size-[32px] top-[12px]" data-name="Container">
      <Icon77 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[0_22.92%_22.92%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7917 10.7917">
          <path d={svgPaths.p189a2500} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.83%_0_0_45.83%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5833 7.58331">
          <path clipRule="evenodd" d={svgPaths.p2d4fcc00} fill="var(--fill-0, #0012E7)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon78() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group7 />
    </div>
  );
}

function Container349() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11px] overflow-clip size-[14px] top-[21px]" data-name="Container">
      <Icon78 />
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute h-[56px] left-[380px] top-[8px] w-[36px]" data-name="Button">
      <Container348 />
      <Container349 />
    </div>
  );
}

function ActivityListItem4() {
  return (
    <div className="absolute h-[80px] left-0 top-[80px] w-[416px]" data-name="ActivityListItem">
      <Button21 />
      <Button22 />
    </div>
  );
}

function Container344() {
  return (
    <div className="absolute h-[160px] left-0 top-[32px] w-[416px]" data-name="Container">
      <ActivityListItem3 />
      <ActivityListItem4 />
    </div>
  );
}

function Container343() {
  return (
    <div className="h-[192px] relative shrink-0 w-full" data-name="Container">
      <Paragraph70 />
      <Container344 />
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#6d6d6d] text-[16px] top-[-1px] whitespace-nowrap">March 2026</p>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute font-['Figtree:Medium',sans-serif] font-medium h-[48px] left-0 top-[8px] w-[384px] whitespace-nowrap" data-name="Button">
      <p className="absolute leading-[24px] left-0 text-[16px] text-black top-[-1px]">Visit with Dr. Elena Marquez, MD</p>
      <p className="absolute leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[27px]">Mar 13, 2026 at 2:15 PM</p>
    </div>
  );
}

function Icon79() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8125 16">
        <path d={svgPaths.pe522700} fill="var(--fill-0, #0012E7)" id="Vector" />
      </svg>
    </div>
  );
}

function Container352() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon79 />
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[400px] overflow-clip pl-[4.656px] pr-[2.531px] size-[16px] top-[24px]" data-name="Button">
      <Container352 />
    </div>
  );
}

function Container353() {
  return <div className="absolute bg-[#e1e1e1] h-px left-0 top-[71px] w-[416px]" data-name="Container" />;
}

function ActivityListItem5() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[416px]" data-name="ActivityListItem">
      <Button23 />
      <Button24 />
      <Container353 />
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute font-['Figtree:Medium',sans-serif] font-medium h-[48px] left-0 top-[8px] w-[384px] whitespace-nowrap" data-name="Button">
      <p className="absolute leading-[24px] left-0 text-[16px] text-black top-[-1px]">Visit with Maria Gonzales, RDN</p>
      <p className="absolute leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[27px]">Mar 17, 2026 at 12:45 PM</p>
    </div>
  );
}

function Icon80() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8125 16">
        <path d={svgPaths.pe522700} fill="var(--fill-0, #0012E7)" id="Vector" />
      </svg>
    </div>
  );
}

function Container354() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon80 />
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[400px] overflow-clip pl-[4.656px] pr-[2.531px] size-[16px] top-[24px]" data-name="Button">
      <Container354 />
    </div>
  );
}

function ActivityListItem6() {
  return (
    <div className="absolute h-[72px] left-0 top-[72px] w-[416px]" data-name="ActivityListItem">
      <Button25 />
      <Button26 />
    </div>
  );
}

function Container351() {
  return (
    <div className="absolute h-[144px] left-0 top-[32px] w-[416px]" data-name="Container">
      <ActivityListItem5 />
      <ActivityListItem6 />
    </div>
  );
}

function Container350() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <Paragraph71 />
      <Container351 />
    </div>
  );
}

function StyleGuide27() {
  return (
    <div className="bg-white h-[416px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
        <Container343 />
        <Container350 />
      </div>
    </div>
  );
}

function Container342() {
  return (
    <div className="h-[416px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide27 />
        </div>
      </div>
    </div>
  );
}

function Container341() {
  return (
    <div className="bg-[#f3f4f6] h-[464px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container342 />
      </div>
    </div>
  );
}

function ComponentCard27() {
  return (
    <div className="bg-white h-[551px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container340 />
          <Container341 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading36() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">CareTeamMemberCard - Internal Provider</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Internal IH provider card with star badge and appointment slots</p>
    </div>
  );
}

function Container355() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading36 />
        <Paragraph72 />
      </div>
    </div>
  );
}

function Container358() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[280px] left-0 rounded-[24px] top-0 w-[448px]" data-name="Container" />;
}

function ImageErrorLoadingImage() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Image (Error loading image)">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g clipPath="url(#clip0_218_7532)" id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
        </g>
        <defs>
          <clipPath id="clip0_218_7532">
            <rect fill="white" height="48" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container362() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[48px] top-0" data-name="Container">
      <ImageErrorLoadingImage />
    </div>
  );
}

function Icon81() {
  return (
    <div className="h-[16.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[2.18%_2.27%]" data-name="Vector">
        <div className="absolute inset-[-2.28%_-2.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0009 16.6563">
            <path d={svgPaths.p7ce8100} fill="var(--fill-0, #0012E7)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.726352" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container364() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.656px] items-start left-0 top-[-0.33px] w-[16px]" data-name="Container">
      <Icon81 />
    </div>
  );
}

function Icon82() {
  return (
    <div className="h-[1.828px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82812 1.82812">
        <path d={svgPaths.p1aec7c80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container366() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4.09px] pt-[0.086px] px-[0.086px] size-[2px] top-[4.28px]" data-name="Container">
      <Icon82 />
    </div>
  );
}

function Icon83() {
  return (
    <div className="absolute h-[6.391px] left-0 overflow-clip top-[-0.2px] w-[6px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.39062">
        <g id="Group">
          <path d={svgPaths.p1a005000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p30ed2800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p18c1c400} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon84() {
  return (
    <div className="h-[1.828px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82812 1.82812">
        <path d={svgPaths.p25cfdd80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container367() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-0.09px] pt-[0.086px] px-[0.086px] size-[2px] top-[-0.28px]" data-name="Container">
      <Icon84 />
    </div>
  );
}

function Container365() {
  return (
    <div className="absolute left-[5px] size-[6px] top-[5.25px]" data-name="Container">
      <Container366 />
      <Icon83 />
      <Container367 />
    </div>
  );
}

function Container363() {
  return (
    <div className="absolute left-[32px] size-[16px] top-[32px]" data-name="Container">
      <Container364 />
      <Container365 />
    </div>
  );
}

function Container361() {
  return (
    <div className="absolute left-0 size-[48px] top-0" data-name="Container">
      <Container362 />
      <Container363 />
    </div>
  );
}

function Container368() {
  return (
    <div className="absolute h-[48px] left-[56px] top-0 w-[304px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-px">Elena Marquez, MD</p>
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[25px]">Internal Medicine</p>
    </div>
  );
}

function Icon85() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p1199c300} fill="var(--fill-0, #F2F2F2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container370() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[32px] top-[8px]" data-name="Container">
      <Icon85 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[0_0_0.01%_0]" data-name="Group">
      <div className="absolute inset-[0_0_72.92%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.8125 3.79167">
          <path d={svgPaths.p3ee66200} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.47%_0_36.45%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.8125 3.79167">
          <path d={svgPaths.p14b4a080} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[72.91%_0_0.01%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.8125 3.7916">
          <path d={svgPaths.p28539000} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon86() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group8 />
    </div>
  );
}

function Container372() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[0.094px] relative size-full">
        <Icon86 />
      </div>
    </div>
  );
}

function Container371() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] overflow-clip px-[5px] size-[14px] top-[17px]" data-name="Container">
      <Container372 />
    </div>
  );
}

function Container369() {
  return (
    <div className="absolute left-[368px] size-[48px] top-0" data-name="Container">
      <Container370 />
      <Container371 />
    </div>
  );
}

function Container360() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[416px]" data-name="Container">
      <Container361 />
      <Container368 />
      <Container369 />
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[50.125px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[25.5px] text-[#002380] text-[12px] text-center top-0 whitespace-nowrap">Your PCP</p>
    </div>
  );
}

function Container374() {
  return (
    <div className="absolute bg-[#e6effe] h-[24px] left-0 rounded-[8px] top-0 w-[66.125px]" data-name="Container">
      <Paragraph73 />
    </div>
  );
}

function Icon87() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5312 12">
        <path d={svgPaths.p2d8f5e00} fill="var(--fill-0, black)" id="Vector" />
      </svg>
    </div>
  );
}

function Container377() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Icon87 />
      </div>
    </div>
  );
}

function Container376() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] overflow-clip px-[0.234px] size-[12px] top-[6px]" data-name="Container">
      <Container377 />
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="absolute h-[16px] left-[24px] overflow-clip top-[4px] w-[92.484px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[46.5px] text-[12px] text-black text-center top-0 whitespace-nowrap">Last seen: 1/8/27</p>
    </div>
  );
}

function Container375() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[24px] left-[70.13px] rounded-[8px] top-0 w-[124.484px]" data-name="Container">
      <Container376 />
      <Paragraph74 />
    </div>
  );
}

function Container373() {
  return (
    <div className="absolute h-[24px] left-0 top-[60px] w-[194.609px]" data-name="Container">
      <Container374 />
      <Container375 />
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="absolute h-[48px] left-0 top-[96px] w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[12px] top-0 w-[416px]">Has strong back and spine expertise, prioritizes safe and non-invasive care, and stays engaged in your long-term recovery, referring to trusted specialists.</p>
    </div>
  );
}

function Container359() {
  return (
    <div className="absolute h-[144px] left-[16px] top-[16px] w-[416px]" data-name="Container">
      <Container360 />
      <Container373 />
      <Paragraph75 />
    </div>
  );
}

function Container378() {
  return (
    <div className="absolute h-[16px] left-[78.42px] top-[6px] w-[47.641px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[16px] left-[24px] text-[12px] text-center text-white top-0 whitespace-nowrap">4:00 pm</p>
    </div>
  );
}

function Container379() {
  return (
    <div className="absolute h-[16px] left-[87.31px] top-[22px] w-[29.859px]" data-name="Container">
      <p className="-translate-x-full absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[30px] text-[11px] text-right text-white top-[-1px] whitespace-nowrap">Today</p>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute bg-[#0012e7] h-[44px] left-[16px] rounded-[69px] top-[176px] w-[204.5px]" data-name="Button">
      <Container378 />
      <Container379 />
    </div>
  );
}

function Container380() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-[227.5px] rounded-[69px] top-[176px] w-[204.5px]" data-name="Container" />;
}

function Container382() {
  return (
    <div className="absolute h-[16px] left-[73.44px] top-[22px] w-[57.625px]" data-name="Container">
      <p className="-translate-x-full absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[58px] text-[#3b3b3b] text-[11px] text-right top-[-1px] whitespace-nowrap">Thu, Nov 13</p>
    </div>
  );
}

function Container381() {
  return (
    <div className="absolute h-[44px] left-[227.5px] top-[176px] w-[204.5px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[16px] left-[102.28px] text-[#0012e7] text-[12px] text-center top-[6px] whitespace-nowrap">12:30 pm</p>
      <Container382 />
    </div>
  );
}

function Container383() {
  return (
    <div className="absolute h-[20px] left-[110.25px] top-[8px] w-[195.5px]" data-name="Container">
      <p className="-translate-x-1/2 absolute decoration-solid font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[98px] text-[#001048] text-[14px] text-center top-[-1px] underline whitespace-nowrap">View full profile and availability</p>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute h-[36px] left-[16px] rounded-[24px] top-[228px] w-[416px]" data-name="Button">
      <Container383 />
    </div>
  );
}

function StyleGuide28() {
  return (
    <div className="bg-white h-[280px] relative rounded-[24px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container358 />
        <Container359 />
        <Button27 />
        <Container380 />
        <Container381 />
        <Button28 />
      </div>
    </div>
  );
}

function Container357() {
  return (
    <div className="h-[280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide28 />
        </div>
      </div>
    </div>
  );
}

function Container356() {
  return (
    <div className="bg-[#f3f4f6] h-[328px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container357 />
      </div>
    </div>
  );
}

function ComponentCard28() {
  return (
    <div className="bg-white h-[415px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container355 />
          <Container356 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading37() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">CareTeamMemberCard - External Specialist</p>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">External specialist card with schedule and view profile buttons</p>
    </div>
  );
}

function Container384() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading37 />
        <Paragraph76 />
      </div>
    </div>
  );
}

function Container387() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[256px] left-0 rounded-[24px] top-0 w-[448px]" data-name="Container" />;
}

function ImageErrorLoadingImage1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Image (Error loading image)">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g clipPath="url(#clip0_218_7532)" id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
        </g>
        <defs>
          <clipPath id="clip0_218_7532">
            <rect fill="white" height="48" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container390() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[48px] top-0" data-name="Container">
      <ImageErrorLoadingImage1 />
    </div>
  );
}

function Container391() {
  return (
    <div className="absolute h-[48px] left-[56px] top-0 w-[304px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-px">Joseph Moreno, MD</p>
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[25px]">Gastroenterology</p>
    </div>
  );
}

function Icon88() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p1199c300} fill="var(--fill-0, #F2F2F2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container393() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[32px] top-[8px]" data-name="Container">
      <Icon88 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[0_0_0.01%_0]" data-name="Group">
      <div className="absolute inset-[0_0_72.92%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.8125 3.79167">
          <path d={svgPaths.p3ee66200} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.47%_0_36.45%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.8125 3.79167">
          <path d={svgPaths.p14b4a080} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[72.91%_0_0.01%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.8125 3.7916">
          <path d={svgPaths.p28539000} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon89() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group9 />
    </div>
  );
}

function Container395() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[0.094px] relative size-full">
        <Icon89 />
      </div>
    </div>
  );
}

function Container394() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] overflow-clip px-[5px] size-[14px] top-[17px]" data-name="Container">
      <Container395 />
    </div>
  );
}

function Container392() {
  return (
    <div className="absolute left-[368px] size-[48px] top-0" data-name="Container">
      <Container393 />
      <Container394 />
    </div>
  );
}

function Container389() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[416px]" data-name="Container">
      <Container390 />
      <Container391 />
      <Container392 />
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[52.453px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[26.5px] text-[#002380] text-[12px] text-center top-0 whitespace-nowrap">Specialist</p>
    </div>
  );
}

function Container397() {
  return (
    <div className="absolute bg-[#e6effe] h-[24px] left-0 rounded-[8px] top-0 w-[68.453px]" data-name="Container">
      <Paragraph77 />
    </div>
  );
}

function Icon90() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5312 12">
        <path d={svgPaths.p2d8f5e00} fill="var(--fill-0, black)" id="Vector" />
      </svg>
    </div>
  );
}

function Container400() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Icon90 />
      </div>
    </div>
  );
}

function Container399() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] overflow-clip px-[0.234px] size-[12px] top-[6px]" data-name="Container">
      <Container400 />
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="absolute h-[16px] left-[24px] overflow-clip top-[4px] w-[92.484px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[46.5px] text-[12px] text-black text-center top-0 whitespace-nowrap">Last seen: 1/8/27</p>
    </div>
  );
}

function Container398() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[24px] left-[72.45px] rounded-[8px] top-0 w-[124.484px]" data-name="Container">
      <Container399 />
      <Paragraph78 />
    </div>
  );
}

function Container396() {
  return (
    <div className="absolute h-[24px] left-0 top-[60px] w-[196.938px]" data-name="Container">
      <Container397 />
      <Container398 />
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="absolute h-[32px] left-0 top-[96px] w-[416px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#3b3b3b] text-[12px] top-0 w-[416px]">Focuses on comprehensive care for all ages, emphasizing preventive measures and holistic health strategies.</p>
    </div>
  );
}

function Container388() {
  return (
    <div className="absolute h-[128px] left-[16px] top-[16px] w-[416px]" data-name="Container">
      <Container389 />
      <Container396 />
      <Paragraph79 />
    </div>
  );
}

function Container401() {
  return (
    <div className="absolute h-[20px] left-[135.88px] top-[8px] w-[144.234px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[72.5px] text-[14px] text-center text-white top-[-1px] whitespace-nowrap">Schedule appointment</p>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute bg-[#001048] h-[36px] left-[16px] rounded-[24px] top-[160px] w-[416px]" data-name="Button">
      <Container401 />
    </div>
  );
}

function Container402() {
  return <div className="absolute border border-[#002380] border-solid h-[36px] left-[16px] rounded-[24px] top-[204px] w-[416px]" data-name="Container" />;
}

function Container403() {
  return (
    <div className="absolute h-[36px] left-[16px] top-[204px] w-[416px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[208.03px] text-[#001048] text-[14px] text-center top-[7px] whitespace-nowrap">View full profile</p>
    </div>
  );
}

function StyleGuide29() {
  return (
    <div className="bg-white h-[256px] relative rounded-[24px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container387 />
        <Container388 />
        <Button29 />
        <Container402 />
        <Container403 />
      </div>
    </div>
  );
}

function Container386() {
  return (
    <div className="h-[256px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide29 />
        </div>
      </div>
    </div>
  );
}

function Container385() {
  return (
    <div className="bg-[#f3f4f6] h-[304px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container386 />
      </div>
    </div>
  );
}

function ComponentCard29() {
  return (
    <div className="bg-white h-[391px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container384 />
          <Container385 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container293() {
  return (
    <div className="bg-[#f9fafb] h-[3501px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[24px] px-[24px] relative size-full">
        <ComponentCard19 />
        <ComponentCard20 />
        <ComponentCard21 />
        <ComponentCard22 />
        <ComponentCard23 />
        <ComponentCard24 />
        <ComponentCard25 />
        <ComponentCard26 />
        <ComponentCard27 />
        <ComponentCard28 />
        <ComponentCard29 />
      </div>
    </div>
  );
}

function CategorySection6() {
  return (
    <div className="content-stretch flex flex-col h-[3562px] items-start pb-px relative shrink-0 w-full" data-name="CategorySection">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Button12 />
      <Container293 />
    </div>
  );
}

function Heading38() {
  return (
    <div className="h-[28px] relative shrink-0 w-[207.625px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Get Care Components</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[10.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">▼</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Heading38 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Heading39() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ForYouItem</p>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Personalized content card with image, chips, and summary</p>
    </div>
  );
}

function Container405() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading39 />
        <Paragraph80 />
      </div>
    </div>
  );
}

function Container408() {
  return <div className="absolute border-[#e1e1e1] border-b border-solid h-[268px] left-0 top-0 w-[416px]" data-name="Container" />;
}

function Image1() {
  return (
    <div className="absolute h-[132px] left-0 top-0 w-[384px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Icon91() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p1199c300} fill="var(--fill-0, #F2F2F2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container410() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[32px] top-[8px]" data-name="Container">
      <Icon91 />
    </div>
  );
}

function Vector5() {
  return (
    <div className="absolute contents inset-[0_0_0.01%_0]" data-name="Vector">
      <div className="absolute inset-[0_0_68.86%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6875 4.36022">
          <path clipRule="evenodd" d={svgPaths.p27d9ca80} fill="var(--fill-0, #0012E7)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.47%_10%_0.01%_10%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.34993 8.7528">
          <path clipRule="evenodd" d={svgPaths.p197d7972} fill="var(--fill-0, #0012E7)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon92() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Vector5 />
    </div>
  );
}

function Container412() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[0.156px] relative size-full">
        <Icon92 />
      </div>
    </div>
  );
}

function Container411() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] overflow-clip px-px size-[14px] top-[17px]" data-name="Container">
      <Container412 />
    </div>
  );
}

function ButtonRemoveItem() {
  return (
    <div className="absolute left-[328px] size-[48px] top-[7px]" data-name="Button - Remove item">
      <Container410 />
      <Container411 />
    </div>
  );
}

function Container409() {
  return (
    <div className="absolute h-[120px] left-[16px] overflow-clip rounded-[16px] top-[16px] w-[384px]" data-name="Container">
      <Image1 />
      <ButtonRemoveItem />
    </div>
  );
}

function Container413() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[152px] w-[196.844px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Pregnancy Nutrition Guide</p>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[48.891px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[24.5px] text-[#002380] text-[12px] text-center top-0 whitespace-nowrap">Nutrition</p>
    </div>
  );
}

function Chip5() {
  return (
    <div className="absolute bg-[#e6effe] h-[24px] left-[16px] rounded-[8px] top-[180px] w-[64.891px]" data-name="Chip">
      <Paragraph81 />
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[83.391px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[42px] text-[#005330] text-[12px] text-center top-0 whitespace-nowrap">Recommended</p>
    </div>
  );
}

function Chip6() {
  return (
    <div className="absolute bg-[#eafaf1] h-[24px] left-[84.89px] rounded-[8px] top-[180px] w-[99.391px]" data-name="Chip">
      <Paragraph82 />
    </div>
  );
}

function Container414() {
  return (
    <div className="absolute h-[40px] left-[16px] top-[212px] w-[384px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#3b3b3b] text-[14px] top-[-1px] w-[384px]">Get help creating a pregnancy-friendly meal plan to meet your goals, validated by your dietitian.</p>
    </div>
  );
}

function ForYouItem() {
  return (
    <div className="h-[268px] relative shrink-0 w-full" data-name="ForYouItem">
      <Container408 />
      <Container409 />
      <Container413 />
      <Chip5 />
      <Chip6 />
      <Container414 />
    </div>
  );
}

function StyleGuide30() {
  return (
    <div className="bg-white h-[300px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <ForYouItem />
      </div>
    </div>
  );
}

function Container407() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide30 />
        </div>
      </div>
    </div>
  );
}

function Container406() {
  return (
    <div className="bg-[#f3f4f6] h-[348px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container407 />
      </div>
    </div>
  );
}

function ComponentCard30() {
  return (
    <div className="bg-white h-[435px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container405 />
          <Container406 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading40() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ServiceItem - Internal</p>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Internal IH service with placeholder icon</p>
    </div>
  );
}

function Container415() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading40 />
        <Paragraph83 />
      </div>
    </div>
  );
}

function Icon93() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_218_7539)" id="Icon">
          <path d={svgPaths.p1fd92980} fill="var(--fill-0, #E6EFFE)" id="Circle" />
        </g>
        <defs>
          <clipPath id="clip0_218_7539">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon94() {
  return (
    <div className="h-[17.156px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1562 17.1562">
        <path clipRule="evenodd" d={svgPaths.p12b41600} fill="var(--fill-0, #002380)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container421() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.42px] overflow-clip size-[17.156px] top-[11.42px]" data-name="Container">
      <Icon94 />
    </div>
  );
}

function Container420() {
  return (
    <div className="absolute left-0 overflow-clip size-[40px] top-0" data-name="Container">
      <Icon93 />
      <Container421 />
    </div>
  );
}

function Container422() {
  return (
    <div className="absolute h-[24px] left-[56px] top-[8px] w-[344px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Primary care visit</p>
    </div>
  );
}

function Container419() {
  return (
    <div className="absolute h-[40px] left-[8px] top-[8px] w-[400px]" data-name="Container">
      <Container420 />
      <Container422 />
    </div>
  );
}

function Container418() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip rounded-[8px] top-0 w-[416px]" data-name="Container">
      <Container419 />
    </div>
  );
}

function Container423() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[416px]" data-name="Container" />;
}

function ServiceItem() {
  return (
    <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="ServiceItem">
      <Container418 />
      <Container423 />
    </div>
  );
}

function StyleGuide31() {
  return (
    <div className="bg-white h-[88px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <ServiceItem />
      </div>
    </div>
  );
}

function Container417() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide31 />
        </div>
      </div>
    </div>
  );
}

function Container416() {
  return (
    <div className="bg-[#f3f4f6] h-[136px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container417 />
      </div>
    </div>
  );
}

function ComponentCard31() {
  return (
    <div className="bg-white h-[223px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container415 />
          <Container416 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading41() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ServiceItem - External</p>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">External service with different visual styling</p>
    </div>
  );
}

function Container424() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading41 />
        <Paragraph84 />
      </div>
    </div>
  );
}

function Icon95() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_218_7630)" id="Icon">
          <path d={svgPaths.p1fd92980} fill="var(--fill-0, #FAFAFA)" id="Circle" />
        </g>
        <defs>
          <clipPath id="clip0_218_7630">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon96() {
  return (
    <div className="h-[17.156px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1562 17.1562">
        <path clipRule="evenodd" d={svgPaths.p12b41600} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container430() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.42px] overflow-clip size-[17.156px] top-[11.42px]" data-name="Container">
      <Icon96 />
    </div>
  );
}

function Container429() {
  return (
    <div className="absolute left-0 overflow-clip size-[40px] top-0" data-name="Container">
      <Icon95 />
      <Container430 />
    </div>
  );
}

function Container431() {
  return (
    <div className="absolute h-[24px] left-[56px] top-[8px] w-[344px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Gym membership</p>
    </div>
  );
}

function Container428() {
  return (
    <div className="absolute h-[40px] left-[8px] top-[8px] w-[400px]" data-name="Container">
      <Container429 />
      <Container431 />
    </div>
  );
}

function Container427() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip rounded-[8px] top-0 w-[416px]" data-name="Container">
      <Container428 />
    </div>
  );
}

function Container432() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[416px]" data-name="Container" />;
}

function ServiceItem1() {
  return (
    <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="ServiceItem">
      <Container427 />
      <Container432 />
    </div>
  );
}

function StyleGuide32() {
  return (
    <div className="bg-white h-[88px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <ServiceItem1 />
      </div>
    </div>
  );
}

function Container426() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide32 />
        </div>
      </div>
    </div>
  );
}

function Container425() {
  return (
    <div className="bg-[#f3f4f6] h-[136px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container426 />
      </div>
    </div>
  );
}

function ComponentCard32() {
  return (
    <div className="bg-white h-[223px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container424 />
          <Container425 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading42() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ServiceGroup</p>
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Group of services with title header</p>
    </div>
  );
}

function Container433() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading42 />
        <Paragraph85 />
      </div>
    </div>
  );
}

function Container436() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[416px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Common Searches</p>
    </div>
  );
}

function Icon97() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_218_7539)" id="Icon">
          <path d={svgPaths.p1fd92980} fill="var(--fill-0, #E6EFFE)" id="Circle" />
        </g>
        <defs>
          <clipPath id="clip0_218_7539">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon98() {
  return (
    <div className="h-[17.156px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1562 17.1562">
        <path clipRule="evenodd" d={svgPaths.p12b41600} fill="var(--fill-0, #002380)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container441() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.42px] overflow-clip size-[17.156px] top-[11.42px]" data-name="Container">
      <Icon98 />
    </div>
  );
}

function Container440() {
  return (
    <div className="absolute left-0 overflow-clip size-[40px] top-0" data-name="Container">
      <Icon97 />
      <Container441 />
    </div>
  );
}

function Container442() {
  return (
    <div className="absolute h-[24px] left-[56px] top-[8px] w-[344px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Urgent care visit</p>
    </div>
  );
}

function Container439() {
  return (
    <div className="absolute h-[40px] left-[8px] top-[8px] w-[400px]" data-name="Container">
      <Container440 />
      <Container442 />
    </div>
  );
}

function Container438() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip rounded-[8px] top-0 w-[416px]" data-name="Container">
      <Container439 />
    </div>
  );
}

function Container443() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[416px]" data-name="Container" />;
}

function ServiceItem2() {
  return (
    <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[416px]" data-name="ServiceItem">
      <Container438 />
      <Container443 />
    </div>
  );
}

function Icon99() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_218_7539)" id="Icon">
          <path d={svgPaths.p1fd92980} fill="var(--fill-0, #E6EFFE)" id="Circle" />
        </g>
        <defs>
          <clipPath id="clip0_218_7539">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon100() {
  return (
    <div className="h-[17.156px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1562 17.1562">
        <path clipRule="evenodd" d={svgPaths.p12b41600} fill="var(--fill-0, #002380)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container447() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.42px] overflow-clip size-[17.156px] top-[11.42px]" data-name="Container">
      <Icon100 />
    </div>
  );
}

function Container446() {
  return (
    <div className="absolute left-0 overflow-clip size-[40px] top-0" data-name="Container">
      <Icon99 />
      <Container447 />
    </div>
  );
}

function Container448() {
  return (
    <div className="absolute h-[24px] left-[56px] top-[8px] w-[344px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Primary care visit</p>
    </div>
  );
}

function Container445() {
  return (
    <div className="absolute h-[40px] left-[8px] top-[8px] w-[400px]" data-name="Container">
      <Container446 />
      <Container448 />
    </div>
  );
}

function Container444() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip rounded-[8px] top-0 w-[416px]" data-name="Container">
      <Container445 />
    </div>
  );
}

function Container449() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[416px]" data-name="Container" />;
}

function ServiceItem3() {
  return (
    <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-[64px] w-[416px]" data-name="ServiceItem">
      <Container444 />
      <Container449 />
    </div>
  );
}

function Icon101() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_218_7539)" id="Icon">
          <path d={svgPaths.p1fd92980} fill="var(--fill-0, #E6EFFE)" id="Circle" />
        </g>
        <defs>
          <clipPath id="clip0_218_7539">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon102() {
  return (
    <div className="h-[17.156px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1562 17.1562">
        <path clipRule="evenodd" d={svgPaths.p12b41600} fill="var(--fill-0, #002380)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container453() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.42px] overflow-clip size-[17.156px] top-[11.42px]" data-name="Container">
      <Icon102 />
    </div>
  );
}

function Container452() {
  return (
    <div className="absolute left-0 overflow-clip size-[40px] top-0" data-name="Container">
      <Icon101 />
      <Container453 />
    </div>
  );
}

function Container454() {
  return (
    <div className="absolute h-[24px] left-[56px] top-[8px] w-[344px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Mental health visit</p>
    </div>
  );
}

function Container451() {
  return (
    <div className="absolute h-[40px] left-[8px] top-[8px] w-[400px]" data-name="Container">
      <Container452 />
      <Container454 />
    </div>
  );
}

function Container450() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip rounded-[8px] top-0 w-[416px]" data-name="Container">
      <Container451 />
    </div>
  );
}

function Container455() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[416px]" data-name="Container" />;
}

function ServiceItem4() {
  return (
    <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-[128px] w-[416px]" data-name="ServiceItem">
      <Container450 />
      <Container455 />
    </div>
  );
}

function Icon103() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_218_7630)" id="Icon">
          <path d={svgPaths.p1fd92980} fill="var(--fill-0, #FAFAFA)" id="Circle" />
        </g>
        <defs>
          <clipPath id="clip0_218_7630">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon104() {
  return (
    <div className="h-[17.156px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1562 17.1562">
        <path clipRule="evenodd" d={svgPaths.p12b41600} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container459() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.42px] overflow-clip size-[17.156px] top-[11.42px]" data-name="Container">
      <Icon104 />
    </div>
  );
}

function Container458() {
  return (
    <div className="absolute left-0 overflow-clip size-[40px] top-0" data-name="Container">
      <Icon103 />
      <Container459 />
    </div>
  );
}

function Container460() {
  return (
    <div className="absolute h-[24px] left-[56px] top-[8px] w-[344px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">Physical therapy</p>
    </div>
  );
}

function Container457() {
  return (
    <div className="absolute h-[40px] left-[8px] top-[8px] w-[400px]" data-name="Container">
      <Container458 />
      <Container460 />
    </div>
  );
}

function Container456() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip rounded-[8px] top-0 w-[416px]" data-name="Container">
      <Container457 />
    </div>
  );
}

function Container461() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[416px]" data-name="Container" />;
}

function ServiceItem5() {
  return (
    <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-[192px] w-[416px]" data-name="ServiceItem">
      <Container456 />
      <Container461 />
    </div>
  );
}

function Container437() {
  return (
    <div className="absolute h-[248px] left-0 top-[32px] w-[416px]" data-name="Container">
      <ServiceItem2 />
      <ServiceItem3 />
      <ServiceItem4 />
      <ServiceItem5 />
    </div>
  );
}

function ServiceGroup() {
  return (
    <div className="h-[280px] relative shrink-0 w-full" data-name="ServiceGroup">
      <Container436 />
      <Container437 />
    </div>
  );
}

function StyleGuide33() {
  return (
    <div className="bg-white h-[312px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <ServiceGroup />
      </div>
    </div>
  );
}

function Container435() {
  return (
    <div className="h-[312px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide33 />
        </div>
      </div>
    </div>
  );
}

function Container434() {
  return (
    <div className="bg-[#f3f4f6] h-[360px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container435 />
      </div>
    </div>
  );
}

function ComponentCard33() {
  return (
    <div className="bg-white h-[447px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container433 />
          <Container434 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container404() {
  return (
    <div className="bg-[#f9fafb] h-[1472px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[24px] px-[24px] relative size-full">
        <ComponentCard30 />
        <ComponentCard31 />
        <ComponentCard32 />
        <ComponentCard33 />
      </div>
    </div>
  );
}

function CategorySection7() {
  return (
    <div className="content-stretch flex flex-col h-[1533px] items-start pb-px relative shrink-0 w-full" data-name="CategorySection">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Button30 />
      <Container404 />
    </div>
  );
}

function Heading43() {
  return (
    <div className="h-[28px] relative shrink-0 w-[182.047px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Today Components</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[10.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">▼</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Heading43 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Heading44() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">PromptInput</p>
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Chat input variant for prompting outside messaging interface</p>
    </div>
  );
}

function Container463() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading44 />
        <Paragraph86 />
      </div>
    </div>
  );
}

function Container466() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[62px] left-0 rounded-[24px] top-0 w-[416px]" data-name="Container" />;
}

function Icon105() {
  return (
    <div className="h-[9px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.01562 9">
        <path d={svgPaths.pc12b480} fill="var(--fill-0, #0012E7)" id="Vector" />
      </svg>
    </div>
  );
}

function Container470() {
  return (
    <div className="absolute content-stretch flex flex-col h-[9px] items-start left-[2.13px] top-[7.5px] w-[9.016px]" data-name="Container">
      <Icon105 />
    </div>
  );
}

function Icon106() {
  return (
    <div className="h-[9px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.01562 9">
        <path d={svgPaths.pc12b480} fill="var(--fill-0, #0012E7)" id="Vector" />
      </svg>
    </div>
  );
}

function Container471() {
  return (
    <div className="absolute content-stretch flex flex-col h-[9px] items-start left-[12.63px] top-[7.5px] w-[9.016px]" data-name="Container">
      <Icon106 />
    </div>
  );
}

function Icon107() {
  return (
    <div className="h-[6px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.01562 6">
        <path d={svgPaths.p22d9b480} fill="var(--fill-0, #002380)" id="Vector" />
      </svg>
    </div>
  );
}

function Container472() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6px] items-start left-[11.13px] top-[18px] w-[6.016px]" data-name="Container">
      <Icon107 />
    </div>
  );
}

function Icon108() {
  return (
    <div className="h-[6px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.01562 6">
        <path d={svgPaths.p22d9b480} fill="var(--fill-0, #578EE8)" id="Vector" />
      </svg>
    </div>
  );
}

function Container473() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6px] items-start left-[6.63px] top-0 w-[6.016px]" data-name="Container">
      <Icon108 />
    </div>
  );
}

function Container469() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Container">
      <Container470 />
      <Container471 />
      <Container472 />
      <Container473 />
    </div>
  );
}

function Container474() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[2px] w-[58.938px]" data-name="Container">
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#6d6d6d] text-[14px] top-[-1px] whitespace-nowrap">Ask Dot...</p>
    </div>
  );
}

function Container468() {
  return (
    <div className="absolute h-[24px] left-0 top-[5px] w-[90.938px]" data-name="Container">
      <Container469 />
      <Container474 />
    </div>
  );
}

function Icon109() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p1199c300} fill="var(--fill-0, #F2F2F2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container475() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-px size-[32px] top-px" data-name="Container">
      <Icon109 />
    </div>
  );
}

function Icon110() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0781 12">
        <path d={svgPaths.p36239500} fill="var(--fill-0, #8F8F8F)" id="Vector" />
      </svg>
    </div>
  );
}

function Container476() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[10.69px] px-[-0.039px] top-[11.18px] w-[13px]" data-name="Container">
      <Icon110 />
    </div>
  );
}

function Button32() {
  return (
    <div className="absolute left-[350px] size-[34px] top-0" data-name="Button">
      <Container475 />
      <Container476 />
    </div>
  );
}

function Container467() {
  return (
    <div className="absolute h-[34px] left-[16px] top-[14px] w-[384px]" data-name="Container">
      <Container468 />
      <Button32 />
    </div>
  );
}

function PromptInput() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[62px] relative rounded-[24px] shrink-0 w-full" data-name="PromptInput">
      <Container466 />
      <Container467 />
    </div>
  );
}

function StyleGuide34() {
  return (
    <div className="bg-gradient-to-b from-[rgba(226,236,255,0.6)] h-[94px] relative rounded-[4px] shrink-0 to-[rgba(0,0,0,0)] w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <PromptInput />
      </div>
    </div>
  );
}

function Container465() {
  return (
    <div className="h-[94px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide34 />
        </div>
      </div>
    </div>
  );
}

function Container464() {
  return (
    <div className="bg-[#f3f4f6] h-[142px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container465 />
      </div>
    </div>
  );
}

function ComponentCard34() {
  return (
    <div className="bg-white h-[229px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container463 />
          <Container464 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading45() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">PromptChip</p>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Interactive chip for quick prompt suggestions</p>
    </div>
  );
}

function Container477() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading45 />
        <Paragraph87 />
      </div>
    </div>
  );
}

function Container481() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-0 rounded-[24px] top-0 w-[126.047px]" data-name="Container" />;
}

function Paragraph88() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[12px] w-[94.047px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[47.5px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">{`I'm feeling sick`}</p>
    </div>
  );
}

function PromptChip() {
  return (
    <div className="absolute bg-white h-[44px] left-0 rounded-[24px] top-0 w-[126.047px]" data-name="PromptChip">
      <Container481 />
      <Paragraph88 />
    </div>
  );
}

function Container482() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-0 rounded-[24px] top-0 w-[196.891px]" data-name="Container" />;
}

function Paragraph89() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[12px] w-[164.891px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[82.5px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">Check out-of-pocket cost</p>
    </div>
  );
}

function PromptChip1() {
  return (
    <div className="absolute bg-white h-[44px] left-[134.05px] rounded-[24px] top-0 w-[196.891px]" data-name="PromptChip">
      <Container482 />
      <Paragraph89 />
    </div>
  );
}

function Container483() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-0 rounded-[24px] top-0 w-[94.016px]" data-name="Container" />;
}

function Paragraph90() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[12px] w-[62.016px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[31.5px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">I have UTI</p>
    </div>
  );
}

function PromptChip2() {
  return (
    <div className="absolute bg-white h-[44px] left-0 rounded-[24px] top-[52px] w-[94.016px]" data-name="PromptChip">
      <Container483 />
      <Paragraph90 />
    </div>
  );
}

function Container480() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <PromptChip />
      <PromptChip1 />
      <PromptChip2 />
    </div>
  );
}

function StyleGuide35() {
  return (
    <div className="bg-white h-[128px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Container480 />
      </div>
    </div>
  );
}

function Container479() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide35 />
        </div>
      </div>
    </div>
  );
}

function Container478() {
  return (
    <div className="bg-[#f3f4f6] h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container479 />
      </div>
    </div>
  );
}

function ComponentCard35() {
  return (
    <div className="bg-white h-[263px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container477 />
          <Container478 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading46() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ChipScroller</p>
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Horizontal scrolling container for chips (no pagination dots)</p>
    </div>
  );
}

function Container484() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading46 />
        <Paragraph91 />
      </div>
    </div>
  );
}

function Container487() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-0 rounded-[24px] top-0 w-[126.047px]" data-name="Container" />;
}

function Paragraph92() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[12px] w-[94.047px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[47.5px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">{`I'm feeling sick`}</p>
    </div>
  );
}

function PromptChip3() {
  return (
    <div className="absolute bg-white h-[44px] left-0 rounded-[24px] top-0 w-[126.047px]" data-name="PromptChip">
      <Container487 />
      <Paragraph92 />
    </div>
  );
}

function Container488() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-0 rounded-[24px] top-0 w-[196.891px]" data-name="Container" />;
}

function Paragraph93() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[12px] w-[164.891px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[82.5px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">Check out-of-pocket cost</p>
    </div>
  );
}

function PromptChip4() {
  return (
    <div className="absolute bg-white h-[44px] left-[134.05px] rounded-[24px] top-0 w-[196.891px]" data-name="PromptChip">
      <Container488 />
      <Paragraph93 />
    </div>
  );
}

function Container489() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-0 rounded-[24px] top-0 w-[94.016px]" data-name="Container" />;
}

function Paragraph94() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[12px] w-[62.016px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[31.5px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">I have UTI</p>
    </div>
  );
}

function PromptChip5() {
  return (
    <div className="absolute bg-white h-[44px] left-[338.94px] rounded-[24px] top-0 w-[94.016px]" data-name="PromptChip">
      <Container489 />
      <Paragraph94 />
    </div>
  );
}

function Container490() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-0 rounded-[24px] top-0 w-[176.234px]" data-name="Container" />;
}

function Paragraph95() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[12px] w-[144.234px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[72.5px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">Schedule appointment</p>
    </div>
  );
}

function PromptChip6() {
  return (
    <div className="absolute bg-white h-[44px] left-[440.95px] rounded-[24px] top-0 w-[176.234px]" data-name="PromptChip">
      <Container490 />
      <Paragraph95 />
    </div>
  );
}

function Container491() {
  return <div className="absolute border border-[#c6c6c6] border-solid h-[44px] left-0 rounded-[24px] top-0 w-[132.313px]" data-name="Container" />;
}

function Paragraph96() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[12px] w-[100.313px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-[50.5px] text-[#0012e7] text-[14px] text-center top-[-1px] whitespace-nowrap">Find a specialist</p>
    </div>
  );
}

function PromptChip7() {
  return (
    <div className="absolute bg-white h-[44px] left-[625.19px] rounded-[24px] top-0 w-[132.313px]" data-name="PromptChip">
      <Container491 />
      <Paragraph96 />
    </div>
  );
}

function ChipScroller() {
  return (
    <div className="h-[44px] overflow-clip relative shrink-0 w-full" data-name="ChipScroller">
      <PromptChip3 />
      <PromptChip4 />
      <PromptChip5 />
      <PromptChip6 />
      <PromptChip7 />
    </div>
  );
}

function StyleGuide36() {
  return (
    <div className="bg-white h-[76px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <ChipScroller />
      </div>
    </div>
  );
}

function Container486() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide36 />
        </div>
      </div>
    </div>
  );
}

function Container485() {
  return (
    <div className="bg-[#f3f4f6] h-[124px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container486 />
      </div>
    </div>
  );
}

function ComponentCard36() {
  return (
    <div className="bg-white h-[211px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container484 />
          <Container485 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading47() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">ActionCard</p>
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Card displaying action item that needs user attention</p>
    </div>
  );
}

function Container492() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading47 />
        <Paragraph97 />
      </div>
    </div>
  );
}

function Container495() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[124px] left-0 rounded-[24px] top-0 w-[416px]" data-name="Container" />;
}

function Container497() {
  return (
    <div className="absolute h-[48px] left-[16px] text-black top-[16px] w-[384px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] top-[-1px]">Pick up Rx: Ciprofloxacin 20mg</p>
      <p className="absolute font-['Figtree:Medium',sans-serif] font-medium leading-[20px] left-0 text-[14px] top-[27px]">Ready at your CVS Pharmacy</p>
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="absolute h-[16px] left-[8px] overflow-clip top-[4px] w-[25.266px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[13px] text-[#005330] text-[12px] text-center top-0 whitespace-nowrap">New</p>
    </div>
  );
}

function Container500() {
  return (
    <div className="absolute bg-[#eafaf1] h-[24px] left-0 rounded-[8px] top-0 w-[41.266px]" data-name="Container">
      <Paragraph98 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d={svgPaths.p3e0a7b80} fill="var(--fill-0, black)" id="Vector" />
      </svg>
      <div className="absolute inset-[20%_30%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8 7.2">
          <path clipRule="evenodd" d={svgPaths.p1635fd70} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function StyleGuide38() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="StyleGuide">
      <Group10 />
    </div>
  );
}

function Container502() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] overflow-clip size-[12px] top-[6px]" data-name="Container">
      <StyleGuide38 />
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="absolute h-[16px] left-[24px] overflow-clip top-[4px] w-[127.922px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Medium',sans-serif] font-medium leading-[16px] left-[64px] text-[12px] text-black text-center top-0 whitespace-nowrap">Estimated copay: $3.49</p>
    </div>
  );
}

function Container501() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[24px] left-[45.27px] rounded-[8px] top-0 w-[159.922px]" data-name="Container">
      <Container502 />
      <Paragraph99 />
    </div>
  );
}

function Container499() {
  return (
    <div className="absolute h-[24px] left-0 top-[12px] w-[205.188px]" data-name="Container">
      <Container500 />
      <Container501 />
    </div>
  );
}

function Icon111() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p1199c300} fill="var(--fill-0, #F2F2F2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container503() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[32px] top-[8px]" data-name="Container">
      <Icon111 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[0_72.92%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79169 3.8125">
          <path d={svgPaths.p3e5560f0} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_36.46%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79169 3.8125">
          <path d={svgPaths.p6cc5600} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_0_72.92%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.7917 3.8125">
          <path d={svgPaths.p3ce86bf0} fill="var(--fill-0, #0012E7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon112() {
  return (
    <div className="h-[3.813px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group11 />
    </div>
  );
}

function Container505() {
  return (
    <div className="content-stretch flex flex-col h-[4px] items-start pt-[0.094px] relative shrink-0 w-full" data-name="Container">
      <Icon112 />
    </div>
  );
}

function Container504() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] overflow-clip pt-[5px] size-[14px] top-[17px]" data-name="Container">
      <Container505 />
    </div>
  );
}

function Button33() {
  return (
    <div className="absolute left-[336px] size-[48px] top-0" data-name="Button">
      <Container503 />
      <Container504 />
    </div>
  );
}

function Container498() {
  return (
    <div className="absolute h-[48px] left-[16px] top-[68px] w-[384px]" data-name="Container">
      <Container499 />
      <Button33 />
    </div>
  );
}

function Container496() {
  return (
    <div className="absolute h-[124px] left-0 top-0 w-[416px]" data-name="Container">
      <Container497 />
      <Container498 />
    </div>
  );
}

function ActionCard() {
  return (
    <div className="bg-white h-[124px] relative rounded-[24px] shrink-0 w-full" data-name="ActionCard">
      <Container495 />
      <Container496 />
    </div>
  );
}

function StyleGuide37() {
  return (
    <div className="bg-white h-[156px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <ActionCard />
      </div>
    </div>
  );
}

function Container494() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide37 />
        </div>
      </div>
    </div>
  );
}

function Container493() {
  return (
    <div className="bg-[#f3f4f6] h-[204px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container494 />
      </div>
    </div>
  );
}

function ComponentCard37() {
  return (
    <div className="bg-white h-[291px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container492 />
          <Container493 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading48() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">PendingActionsCard</p>
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Card showing count of pending actions with arrow navigation</p>
    </div>
  );
}

function Container506() {
  return (
    <div className="bg-white h-[85px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading48 />
        <Paragraph100 />
      </div>
    </div>
  );
}

function Container511() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[352px]" data-name="Container">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-nowrap">3 pending actions</p>
    </div>
  );
}

function Icon113() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8125 16">
        <path d={svgPaths.pe522700} fill="var(--fill-0, #0012E7)" id="Vector" />
      </svg>
    </div>
  );
}

function Container513() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon113 />
    </div>
  );
}

function Container512() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[368px] overflow-clip pl-[4.656px] pr-[2.531px] size-[16px] top-[4px]" data-name="Container">
      <Container513 />
    </div>
  );
}

function Container510() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[384px]" data-name="Container">
      <Container511 />
      <Container512 />
    </div>
  );
}

function Container509() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip rounded-[24px] top-0 w-[416px]" data-name="Container">
      <Container510 />
    </div>
  );
}

function Container514() {
  return <div className="absolute border border-[#e1e1e1] border-solid h-[56px] left-0 rounded-[24px] top-0 w-[416px]" data-name="Container" />;
}

function PendingActionsCard() {
  return (
    <div className="bg-white h-[56px] relative rounded-[24px] shrink-0 w-full" data-name="PendingActionsCard">
      <Container509 />
      <Container514 />
    </div>
  );
}

function StyleGuide39() {
  return (
    <div className="bg-white h-[88px] relative rounded-[4px] shrink-0 w-[448px]" data-name="StyleGuide">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <PendingActionsCard />
      </div>
    </div>
  );
}

function Container508() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[303px] relative size-full">
          <StyleGuide39 />
        </div>
      </div>
    </div>
  );
}

function Container507() {
  return (
    <div className="bg-[#f3f4f6] h-[136px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Container508 />
      </div>
    </div>
  );
}

function ComponentCard38() {
  return (
    <div className="bg-white h-[223px] relative rounded-[10px] shrink-0 w-full" data-name="ComponentCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container506 />
          <Container507 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container462() {
  return (
    <div className="bg-[#f9fafb] h-[1393px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[24px] px-[24px] relative size-full">
        <ComponentCard34 />
        <ComponentCard35 />
        <ComponentCard36 />
        <ComponentCard37 />
        <ComponentCard38 />
      </div>
    </div>
  );
}

function CategorySection8() {
  return (
    <div className="content-stretch flex flex-col h-[1454px] items-start pb-px relative shrink-0 w-full" data-name="CategorySection">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Button31 />
      <Container462 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1062px] items-start left-0 overflow-clip top-[128.84px] w-[1152px]" data-name="Container">
      <CategorySection />
      <CategorySection1 />
      <CategorySection2 />
      <CategorySection3 />
      <CategorySection4 />
      <CategorySection5 />
      <CategorySection6 />
      <CategorySection7 />
      <CategorySection8 />
    </div>
  );
}

export default function PrototypeGuideComponents() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Prototype Guide / Components">
      <Container />
      <Container1 />
      <div className="absolute bg-white content-stretch flex h-[48px] items-start left-[-4px] top-[80.84px] w-[1156px]" data-name="Tabs">
        <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 1">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] whitespace-nowrap">Navigation</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 2">
          <div aria-hidden="true" className="absolute border-[#0012e7] border-b-4 border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0012e7] text-[12px] whitespace-nowrap">Components</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tab 3">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3b3b3b] text-[12px] whitespace-nowrap">About</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}