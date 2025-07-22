"use client";

import React, { useState } from "react";
import Heading from "../ui/heading";
import ProjectCard from "../card/project-card";
import { project_data } from "@/lib/constant";
import ProjectDrawer from "../modal/project-drawer";

const ProjectSection = () => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const projectDataLength = project_data.length;

  const handleTitleClick = (id: number) => {
    setSelectedId(id);
    setIsOpen(true);
  };

  const next = () => {
    if (selectedId < projectDataLength) {
      setSelectedId((prev) => prev + 1);
    }
  };

  const prev = () => {
    setSelectedId((prev) => Math.max(1, prev - 1));
  };

  return (
    <section id="project" className="max-w-2xl w-full flex items-center">
      <div className="space-y-4 w-full">
        <Heading title="Things I’ve Done" />
        <p className="">Things I’ve built with heart and curiosity — each project a piece of my growth and passion for solving real problems.</p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full pt-4">
          {project_data.map((item) => (
            <ProjectCard key={item.id} project={item} onClickTitle={() => handleTitleClick(item.id)} />
          ))}
        </div>

        <ProjectDrawer selectedId={selectedId} isOpen={isOpen} onClose={() => setIsOpen(false)} projectDataLength={projectDataLength} onNext={next} onPrev={prev} />
      </div>
    </section>
  );
};

export default ProjectSection;
