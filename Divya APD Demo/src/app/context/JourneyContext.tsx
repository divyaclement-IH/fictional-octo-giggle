/**
 * Journey Context - Chapter Progression State
 *
 * Tracks which chapters have been completed and manages linear progression
 * through the story journey. Supports dynamic chapter addition
 * beyond the initial scope.
 *
 * Chapter order and metadata are derived from storyManifest.ts for
 * single source of truth.
 */

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { STORY_MANIFEST } from '@/data/storyManifest';

interface JourneyContextValue {
  completedChapters: Set<string>;
  currentChapter: string | null;
  completeChapter: (chapterId: string) => void;
  isChapterComplete: (chapterId: string) => boolean;
  canAccessChapter: (chapterId: string) => boolean;
  setCurrentChapter: (chapterId: string) => void;
  // Action gate management
  registerActionGate: (actionId: string, callback: () => void) => void;
  triggerAction: (actionId: string) => void;
  clearActionGate: (actionId: string) => void;
}

const JourneyContext = createContext<JourneyContextValue | undefined>(undefined);

/**
 * Chapter order for linear progression
 * Derived from story manifest for single source of truth
 */
const CHAPTER_ORDER = STORY_MANIFEST.chapters.map(ch => ch.id);

interface JourneyProviderProps {
  children: ReactNode;
}

export function JourneyProvider({ children }: JourneyProviderProps) {
  const [completedChapters, setCompletedChapters] = useState<Set<string>>(new Set());
  const [currentChapter, setCurrentChapterState] = useState<string | null>(null);
  const [actionGates, setActionGates] = useState<Map<string, () => void>>(new Map());

  const completeChapter = useCallback((chapterId: string) => {
    setCompletedChapters((prev) => new Set([...prev, chapterId]));
  }, []);

  const isChapterComplete = useCallback(
    (chapterId: string) => {
      return completedChapters.has(chapterId);
    },
    [completedChapters]
  );

  /**
   * Check if a chapter can be accessed based on linear progression
   * For v1: must complete previous chapters in order
   * For facilitator mode: this can be relaxed if needed
   */
  const canAccessChapter = useCallback(
    (chapterId: string) => {
      const chapterIndex = CHAPTER_ORDER.indexOf(chapterId as any);

      // First chapter is always accessible
      if (chapterIndex === 0) return true;

      // Chapter not in order list (future chapters) - allow for now
      if (chapterIndex === -1) return true;

      // Check if previous chapter is complete
      const previousChapterId = CHAPTER_ORDER[chapterIndex - 1];
      return completedChapters.has(previousChapterId);
    },
    [completedChapters]
  );

  const setCurrentChapter = useCallback((chapterId: string) => {
    setCurrentChapterState(chapterId);
  }, []);

  /**
   * Register an action gate callback
   * When the specified action is triggered, the callback will be invoked
   */
  const registerActionGate = useCallback((actionId: string, callback: () => void) => {
    setActionGates((prev) => {
      const updated = new Map(prev);
      updated.set(actionId, callback);
      return updated;
    });
  }, []);

  /**
   * Trigger an action gate
   * If a callback is registered for this action, it will be invoked and removed
   */
  const triggerAction = useCallback((actionId: string) => {
    let callbackToExecute: (() => void) | undefined;

    setActionGates((prev) => {
      const callback = prev.get(actionId);
      if (callback) {
        callbackToExecute = callback;
        const updated = new Map(prev);
        updated.delete(actionId);
        return updated;
      }
      return prev;
    });

    // Execute callback after state update, not during
    if (callbackToExecute) {
      callbackToExecute();
    }
  }, []);

  /**
   * Clear an action gate without triggering it
   * Useful for cleanup when unmounting or timeout
   */
  const clearActionGate = useCallback((actionId: string) => {
    setActionGates((prev) => {
      const updated = new Map(prev);
      updated.delete(actionId);
      return updated;
    });
  }, []);

  const value: JourneyContextValue = {
    completedChapters,
    currentChapter,
    completeChapter,
    isChapterComplete,
    canAccessChapter,
    setCurrentChapter,
    registerActionGate,
    triggerAction,
    clearActionGate,
  };

  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>;
}

/**
 * Hook to access journey state
 * Throws error if used outside JourneyProvider
 */
export function useJourney(): JourneyContextValue {
  const context = useContext(JourneyContext);
  if (!context) {
    throw new Error('useJourney must be used within JourneyProvider');
  }
  return context;
}

/**
 * Optional hook to access journey state
 * Returns undefined if used outside JourneyProvider (useful for isolated component previews)
 */
export function useJourneyOptional(): JourneyContextValue | undefined {
  return useContext(JourneyContext);
}

/**
 * Export chapter order for routing and navigation
 */
export { CHAPTER_ORDER };

/**
 * Chapter metadata for Prototype Guide
 * Derived from story manifest for single source of truth
 */
export const CHAPTER_METADATA: Record<string, { title: string; description: string; route: string }> =
  Object.fromEntries(
    STORY_MANIFEST.chapters.map(ch => [
      ch.id,
      {
        title: ch.title,
        description: ch.description,
        route: ch.route,
      },
    ])
  );
