/**
 * Prototype Guide
 *
 * Developer/design reference with tabbed navigation for:
 * - Navigation: Chapter list and app navigation test
 * - Components: Component library (formerly Style Guide)
 * - About: Prototype information and links
 *
 * Triggered by ESC key, displays full viewport modal outside phone frame.
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CHAPTER_ORDER, CHAPTER_METADATA } from '../context/JourneyContext';
import { TabNavigation } from './ui/tab-navigation';
import { StyleGuideContent } from './StyleGuide';
import chevronIconPaths from '@/imports/ListItem/svg-ent6txxqqx';

export interface PrototypeGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabId = 'navigation' | 'components' | 'animations' | 'about';

interface ChapterItem {
  id: string;
  title: string;
  description: string;
  route: string;
}

function ChapterListItem({
  title,
  description,
  onClick,
  showBorder = true
}: {
  title: string;
  description: string;
  onClick: () => void;
  showBorder?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex gap-[16px] items-center py-[16px] relative w-full text-left"
      data-name="Chapter List Item"
    >
      {/* Text content */}
      <div className="content-stretch flex flex-[1_0_0] flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[4px] items-start leading-[0] min-w-px relative">
        <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-black w-full">
          <p className="leading-[24px]">{title}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
          <p className="leading-[20px]">{description}</p>
        </div>
      </div>

      {/* Chevron icon */}
      <div className="overflow-clip relative shrink-0 size-[16px]">
        <div className="absolute inset-[0_15.83%_0_29.17%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8 16">
            <path d={chevronIconPaths.p178c6e80} fill="#0012E7" />
          </svg>
        </div>
      </div>

      {/* Bottom border */}
      {showBorder && (
        <div className="absolute bottom-0 content-stretch flex flex-col h-px items-start left-0 right-0">
          <div className="bg-[#e1e1e1] h-px shrink-0 w-full" />
        </div>
      )}
    </button>
  );
}

export function PrototypeGuide({ isOpen, onClose }: PrototypeGuideProps) {
  const [activeTab, setActiveTab] = useState<TabId>('navigation');
  const navigate = useNavigate();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Build chapter list from CHAPTER_ORDER
  const chapterItems: ChapterItem[] = CHAPTER_ORDER.map((chapterId) => ({
    id: chapterId,
    ...CHAPTER_METADATA[chapterId]
  }));

  // Add app navigation test as final item
  chapterItems.push({
    id: 'app-navigation-test',
    title: 'App Navigation Test',
    description: 'You can preview the app and main navigation outside of a chapter here.',
    route: '/app-nav-test'
  });

  const handleChapterClick = (route: string) => {
    onClose();
    navigate(route);
  };

  const tabs = [
    { id: 'navigation' as TabId, label: 'Navigation' },
    { id: 'components' as TabId, label: 'Components' },
    { id: 'animations' as TabId, label: 'Page Transitions' },
    { id: 'about' as TabId, label: 'About' }
  ];

  // Split chapters into two columns
  const midpoint = Math.ceil(chapterItems.length / 2);
  const leftColumnItems = chapterItems.slice(0, midpoint);
  const rightColumnItems = chapterItems.slice(midpoint);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prototype-guide-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
          <h1 id="prototype-guide-title" className="font-['Figtree:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#101828]">
            Prototype Guide
          </h1>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close prototype guide"
          >
            <svg className="size-[24px]" fill="none" viewBox="0 0 14 14">
              <path d="M1 13L13 1M1 1L13 13" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white">
          <TabNavigation
            tabs={tabs}
            activeTabId={activeTab}
            onTabChange={(tabId) => setActiveTab(tabId as TabId)}
          />
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto bg-white">
          {activeTab === 'navigation' && (
            <div className="p-6">
              <div className="flex gap-6">
                {/* Left column */}
                <div className="flex-1">
                  {leftColumnItems.map((item, index) => (
                    <ChapterListItem
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      onClick={() => handleChapterClick(item.route)}
                      showBorder={index < leftColumnItems.length - 1}
                    />
                  ))}
                </div>

                {/* Right column */}
                <div className="flex-1">
                  {rightColumnItems.map((item, index) => (
                    <ChapterListItem
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      onClick={() => handleChapterClick(item.route)}
                      showBorder={index < rightColumnItems.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'components' && (
            <div className="h-full">
              {/* Render StyleGuide content without modal wrapper */}
              <StyleGuideContent />
            </div>
          )}

          {activeTab === 'animations' && (
            <div className="p-6 space-y-8">
              <div>
                <h2 className="font-['Figtree:Bold',sans-serif] font-bold text-[20px] leading-[28px] text-[#101828] mb-4">
                  Page Transitions
                </h2>
                <p className="font-['Figtree:Regular',sans-serif] text-[14px] leading-[20px] text-[#475467] mb-6">
                  Add smooth transitions to any page by wrapping it with the PageTransition component.
                </p>

                <div className="space-y-6">
                  {/* Quick Start */}
                  <div>
                    <h3 className="font-['Figtree:Semibold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#344054] mb-2">
                      Quick Start
                    </h3>
                    <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto border border-gray-200">
                      <code>{`import { PageTransition } from '@/app/components/animations/PageTransition';

export default function MyPage() {
  return (
    <PageTransition variant="slide">
      <div className="p-8">
        <h1>My Page</h1>
        <p>Content here</p>
      </div>
    </PageTransition>
  );
}`}</code>
                    </pre>
                  </div>

                  {/* Variants */}
                  <div>
                    <h3 className="font-['Figtree:Semibold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#344054] mb-3">
                      Available Variants
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <code className="font-['Figtree:Semibold',sans-serif] text-[14px] text-[#0012E7]">fade</code>
                          <span className="text-xs text-gray-500">Simple fade in/out</span>
                        </div>
                        <p className="text-sm text-gray-600">Best for: Simple content pages, modals</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <code className="font-['Figtree:Semibold',sans-serif] text-[14px] text-[#0012E7]">slide</code>
                          <span className="text-xs text-gray-500">Right to left</span>
                        </div>
                        <p className="text-sm text-gray-600">Best for: Forward progression, chat interfaces, detail views</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <code className="font-['Figtree:Semibold',sans-serif] text-[14px] text-[#0012E7]">slide-fade</code>
                          <span className="text-xs text-gray-500">Vertical with fade</span>
                        </div>
                        <p className="text-sm text-gray-600">Best for: Lists, feeds, general pages</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <code className="font-['Figtree:Semibold',sans-serif] text-[14px] text-[#0012E7]">scale</code>
                          <span className="text-xs text-gray-500">Zoom in/out</span>
                        </div>
                        <p className="text-sm text-gray-600">Best for: Pop-up content, emphasis</p>
                      </div>
                    </div>
                  </div>

                  {/* Important Tips */}
                  <div>
                    <h3 className="font-['Figtree:Semibold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#344054] mb-3">
                      Important Tips
                    </h3>
                    <div className="space-y-2">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-gray-700">
                          <strong className="text-[#0012E7]">Full-height pages:</strong> Add <code className="bg-white px-1 rounded">className="h-full"</code> to PageTransition
                        </p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-gray-700">
                          <strong className="text-[#0012E7]">Custom duration:</strong> Use <code className="bg-white px-1 rounded">duration={'{0.4}'}</code> for faster transitions (default is 0.7s)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Examples in App */}
                  <div>
                    <h3 className="font-['Figtree:Semibold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#344054] mb-3">
                      Examples in This App
                    </h3>
                    <div className="space-y-2">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <p className="text-sm">
                          <strong>Skeleton Page:</strong> <code className="bg-white px-1 rounded text-xs">variant="fade"</code>
                        </p>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <p className="text-sm">
                          <strong>Chapter 1 Chat:</strong> <code className="bg-white px-1 rounded text-xs">variant="slide"</code> slides in from right
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* More Info */}
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      📖 <strong>Full documentation:</strong> <code className="bg-white px-1 rounded text-xs">HOW_TO_ADD_PAGE_TRANSITIONS.md</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="flex items-center justify-center h-full p-6">
              <p className="font-['Figtree:Medium',sans-serif] font-medium text-[16px] leading-[24px] text-black">
                Placeholder for later
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
