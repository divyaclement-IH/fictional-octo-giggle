/**
 * Chapter 1: Skeleton Page
 *
 * Displays skeleton health app interface, then chat slides in after 500ms.
 * Part of Chapter 1 flow.
 */

import { SkeletonPage } from '../components/healthcare/skeleton/SkeletonPage';

export default function Chapter1Skeleton() {
  console.log('Chapter1_Skeleton rendering - Skeleton view with chat sliding in');

  return <SkeletonPage />;
}
