import React from "react";

const Navbar = () => {
  return (
    <nav className="h-20 w-full bg-white">
      <div className="h-full mx-auto max-w-2xl flex items-center justify-between text-sm font-bold tracking-widest uppercase">
        <h1>Derren .a</h1>
        <div className="flex items-center gap-7 font-koushiki-sans">
          <span>Home</span>
          <span>Project</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
