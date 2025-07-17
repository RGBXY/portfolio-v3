import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="max-w-2xl w-full mt-20 flex items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          {/* <Image src="/assets/self-potrait.png" className="h-30 w-25 object-cover border border-black" alt="self-potrait" width={300} height={300} /> */}
          <div className="">
            <h1 className="text-5xl font-katsumi tracking-wider">Derren Amadeo</h1>
            <p className="text-lg font-koushiki-sans font-semibold tracking-widest text-gray-700">Fullstack Web Developer</p>
          </div>
        </div>
        <div className="tracking-wider leading-7 space-y-5">
          <p>
            Im a fullstack web developer and could help your tech problem, just call me and i will serving you with all my heart. I have 2 years experience in this battlefield and ready to take a further step with you. Im a tech eunthusiast
            and have a big curiousity with a technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
