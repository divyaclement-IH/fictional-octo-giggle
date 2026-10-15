/**
 * Message Bubble Component
 *
 * Chat message bubbles for Dot, Sarah, and Member.
 * Design: Adapted from Figma imports (ResponseDot, ResponseMember)
 */

import { Avatar, AvatarType } from './Avatar';
import { SpringPop } from '../../animations/SpringPop';
import { TypingText } from '../../animations/TypingText';
import { ThinkingIndicator } from '../../animations/ThinkingIndicator';

export type MessageSpeaker = 'dot' | 'sarah' | 'member';

export interface MessageBubbleProps {
  speaker: MessageSpeaker;
  text: string;
  showAvatar?: boolean;
  speakerName?: string;
  isStreaming?: boolean;
  isThinking?: boolean;
}

export function MessageBubble({ speaker, text, showAvatar = true, speakerName, isStreaming = false, isThinking = false }: MessageBubbleProps) {
  const isMember = speaker === 'member';

  if (isMember) {
    // Member message - right-aligned, blue background
    return (
      <div className="content-stretch flex flex-col items-end pl-[40px] relative w-full" data-name="Response - Member">
        <div
          className="bg-[#e6effe] content-stretch flex items-start justify-end overflow-clip p-[16px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0"
          data-name="Bubble"
        >
          <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-right">
            <p className="leading-[24px] whitespace-pre-wrap">{text}</p>
          </div>
        </div>
      </div>
    );
  }

  // Dot or Sarah message - left-aligned with avatar
  const avatarType: AvatarType = speaker === 'sarah' ? 'sarah' : 'dot';
  const displayName = speakerName || (speaker === 'sarah' ? 'Sarah' : 'Dot');

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full" data-name={`Response - ${displayName}`}>
      {/* Avatar and label */}
      {showAvatar && (
        <SpringPop origin="left center" duration={0.4}>
          <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Avatar, Label">
            <Avatar type={avatarType} size="xxsmall" name={displayName} />
            <div className="flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[12px]">
              <p className="leading-[16px]">{displayName}</p>
            </div>
          </div>
        </SpringPop>
      )}

      {/* Message bubble */}
      <div
        className="content-stretch flex items-start justify-start py-[8px] relative rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full"
        data-name="Bubble"
      >
        <div className="flex flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] max-w-[343px]">
          {isThinking ? (
            <ThinkingIndicator width={24} height={24} />
          ) : isStreaming ? (
            <TypingText
              text={text}
              speed={30}
              cursor={false}
              loop={false}
              className="leading-[1.5] whitespace-pre-wrap"
            />
          ) : (
            <p className="leading-[1.5] whitespace-pre-wrap">{text}</p>
          )}
        </div>
      </div>
    </div>
  );
}
