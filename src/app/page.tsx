import { Navbar, Footer } from '@/components/sections';
import {
  HeroSection,
  ProjectsSection,
  ExperienceSection,
  SkillsSection,
  ContactSection,
} from '@/features';

/**
 * Root portfolio home page composing layout chrome and domain feature sections:
 * Hero, Projects Bento, Experience Timeline, Skills, and Contact Form.
 *
 * @returns Master home page element
 */
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
