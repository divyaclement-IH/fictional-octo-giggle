/**
 * Chapter 1: Tour - Lock Screen
 *
 * Entry point for the APD healthcare journey.
 * Shows lock screen with welcome notification, then navigates to skeleton page.
 *
 * Flow:
 * 1. Lock screen with "Welcome to Included Health" notification
 * 2. Tap notification → Navigate to skeleton page (/chapter1-skeleton)
 * 3. Skeleton page shows → After 500ms, chat slides in from right
 *
 * Story Bible: chapter1_tour
 * - Date: Friday, January 1, 2026, 11:15 AM
 * - Notification: "Welcome to Included Health" / "Your personal plan starts here."
 */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { LockScreen } from '../components/healthcare/lock-screen/LockScreen';
import { LockNotification } from '../components/healthcare/lock-screen/LockNotification';

const CHAPTER_ID = 'chapter1_tour';

export default function Chapter1Tour() {
  const navigate = useNavigate();
  const [notificationData] = useState({
    title: 'Welcome to Included Health',
    body: 'Your personal plan starts here.',
    date: new Date('2026-01-01T11:15:00'),
  });

  const handleNotificationTap = () => {
    console.log('Chapter 1 notification tapped - navigating to skeleton page');
    navigate('/chapter1-skeleton');
  };

  console.log('Chapter1Tour rendering - Lock Screen view');

  return (
    <LockScreen
      dateTime={notificationData.date}
      notification={
        <LockNotification
          title={notificationData.title}
          body={notificationData.body}
          timestamp={notificationData.date}
          onTap={handleNotificationTap}
        />
      }
      onNotificationTap={handleNotificationTap}
    />
  );
}
