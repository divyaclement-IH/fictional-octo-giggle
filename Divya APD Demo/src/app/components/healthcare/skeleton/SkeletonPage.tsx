/**
 * Skeleton Page - Health App Interface
 *
 * Displays a health app home screen with skeleton loaders matching Config1 design.
 * After 1000ms delay, triggers navigation to chat.
 *
 * Design Style: Medium-fidelity skeleton/loading state
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { PageTransition } from '@/app/components/animations/PageTransition';
import { SkeletonCard } from '@/app/components/animations/AnimatedCard';
import { Home, MessageCircle, Activity, User } from 'lucide-react';
import svgPaths from '@/imports/Config1/svg-z4y0c6pbq8';

export function SkeletonPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to chat after 1000ms delay to show pulsing animation
    const timer = setTimeout(() => {
      console.log('Skeleton page: Navigating to chat after 1000ms');
      navigate('/chapter1-chat');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PageTransition variant="fade">
      <div className="relative size-full bg-white overflow-hidden flex flex-col">
        {/* Gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, #e8e8e8 0%, rgba(255, 255, 255, 0) 40%)'
          }}
        />

        {/* iOS Status bar */}
        <div className="relative h-[47px] px-4 flex items-center justify-between text-black z-10">
          <span className="text-[17px] font-semibold tracking-[-0.5px]">9:41</span>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-2 bg-black rounded-full" />
              <div className="w-0.5 h-2.5 bg-black rounded-full" />
              <div className="w-0.5 h-3 bg-black rounded-full" />
              <div className="w-0.5 h-3.5 bg-black rounded-full" />
            </div>
            <svg className="w-4 h-3" viewBox="0 0 17 12.5" fill="none">
              <path d="M1 6.25C1 6.25 4 1 8.5 1C13 1 16 6.25 16 6.25C16 6.25 13 11.5 8.5 11.5C4 11.5 1 6.25 1 6.25Z" fill="black"/>
            </svg>
            <svg className="w-7 h-3" viewBox="0 0 27.33 13" fill="none">
              <rect x="0.5" y="0.5" width="24" height="12" rx="3.5" stroke="black" opacity="0.4"/>
              <rect x="2" y="2" width="21" height="9" rx="2" fill="black"/>
            </svg>
          </div>
        </div>

        {/* Main scrollable content */}
        <div className="relative flex-1 overflow-y-auto px-4 pb-24 z-10">
          {/* Header with brand logo */}
          <div className="h-[64px] flex items-center mb-2">
            <div className="h-[29.761px] relative shrink-0 w-[28px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 29.7609">
                <g id="IH blue">
                  <path d={svgPaths.p420c980} fill="#0012E7" />
                  <path d={svgPaths.p1ccc5a80} fill="#0012E7" />
                  <path d={svgPaths.p101c1300} fill="#0012E7" />
                  <path d={svgPaths.p2968ce00} fill="#0012E7" />
                  <path d={svgPaths.p2381ec80} fill="#0012E7" />
                  <path d={svgPaths.p30966f80} fill="#0012E7" />
                </g>
              </svg>
            </div>
          </div>

          {/* Title and badge skeleton */}
          <div className="mb-2">
            <SkeletonCard className="h-8 w-64 rounded-lg mb-2" />
            <div className="flex items-center gap-2">
              <SkeletonCard className="h-5 w-32 rounded-full" />
              <SkeletonCard className="size-4 rounded-full" />
            </div>
          </div>

          {/* Message input card skeleton */}
          <div className="bg-white border border-[#e1e1e1] rounded-[24px] p-4 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <SkeletonCard className="size-6 rounded-full" />
              <SkeletonCard className="h-5 w-48" />
            </div>
            <div className="flex items-center justify-between">
              <SkeletonCard className="h-9 w-24 rounded-[24px]" />
              <SkeletonCard className="size-[34px] rounded-full" />
            </div>
          </div>

          {/* Your actions section */}
          <div className="mb-6">
            <SkeletonCard className="h-8 w-32 rounded-lg mb-2" />

            {/* Action card - only one */}
            <ActionCardSkeleton />
          </div>

          {/* Your Care Team section */}
          <div className="mb-6">
            <SkeletonCard className="h-8 w-40 rounded-lg mb-2" />

            {/* Care team carousel */}
            <div className="flex gap-2 overflow-x-hidden mb-2">
              <CareTeamCardSkeleton />
              <CareTeamCardSkeleton />
            </div>

            {/* Carousel dots */}
            <div className="flex items-center justify-center gap-2">
              <SkeletonCard className="w-5 h-2 rounded-full" />
              <SkeletonCard className="size-2 rounded-full" />
              <SkeletonCard className="size-2 rounded-full" />
              <SkeletonCard className="size-2 rounded-full" />
            </div>
          </div>

          {/* Get care section */}
          <div className="mb-6">
            <SkeletonCard className="h-8 w-24 rounded-lg mb-2" />

            {/* Get care grid (2 columns, 4 rows = 8 tiles) */}
            <div className="grid grid-cols-2 gap-2">
              <GetCareTileSkeleton />
              <GetCareTileSkeleton />
              <GetCareTileSkeleton />
              <GetCareTileSkeleton />
              <GetCareTileSkeleton />
              <GetCareTileSkeleton />
              <GetCareTileSkeleton />
              <GetCareTileSkeleton />
            </div>
          </div>
        </div>

        {/* Bottom tab bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e1e1e2] h-[88px] z-20">
          <div className="flex items-center justify-around px-6 pt-3">
            <NavItem icon={<Home className="size-6" />} label="Home" active />
            <NavItem icon={<MessageCircle className="size-6" />} label="Messages" />
            <NavItem icon={<Activity className="size-6" />} label="Activity" />
            <NavItem icon={<User className="size-6" />} label="Me" />
          </div>
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-1.5 bg-[#1a1a23] rounded-full" />
        </div>
      </div>
    </PageTransition>
  );
}

function ActionCardSkeleton() {
  return (
    <div className="bg-white border border-[#e1e1e1] rounded-[24px] p-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <SkeletonCard className="h-6 w-48 mb-2" />
          <SkeletonCard className="h-5 w-32" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <SkeletonCard className="h-6 w-16 rounded-lg" />
        <SkeletonCard className="h-6 w-24 rounded-lg" />
        <SkeletonCard className="ml-auto size-8 rounded-full" />
      </div>
    </div>
  );
}

function CareTeamCardSkeleton() {
  return (
    <div className="bg-white border border-[#e1e1e2] rounded-[24px] p-6 flex-shrink-0 w-[230px]">
      <div className="flex items-center gap-4 mb-4">
        <SkeletonCard className="size-12 rounded-full" />
        <div className="flex-1">
          <SkeletonCard className="h-5 w-28 mb-2" />
          <SkeletonCard className="h-4 w-20" />
        </div>
      </div>
      <SkeletonCard className="h-9 w-full rounded-[24px]" />
    </div>
  );
}

function GetCareTileSkeleton() {
  return (
    <div className="bg-white border border-[#e1e1e1] rounded-[20px] p-3 min-h-[128px]">
      <div className="flex items-start justify-between mb-3">
        <SkeletonCard className="size-10 rounded-full" />
        <SkeletonCard className="h-6 w-16 rounded-lg" />
      </div>
      <SkeletonCard className="h-6 w-full mb-2" />
      <SkeletonCard className="h-6 w-20" />
    </div>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={active ? 'text-[#0012e7]' : 'text-[#3b3b3b]'}>
        {icon}
      </div>
      <span className={`text-[11px] ${active ? 'text-[#0012e7] font-bold' : 'text-[#1a1a23] font-medium'}`}>{label}</span>
    </div>
  );
}
