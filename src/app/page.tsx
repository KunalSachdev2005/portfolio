import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { WorkExperienceSection } from "@/sections/WorkExperience";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="experience">
        <WorkExperienceSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <TapeSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}