/**
 * App Navigation Shell
 *
 * Main wrapper for app navigation screens.
 * Provides navigation context, status bar, secondary nav, bottom nav, and screen routing.
 */

import React from 'react';
import { AppNavProvider, useAppNav, MainScreen } from '../../context/AppNavContext';
import { StatusBar } from '../StatusBar';
import { SecondaryNavigation } from '../SecondaryNavigation';
import { BottomNavigation } from './BottomNavigation';
import { TodayScreen } from './screens/TodayScreen';
import { MyHealthScreen } from './screens/MyHealthScreen';
import { GetCareScreen } from './screens/GetCareScreen';
import { formatStatusBarTime } from '../../../utils/formatters';
import { useJourneyOptional } from '../../context/JourneyContext';

export interface AppNavigationShellProps {
  /**
   * Initial screen to display
   * Default: 'my-health'
   */
  initialScreen?: MainScreen;

  /**
   * Initial tab within the screen
   * Default: 'activity'
   */
  initialTab?: string | null;

  /**
   * Initial detail screen overlay to open on mount
   * Example: 'activity-detail', 'prescription-detail'
   */
  initialDetailScreen?: string;

  /**
   * Props to pass to the initial detail screen
   * Example: { activityId: '123' }
   */
  initialDetailScreenProps?: any;

  /**
   * Callback when user completes an action that should exit app navigation
   * Example: When action gate requirement is met
   */
  onExitAction?: () => void;
}

export function AppNavigationShell({
  initialScreen = 'my-health',
  initialTab = 'activity',
  initialDetailScreen,
  initialDetailScreenProps,
  onExitAction
}: AppNavigationShellProps) {
  return (
    <AppNavProvider
      initialScreen={initialScreen}
      initialTab={initialTab}
      initialDetailScreen={initialDetailScreen}
      initialDetailScreenProps={initialDetailScreenProps}
    >
      <AppNavigationShellContent onExitAction={onExitAction} />
    </AppNavProvider>
  );
}

function AppNavigationShellContent({ onExitAction }: { onExitAction?: () => void }) {
  const {
    currentScreen,
    detailScreen,
    detailScreenProps,
    navigateToScreen,
    closeDetailScreen,
  } = useAppNav();

  // Determine screen title
  const getScreenTitle = (): string => {
    if (detailScreen) {
      // Detail screens have custom titles
      return 'Details'; // Will be overridden by specific detail screens
    }

    switch (currentScreen) {
      case 'home':
        return 'Today';
      case 'my-health':
        return 'My Health';
      case 'get-care':
        return 'Get Care';
      case 'my-plan':
        return 'My Plan';
      default:
        return '';
    }
  };

  // Show bottom nav unless we're on a detail screen
  const showBottomNav = !detailScreen;

  // Show secondary nav for all screens except home/today
  const showSecondaryNav = currentScreen !== 'home' || detailScreen;

  return (
    <div className="relative flex h-full w-full flex-col bg-white">
      {/* Status Bar */}
      <StatusBar time={formatStatusBarTime(new Date())} />

      {/* Secondary Navigation (hidden on Today screen) */}
      {showSecondaryNav && (
        <SecondaryNavigation
          title={getScreenTitle()}
          onBackClick={detailScreen ? closeDetailScreen : undefined}
        />
      )}

      {/* Main Content Area */}
      <div className="min-h-0 flex-1 overflow-hidden">
        {detailScreen ? (
          <DetailScreenRenderer
            detailScreenId={detailScreen}
            props={detailScreenProps}
          />
        ) : (
          <MainScreenRenderer currentScreen={currentScreen} onExitAction={onExitAction} />
        )}
      </div>

      {/* Bottom Navigation (hidden on detail screens) */}
      {showBottomNav && (
        <BottomNavigation
          currentScreen={currentScreen}
          onNavigate={navigateToScreen}
        />
      )}
    </div>
  );
}

// ========================================
// Screen Renderers
// ========================================

function MainScreenRenderer({ currentScreen, onExitAction }: { currentScreen: MainScreen; onExitAction?: () => void }) {
  const journey = useJourneyOptional();

  const handleActionClick = (actionId: string) => {
    // Trigger action gate for chapter progression
    if (journey) {
      journey.triggerAction(`action:${actionId}`);
    }
  };

  switch (currentScreen) {
    case 'home':
      return <TodayScreen onActionClick={handleActionClick} />;
    case 'my-health':
      return <MyHealthScreen />;
    case 'get-care':
      return <GetCareScreen />;
    case 'my-plan':
      return <MyPlanScreenPlaceholder />;
    default:
      return null;
  }
}

function DetailScreenRenderer({
  detailScreenId,
  props,
}: {
  detailScreenId: string;
  props: any;
}) {
  // Placeholder - will be replaced with actual detail screens
  return (
    <div className="flex h-full items-center justify-center p-[16px]">
      <p className="text-[14px] text-[#3b3b3b]">
        Detail Screen: {detailScreenId}
      </p>
    </div>
  );
}

// ========================================
// Placeholder Screens (Phase 1)
// ========================================

function MyPlanScreenPlaceholder() {
  return (
    <div className="flex h-full items-center justify-center p-[16px]">
      <p className="font-['Figtree:Medium',sans-serif] text-[16px] text-[#3b3b3b]">
        My Plan Screen
        <br />
        <span className="text-[14px] text-[#6d6d6d]">(To be built)</span>
      </p>
    </div>
  );
}
