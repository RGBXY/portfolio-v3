import { cn } from "@/lib/utils";
import React from "react";

interface headerProps {
  title: string;
  className?: string;
}

const Heading = ({ title, className }: headerProps) => {
  return (
    <div className="text-center flex gap-5 items-center justify-center">
      <h1 className={cn(className, "text-4xl font-semibold font-katsumi tracking-widest uppercase")}>{title}</h1>
    </div>
  );
};

export default Heading;
