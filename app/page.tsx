import { AboutSection } from "@/components/AboutSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { ContactSection } from "@/components/ContactSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { GitHubSection } from "@/components/GitHubSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { StackSection } from "@/components/StackSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="site-main">
        <HeroSection />
        <AboutSection />
        <DifferentialsSection />
        <StackSection />
        <ProjectsSection />
        <CaseStudySection />
        <ExperienceSection />
        <GitHubSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
