/**
 * Chapter 1: Chat Interface
 *
 * The original Chapter 1 chat experience with Dot.
 * Slides in from right to left as part of the transition.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { SecondaryNavigation } from '../components/SecondaryNavigation';
import { StatusBar } from '../components/StatusBar';
import { ChatContainer } from '../components/healthcare/chat/ChatContainer';
import { chapter1Script, chapter1Disclaimer } from '../../data/narratives/chapter1-tour';
import { getNextChapterRoute } from '../../utils/navigationHelpers';

const CHAPTER_ID = 'chapter1_tour';

export default function Chapter1Chat() {
  const navigate = useNavigate();

  // Variables for conversation interpolation
  const conversationVariables = {
    userName: 'Charles',
    planName: 'Personalized Wellbeing Copay Plan',
    visitType: 'Primary Care',
  };

  const handleBackClick = () => {
    // Navigate immediately without transition
    window.location.href = '/chapter1';
  };

  const handleConversationComplete = () => {
    const nextRoute = getNextChapterRoute(CHAPTER_ID);
    if (nextRoute) {
      navigate(nextRoute);
    }
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="flex flex-col h-full bg-white"
    >
      {/* Status bar */}
      <StatusBar time="11:15 AM" />

      {/* Secondary navigation */}
      <SecondaryNavigation title="New Conversation with Dot" onBackClick={handleBackClick} />

      {/* Chat container */}
      <div className="flex-1 overflow-hidden">
        <ChatContainer
          script={chapter1Script}
          disclaimer={chapter1Disclaimer}
          variables={conversationVariables}
          onComplete={handleConversationComplete}
        />
      </div>
    </motion.div>
  );
}
