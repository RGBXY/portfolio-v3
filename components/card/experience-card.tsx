"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React, { useState } from "react";

interface expertiseItem {
  name: string;
  description: string;
  tools: string[];
}

interface expertiseProps {
  expertise: expertiseItem;
}

const Haha = ({ expertise }: expertiseProps) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div onClick={() => setCollapse(!collapse)} className="space-y-3 border-b border-black py-6">
      <div className="w-full flex justify-between items-center">
        <p className="text- font-semibold font-koushiki-sans">{expertise.name}</p>
        <X size={18} className={`${collapse ? "rotate-0" : "rotate-45"} transition-all ease-in-out`} />
      </div>
      <div className={cn(collapse ? "" : "h-0 overflow-hidden opacity-0", "flex-1 flex flex-col gap-3 transition-all")}>
        <p>{expertise.description}</p>
        <div className="flex items-center flex-wrap gap-3 text-sm text-gray-600">
          <p>Tools :</p>
          {expertise.tools.map((item) => (
            <p key={item}>{item},</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Haha;
