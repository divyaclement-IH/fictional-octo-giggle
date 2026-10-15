/**
 * Title: Post visit chat with HITL
 * Source: Google Doc – Story Template
 * Chapter: 5
 * Flow ID: post_visit_chat_with_hitl
 *
 * FACT KEY MAP (keys → labels)
 * - memberFirstName → Member first name
 * - appointmentDate → Appointment date
 * - specialistFullName → Specialist full name
 * - nurseCareManagerName → Nurse Care Manager name
 *
 * PHASE OUTLINE
 * - Phase 1: Post-visit greeting and context setting
 * - Phase 2: Member reflection and concerns
 * - Phase 3: Nurse Care Manager guidance and next steps
 *
 * MERGED FACT LIST (default prototype values)
 * - memberFirstName: "Charles"
 * - appointmentDate: "January 15, 2027"
 * - specialistFullName: "Dr. Joseph Moreno"
 * - nurseCareManagerName: "Sarah"
 *
 * Assumptions:
 * - All facts and placeholder values are taken directly from the key facts table noted in the story template summary.
 * - No additional placeholders beyond the four listed facts were required by the beats, so no extra inferred defaults were added.
 * - The flowId "post_visit_chat_with_hitl" was confirmed by the user and is used as the ID prefix for turn IDs.
 * - Beat structure and wording are reconstructed as a faithful prototype based on the story description “Post visit chat with HITL” and the key facts; where the original Google Doc wording was not available, natural-sounding prototype copy is used while preserving the intended roles and flow.
 */

export interface ConversationTurn {
  id: string;
  /**
   * "assistant" for system / bot / care team utterances,
   * "user" for member utterances or user-input prompts.
   */
  speaker: "assistant" | "user";
  /**
   * High-level type of the turn:
   * - "utterance": a single message from speaker
   * - "user_input": explicit prompt for user free-text or choice input
   * - "note": design / implementation note, not shown to member
   */
  type: "utterance" | "user_input" | "note";
  /**
   * The natural-language text spoken or shown to the user,
   * or the note text when type === "note".
   */
  text: string;
}

// ID prefix derived from flowId: "post_visit_chat_with_hitl"
export const chapter5Script: ConversationTurn[] = [
  // Phase 1: Post-visit greeting and context setting
  {
    id: "post_visit_chat_with_hitl_assistant_intro_greeting",
    speaker: "assistant",
    type: "utterance",
    text: "Hi {memberFirstName}, I’m {nurseCareManagerName}, a Nurse Care Manager with Included Health. I see you recently had a visit with {specialistFullName} on {appointmentDate}. How are you feeling after that appointment?",
  },

  {
    id: "post_visit_chat_with_hitl_user_initial_feeling_input",
    speaker: "user",
    type: "user_input",
    text: "Open text: Member briefly describes how they’re feeling after the visit (e.g., emotions, clarity, worries).",
  },

  {
    id: "post_visit_chat_with_hitl_assistant_normalize_and_agenda",
    speaker: "assistant",
    type: "utterance",
    text: "Thank you for sharing that. It’s completely normal to have questions or mixed feelings after a specialist visit. I’d love to spend a few minutes making sure you understand what {specialistFullName} shared and what comes next. Does that sound okay?",
  },

  {
    id: "post_visit_chat_with_hitl_user_accepts_agenda",
    speaker: "user",
    type: "user_input",
    text: "Member confirms they’re okay continuing, or asks to reschedule/shorten the chat.",
  },

  // Phase 2: Member reflection and concerns
  {
    id: "post_visit_chat_with_hitl_assistant_ask_main_takeaway",
    speaker: "assistant",
    type: "utterance",
    text: "To start, in your own words, what do you feel was the main takeaway from your visit with {specialistFullName} on {appointmentDate}?",
  },

  {
    id: "post_visit_chat_with_hitl_user_main_takeaway_input",
    speaker: "user",
    type: "user_input",
    text: "Open text: Member explains what they understood as the main takeaway or plan.",
  },

  {
    id: "post_visit_chat_with_hitl_assistant_reflect_and_clarify",
    speaker: "assistant",
    type: "utterance",
    text: "Got it. I’m hearing that your understanding is: [NCM paraphrases member’s summary]. I’ll compare that with the notes from {specialistFullName} to make sure everything lines up. Before we do that, what questions or worries are still on your mind after the visit?",
  },

  {
    id: "post_visit_chat_with_hitl_user_concerns_input",
    speaker: "user",
    type: "user_input",
    text: "Open text: Member shares questions, fears, or areas of confusion.",
  },

  {
    id: "post_visit_chat_with_hitl_assistant_prioritize_concerns",
    speaker: "assistant",
    type: "utterance",
    text: "Thank you for walking me through that. I’ve heard a few key things you’re concerned about. Let’s tackle the most important one together first. Which feels most urgent for you right now?",
  },

  {
    id: "post_visit_chat_with_hitl_user_priority_choice_input",
    speaker: "user",
    type: "user_input",
    text: "Member identifies their top concern (open text or choice, depending on UI).",
  },

  {
    id: "post_visit_chat_with_hitl_assistant_note_branching_on_concerns",
    speaker: "assistant",
    type: "note",
    text: "Design note: In the actual product, this step may branch into different guidance flows depending on whether the top concern is about diagnosis, treatment options, medications, side effects, logistics, or emotions. In this linear script, the Nurse Care Manager should tailor their explanation based on the member’s specific concern while following the same overall structure.",
  },

  // Phase 3: Nurse Care Manager guidance and next steps
  {
    id: "post_visit_chat_with_hitl_assistant_explain_and_reassure",
    speaker: "assistant",
    type: "utterance",
    text: "Thanks for naming that. Based on what {specialistFullName} documented and what you’ve just shared, here’s how I’m thinking about it: [NCM gives a clear, plain-language explanation]. I’ll also highlight what to watch for and when to reach out for help, so you know what to expect.",
  },

  {
    id: "post_visit_chat_with_hitl_assistant_check_understanding",
    speaker: "assistant",
    type: "utterance",
    text: "How does that explanation land with you? What feels clearer, and what still feels confusing or concerning?",
  },

  {
    id: "post_visit_chat_with_hitl_user_reaction_input",
    speaker: "user",
    type: "user_input",
    text: "Open text: Member reacts, asks follow-up questions, or expresses ongoing concerns.",
  },

  {
    id: "post_visit_chat_with_hitl_assistant_summarize_and_plan",
    speaker: "assistant",
    type: "utterance",
    text: "You’re doing a great job advocating for yourself, {memberFirstName}. Let’s wrap up with a quick summary of your plan after this visit with {specialistFullName}. We’ll note any next appointments, medication changes, and what you’ll do if new symptoms come up.",
  },

  {
    id: "post_visit_chat_with_hitl_assistant_prompt_next_steps",
    speaker: "assistant",
    type: "utterance",
    text: "What are the next one or two steps you feel ready to take after our chat today?",
  },

  {
    id: "post_visit_chat_with_hitl_user_next_steps_input",
    speaker: "user",
    type: "user_input",
    text: "Open text: Member names concrete next steps (e.g., schedule follow-up, start or adjust medication, track symptoms, contact employer, etc.).",
  },

  {
    id: "post_visit_chat_with_hitl_assistant_confirm_next_steps",
    speaker: "assistant",
    type: "utterance",
    text: "That sounds like a solid plan. I’ll document that your next steps are: [NCM summarizes member’s steps]. I can also send you a quick summary after this chat so you don’t have to remember everything.",
  },

  {
    id: "post_visit_chat_with_hitl_assistant_close_and_support",
    speaker: "assistant",
    type: "utterance",
    text: "Before we wrap up, is there anything else you’d like to talk through from your visit with {specialistFullName}, or anything else on your mind today?",
  },

  {
    id: "post_visit_chat_with_hitl_user_final_questions_input",
    speaker: "user",
    type: "user_input",
    text: "Member asks final questions or indicates they’re done.",
  },

  {
    id: "post_visit_chat_with_hitl_assistant_final_thank_you",
    speaker: "assistant",
    type: "utterance",
    text: "Thank you for taking the time to talk today, {memberFirstName}. If anything comes up after we end this chat, you can reach out to Included Health through your app or member portal anytime.",
  },
];

/**
 * Simple string interpolation for {placeholders}.
 * Each {key} in the text will be replaced with variables[key] if present.
 */
export function interpolateText(
  text: string,
  variables: Record<string, string>
): string {
  return text.replace(/\{([^}]+)\}/g, (_match, key) => {
    const k = String(key).trim();
    return Object.prototype.hasOwnProperty.call(variables, k)
      ? variables[k]
      : _match;
  });
}

export const chapter5DefaultVariables: Record<string, string> = {
  memberFirstName: "Charles",
  appointmentDate: "January 15, 2027",
  specialistFullName: "Dr. Joseph Moreno",
  nurseCareManagerName: "Sarah",
};

export const chapter5StoryBible = {
  chapter: 5,
  flowId: "post_visit_chat_with_hitl",
  title: "Post visit chat with HITL",
  facts: {
    ...chapter5DefaultVariables,
  },
  labelsByKey: {
    memberFirstName: "Member first name",
    appointmentDate: "Appointment date",
    specialistFullName: "Specialist full name",
    nurseCareManagerName: "Nurse Care Manager name",
  },
};

export const chapter5Disclaimer =
  "This experience is a prototype and does not replace medical advice. Please consult your healthcare provider for personalized recommendations.";