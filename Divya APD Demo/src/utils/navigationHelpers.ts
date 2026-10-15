/**
 * Navigation Helper Utilities
 *
 * Provides manifest-driven navigation helpers to eliminate hardcoded route paths
 * in chapter components. These functions enable chapters to navigate based on
 * manifest order rather than hardcoding the next chapter's route.
 */

import { STORY_MANIFEST } from '@/data/storyManifest';
import type { ChapterId, ChapterRoute } from '@/data/storyManifest';

/**
 * Get the next chapter's route in the manifest order
 *
 * @param currentChapterId - The ID of the current chapter
 * @returns The route path of the next chapter, or null if this is the last chapter
 *
 * @example
 * const nextRoute = getNextChapterRoute('chapter1_tour');
 * if (nextRoute) navigate(nextRoute); // Navigates to /chapter2
 */
export function getNextChapterRoute(currentChapterId: string): string | null {
  const currentIndex = STORY_MANIFEST.chapters.findIndex(ch => ch.id === currentChapterId);

  // Chapter not found in manifest
  if (currentIndex === -1) {
    console.warn(`[navigationHelpers] Chapter ID "${currentChapterId}" not found in manifest`);
    return null;
  }

  // Get next chapter
  const nextChapter = STORY_MANIFEST.chapters[currentIndex + 1];
  return nextChapter?.route ?? null;
}

/**
 * Get the previous chapter's route in the manifest order
 *
 * @param currentChapterId - The ID of the current chapter
 * @returns The route path of the previous chapter, or null if this is the first chapter
 *
 * @example
 * const prevRoute = getPreviousChapterRoute('chapter2_wellness');
 * if (prevRoute) navigate(prevRoute); // Navigates to /chapter1
 */
export function getPreviousChapterRoute(currentChapterId: string): string | null {
  const currentIndex = STORY_MANIFEST.chapters.findIndex(ch => ch.id === currentChapterId);

  // Chapter not found or is first chapter
  if (currentIndex <= 0) return null;

  // Get previous chapter
  const prevChapter = STORY_MANIFEST.chapters[currentIndex - 1];
  return prevChapter?.route ?? null;
}

/**
 * Get chapter manifest entry by ID
 *
 * @param chapterId - The chapter ID to look up
 * @returns Chapter manifest entry or null if not found
 *
 * @example
 * const chapter = getChapterById('chapter1_tour');
 * console.log(chapter?.title); // "Chapter 1: App Tour"
 */
export function getChapterById(chapterId: string): typeof STORY_MANIFEST.chapters[number] | null {
  return STORY_MANIFEST.chapters.find(ch => ch.id === chapterId) ?? null;
}

/**
 * Get chapter manifest entry by route path
 *
 * @param route - The route path to look up
 * @returns Chapter manifest entry or null if not found
 *
 * @example
 * const chapter = getChapterByRoute('/chapter2');
 * console.log(chapter?.id); // "chapter2_wellness"
 */
export function getChapterByRoute(route: string): typeof STORY_MANIFEST.chapters[number] | null {
  return STORY_MANIFEST.chapters.find(ch => ch.route === route) ?? null;
}

/**
 * Get the current chapter index in the manifest order
 *
 * @param chapterId - The chapter ID
 * @returns Zero-based index or -1 if not found
 */
export function getChapterIndex(chapterId: string): number {
  return STORY_MANIFEST.chapters.findIndex(ch => ch.id === chapterId);
}

/**
 * Check if a chapter is the first chapter
 *
 * @param chapterId - The chapter ID to check
 * @returns True if this is the first chapter in the manifest
 */
export function isFirstChapter(chapterId: string): boolean {
  return getChapterIndex(chapterId) === 0;
}

/**
 * Check if a chapter is the last chapter
 *
 * @param chapterId - The chapter ID to check
 * @returns True if this is the last chapter in the manifest
 */
export function isLastChapter(chapterId: string): boolean {
  const index = getChapterIndex(chapterId);
  return index >= 0 && index === STORY_MANIFEST.chapters.length - 1;
}
