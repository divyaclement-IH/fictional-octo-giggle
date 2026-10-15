import { useState, useEffect } from 'react';

export interface TypingTextProps {
  text: string;
  speed?: number; // milliseconds per character
  delay?: number; // delay before starting
  onComplete?: () => void;
  className?: string;
  cursor?: boolean; // show blinking cursor
  loop?: boolean; // restart animation when complete
}

/**
 * Typing Text Animation
 *
 * Animates text appearing character by character, like a typewriter effect.
 * Perfect for chat interfaces, AI responses, or dramatic text reveals.
 *
 * @example
 * ```tsx
 * <TypingText
 *   text="Hi! I'm Dot, your digital health assistant."
 *   speed={30}
 *   cursor={true}
 * />
 * ```
 */
export function TypingText({
  text,
  speed = 50,
  delay = 0,
  onComplete,
  className = '',
  cursor = true,
  loop = false,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    // Start typing immediately if no delay, or after delay
    if (currentIndex === 0) {
      if (delay > 0) {
        const delayTimeout = setTimeout(() => {
          setCurrentIndex(1);
        }, delay);
        return () => clearTimeout(delayTimeout);
      } else {
        // Start immediately
        setCurrentIndex(1);
        return;
      }
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }

    if (currentIndex > text.length && !isComplete) {
      setIsComplete(true);
      onComplete?.();

      if (loop) {
        setTimeout(() => {
          setCurrentIndex(0);
          setDisplayedText('');
          setIsComplete(false);
        }, 2000);
      }
    }
  }, [currentIndex, text, speed, delay, onComplete, isComplete, loop]);

  // Blinking cursor effect
  useEffect(() => {
    if (!cursor) return;

    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [cursor]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <span
          className="inline-block w-[2px] h-[1em] bg-current ml-[1px]"
          style={{
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.1s',
          }}
        />
      )}
    </span>
  );
}

/**
 * Typing Message Bubble
 *
 * Pre-styled message bubble with typing animation for chat interfaces
 * By default, no cursor is shown (for Dot responses)
 */
export function TypingMessageBubble({
  text,
  speed = 30,
  avatarSrc,
  senderName = 'Dot',
  cursor = false,
  loop = false,
}: {
  text: string;
  speed?: number;
  avatarSrc?: string;
  senderName?: string;
  cursor?: boolean;
  loop?: boolean;
}) {
  return (
    <div className="flex gap-2 items-start max-w-[80%]">
      {avatarSrc && (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
          <img src={avatarSrc} alt={senderName} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
        <TypingText
          text={text}
          speed={speed}
          cursor={cursor}
          loop={loop}
          className="text-gray-900"
        />
      </div>
    </div>
  );
}
