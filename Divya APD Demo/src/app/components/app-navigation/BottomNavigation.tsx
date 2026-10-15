/**
 * Bottom Navigation Component
 *
 * Main navigation bar with 4 items: Today, My Health, Get Care, My Plan
 * Appears at the bottom of all main screens, hidden on detail screens.
 *
 * Design: Included Health iOS app navigation
 * Source: Figma My Health screens + icon imports
 */

import React from 'react';
import { MainScreen } from '../../context/AppNavContext';
import { useStoryBibleOptional } from '../../context/StoryBibleContext';
import { useJourneyOptional } from '../../context/JourneyContext';
import todayIconRegularPaths from '@/imports/TodayIcon/svg-96qrpbz4gz';
import todayIconBoldPaths from '@/imports/TodayIcon-1/svg-qt3j119hm5';
import heartPulseRegularPaths from '@/imports/Icon/svg-1ybx5619km';
import heartPulseBoldPaths from '@/imports/Icon-1/svg-nfkzfa9qtj';
import handsHeartRegularPaths from '@/imports/Icon-2/svg-fgg2i1saj6';
import handsHeartBoldPaths from '@/imports/Icon-3/svg-515txqxi9o';
import cardMedicalRegularPaths from '@/imports/Icon-4/svg-uqw3kkhfun';
import cardMedicalBoldPaths from '@/imports/Icon-5/svg-q3oo06heu7';

export interface BottomNavigationProps {
  currentScreen: MainScreen;
  onNavigate: (screen: MainScreen) => void;
}

export function BottomNavigation({ currentScreen, onNavigate }: BottomNavigationProps) {
  const story = useStoryBibleOptional();
  const journey = useJourneyOptional();

  const handleNavigate = (screen: MainScreen) => {
    // Trigger navigation action for action gates
    if (screen === 'get-care' && journey) {
      journey.triggerAction('navigation:get_care_clicked');
    }

    // Proceed with normal navigation
    onNavigate(screen);
  };

  // Get current date from story bible based on chapter
  const getCurrentDate = (): Date => {
    if (journey?.currentChapter && story?.chapters[journey.currentChapter]?.date) {
      return story.chapters[journey.currentChapter].date;
    }
    return new Date(); // Fallback to today
  };

  const currentDate = getCurrentDate();
  const dayOfMonth = currentDate.getDate(); // 1-31

  const navItems: { id: MainScreen; label: string }[] = [
    { id: 'home', label: 'Today' },
    { id: 'my-health', label: 'My Health' },
    { id: 'get-care', label: 'Get Care' },
    { id: 'my-plan', label: 'My Plan' },
  ];

  return (
    <div className="relative h-[100px] w-[375px] overflow-clip bg-white">
      {/* Top border */}
      <div className="absolute left-0 right-0 top-0 h-px bg-[#e1e1e1]" />

      {/* Navigation items container */}
      <div className="absolute inset-0 flex items-start justify-between px-[4px]">
        {navItems.map((item) => {
          const isActive = item.id === currentScreen;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="flex w-[59px] shrink-0 flex-col items-center gap-[10px] overflow-clip"
            >
              {/* Highlight line (shown on active) */}
              <div className="relative h-[2px] w-[36px] shrink-0">
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 h-[2px] w-[36px] -translate-x-1/2 bg-black opacity-99" />
                )}
              </div>

              {/* Icon and label */}
              <div className="flex w-full shrink-0 flex-col items-center gap-[8px]">
                {/* Icon */}
                <div className="relative size-[24px] shrink-0">
                  {item.id === 'home' && <TodayIcon isActive={isActive} dayOfMonth={dayOfMonth} />}
                  {item.id === 'my-health' && <MyHealthIcon isActive={isActive} />}
                  {item.id === 'get-care' && <GetCareIcon isActive={isActive} />}
                  {item.id === 'my-plan' && <MyPlanIcon isActive={isActive} />}
                </div>

                {/* Label */}
                <p
                  className={`w-[min-content] min-w-full text-center text-[11px] leading-[16px] ${
                    isActive
                      ? "font-['Figtree:SemiBold',sans-serif] font-semibold text-black"
                      : "font-['Figtree:Medium',sans-serif] font-medium text-[#3b3b3b]"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ========================================
// Navigation Icons (from Figma)
// ========================================

function TodayIcon({ isActive, dayOfMonth }: { isActive: boolean; dayOfMonth: number }) {
  const paths = isActive ? todayIconBoldPaths : todayIconRegularPaths;
  const color = isActive ? 'black' : '#3B3B3B';

  return (
    <div className="relative size-full">
      <div className="absolute left-0 size-[24px] top-0 overflow-clip">
        <div className={isActive ? "absolute inset-[0_2.08%]" : "absolute inset-[0_-0.01%_0_0.01%]"}>
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={isActive ? "0 0 23 24" : "0 0 24 24"}>
            <path
              clipRule={isActive ? undefined : "evenodd"}
              d={isActive ? paths.p3c5f4a80 : paths.p10027a00}
              fill={color}
              fillRule={isActive ? undefined : "evenodd"}
            />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] text-[11px] text-black text-center top-[16.5px] whitespace-nowrap">
        <p className="leading-[11px]">{dayOfMonth}</p>
      </div>
    </div>
  );
}

function MyHealthIcon({ isActive }: { isActive: boolean }) {
  const paths = isActive ? heartPulseBoldPaths : heartPulseRegularPaths;
  const color = isActive ? 'black' : '#3B3B3B';

  return (
    <div className="absolute inset-[8.24%_0.64%_8.25%_0.62%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={isActive ? "0 0 23.727 20.0487" : "0 0 23.6988 20.0421"}>
        <path d={isActive ? paths.p6ca400 : paths.p20094830} fill={color} />
      </svg>
    </div>
  );
}

function GetCareIcon({ isActive }: { isActive: boolean }) {
  const paths = isActive ? handsHeartBoldPaths : handsHeartRegularPaths;
  const color = isActive ? 'black' : '#3B3B3B';

  return (
    <div className={isActive ? "absolute inset-[10.4%_0_0_0.17%]" : "absolute inset-[0.62%_0.05%]"}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={isActive ? "0 0 23.96 21.504" : "0 0 23.976 23.7032"}>
        {isActive ? (
          <g>
            <path d={paths.p25546280} fill={color} />
            <path d={paths.pf202580} fill={color} />
            <path d={paths.p14f86800} fill={color} />
          </g>
        ) : (
          <path d={paths.p2af27b00} fill={color} />
        )}
      </svg>
    </div>
  );
}

function MyPlanIcon({ isActive }: { isActive: boolean }) {
  const paths = isActive ? cardMedicalBoldPaths : cardMedicalRegularPaths;
  const color = isActive ? 'black' : '#3B3B3B';

  return (
    <div className={isActive ? "absolute inset-[17.04%_0]" : "absolute inset-[9.38%_0]"}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={isActive ? "0 0 24 15.82" : "0 0 24 19.5"}>
        {isActive ? (
          <path clipRule="evenodd" d={paths.pccc0800} fill={color} fillRule="evenodd" />
        ) : (
          <g>
            <path d={paths.p392fd480} fill={color} />
            <path d={paths.p5790980} fill={color} />
            <path d={paths.p171a6200} fill={color} />
            <path clipRule="evenodd" d={paths.pe5abe00} fill={color} fillRule="evenodd" />
          </g>
        )}
      </svg>
    </div>
  );
}
