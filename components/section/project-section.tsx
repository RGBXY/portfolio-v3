"use client";

import React, { useState } from "react";
import Heading from "../ui/heading";
import ProjectCard from "../card/project-card";
import { project_data } from "@/lib/constant";
import ProjectDrawer from "../modal/project-drawer";

const ProjectSection = () => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleTitleClick = (id: number) => {
    setSelectedId(id);
    setIsOpen(true);
  };

  const next = () => {
    if (selectedId < project_data.length) {
      setSelectedId((prev) => prev + 1);
    }
  };

  const prev = () => {
    setSelectedId((prev) => Math.max(1, prev - 1));
  };

  return (
    <section id="project" className="max-w-2xl w-full flex items-center">
      <div className="space-y-4 w-full">
        <Heading title="Project" />
        <p className="">Im a fullstack web developer and could help your tech problem, just call me and i will serving you with all my heart.</p>

        <div className="grid grid-cols-2 gap-6 w-full mt-6">
          {project_data.map((item) => (
            <ProjectCard key={item.id} project={item} onClickTitle={() => handleTitleClick(item.id)} />
          ))}
        </div>

        <ProjectDrawer selectedId={selectedId} isOpen={isOpen} onClose={() => setIsOpen(false)} onNext={next} onPrev={prev} />
      </div>
    </section>
  );
};

export default ProjectSection;
