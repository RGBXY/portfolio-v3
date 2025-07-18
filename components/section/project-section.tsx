import React from "react";
import Heading from "../ui/heading";
import ProjectCard from "../card/project-card";

const ProjectSection = () => {
  return (
    <section id="project" className="max-w-2xl w-full flex items-center">
      <div className="space-y-4 w-full">
        <Heading title="Project" />
        <p className="">Im a fullstack web developer and could help your tech problem, just call me and i will serving you with all my heart.</p>

        <div className="grid grid-cols-2 gap-4 w-full mt-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
