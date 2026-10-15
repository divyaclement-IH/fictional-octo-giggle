/**
 * Chapter 3: Post-visit wellness assessment
 *
 * Based on: APD_Greenfield_Stakeholder_Plan.md §5.3
 * Legacy UI reference: PrimaryCarePostVisitChat.tsx (visit card, chat, carousel, ProviderProfile4)
 *
 * Variables:
 * - userName: Member first name (Charles)
 * - vpcProviderName: VPC provider as shown in visit card (e.g. Dr. Scott Henderson, MD)
 * - vpcProviderShort: Short form in Dot lines (e.g. Dr. Henderson)
 * - primarySpecialistName: First gastro card / profile (e.g. Joseph Moreno, MD)
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

export const chapter3Script: ConversationTurn[] = [
  // Phase 1: Shell + visit complete card
  {
    id: 'pv_ui_post_visit_shell',
    speaker: 'system',
    type: 'ui_embed',
    component: 'PostVisitSummaryShell',
    note: 'Header: Post-Visit Summary; Close; StatusBar; matches §6.8 + chat thread (§6.4).',
  },
  {
    id: 'pv_ui_visit_complete_card',
    speaker: 'system',
    type: 'ui_embed',
    component: 'VisitCompleteCard',
    note: 'Visit Completed; meta for {vpcProviderName} / patient ref per design.',
  },

  // Phase 2: Dot recap + medication + delivery prompt
  {
    id: 'pv_dot_open',
    speaker: 'dot',
    type: 'utterance',
    text: 'Hello, {userName}! Your visit with {vpcProviderShort} is complete. Here\'s a summary of your next steps.',
    note: 'Optional typing delay before second line per implementation.',
  },
  {
    id: 'pv_dot_medication',
    speaker: 'dot',
    type: 'utterance',
    text: '{vpcProviderShort} has changed your blood pressure medication from Chlorthalidone to Lisinopril to address possible medication side effects. We\'ve already sent that request to your closest Walmart pharmacy.',
  },
  {
    id: 'pv_dot_delivery_question',
    speaker: 'dot',
    type: 'utterance',
    text: 'Would you like to have that delivered directly to you, or would you prefer to pick up in person?',
  },
  {
    id: 'pv_ui_delivery_quick_taps',
    speaker: 'system',
    type: 'ui_embed',
    component: 'DeliveryQuickTaps',
    note: 'Options: Delivery, Pick up in person (prototype may handle Delivery only).',
  },
  {
    id: 'pv_user_fulfillment',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Delivery | Pick up in person',
  },

  // Phase 3: Gastro referral intro + carousel
  {
    id: 'pv_dot_referral_intro',
    speaker: 'dot',
    type: 'utterance',
    text: '{vpcProviderShort} will also send a referral to a recommended gastroenterologist in your area. Here are three excellent options for you to consider:',
  },
  {
    id: 'pv_ui_specialist_carousel',
    speaker: 'system',
    type: 'ui_embed',
    component: 'SpecialistReferralCarousel',
    note: 'Three SpecialistReferralCard rows; dot indicators; first card may offer See full profile.',
  },
  {
    id: 'pv_user_select_specialist_or_profile',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Book on a card | See full profile (e.g. on Joseph Moreno)',
  },

  // Phase 4: Full specialist profile (optional path)
  {
    id: 'pv_ui_specialist_profile',
    speaker: 'system',
    type: 'ui_embed',
    component: 'SpecialistProfileFull',
    note: 'Full profile for {primarySpecialistName}; CTA Get help with booking.',
  },
  {
    id: 'pv_user_get_help_booking',
    speaker: 'user',
    type: 'user_input',
    expectation: 'Tap Get help with booking',
  },

  // Phase 5: Handoff — gastro booking chapter (Dot-led booking assistance)
  {
    id: 'pv_transition_gastro_booking',
    speaker: 'system',
    type: 'transition',
    note: 'Navigate to gastro booking chat (Help with Booking header, preferences, copay, confirmation)—often implemented as next chapter / route.',
  },
];

/**
 * Interpolate variables into conversation text
 */
export function interpolateText(text: string, variables: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
}

export const chapter3DefaultVariables: Record<string, string> = {
  userName: 'Charles',
  vpcProviderName: 'Dr. Scott Henderson, MD',
  vpcProviderShort: 'Dr. Henderson',
  primarySpecialistName: 'Joseph Moreno, MD',
};

export const chapter3Disclaimer =
  'Medication and referral details are illustrative for this prototype and not individualized medical advice.';
