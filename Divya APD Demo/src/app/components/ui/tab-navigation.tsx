/**
 * Tab Navigation Component
 *
 * Reusable tab navigation supporting 2-3 tabs.
 * Used in My Health (Activity, Medicine, Care Team) and Get Care (Services, For You).
 *
 * Design: Included Health Design System
 * Source: Figma My Health screens (imported from /src/imports/Tabs/)
 *
 * IMPORTANT:
 * - Tabs MUST span the full width of their container
 * - Each tab distributes evenly using flex-[1_0_0]
 * - Container should be wrapped in a parent with explicit width (e.g., w-[375px] or w-full)
 * - Supports 2-3 tabs; each tab will take equal width
 *
 * @example
 * <div className="w-full"> // or w-[375px] for mobile
 *   <TabNavigation tabs={tabs} activeTabId="activity" onTabChange={handleChange} />
 * </div>
 */

import React from 'react';

export interface Tab {
  id: string;
  label: string;
}

export interface TabNavigationProps {
  tabs: Tab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
}

export function TabNavigation({ tabs, activeTabId, onTabChange }: TabNavigationProps) {
  return (
    <div className="content-stretch flex items-start relative h-[48px] w-full" data-name="Tabs">
      {/* Bottom border for entire tab bar */}
      <div
        aria-hidden="true"
        className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none"
      />

      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex-[1_0_0] h-full min-w-px relative"
            aria-current={isActive ? 'page' : undefined}
            data-name={`Tab ${tab.label}`}
          >
            {/* Active tab blue underline */}
            {isActive && (
              <div
                aria-hidden="true"
                className="absolute border-[#0012e7] border-b-4 border-solid inset-0 pointer-events-none"
              />
            )}

            {/* Tab label */}
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
                <p
                  className={`relative shrink-0 text-[12px] leading-[16px] whitespace-nowrap ${
                    isActive
                      ? "font-['Figtree:Bold',sans-serif] font-bold text-[#0012e7]"
                      : "font-['Figtree:Medium',sans-serif] font-medium text-[#3b3b3b]"
                  }`}
                >
                  {tab.label}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
