import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 w-full bg-white px-5">
      <div className="h-full border-t border-black mx-auto max-w-2xl flex items-center justify-between text-xs font-bold tracking-widest uppercase">
        <h1>© 2025 Derren Amadeo</h1>
        <div className="flex items-center gap-7 font-koushiki-sans">
          <span>Home</span>
          <span>Project</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
