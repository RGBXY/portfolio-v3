import React from "react";
import Heading from "../ui/heading";
import ExperienceCard from "../card/experience-card";
import { experience_data } from "@/lib/constant";

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-2xl w-full flex items-center">
      <div className="space-y-4">
        <Heading title="Career Path" />
        <p className="" >A journey through challenges, shipped projects, and continuous learning — each experience has shaped not only my skills, but also how I think, build, and grow as a product developer.</p>
        <div className="space-y-8 flex flex-col items-center pt-4">
          {experience_data.map((item) => (
            <ExperienceCard key={item.company} experience={item} />
          ))}
          <p className="px-2 border mt-2 rounded-full border-black flex items-center justify-center text-xs">PATH</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
