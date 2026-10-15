/**
 * Care Team Message Bubble Component
 *
 * Chat message bubble for Care Team members (e.g., Sarah, Nurse Care Manager).
 * Design: Adapted from Figma imports ResponseCareTeam
 */

import { useState, useEffect } from 'react';
import imgCareTeamAvatar from '@/imports/ResponseCareTeam/57b3e0bd75751cb3bc88e2731d0a5fe5015d28db.png';
import { SpringPop } from '../../animations/SpringPop';
import { ThinkingIndicator } from '../../animations/ThinkingIndicator';

export interface CareTeamBubbleProps {
  text: string;
  showAvatar?: boolean;
  careTeamName?: string;
  careTeamTitle?: string;
  isTyping?: boolean;
}

export function CareTeamBubble({
  text,
  showAvatar = true,
  careTeamName = "Sarah",
  careTeamTitle = "Care Team member",
  isTyping = false
}: CareTeamBubbleProps) {
  const [showMessage, setShowMessage] = useState(!isTyping);

  // When typing completes, fade in the message
  useEffect(() => {
    if (!isTyping && !showMessage) {
      // Small delay before fading in
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isTyping, showMessage]);

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pr-[40px] relative w-full" data-name="Response - Care Team">
      {/* Avatar and label */}
      {showAvatar && (
        <SpringPop origin="left center" duration={0.4}>
          <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Avatar, Label">
            <div className="relative shrink-0 size-[24px]" data-name="Avatar">
              <div className="-translate-y-1/2 absolute aspect-[48/48] left-0 right-0 top-1/2" data-name="image">
                <img
                  alt={careTeamName}
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-full"
                  src={imgCareTeamAvatar}
                />
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#3b3b3b] text-[12px]">
              <p className="leading-[16px]">{careTeamName} · {careTeamTitle}</p>
            </div>
          </div>
        </SpringPop>
      )}

      {/* Message bubble */}
      <div className="bg-[#f2f2f2] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Bubble">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start p-[16px] relative size-full">
            {isTyping ? (
              <div className="flex items-center min-h-[24px]">
                <ThinkingIndicator width={40} height={20} />
              </div>
            ) : (
              <div className={`flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black transition-opacity duration-300 ${showMessage ? 'opacity-100' : 'opacity-0'}`}>
                <p className="leading-[24px] whitespace-pre-wrap">{text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
