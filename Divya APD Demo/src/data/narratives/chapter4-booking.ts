/**
 * Chapter 4: Gastroenterologist Booking (Help with Booking)
 *
 * Based on: APD_Greenfield_Stakeholder_Plan.md §5.3 (booking assistance + confirmation)
 * Flow: Booking chat → Doctor card → Preference question → Cost question → Progress tracker → Confirmation
 *
 * Variables:
 * - userName: Member first name (Charles)
 * - specialistFullName: Dr. Joseph Moreno
 * - specialistFacility: Valley Medical Center
 * - specialistCopay: $50
 * - gastroAppointmentDay: Friday, January 15
 * - gastroAppointmentTime: 9:30 AM
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

export const chapter4Script: ConversationTurn[] = [
  // Phase 1: Opening + doctor card
  {
    id: 'gb_dot_open',
    speaker: 'dot',
    type: 'utterance',
    text: 'You selected {specialistFullName} – great choice! I have on record that you prefer appointments on Friday mornings. Does that still work best for you?',
  },
  {
    id: 'gb_ui_doctor_profile_card',
    speaker: 'system',
    type: 'ui_embed',
    component: 'DoctorProfileCard',
    note: 'Reuses SpecialistCard without secondary button',
  },
  {
    id: 'gb_user_friday_preference',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Affirmative (Yes) or adjusted preference',
  },

  // Phase 2: Cost question
  {
    id: 'gb_dot_any_questions',
    speaker: 'dot',
    type: 'utterance',
    text: 'Perfect! Do you have any questions while I work on scheduling your appointment?',
  },
  {
    id: 'gb_user_cost_question',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Cost question (e.g. How much?)',
  },

  // Phase 3: Copay response + progress tracker
  {
    id: 'gb_dot_copay',
    speaker: 'dot',
    type: 'utterance',
    text: 'Specialist office visits have a {specialistCopay} copay. As long as you use Included Health to find doctors, we\'ll make sure you don\'t pay more than that for great specialty care.',
  },
  {
    id: 'gb_ui_progress_tracker',
    speaker: 'system',
    type: 'ui_embed',
    component: 'ProgressTrackerCard',
    note: 'Auto-advances through steps: confirm availability → contact office → notify member',
  },

  // Phase 4: Confirmation
  {
    id: 'gb_dot_confirmed',
    speaker: 'dot',
    type: 'utterance',
    text: 'Great news! Your appointment with {specialistFullName} is confirmed for {gastroAppointmentDay} at {gastroAppointmentTime}.\n\nYou\'ll receive a reminder notification before your visit. Let me know if you need anything in the meantime.',
    note: 'Final message - user can click Done button to navigate to Chapter 5',
  },
];

/**
 * Interpolate variables into conversation text
 */
export function interpolateText(text: string, variables: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
}

/**
 * Default variables for Chapter 4
 */
export const chapter4DefaultVariables: Record<string, string> = {
  userName: 'Charles',
  specialistFullName: 'Dr. Joseph Moreno',
  specialistFacility: 'Valley Medical Center',
  specialistCopay: '$50',
  gastroAppointmentDay: 'Friday, January 15',
  gastroAppointmentTime: '9:30 AM',
};

/**
 * Disclaimer text for Chapter 4
 */
export const chapter4Disclaimer =
  'Booking and copay amounts are illustrative for this prototype. Confirm real benefits and costs with your plan documents.';
