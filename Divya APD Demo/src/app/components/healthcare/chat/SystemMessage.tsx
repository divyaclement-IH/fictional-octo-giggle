/**
 * System Message Component
 *
 * Centered system messages in chat (e.g., "Sarah is now your Care Team member").
 * Design: Adapted from Figma import SystemMessage
 */

export interface SystemMessageProps {
  text: string;
  timestamp?: string;
  showNewBadge?: boolean;
  newMessageCount?: number;
}

export function SystemMessage({
  text,
  timestamp,
  showNewBadge = false,
  newMessageCount = 0
}: SystemMessageProps) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center leading-[0] px-[32px] relative w-full text-[12px] text-center" data-name="System Message">
      {/* Timestamp with optional "New" badge */}
      {timestamp && (
        <div className="content-stretch flex gap-[3px] items-center justify-center px-[32px] relative shrink-0 w-full whitespace-nowrap" data-name="Timestamp">
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b]">
            <p className="leading-[16px]">{timestamp}</p>
          </div>
          {showNewBadge && newMessageCount > 0 && (
            <div className="flex gap-[4px] items-center relative shrink-0" data-name="New">
              <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3b3b3b]">
                <p className="leading-[16px]">·</p>
              </div>
              <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0012e7]">
                <p className="leading-[16px]">{newMessageCount} New message{newMessageCount !== 1 ? 's' : ''}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* System message text */}
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center max-w-[440px] min-w-full relative shrink-0 text-[#3b3b3b] w-[min-content]">
        <p className="leading-[16px]">{text}</p>
      </div>
    </div>
  );
}
