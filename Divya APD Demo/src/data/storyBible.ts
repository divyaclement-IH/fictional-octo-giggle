/**
 * Story Bible - Single Source of Truth
 *
 * Per §6.1 and §7 of the APD Stakeholder Plan:
 * All dates, times, provider names, and appointment details are defined here
 * to ensure consistency across lock screens, notifications, chats, confirmations,
 * and My Health screens.
 *
 * IMPORTANT: Do not hardcode these values in components. Always reference this file.
 */

import imgDrHenderson from '@/imports/image-10.png';

export const storyBible = {
  /**
   * Providers in the care journey
   */
  providers: {
    primaryCare: {
      name: "Dr. Scott Henderson",
      specialty: "Primary Care",
      photo: imgDrHenderson,
      description: "Dr Henderson has 18 years of experience in caring for patients managing blood pressure issues, with a focus on evidence-based care for hypertension and diabetes.",
    },
    gastro: {
      name: "Joseph Moreno, MD",
      specialty: "Gastroenterology",
      tier: "Tier 1",
      distance: "2.3 miles",
      rating: 4.8,
      reviewCount: 127,
      photo: null, // TODO: Add when design provided
      description: null,
    },
  },

  /**
   * Appointments throughout the journey
   */
  appointments: {
    wellnessVisit: {
      date: new Date(2026, 0, 8, 9, 30), // January 8, 2026, 9:30 AM
      duration: 18, // minutes
      provider: "primaryCare",
    },
    gastroVisit: {
      date: new Date(2026, 0, 15, 9, 30), // January 15, 2026, 9:30 AM
      provider: "gastro",
    },
  },

  /**
   * Member information
   */
  member: {
    name: "Charles",
    firstName: "Charles", // Used in chat greetings
    memberId: "IH123456789",
    groupId: "WMT-2026",
    plan: "Personalized Wellbeing Copay Plan",
  },

  /**
   * Virtual assistants and care team
   */
  assistants: {
    dot: {
      name: "Dot",
      role: "Virtual Assistant",
    },
    sarah: {
      name: "Sarah",
      role: "Nurse Care Manager",
    },
  },

  /**
   * Chapter-specific timestamps for lock screens and notifications
   * These represent the "when" of each chapter in the story timeline
   */
  chapters: {
    chapter1_tour: {
      date: new Date(2026, 0, 1, 11, 15), // Friday, January 1, 2026, 11:15 AM
      notification: {
        title: "Welcome to Included Health",
        body: "Your personal plan starts here.",
      },
    },
    chapter2_wellness: {
      date: new Date(2026, 0, 8, 9, 15), // January 8, 2026, 9:15 AM (before wellness visit)
      notification: {
        title: "Ready for your visit?",
        body: "Dr. Scott Henderson is ready to see you.",
      },
    },
    chapter3_assessment: {
      date: new Date(2026, 0, 8, 10, 0), // January 8, 2026, 10:00 AM (post-visit)
      notification: null, // No lock screen for this chapter
    },
    chapter4_specialistDay: {
      date: new Date(2026, 0, 15, 9, 45), // January 15, 2026, 9:45 AM (day of gastro visit)
      notification: {
        title: "Appointment Today",
        body: "Press and hold for insurance card.",
      },
    },
    chapter5_hitl: {
      date: new Date(2026, 0, 14, 16, 0), // January 14, 2026, 4:00 PM (day before gastro visit)
      notification: {
        title: "Your visit with Dr. Joseph Moreno is coming up",
        body: "Press and hold to access your insurance card for easy check-in",
      },
    },
    chapter6_myhealth: {
      date: new Date(2026, 4, 1, 14, 30), // May 1, 2026, 2:30 PM (today)
      notification: null, // No lock screen for this chapter
    },
    chapter7_chat_with_dot: {
      date: new Date(2027, 1, 1, 10, 0), // February 1, 2027, 10:00 AM (after procedure claim processing)
      notification: {
        title: "Good news!",
        body: "You owe the minimum out of pocket cost for your recent procedure.",
      },
    },
    chapter7_home: {
      date: new Date(2026, 4, 5, 9, 0), // May 5, 2026, 9:00 AM (used by Today screen test component)
      notification: null, // No lock screen for this test
      showMenuNotification: false, // Hamburger menu notification badge
    },
  },
} as const;

/**
 * Type exports for type-safe access throughout the app
 */
export type StoryBible = typeof storyBible;
export type ProviderKey = keyof typeof storyBible.providers;
export type AppointmentKey = keyof typeof storyBible.appointments;
export type ChapterKey = keyof typeof storyBible.chapters;
