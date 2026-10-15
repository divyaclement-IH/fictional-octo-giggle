/**
 * Chapter 5: Post-visit chat with HITL (Human-in-the-Loop)
 *
 * Shows pre-visit notification with insurance card access,
 * then transitions to chat with Dot and handoff to Nurse Care Manager (Sarah).
 *
 * Flow:
 * 1. Lock screen with "Visit coming up" notification (press-and-hold for insurance card)
 * 2. Tap notification → Chat interface with Dot
 * 3. Dot discusses cost concerns for endoscopy procedure
 * 4. Sarah (Nurse Care Manager) joins to offer alternative facility
 *
 * Story Bible: chapter5_hitl
 * - Date: January 14, 2026, 4:00 PM (day before gastro visit)
 * - Notification: "Your visit with Dr. Joseph Moreno is coming up"
 */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useStoryBible } from '../context/StoryBibleContext';
import { useJourney } from '../context/JourneyContext';
import { LockScreen } from '../components/healthcare/lock-screen/LockScreen';
import { LockNotification } from '../components/healthcare/lock-screen/LockNotification';
import { SecondaryNavigation } from '../components/SecondaryNavigation';
import { StatusBar } from '../components/StatusBar';
import { ChatContainer } from '../components/healthcare/chat/ChatContainer';
import { chapter5Script, chapter5Disclaimer, chapter5DefaultVariables } from '../../data/narratives/chapter5-hitl';
import { formatStatusBarTime } from '../../utils/formatters';
import { getNextChapterRoute } from '../../utils/navigationHelpers';

type ViewState = 'lock' | 'insurance_card' | 'chat';

const CHAPTER_ID = 'chapter5_hitl';

export default function Chapter5HITL() {
  const story = useStoryBible();
  const { setCurrentChapter, completeChapter } = useJourney();
  const [viewState, setViewState] = useState<ViewState>('lock');
  const navigate = useNavigate();

  // Set current chapter on mount
  useEffect(() => {
    setCurrentChapter(CHAPTER_ID);
  }, [setCurrentChapter]);

  const chapterData = story.chapters[CHAPTER_ID];

  // Variables for conversation interpolation
  const conversationVariables = {
    memberFirstName: chapter5DefaultVariables.memberFirstName,
    appointmentDate: chapter5DefaultVariables.appointmentDate,
    specialistFullName: chapter5DefaultVariables.specialistFullName,
    nurseCareManagerName: chapter5DefaultVariables.nurseCareManagerName,
  };

  const handleNotificationTap = () => {
    setViewState('chat');
  };

  const handlePressAndHold = () => {
    // Stub: Show insurance card placeholder
    setViewState('insurance_card');
  };

  const handleBackToLock = () => {
    setViewState('lock');
  };

  const handleConversationComplete = () => {
    // Mark chapter as complete and navigate to next chapter
    completeChapter(CHAPTER_ID);
    const nextRoute = getNextChapterRoute(CHAPTER_ID);
    if (nextRoute) {
      navigate(nextRoute);
    }
  };

  if (viewState === 'lock') {
    return (
      <LockScreen
        dateTime={chapterData.date}
        notification={
          chapterData.notification && (
            <LockNotification
              title={chapterData.notification.title}
              body={chapterData.notification.body}
              timestamp={chapterData.date}
              onTap={handleNotificationTap}
              onPressAndHold={handlePressAndHold}
            />
          )
        }
        onNotificationTap={handleNotificationTap}
      />
    );
  }

  if (viewState === 'insurance_card') {
    // Stub: Insurance card placeholder
    return (
      <div className="flex flex-col h-full bg-white">
        <StatusBar time={formatStatusBarTime(chapterData.date)} />
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-center">Insurance Card</h2>
            <p className="text-gray-600 text-center mb-4">
              [Placeholder for insurance card display]
            </p>
            <button
              onClick={handleBackToLock}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Back to Lock Screen
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Chat interface
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Status bar (matches lock screen time from story bible) */}
      <StatusBar time={formatStatusBarTime(chapterData.date)} />

      {/* Secondary navigation */}
      <SecondaryNavigation title="Conversation with Dot" onBackClick={handleBackToLock} />

      {/* Chat container */}
      <div className="flex-1 overflow-hidden">
        <ChatContainer
          script={chapter5Script}
          disclaimer={chapter5Disclaimer}
          variables={conversationVariables}
          onComplete={handleConversationComplete}
        />
      </div>
    </div>
  );
}
