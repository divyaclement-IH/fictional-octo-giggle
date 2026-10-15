/**
 * Service Group Component
 *
 * Groups of related services with a title header.
 * Used in the Get Care > Services screen to organize services by category.
 *
 * Design: Figma Get Care Services screen
 * Source: /src/imports/ServiceGroup/ServiceGroup.tsx
 */

import React from 'react';
import { ServiceItem, type ServiceItemProps } from './ServiceItem';

export interface ServiceGroupProps {
  /** Group title (e.g., "Common Searches", "Everyday Care") */
  title: string;
  /** Array of services in this group */
  services: ServiceItemProps[];
}

export function ServiceGroup({ title, services }: ServiceGroupProps) {
  // Don't render if no services
  if (services.length === 0) {
    return null;
  }

  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative w-full"
      data-name="Service Group"
    >
      {/* Group title */}
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">{title}</p>
      </div>

      {/* Service item list */}
      <div
        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
        data-name="Service item list"
      >
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            name={service.name}
            isExternal={service.isExternal}
            icon={service.icon}
            onClick={service.onClick}
          />
        ))}
      </div>
    </div>
  );
}
