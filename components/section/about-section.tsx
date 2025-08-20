import React from "react";
import Heading from "../ui/heading";

const AboutSection = () => {
  return (
    <div className="w-full flex items-center flex-col py-10">
      <Heading title="About me" />
      <p className="pt-8 max-w-2xl text-center">
        Im a fullstack web developer based in Indonesia, specifically in Yogyakarta. I love exploring tech, design, and product solution for buisness and make sure everything i do based on customer needs. In my free time i enjoy writing,
        listening music and sometimes touch some grass.
      </p>

      <div className="border border-gray-300 w-2xl h-100 mt-10" >

      </div>
    </div>
  );
};

export default AboutSection;
