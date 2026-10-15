/**
 * Chapter 4: Gastroenterologist booking (Help with Booking)
 *
 * Based on: APD_Greenfield_Stakeholder_Plan.md §5.3 (booking assistance + confirmation)
 * Legacy UI reference: OBGYNBookingChat.tsx (repurposed for gastro / Dr. Moreno)
 *
 * Variables:
 * - userName: Member first name (Charles)
 * - specialistFullName: Dr. Joseph Moreno (display in welcome + confirmation)
 * - specialistFacility: Healing Grove Health Center (matches booking chat card)
 * - specialistCopay: e.g. $50 (prototype uses $50 in UI; align with benefits if needed)
 * - gastroAppointmentDay: Friday, January 15
 * - gastroAppointmentTime: 9:30 AM (confirmed line in OBGYNBookingChat handleProgressComplete)
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
  // Entry from Chapter 3
  {
    id: 'gb_transition_from_profile',
    speaker: 'system',
    type: 'transition',
    note: 'Continue after Chapter 3 Get help with booking; route state may reset header to Help with Booking.',
  },

  // Phase 1: Booking chat shell + opening + doctor card
  {
    id: 'gb_ui_booking_shell',
    speaker: 'system',
    type: 'ui_embed',
    component: 'HelpWithBookingShell',
    note: 'ChatHeader title: Help with Booking; back / done per implementation.',
  },
  {
    id: 'gb_dot_open',
    speaker: 'dot',
    type: 'utterance',
    text: 'You selected {specialistFullName} – great choice! I have on record that you prefer appointments on Friday mornings. Does that still work best for you?',
    note: 'Opening message id gb_dot_open; DoctorProfileCard renders below this bubble in reference UI.',
  },
  {
    id: 'gb_ui_doctor_profile_card',
    speaker: 'system',
    type: 'ui_embed',
    component: 'DoctorProfileCard',
    note: 'Name {specialistFullName}, specialty Gastroenterology, Tier 1, location {specialistFacility}, distance placeholder.',
  },
  {
    id: 'gb_user_friday_preference',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Affirmative (Yes) or adjusted preference',
  },

  // Phase 2: Scheduling prompt + progress tracker
  {
    id: 'gb_dot_any_questions',
    speaker: 'dot',
    type: 'utterance',
    text: 'Perfect! Do you have any questions while I work on scheduling your appointment?',
    note: 'Shown after initial user reply in reference flow; then progress tracker appears.',
  },
  {
    id: 'gb_ui_progress_tracker',
    speaker: 'system',
    type: 'ui_embed',
    component: 'ProgressTrackerCard',
    note: 'Pinned “Booking in progress…” steps; animates through confirm availability → contact office → notify member; onComplete fires confirmation.',
  },

  // Phase 3: Optional cost / follow-up (mock AI may stream variant copy)
  {
    id: 'gb_user_mid_booking_message',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Optional: cost question (e.g. How much?) or short acknowledgment',
    note: 'If user asks copay/cost, Dot responds with Tier 1 copay copy (see gb_dot_copay).',
  },
  {
    id: 'gb_dot_copay',
    speaker: 'dot',
    type: 'utterance',
    text: 'Specialist office visits have a {specialistCopay} copay. As long as you use Included Health to find doctors, we\'ll make sure you don\'t pay more than that for great specialty care.',
    note: 'Reference implementation sends this after user message during booking phase; may stream in app.',
  },

  // Phase 4: Confirmation
  {
    id: 'gb_dot_confirmed',
    speaker: 'dot',
    type: 'utterance',
    text: 'Great news! Your appointment with {specialistFullName} is confirmed for {gastroAppointmentDay} at {gastroAppointmentTime}.\n\nYou\'ll receive a reminder notification before your visit. Let me know if you need anything in the meantime.',
    note: 'Fires when progress tracker completes in reference UI.',
  },
  {
    id: 'gb_user_done',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Optional follow-up chat or Done to exit',
    note: 'ChatHeader Done may call onConversationComplete → gastro lock screen in app.',
  },

  // Handoff to Chapter 5 (day-of gastro lock)
  {
    id: 'gb_transition_day_of_lock',
    speaker: 'system',
    type: 'transition',
    note: 'Chapter 5 — Gastro day-of lock screen + insurance card (LockScreenWithInsuranceCard).',
  },
];

export function interpolateText(text: string, variables: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
}

export const chapter4DefaultVariables: Record<string, string> = {
  userName: 'Charles',
  specialistFullName: 'Dr. Joseph Moreno',
  specialistFacility: 'Healing Grove Health Center',
  specialistCopay: '$50',
  gastroAppointmentDay: 'Friday, January 15',
  gastroAppointmentTime: '9:30 AM',
};

export const chapter4Disclaimer =
  'Booking and copay amounts are illustrative for this prototype. Confirm real benefits and costs with your plan documents.';
