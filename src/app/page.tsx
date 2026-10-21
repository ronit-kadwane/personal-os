import { Navbar, Footer } from '@/components/sections';
import {
  HeroSection,
  ProjectsSection,
  ExperienceSection,
  SkillsSection,
  ContactSection,
} from '@/features';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="overflow-hidden">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
