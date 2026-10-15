/**
 * Title: Post visit chat with HITL
 * Source: Google Doc story template
 * Chapter: 5
 * Flow ID: post_visit_chat_with_hitl
 *
 * FACT KEY MAP (canonical_key => label)
 * - memberFirstName => Member first name
 * - appointmentDate => Appointment date
 * - specialistFullName => Specialist full name
 * - nurseCareManagerName => Nurse Care Manager name
 *
 * PHASE OUTLINE
 * - Phase 1: Post-visit follow-up introduction
 * - Phase 2: Specialist recap and care plan
 * - Phase 3: Next steps and ongoing support
 *
 * MERGED FACT LIST (chapter5DefaultVariables)
 * - memberFirstName: "Charles"
 * - appointmentDate: "January 15, 2027"
 * - specialistFullName: "Dr. Joseph Moreno"
 * - nurseCareManagerName: "Sarah"
 *
 * Assumptions:
 * - flowId "post_visit_chat_with_hitl" inferred from the story title "Post visit chat with HITL" by converting to lower_snake_case.
 * - Beat structure, phases, and exact wording for all ConversationTurns are assumed because the underlying §3 Beats table from the Google Doc was not available in this context. All turns are drafted from inferred "What happens" style descriptions of a typical post-visit HITL chat and may need to be aligned with the actual template.
 * - No additional facts beyond the provided key facts were inferred.
 */

interface ConversationTurn {
  id: string;
  type: "bot" | "user" | "system";
  speaker: "Dot" | "Member" | "CareTeam" | "System";
  utterance?: string;
  user_input?: string;
  note?: string;
}

// Simple string interpolation helper
function interpolateText(
  template: string,
  variables: Record<string, string>
): string {
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    Object.prototype.hasOwnProperty.call(variables, key) ? variables[key] : `{${key}}`
  );
}

// Phase 1: Post-visit follow-up introduction
const chapter5Script: ConversationTurn[] = [
  {
    id: "post_visit_chat_with_hitl_bot_intro",
    type: "bot",
    speaker: "Dot",
    utterance:
      "Hi {memberFirstName}, this is Dot from Included Health. I see you had a visit with {specialistFullName} on {appointmentDate}. I’m here to help answer questions and share a quick recap.",
    note:
      "Intro after a completed specialist visit, referencing the specialist's name and appointment date."
  },
  {
    id: "post_visit_chat_with_hitl_user_confirm_present",
    type: "user",
    speaker: "Member",
    user_input: "Hi. Yes, I had that visit.",
    note:
      "Member confirms they completed the appointment. Wording assumed from the likely 'What happens' description."
  },

  // Phase 2: Specialist recap and care plan
  {
    id: "post_visit_chat_with_hitl_bot_offer_recap",
    type: "bot",
    speaker: "Dot",
    utterance:
      "Great. {nurseCareManagerName}, your Nurse Care Manager, reviewed the notes from {specialistFullName}. I can walk you through the main takeaways and next steps they recommended. Would you like a short recap now?",
    note:
      "Dot introduces the human-in-the-loop (Nurse Care Manager) review and offers a concise recap."
  },
  {
    id: "post_visit_chat_with_hitl_user_accept_recap",
    type: "user",
    speaker: "Member",
    user_input: "Yes, a short recap would be helpful.",
    note:
      "Member accepts the recap option. Exact wording inferred from the recap acceptance behavior."
  },
  {
    id: "post_visit_chat_with_hitl_bot_share_recap",
    type: "bot",
    speaker: "Dot",
    utterance:
      "Here’s a brief summary of your visit with {specialistFullName}: they reviewed your current concerns, went over your recent test results, and confirmed your treatment plan. {nurseCareManagerName} also checked that everything in the plan is clinically appropriate for you.",
    note:
      "High-level recap; specific clinical details intentionally omitted so the script stays generic."
  },

  // Phase 3: Next steps and ongoing support
  {
    id: "post_visit_chat_with_hitl_bot_next_steps",
    type: "bot",
    speaker: "Dot",
    utterance:
      "Next, I can help you understand your follow-up steps, like medications, labs, or scheduling another visit. What questions do you have about what comes after this appointment?",
    note:
      "Dot transitions from recap into next steps and invites open-ended questions."
  },
  {
    id: "post_visit_chat_with_hitl_user_ask_question",
    type: "user",
    speaker: "Member",
    user_input: "I’m not totally sure what I’m supposed to do next.",
    note:
      "Member signals confusion or uncertainty about their care plan. Wording assumed from a typical 'What happens' description."
  },
  {
    id: "post_visit_chat_with_hitl_bot_connect_care_team",
    type: "bot",
    speaker: "Dot",
    utterance:
      "Thanks for letting me know. I can answer some general questions and clarify typical next steps, and if needed I’ll loop in {nurseCareManagerName} or the Care Team so you can review your plan together.",
    note:
      "Dot clarifies role limits and offers escalation to a human Care Team member as part of HITL support."
  }
];

const chapter5DefaultVariables: Record<string, string> = {
  memberFirstName: "Charles",
  appointmentDate: "January 15, 2027",
  specialistFullName: "Dr. Joseph Moreno",
  nurseCareManagerName: "Sarah"
};

const chapter5StoryBible = {
  chapter: 5,
  flowId: "post_visit_chat_with_hitl",
  title: "Post visit chat with HITL",
  facts: {
    ...chapter5DefaultVariables
  },
  labelsByKey: {
    memberFirstName: "Member first name",
    appointmentDate: "Appointment date",
    specialistFullName: "Specialist full name",
    nurseCareManagerName: "Nurse Care Manager name"
  }
};

const chapter5Disclaimer =
  "Dot can provide generalized AI-generated answers for select healthcare questions and connect you to the Care Team any time, but it is not a substitute for professional medical advice.";

export {
  ConversationTurn,
  interpolateText,
  chapter5Script,
  chapter5DefaultVariables,
  chapter5StoryBible,
  chapter5Disclaimer
};