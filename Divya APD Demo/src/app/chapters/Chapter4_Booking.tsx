/**
 * Chapter 4: Gastroenterologist Booking (Help with Booking)
 *
 * Flow: Booking chat → Doctor card → Preference → Cost question → Progress tracker → Confirmation
 * Script: src/data/narratives/chapter4-booking.ts
 */

import { useNavigate } from 'react-router';
import { StatusBar } from '../components/StatusBar';
import { SecondaryNavigation } from '../components/SecondaryNavigation';
import { ChatContainer } from '../components/healthcare/chat/ChatContainer';
import { chapter4Script, chapter4DefaultVariables, chapter4Disclaimer } from '../../data/narratives/chapter4-booking';
import { useStoryBible } from '../context/StoryBibleContext';
import { formatStatusBarTime } from '../../utils/formatters';
import { getNextChapterRoute, getPreviousChapterRoute } from '../../utils/navigationHelpers';

const CHAPTER_ID = 'chapter4_specialistDay';

export default function Chapter4Booking() {
  const story = useStoryBible();
  const navigate = useNavigate();

  // Use the post-visit assessment date (same as Chapter 3)
  const chapterDate = story.chapters.chapter3_assessment.date;

  const handleBackToProfile = () => {
    const prevRoute = getPreviousChapterRoute(CHAPTER_ID);
    if (prevRoute) {
      navigate(prevRoute);
    }
  };

  const handleDone = () => {
    const nextRoute = getNextChapterRoute(CHAPTER_ID);
    if (nextRoute) {
      navigate(nextRoute);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Status bar */}
      <StatusBar time={formatStatusBarTime(chapterDate)} />

      {/* Secondary navigation with Done button */}
      <SecondaryNavigation
        title="Help with Booking"
        onBackClick={handleBackToProfile}
        rightActions={
          <button onClick={handleDone} className="content-stretch flex items-center relative shrink-0">
            <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0012e7] text-[16px] whitespace-nowrap">
              Done
            </p>
          </button>
        }
      />

      {/* Chat container */}
      <div className="flex-1 overflow-hidden">
        <ChatContainer
          script={chapter4Script}
          disclaimer={chapter4Disclaimer}
          variables={chapter4DefaultVariables}
        />
      </div>
    </div>
  );
}
