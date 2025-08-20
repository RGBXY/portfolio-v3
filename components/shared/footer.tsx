import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 w-full bg-white px-5">
      <div className="h-full border-t border-black mx-auto max-w-2xl flex items-center justify-between text-xs font-bold tracking-widest uppercase">
        <h1>© 2025 Derren Amadeo</h1>
        <div className="flex items-center gap-7 font-koushiki-sans">
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="#project">
            <span>Project</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
