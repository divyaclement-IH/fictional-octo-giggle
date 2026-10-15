/**
 * TodayScreen Component
 *
 * Home/Today screen showing personalized greeting, Dot prompt, quick actions,
 * and pending tasks for the member.
 *
 * Design: Included Health Design System
 * Source: Figma Today screen
 */

import React from 'react';
import { useStoryBible } from '../../../context/StoryBibleContext';
import { getGreeting } from '../../../../utils/formatters';
import { PromptInput } from '../../ui/PromptInput';
import { PromptChip } from '../../ui/PromptChip';
import { ChipScroller } from '../../ui/ChipScroller';
import { ActionCard, type ActionTag } from '../../healthcare/cards/ActionCard';
import { PendingActionsCard } from '../../healthcare/cards/PendingActionsCard';

interface TodayScreenProps {
  showMenuNotification?: boolean;
  onPromptClick?: () => void;
  onChipClick?: (label: string) => void;
  onActionClick?: (actionId: string) => void;
  onPendingActionsClick?: () => void;
}

export function TodayScreen({
  showMenuNotification = false,
  onPromptClick,
  onChipClick,
  onActionClick,
  onPendingActionsClick,
}: TodayScreenProps) {
  const story = useStoryBible();
  const chapterData = story.chapters.chapter7_home;
  const memberName = story.member.firstName;
  const greeting = getGreeting(chapterData.date);

  // Mock data for quick prompt chips
  const promptChips = [
    "I'm feeling sick",
    "Check out-of-pocket cost",
    "I have UTI",
  ];

  // Mock data for action cards
  const actionCards = [
    {
      id: 'rx_pickup',
      title: 'Pick up Rx: Ciprofloxacin 20mg',
      description: 'Ready at your CVS Pharmacy',
      tags: [
        { label: 'New', variant: 'new' as const },
        {
          label: 'Estimated copay: $3.49',
          variant: 'info' as const,
          icon: (
            <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <g>
                <path d="M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM6 10.8C3.36 10.8 1.2 8.64 1.2 6C1.2 3.36 3.36 1.2 6 1.2C8.64 1.2 10.8 3.36 10.8 6C10.8 8.64 8.64 10.8 6 10.8Z" fill="black" />
                <path clipRule="evenodd" d="M5.4 3C5.4 2.66863 5.66863 2.4 6 2.4C6.33137 2.4 6.6 2.66863 6.6 3V3.6H7.2C7.53137 3.6 7.8 3.86863 7.8 4.2C7.8 4.53137 7.53137 4.8 7.2 4.8H6.6V7.2H7.8C8.13137 7.2 8.4 7.46863 8.4 7.8C8.4 8.13137 8.13137 8.4 7.8 8.4H6.6V9C6.6 9.33137 6.33137 9.6 6 9.6C5.66863 9.6 5.4 9.33137 5.4 9V8.4H4.2C3.86863 8.4 3.6 8.13137 3.6 7.8C3.6 7.46863 3.86863 7.2 4.2 7.2H5.4V4.8H4.8C4.46863 4.8 4.2 4.53137 4.2 4.2C4.2 3.86863 4.46863 3.6 4.8 3.6H5.4V3Z" fill="black" fillRule="evenodd" />
              </g>
            </svg>
          ),
        },
      ],
    },
    {
      id: 'followup_visit',
      title: 'Book your follow-up visit',
      description: 'Ordered by Dr. Janelle Martin, MD',
      tags: [
        { label: 'New', variant: 'new' as const },
        {
          label: 'Due in 3 months',
          variant: 'info' as const,
          icon: (
            <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path clipRule="evenodd" d="M3 0C3.33137 0 3.6 0.268629 3.6 0.6V1.2H8.4V0.6C8.4 0.268629 8.66863 0 9 0C9.33137 0 9.6 0.268629 9.6 0.6V1.2H10.2C11.1941 1.2 12 2.00589 12 3V10.2C12 11.1941 11.1941 12 10.2 12H1.8C0.805887 12 0 11.1941 0 10.2V3C0 2.00589 0.805887 1.2 1.8 1.2H2.4V0.6C2.4 0.268629 2.66863 0 3 0ZM1.2 4.8V10.2C1.2 10.5314 1.46863 10.8 1.8 10.8H10.2C10.5314 10.8 10.8 10.5314 10.8 10.2V4.8H1.2Z" fill="black" fillRule="evenodd" />
            </svg>
          ),
        },
      ],
    },
  ];

  const pendingActionsCount = 3;

  return (
    <div className="relative size-full bg-white overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-484px',
          top: '-10px',
          width: '1253px',
          height: '496px',
          background: 'radial-gradient(ellipse at center, #E2ECFF 0%, rgba(255, 255, 255, 0) 70%)',
          opacity: 0.6,
        }}
      />

      {/* Scrollable content */}
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-x-clip overflow-y-auto pb-[24px] pt-[16px] px-[16px] size-full">
        {/* Hamburger menu + User avatar */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          {/* Hamburger menu with optional notification badge */}
          <div className="overflow-clip relative shrink-0 size-[26px]">
            <div className="absolute inset-[24.03%_9.62%_24.05%_9.62%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9985 13.4979">
                <path clipRule="evenodd" d="M20.9985 1.15C20.9985 1.78513 20.4836 2.3 19.8485 2.3H1.15C0.514873 2.3 0 1.78513 0 1.15C0 0.514873 0.514873 0 1.15 0H19.8485C20.4836 0 20.9985 0.514873 20.9985 1.15ZM20.9985 6.74895C20.9985 7.38408 20.4836 7.89895 19.8485 7.89895H1.15C0.514873 7.89895 0 7.38408 0 6.74895C0 6.11382 0.514873 5.59895 1.15 5.59895H19.8485C20.4836 5.59895 20.9985 6.11382 20.9985 6.74895ZM19.8485 13.4979C20.4836 13.4979 20.9985 12.983 20.9985 12.3479C20.9985 11.7128 20.4836 11.1979 19.8485 11.1979H1.15C0.514873 11.1979 0 11.7128 0 12.3479C0 12.983 0.514873 13.4979 1.15 13.4979H19.8485Z" fill="black" fillRule="evenodd" />
              </svg>
            </div>
            {showMenuNotification && (
              <div className="-translate-x-1/2 absolute bg-[#cb0c31] left-[calc(50%+9px)] max-h-[8px] max-w-[8px] rounded-[999px] size-[8px] top-[2px]" />
            )}
          </div>

          {/* User avatar */}
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[20px] text-black text-right whitespace-nowrap">
              {memberName}
            </p>
            <div className="relative shrink-0 size-[32px]">
              <div className="-translate-y-1/2 absolute aspect-[48/48] left-0 right-0 top-1/2">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" fill="#F2F2F2" r="16" />
                </svg>
              </div>
              <div className="-translate-y-1/2 absolute aspect-[26/32] left-[22.92%] right-[22.92%] top-[calc(50%+0.13px)]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] left-1/2 text-[14px] text-black text-center top-[calc(50%-0.13px)] whitespace-nowrap">
                  <p className="leading-[20px]">CM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Salutation + Dot Quick Prompt */}
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pb-[16px] relative shrink-0 w-full">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">
            {greeting} {memberName}!
          </p>
          <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[40px] min-w-full relative shrink-0 text-[32px] text-black w-[min-content]">
            What would you like to do today?
          </p>

          {/* Prompt input and chips */}
          <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-full">
            <PromptInput
              placeholder="Ask Dot..."
              onClick={onPromptClick}
            />
            <ChipScroller>
              {promptChips.map((chip, index) => (
                <PromptChip
                  key={index}
                  label={chip}
                  onClick={() => onChipClick?.(chip)}
                />
              ))}
            </ChipScroller>
          </div>
        </div>

        {/* Your actions section */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
            <p className="leading-[32px]">Your actions</p>
          </div>

          {/* Action cards */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {actionCards.map((action) => (
              <ActionCard
                key={action.id}
                title={action.title}
                description={action.description}
                tags={action.tags}
                onClick={() => onActionClick?.(action.id)}
              />
            ))}
            <PendingActionsCard
              count={pendingActionsCount}
              onClick={onPendingActionsClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
