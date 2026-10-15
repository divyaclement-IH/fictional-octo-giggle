
flow_id: chapter_01_tour_and_triage
title: Tour + Initial Triage
story_bible: chapter-01-story-bible.md

variables:
  userName:
    description: Member first name
    example: Charles
  planName:
    description: Plan marketing name
    example: Personalized Wellbeing Copay Plan
  visitType:
    description: Visit label used in scheduling lines
    example: Primary Care

notes:
  - "APD tour skips standalone careTeamSupport + healthcareHelp bubbles; after deductible/tracking, flow goes to goalsMessage (matches ChatInterface APD path)."
  - "Provider match text below uses Dr. Scott Henderson / Friday, January 8 / 10:00 AM per story bible. Reconcile legacy code paths that still emit Dr. Han if needed."

phases:
  - id: phase_0_entry
    title: Welcome lock (outside chat shell)
    steps:
      - id: p0_notification
        speaker: system
        type: transition
        note: Member taps lock notification → opens chat; clock/date per story bible welcome row.

  - id: phase_1_product_tour
    title: Product tour (tiles → tracking → goals intro)
    steps:
      - id: p1_welcome
        speaker: dot
        type: utterance
        onboarding_message_key: welcome
        text: "Hi {userName}! 👋 I'm Dot, your Included Health digital assistant. Let me show you how the {planName} works and how I can help."
      - id: p1_ui_care_tiles
        speaker: system
        type: ui_embed
        component: CardCarousel
        note: Care / benefit tiles; member advances with in-UI control.

      - id: p1_provider_help
        speaker: dot
        type: utterance
        onboarding_message_key: providerHelp
        text: "To make sure you're getting the best care at the best price, I'll help you find doctors and book in-person or virtual appointments."
      - id: p1_ui_provider_map
        speaker: system
        type: ui_embed
        component: ProviderMapIllustration
        note: Optional leading visual per design frame.

      - id: p1_tracking
        speaker: dot
        type: utterance
        onboarding_message_key: tracking
        text: "I'll also help you track your spending and maximize your benefits. Think of me as your first stop for any questions about upcoming copays or confusing bills."
      - id: p1_ui_tracking
        speaker: system
        type: ui_embed
        component: DeductibleTrackingVisual
        note: Shown with tracking line; member taps Next twice per current UX.

      - id: p1_goals_message
        speaker: dot
        type: utterance
        onboarding_message_key: goalsMessage
        text: "No matter your goals, you'll always know where you stand and what comes next. Your care team is here to support you along the way—with specialized care across a wide range of needs, from chronic conditions to life events."

      - id: p1_ui_health_plan_card
        speaker: system
        type: ui_embed
        component: HealthPlanCard

      - id: p1_health_goals
        speaker: dot
        type: utterance
        onboarding_message_key: healthGoals
        text: "Ready to share your health goals? I'll use them to tailor your next steps."

      - id: p1_user_ready
        speaker: user
        type: user_input
        expectation: "Tap Okay / Okay, I'm ready"

  - id: phase_2_health_triage
    title: Health history triage
    steps:
      - id: p2_health_needs
        speaker: dot
        type: utterance
        onboarding_message_key: healthNeeds
        text: "Great! Let's start. I can see that you have a history of high blood pressure and have received some care in the past for this concern. Is there anything else going on with your health that you need support with?"

      - id: p2_user_concerns
        speaker: user
        type: user_input
        expectation: free_text

      - id: p2_medical_providers_check
        speaker: dot
        type: utterance
        onboarding_message_key: medicalProvidersCheck
        text: "Thank you for sharing that, {userName}. It looks like you haven't seen any medical providers on a regular basis recently, is that right?"

      - id: p2_user_providers_reply
        speaker: user
        type: user_input
        expectation: free_text

  - id: phase_3_vpc_pitch
    title: Virtual wellbeing consult pitch + Walmart benefits
    steps:
      - id: p3_care_team
        speaker: dot
        type: utterance
        onboarding_message_key: careTeam
        text: "I'm sorry to hear that, {userName}. With the Personalized Wellbeing Copay Plan, a virtual wellbeing consult is a great first step. During this session, your provider will help you create a personalized plan aligned to your health issues and goals. This visit is provided at no cost to you."

      - id: p3_walmart_benefits
        speaker: dot
        type: utterance
        onboarding_message_key: walmartBenefits
        text: "In the meantime, Walmart also offers some great benefits to help you manage your weight and fitness goals, including low-cost gym access through Tivity Health fitness pass and Fresh Tri to help with meal planning."

      - id: p3_ui_benefits_carousel
        speaker: system
        type: ui_embed
        component: BenefitsCarousel

      - id: p3_ask_interested
        speaker: dot
        type: utterance
        onboarding_message_key: askInterested
        text: Are you interested in getting started with a virtual wellbeing consult?

      - id: p3_user_yes
        speaker: user
        type: user_input
        expectation: affirmative

  - id: phase_4_scheduling_preferences
    title: Collect availability
    steps:
      - id: p4_scheduling_prompt
        speaker: dot
        type: utterance
        onboarding_message_key: schedulingWithPreferences
        text: Great, could you let me know what days and times are best for you and if you have any provider preferences?

      - id: p4_user_availability
        speaker: user
        type: user_input
        expectation: free_text

  - id: phase_5_match_and_confirm
    title: Acknowledgment + provider match + card + confirmation
    steps:
      - id: p5_acknowledgment
        speaker: dot
        type: utterance
        onboarding_message_key: acknowledgment
        text: "Thanks for sharing that, {userName}. I'll keep these preferences in mind for future appointments."

      - id: p5_provider_match
        speaker: dot
        type: utterance
        onboarding_message_key: providerMatch
        text: "I have a great match for you: Dr. Scott Henderson is available Friday, January 8 at 10:00 AM. Given your history, I prioritized a provider experienced in caring for patients with blood pressure issues. Would this time work for you?"

      - id: p5_ui_provider_card
        speaker: system
        type: ui_embed
        component: ProviderCard
        notes: Dr. Scott Henderson; aligns with story bible and §6.9 patterns.

      - id: p5_user_confirm_time
        speaker: user
        type: user_input
        expectation: affirmative

      - id: p5_ui_quick_confirm
        speaker: system
        type: ui_embed
        component: QuickTaps
        notes: Optional; e.g. Confirm appointment / find other times—per implementation.

      - id: p5_ui_confirmation_modal
        speaker: system
        type: ui_embed
        component: ConfirmationModal
        notes: Appointment summary; Complete intake / Skip → wellness lock in app wiring.

      - id: p5_transition_booked
        speaker: system
        type: transition
        note: Chapter 1 exit; proceed to wellness lock + join (Chapter 2).
