/**
 * Chapter 7: Chat with Dot
 * Story Bible: chapter7_chat_with_dot
 * Filename: chapter7-chat-with-dot.ts
 *
 * Date / Notification Details:
 * - appointmentDate: March 22, 2027
 * - Notification: "Good news! You owe the minimum out of pocket cost for your recent procedure."
 * - Initial surface: LockScreen + LockNotification
 *
 * Variables used:
 * - memberFirstName: Charles — Greeting name in chat
 * - appointmentDate: March 22, 2027 — Localized in UI
 * - specialistFullName: Dr. Joseph Moreno — Gastroentorolgy specialist
 *
 * Required Actions:
 * - action:done — Triggered when user taps the "Done" button in secondary navigation
 *
 * Assumptions / inferences:
 * - Chapter ID was derived from the chapter number and title using the required lowercase underscore convention: chapter7_chat_with_dot.
 * - Filename was derived from the same title using kebab-case: chapter7-chat-with-dot.ts.
 * - No explicit Flow ID was present, so flowId was inferred as chat_with_dot from the chapter title.
 * - The first "Show" beat on LockScreen + LockNotification is treated as a non-blocking ui_embed because it is authored as "Show" rather than "Action gate", even though the beat description says the user will tap to continue.
 * - The final "Show" beat for Today screen has no authored user-facing copy, so it is represented as a ui_embed without text.
 * - PCP full name was provided in the facts table but had no code key, so it is not included in default variables.
 * - Branches section did not define any alternate paths beyond template instructions, so no branch notes were added.
 * - Disclaimer section included both the actual disclaimer and template instructional text; only the actual disclaimer sentence is used as the exported disclaimer.
 *
 * Flow ID determination:
 * - Inferred from the chapter title because no explicit Flow ID was provided in the template.
 */

export interface ConversationTurn {
  id: string;
  speaker: 'dot' | 'sarah' | 'care_team' | 'user' | 'system';
  type: 'utterance' | 'user_input' | 'ui_embed' | 'transition' | 'action_gate';
  text?: string;
  component?: string;
  expectation?: string;
  note?: string;
  requiredAction?: string;  // Required when type === 'action_gate'
}

export interface CastMember {
  key: string;
  roleType: string;
  displayName: string;
  description: string;
}

export function interpolateText(text: string, variables: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
}

const flowId = 'chat_with_dot';

export const chapter7DefaultVariables: Record<string, string> = {
  memberFirstName: 'Charles',
  appointmentDate: 'March 22, 2027',
  specialistFullName: 'Dr. Joseph Moreno',
};

export const chapter7Cast: CastMember[] = [
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

export const chapter7Disclaimer =
  'This experience is a prototype and does not replace medical advice. Please consult your healthcare provider for personalized recommendations.';

export const chapter7Script: ConversationTurn[] = [
  // Phase 1: Notification and entry
  {
    id: `${flowId}_01`,
    speaker: 'system',
    type: 'ui_embed',
    component: 'LockScreen + LockNotification',
    text: 'Title: Good news! Body: You owe the minimum out of pocket cost for your recent procedure.',
    note: 'Source beat says the user will tap the screen to go to the next beat, but no explicit action gate or required action ID was authored.',
  },
  {
    id: `${flowId}_02`,
    speaker: 'system',
    type: 'transition',
    component: 'Chat',
    note: 'Opens chat with Dot message. The top right option on the secondary navigation element has a "Done" button.',
  },

  // Phase 2: Chat with Dot
  {
    id: `${flowId}_03`,
    speaker: 'dot',
    type: 'utterance',
    text: 'Good news! The claim came in from your recent visit to Memphis Surgery Center at the minimum out-of-pocket cost, as anticipated.',
    component: 'MessageBubble (Dot)',
    note: 'Dot will then send another follow-up message',
  },
  {
    id: `${flowId}_04`,
    speaker: 'dot',
    type: 'utterance',
    text: "We'll continue to monitor your claims and alert you if something seems off. Our claims and billing support team is here to help resolve any errors and get you the best out-of-pocket cost possible based on your plan.",
    component: 'MessageBubble (Dot)',
    note: 'End of conversation. User can tap the "Done" button in the secondary navigation',
  },
  {
    id: `${flowId}_05`,
    speaker: 'system',
    type: 'action_gate',
    requiredAction: 'action:done',
    expectation: 'User taps the "Done" button in secondary navigation',
    note: 'Blocks progression until Done button is clicked, then navigates back to Today screen',
  },

  // Phase 3: Return to app navigation
  {
    id: `${flowId}_06`,
    speaker: 'system',
    type: 'ui_embed',
    component: 'Today screen',
    note: 'Navigates to app navigation showing Home screen (Today)',
  },
];
