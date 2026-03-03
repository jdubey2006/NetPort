import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ProjectRow from "@/components/ProjectRow";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";

import netflixPortfolio from "@/assets/jaja.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

const featuredProjects = [
  { title: "Netflix Themed Portfolio", image: netflixPortfolio, tags: ["React", "D3.js", "TypeScript"], description: "A Netflix-inspired portfolio where every project is presented like a feature film — immersive, interactive, and designed to keep you exploring." },
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner />
      <div id="projects" className="pt-8">
        <ProjectRow title="FEATURED PROJECTS" projects={featuredProjects} onProjectClick={setSelectedProject} />
      </div>
      <SkillsSection />
      <AboutSection />
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Index;
