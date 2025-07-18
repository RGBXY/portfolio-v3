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
        <p className="text-lg font-semibold font-koushiki-sans ">{expertise.name}</p>
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
            <div className="flex items-center gap-8 h-fit pt-4">
              <p className="flex-1 text-gray-900">{expertise.description}</p>
              <div className="h-20 w-30 bg-blue-200 border"></div>
            </div>
            <div className="flex items-center flex-wrap gap-3 text-sm text-gray-700">
              <p>Tools :</p>
              {expertise.tools.map((item, index) => (
                <p key={item.name}>
                  {item.name} {index + 1 !== expertise.tools.length && ","}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
