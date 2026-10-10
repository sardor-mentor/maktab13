import { LanguageProvider } from '@/context/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { StorySection } from '@/components/StorySection';
import { About } from '@/components/About';
import { DayTimeline } from '@/components/DayTimeline';
import { Students, Stars } from '@/components/Students';
import { Teachers } from '@/components/Teachers';
import { TodayAtSchool, HistoryTimeline } from '@/components/TodayAndHistory';
import { Gallery } from '@/components/Gallery';
import { SchoolMap } from '@/components/SchoolMap';
import { Parents } from '@/components/Parents';
import { Graduates, FutureMe } from '@/components/GraduatesAndFuture';
import { StudentVoices, VideoIntro, FAQ } from '@/components/VoicesAndFAQ';
import { News, Contact, FinalCTA, Footer } from '@/components/NewsContactFooter';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink-50">
        <Navigation />
        <main>
          <Hero />
          <StorySection />
          <About />
          <DayTimeline />
          <Students />
          <Stars />
          <Teachers />
          <TodayAtSchool />
          <HistoryTimeline />
          <Gallery />
          <SchoolMap />
          <Parents />
          <Graduates />
          <FutureMe />
          <StudentVoices />
          <VideoIntro />
          <FAQ />
          <News />
          <Contact />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
