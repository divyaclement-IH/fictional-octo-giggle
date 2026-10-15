/**
 * Chapter 5: HITL
 * Story Bible: chapter5_hitl
 * Filename: chapter5-hitl.ts
 *
 * Date / Notification Details:
 * - Appointment date: January 15, 2027
 * - Lock screen notification: "Your visit with Dr. Moreno is coming up"
 * - Notification body: "Press and hold to access your insurance card for easy check-in"
 *
 * Variables used:
 * - {memberFirstName}: Charles — Greeting name in chat
 * - {appointmentDate}: January 15, 2027 — Localized in UI
 * - {specialistFullName}: Dr. Joseph Moreno — Gastroentorolgy specialist
 *
 * Required Actions:
 * - action:take_me_there — Triggered when the member taps the ServiceCard button "Take me there" to proceed toward the next chapter.
 *
 * Assumptions / inferences:
 * - Chapter ID was generated from chapter number and title using the required convention: chapter5_hitl.
 * - Filename was generated from the same normalized chapter name: chapter5-hitl.ts.
 * - No explicit Flow ID was provided, so flowId was inferred as 'hitl' from the chapter title.
 * - The lock screen notification beat is treated as non-blocking ui_embed because the beat is authored as Show, not Action gate, even though the description mentions a possible tap-and-hold interaction.
 * - The final ServiceCard beat is treated as an action_gate because progression depends on clicking its button to continue to the next chapter.
 * - The ServiceCard beat did not include an explicit Required Action ID in the template, so 'action:take_me_there' was inferred from the authored button label "Take me there".
 * - User input beats omit text and use expectation strings derived from the authored "Exact words" or "What happens" guidance.
 * - Branches section did not define any alternate paths beyond an empty table, so no branch-specific notes were added.
 * - The second paragraph in the disclaimer section appears to be template instruction text rather than product disclaimer copy, so only the actual disclaimer sentence is used.
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

const flowId = 'hitl';

export function interpolateText(text: string, variables: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
}

export const chapter5DefaultVariables: Record<string, string> = {
  memberFirstName: 'Charles',
  appointmentDate: 'January 15, 2027',
  specialistFullName: 'Dr. Joseph Moreno',
};

export const chapter5Disclaimer =
  'This experience is a prototype and does not replace medical advice. Please consult your healthcare provider for personalized recommendations.';

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

export const chapter5Script: ConversationTurn[] = [
  // Phase 1: Notification and entry into chat
  {
    id: `${flowId}_01_notification`,
    speaker: 'system',
    type: 'ui_embed',
    component: 'LockScreen + LockNotification',
    text: 'Title: Your visit with Dr. Moreno is coming up Body: Press and hold to access your insurance card for easy check-in',
    note: 'Informational lock screen notification. The beat description mentions tap-and-hold access to the insurance card, but this row is authored as Show so progression should not block here.',
  },
  {
    id: `${flowId}_02_open_chat`,
    speaker: 'system',
    type: 'transition',
    component: 'Chat',
    note: 'Opens chat with Dot message.',
  },
  {
    id: `${flowId}_03_dot_intro`,
    speaker: 'dot',
    type: 'utterance',
    text: "Hi Charles. It looks like Dr. Moreno ordered an endoscopy at NW Digestive Health Center as a next step in your treatment plan. We'd like to discuss with you, as this procedure may generate a higher than normal out-of-pocket expense. Can I connect you with a Nurse Care Manager now to discuss your options?",
    component: 'MessageBubble (Dot)',
  },
  {
    id: `${flowId}_04_user_reply_to_dot`,
    speaker: 'user',
    type: 'user_input',
    component: 'MessageBubble (Member)',
    expectation: 'Any user response consenting to continue or asking a question.',
    note: 'Any user response will bring in Sarah.',
  },
  {
    id: `${flowId}_05_sarah_joined`,
    speaker: 'system',
    type: 'ui_embed',
    component: 'SystemMessage',
    text: '12:34 PM Sarah has joined the chat',
    note: 'Sarah will continue the conversation.',
  },

  // Phase 2: Sarah discusses lower-cost facility option
  {
    id: `${flowId}_06_sarah_facility_option`,
    speaker: 'sarah',
    type: 'utterance',
    text: "Hi Charles, my name is Sarah and I'm a Nurse Care Manager here at Included Health. I see that Dr. Moreno ordered an endoscopy for you at NW Digestive Health Center. While that facility is in network, the cost of the procedure may be higher than it would be at other locations. It looks like the same provider offers the procedure at another location called Memphis Surgery Center. Would you like me to shift your appointment to that facility instead?",
    component: 'CareTeamBubble',
    note: 'Wait for user input.',
  },
  {
    id: `${flowId}_07_user_reply_to_sarah`,
    speaker: 'user',
    type: 'user_input',
    component: 'MessageBubble (Member)',
    expectation: 'Any user response to Sarah’s proposed facility change.',
    note: "Authored Exact words were 'Types any input'. Any user response will progress to Sarah’s response.",
  },
  {
    id: `${flowId}_08_sarah_confirms_and_checks_more_help`,
    speaker: 'sarah',
    type: 'utterance',
    text: "Perfect. I'll work on that and get back to you soon with an update. Is there anything else I can help you with in the meantime?",
    component: 'CareTeamBubble',
    note: 'Wait for user input.',
  },
  {
    id: `${flowId}_09_user_follow_up_question`,
    speaker: 'user',
    type: 'user_input',
    component: 'MessageBubble (Member)',
    expectation: 'Any follow-up question or concern from the member.',
    note: "Authored Exact words were 'Types any input'. Any user response will progress to Sarah’s response.",
  },

  // Phase 3: Procedure preparation and recovery guidance
  {
    id: `${flowId}_10_sarah_pain_and_sedation_info`,
    speaker: 'sarah',
    type: 'utterance',
    text: "I understand your concerns and am glad you asked. For the procedure, you will undergo moderate sedation, so you shouldn't experience any pain during your endoscopy. Afterwards, you may have some mild discomfort in your throat or stomach, but you can take Tylenol for this and it should subside in 24-48 hours.",
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: `${flowId}_11_sarah_prep_guidance`,
    speaker: 'sarah',
    type: 'utterance',
    text: "There a few things you should do to prepare for the procedure:\n\n• Fasting: You should not eat any solid food for at least 8 hours before your appointment. Clear liquids are usually allowed up until 2–4 hours before.\n\n• Medication Adjustments: Some medications must be stopped a few days before the procedure. In your case, you should be fine to continue with the Lisinopril.\n\n• Logistics: Be sure to arrange for someone to drive you home, since you'll be sedated for the procedure.",
    component: 'CareTeamBubble',
    note: 'Bulleted guidance preserved with explicit line breaks. Sarah will then send another follow up message.',
  },
  {
    id: `${flowId}_12_sarah_recovery_guidance`,
    speaker: 'sarah',
    type: 'utterance',
    text: "Recovery is typically quick, with most patients returning to normal activities within 24 hours. You'll want to reintroduce food and water slowly. Soft foods like soup, crackers or pudding are best, and you should avoid spicy, greasy or acidic foods. There are a few common side effects to be aware of:\n\n• A sore throat often occurs a day or two following the procedure — you can soothe it with lozenges, warm tea, or a saltwater gargle.\n\n• Bloating or gas can sometimes be caused by air introduced during the test, but typically resolves within a few hours.",
    component: 'CareTeamBubble',
    note: 'Bulleted guidance preserved with explicit line breaks. Sarah will then send another follow up message.',
  },
  {
    id: `${flowId}_13_sarah_more_questions`,
    speaker: 'sarah',
    type: 'utterance',
    text: 'Do you have any other questions?',
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: `${flowId}_14_user_final_question`,
    speaker: 'user',
    type: 'user_input',
    component: 'MessageBubble (Member)',
    expectation: 'Any final user question or acknowledgment.',
    note: "Authored Exact words were 'Types any input'. Any user response will progress to Sarah’s response.",
  },

  // Phase 4: Handoff to next steps card and chapter exit
  {
    id: `${flowId}_15_sarah_next_steps_handoff`,
    speaker: 'sarah',
    type: 'utterance',
    text: "Please reach out if you need anything else, and we'll get back to you about scheduling the procedure. I've also updated your next steps in the app, to include some useful information on how to prepare, your recovery, and what comes next. You can navigate there by tapping the card below.",
    component: 'CareTeamBubble',
    note: 'Sarah will then send another follow up message.',
  },
  {
    id: `${flowId}_16_next_steps_card`,
    speaker: 'system',
    type: 'action_gate',
    component: 'ServiceCard',
    text: 'title - hidden description - Review your next steps, track your progress and manage prescriptions buttonLabel - Take me there showRecommended - hide sla - hide',
    requiredAction: 'action:take_me_there',
    note: 'Interactive ServiceCard. Wait for the member to tap the "Take me there" button before proceeding. Clicking the button progresses to chapter 6 (not built yet).',
  },
  {
    id: `${flowId}_17_sarah_left_chat`,
    speaker: 'system',
    type: 'ui_embed',
    component: 'SystemMessage',
    text: '12:38 PM Sarah has left the chat',
  },
];