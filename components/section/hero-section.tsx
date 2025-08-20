import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col min-h-screen bg-linear-to-b/oklch from-zinc-950 via-zinc-900 to-zinc-800">
        <div className="h-screen w-full relative overflow-hidden flex items-center justify-center">
          <div className="absolute -top-[1200px] md:w-[1500px] w-[1000px] h-[1500px] rounded-[900px] bg-radial-[at_50%_50%] blu border border-gray-400 from-white to-zinc-900 to-75%"></div>
          <div className="z-10 flex gap-7 flex-col w-full items-center px-5 lg:p-10 justify-center">
            <div className=" md:w-90 h-90 aspect-3/2 overflow-hidden w-full rounded-xl">
              <Image src="/assets/projects/image.png" alt="linkedin" className="hover:invert-100 object-top hover:scale-110 transition-all w-full h-full object-cover" height={800} width={800} />
            </div>
            <div className="text-center space-y-3">
              <h1 className="md:text-3xl text-2xl font-semibold">
                <span className="font-katsumi text-5xl ">Derren Amadeo </span>
              </h1>
              <p className="text-sm text-zinc-400 w-sm">Front-end Developer based in Yogyakarta. Love creating unique designs and turning them into code.</p>
              <div className="flex items-center justify-center gap-3 pt-4">
                <Image src="/icon/icons8-linkedin (2).svg" alt="linkedin" className="invert-75 hover:invert-100 hover:scale-110 transition-all w-6 h-6" height={100} width={100} />
                <Image src="/icon/icons8-facebook (2).svg" alt="linkedin" className="invert-75 hover:invert-100 hover:scale-110 transition-all w-6 h-6" height={100} width={100} />
                <Image src="/icon/icons8-instagram (1).svg" alt="linkedin" className="invert-75 hover:invert-100 hover:scale-110 transition-all w-6 h-6" height={100} width={100} />
                <Image src="/icon/icons8-dribble (2).svg" alt="linkedin" className="invert-75 hover:invert-100 hover:scale-110 transition-all w-5 h-5" height={100} width={100} />
                <Image src="/icon/icons8-github.svg" alt="linkedin" className="invert-75 hover:invert-100 hover:scale-110 transition-all w-6 h-6" height={100} width={100} />
                <Image src="/icon/icons8-medium.svg" alt="linkedin" className="invert-75 hover:invert-100 hover:scale-110 transition-all w-7 h-7" height={100} width={100} />
              </div>
              <div className="flex items-center justify-center gap-3">
                <button className="border py-1 px-3 mt-5 rounded text-sm shadow-inner shadow-zinc-500 hover:text-shadow-sm text-shadow-sky-800">PROJECTS</button>
                <button className="border py-1 px-3 mt-5 rounded text-sm shadow-inner shadow-zinc-500">ABOUT ME</button>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
