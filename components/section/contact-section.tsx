import React from "react";
import Heading from "../ui/heading";

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-2xl w-full flex items-center">
      <div className="space-y-4">
        <Heading title="Get Connect" />
        <p className="tracking-wider leading-7">Follow me on Instagram, view my code and open-source projects on Github, explore my CV profile, read my blog on Jiyukai, explore my personal page, or email me directly derrenamadeo@gmail.com.</p>
      </div>
    </section>
  );
};

export default ContactSection;
