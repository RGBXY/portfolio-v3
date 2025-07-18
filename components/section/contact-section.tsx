import React from "react";
import Heading from "../ui/heading";

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-2xl w-full flex items-center">
      <div className="space-y-4">
        <Heading title="Contact" />
        <p className="tracking-wider leading-7">
          Im a fullstack web developer and could help your tech problem, just call me and i will serving you with all my heart. I have 2 years experience in this battlefield and ready to take a further step with you.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
