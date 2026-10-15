/**
 * Chapter 5 – Post visit chat with HITL
 *
 * flowId: post_visit_chat_with_hitl
 * - Assumption: No explicit Flow ID was provided in the template, so this was
 *   derived from the chapter title "Post visit chat with HITL" by converting
 *   to lower_snake_case.
 *
 * Placeholder defaults:
 * - memberFirstName: "Charles"
 *   From Facts table: "Member first name, Charles". Used for greeting.
 * - appointmentDate: "January 15, 2027"
 *   From Facts table: "Appointment date, January 15, 2027".
 * - specialistFullName: "Dr. Joseph Moreno"
 *   From Facts table: "Specialist full name, Dr. Joseph Moreno".
 * - nurseCareManagerName: "Sarah"
 *   From Facts table: "Nurse Care Manager/NCM, Sarah". No explicit code key
 *   given, so a sensible camelCase key was inferred from the label.
 *
 * All script text is taken verbatim from the Beats table except where the
 * "Exact words" cell was completely blank (the final Dot line). That one line
 * was drafted based solely on the corresponding "What happens" description and
 * is noted in the `note` field for that turn.
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

export const chapter5Script: ConversationTurn[] = [
  // Phase 1: Lock screen notification and entry into chat
  {
    id: 'post_visit_chat_with_hitl_1',
    speaker: 'system',
    type: 'ui_embed',
    text: 'Title: Your visit with Dr. Moreno is coming up Body: Press and hold to access your insurance card for easy check-in',
    component: 'LockScreen + LockNotification',
    note: 'The user can tap and hold the lock screen to view their insurance card (stub in for now with a placeholder) or tap the screen to go to the next beat.',
  },
  {
    id: 'post_visit_chat_with_hitl_2',
    speaker: 'system',
    type: 'transition',
    component: 'Chat',
    note: 'Opens chat with Dot message.',
  },

  // Phase 2: Dot introduces cost concern and offers connection to Nurse Care Manager
  {
    id: 'post_visit_chat_with_hitl_3',
    speaker: 'dot',
    type: 'utterance',
    text: "Hi Charles. It looks like Dr. Moreno ordered an endoscopy at NW Digestive Health Center as a next step in your treatment plan. We'd like to discuss with you, as this procedure may generate a higher than normal out-of-pocket expense. Can I connect you with a Nurse Care Manager now to discuss your options?",
    component: 'MessageBubble (Dot)',
  },
  {
    id: 'post_visit_chat_with_hitl_4',
    speaker: 'user',
    type: 'user_input',
    component: 'MessageBubble (Member)',
    expectation: 'Member types any response (e.g., "Yes, please" or "What does that mean?") to proceed to Sarah joining the chat.',
    note: 'Any user response will bring in Sarah.',
  },

  // Phase 3: Sarah joins and offers to move appointment to a lower-cost facility
  {
    id: 'post_visit_chat_with_hitl_5',
    speaker: 'system',
    type: 'utterance',
    text: '12:34 PM Sarah has joined the chat',
    component: 'SystemMessage',
    note: 'Sarah will continue the conversation.',
  },
  {
    id: 'post_visit_chat_with_hitl_6',
    speaker: 'sarah',
    type: 'utterance',
    text: "Hi Charles, my name is Sarah and I'm a Nurse Care Manager here at Included Health. I see that Dr. Moreno ordered an endoscopy for you at NW Digestive Health Center. While that facility is in network, the cost of the procedure may be higher than it would be at other locations. It looks like the same provider offers the procedure at another location called Memphis Surgery Center. Would you like me to shift your appointment to that facility instead?",
    component: 'CareTeamBubble',
    note: 'Wait for user input.',
  },
  {
    id: 'post_visit_chat_with_hitl_7',
    speaker: 'user',
    type: 'user_input',
    component: 'MessageBubble (Member)',
    expectation: 'Member responds (e.g., "Yes, please move it" or "No, keep it where it is") to progress to Sarah\'s response.',
    note: 'Any user response will progress to Sarah\'s response. Branch outcomes, if any, are handled outside this linear script.',
  },

  // Phase 4: Confirmation, open-ended help, and clinical Q&A
  {
    id: 'post_visit_chat_with_hitl_8',
    speaker: 'sarah',
    type: 'utterance',
    text: "Perfect. I'll work on that and get back to you soon with an update. Is there anything else I can help you with in the meantime?",
    component: 'CareTeamBubble',
    note: 'Wait for user input.',
  },
  {
    id: 'post_visit_chat_with_hitl_9',
    speaker: 'user',
    type: 'user_input',
    component: 'MessageBubble (Member)',
    expectation: 'Member asks follow-up question(s) or raises concerns (e.g., about pain, prep, or recovery).',
    note: 'Any user response will progress to Sarah\'s response. This line is a generic prompt for questions that leads into the educational content.',
  },
  {
    id: 'post_visit_chat_with_hitl_10',
    speaker: 'sarah',
    type: 'utterance',
    text: "I understand your concerns and am glad you asked. For the procedure, you will undergo moderate sedation, so you shouldn't experience any pain during your endoscopy. Afterwards, you may have some mild discomfort in your throat or stomach, but you can take Tylenol for this and it should subside in 24-48 hours.",
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: 'post_visit_chat_with_hitl_11',
    speaker: 'sarah',
    type: 'utterance',
    text: "There a few things you should do to prepare for the procedure:\n\n• Fasting: You should not eat any solid food for at least 8 hours before your appointment. Clear liquids are usually allowed up until 2–4 hours before.\n\n• Medication Adjustments: Some medications must be stopped a few days before the procedure. In your case, you should be fine to continue with the Lisinopril.\n\n• Logistics: Be sure to arrange for someone to drive you home, since you'll be sedated for the procedure.",
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: 'post_visit_chat_with_hitl_12',
    speaker: 'sarah',
    type: 'utterance',
    text: "Recovery is typically quick, with most patients returning to normal activities within 24 hours. You'll want to reintroduce food and water slowly. Soft foods like soup, crackers or pudding are best, and you should avoid spicy, greasy or acidic foods.\n\nThere are a few common side effects to be aware of:\n\n• A sore throat often occurs a day or two following the procedure — you can soothe it with lozenges, warm tea, or a saltwater gargle.\n\n• Bloating or gas can sometimes be caused by air introduced during the test, but typically resolves within a few hours.",
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: 'post_visit_chat_with_hitl_13',
    speaker: 'sarah',
    type: 'utterance',
    text: 'Do you have any other questions?',
    component: 'CareTeamBubble',
    note: 'Wait for user input',
  },
  {
    id: 'post_visit_chat_with_hitl_14',
    speaker: 'user',
    type: 'user_input',
    component: 'MessageBubble (Member)',
    expectation: 'Member will type in anything',
    note: 'Any user response will progress to Sarah\'s response.',
  },

  // Phase 5: Wrap-up, next steps card, and chat closure
  {
    id: 'post_visit_chat_with_hitl_15',
    speaker: 'sarah',
    type: 'utterance',
    text: "Please reach out if you need anything else, and we'll get back to you about scheduling the procedure. I've also updated your next steps in the app, to include some useful information on how to prepare, your recovery, and what comes next. You can navigate there by tapping the card below.",
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: 'post_visit_chat_with_hitl_16',
    speaker: 'system',
    type: 'action_gate',
    text: 'Body text:Review your next steps, track your progress and manage prescriptions Button text: Show me',
    component: 'ServiceCard',
    note: 'Clicking button progresses to the next turns (Sarah leaves, Dot wraps up).',
    requiredAction: 'service_card:next_steps_clicked',
  },
  {
    id: 'post_visit_chat_with_hitl_17',
    speaker: 'system',
    type: 'utterance',
    text: '12:38 PM Sarah has left the chat',
    component: 'SystemMessage',
  },
  {
    id: 'post_visit_chat_with_hitl_18',
    speaker: 'dot',
    type: 'utterance',
    text: 'You can close this chat whenever you\'re ready.',
    note: 'Exact words were not provided in the template for this Dot line; this copy is inferred solely from the "What happens" description, which was blank, and the context of ending the chat.',
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
