/**
 * Chapter 2: Wellness Exam (lock → video)
 *
 * Based on: APD_Greenfield_Stakeholder_Plan.md §5.2 (Chapters — Wellness exam)
 * Continuity: chapter-01-story-bible.md (Dr. Scott Henderson, Friday Jan 8)
 *
 * Variables used:
 * - userName: Member first name (Charles)
 * - providerName: Dr. Scott Henderson
 * - duration: Video visit duration (18:00)
 */

export interface ConversationTurn {
  id: string;
  speaker: 'dot' | 'user' | 'system';
  type: 'utterance' | 'user_input' | 'ui_embed' | 'transition';
  text?: string;
  component?: string;
  expectation?: string;
  note?: string;
}

export const chapter2Script: ConversationTurn[] = [
  // Phase 1: Wellness day-of lock (notification → tap)
  {
    id: 'w1_ui_wellness_lock',
    speaker: 'system',
    type: 'ui_embed',
    component: 'LockScreenWellness',
    note: 'Reuses LockScreen component with wellness visit notification.',
  },
  {
    id: 'w1_user_tap_notification',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Tap notification to continue',
  },

  // Phase 2: Active video visit
  {
    id: 'w2_ui_video_visit',
    speaker: 'system',
    type: 'ui_embed',
    component: 'VideoVisit',
    note: 'Provider name + duration (18:00); PiP self-view; mute/video; End call.',
  },
  {
    id: 'w2_user_end_call',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Tap End call when visit completes',
  },

  // Phase 3: Handoff to Chapter 3
  {
    id: 'w3_transition_post_visit',
    speaker: 'system',
    type: 'transition',
    note: 'Resume in Chapter 3 — Post-visit wellness assessment.',
  },
];

/**
 * Interpolate variables into conversation text
 */
export function interpolateText(text: string, variables: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
}

/**
 * Example variable map for facilitators / tests (override in app)
 */
export const chapter2DefaultVariables: Record<string, string> = {
  userName: 'Charles',
  providerName: 'Dr. Henderson',
  duration: '18:00',
};

/**
 * Disclaimer text for Chapter 2 (telehealth / video)
 */
export const chapter2Disclaimer =
  'Video visits use your device camera and microphone. This prototype simulates a session for demonstration; it is not a substitute for real medical care or emergency services.';
