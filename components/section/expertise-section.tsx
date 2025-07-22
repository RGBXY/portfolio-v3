"use client";

import React, { useState } from "react";
import Heading from "../ui/heading";
import Accordion from "../ui/accordion";
import { expertise_data } from "@/lib/constant";

const ExpertiseSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionFnc = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="expertise" className="max-w-2xl w-full flex items-center">
      <div className="space-y-4">
        <Heading title="EXPERTISE" />
        <p>I’m not just learning tools — I’m learning how to think, build, and adapt. Every step brings me closer to doing meaningful work.</p>

        <div className="">
          {expertise_data.map((data, index) => (
            <div key={data.id} className="cursor-pointer" onClick={() => accordionFnc(index)}>
              <Accordion index={index} expertise={data} state={openIndex} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
