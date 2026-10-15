/**
 * Embedded Visual Components
 *
 * Visual components shown inline in conversation flow:
 * - ProviderMapIllustration: Row of provider avatars with Dot logo
 * - DeductibleTrackingVisual: Spending alert pill
 * - HealthPlanCard: Split image showing booking confirmation
 *
 * Design source: image-5.png, image-6.png, image-7.png
 *
 * IMPORTANT: Images use absolute paths (/src/imports/...) to prevent
 * broken links during Vite asset resolution.
 */

import imgProviderMap from '@/imports/image-5.png';
import imgDeductibleTracking from '@/imports/image-6.png';
import imgHealthPlanCard from '@/imports/image-7.png';

/**
 * Provider Map Illustration
 * Per conversation script: p1_ui_provider_map
 * Shows horizontal row of provider avatars with Dot logo in center
 */
export function ProviderMapIllustration() {
  return (
    <div className="w-full flex items-center justify-center py-4">
      <img
        src={imgProviderMap}
        alt="Provider network illustration"
        className="w-full h-auto"
      />
    </div>
  );
}

/**
 * Deductible Tracking Visual
 * Per conversation script: p1_ui_tracking
 * Shows spending alert with link to reduce costs
 */
export function DeductibleTrackingVisual() {
  return (
    <div className="w-full flex items-center justify-center py-4">
      <img
        src={imgDeductibleTracking}
        alt="Spending tracking notification"
        className="w-full h-auto"
      />
    </div>
  );
}

/**
 * Health Plan Card
 * Per conversation script: p1_ui_health_plan_card
 * Shows split image: video call + map with appointment confirmation
 */
export function HealthPlanCard() {
  return (
    <div className="w-full rounded-[16px] overflow-hidden">
      <img
        src={imgHealthPlanCard}
        alt="Health plan features with appointment booking"
        className="w-full h-auto"
      />
    </div>
  );
}
