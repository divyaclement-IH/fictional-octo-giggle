/**
 * Get Care Screen
 *
 * Main screen for Get Care section with 2 tabs: For You, Services
 * Displays personalized content recommendations and services.
 */

import React from 'react';
import { useAppNav } from '../../../context/AppNavContext';
import { TabNavigation } from '../../ui/tab-navigation';
import { ForYouItem, type ForYouChip } from '../../healthcare/cards/ForYouItem';
import { SearchField } from '../../ui/SearchField';
import { ServiceGroup } from '../../healthcare/cards/ServiceGroup';
import type { ServiceItemProps } from '../../healthcare/cards/ServiceItem';
import imgPlaceholder from '@/imports/ForYouItem/4ec37523331295ff4a72799b66f6563936757cc3.png';

const GET_CARE_TABS = [
  { id: 'for-you', label: 'For You' },
  { id: 'services', label: 'Services' }
];

// Mock data for For You items
const FOR_YOU_ITEMS = [
  {
    id: '1',
    imageSrc: imgPlaceholder,
    title: 'Pregnancy Nutrition Guide',
    chips: [
      { label: 'Nutrition', variant: 'info' as const },
      { label: 'Recommended', variant: 'success' as const }
    ] as ForYouChip[],
    summary: 'Get help creating a pregnancy-friendly meal plan to meet your goals, validated by your dietitian.'
  },
  {
    id: '2',
    imageSrc: imgPlaceholder,
    title: 'Prenatal Yoga Classes',
    chips: [
      { label: 'Wellness', variant: 'info' as const },
      { label: 'New', variant: 'success' as const }
    ] as ForYouChip[],
    summary: 'Join virtual prenatal yoga sessions designed for expectant mothers at every stage of pregnancy.'
  },
  {
    id: '3',
    imageSrc: imgPlaceholder,
    title: 'Mental Health Check-In',
    chips: [
      { label: 'Mental Health', variant: 'info' as const }
    ] as ForYouChip[],
    summary: 'Connect with a therapist who specializes in maternal mental health and perinatal mood support.'
  }
];

export function GetCareScreen() {
  const { currentTab, navigateToTab } = useAppNav();

  const activeTab = currentTab || 'for-you';

  const handleTabChange = (tabId: string) => {
    navigateToTab(tabId);
  };

  return (
    <div className="h-full min-h-0 flex-1 flex flex-col bg-white">
      {/* Tab Navigation */}
      <TabNavigation
        tabs={GET_CARE_TABS}
        activeTabId={activeTab}
        onTabChange={handleTabChange}
      />

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'for-you' && <ForYouTab />}
        {activeTab === 'services' && <ServicesTab />}
      </div>
    </div>
  );
}

function ForYouTab() {
  const handleItemClick = (itemId: string) => {
    console.log('Item clicked:', itemId);
    // TODO: Navigate to detail screen
  };

  const handleItemRemove = (itemId: string) => {
    console.log('Item removed:', itemId);
    // TODO: Remove item from feed
  };

  return (
    <div className="flex flex-col">
      {FOR_YOU_ITEMS.map((item, index) => (
        <ForYouItem
          key={item.id}
          imageSrc={item.imageSrc}
          title={item.title}
          chips={item.chips}
          summary={item.summary}
          showBorder={index < FOR_YOU_ITEMS.length - 1}
          onClick={() => handleItemClick(item.id)}
          onRemove={() => handleItemRemove(item.id)}
        />
      ))}
    </div>
  );
}

function ServicesTab() {
  const handleServiceClick = (serviceName: string) => {
    console.log('Service clicked:', serviceName);
    // TODO: Navigate to service detail or booking flow
  };

  // Mock service data - organized by groups
  const commonSearches: ServiceItemProps[] = [
    { name: 'Urgent care visit', isExternal: false, onClick: () => handleServiceClick('Urgent care visit') },
    { name: 'Primary care visit', isExternal: false, onClick: () => handleServiceClick('Primary care visit') },
    { name: 'Mental health visit', isExternal: false, onClick: () => handleServiceClick('Mental health visit') },
    { name: 'Physical therapy', isExternal: true }
  ];

  const everydayCare: ServiceItemProps[] = [
    { name: 'Therapy visit', isExternal: false },
    { name: 'Dermatology visit', isExternal: false },
    { name: 'Nutrition counseling', isExternal: false },
    { name: 'Preventive care visit', isExternal: false }
  ];

  const employerBenefits: ServiceItemProps[] = [
    { name: 'Gym membership', isExternal: true },
    { name: 'Fertility support', isExternal: true },
    { name: 'Financial wellness', isExternal: true },
    { name: 'Legal assistance', isExternal: true }
  ];

  const everything: ServiceItemProps[] = [
    { name: 'Urgent care visit', isExternal: false },
    { name: 'Primary care visit', isExternal: false },
    { name: 'Specialist consultation', isExternal: false },
    { name: 'Lab work', isExternal: false }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Search Field */}
      <div className="px-[16px] pt-[16px] pb-[8px]">
        <SearchField placeholder="Search services" />
      </div>

      {/* Service Groups */}
      <div className="flex-1 overflow-y-auto px-[16px] pb-[16px]">
        <div className="flex flex-col gap-[24px]">
          <ServiceGroup title="Common Searches" services={commonSearches} />
          <ServiceGroup title="Everyday Care" services={everydayCare} />
          <ServiceGroup title="Employer Benefits" services={employerBenefits} />
          <ServiceGroup title="Everything" services={everything} />
        </div>
      </div>
    </div>
  );
}
