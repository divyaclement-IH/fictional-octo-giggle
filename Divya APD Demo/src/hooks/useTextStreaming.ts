/**
 * Text Streaming Hook
 *
 * Simulates progressive text reveal for chat messages.
 * Displays text word-by-word at a natural reading pace.
 */

import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTextStreamingOptions {
  /** Full text to reveal progressively */
  text: string;
  /** Words per minute (default: 300 = ~50 chars/second) */
  speed?: number;
  /** Callback when streaming completes */
  onComplete?: () => void;
  /** Whether to start streaming immediately */
  autoStart?: boolean;
}

interface UseTextStreamingReturn {
  /** Currently revealed text */
  displayedText: string;
  /** Whether actively streaming */
  isStreaming: boolean;
  /** Start streaming */
  start: () => void;
  /** Stop streaming and show full text */
  stop: () => void;
  /** Reset to beginning */
  reset: () => void;
}

const DEFAULT_SPEED = 300; // Words per minute

export function useTextStreaming({
  text,
  speed = DEFAULT_SPEED,
  onComplete,
  autoStart = false,
}: UseTextStreamingOptions): UseTextStreamingReturn {
  const [displayedText, setDisplayedText] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const wordsRef = useRef<string[]>([]);
  const currentIndexRef = useRef(0);

  // Split text into words
  useEffect(() => {
    wordsRef.current = text.split(' ');
    currentIndexRef.current = 0;
    setDisplayedText('');
  }, [text]);

  // Stop streaming
  const stop = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsStreaming(false);
    setDisplayedText(text);
  }, [text]);

  // Reset to beginning
  const reset = useCallback(() => {
    stop();
    currentIndexRef.current = 0;
    setDisplayedText('');
  }, [stop]);

  // Start streaming
  const start = useCallback(() => {
    if (isStreaming || !text) return;

    setIsStreaming(true);
    currentIndexRef.current = 0;
    setDisplayedText('');

    const words = text.split(' ');
    const msPerWord = (60 / speed) * 1000;

    intervalRef.current = window.setInterval(() => {
      currentIndexRef.current += 1;

      if (currentIndexRef.current >= words.length) {
        // Streaming complete
        setDisplayedText(text);
        setIsStreaming(false);
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        onComplete?.();
      } else {
        // Reveal next word
        const revealedWords = words.slice(0, currentIndexRef.current + 1);
        setDisplayedText(revealedWords.join(' '));
      }
    }, msPerWord);
  }, [text, speed, isStreaming, onComplete]);

  // Auto-start if enabled
  useEffect(() => {
    if (autoStart && text && !isStreaming) {
      start();
    }
  }, [autoStart, text, isStreaming, start]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    displayedText,
    isStreaming,
    start,
    stop,
    reset,
  };
}
