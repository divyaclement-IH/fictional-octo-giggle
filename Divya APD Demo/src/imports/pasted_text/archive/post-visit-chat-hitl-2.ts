/**
 * Chapter 5 – Post visit chat with HITL
 *
 * flowId:
 * - Explicit flow ID was not provided in the template; derived from the chapter title
 *   "Post visit chat with HITL" as "post_visit_chat_with_hitl".
 *
 * Placeholders and default values:
 * - {memberFirstName}: "Charles"
 * - {appointmentDate}: "January 15, 2027"
 * - {specialistFullName}: "Dr. Joseph Moreno"
 * - {nurseCareManagerName}: "Sarah"
 *
 * All defaults are taken directly from the Facts table, except:
 * - {nurseCareManagerName} is explicitly introduced as a variable name here, mapped
 *   from the "Nurse Care Manager/NCM: Sarah" fact row, so we can reference the
 *   nurse care manager's name consistently in dialogue if needed.
 *
 * Beats:
 * - Beats are mapped 1:1 from the Beats table of the story template.
 * - No extra beats have been added; order and wording are preserved verbatim
 *   except for TypeScript string escaping.
 * - One beat had an empty "Exact words" cell (the "Go / System / Chat" row);
 *   its conversational text was drafted from the "What happens" description
 *   and is annotated in the `note` field.
 */

export interface ConversationTurn {
  id: string;
  speaker: 'dot' | 'sarah' | 'care_team' | 'user' | 'system';
  type: 'utterance' | 'user_input' | 'ui_embed' | 'transition';
  text?: string;
  component?: string;
  expectation?: string;
  note?: string;
}

export const chapter5Script: ConversationTurn[] = [
  // Phase 1: Lock screen notification before the visit
  {
    id: 'post_visit_chat_with_hitl_001',
    speaker: 'system',
    type: 'ui_embed',
    text: 'Title: Your visit with {specialistFullName} is coming up Body: Press and hold to access your insurance card for easy check-in',
    component: 'pre_visit_lock_screen_notification',
    note: 'Pre-visit lock screen with notification. The user can tap and hold the lock screen to view their insurance card (stub in for now with a placeholder) or tap the screen to go to the next beat.',
  },

  // Phase 2: Chat opens and Dot engages member about cost concerns
  {
    id: 'post_visit_chat_with_hitl_002',
    speaker: 'system',
    type: 'transition',
    text: 'Opens chat with Dot message',
    component: 'chat',
    note: 'Exact words drafted from "What happens" description in the Beats table, since the original "Exact words" cell was blank for this Go/System/Chat row.',
  },
  {
    id: 'post_visit_chat_with_hitl_003',
    speaker: 'dot',
    type: 'utterance',
    text: "Hi {memberFirstName}. It looks like {specialistFullName} ordered an endoscopy at NW Digestive Health Center as a next step in your treatment plan. We'd like to discuss with you, as this procedure may generate a higher than normal out-of-pocket expense. Can I connect you with a Nurse Care Manager now to discuss your options?",
    note: 'Dot chat message in the Dot Chat UI.',
  },
  {
    id: 'post_visit_chat_with_hitl_004',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Member types any response (e.g., "Yes", "Sure", or a question) to proceed and bring in the Nurse Care Manager.',
    note: 'Any user response will bring in Sarah. User chat utterance.',
  },

  // Phase 3: Nurse Care Manager joins and offers alternative facility
  {
    id: 'post_visit_chat_with_hitl_005',
    speaker: 'system',
    type: 'ui_embed',
    text: '12:34 PM {nurseCareManagerName} has joined the chat',
    component: 'system_chat_join_message',
    note: 'System message indicating that Sarah has joined the chat. Will need a dedicated system message component.',
  },
  {
    id: 'post_visit_chat_with_hitl_006',
    speaker: 'sarah',
    type: 'utterance',
    text: "Hi {memberFirstName}, my name is {nurseCareManagerName} and I'm a Nurse Care Manager here at Included Health. I see that {specialistFullName} ordered an endoscopy for you at NW Digestive Health Center.   While that facility is in network, the cost of the procedure may be higher than it would be at other locations.    It looks like the same provider offers the procedure at another location called Memphis Surgery Center. Would you like me to shift your appointment to that facility instead?",
    note: 'Nurse Care Manager message in chat. Waits for user input; any branching options (e.g., yes/no) should be handled as alternates in implementation.',
  },
];

export function interpolateText(text: string, variables: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
}

export const chapter5DefaultVariables: Record<string, string> = {
  memberFirstName: 'Charles',
  appointmentDate: 'January 15, 2027',
  specialistFullName: 'Dr. Joseph Moreno',
  nurseCareManagerName: 'Sarah',
};

export const chapter5StoryBible = {
  chapter: 5,
  flowId: 'post_visit_chat_with_hitl',
  title: 'Post visit chat with HITL',
  facts: {
    memberFirstName: 'Charles',
    appointmentDate: 'January 15, 2027',
    specialistFullName: 'Dr. Joseph Moreno',
    nurseCareManagerName: 'Sarah',
  },
  labelsByKey: {
    memberFirstName: 'Member first name',
    appointmentDate: 'Appointment date',
    specialistFullName: 'Specialist full name',
    nurseCareManagerName: 'Nurse Care Manager/NCM',
  },
};

export const chapter5Disclaimer =
  'This experience is a prototype and does not replace medical advice. Please consult your healthcare provider for personalized recommendations.';