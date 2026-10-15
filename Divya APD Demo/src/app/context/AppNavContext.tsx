/**
 * App Navigation Context
 *
 * Manages navigation state for the app navigation shell.
 * Handles screen switching, tab navigation, and detail screen overlays.
 */

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// ========================================
// Types
// ========================================

export type MainScreen = 'home' | 'my-health' | 'get-care' | 'my-plan';

export interface AppNavState {
  currentScreen: MainScreen;
  currentTab: string | null;        // e.g., 'activity', 'medicine', 'care-team'
  detailScreen: string | null;      // e.g., 'activity-detail', 'prescription-detail'
  detailScreenProps: any | null;    // Data passed to detail screen
}

export interface AppNavContextValue extends AppNavState {
  navigateToScreen: (screen: MainScreen, tab?: string) => void;
  navigateToTab: (tab: string) => void;
  openDetailScreen: (screenId: string, props?: any) => void;
  closeDetailScreen: () => void;
  goBack: () => void;
}

// ========================================
// Context
// ========================================

const AppNavContext = createContext<AppNavContextValue | undefined>(undefined);

interface AppNavProviderProps {
  children: ReactNode;
  initialScreen?: MainScreen;
  initialTab?: string;
  initialDetailScreen?: string;      // Deep link to a detail screen on mount
  initialDetailScreenProps?: any;    // Props to pass to initial detail screen
}

export function AppNavProvider({
  children,
  initialScreen = 'home',
  initialTab = null,
  initialDetailScreen = null,
  initialDetailScreenProps = null
}: AppNavProviderProps) {
  const [currentScreen, setCurrentScreen] = useState<MainScreen>(initialScreen);
  const [currentTab, setCurrentTab] = useState<string | null>(initialTab);
  const [detailScreen, setDetailScreen] = useState<string | null>(initialDetailScreen);
  const [detailScreenProps, setDetailScreenProps] = useState<any | null>(initialDetailScreenProps);

  /**
   * Navigate to a main screen (bottom nav)
   * Optionally specify a tab to activate
   */
  const navigateToScreen = useCallback((screen: MainScreen, tab?: string) => {
    setCurrentScreen(screen);
    if (tab) {
      setCurrentTab(tab);
    } else {
      // Reset tab when switching screens
      setCurrentTab(null);
    }
    // Close any open detail screens
    setDetailScreen(null);
    setDetailScreenProps(null);
  }, []);

  /**
   * Navigate to a tab within the current screen
   */
  const navigateToTab = useCallback((tab: string) => {
    setCurrentTab(tab);
  }, []);

  /**
   * Open a detail screen overlay
   * Hides bottom navigation
   */
  const openDetailScreen = useCallback((screenId: string, props?: any) => {
    setDetailScreen(screenId);
    setDetailScreenProps(props || null);
  }, []);

  /**
   * Close the detail screen overlay
   * Returns to the main screen
   */
  const closeDetailScreen = useCallback(() => {
    setDetailScreen(null);
    setDetailScreenProps(null);
  }, []);

  /**
   * Go back - closes detail screen if open
   * Otherwise does nothing (let chapter handle returning to chat)
   */
  const goBack = useCallback(() => {
    if (detailScreen) {
      closeDetailScreen();
    }
  }, [detailScreen, closeDetailScreen]);

  const value: AppNavContextValue = {
    currentScreen,
    currentTab,
    detailScreen,
    detailScreenProps,
    navigateToScreen,
    navigateToTab,
    openDetailScreen,
    closeDetailScreen,
    goBack,
  };

  return <AppNavContext.Provider value={value}>{children}</AppNavContext.Provider>;
}

/**
 * Hook to access app navigation state
 * Throws error if used outside AppNavProvider
 */
export function useAppNav(): AppNavContextValue {
  const context = useContext(AppNavContext);
  if (!context) {
    throw new Error('useAppNav must be used within AppNavProvider');
  }
  return context;
}

/**
 * Optional hook to access app navigation state
 * Returns undefined if used outside AppNavProvider (useful for isolated component previews)
 */
export function useAppNavOptional(): AppNavContextValue | undefined {
  return useContext(AppNavContext);
}
