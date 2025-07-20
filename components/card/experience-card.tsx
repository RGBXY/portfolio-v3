import Link from "next/link";
import React from "react";

interface experienceItem {
  company: string;
  role: string;
  time: string;
  link: string;
}

interface experienceProps {
  experience: experienceItem;
}

const ExperienceCard = ({ experience }: experienceProps) => {
  return (
    <div className="flex justify-center gap-6 h-fit">
      <div className="w-1/2 shrink-0 text-xs text-end font-semibold">
        <p>{experience.time}</p>
      </div>
      <div className="pt-2.5">
        <div className="h-1.5 w-1.5 bg-black rotate-45"></div>
        <div className="mx-auto h-[calc(100%+35px)] w-[1px] bg-black "></div>
      </div>
      <div className="w-1/2 shrink-0">
        <Link target="__blank" href={experience.link}>
          <h1 className="text-xl font-bold font-katsumi">{experience.company}</h1>
        </Link>
        <p className="font-semibold text-gray-800 font-koushiki-sans">{experience.role}</p>
        {/* <p className="text-sm mt-2 text-gray-700" >Here i make a lot of web design and made it to be alive with my front-end skills. kjasdkjsbd jasdbjhas djhbd</p> */}
      </div>
    </div>
  );
};

export default ExperienceCard;
