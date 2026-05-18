import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
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
      <div className="ambient ambient-one" aria-hidden />
      <div className="ambient ambient-two" aria-hidden />
      <div className="ambient ambient-three" aria-hidden />

      <Header />

      <main className="site-main">
        <HeroSection />
        <AboutSection />
        <StackSection />
        <ProjectsSection />
        <ExperienceSection />
        <GitHubSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
