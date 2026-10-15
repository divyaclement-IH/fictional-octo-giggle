/**
 * Chapter 6: My Health Exploration
 *
 * Displays the My Health section of the app navigation and allows free exploration
 * of Activity, Medicine, and Care Team tabs.
 *
 * Flow:
 * 1. App navigation displays with My Health screen active (Activity tab default)
 * 2. User can explore all three tabs and navigate to Today screen
 * 3. Action gate waits for user to click "Book your follow-up visit" card on Today screen
 * 4. Triggers transition to Chapter 7 (chat with Dot about procedure cost)
 *
 * Story Bible: chapter6_myhealth
 * - Date: May 1, 2026, 2:30 PM
 * - No notification (user is already in app)
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useStoryBible } from '../context/StoryBibleContext';
import { useJourney } from '../context/JourneyContext';
import { AppNavigationShell } from '../components/app-navigation/AppNavigationShell';
import { chapter6Script } from '../../data/narratives/chapter6-myhealth';
import { getNextChapterRoute } from '../../utils/navigationHelpers';

const CHAPTER_ID = 'chapter6_myhealth';

export default function Chapter6MyHealth() {
  const story = useStoryBible();
  const { setCurrentChapter, completeChapter, registerActionGate, clearActionGate } = useJourney();
  const navigate = useNavigate();

  // Set current chapter on mount
  useEffect(() => {
    setCurrentChapter(CHAPTER_ID);
  }, [setCurrentChapter]);

  // Register action gate for "followup_visit" action
  useEffect(() => {
    const actionId = 'action:followup_visit';

    const handleFollowupVisitClick = () => {
      // Mark chapter as complete
      completeChapter(CHAPTER_ID);

      // Navigate to next chapter
      const nextRoute = getNextChapterRoute(CHAPTER_ID);
      if (nextRoute) {
        navigate(nextRoute);
      }
    };

    registerActionGate(actionId, handleFollowupVisitClick);

    // Cleanup on unmount
    return () => {
      clearActionGate(actionId);
    };
  }, [registerActionGate, clearActionGate, completeChapter, navigate]);

  return (
    <AppNavigationShell
      key="chapter6-myhealth"
      initialScreen="my-health"
      initialTab="activity"
    />
  );
}
