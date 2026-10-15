/**
 * Chapter 3: Post-Visit Assessment
 *
 * Flow: Post-visit summary → Medication discussion → Specialist referral carousel → Full profile → Booking
 * Script: src/data/narratives/chapter3-assessment.ts
 */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { StatusBar } from '../components/StatusBar';
import { SecondaryNavigation } from '../components/SecondaryNavigation';
import { ChatContainer } from '../components/healthcare/chat/ChatContainer';
import { SpecialistProfile } from '../components/healthcare/specialist/SpecialistProfile';
import { chapter3Script, chapter3DefaultVariables, chapter3Disclaimer } from '../../data/narratives/chapter3-assessment';
import { useStoryBible } from '../context/StoryBibleContext';
import { formatStatusBarTime } from '../../utils/formatters';
import { getNextChapterRoute } from '../../utils/navigationHelpers';

type Chapter3View = 'chat' | 'specialist_profile';

const CHAPTER_ID = 'chapter3_assessment';

export default function Chapter3Assessment() {
  const [view, setView] = useState<Chapter3View>('chat');
  const [selectedSpecialistId, setSelectedSpecialistId] = useState<string>('');
  const story = useStoryBible();
  const navigate = useNavigate();

  const chapterDate = story.chapters.chapter2_wellness.date; // Use same date as wellness visit

  const handleViewSpecialistProfile = (specialistId: string) => {
    setSelectedSpecialistId(specialistId);
    setView('specialist_profile');
  };

  const handleBackToChat = () => {
    setView('chat');
  };

  const handleGetHelpBooking = () => {
    const nextRoute = getNextChapterRoute(CHAPTER_ID);
    if (nextRoute) {
      navigate(nextRoute);
    }
  };

  const handleConversationComplete = () => {
    console.log('Chapter 3 complete');
  };

  if (view === 'specialist_profile') {
    return (
      <SpecialistProfile
        providerName="Joseph Moreno, MD"
        providerImage={story.providers.primaryCare.photo || ''}
        specialty="Gastroenterology"
        networkTier="Tier 1"
        rating={4.8}
        reviewCount={127}
        clinicName="Valley Medical Center"
        clinicAddress="456 Oak Avenue, San Jose, CA 95113"
        clinicPhone="(555) 908-4421"
        distance="2.3 mi"
        yearsOfPractice={15}
        medicalSchool="Stanford University School of Medicine"
        boardCertification="Board certified in Gastroenterology"
        currentTime={chapterDate}
        onBack={handleBackToChat}
        onGetHelpBooking={handleGetHelpBooking}
      />
    );
  }

  // Chat interface
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Status bar */}
      <StatusBar time={formatStatusBarTime(chapterDate)} />

      {/* Secondary navigation */}
      <SecondaryNavigation title="Post-Visit Summary" />

      {/* Chat container */}
      <div className="flex-1 overflow-hidden">
        <ChatContainer
          script={chapter3Script}
          disclaimer={chapter3Disclaimer}
          variables={chapter3DefaultVariables}
          onComplete={handleConversationComplete}
          onViewSpecialistProfile={handleViewSpecialistProfile}
        />
      </div>
    </div>
  );
}
