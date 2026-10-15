/**
 * App Navigation Test Wrapper
 *
 * Test route for previewing the app navigation system with Chapter 6 data.
 * Sets the journey context to chapter6_myhealth to load the correct content.
 */

import { useEffect } from 'react';
import { useJourneyOptional } from '../../context/JourneyContext';
import { AppNavigationShell } from './AppNavigationShell';

export function AppNavigationTest() {
  const journey = useJourneyOptional();

  useEffect(() => {
    // Set journey to Chapter 6 to load My Health data (if provider available)
    if (journey) {
      journey.setCurrentChapter('chapter6_myhealth');
    }
  }, [journey]);

  return <AppNavigationShell initialScreen="my-health" initialTab="activity" />;
}
