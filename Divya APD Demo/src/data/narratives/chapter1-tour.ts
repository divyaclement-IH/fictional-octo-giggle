/**
 * Chapter 1: Tour + Initial Triage Conversation Script
 *
 * Based on: chapter-01-flow.md
 * Story Bible: chapter1_tour
 *
 * Variables used:
 * - userName: Member first name (Charles)
 * - planName: Personalized Wellbeing Copay Plan
 * - visitType: Primary Care
 */

export interface ConversationTurn {
  id: string;
  speaker: 'dot' | 'user' | 'system' | 'sarah' | 'care_team';
  type: 'utterance' | 'user_input' | 'ui_embed' | 'transition' | 'action_gate';
  text?: string;
  component?: string;
  expectation?: string;
  note?: string;
  // Action gate field
  requiredAction?: string;
}

export const chapter1Script: ConversationTurn[] = [
  // Phase 1: Product Tour
  {
    id: 'p1_welcome',
    speaker: 'dot',
    type: 'utterance',
    text: "Hi {userName}! 👋 I'm Dot, your Included Health digital assistant. Let me show you how the {planName} works and how I can help.",
  },
  {
    id: 'p1_provider_help',
    speaker: 'dot',
    type: 'utterance',
    text: "To make sure you're getting the best care at the best price, I'll help you find doctors and book in-person or virtual appointments.",
  },
  {
    id: 'p1_ui_provider_map',
    speaker: 'system',
    type: 'ui_embed',
    component: 'ProviderMapIllustration',
    note: 'Optional leading visual per design frame.',
  },
  {
    id: 'p1_tracking',
    speaker: 'dot',
    type: 'utterance',
    text: "I'll also help you track your spending and maximize your benefits. Think of me as your first stop for any questions about upcoming copays or confusing bills.",
  },
  {
    id: 'p1_ui_tracking',
    speaker: 'system',
    type: 'ui_embed',
    component: 'DeductibleTrackingVisual',
    note: 'Shown with tracking line; member taps Next twice per current UX.',
  },
  {
    id: 'p1_goals_message',
    speaker: 'dot',
    type: 'utterance',
    text: "No matter your goals, you'll always know where you stand and what comes next. Your care team is here to support you along the way—with specialized care across a wide range of needs, from chronic conditions to life events.",
  },
  {
    id: 'p1_ui_health_plan_card',
    speaker: 'system',
    type: 'ui_embed',
    component: 'HealthPlanCard',
  },
  {
    id: 'p1_health_goals',
    speaker: 'dot',
    type: 'utterance',
    text: "Ready to share your health goals? I'll use them to tailor your next steps.",
  },
  {
    id: 'p1_user_ready',
    speaker: 'user',
    type: 'user_input',
    expectation: "Tap Okay / Okay, I'm ready",
  },

  // Phase 2: Health Triage
  {
    id: 'p2_health_needs',
    speaker: 'dot',
    type: 'utterance',
    text: "Great! Let's start. I can see that you have a history of high blood pressure and have received some care in the past for this concern. Is there anything else going on with your health that you need support with?",
  },
  {
    id: 'p2_user_concerns',
    speaker: 'user',
    type: 'user_input',
    expectation: 'free_text',
  },
  {
    id: 'p2_medical_providers_check',
    speaker: 'dot',
    type: 'utterance',
    text: "Thank you for sharing that, {userName}. It looks like you haven't seen any medical providers on a regular basis recently, is that right?",
  },
  {
    id: 'p2_user_providers_reply',
    speaker: 'user',
    type: 'user_input',
    expectation: 'free_text',
  },

  // Phase 3: VPC Pitch
  {
    id: 'p3_care_team',
    speaker: 'dot',
    type: 'utterance',
    text: "I'm sorry to hear that, {userName}. With the Personalized Wellbeing Copay Plan, a virtual wellbeing consult is a great first step. During this session, your provider will help you create a personalized plan aligned to your health issues and goals. This visit is provided at no cost to you.",
  },
  {
    id: 'p3_ask_interested',
    speaker: 'dot',
    type: 'utterance',
    text: 'Are you interested in getting started with a virtual wellbeing consult?',
  },
  {
    id: 'p3_user_yes',
    speaker: 'user',
    type: 'user_input',
    expectation: 'affirmative',
  },

  // Phase 4: Scheduling Preferences
  {
    id: 'p4_scheduling_prompt',
    speaker: 'dot',
    type: 'utterance',
    text: 'Great, could you let me know what days and times are best for you and if you have any provider preferences?',
  },
  {
    id: 'p4_user_availability',
    speaker: 'user',
    type: 'user_input',
    expectation: 'free_text',
  },

  // Phase 5: Provider Match and Confirmation
  {
    id: 'p5_acknowledgment',
    speaker: 'dot',
    type: 'utterance',
    text: "Thanks for sharing that, {userName}. I'll keep these preferences in mind for future appointments.",
  },
  {
    id: 'p5_provider_match',
    speaker: 'dot',
    type: 'utterance',
    text: 'I have a great match for you: Dr. Scott Henderson is available Friday, January 8 at 10:00 AM. Given your history, I prioritized a provider experienced in caring for patients with blood pressure issues. Would this time work for you?',
  },
  {
    id: 'p5_ui_provider_card',
    speaker: 'system',
    type: 'ui_embed',
    component: 'ProviderCard',
    note: 'Dr. Scott Henderson; aligns with story bible and §6.9 patterns.',
  },
  {
    id: 'p5_ui_quick_confirm',
    speaker: 'system',
    type: 'ui_embed',
    component: 'QuickTaps',
    note: 'Optional; e.g. Confirm appointment / find other times—per implementation.',
  },
  {
    id: 'p5_user_quick_tap_selection',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Confirm appointment / Find other times',
  },
  {
    id: 'p5_ui_confirmation_card',
    speaker: 'system',
    type: 'ui_embed',
    component: 'ConfirmationCard',
    note: 'Appointment confirmation card inline in chat; Complete intake / Skip → wellness lock in app wiring.',
  },
];

/**
 * Interpolate variables into conversation text
 */
export function interpolateText(text: string, variables: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
}

/**
 * Get disclaimer text for Chapter 1
 */
export const chapter1Disclaimer =
  'Dot can provide generalized AI-generated answers for select healthcare questions and connect you to the Care Team any time, but it is not a substitute for professional medical advice.';
