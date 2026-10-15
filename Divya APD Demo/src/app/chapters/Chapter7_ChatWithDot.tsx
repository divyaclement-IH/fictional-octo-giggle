/**
 * Chapter 7: Chat with Dot
 *
 * Flow:
 * 1. Lock screen with good news notification about procedure cost
 * 2. Tap notification → Chat interface with Dot
 * 3. Dot provides update about claim and out-of-pocket cost
 * 4. Done button triggers action gate → navigates to Today screen (Home)
 * 5. User lands on app navigation showing Today screen
 *
 * Story Bible: chapter7_chat_with_dot
 * - Date: February 1, 2027, 10:00 AM (after procedure claim processing)
 * - Notification: "Good news! You owe the minimum out of pocket cost for your recent procedure."
 *
 * Action Gates:
 * - action:done - Triggered when user taps "Done" button in secondary navigation
 */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useStoryBible } from '../context/StoryBibleContext';
import { useJourney } from '../context/JourneyContext';
import { AppNavigationShell } from '../components/app-navigation/AppNavigationShell';
import { LockScreen } from '../components/healthcare/lock-screen/LockScreen';
import { LockNotification } from '../components/healthcare/lock-screen/LockNotification';
import { SecondaryNavigation } from '../components/SecondaryNavigation';
import { StatusBar } from '../components/StatusBar';
import { ChatContainer } from '../components/healthcare/chat/ChatContainer';
import { chapter7Script, chapter7Disclaimer, chapter7DefaultVariables } from '../../data/narratives/chapter7-chat-with-dot';
import { formatStatusBarTime } from '../../utils/formatters';

type ViewState = 'lock' | 'chat' | 'app_navigation';

const CHAPTER_ID = 'chapter7_chat_with_dot';

export default function Chapter7ChatWithDot() {
  const story = useStoryBible();
  const { setCurrentChapter, completeChapter, triggerAction } = useJourney();
  const [viewState, setViewState] = useState<ViewState>('lock');
  const navigate = useNavigate();

  // Set current chapter on mount
  useEffect(() => {
    setCurrentChapter(CHAPTER_ID);
  }, [setCurrentChapter]);

  const chapterData = story.chapters[CHAPTER_ID];

  // Variables for conversation interpolation
  const conversationVariables = {
    memberFirstName: story.member.firstName,
    appointmentDate: chapter7DefaultVariables.appointmentDate,
    specialistFullName: chapter7DefaultVariables.specialistFullName,
  };

  const handleNotificationTap = () => {
    setViewState('chat');
  };

  const handleBackToLock = () => {
    setViewState('lock');
  };

  const handleDone = () => {
    // Trigger the action gate (ChatContainer will advance to final turn)
    triggerAction('action:done');
    // Navigate to app navigation showing Today screen
    setViewState('app_navigation');
  };

  const handleConversationComplete = () => {
    // Conversation complete - mark chapter as done
    completeChapter(CHAPTER_ID);
    console.log('Chapter 7 complete - conversation done');
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
            />
          )
        }
        onNotificationTap={handleNotificationTap}
      />
    );
  }

  if (viewState === 'app_navigation') {
    return (
      <AppNavigationShell
        key="chapter7-home"
        initialScreen="home"
        initialTab={null}
      />
    );
  }

  // Chat interface
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Status bar (matches lock screen time from story bible) */}
      <StatusBar time={formatStatusBarTime(chapterData.date)} />

      {/* Secondary navigation with Done button */}
      <SecondaryNavigation
        title="Conversation with Dot"
        onBackClick={handleBackToLock}
        rightActions={
          <button
            onClick={handleDone}
            className="content-stretch flex items-center relative shrink-0"
          >
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0012e7] text-[16px] whitespace-nowrap">
              Done
            </p>
          </button>
        }
      />

      {/* Chat container */}
      <div className="flex-1 overflow-hidden">
        <ChatContainer
          script={chapter7Script}
          disclaimer={chapter7Disclaimer}
          variables={conversationVariables}
          onComplete={handleConversationComplete}
        />
      </div>
    </div>
  );
}
