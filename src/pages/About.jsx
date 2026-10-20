import AboutHero from '../components/sections/about/AboutHero';
import MethodologiesSection from '../components/sections/about/MethodologiesSection';
import CareerTimeline from '../components/sections/about/CareerTimeline';
import SkillsProgression from '../components/sections/about/SkillsProgression';
import usePageTitle from '../hooks/usePageTitle';

export default function About() {
  usePageTitle('About');

  return (
    <>
      <AboutHero />
      <MethodologiesSection />
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        <CareerTimeline />
        <SkillsProgression />
      </div>
    </>
  );
}