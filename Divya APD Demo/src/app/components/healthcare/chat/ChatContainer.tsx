/**
 * Chat Container Component
 *
 * Main conversation container that manages the scripted conversation flow.
 * Handles turn progression, user input, and embedded UI components.
 */

import { useState, useEffect, useRef } from 'react';
import { ConversationTurn, interpolateText } from '../../../../data/narratives/chapter1-tour';
import { MessageBubble } from './MessageBubble';
import { CareTeamBubble } from './CareTeamBubble';
import { SystemMessage } from './SystemMessage';
import { ChatDisclaimer } from './ChatDisclaimer';
import { ChatInput } from './ChatInput';
import { QuickReply } from './QuickReply';
import { Carousel, CarouselCard } from '../cards/Carousel';
import { ConfirmationCard } from '../cards/ConfirmationCard';
import { ServiceCard } from '../cards/ServiceCard';
import { ProviderCard } from '../cards/ProviderCard';
import { SpecialistCard } from '../cards/SpecialistCard';
import { VisitCompleteCard } from '../cards/VisitCompleteCard';
import { RequestCard } from '../booking/RequestCard';
import {
  ProviderMapIllustration,
  DeductibleTrackingVisual,
  HealthPlanCard,
} from '../cards/PlaceholderComponents';
import { storyBible } from '../../../../data/storyBible';
import { useTextStreaming } from '../../../../hooks/useTextStreaming';
import { useJourney } from '../../../context/JourneyContext';
import { SpringPop } from '../../animations/SpringPop';

export interface ChatContainerProps {
  script: ConversationTurn[];
  disclaimer?: string;
  variables: Record<string, string>;
  onComplete?: () => void;
  onViewSpecialistProfile?: (specialistId: string) => void;
}

const MIN_CHARS_FOR_STREAMING = 20; // Only stream messages longer than this
const THINKING_DURATION_SHORT = 500; // 0.5s for short messages (<20 chars)
const THINKING_DURATION_LONG = 800; // 0.8s for long messages (20+ chars)
const TYPING_SPEED = 30; // 30ms per character (matches TypingText component)

export function ChatContainer({ script, disclaimer, variables, onComplete, onViewSpecialistProfile }: ChatContainerProps) {
  const { registerActionGate, clearActionGate, triggerAction } = useJourney();
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);
  const [displayedTurns, setDisplayedTurns] = useState<ConversationTurn[]>([]);
  const [waitingForInput, setWaitingForInput] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [streamingTurnId, setStreamingTurnId] = useState<string | null>(null);
  const [streamingFullText, setStreamingFullText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const processedUserInputIds = useRef<Set<string>>(new Set());
  const waitingForTurnRef = useRef<ConversationTurn | null>(null);
  const processingTurnIds = useRef<Set<string>>(new Set());

  // Text streaming hook
  const { displayedText, isStreaming, start: startStreaming } = useTextStreaming({
    text: streamingFullText,
    speed: 375, // 375 words per minute (25% faster than original 300)
    onComplete: () => {
      // Streaming complete - clear processing and advance to next turn
      if (streamingTurnId) {
        processingTurnIds.current.delete(streamingTurnId);
      }
      setStreamingTurnId(null);
      setStreamingFullText('');
      setCurrentTurnIndex((prev) => prev + 1);
    },
    autoStart: false,
  });

  // Scroll to bottom when new messages appear
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [displayedTurns]);

  // Update streaming message text as it progresses
  useEffect(() => {
    if (streamingTurnId && isStreaming) {
      setDisplayedTurns((prev) =>
        prev.map((turn) =>
          turn.id === streamingTurnId
            ? { ...turn, text: displayedText }
            : turn
        )
      );
    }
  }, [displayedText, streamingTurnId, isStreaming]);

  // Cleanup action gates on unmount
  useEffect(() => {
    return () => {
      // Clear any registered action gates
      script.forEach((turn) => {
        if (turn.type === 'action_gate' && turn.requiredAction) {
          clearActionGate(turn.requiredAction);
        }
      });
    };
  }, [script, clearActionGate]);

  // Auto-advance through script
  useEffect(() => {
    // Don't process if we're waiting for user input
    if (waitingForInput) {
      return;
    }

    if (currentTurnIndex >= script.length) {
      if (!isComplete) {
        setIsComplete(true);
        setWaitingForInput(false); // Clear waiting state when complete
        onComplete?.();
      }
      return;
    }

    const currentTurn = script[currentTurnIndex];

    // Skip if this turn is already being processed (prevents duplicate messages)
    if (processingTurnIds.current.has(currentTurn.id)) {
      return;
    }

    // Skip transition turns
    if (currentTurn.type === 'transition') {
      setCurrentTurnIndex((prev) => prev + 1);
      return;
    }

    // Wait for user input
    if (currentTurn.type === 'user_input') {
      const hasBeenProcessed = processedUserInputIds.current.has(currentTurn.id);

      if (!hasBeenProcessed) {
        // First time seeing this user_input - wait for user to respond
        waitingForTurnRef.current = currentTurn;
        setWaitingForInput(true);
        return;
      } else {
        // User has already responded to this turn - advance to next
        waitingForTurnRef.current = null;
        setCurrentTurnIndex((prev) => prev + 1);
        return;
      }
    }

    // Handle action gates (wait for specific user action)
    if (currentTurn.type === 'action_gate') {
      const hasBeenProcessed = processedUserInputIds.current.has(currentTurn.id);

      if (!hasBeenProcessed) {
        // Mark as processing to prevent duplicates
        processingTurnIds.current.add(currentTurn.id);

        // First time seeing this action_gate - display message and register action
        const fullText = interpolateText(currentTurn.text || '', variables);

        // Add the message to displayed turns
        setDisplayedTurns((prev) => {
          if (prev.some((t) => t.id === currentTurn.id)) {
            return prev;
          }
          return [...prev, { ...currentTurn, text: fullText }];
        });

        // Register the action gate callback
        if (currentTurn.requiredAction) {
          registerActionGate(currentTurn.requiredAction, () => {
            // Mark as processed and advance
            processedUserInputIds.current.add(currentTurn.id);
            processingTurnIds.current.delete(currentTurn.id);
            setWaitingForInput(false);
            setCurrentTurnIndex((prev) => prev + 1);
          });

          setWaitingForInput(true);
        }
        return;
      } else {
        // Already processed - advance to next
        setCurrentTurnIndex((prev) => prev + 1);
        return;
      }
    }

    // Handle utterances (text messages)
    if (currentTurn.type === 'utterance') {
      const fullText = interpolateText(currentTurn.text || '', variables);
      const isCareTeam = currentTurn.speaker === 'sarah' || currentTurn.speaker === 'care_team';
      const isSystem = currentTurn.speaker === 'system';
      const shouldStream =
        currentTurn.speaker !== 'user' &&
        fullText.length >= MIN_CHARS_FOR_STREAMING &&
        !isCareTeam && // Care Team uses typing indicator instead
        !isSystem; // System messages appear instantly

      if (isCareTeam) {
        // Care Team: Show thinking indicator, then reveal message
        // Use same timing as Dot messages per guide
        processingTurnIds.current.add(currentTurn.id);

        const lastDisplayedTurn = displayedTurns[displayedTurns.length - 1];
        const previousWasCareTeam = lastDisplayedTurn &&
          (lastDisplayedTurn.speaker === 'sarah' || lastDisplayedTurn.speaker === 'care_team');

        // Add extra delay between consecutive care team messages for natural pacing
        const initialDelay = previousWasCareTeam ? 1200 : 500;
        const thinkingDuration = fullText.length < MIN_CHARS_FOR_STREAMING
          ? THINKING_DURATION_SHORT
          : THINKING_DURATION_LONG;

        let thinkingTimer: NodeJS.Timeout;
        let revealTimer: NodeJS.Timeout;

        thinkingTimer = setTimeout(() => {
          // Add message with thinking indicator
          setDisplayedTurns((prev) => {
            if (prev.some((t) => t.id === currentTurn.id)) {
              return prev;
            }
            return [...prev, {
              ...currentTurn,
              text: fullText,
              note: 'typing', // CareTeamBubble uses 'typing' to show ThinkingIndicator
            }];
          });

          // After thinking duration, reveal message (using guide's recommended timing)
          revealTimer = setTimeout(() => {
            setDisplayedTurns((prev) =>
              prev.map((turn) =>
                turn.id === currentTurn.id
                  ? { ...turn, note: undefined }
                  : turn
              )
            );

            setCurrentTurnIndex((prev) => prev + 1);
          }, thinkingDuration);
        }, initialDelay);

        return () => {
          clearTimeout(thinkingTimer);
          clearTimeout(revealTimer);
          processingTurnIds.current.delete(currentTurn.id);
        };
      } else if (shouldStream) {
        // Stream this message (Dot messages) - use thinking→typing flow per guide
        // Mark as processing
        processingTurnIds.current.add(currentTurn.id);

        // Step 1: Show thinking indicator
        const thinkingDelay = 100; // Small initial delay before showing thinking dots
        const thinkingDuration = fullText.length < MIN_CHARS_FOR_STREAMING
          ? THINKING_DURATION_SHORT
          : THINKING_DURATION_LONG;

        let thinkingTimer: NodeJS.Timeout;
        let typingTimer: NodeJS.Timeout;

        thinkingTimer = setTimeout(() => {
          setDisplayedTurns((prev) => {
            if (prev.some((t) => t.id === currentTurn.id)) {
              return prev;
            }
            return [...prev, {
              ...currentTurn,
              text: '', // Empty text while thinking
              note: 'thinking', // Mark as thinking state
            }];
          });

          // Step 2: After thinking duration, start typing
          typingTimer = setTimeout(() => {
            // Update to typing state
            setDisplayedTurns((prev) =>
              prev.map((turn) =>
                turn.id === currentTurn.id
                  ? { ...turn, text: '', note: undefined } // Clear thinking, prepare for streaming
                  : turn
              )
            );
            setStreamingTurnId(currentTurn.id);
            setStreamingFullText(fullText);
            // Trigger streaming (will advance turn when complete)
            requestAnimationFrame(() => startStreaming());
          }, thinkingDuration);
        }, thinkingDelay);

        return () => {
          clearTimeout(thinkingTimer);
          clearTimeout(typingTimer);
          processingTurnIds.current.delete(currentTurn.id);
        };
      } else {
        // Show instantly or with thinking (short Dot messages, user messages, system messages)
        const isDotMessage = currentTurn.speaker === 'dot';
        const isUserMessage = currentTurn.speaker === 'user';

        // Dot messages should show thinking indicator first, even if short
        if (isDotMessage && fullText.length < MIN_CHARS_FOR_STREAMING) {
          // Short Dot message: thinking → instant reveal (no typing animation)
          processingTurnIds.current.add(currentTurn.id);

          const thinkingDelay = 100;
          let thinkingTimer: NodeJS.Timeout;
          let revealTimer: NodeJS.Timeout;

          thinkingTimer = setTimeout(() => {
            setDisplayedTurns((prev) => {
              if (prev.some((t) => t.id === currentTurn.id)) {
                return prev;
              }
              return [...prev, {
                ...currentTurn,
                text: '',
                note: 'thinking',
              }];
            });

            // After thinking, show full message instantly
            revealTimer = setTimeout(() => {
              setDisplayedTurns((prev) =>
                prev.map((turn) =>
                  turn.id === currentTurn.id
                    ? { ...turn, text: fullText, note: undefined }
                    : turn
                )
              );
              setCurrentTurnIndex((prev) => prev + 1);
            }, THINKING_DURATION_SHORT);
          }, thinkingDelay);

          return () => {
            clearTimeout(thinkingTimer);
            clearTimeout(revealTimer);
            processingTurnIds.current.delete(currentTurn.id);
          };
        } else {
          // User messages and system messages appear instantly (no thinking animation)
          processingTurnIds.current.add(currentTurn.id);

          const delay = isSystem ? 100 : (isUserMessage ? 100 : 500);
          const timer = setTimeout(() => {
            setDisplayedTurns((prev) => {
              if (prev.some((t) => t.id === currentTurn.id)) {
                return prev;
              }
              return [...prev, {
                ...currentTurn,
                text: fullText,
              }];
            });

            setCurrentTurnIndex((prev) => prev + 1);
          }, delay);

          return () => {
            clearTimeout(timer);
            processingTurnIds.current.delete(currentTurn.id);
          };
        }
      }
    }

    // Handle UI embeds
    if (currentTurn.type === 'ui_embed') {
      processingTurnIds.current.add(currentTurn.id);

      // Check if this component needs manual advancement (user interaction required)
      const needsManualAdvancement =
        currentTurn.component === 'ProgressTrackerCard' ||
        currentTurn.component === 'RequestCard' ||
        currentTurn.component === 'ConfirmationCard';

      // Add slight delay for natural feel
      const timer = setTimeout(() => {
        setDisplayedTurns((prev) => {
          // Don't add if already exists
          if (prev.some((t) => t.id === currentTurn.id)) {
            return prev;
          }
          return [...prev, currentTurn];
        });
        // Only auto-advance if the component doesn't need manual advancement
        if (!needsManualAdvancement) {
          setCurrentTurnIndex((prev) => prev + 1);
        }
      }, 500);

      return () => {
        clearTimeout(timer);
        processingTurnIds.current.delete(currentTurn.id);
      };
    }
  }, [currentTurnIndex, script, isComplete, variables, startStreaming, waitingForInput]);

  const handleUserSend = (message: string) => {
    if (!waitingForInput) {
      console.warn('handleUserSend called but not waiting for input');
      return;
    }

    const expectedTurn = waitingForTurnRef.current;

    // Check if we have a valid turn we're waiting for
    if (!expectedTurn) {
      console.warn('handleUserSend called but no turn is being waited for');
      return;
    }

    // Verify the expected turn is actually user_input
    if (expectedTurn.type !== 'user_input') {
      console.warn('handleUserSend called but waiting turn is not user_input', expectedTurn);
      return;
    }

    // Mark this user_input turn as processed so the effect won't set waitingForInput again
    processedUserInputIds.current.add(expectedTurn.id);

    // Add user message to displayed turns
    const userTurn: ConversationTurn = {
      ...expectedTurn,
      text: message,
      speaker: 'user',
    };

    setDisplayedTurns((prev) => {
      // If the last displayed turn was QuickTaps or DeliveryQuickTaps, remove it before adding user response
      const lastTurn = prev[prev.length - 1];
      if (lastTurn?.type === 'ui_embed' && (lastTurn?.component === 'QuickTaps' || lastTurn?.component === 'DeliveryQuickTaps')) {
        return [...prev.slice(0, -1), userTurn];
      }
      return [...prev, userTurn];
    });

    // Clear the waiting turn reference and state - the effect will advance on next run
    waitingForTurnRef.current = null;
    setWaitingForInput(false);
  };

  // Handle manual turn advancement (for components that control their own timing)
  const handleAdvanceTurn = () => {
    setCurrentTurnIndex((prev) => prev + 1);
  };

  // Render embedded UI component
  const renderEmbeddedComponent = (componentName: string, turn?: ConversationTurn) => {
    switch (componentName) {
      case 'BenefitsCarousel':
        return (
          <SpringPop origin="center center" duration={0.4}>
            <Carousel>
              <div className="w-[343px]">
                <ServiceCard
                  title="Tivity Health Fitness Pass"
                  description="Get affordable access to thousands of gyms and fitness centers nationwide so you and your family can work out wherever you live, work, or travel."
                  buttonLabel="View benefit"
                  showRecommended={true}
                  onButtonClick={() => {
                    console.log('Tivity Health clicked');
                  }}
                />
              </div>
              <div className="w-[343px]">
                <ServiceCard
                  title="Fresh Tri"
                  description="Use a science-based habit-building app to eat better, manage stress, move more, and think more positively—at no cost for Walmart associates."
                  buttonLabel="View benefit"
                  showRecommended={true}
                  onButtonClick={() => {
                    console.log('Fresh Tri clicked');
                  }}
                />
              </div>
            </Carousel>
          </SpringPop>
        );

      case 'CardCarousel':
        return (
          <SpringPop origin="center center" duration={0.4}>
            <Carousel>
              <CarouselCard>
                <div className="text-[14px] text-gray-600 text-center">Card 1</div>
              </CarouselCard>
              <CarouselCard>
                <div className="text-[14px] text-gray-600 text-center">Card 2</div>
              </CarouselCard>
              <CarouselCard>
                <div className="text-[14px] text-gray-600 text-center">Card 3</div>
              </CarouselCard>
              <CarouselCard>
                <div className="text-[14px] text-gray-600 text-center">Card 4</div>
              </CarouselCard>
            </Carousel>
          </SpringPop>
        );

      case 'ProviderMapIllustration':
        return (
          <SpringPop origin="center center" duration={0.4}>
            <ProviderMapIllustration />
          </SpringPop>
        );

      case 'DeductibleTrackingVisual':
        return (
          <SpringPop origin="center center" duration={0.4}>
            <DeductibleTrackingVisual />
          </SpringPop>
        );

      case 'HealthPlanCard':
        return (
          <SpringPop origin="center center" duration={0.4}>
            <HealthPlanCard />
          </SpringPop>
        );

      case 'QuickTaps':
        return (
          <QuickReply
            label="Would you like to:"
            options={['Confirm appointment', 'Find other times']}
            onSelect={(option) => {
              handleUserSend(option);
            }}
          />
        );

      case 'DeliveryQuickTaps':
        return (
          <QuickReply
            options={['Delivery', 'Pick up in person']}
            onSelect={(option) => {
              handleUserSend(option);
            }}
          />
        );

      case 'ConfirmationCard':
        return (
          <SpringPop origin="center center" duration={0.4}>
            <ConfirmationCard
              providerName={storyBible.providers.primaryCare.name}
              providerSpecialty={storyBible.providers.primaryCare.specialty}
              providerImage={storyBible.providers.primaryCare.photo || undefined}
              appointmentDate="Friday, January 8"
              appointmentTime="10:00 AM EST"
              patientName={variables.userName}
              duration="30 minutes"
              estimatedCost="$0"
              primaryButtonLabel="Complete intake"
              secondaryButtonLabel="Skip for now"
              onPrimaryClick={() => {
                handleAdvanceTurn();
              }}
              onSecondaryClick={() => {
                handleAdvanceTurn();
              }}
            />
          </SpringPop>
        );

      case 'ProviderCard':
        return (
          <SpringPop origin="center center" duration={0.4}>
            <ProviderCard
              providerName={storyBible.providers.primaryCare.name}
              providerImage={storyBible.providers.primaryCare.photo || ''}
              description={storyBible.providers.primaryCare.description || ''}
            />
          </SpringPop>
        );

      case 'VisitCompleteCard':
        return (
          <SpringPop origin="center center" duration={0.4}>
            <VisitCompleteCard
              providerName={storyBible.providers.primaryCare.name}
              providerSpecialty={storyBible.providers.primaryCare.specialty}
              providerImage={storyBible.providers.primaryCare.photo || ''}
              duration="18:00"
              onNotesClick={() => {
                console.log('View notes clicked');
              }}
            />
          </SpringPop>
        );

      case 'SpecialistReferralCarousel':
        return (
          <SpringPop origin="center center" duration={0.4}>
            <Carousel>
            <div className="w-[343px]">
              <SpecialistCard
                providerName="Joseph Moreno, MD"
                providerImage={storyBible.providers.primaryCare.photo || ''}
                specialty="Gastroenterology"
                description="Specializes in digestive health with expertise in managing chronic GI conditions through evidence-based, patient-centered care."
                clinicName="Valley Medical Center"
                clinicAddress="456 Oak Avenue, San Jose, CA 95113"
                distance="2.3 mi"
                offerings={[
                  { icon: 'network', label: 'In network' },
                  { icon: 'telehealth', label: 'Offers telehealth' },
                ]}
                showViewProfileButton={true}
                onSchedule={() => {
                  handleUserSend('Schedule appointment');
                }}
                onViewProfile={() => {
                  onViewSpecialistProfile?.('joseph-moreno');
                }}
              />
            </div>
            <div className="w-[343px]">
              <SpecialistCard
                providerName="Dr. Sarah Chen, MD"
                providerImage={storyBible.providers.primaryCare.photo || ''}
                specialty="Gastroenterology"
                description="Board-certified gastroenterologist focusing on preventive care and minimally invasive procedures for digestive disorders."
                clinicName="Greenwood Health Partners"
                clinicAddress="789 Pine Street, Santa Clara, CA 95051"
                distance="4.1 mi"
                offerings={[
                  { icon: 'network', label: 'In network' },
                ]}
                showViewProfileButton={true}
                onSchedule={() => {
                  handleUserSend('Schedule appointment');
                }}
                onViewProfile={() => {
                  onViewSpecialistProfile?.('sarah-chen');
                }}
              />
            </div>
            <div className="w-[343px]">
              <SpecialistCard
                providerName="Dr. Michael Patel, MD"
                providerImage={storyBible.providers.primaryCare.photo || ''}
                specialty="Gastroenterology"
                description="Experienced in treating complex GI cases with a holistic approach integrating nutrition and lifestyle modifications."
                clinicName="Summit Digestive Health"
                clinicAddress="321 Willow Road, Sunnyvale, CA 94086"
                distance="5.7 mi"
                offerings={[
                  { icon: 'network', label: 'In network' },
                  { icon: 'telehealth', label: 'Offers telehealth' },
                ]}
                showViewProfileButton={true}
                onSchedule={() => {
                  handleUserSend('Schedule appointment');
                }}
                onViewProfile={() => {
                  onViewSpecialistProfile?.('michael-patel');
                }}
              />
            </div>
          </Carousel>
          </SpringPop>
        );

      case 'SpecialistProfileFull':
        // This is handled by view switching in Chapter3, not inline rendering
        return null;

      case 'DoctorProfileCard':
        return (
          <SpecialistCard
            providerName={storyBible.providers.gastro.name}
            providerImage={storyBible.providers.primaryCare.photo || ''}
            specialty={storyBible.providers.gastro.specialty}
            description="Specializes in digestive health with expertise in managing chronic GI conditions through evidence-based, patient-centered care."
            clinicName="Valley Medical Center"
            clinicAddress="456 Oak Avenue, San Jose, CA 95113"
            distance={storyBible.providers.gastro.distance}
            offerings={[
              { icon: 'network', label: `In network: ${storyBible.providers.gastro.tier}` },
              { icon: 'telehealth', label: 'Offers telehealth' },
            ]}
            showScheduleButton={false}
          />
        );

      case 'ProgressTrackerCard':
      case 'RequestCard':
        return (
          <RequestCard
            title="Appointment booking request"
            description="Scheduling your appointment with a specialist."
            steps={[
              { statusText: 'Finding a specialist', statusType: 'in_progress', duration: 2500 },
              { statusText: 'Reviewing your request', statusType: 'in_progress', duration: 2500 },
              { statusText: 'Complete', statusType: 'complete', duration: 2500 },
            ]}
            showWaitTime={true}
            onComplete={() => {
              // Progress complete - advance to confirmation message
              handleAdvanceTurn();
            }}
          />
        );

      case 'SystemChatJoinMessage':
        return (
          <SystemMessage
            text="Sarah has joined the chat"
            timestamp="12:34 PM"
          />
        );

      case 'ServiceCard':
        // Parse the text for ServiceCard details
        // Expected format: "Body text:... Button text:..."
        const serviceCardText = turn?.text || '';
        const bodyMatch = serviceCardText.match(/Body text:(.+?)(?:Button text:|$)/);
        const buttonMatch = serviceCardText.match(/Button text:(.+?)$/);
        const bodyText = bodyMatch?.[1]?.trim() || 'View your next steps';
        const buttonText = buttonMatch?.[1]?.trim() || 'Show me';

        return (
          <SpringPop origin="center center" duration={0.4}>
            <ServiceCard
              title="Next steps"
              description={bodyText}
              buttonLabel={buttonText}
              onButtonClick={() => {
                // If this is an action_gate, trigger the action
                if (turn?.type === 'action_gate' && turn.requiredAction) {
                  triggerAction(turn.requiredAction);
                } else {
                  // Otherwise just advance
                  handleAdvanceTurn();
                }
              }}
            />
          </SpringPop>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Scrollable messages area */}
      <div className="flex-1 overflow-y-auto px-[12px] py-[16px]">
        <div className="flex flex-col gap-[24px]">
          {/* Disclaimer at top */}
          {disclaimer && <ChatDisclaimer text={disclaimer} />}

          {/* Display conversation turns */}
          {displayedTurns.map((turn, index) => {
            // Show avatar when speaker changes or on first message
            const prevTurn = index > 0 ? displayedTurns[index - 1] : null;
            const showAvatar = !prevTurn || prevTurn.speaker !== turn.speaker;

            if ((turn.type === 'ui_embed' || turn.type === 'action_gate') && turn.component) {
              return (
                <div key={index} className="w-full">
                  {renderEmbeddedComponent(turn.component, turn)}
                </div>
              );
            }

            if (turn.type === 'utterance' && turn.text !== undefined) {
              const interpolatedText = interpolateText(turn.text, variables);
              const isCurrentlyStreaming = turn.id === streamingTurnId && isStreaming;

              // Handle system messages (e.g., "12:34 PM Sarah has joined the chat")
              if (turn.speaker === 'system') {
                // Parse timestamp from text if present (format: "HH:MM AM/PM Message text")
                const timestampMatch = interpolatedText.match(/^(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?)\s+(.+)$/);
                if (timestampMatch) {
                  const [, timestamp, messageText] = timestampMatch;
                  return (
                    <SystemMessage
                      key={index}
                      text={messageText}
                      timestamp={timestamp}
                    />
                  );
                }
                // No timestamp in text, render as-is
                return (
                  <SystemMessage
                    key={index}
                    text={interpolatedText}
                  />
                );
              }

              // Use CareTeamBubble for Sarah/Care Team members
              if (turn.speaker === 'sarah' || turn.speaker === 'care_team') {
                const isTyping = turn.note === 'typing';
                return (
                  <CareTeamBubble
                    key={index}
                    text={interpolatedText}
                    showAvatar={showAvatar}
                    careTeamName={variables.nurseCareManagerName || 'Sarah'}
                    careTeamTitle="Nurse Care Manager"
                    isTyping={isTyping}
                  />
                );
              }

              // Check if message is in thinking state
              const isThinking = turn.note === 'thinking';

              return (
                <MessageBubble
                  key={index}
                  speaker={turn.speaker === 'dot' ? 'dot' : 'member'}
                  text={interpolatedText}
                  showAvatar={showAvatar}
                  isThinking={isThinking}
                  isStreaming={isCurrentlyStreaming}
                />
              );
            }

            // Render user messages (type: 'user_input' with text)
            if (turn.speaker === 'user' && turn.text) {
              return (
                <MessageBubble
                  key={index}
                  speaker="member"
                  text={turn.text}
                  showAvatar={showAvatar}
                  isStreaming={false}
                />
              );
            }

            return null;
          })}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Fixed chat input at bottom */}
      <div className="p-[12px] pb-[20px]">
        <ChatInput
          placeholder="Describe your issue..."
          onSend={handleUserSend}
          disabled={!waitingForInput}
        />
      </div>
    </div>
  );
}
