import { cn } from "@/lib/utils";
import React from "react";

interface headerProps {
  title: string;
  className?: string;
}

const Heading = ({ title, className }: headerProps) => {
  return (
    <div>
      <h1 className={cn(className, "font-koushiki-sans text-2xl font-semibold tracking-widest uppercase")}>{title}</h1>
    </div>
  );
};

export default Heading;
