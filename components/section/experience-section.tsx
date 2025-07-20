import React from "react";
import Heading from "../ui/heading";
import ExperienceCard from "../card/experience-card";
import { experience_data } from "@/lib/constant";

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-2xl w-full flex items-center">
      <div className="space-y-4">
        <Heading title="Experience" />
        <p className="tracking-wider leading-7">
          Im a fullstack web developer and could help your tech problem, just call me and i will serving you with all my heart. I have 2 years experience in this battlefield and ready to take a further step with you.
        </p>
        <div className="space-y-8 flex flex-col items-center mt-10">
          {experience_data.map((item) => (
            <ExperienceCard key={item.company} experience={item} />
          ))}
          <p className="mt-5">Soon</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
