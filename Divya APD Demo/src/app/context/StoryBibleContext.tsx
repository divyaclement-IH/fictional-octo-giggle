/**
 * Story Bible Context - Provider Access to Story Data
 *
 * Provides type-safe access to the centralized story bible throughout
 * the component tree. Ensures dates, times, provider names, and other
 * story details are consistent across all screens.
 */

import React, { createContext, useContext, ReactNode } from 'react';
import { storyBible, type StoryBible } from '../../data/storyBible';

const StoryBibleContext = createContext<StoryBible | undefined>(undefined);

interface StoryBibleProviderProps {
  children: ReactNode;
}

export function StoryBibleProvider({ children }: StoryBibleProviderProps) {
  return (
    <StoryBibleContext.Provider value={storyBible}>
      {children}
    </StoryBibleContext.Provider>
  );
}

/**
 * Hook to access story bible data
 * Throws error if used outside StoryBibleProvider
 */
export function useStoryBible(): StoryBible {
  const context = useContext(StoryBibleContext);
  if (!context) {
    throw new Error('useStoryBible must be used within StoryBibleProvider');
  }
  return context;
}

/**
 * Optional hook to access story bible data
 * Returns undefined if used outside StoryBibleProvider (useful for isolated component previews)
 */
export function useStoryBibleOptional(): StoryBible | undefined {
  return useContext(StoryBibleContext);
}
