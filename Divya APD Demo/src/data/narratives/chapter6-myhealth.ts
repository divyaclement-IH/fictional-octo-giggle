/**
 * Chapter 6 – My Health Exploration
 *
 * flowId: my_health_exploration
 * - Assumption: flowId was inferred from the chapter title "My Health Exploration"
 *   by converting to lower_snake_case.
 * - No "Exact words" text was provided for the single beat; the beat's member-facing
 *   prompt was inferred solely from the "What happens" description and noted on that turn.
 * - No placeholders were referenced in the beats or disclaimer; defaultVariables and
 *   facts are therefore present with default values from the story bible.
 * - No action ID namespace was given; the Required Action was updated to "action:followup_visit"
 *   which triggers when the user clicks the "Book your follow-up visit" action card on the
 *   Today screen, advancing to Chapter 7.
 * - There are no branches beyond what is documented in the template.
 */

export interface ConversationTurn {
  id: string;
  speaker: 'dot' | 'sarah' | 'care_team' | 'user' | 'system';
  type: 'utterance' | 'user_input' | 'ui_embed' | 'transition' | 'action_gate';
  text?: string;
  component?: string;
  expectation?: string;
  note?: string;
  requiredAction?: string;
}

export interface CastMember {
  key: string;
  roleType: string;
  displayName: string;
  description: string;
}

/**
 * Chapter 6 script
 */
export const chapter6Script: ConversationTurn[] = [
  // Phase 1: Member explores the My Health section of the app via main navigation
  {
    id: 'my_health_exploration_001',
    speaker: 'system',
    type: 'action_gate',
    component: 'My Health Section of the App',
    note: 'Member explores the My Health section of the app and taps around as needed. This is an action gate that pauses the script and navigates to Chapter 7 when the user clicks the "Book your follow-up visit" action card on the Today screen.',
    requiredAction: 'action:followup_visit',
  },
];

/**
 * Cast table mapped to CastMember[]
 */
export const chapter6Cast: CastMember[] = [
  {
    key: 'dot',
    roleType: 'dot',
    displayName: 'Dot',
    description: 'The Dot assistant',
  },
  {
    key: 'sarah',
    roleType: 'sarah',
    displayName: 'Sarah',
    description: 'Nurse care manager/NCM who assists the member',
  },
  {
    key: 'member',
    roleType: 'user',
    displayName: 'You',
    description: 'The member / patient',
  },
];

export function interpolateText(text: string, variables: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
}

/**
 * Default variables inferred from Facts (§2)
 */
export const chapter6DefaultVariables: Record<string, string> = {
  memberFirstName: 'Charles',
  appointmentDate: 'January 15, 2027',
  specialistFullName: 'Dr. Joseph Moreno',
  pcpFullName: 'Dr. Scott Henderson',
};

/**
 * Story bible metadata
 */
export const chapter6StoryBible = {
  chapter: 6,
  flowId: 'my_health_exploration',
  title: 'My Health Exploration',
  facts: {
    memberFirstName: chapter6DefaultVariables.memberFirstName,
    appointmentDate: chapter6DefaultVariables.appointmentDate,
    specialistFullName: chapter6DefaultVariables.specialistFullName,
    pcpFullName: chapter6DefaultVariables.pcpFullName,
  },
  labelsByKey: {
    memberFirstName: 'Member first name',
    appointmentDate: 'Appointment date',
    specialistFullName: 'Specialist full name',
    pcpFullName: 'PCP full name',
  },
};

/**
 * Disclaimer from §6
 */
export const chapter6Disclaimer =
  'This experience is a prototype and does not replace medical advice. Please consult your healthcare provider for personalized recommendations.';
