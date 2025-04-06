import React from "react";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";

export const Portfolio = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start bg-white">
      <ProjectsSection />
      <TeamSection />
      <ServicesSection />
      <HeroSection />
      <ContactSection />
    </div>
  );
};
