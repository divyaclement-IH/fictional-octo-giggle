/**
 * Formatters - Consistent date/time display
 *
 * Per §6.1 of the APD Stakeholder Plan:
 * These formatters ensure dates and times are displayed consistently
 * across lock screens, notifications, chats, confirmations, and My Health.
 *
 * CRITICAL TIME FORMAT CONVENTION:
 * - Lock screen & status bar: 12-hour format WITHOUT AM/PM (iOS style)
 *   Examples: "9:41", "2:30", "11:15"
 * - Notifications & chat: 12-hour format WITH AM/PM
 *   Examples: "9:41 AM", "2:30 PM", "11:15 AM"
 */

/**
 * Format date for lock screen display
 * Example: "Fri, January 1"
 */
export function formatLockScreenDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format time for lock screen large display
 * 12-hour format without AM/PM (iOS style)
 * Example: "11:15" or "2:30"
 */
export function formatLockScreenTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).replace(/\s?(AM|PM)/i, '');
}

/**
 * Format time for notification timestamp
 * Example: "11:15 AM"
 */
export function formatNotificationTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

/**
 * Format time for status bar
 * 12-hour format without AM/PM (iOS style)
 * Example: "9:41" or "2:30"
 */
export function formatStatusBarTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).replace(/\s?(AM|PM)/i, '');
}

/**
 * Format duration for video calls
 * Example: "18:00" for 18 minutes
 */
export function formatDuration(minutes: number): string {
  const mins = Math.floor(minutes);
  const secs = Math.floor((minutes - mins) * 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Format appointment date/time for confirmations and My Health
 * Example: "Friday, Jan 8 at 9:30 AM"
 */
export function formatAppointmentDateTime(date: Date): string {
  const datePart = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
  const timePart = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  return `${datePart} at ${timePart}`;
}

/**
 * Get greeting based on time of day
 * Example: "Good morning" for 5am-11:59am, "Good afternoon" for 12pm-4:59pm, "Good evening" for 5pm-4:59am
 */
export function getGreeting(date: Date): string {
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) {
    return 'Good morning';
  } else if (hour >= 12 && hour < 17) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}
