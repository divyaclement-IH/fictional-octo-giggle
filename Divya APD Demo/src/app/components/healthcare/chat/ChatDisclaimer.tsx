/**
 * Chat Disclaimer Component
 *
 * Disclaimer text shown at the start of conversations.
 * Design: Adapted from Figma import /src/imports/StartOfConversation/StartOfConversation.tsx
 */

export interface ChatDisclaimerProps {
  text: string;
}

export function ChatDisclaimer({ text }: ChatDisclaimerProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="Disclaimer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] max-w-[440px] min-w-px relative text-[#3b3b3b] text-[12px] text-center">
            <p className="leading-[16px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
