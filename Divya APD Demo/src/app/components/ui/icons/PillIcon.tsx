/**
 * Pill Icon Component
 *
 * Medication pill icon used in medication list items.
 * Supports different tones (success/warning) for visual status indication.
 *
 * Design: Included Health Design System
 * Source: Figma My Health Medicine screens
 */

import React from 'react';
import pillIconPaths from '@/imports/Button-1/svg-jvcw1pq6yr';

export type PillIconTone = 'success' | 'warning' | 'brand';

export interface PillIconProps {
  tone?: PillIconTone;
  size?: number;
}

const TONE_COLORS: Record<PillIconTone, string> = {
  success: '#00835D',
  warning: '#A55600',
  brand: '#0012E7'
};

export function PillIcon({ tone = 'success', size = 16 }: PillIconProps) {
  const color = TONE_COLORS[tone];

  return (
    <div className="overflow-clip relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-[0.79%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15.7477 15.746"
        >
          <g>
            <path d={pillIconPaths.p625b030} fill={color} />
            <path
              clipRule="evenodd"
              d={pillIconPaths.p38b8f600}
              fill={color}
              fillRule="evenodd"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
