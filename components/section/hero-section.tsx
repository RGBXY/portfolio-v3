import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="max-w-2xl w-full mt-20 flex items-center">
      <div className="space-y-4">
        <Image src="/assets/self-potrait.png" className="h-25 w-25 object-cover border border-black" alt="self-potrait" width={300} height={300} />
        <div className="">
          <h1 className="text-5xl font-katsumi tracking-wider">Derren Amadeo</h1>
          <p className="text-lg font-koushiki-sans font-semibold tracking-widest text-gray-700">Fullstack Web Developer</p>
        </div>
        <p className="pt-2" >Im a fullstack web developer based in Indonesia, specifically in Yogyakarta. I love exploring tech, design, and product solution for buisness and make sure everything i do based on customer needs. In my free time i enjoy writing, listening music and sometimes touch some grass.</p>
      </div>
    </section>
  );
};

export default HeroSection;
