/**
 * Secondary Navigation Component
 *
 * Reusable navigation header for chat and other screens.
 * Design: Adapted from Figma imports SecondaryNavigation variants
 *
 * Variants:
 * - Simple: title only (no back button, no actions)
 * - With back: title + back button
 * - With actions: title + back button + right actions (icons or text buttons)
 * - With subtitle: title + subtitle + back button + actions
 */

import svgPaths from '@/imports/SecondaryNavigation/svg-oebknc8gg3';

export interface SecondaryNavigationProps {
  title: string;
  subtitle?: string;
  onBackClick?: () => void;
  rightActions?: React.ReactNode;
}

export function SecondaryNavigation({ title, subtitle, onBackClick, rightActions }: SecondaryNavigationProps) {
  const hasSubtitle = !!subtitle;

  return (
    <div className="bg-white border-[#e1e1e1] border-b border-solid relative w-full h-[48px]" data-name="Secondary Navigation">
      <div
        className="absolute content-stretch flex inset-[0_0_-1px_0] items-center justify-between overflow-clip px-[12px]"
        data-name="Container"
      >
        {/* Left action - Back button (or empty spacer) */}
        <div className="content-stretch flex h-[48px] items-center min-w-[48px] overflow-clip relative shrink-0" data-name="Left action">
          {onBackClick ? (
            <button
              onClick={onBackClick}
              className="content-stretch flex items-center relative shrink-0"
              aria-label="Go back"
            >
              <div className="overflow-clip relative shrink-0 size-[22px]" data-name="arrow-left">
                <div className="absolute inset-[0_29.17%_0_15.83%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1 22">
                    <path d={svgPaths.p1deb8200} fill="#0012E7" id="Vector" />
                  </svg>
                </div>
              </div>
            </button>
          ) : null}
        </div>

        {/* Centered title (with optional subtitle) */}
        <div
          className={`-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex ${hasSubtitle ? 'flex-col items-start' : 'items-center justify-center'} left-1/2 top-1/2 w-[229px]`}
          data-name="Title"
        >
          <p className={`font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black text-center ${hasSubtitle ? 'w-full' : 'flex-[1_0_0] min-w-px'}`}>
            {title}
          </p>
          {hasSubtitle && (
            <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-black text-center w-full">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right actions */}
        <div
          className="content-stretch flex gap-[24px] h-[48px] items-center justify-end min-w-[48px] overflow-clip relative shrink-0"
          data-name="Right actions"
        >
          {rightActions}
        </div>
      </div>
    </div>
  );
}

// Helper components for common right action patterns

interface IconButtonProps {
  onClick?: () => void;
  icon: React.ReactNode;
  label: string;
}

export function SecondaryNavIconButton({ onClick, icon, label }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex items-center relative shrink-0"
      aria-label={label}
    >
      <div className="overflow-clip relative shrink-0 size-[22px]">
        {icon}
      </div>
    </button>
  );
}

interface TextButtonProps {
  onClick?: () => void;
  text: string;
}

export function SecondaryNavTextButton({ onClick, text }: TextButtonProps) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex items-center relative shrink-0"
    >
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0012e7] text-[16px] whitespace-nowrap">
        {text}
      </p>
    </button>
  );
}
