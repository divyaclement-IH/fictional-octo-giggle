/**
 * Chapter 5: HITL
 * Story Bible: chapter5_hitl
 * Filename: chapter5-hitl.ts
 *
 * Date details:
 * - Appointment date: January 15, 2027
 *
 * Notification details:
 * - Lock screen notification shown at the start of the chapter:
 *   "Your visit with Dr. Moreno is coming up"
 * - Body:
 *   "Press and hold to access your insurance card for easy check-in"
 *
 * Variables used:
 * - memberFirstName: Charles — Greeting name in chat
 * - appointmentDate: January 15, 2027 — Localized in UI
 * - specialistFullName: Dr. Joseph Moreno — Gastroentorolgy specialist
 *
 * Additional facts noted in source but not used as placeholders in script:
 * - PCP full name: Dr. Scott Henderson
 *
 * Required Actions:
 * - action:take_me_there
 *   Triggered when the member taps the ServiceCard button labeled "Take me there".
 *   This is inferred from the beat that says clicking the button progresses to chapter 6.
 *
 * Assumptions / inferences:
 * - No explicit Flow ID was provided, so flowId was inferred as 'hitl' from the chapter title.
 * - The chapter ID was derived from chapter number + title using lowercase snake_case: chapter5_hitl.
 * - The filename was derived from chapter number + title using lowercase kebab-case: chapter5-hitl.ts.
 * - The final ServiceCard beat is interactive and therefore mapped as an action gate rather than a non-blocking ui_embed,
 *   because the source says clicking the button progresses to chapter 6.
 * - No explicit required action ID was authored for that ServiceCard beat, so 'action:take_me_there' was inferred from the button label.
 * - The lock screen and system message shows are treated as non-blocking informational UI because the source labels them as Show beats.
 * - No branches were defined, so no alternate-path notes were added.
 * - No placeholders were referenced in authored beat text, expectation, or note fields, so defaults only include referenced keys required by file exports.
 * - Bulleted lists in Sarah's authored messages were preserved using explicit \n line breaks.
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

export const chapter5Script: ConversationTurn[] = [
  // Phase 1: Lock screen notification and chat entry
  {
    id: 'hitl_01',
    speaker: 'system',
    type: 'ui_embed',
    text: 'Title: Your visit with Dr. Moreno is coming up Body: Press and hold to access your insurance card for easy check-in',
    component: 'LockScreen + LockNotification',
    note: 'The user can tap and hold the lock screen to view their insurance card (stub in for now with a placeholder) or tap the screen to go to the next beat.',
  },
  {
    id: 'hitl_02',
    speaker: 'system',
    type: 'transition',
    component: 'Chat',
    note: 'Opens chat with Dot message.',
  },
  {
    id: 'hitl_03',
    speaker: 'dot',
    type: 'utterance',
    text: "Hi Charles. It looks like Dr. Moreno ordered an endoscopy at NW Digestive Health Center as a next step in your treatment plan. We'd like to discuss with you, as this procedure may generate a higher than normal out-of-pocket expense. Can I connect you with a Nurse Care Manager now to discuss your options?",
    component: 'MessageBubble (Dot)',
  },
  {
    id: 'hitl_04',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Any user response indicating whether they want to connect with a Nurse Care Manager.',
    component: 'MessageBubble (Member)',
    note: 'Any user response will bring in Sarah.',
  },
  {
    id: 'hitl_05',
    speaker: 'system',
    type: 'ui_embed',
    text: '12:34 PM Sarah has joined the chat',
    component: 'SystemMessage',
    note: 'Sarah will continue the conversation.',
  },

  // Phase 2: Sarah discusses lower-cost facility option
  {
    id: 'hitl_06',
    speaker: 'sarah',
    type: 'utterance',
    text: "Hi Charles, my name is Sarah and I'm a Nurse Care Manager here at Included Health. I see that Dr. Moreno ordered an endoscopy for you at NW Digestive Health Center. While that facility is in network, the cost of the procedure may be higher than it would be at other locations. It looks like the same provider offers the procedure at another location called Memphis Surgery Center. Would you like me to shift your appointment to that facility instead?",
    component: 'CareTeamBubble',
    note: 'Wait for user input.',
  },
  {
    id: 'hitl_07',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Any user response about whether they want to shift the appointment location.',
    component: 'MessageBubble (Member)',
    note: "Any user response will progress to Sarah’s response.",
  },
  {
    id: 'hitl_08',
    speaker: 'sarah',
    type: 'utterance',
    text: "Perfect. I'll work on that and get back to you soon with an update. Is there anything else I can help you with in the meantime?",
    component: 'CareTeamBubble',
    note: 'Wait for user input.',
  },
  {
    id: 'hitl_09',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Any user question or concern about the procedure.',
    component: 'MessageBubble (Member)',
    note: "Any user response will progress to Sarah’s response.",
  },

  // Phase 3: Preparation, recovery, and next steps
  {
    id: 'hitl_10',
    speaker: 'sarah',
    type: 'utterance',
    text: "I understand your concerns and am glad you asked. For the procedure, you will undergo moderate sedation, so you shouldn't experience any pain during your endoscopy. Afterwards, you may have some mild discomfort in your throat or stomach, but you can take Tylenol for this and it should subside in 24-48 hours.",
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: 'hitl_11',
    speaker: 'sarah',
    type: 'utterance',
    text: "There a few things you should do to prepare for the procedure:\n\n• Fasting: You should not eat any solid food for at least 8 hours before your appointment. Clear liquids are usually allowed up until 2–4 hours before.\n\n• Medication Adjustments: Some medications must be stopped a few days before the procedure. In your case, you should be fine to continue with the Lisinopril.\n\n• Logistics: Be sure to arrange for someone to drive you home, since you'll be sedated for the procedure.",
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: 'hitl_12',
    speaker: 'sarah',
    type: 'utterance',
    text: "Recovery is typically quick, with most patients returning to normal activities within 24 hours. You'll want to reintroduce food and water slowly. Soft foods like soup, crackers or pudding are best, and you should avoid spicy, greasy or acidic foods. There are a few common side effects to be aware of:\n\n• A sore throat often occurs a day or two following the procedure — you can soothe it with lozenges, warm tea, or a saltwater gargle.\n\n• Bloating or gas can sometimes be caused by air introduced during the test, but typically resolves within a few hours.",
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: 'hitl_13',
    speaker: 'sarah',
    type: 'utterance',
    text: 'Do you have any other questions?',
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: 'hitl_14',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Any final user response or additional question.',
    component: 'MessageBubble (Member)',
    note: "Any user response will progress to Sarah’s response.",
  },
  {
    id: 'hitl_15',
    speaker: 'sarah',
    type: 'utterance',
    text: "Please reach out if you need anything else, and we'll get back to you about scheduling the procedure. I've also updated your next steps in the app, to include some useful information on how to prepare, your recovery, and what comes next. You can navigate there by tapping the card below.",
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: 'hitl_16',
    speaker: 'system',
    type: 'action_gate',
    text: 'title - hidden description - Review your next steps, track your progress and manage prescriptions buttonLabel - Take me there showRecommended - hide sla - hide',
    component: 'ServiceCard',
    requiredAction: 'action:take_me_there',
    note: 'Wait for the member to tap the ServiceCard button before proceeding. Source says clicking button progresses to chapter 6 (not built yet).',
  },
  {
    id: 'hitl_17',
    speaker: 'system',
    type: 'ui_embed',
    text: '12:38 PM Sarah has left the chat',
    component: 'SystemMessage',
  },
];

export const chapter5Cast: CastMember[] = [
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

export const chapter5DefaultVariables: Record<string, string> = {
  memberFirstName: 'Charles',
  appointmentDate: 'January 15, 2027',
  specialistFullName: 'Dr. Joseph Moreno',
};

export const chapter5StoryBible = {
  chapter: 5,
  flowId: 'hitl',
  title: 'HITL',
  facts: {
    memberFirstName: 'Charles',
    appointmentDate: 'January 15, 2027',
    specialistFullName: 'Dr. Joseph Moreno',
  },
  labelsByKey: {
    memberFirstName: 'Member first name',
    appointmentDate: 'Appointment date',
    specialistFullName: 'Specialist full name',
  },
};

export const chapter5Disclaimer =
  'This experience is a prototype and does not replace medical advice. Please consult your healthcare provider for personalized recommendations.';