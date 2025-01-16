// Import existing components
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import PrincipalMessage from '@/components/PrincipalMessage';
import QuickLinks from '@/components/QuickLinks';
import NoticeBoard from '@/components/NoticeBoard';
import CollegeStats from '@/components/CollegeStats';
import RecentEvents from '@/components/RecentEvents';
import Footer from '@/components/Footer';

// Import the new components
import NoticeTicker from '@/components/NoticeTicker';
import WelcomeSection from '@/components/sections/WelcomeSection';
import KeyFeaturesSection from '@/components/sections/KeyFeaturesSection';
import NewsEventsSection from '@/components/sections/NewsEventsSection';

// Metadata for the page
export const metadata = {
  title: 'Home', // Will render as "Home | Notre Dame College Dhaka"
  description: 'Welcome to Notre Dame College Dhaka - Discover academic excellence, vibrant campus life, and our rich educational heritage.',
  openGraph: {
    title: 'Home | Notre Dame College Dhaka',
    description: 'Welcome to Notre Dame College Dhaka - Discover academic excellence, vibrant campus life, and our rich educational heritage.',
  },
};

export default function Home() {
  return (
    <>
      <main>
        {/* Hero slider */}
        <HeroSlider />

        {/* Newly added sections */}
        <WelcomeSection />
        <KeyFeaturesSection />
        <NewsEventsSection />

        {/* Original layout with grid structure */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
          {/* Left content: Principal message, college stats, and recent events */}
          <div className="lg:col-span-2">
            <PrincipalMessage />
            <CollegeStats />
            <RecentEvents />
          </div>

          {/* Right content: Quick links and notice board */}
          <div className="lg:col-span-1">
            <QuickLinks />
            <NoticeBoard />
          </div>
        </div>
      </main>
    </>
  );
}
