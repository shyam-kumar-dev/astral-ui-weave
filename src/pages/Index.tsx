import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Navigation from "@/components/portfolio/Navigation";
import FloatingElements from "@/components/portfolio/FloatingElements";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <FloatingElements />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;