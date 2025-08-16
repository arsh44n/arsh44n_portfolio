import { useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}