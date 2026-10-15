/**
 * Component Style Guide
 *
 * Developer/design reference showing all reusable components.
 * Triggered by ESC key, displays full viewport modal outside phone frame.
 */

import { useState, useEffect } from 'react';
import { storyBible } from '../../data/storyBible';
import { LockScreen } from './healthcare/lock-screen/LockScreen';
import { LockNotification } from './healthcare/lock-screen/LockNotification';
import { MessageBubble } from './healthcare/chat/MessageBubble';
import { CareTeamBubble } from './healthcare/chat/CareTeamBubble';
import { SystemMessage } from './healthcare/chat/SystemMessage';
import { QuickReply } from './healthcare/chat/QuickReply';
import { ChatInput } from './healthcare/chat/ChatInput';
import { ChatDisclaimer } from './healthcare/chat/ChatDisclaimer';
import { ConfirmationCard } from './healthcare/cards/ConfirmationCard';
import { ServiceCard } from './healthcare/cards/ServiceCard';
import { ProviderCard } from './healthcare/cards/ProviderCard';
import { SpecialistCard } from './healthcare/cards/SpecialistCard';
import { VisitCompleteCard } from './healthcare/cards/VisitCompleteCard';
import { Carousel } from './healthcare/cards/Carousel';
import { VideoVisit } from './healthcare/video/VideoVisit';
import { RequestCard } from './healthcare/booking/RequestCard';
import { CareComparison } from './healthcare/specialist/CareComparison';
import { SearchField } from './ui/SearchField';
import { FilterBar } from './ui/FilterBar';
import { Chip } from './ui/Chip';
import { PillIcon } from './ui/icons/PillIcon';
import { ActivityListItem } from './healthcare/cards/ActivityListItem';
import { MedicationListItem } from './healthcare/cards/MedicationListItem';
import { CareTeamMemberCard } from './healthcare/cards/CareTeamMemberCard';
import { ForYouItem } from './healthcare/cards/ForYouItem';
import { ServiceItem } from './healthcare/cards/ServiceItem';
import { ServiceGroup } from './healthcare/cards/ServiceGroup';
import { PromptInput } from './ui/PromptInput';
import { PromptChip } from './ui/PromptChip';
import { ChipScroller } from './ui/ChipScroller';
import { ActionCard } from './healthcare/cards/ActionCard';
import { PendingActionsCard } from './healthcare/cards/PendingActionsCard';
import filterIconPaths from '@/imports/Filters/svg-sxtxac1yru';
import imgPlaceholder from '@/imports/ForYouItem/4ec37523331295ff4a72799b66f6563936757cc3.png';

// Animation Components
import { ThinkingIndicator } from './animations/ThinkingIndicator';
import { TypingText } from './animations/TypingText';
import { LoopingSpringPop } from './animations/LoopingSpringPop';
import { LoopingAnimationWrapper } from './animations/LoopingAnimationWrapper';
import { LoopingAnimatedCard } from './animations/LoopingAnimatedCard';
import { SkeletonCard } from './animations/AnimatedCard';
import { LoopingProgressBar } from './animations/LoopingProgressBar';

// Easing Components
import { EasingGrid } from './easing/EasingVisualizer';
import * as easingFunctions from './easing/easingFunctions';

export interface StyleGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

// Export helper components for reuse
export function CategorySection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <span className="text-gray-500 text-sm">{isOpen ? '▼' : '▶'}</span>
      </button>
      {isOpen && <div className="p-6 space-y-8 bg-gray-50">{children}</div>}
    </div>
  );
}

export function ComponentCard({
  name,
  description,
  children,
}: {
  name: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="p-4 border-b border-gray-200 bg-white">
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <div className="p-6 bg-gray-100">
        <div className="flex items-center justify-center">{children}</div>
      </div>
    </div>
  );
}

/**
 * StyleGuideContent - Component library content without modal wrapper
 * Exported for use in PrototypeGuide's Components tab
 */
export function StyleGuideContent() {
  const sampleDate = storyBible.chapters.chapter1_tour.date;

  return (
    <div>
          {/* Animation Components Section */}
          <CategorySection title="Animation Components" defaultOpen={false}>
            <ComponentCard
              name="AnimationWrapper"
              description="Generic animation wrapper supporting multiple animation types: spring-pop, fade-in, slide-up, and scale-ease"
            >
              <div className="w-full max-w-md space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-3">Spring-pop (with overshoot):</p>
                  <LoopingAnimationWrapper type="spring-pop" origin="center center">
                    <div className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                      Spring Pop
                    </div>
                  </LoopingAnimationWrapper>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-3">Scale-ease (smooth, no overshoot):</p>
                  <LoopingAnimationWrapper type="scale-ease" origin="center center">
                    <div className="w-32 h-32 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      Scale Ease
                    </div>
                  </LoopingAnimationWrapper>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-3">Fade-in:</p>
                  <LoopingAnimationWrapper type="fade-in" origin="center center">
                    <div className="w-32 h-32 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                      Fade In
                    </div>
                  </LoopingAnimationWrapper>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-3">Slide-up:</p>
                  <LoopingAnimationWrapper type="slide-up" origin="center center">
                    <div className="w-32 h-32 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                      Slide Up
                    </div>
                  </LoopingAnimationWrapper>
                </div>
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`import { AnimationWrapper, FadeIn, SlideUp, ScaleEase } from '@/app/components/animations';

// Generic wrapper
<AnimationWrapper type="spring-pop" origin="center center">
  <div>Content</div>
</AnimationWrapper>

// Convenience components
<FadeIn duration={0.3}>
  <div>Fades in</div>
</FadeIn>

<SlideUp duration={0.4} delay={0.1}>
  <div>Slides up</div>
</SlideUp>

<ScaleEase origin="center center">
  <div>Scales smoothly</div>
</ScaleEase>`}
                </pre>
              </div>
            </ComponentCard>

            <ComponentCard
              name="SpringPop Animation"
              description="Subtle spring scale animation for chat elements appearing. Use for avatars (left center) and images (center center)."
            >
              <div className="w-full max-w-md space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-3">Avatar entrance (origin: left center):</p>
                  <LoopingSpringPop origin="left center" className="inline-block">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      D
                    </div>
                  </LoopingSpringPop>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-3">Image/card entrance (origin: center center):</p>
                  <LoopingSpringPop origin="center center">
                    <div className="w-48 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      Image Card
                    </div>
                  </LoopingSpringPop>
                </div>
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`import { SpringPop } from '@/app/components/animations';

// Avatar (left-aligned)
<SpringPop origin="left center">
  <Avatar />
</SpringPop>

// Image (center-aligned)
<SpringPop origin="center center">
  <img src="..." />
</SpringPop>`}
                </pre>
              </div>
            </ComponentCard>

            <ComponentCard
              name="ThinkingIndicator"
              description="Three-dot thinking/typing indicator for loading states and AI processing"
            >
              <div className="w-full max-w-md space-y-4">
                <div className="flex items-center justify-center p-4">
                  <ThinkingIndicator width={60} height={24} />
                </div>
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`import { ThinkingIndicator } from '@/app/components/animations';

<ThinkingIndicator width={60} height={24} />`}
                </pre>
              </div>
            </ComponentCard>

            <ComponentCard
              name="TypingText"
              description="Typewriter animation for chat responses. Shows character-by-character text reveal with optional cursor."
            >
              <div className="w-full max-w-md space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-3">Dot response typing (no cursor):</p>
                  <div className="bg-gray-100 rounded-2xl p-4">
                    <TypingText
                      text="Based on your symptoms, I recommend scheduling a visit with your primary care physician."
                      speed={30}
                      cursor={false}
                      loop={true}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-3">Blinking cursor (input field):</p>
                  <TypingText
                    text=""
                    cursor={true}
                    className="text-gray-600"
                  />
                </div>
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`import { TypingText } from '@/app/components/animations';

// Dot response
<TypingText
  text="Hello! How can I help?"
  speed={30}
  cursor={false}
/>

// Input cursor
<TypingText text="" cursor={true} />`}
                </pre>
              </div>
            </ComponentCard>

            <ComponentCard
              name="AnimatedCard"
              description="Card with fade-in and slide-up animation using easing functions"
            >
              <div className="w-full max-w-md space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-3">Smooth easing (easeInOutCubic):</p>
                  <LoopingAnimatedCard
                    easingFunction={easingFunctions.easingPresets.smooth}
                    duration={600}
                    className="bg-white border border-gray-200 p-4 rounded-lg shadow"
                  >
                    <h3 className="font-bold">Card Title</h3>
                    <p className="text-sm text-gray-600">Animated with smooth easing</p>
                  </LoopingAnimatedCard>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-3">Bouncy easing (easeOutBack):</p>
                  <LoopingAnimatedCard
                    easingFunction={easingFunctions.easingPresets.bouncy}
                    duration={600}
                    className="bg-white border border-gray-200 p-4 rounded-lg shadow"
                  >
                    <h3 className="font-bold">Card Title</h3>
                    <p className="text-sm text-gray-600">Animated with bouncy easing</p>
                  </LoopingAnimatedCard>
                </div>
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`import { AnimatedCard } from '@/app/components/animations';
import { easingPresets } from '@/app/components/easing';

<AnimatedCard
  easingFunction={easingPresets.bouncy}
  duration={600}
>
  <div>Card content</div>
</AnimatedCard>`}
                </pre>
              </div>
            </ComponentCard>

            <ComponentCard
              name="SkeletonCard"
              description="Pulsing skeleton loader for loading states"
            >
              <div className="w-full max-w-md space-y-4">
                <div className="space-y-2">
                  <SkeletonCard className="h-6 w-3/4" />
                  <SkeletonCard className="h-4 w-full" />
                  <SkeletonCard className="h-4 w-5/6" />
                </div>
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`import { SkeletonCard } from '@/app/components/animations';

<SkeletonCard className="h-4 w-3/4" />
<SkeletonCard className="h-4 w-full" />`}
                </pre>
              </div>
            </ComponentCard>

            <ComponentCard
              name="AnimatedProgressBar"
              description="Smooth progress bar with easing for loading states"
            >
              <div className="w-full max-w-md space-y-4">
                <LoopingProgressBar
                  progress={0.75}
                  duration={1000}
                  easingFunction={easingFunctions.easingPresets.smooth}
                />
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`import { AnimatedProgressBar } from '@/app/components/animations';
import { easingPresets } from '@/app/components/easing';

<AnimatedProgressBar
  progress={0.75}
  easingFunction={easingPresets.smooth}
  duration={300}
/>`}
                </pre>
              </div>
            </ComponentCard>
          </CategorySection>

          {/* Easing Components Section */}
          <CategorySection title="Easing Components" defaultOpen={false}>
            <ComponentCard
              name="Easing Presets (Most Common)"
              description="Pre-configured easing functions for common use cases. Each shows an animated ball moving with the specified easing."
            >
              <div className="w-full max-w-2xl">
                <EasingGrid
                  easings={[
                    { fn: easingFunctions.easingPresets.smooth, label: 'smooth (easeInOutCubic)' },
                    { fn: easingFunctions.easingPresets.ease, label: 'ease (easeOutCubic)' },
                    { fn: easingFunctions.easingPresets.easeIn, label: 'easeIn (easeInCubic)' },
                    { fn: easingFunctions.easingPresets.bouncy, label: 'bouncy (easeOutBack)' },
                    { fn: easingFunctions.easingPresets.spring, label: 'spring (easeOutElastic)' },
                    { fn: easingFunctions.easingPresets.sharp, label: 'sharp (easeInOutQuart)' },
                  ]}
                />
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto mt-4">
{`import { easingPresets } from '@/app/components/easing';
import { useAnimation } from '@/app/components/easing';

const { value } = useAnimation({
  duration: 600,
  easingFunction: easingPresets.smooth,
  autoStart: true
});`}
                </pre>
              </div>
            </ComponentCard>

            <ComponentCard
              name="Quadratic Easings"
              description="Quadratic (t²) easing functions - moderate acceleration/deceleration"
            >
              <div className="w-full max-w-2xl">
                <EasingGrid
                  easings={[
                    { fn: easingFunctions.easeInQuad, label: 'easeInQuad' },
                    { fn: easingFunctions.easeOutQuad, label: 'easeOutQuad' },
                    { fn: easingFunctions.easeInOutQuad, label: 'easeInOutQuad' },
                  ]}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="Cubic Easings"
              description="Cubic (t³) easing functions - smooth, natural motion (most common)"
            >
              <div className="w-full max-w-2xl">
                <EasingGrid
                  easings={[
                    { fn: easingFunctions.easeInCubic, label: 'easeInCubic' },
                    { fn: easingFunctions.easeOutCubic, label: 'easeOutCubic' },
                    { fn: easingFunctions.easeInOutCubic, label: 'easeInOutCubic' },
                  ]}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="Quartic Easings"
              description="Quartic (t⁴) easing functions - sharper, faster animations"
            >
              <div className="w-full max-w-2xl">
                <EasingGrid
                  easings={[
                    { fn: easingFunctions.easeInQuart, label: 'easeInQuart' },
                    { fn: easingFunctions.easeOutQuart, label: 'easeOutQuart' },
                    { fn: easingFunctions.easeInOutQuart, label: 'easeInOutQuart' },
                  ]}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="Back Easings"
              description="Overshoots target slightly - playful, attention-grabbing"
            >
              <div className="w-full max-w-2xl">
                <EasingGrid
                  easings={[
                    { fn: easingFunctions.easeInBack, label: 'easeInBack' },
                    { fn: easingFunctions.easeOutBack, label: 'easeOutBack' },
                    { fn: easingFunctions.easeInOutBack, label: 'easeInOutBack' },
                  ]}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="Elastic Easings"
              description="Springs and oscillates - very playful, use sparingly"
            >
              <div className="w-full max-w-2xl">
                <EasingGrid
                  easings={[
                    { fn: easingFunctions.easeInElastic, label: 'easeInElastic' },
                    { fn: easingFunctions.easeOutElastic, label: 'easeOutElastic' },
                    { fn: easingFunctions.easeInOutElastic, label: 'easeInOutElastic' },
                  ]}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="Bounce Easings"
              description="Bouncing ball effect - good for landing/dropping animations"
            >
              <div className="w-full max-w-2xl">
                <EasingGrid
                  easings={[
                    { fn: easingFunctions.easeInBounce, label: 'easeInBounce' },
                    { fn: easingFunctions.easeOutBounce, label: 'easeOutBounce' },
                    { fn: easingFunctions.easeInOutBounce, label: 'easeInOutBounce' },
                  ]}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="Sine Easings"
              description="Sinusoidal easing - gentle, smooth motion"
            >
              <div className="w-full max-w-2xl">
                <EasingGrid
                  easings={[
                    { fn: easingFunctions.easeInSine, label: 'easeInSine' },
                    { fn: easingFunctions.easeOutSine, label: 'easeOutSine' },
                    { fn: easingFunctions.easeInOutSine, label: 'easeInOutSine' },
                  ]}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="Exponential Easings"
              description="Exponential easing - very fast, dramatic (hero animations)"
            >
              <div className="w-full max-w-2xl">
                <EasingGrid
                  easings={[
                    { fn: easingFunctions.easeInExpo, label: 'easeInExpo' },
                    { fn: easingFunctions.easeOutExpo, label: 'easeOutExpo' },
                    { fn: easingFunctions.easeInOutExpo, label: 'easeInOutExpo' },
                  ]}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="Circular Easings"
              description="Circular easing - smooth circular arc motion"
            >
              <div className="w-full max-w-2xl">
                <EasingGrid
                  easings={[
                    { fn: easingFunctions.easeInCirc, label: 'easeInCirc' },
                    { fn: easingFunctions.easeOutCirc, label: 'easeOutCirc' },
                    { fn: easingFunctions.easeInOutCirc, label: 'easeInOutCirc' },
                  ]}
                />
              </div>
            </ComponentCard>
          </CategorySection>

          {/* Lock Screen Components */}
          <CategorySection title="Lock Screen Components" defaultOpen={false}>
            <ComponentCard
              name="LockScreen + LockNotification"
              description="iOS lock screen with push notification card"
            >
              <div className="w-[375px] h-[600px] overflow-hidden rounded-lg shadow-lg">
                <LockScreen
                  dateTime={sampleDate}
                  notification={
                    <LockNotification
                      title="Welcome to Included Health"
                      body="Your personal plan starts here."
                      timestamp={sampleDate}
                    />
                  }
                />
              </div>
            </ComponentCard>
          </CategorySection>

          {/* Chat Components */}
          <CategorySection title="Chat Components" defaultOpen={false}>
            <ComponentCard name="MessageBubble (Dot)" description="Left-aligned message from Dot with avatar">
              <div className="w-full max-w-md bg-white p-4 rounded">
                <MessageBubble
                  speaker="dot"
                  text="Hi Charles! 👋 I'm Dot, your Included Health digital assistant."
                  showAvatar={true}
                  isStreaming={false}
                />
              </div>
            </ComponentCard>

            <ComponentCard name="MessageBubble (Member)" description="Right-aligned message from member">
              <div className="w-full max-w-md bg-white p-4 rounded">
                <MessageBubble
                  speaker="member"
                  text="I'm ready to get started!"
                  showAvatar={false}
                  isStreaming={false}
                />
              </div>
            </ComponentCard>

            <ComponentCard name="CareTeamBubble" description="Left-aligned message from Care Team with gray background">
              <div className="w-full max-w-md bg-white p-4 rounded">
                <CareTeamBubble
                  text="Hi Charles, I'm Sarah, a Nurse Care Manager here at Included Health. I'd be happy to help you with that question."
                  showAvatar={true}
                  careTeamName="Sarah"
                  careTeamTitle="Nurse Care Manager"
                  isTyping={false}
                />
              </div>
            </ComponentCard>

            <ComponentCard name="SystemMessage" description="Centered system message with timestamp and new badge">
              <div className="w-full max-w-md bg-white p-4 rounded">
                <SystemMessage
                  text="Sarah has joined the chat"
                  timestamp="12:34 PM"
                  showNewBadge={true}
                  newMessageCount={3}
                />
              </div>
            </ComponentCard>

            <ComponentCard name="QuickReply" description="Quick reply chips for user selection">
              <div className="w-full max-w-md bg-white p-4 rounded">
                <QuickReply
                  label="Would you like to:"
                  options={['Confirm appointment', 'Find other times']}
                  onSelect={() => {}}
                />
              </div>
            </ComponentCard>

            <ComponentCard name="ChatInput" description="Message input field with send button">
              <div className="w-full max-w-md">
                <ChatInput placeholder="Type something here..." onSend={() => {}} disabled={false} />
              </div>
            </ComponentCard>

            <ComponentCard name="ChatDisclaimer" description="Disclaimer text shown at conversation start">
              <div className="w-full max-w-md bg-white p-4 rounded">
                <ChatDisclaimer text="Dot can provide generalized AI-generated answers for select healthcare questions and connect you to the Care Team any time, but it is not a substitute for professional medical advice." />
              </div>
            </ComponentCard>
          </CategorySection>

          {/* Card Components */}
          <CategorySection title="Card Components" defaultOpen={false}>
            <ComponentCard
              name="ConfirmationCard"
              description="Appointment confirmation with provider details and action buttons"
            >
              <div className="w-full max-w-md">
                <ConfirmationCard
                  providerName={storyBible.providers.primaryCare.name}
                  providerSpecialty={storyBible.providers.primaryCare.specialty}
                  providerImage={storyBible.providers.primaryCare.photo || undefined}
                  appointmentDate="Friday, January 8"
                  appointmentTime="10:00 AM EST"
                  patientName="Charles"
                  duration="30 minutes"
                  estimatedCost="$0"
                  primaryButtonLabel="Complete intake"
                  secondaryButtonLabel="Skip for now"
                  onPrimaryClick={() => {}}
                  onSecondaryClick={() => {}}
                />
              </div>
            </ComponentCard>

            <ComponentCard name="ServiceCard" description="Benefits and service offerings card">
              <div className="w-full max-w-md">
                <ServiceCard
                  title="Tivity Health Fitness Pass"
                  description="Get affordable access to thousands of gyms and fitness centers nationwide."
                  buttonLabel="View benefit"
                  showRecommended={true}
                  onButtonClick={() => {}}
                />
              </div>
            </ComponentCard>

            <ComponentCard name="ProviderCard" description="Provider preview card with avatar and description">
              <div className="w-full max-w-md">
                <ProviderCard
                  providerName={storyBible.providers.primaryCare.name}
                  providerImage={storyBible.providers.primaryCare.photo || ''}
                  description={storyBible.providers.primaryCare.description || ''}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="SpecialistCard"
              description="External provider card with clinic info and network status"
            >
              <div className="w-full max-w-md">
                <SpecialistCard
                  providerName="Joseph Moreno, MD"
                  providerImage={storyBible.providers.primaryCare.photo || ''}
                  specialty="Gastroenterology"
                  description="Specializes in digestive health with expertise in managing chronic GI conditions."
                  clinicName="Valley Medical Center"
                  clinicAddress="456 Oak Avenue, San Jose, CA 95113"
                  distance="2.3 mi"
                  offerings={[
                    { icon: 'network', label: 'In network' },
                    { icon: 'telehealth', label: 'Offers telehealth' },
                  ]}
                  showScheduleButton={true}
                  showViewProfileButton={true}
                  onSchedule={() => {}}
                  onViewProfile={() => {}}
                />
              </div>
            </ComponentCard>

            <ComponentCard name="VisitCompleteCard" description="Post-visit summary card">
              <div className="w-full max-w-md">
                <VisitCompleteCard
                  providerName={storyBible.providers.primaryCare.name}
                  providerSpecialty={storyBible.providers.primaryCare.specialty}
                  providerImage={storyBible.providers.primaryCare.photo || ''}
                  duration="18:00"
                  onNotesClick={() => {}}
                />
              </div>
            </ComponentCard>

            <ComponentCard name="Carousel" description="Horizontal scrollable carousel with cards">
              <div className="w-full max-w-md overflow-hidden">
                <Carousel>
                  <div className="w-[343px]">
                    <ServiceCard
                      title="Tivity Health Fitness Pass"
                      description="Get affordable access to thousands of gyms nationwide."
                      buttonLabel="View benefit"
                      showRecommended={true}
                      onButtonClick={() => {}}
                    />
                  </div>
                  <div className="w-[343px]">
                    <ServiceCard
                      title="Fresh Tri"
                      description="Science-based habit-building app for better health."
                      buttonLabel="View benefit"
                      showRecommended={false}
                      onButtonClick={() => {}}
                    />
                  </div>
                </Carousel>
              </div>
            </ComponentCard>
          </CategorySection>

          {/* Video Visit Components */}
          <CategorySection title="Video Visit Components" defaultOpen={false}>
            <ComponentCard name="VideoVisit" description="Mock video call interface (static display)">
              <div className="w-[375px] h-[600px] overflow-hidden rounded-lg shadow-lg">
                <VideoVisit
                  providerName={storyBible.providers.primaryCare.name}
                  duration="18:00"
                  onEndCall={() => {}}
                />
              </div>
            </ComponentCard>
          </CategorySection>

          {/* Booking Components */}
          <CategorySection title="Booking Components" defaultOpen={false}>
            <ComponentCard
              name="RequestCard"
              description="Auto-advancing request status card with flexible options"
            >
              <div className="w-full max-w-md">
                <RequestCard
                  title="Appointment booking request"
                  description="Scheduling your appointment with a specialist."
                  steps={[
                    { statusText: 'Finding a specialist', statusType: 'in_progress', duration: 2500 },
                    { statusText: 'Reviewing your request', statusType: 'in_progress', duration: 2500 },
                    { statusText: 'Complete', statusType: 'complete', duration: 2500 },
                  ]}
                  showWaitTime={true}
                  onComplete={() => {}}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="RequestCard (with cancel button)"
              description="Request card with cancel button option"
            >
              <div className="w-full max-w-md">
                <RequestCard
                  title="Coverage check request"
                  description="Verifying In-lab sleep study coverage with a member of our care team."
                  initialStatus="in_progress"
                  initialStatusText="Reviewing your request"
                  showCancelButton={true}
                  showWaitTime={true}
                  onCancel={() => alert('Request canceled')}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="RequestCard (with delay warning)"
              description="Request card with delayed status warning"
            >
              <div className="w-full max-w-md">
                <RequestCard
                  title="Coverage check request"
                  description="Verifying In-lab sleep study coverage with a member of our care team."
                  initialStatus="in_progress"
                  initialStatusText="Reviewing your request"
                  showDelayedWarning={true}
                  delayedWarningText="We're experiencing longer than usual wait times."
                />
              </div>
            </ComponentCard>
          </CategorySection>

          {/* Specialist Components */}
          <CategorySection title="Specialist Components" defaultOpen={false}>
            <ComponentCard
              name="CareComparison"
              description="Care quality metrics comparison with baseline"
            >
              <div className="w-full max-w-md">
                <CareComparison />
              </div>
            </ComponentCard>
          </CategorySection>

          {/* My Health Components */}
          <CategorySection title="My Health Components" defaultOpen={false}>
            <ComponentCard
              name="SearchField"
              description="Generic search field with customizable placeholder (non-functional UI)"
            >
              <div className="w-full max-w-md">
                <SearchField placeholder="Provider, date, visit type" />
              </div>
            </ComponentCard>

            <ComponentCard
              name="FilterBar"
              description="Generic filter display with icon chips (non-functional UI)"
            >
              <div className="w-full max-w-md">
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
              </div>
            </ComponentCard>

            <ComponentCard
              name="Chip"
              description="Small tag/pill for status, categories, or filters"
            >
              <div className="w-full max-w-md bg-white p-4 rounded flex gap-2 flex-wrap">
                <Chip label="Success" variant="success" />
                <Chip label="Warning" variant="warning" />
                <Chip label="Info" variant="info" />
                <Chip label="Neutral" variant="neutral" />
              </div>
            </ComponentCard>

            <ComponentCard
              name="PillIcon"
              description="Medication pill icon with tone variants"
            >
              <div className="w-full max-w-md bg-white p-4 rounded flex gap-4 items-center">
                <div className="flex flex-col items-center gap-2">
                  <PillIcon tone="success" size={24} />
                  <p className="text-xs text-gray-600">Success</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PillIcon tone="warning" size={24} />
                  <p className="text-xs text-gray-600">Warning</p>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard
              name="MedicationListItem"
              description="Medication list item with pill icon, chip, and details"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <MedicationListItem
                  item={{
                    id: 'demo-med-1',
                    name: 'Metformin',
                    isActive: true,
                    statusTag: { variant: 'just_started', label: 'Just started' },
                    subline: '4 weeks to go',
                    leadingTone: 'success'
                  }}
                  showBorder={false}
                  onClick={() => alert('View medication details')}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="ActivityListItem - Chevron"
              description="Past activity item with chevron for navigation"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <ActivityListItem
                  item={{
                    id: 'demo-1',
                    title: 'Visit with Dr. Elena Marquez, MD',
                    date: '2026-03-14',
                    timeLocal: '2:15 PM',
                    filterType: 'primary_care',
                    providerName: 'Dr. Elena Marquez',
                    visitTypeLabel: 'In-person Visit'
                  }}
                  actionType="chevron"
                  showBorder={true}
                  onClick={() => alert('Navigate to detail')}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="ActivityListItem - Icon Button"
              description="Upcoming activity item with calendar add button"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <ActivityListItem
                  item={{
                    id: 'demo-2',
                    title: 'Visit with Maria Gonzales, RDN',
                    date: '2026-05-08',
                    timeLocal: '2:15 PM',
                    filterType: 'primary_care',
                    providerName: 'Maria Gonzales',
                    visitTypeLabel: 'Virtual Visit'
                  }}
                  actionType="icon-button"
                  showBorder={true}
                  onIconButtonClick={() => alert('Add to calendar')}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="ActivityListItem - No Action"
              description="Activity item with no action icon (data only)"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <ActivityListItem
                  item={{
                    id: 'demo-3',
                    title: 'Lipid panel results posted',
                    date: '2026-04-19',
                    filterType: 'documents',
                    providerName: 'Lab',
                    visitTypeLabel: 'Lab results'
                  }}
                  actionType="none"
                  showBorder={false}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="Grouped Activities Example"
              description="Activity list grouped by upcoming and past months"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                {/* Upcoming Section */}
                <div className="content-stretch flex flex-col items-start relative w-full mb-4">
                  <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#6d6d6d] text-[16px] w-full mb-[8px]">
                    Upcoming
                  </p>
                  <div className="content-stretch flex flex-col items-start relative w-full">
                    <ActivityListItem
                      item={{
                        id: 'demo-upcoming-1',
                        title: 'Visit with Dr. Elena Marquez, MD',
                        date: '2026-05-15',
                        timeLocal: '10:30 AM',
                        filterType: 'primary_care',
                        providerName: 'Dr. Elena Marquez',
                        visitTypeLabel: 'In-person Visit'
                      }}
                      actionType="icon-button"
                      showBorder={true}
                      onIconButtonClick={() => alert('Add to calendar')}
                    />
                    <ActivityListItem
                      item={{
                        id: 'demo-upcoming-2',
                        title: 'Visit with Maria Gonzales, RDN',
                        date: '2026-05-08',
                        timeLocal: '2:15 PM',
                        filterType: 'primary_care',
                        providerName: 'Maria Gonzales',
                        visitTypeLabel: 'Virtual Visit'
                      }}
                      actionType="icon-button"
                      showBorder={false}
                      onIconButtonClick={() => alert('Add to calendar')}
                    />
                  </div>
                </div>

                {/* March 2026 Section */}
                <div className="content-stretch flex flex-col items-start relative w-full">
                  <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#6d6d6d] text-[16px] w-full mb-[8px]">
                    March 2026
                  </p>
                  <div className="content-stretch flex flex-col items-start relative w-full">
                    <ActivityListItem
                      item={{
                        id: 'demo-march-1',
                        title: 'Visit with Dr. Elena Marquez, MD',
                        date: '2026-03-14',
                        timeLocal: '2:15 PM',
                        filterType: 'primary_care',
                        providerName: 'Dr. Elena Marquez',
                        visitTypeLabel: 'In-person Visit'
                      }}
                      actionType="chevron"
                      showBorder={true}
                      onClick={() => alert('Navigate to detail')}
                    />
                    <ActivityListItem
                      item={{
                        id: 'demo-march-2',
                        title: 'Visit with Maria Gonzales, RDN',
                        date: '2026-03-18',
                        timeLocal: '12:45 PM',
                        filterType: 'primary_care',
                        providerName: 'Maria Gonzales',
                        visitTypeLabel: 'Virtual Visit'
                      }}
                      actionType="chevron"
                      showBorder={false}
                      onClick={() => alert('Navigate to detail')}
                    />
                  </div>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard
              name="CareTeamMemberCard - Internal Provider"
              description="Internal IH provider card with star badge and appointment slots"
            >
              <div className="w-full max-w-md">
                <CareTeamMemberCard
                  member={{
                    id: 'demo-internal',
                    isInternal: true,
                    relationshipLabel: 'Your PCP',
                    displayName: 'Elena Marquez',
                    nameSuffix: ', MD',
                    specialtyLine: 'Internal Medicine',
                    headshotFile: 'elena-marquez.jpg',
                    providerCatalogId: 'elena-marquez',
                    description: 'Has strong back and spine expertise, prioritizes safe and non-invasive care, and stays engaged in your long-term recovery, referring to trusted specialists.',
                    lastSeenDate: '1/8/27',
                    slots: [
                      { timeLabel: '4:00 pm', dayLabel: 'Today' },
                      { timeLabel: '12:30 pm', dayLabel: 'Thu, Nov 13' }
                    ]
                  }}
                  onViewProfile={() => alert('View full profile and availability')}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="CareTeamMemberCard - External Specialist"
              description="External specialist card with schedule and view profile buttons"
            >
              <div className="w-full max-w-md">
                <CareTeamMemberCard
                  member={{
                    id: 'demo-external',
                    isInternal: false,
                    relationshipLabel: 'Specialist',
                    displayName: 'Joseph Moreno',
                    nameSuffix: ', MD',
                    specialtyLine: 'Gastroenterology',
                    headshotFile: 'joseph-moreno.jpg',
                    providerCatalogId: 'joseph-moreno',
                    description: 'Focuses on comprehensive care for all ages, emphasizing preventive measures and holistic health strategies.',
                    lastSeenDate: '1/8/27',
                    slots: []
                  }}
                  onSchedule={() => alert('Schedule appointment')}
                  onViewProfile={() => alert('View full profile')}
                />
              </div>
            </ComponentCard>
          </CategorySection>

          {/* Get Care Components */}
          <CategorySection title="Get Care Components" defaultOpen={false}>
            <ComponentCard
              name="ForYouItem"
              description="Personalized content card with image, chips, and summary"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <ForYouItem
                  imageSrc={imgPlaceholder}
                  title="Pregnancy Nutrition Guide"
                  chips={[
                    { label: 'Nutrition', variant: 'info' },
                    { label: 'Recommended', variant: 'success' }
                  ]}
                  summary="Get help creating a pregnancy-friendly meal plan to meet your goals, validated by your dietitian."
                  showBorder={true}
                  onClick={() => alert('Navigate to detail')}
                  onRemove={() => alert('Remove from feed')}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="ServiceItem - Internal"
              description="Internal IH service with placeholder icon"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <ServiceItem
                  name="Primary care visit"
                  isExternal={false}
                  onClick={() => alert('Book primary care visit')}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="ServiceItem - External"
              description="External service with different visual styling"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <ServiceItem
                  name="Gym membership"
                  isExternal={true}
                  onClick={() => alert('View gym membership benefit')}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="ServiceGroup"
              description="Group of services with title header"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <ServiceGroup
                  title="Common Searches"
                  services={[
                    { name: 'Urgent care visit', isExternal: false, onClick: () => alert('Book urgent care') },
                    { name: 'Primary care visit', isExternal: false, onClick: () => alert('Book primary care') },
                    { name: 'Mental health visit', isExternal: false, onClick: () => alert('Book mental health') },
                    { name: 'Physical therapy', isExternal: true }
                  ]}
                />
              </div>
            </ComponentCard>
          </CategorySection>

          {/* Today Components */}
          <CategorySection title="Today Components" defaultOpen={false}>
            <ComponentCard
              name="PromptInput"
              description="Chat input variant for prompting outside messaging interface"
            >
              <div className="w-full max-w-md bg-gradient-to-b from-[#E2ECFF]/60 to-transparent p-4 rounded">
                <PromptInput
                  placeholder="Ask Dot..."
                  onClick={() => alert('Open Dot conversation')}
                  onSubmit={() => alert('Submit prompt')}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="PromptChip"
              description="Interactive chip for quick prompt suggestions"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <div className="flex gap-2 flex-wrap">
                  <PromptChip label="I'm feeling sick" onClick={() => alert('Selected: I\'m feeling sick')} />
                  <PromptChip label="Check out-of-pocket cost" onClick={() => alert('Selected: Check cost')} />
                  <PromptChip label="I have UTI" onClick={() => alert('Selected: UTI')} />
                </div>
              </div>
            </ComponentCard>

            <ComponentCard
              name="ChipScroller"
              description="Horizontal scrolling container for chips (no pagination dots)"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <ChipScroller>
                  <PromptChip label="I'm feeling sick" />
                  <PromptChip label="Check out-of-pocket cost" />
                  <PromptChip label="I have UTI" />
                  <PromptChip label="Schedule appointment" />
                  <PromptChip label="Find a specialist" />
                </ChipScroller>
              </div>
            </ComponentCard>

            <ComponentCard
              name="ActionCard"
              description="Card displaying action item that needs user attention"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <ActionCard
                  title="Pick up Rx: Ciprofloxacin 20mg"
                  description="Ready at your CVS Pharmacy"
                  tags={[
                    { label: 'New', variant: 'new' },
                    {
                      label: 'Estimated copay: $3.49',
                      variant: 'info',
                      icon: (
                        <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <g>
                            <path d="M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM6 10.8C3.36 10.8 1.2 8.64 1.2 6C1.2 3.36 3.36 1.2 6 1.2C8.64 1.2 10.8 3.36 10.8 6C10.8 8.64 8.64 10.8 6 10.8Z" fill="black" />
                            <path clipRule="evenodd" d="M5.4 3C5.4 2.66863 5.66863 2.4 6 2.4C6.33137 2.4 6.6 2.66863 6.6 3V3.6H7.2C7.53137 3.6 7.8 3.86863 7.8 4.2C7.8 4.53137 7.53137 4.8 7.2 4.8H6.6V7.2H7.8C8.13137 7.2 8.4 7.46863 8.4 7.8C8.4 8.13137 8.13137 8.4 7.8 8.4H6.6V9C6.6 9.33137 6.33137 9.6 6 9.6C5.66863 9.6 5.4 9.33137 5.4 9V8.4H4.2C3.86863 8.4 3.6 8.13137 3.6 7.8C3.6 7.46863 3.86863 7.2 4.2 7.2H5.4V4.8H4.8C4.46863 4.8 4.2 4.53137 4.2 4.2C4.2 3.86863 4.46863 3.6 4.8 3.6H5.4V3Z" fill="black" fillRule="evenodd" />
                          </g>
                        </svg>
                      ),
                    },
                  ]}
                  onClick={() => alert('View action details')}
                  onMenuClick={() => alert('Show action menu')}
                />
              </div>
            </ComponentCard>

            <ComponentCard
              name="PendingActionsCard"
              description="Card showing count of pending actions with arrow navigation"
            >
              <div className="w-full max-w-md bg-white p-4 rounded">
                <PendingActionsCard
                  count={3}
                  onClick={() => alert('View all pending actions')}
                />
              </div>
            </ComponentCard>
          </CategorySection>
    </div>
  );
}

/**
 * StyleGuide - Legacy modal wrapper (deprecated, use PrototypeGuide instead)
 * Kept for backwards compatibility
 */
export function StyleGuide({ isOpen, onClose }: StyleGuideProps) {
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

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="style-guide-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
          <h1 id="style-guide-title" className="text-2xl font-bold text-gray-900">
            Component Style Guide
          </h1>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close style guide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <StyleGuideContent />
        </div>
      </div>
    </div>
  );
}
