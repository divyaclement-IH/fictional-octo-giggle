/**
 * Chapter 2: Wellness Exam
 *
 * Flow: Lock screen notification → Video visit → End call → Chapter 3
 * Script: src/data/narratives/chapter2-wellness.ts
 */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LockScreen } from '../components/healthcare/lock-screen/LockScreen';
import { LockNotification } from '../components/healthcare/lock-screen/LockNotification';
import { VideoVisit } from '../components/healthcare/video/VideoVisit';
import { useStoryBible } from '../context/StoryBibleContext';
import { formatLockScreenDate, formatLockScreenTime } from '../../utils/formatters';
import { chapter2DefaultVariables } from '../../data/narratives/chapter2-wellness';
import { getNextChapterRoute } from '../../utils/navigationHelpers';

type Chapter2Phase = 'lock' | 'video';

const CHAPTER_ID = 'chapter2_wellness';

export default function Chapter2Wellness() {
  const [phase, setPhase] = useState<Chapter2Phase>('lock');
  const story = useStoryBible();
  const navigate = useNavigate();

  const wellnessDate = story.chapters[CHAPTER_ID].date;
  const notification = story.chapters[CHAPTER_ID].notification;

  const handleNotificationTap = () => {
    setPhase('video');
  };

  const handleEndCall = () => {
    const nextRoute = getNextChapterRoute(CHAPTER_ID);
    if (nextRoute) {
      navigate(nextRoute);
    }
  };

  if (phase === 'lock') {
    return (
      <LockScreen
        dateTime={wellnessDate}
        notification={
          notification ? (
            <LockNotification
              title={notification.title}
              body={notification.body}
              timestamp={wellnessDate}
              onTap={handleNotificationTap}
            />
          ) : null
        }
      />
    );
  }

  if (phase === 'video') {
    return (
      <VideoVisit
        providerName={chapter2DefaultVariables.providerName}
        duration={chapter2DefaultVariables.duration}
        onEndCall={handleEndCall}
      />
    );
  }

  return null;
}
