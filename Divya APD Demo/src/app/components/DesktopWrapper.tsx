/**
 * Desktop Wrapper - Viewport Presentation
 *
 * Per guidelines.md Desktop Wrapper specifications:
 * - Desktop (≥640px / sm): Center app in 375×812px phone frame
 * - Mobile (<640px): Full viewport, no wrapper
 *
 * This is infrastructure - not a visual component requiring Figma design.
 */

import React, { ReactNode } from 'react';

interface DesktopWrapperProps {
  children: ReactNode;
}

export function DesktopWrapper({ children }: DesktopWrapperProps) {
  return (
    <>
      {/* Mobile: Full viewport, no wrapper */}
      <div className="sm:hidden w-full h-screen overflow-hidden">
        {children}
      </div>

      {/* Desktop: Centered phone frame */}
      <div className="hidden sm:flex min-h-screen w-full items-center justify-center p-8 bg-[#5D5D69]">
        <div
          className="relative rounded-[24px] shadow-2xl overflow-hidden"
          style={{
            width: '375px',
            height: '812px',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
