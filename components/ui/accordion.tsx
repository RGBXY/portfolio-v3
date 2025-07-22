import { X } from "lucide-react";
import React from "react";
import { AnimatePresence, motion } from "motion/react";

interface expertiseToolsItem {
  name: string;
}

interface expertiseItem {
  id: number;
  name: string;
  description: string;
  tools: expertiseToolsItem[];
}

interface expertiseProps {
  expertise: expertiseItem;
  index: number;
  state?: number | null;
}

const Accordion = ({ expertise, index, state }: expertiseProps) => {
  const accordionStatus = index === state;

  return (
    <div className={`${accordionStatus ? "" : ""} flex flex-col border-b border-black py-6`}>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-lg font-semibold font-katsumi">{expertise.name}</h1>
        <X size={18} className={`${accordionStatus ? "rotate-0" : "rotate-45"} transition-all ease-in-out`} />
      </div>

      <AnimatePresence>
        {accordionStatus && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="flex flex-col gap-4 overflow-hidden"
          >
            <div className="flex items-center justify-between gap-8 pt-4 h-fit">
              <p className="w-[70%] text-gray-800">{expertise.description}</p>
              <div className="h-20 w-30 bg-blue-200 border"></div>
            </div>
            <div className="flex items-center gap-2 pt-2.5 text-sm">
              {expertise.tools.map((item) => (
                <div className="px-2 py-0.5  bg-[#252525] text-white text-xs" key={item.name}>
                  {item.name}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
