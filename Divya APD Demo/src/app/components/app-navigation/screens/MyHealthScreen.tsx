/**
 * My Health Screen
 *
 * Main screen for My Health section with 3 tabs: Activity, Medicine, Care Team
 * Displays chapter-specific content from appState
 */

import React from 'react';
import { useAppNav } from '../../../context/AppNavContext';
import { useJourneyOptional } from '../../../context/JourneyContext';
import { useStoryBibleOptional } from '../../../context/StoryBibleContext';
import { getAppStateForChapter } from '@/data/appState';
import { TabNavigation } from '../../ui/tab-navigation';
import { SearchField } from '../../ui/SearchField';
import { FilterBar } from '../../ui/FilterBar';
import { PillIcon } from '../../ui/icons/PillIcon';
import { ActivityListItem } from '../../healthcare/cards/ActivityListItem';
import { MedicationListItem } from '../../healthcare/cards/MedicationListItem';
import { CareTeamMemberCard } from '../../healthcare/cards/CareTeamMemberCard';
import type { ActivityItem } from '@/data/appState';
import filterIconPaths from '@/imports/Filters/svg-sxtxac1yru';

const MY_HEALTH_TABS = [
  { id: 'activity', label: 'Activity' },
  { id: 'medicine', label: 'Medicine' },
  { id: 'care-team', label: 'Care Team' }
];

export function MyHealthScreen() {
  const { currentTab, navigateToTab, openDetailScreen } = useAppNav();
  const journey = useJourneyOptional();

  const activeTab = currentTab || 'activity';

  // Get chapter-specific app state
  const chapterState = getAppStateForChapter(journey?.currentChapter || '');
  const myHealthData = chapterState.myHealth;

  if (!myHealthData) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <p className="font-['Figtree:Medium',sans-serif] font-medium text-[14px] text-[#3b3b3b]">
          No health data available
        </p>
      </div>
    );
  }

  return (
    <div className="h-full min-h-0 flex-1 flex flex-col bg-white">
      {/* Tab Navigation - spans full width */}
      <div className="flex-shrink-0 bg-white w-full">
        <TabNavigation
          tabs={MY_HEALTH_TABS}
          activeTabId={activeTab}
          onTabChange={navigateToTab}
        />
      </div>

      {/* Content Area - Scrollable */}
      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-[16px] py-[16px]">
        {activeTab === 'activity' && (
          <ActivityTab
            items={myHealthData.activity.items}
            onItemClick={(itemId) => openDetailScreen('activity-detail', { itemId })}
          />
        )}
        {activeTab === 'medicine' && (
          <MedicineTab
            items={myHealthData.medicine.resolvedRows}
            onItemClick={(itemId) => openDetailScreen('prescription-detail', { itemId })}
          />
        )}
        {activeTab === 'care-team' && (
          <CareTeamTab
            members={myHealthData.careTeam.members}
            onSchedule={(memberId) => openDetailScreen('schedule-appointment', { memberId })}
            onViewProfile={(memberId) => openDetailScreen('provider-profile', { memberId })}
          />
        )}
      </div>
    </div>
  );
}

// ========================================
// Tab Components
// ========================================

interface ActivityTabProps {
  items: ActivityItem[];
  onItemClick: (itemId: string) => void;
}

function ActivityTab({ items, onItemClick }: ActivityTabProps) {
  const journey = useJourneyOptional();
  const story = useStoryBibleOptional();

  // Get current date from story bible
  const getCurrentDate = (): Date => {
    if (journey?.currentChapter && story?.chapters[journey.currentChapter]?.date) {
      return story.chapters[journey.currentChapter].date;
    }
    return new Date();
  };

  const currentDate = getCurrentDate();

  // Group activities into upcoming and past (by month)
  const groupedActivities = groupActivitiesByDate(items, currentDate);

  return (
    <div className="flex flex-col gap-[16px]">
      {/* Search Field */}
      <SearchField placeholder="Provider, date, visit type" />

      {/* Filter Bar */}
      <FilterBar
        filters={[
          {
            label: 'everything',
            icon: (
              <div className="absolute inset-[5.86%_0]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16.0006 14.1242"
                >
                  <path
                    clipRule="evenodd"
                    d={filterIconPaths.p1ee3e080}
                    fill="#0012E7"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            )
          }
        ]}
      />

      {/* Upcoming Activities */}
      {groupedActivities.upcoming.length > 0 && (
        <div className="content-stretch flex flex-col items-start relative w-full">
          <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#6d6d6d] text-[16px] w-full mb-[8px]">
            Upcoming
          </p>
          <div className="content-stretch flex flex-col items-start relative w-full">
            {groupedActivities.upcoming.map((item, index) => (
              <ActivityListItem
                key={item.id}
                item={item}
                actionType="icon-button"
                showBorder={index < groupedActivities.upcoming.length - 1}
                onIconButtonClick={() => console.log('Add to calendar:', item.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Past Activities - Grouped by Month */}
      {groupedActivities.pastByMonth.map((monthGroup) => (
        <div key={monthGroup.monthKey} className="content-stretch flex flex-col items-start relative w-full">
          <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#6d6d6d] text-[16px] w-full mb-[8px]">
            {monthGroup.monthLabel}
          </p>
          <div className="content-stretch flex flex-col items-start relative w-full">
            {monthGroup.items.map((item, index) => (
              <ActivityListItem
                key={item.id}
                item={item}
                actionType="chevron"
                showBorder={index < monthGroup.items.length - 1}
                onClick={() => onItemClick(item.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

interface MedicineTabProps {
  items: any[];
  onItemClick: (itemId: string) => void;
}

function MedicineTab({ items, onItemClick }: MedicineTabProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      {/* Search Field */}
      <SearchField placeholder="Medication name, prescriber" />

      {/* Filter Bar */}
      <FilterBar
        filters={[
          {
            label: 'Active',
            icon: <PillIcon tone="brand" size={16} />
          }
        ]}
      />

      {/* Medication List */}
      <div className="content-stretch flex flex-col items-start relative w-full">
        {items.map((item, index) => (
          <MedicationListItem
            key={item.id}
            item={item}
            showBorder={index < items.length - 1}
            onClick={() => onItemClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

interface CareTeamTabProps {
  members: any[];
  onSchedule: (memberId: string) => void;
  onViewProfile: (memberId: string) => void;
}

function CareTeamTab({ members, onSchedule, onViewProfile }: CareTeamTabProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      {members.map((member) => (
        <CareTeamMemberCard
          key={member.id}
          member={member}
          onSchedule={member.isInternal ? undefined : () => onSchedule(member.id)}
          onViewProfile={() => onViewProfile(member.id)}
        />
      ))}
    </div>
  );
}

// ========================================
// Activity Grouping Helper
// ========================================

interface MonthGroup {
  monthKey: string;
  monthLabel: string;
  items: ActivityItem[];
}

interface GroupedActivities {
  upcoming: ActivityItem[];
  pastByMonth: MonthGroup[];
}

/**
 * Group activities into upcoming and past (by month)
 */
function groupActivitiesByDate(items: ActivityItem[], currentDate: Date): GroupedActivities {
  const upcoming: ActivityItem[] = [];
  const past: ActivityItem[] = [];

  // Separate upcoming vs. past
  items.forEach((item) => {
    const itemDate = new Date(item.date);
    if (itemDate >= currentDate) {
      upcoming.push(item);
    } else {
      past.push(item);
    }
  });

  // Sort upcoming by date (earliest first)
  upcoming.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Sort past by date (most recent first)
  past.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Group past activities by month
  const monthMap = new Map<string, ActivityItem[]>();
  past.forEach((item) => {
    const itemDate = new Date(item.date);
    const monthKey = `${itemDate.getFullYear()}-${String(itemDate.getMonth() + 1).padStart(2, '0')}`;

    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, []);
    }
    monthMap.get(monthKey)!.push(item);
  });

  // Convert month map to sorted array
  const pastByMonth: MonthGroup[] = Array.from(monthMap.entries())
    .map(([monthKey, items]) => {
      const [year, month] = monthKey.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1, 1);
      const monthLabel = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

      return {
        monthKey,
        monthLabel,
        items
      };
    })
    .sort((a, b) => b.monthKey.localeCompare(a.monthKey)); // Most recent month first

  return {
    upcoming,
    pastByMonth
  };
}
