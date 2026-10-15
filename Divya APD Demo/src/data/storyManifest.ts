/**
 * Story Manifest - Single Source of Truth for Chapter Configuration
 *
 * This manifest centralizes all chapter metadata, routes, and component mappings.
 * When swapping stories, this is the primary file to edit (along with storyBible
 * and narrative modules).
 *
 * The manifest drives:
 * - Route generation in App.tsx
 * - Chapter order in JourneyContext
 * - Chapter metadata in PrototypeGuide
 * - Navigation helpers (getNextChapterRoute, etc.)
 */

import type React from 'react';

// Chapter component imports
import Chapter1Tour from '@/app/chapters/Chapter1_Tour';
import Chapter1Skeleton from '@/app/chapters/Chapter1_Skeleton';
import Chapter1Chat from '@/app/chapters/Chapter1_Chat';
import Chapter2Wellness from '@/app/chapters/Chapter2_Wellness';
import Chapter3Assessment from '@/app/chapters/Chapter3_Assessment';
import Chapter4Booking from '@/app/chapters/Chapter4_Booking';
import Chapter5HITL from '@/app/chapters/Chapter5_HITL';
import Chapter6MyHealth from '@/app/chapters/Chapter6_MyHealth';
import Chapter7ChatWithDot from '@/app/chapters/Chapter7_ChatWithDot';
import ChapterSkeletonDemo from '@/app/chapters/ChapterSkeleton_Demo';
import ChapterSkeletonPage from '@/app/chapters/ChapterSkeleton_Page';

/**
 * Chapter manifest entry structure
 */
export interface ChapterManifestEntry {
  /** Unique chapter ID (must match storyBible.chapters key) */
  id: string;

  /** Display title for Prototype Guide and navigation */
  title: string;

  /** Short description for Prototype Guide */
  description: string;

  /** URL route path */
  route: string;

  /** React component to render for this chapter */
  component: React.ComponentType;

  /** Path to narrative module (for documentation) */
  narrativeModulePath: string;

  /** Key in storyBible.chapters (usually same as id) */
  storyBibleKey: string;

  /** Optional: Does this chapter use AppNavigationShell? */
  usesAppNavigation?: boolean;

  /** Optional: Does this chapter start with a lock screen? */
  usesLockScreen?: boolean;
}

/**
 * Story Manifest - Healthcare Onboarding Journey
 *
 * To tell a different story:
 * 1. Update this manifest with new chapters
 * 2. Create corresponding storyBible entries
 * 3. Write narrative scripts
 * 4. Build chapter components
 */
export const STORY_MANIFEST = {
  chapters: [
    {
      id: 'chapter1_tour',
      title: 'Chapter 1: App Tour',
      description: 'Introduction to the Included Health app and Dot virtual assistant',
      route: '/chapter1',
      component: Chapter1Tour,
      narrativeModulePath: './narratives/chapter1-tour',
      storyBibleKey: 'chapter1_tour',
      usesLockScreen: true,
      usesAppNavigation: false,
    },
    {
      id: 'chapter1_skeleton',
      title: 'Chapter 1: Skeleton Page',
      description: 'Skeleton page that transitions to chat',
      route: '/chapter1-skeleton',
      component: Chapter1Skeleton,
      narrativeModulePath: './narratives/chapter1-tour',
      storyBibleKey: 'chapter1_tour',
      usesLockScreen: false,
      usesAppNavigation: false,
    },
    {
      id: 'chapter1_chat',
      title: 'Chapter 1: Chat with Dot',
      description: 'Chat interface with Dot virtual assistant',
      route: '/chapter1-chat',
      component: Chapter1Chat,
      narrativeModulePath: './narratives/chapter1-tour',
      storyBibleKey: 'chapter1_tour',
      usesLockScreen: false,
      usesAppNavigation: false,
    },
    {
      id: 'chapter2_wellness',
      title: 'Chapter 2: Wellness Visit',
      description: 'Video visit with PCP and post-visit assessment',
      route: '/chapter2',
      component: Chapter2Wellness,
      narrativeModulePath: './narratives/chapter2-wellness',
      storyBibleKey: 'chapter2_wellness',
      usesLockScreen: true,
      usesAppNavigation: false,
    },
    {
      id: 'chapter3_assessment',
      title: 'Chapter 3: Assessment Results',
      description: 'Care recommendations and specialist referral',
      route: '/chapter3',
      component: Chapter3Assessment,
      narrativeModulePath: './narratives/chapter3-assessment',
      storyBibleKey: 'chapter3_assessment',
      usesLockScreen: false,
      usesAppNavigation: false,
    },
    {
      id: 'chapter4_specialistDay',
      title: 'Chapter 4: Specialist Booking',
      description: 'Finding and booking a gastroenterology specialist',
      route: '/chapter4',
      component: Chapter4Booking,
      narrativeModulePath: './narratives/chapter4-booking',
      storyBibleKey: 'chapter4_specialistDay',
      usesLockScreen: false,
      usesAppNavigation: false,
    },
    {
      id: 'chapter5_hitl',
      title: 'Chapter 5: Care Manager Chat',
      description: 'Post-visit conversation with nurse care manager',
      route: '/chapter5',
      component: Chapter5HITL,
      narrativeModulePath: './narratives/chapter5-hitl',
      storyBibleKey: 'chapter5_hitl',
      usesLockScreen: true,
      usesAppNavigation: false,
    },
    {
      id: 'chapter6_myhealth',
      title: 'Chapter 6: My Health',
      description: 'Exploring activity, medications, and care team',
      route: '/chapter6',
      component: Chapter6MyHealth,
      narrativeModulePath: './narratives/chapter6-myhealth',
      storyBibleKey: 'chapter6_myhealth',
      usesLockScreen: false,
      usesAppNavigation: true,
    },
    {
      id: 'chapter7_chat_with_dot',
      title: 'Chapter 7: Chat with Dot',
      description: 'Good news about procedure cost from claims team',
      route: '/chapter7',
      component: Chapter7ChatWithDot,
      narrativeModulePath: './narratives/chapter7-chat-with-dot',
      storyBibleKey: 'chapter7_chat_with_dot',
      usesLockScreen: true,
      usesAppNavigation: false,
    },
    {
      id: 'skeleton_demo',
      title: 'Skeleton Demo (Lock)',
      description: 'Lock screen that navigates to skeleton page',
      route: '/skeleton-demo',
      component: ChapterSkeletonDemo,
      narrativeModulePath: './narratives/skeleton-demo',
      storyBibleKey: 'skeleton_demo',
      usesLockScreen: true,
      usesAppNavigation: false,
    },
    {
      id: 'skeleton_page',
      title: 'Skeleton Page',
      description: 'Health app skeleton with sliding chat panel',
      route: '/skeleton',
      component: ChapterSkeletonPage,
      narrativeModulePath: './narratives/skeleton-page',
      storyBibleKey: 'skeleton_page',
      usesLockScreen: false,
      usesAppNavigation: false,
    },
  ],

  /** Default route to redirect to on app load */
  defaultRoute: '/chapter1',
} as const;

/**
 * Derived type for type-safe chapter IDs
 * This creates a union type of all chapter ID strings
 */
export type ChapterId = typeof STORY_MANIFEST.chapters[number]['id'];

/**
 * Derived type for type-safe route paths
 */
export type ChapterRoute = typeof STORY_MANIFEST.chapters[number]['route'];
