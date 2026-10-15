/**
 * Chapter 5: Placeholder
 *
 * Temporary placeholder for Chapter 5.
 * Will be implemented with day-of appointment lock screen and insurance card.
 */

import { useNavigate } from 'react-router';
import { StatusBar } from '../components/StatusBar';
import { useStoryBible } from '../context/StoryBibleContext';
import { formatStatusBarTime } from '../../utils/formatters';

export default function Chapter5Placeholder() {
  const story = useStoryBible();
  const navigate = useNavigate();

  const chapterDate = story.chapters.chapter4_specialistDay.date;

  return (
    <div className="flex flex-col h-full bg-white">
      <StatusBar time={formatStatusBarTime(chapterDate)} />

      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold text-[#1a1a23] mb-4">Chapter 5</h1>
        <p className="text-[#3b3b3b] text-center mb-8">
          Coming soon: Day-of appointment experience with insurance card access.
        </p>
        <button
          onClick={() => navigate('/chapter1')}
          className="bg-[#001048] text-white px-6 py-3 rounded-[24px] font-medium"
        >
          Return to Chapter 1
        </button>
      </div>
    </div>
  );
}
