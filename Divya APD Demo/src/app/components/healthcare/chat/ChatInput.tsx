/**
 * Chat Input Component
 *
 * Message input field with send and plus buttons.
 * Design: Adapted from Figma import /src/imports/ChatInput/ChatInput.tsx
 */

import { useState } from 'react';
import svgPaths from '@/imports/ChatInput/svg-8bx0a15s6u';

export interface ChatInputProps {
  placeholder?: string;
  onSend: (message: string) => void;
  onPlusClick?: () => void;
  disabled?: boolean;
}

export function ChatInput({ placeholder = 'Describe your issue...', onSend, onPlusClick, disabled = false }: ChatInputProps) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (value.trim() && !disabled) {
      onSend(value.trim());
      setValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const hasText = value.trim().length > 0;

  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end pb-[8px] pt-[16px] px-[8px] relative rounded-[24px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.12)] w-full"
      data-name="Chat Input"
    >
      {/* Text input */}
      <div className="relative shrink-0 w-full" data-name="Text">
        <div className="flex flex-row items-center size-full">
          <div className="content-center flex flex-wrap gap-y-[10px] items-center px-[16px] relative size-full">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={disabled}
              placeholder="Type something here..."
              className="flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-black text-[16px] bg-transparent border-none outline-none placeholder:text-[#6d6d6d]"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Buttons">
        {/* Plus button */}
        <button
          onClick={onPlusClick}
          disabled={disabled || !onPlusClick}
          className="relative shrink-0 size-[48px] disabled:opacity-50"
          data-name="Icon Button"
          aria-label="Add attachment"
        >
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" fill="#F2F2F2" r="16" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2" data-name="plus">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p12d51800} fill="#3B3B3B" />
            </svg>
          </div>
        </button>

        {/* Send button */}
        <div className="content-stretch flex items-center relative shrink-0" data-name="UI right">
          <button
            onClick={handleSend}
            disabled={disabled || !value.trim()}
            className="relative shrink-0 size-[48px]"
            data-name="Chat Input - Send button"
            aria-label="Send message"
          >
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Background">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" fill={hasText && !disabled ? "#001048" : "#F2F2F2"} r="16" />
              </svg>
            </div>
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%+0.2px)] size-[14.4px] top-[calc(50%+0.2px)]"
              data-name="send"
            >
              <div className="h-[12px] relative shrink-0 w-[13.091px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0909 12">
                  <path d={svgPaths.p28106800} fill={hasText && !disabled ? "white" : "#8F8F8F"} />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
