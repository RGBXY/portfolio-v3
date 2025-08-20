"use client";

import React, { useRef, useState } from "react";
import Heading from "../ui/heading";
import Link from "next/link";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("derrenamadeo@gmail.com");

    setCopied(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setCopied(false);
      timeoutRef.current = null;
    }, 2000);
  };

  return (
    <section id="contact" className="max-w-2xl w-full flex items-center">
      <div className="space-y-4">
        <Heading title="Get Connect" />
        <div className="tracking-wider leading-7">
          Follow me on{" "}
          <Link href="https://www.instagram.com/derrenmadeo/" target="__blank">
            <span className="underline">Instagram</span>
          </Link>
          , view my code and open-source projects on{" "}
          <Link href="https://github.com/RGBXY" target="__blank">
            <span className="underline">Github</span>
          </Link>
          , explore my{" "}
          <Link href="https://app.zeke.so/user/derren" target="__blank">
            <span className="underline">CV</span>
          </Link>
          {""} profile, read my blog on {""}
          <Link href="https://jiyukai.vercel.app" target="__blank">
            <span className="underline">Jiyukai</span>
          </Link>
          , explore my{" "}
          <Link href="/personal">
            <span className="underline">personal</span>
          </Link>{" "}
          page, or email me directly{" "}
          <span onClick={copyEmail} className="group inline-flex justify-center cursor-pointer relative">
            <span className="-bottom-7 group-hover:opacity-100 opacity-0 transition-all absolute inset-x-auto bg-[#252525] px-2 py-1 text-xs text-white">{copied ? "Use it wisely " : "Click to copy"}</span>
            <p>derrenamadeo@gmail.com.</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
