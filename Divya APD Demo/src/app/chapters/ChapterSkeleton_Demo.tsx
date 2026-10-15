/**
 * Skeleton Demo Chapter - Lock Screen
 *
 * Demonstrates page transition flow:
 * 1. Lock screen with notification
 * 2. Tap notification → Navigate to /skeleton route
 * 3. Skeleton page shows, then after 500ms → Chat panel slides in from right
 *
 * Design Pattern:
 * - Lock screen: High-fidelity iOS design
 * - Skeleton page: Medium-fidelity health app interface
 * - Chat panel: High-fidelity slide-in overlay
 */

import { useNavigate } from 'react-router';
import { LockScreen } from '../components/healthcare/lock-screen/LockScreen';
import { LockNotification } from '../components/healthcare/lock-screen/LockNotification';

export default function ChapterSkeletonDemo() {
  const navigate = useNavigate();

  const handleNotificationTap = () => {
    console.log('Notification tapped - navigating to /skeleton');
    navigate('/skeleton');
  };

  // Demo date/time
  const demoDate = new Date('2026-05-06T09:41:00');

  console.log('ChapterSkeletonDemo rendering - Lock Screen view');

  return (
    <LockScreen
      dateTime={demoDate}
      notification={
        <LockNotification
          title="Health Check-In"
          body="How are you feeling today?"
          timestamp={demoDate}
          onTap={handleNotificationTap}
        />
      }
      onNotificationTap={handleNotificationTap}
    />
  );
}
