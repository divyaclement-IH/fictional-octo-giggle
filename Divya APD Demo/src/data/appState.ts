/**
 * App State - Chapter-specific UI content
 *
 * Manages content displayed in app navigation screens (My Health, Get Care, My Plan)
 * that changes based on the current chapter/narrative progression.
 */

// ========================================
// Type Definitions
// ========================================

export interface ActivityItem {
  id: string;
  title: string;
  date: string;                    // ISO date string "2026-05-15"
  timeLocal?: string;              // "10:30 AM"
  filterType: string;              // "primary_care", "documents", "prescriptions"
  providerName: string;            // "Dr. James Thompson"
  visitTypeLabel: string;          // "In-person Visit", "Virtual Visit", "Lab results"
}

export interface MedicationItem {
  id: string;
  name: string;                    // "Metformin 1000mg twice daily"
  isActive: boolean;
  statusTag: {
    variant: 'just_started' | 'needs_attention';
    label: string;                 // "Active", "Needs attention"
  };
  subline: string;                 // "As prescribed", "2 days to go"
  leadingTone: 'success' | 'warning'; // Green vs orange icon
}

export interface CareTeamMember {
  id: string;
  isInternal: boolean;             // true = Included Health provider, false = external specialist
  relationshipLabel: string;       // "Your PCP", "Your endocrinologist", "Specialist"
  displayName: string;             // "Dr. James Thompson"
  nameSuffix: string;              // ", MD", ", RD"
  specialtyLine: string;           // "Endocrinology", "Mental Health · Therapy"
  headshotFile: string;            // "james-thompson.jpg"
  providerCatalogId: string;
  description: string;             // Provider bio/description text
  lastSeenDate?: string;           // "1/8/27" - optional, for display in badge
  slots: {
    timeLabel: string;             // "9:00 AM"
    dayLabel: string;              // "Tomorrow", "Sat", "Mon"
  }[];
}

export interface MyHealthState {
  activity: {
    items: ActivityItem[];
  };
  medicine: {
    resolvedRows: MedicationItem[];
  };
  careTeam: {
    members: CareTeamMember[];
  };
}

export interface ChapterAppState {
  myHealth?: MyHealthState;
  // Future: getCare, myPlan, todayScreen, messages, etc.
}

export interface AppStateConfig {
  chapters: {
    [chapterId: string]: ChapterAppState;
  };
}

// ========================================
// Chapter 6 State
// ========================================

export const chapter6AppState: ChapterAppState = {
  myHealth: {
    activity: {
      items: [
        {
          id: "act-marcus-1",
          title: "Visit with Dr. Elena Marquez, MD",
          date: "2026-05-15",
          timeLocal: "10:30 AM",
          filterType: "primary_care",
          providerName: "Dr. Elena Marquez",
          visitTypeLabel: "In-person Visit"
        },
        {
          id: "act-marcus-2",
          title: "Visit with Maria Gonzales, RDN",
          date: "2026-05-08",
          timeLocal: "2:15 PM",
          filterType: "primary_care",
          providerName: "Maria Gonzales",
          visitTypeLabel: "Virtual Visit"
        },
        {
          id: "act-marcus-3",
          title: "Visit with Dr. Elena Marquez, MD",
          date: "2026-03-14",
          timeLocal: "2:15 PM",
          filterType: "primary_care",
          providerName: "Dr. Elena Marquez",
          visitTypeLabel: "In-person Visit"
        },
        {
          id: "act-marcus-4",
          title: "Visit with Dr. Elena Marquez, MD",
          date: "2026-03-14",
          timeLocal: "2:15 PM",
          filterType: "primary_care",
          providerName: "Dr. Elena Marquez",
          visitTypeLabel: "In-person Visit"
        },
        {
          id: "act-marcus-5",
          title: "Visit with Maria Gonzales, RDN",
          date: "2026-03-18",
          timeLocal: "12:45 PM",
          filterType: "primary_care",
          providerName: "Maria Gonzales",
          visitTypeLabel: "Virtual Visit"
        },
        {
          id: "act-marcus-6",
          title: "Nutrition counseling with Patricia Lee, RD",
          date: "2026-02-08",
          timeLocal: "11:30 AM",
          filterType: "primary_care",
          providerName: "Patricia Lee",
          visitTypeLabel: "Virtual Visit"
        },
        {
          id: "act-marcus-7",
          title: "Lipid panel results posted",
          date: "2026-04-19",
          filterType: "documents",
          providerName: "Lab",
          visitTypeLabel: "Lab results"
        }
      ]
    },
    medicine: {
      resolvedRows: [
        {
          id: "med-marcus-rodriguez-0",
          name: "Metformin 1000mg twice daily",
          isActive: true,
          statusTag: { variant: "just_started", label: "Active" },
          subline: "As prescribed",
          leadingTone: "success"
        },
        {
          id: "med-marcus-rodriguez-1",
          name: "Atorvastatin 20mg once daily",
          isActive: true,
          statusTag: { variant: "just_started", label: "Active" },
          subline: "As prescribed",
          leadingTone: "success"
        },
        {
          id: "med-marcus-rodriguez-2",
          name: "Lisinopril 10mg once daily",
          isActive: true,
          statusTag: { variant: "just_started", label: "Active" },
          subline: "As prescribed",
          leadingTone: "success"
        },
        {
          id: "med-marcus-rodriguez-3",
          name: "Gabapentin 300mg three times daily (neuropathy)",
          isActive: true,
          statusTag: { variant: "just_started", label: "Active" },
          subline: "As prescribed",
          leadingTone: "success"
        },
        {
          id: "med-marcus-rodriguez-4",
          name: "Aspirin 81mg once daily",
          isActive: true,
          statusTag: { variant: "just_started", label: "Active" },
          subline: "As prescribed",
          leadingTone: "success"
        }
      ]
    },
    careTeam: {
      members: [
        {
          id: "marcus-rodriguez-elena-marquez",
          isInternal: true,
          relationshipLabel: "Your PCP",
          displayName: "Elena Marquez",
          nameSuffix: ", MD",
          specialtyLine: "Internal Medicine",
          headshotFile: "elena-marquez.jpg",
          providerCatalogId: "elena-marquez",
          description: "Has strong back and spine expertise, prioritizes safe and non-invasive care, and stays engaged in your long-term recovery, referring to trusted specialists.",
          lastSeenDate: "1/8/27",
          slots: [
            { timeLabel: "4:00 pm", dayLabel: "Today" },
            { timeLabel: "12:30 pm", dayLabel: "Thu, Nov 13" }
          ]
        },
        {
          id: "marcus-rodriguez-joseph-moreno",
          isInternal: false,
          relationshipLabel: "Specialist",
          displayName: "Joseph Moreno",
          nameSuffix: ", MD",
          specialtyLine: "Gastroenterology",
          headshotFile: "joseph-moreno.jpg",
          providerCatalogId: "joseph-moreno",
          description: "Focuses on comprehensive care for all ages, emphasizing preventive measures and holistic health strategies.",
          lastSeenDate: "1/8/27",
          slots: []
        }
      ]
    }
  }
};

// ========================================
// App State Configuration
// ========================================

export const appStateConfig: AppStateConfig = {
  chapters: {
    'chapter6_myhealth': chapter6AppState,
    // Future chapters will be added here
  }
};

// ========================================
// Utility: Get App State for Chapter
// ========================================

/**
 * Get app state for a specific chapter
 */
export function getAppStateForChapter(chapterId: string): ChapterAppState {
  return appStateConfig.chapters[chapterId] || {};
}
