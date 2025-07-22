import React from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer";
import { project_data } from "@/lib/constant";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface projectDrawerProp {
  selectedId: number | null;
  isOpen: boolean;
  projectDataLength: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectDrawer = ({ selectedId, isOpen, projectDataLength, onClose, onNext, onPrev }: projectDrawerProp) => {
  const selectedProject = project_data.find((item) => item.id == selectedId);

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent className="flex flex-col justify-center items-center md:pe-3 px-5">
        <DrawerHeader className="h-24 flex flex-row justify-between items-center max-w-2xl w-full p-0">
          <DrawerTitle className="text-xl">DERREN .A</DrawerTitle>
          <DrawerClose asChild>
            <p className="text-xl hover:text-gray-500 cursor-pointer">CLOSE</p>
          </DrawerClose>
        </DrawerHeader>
        <div className="h-screen overflow-y-auto max-w-2xl w-full scrollbar-hide pt-10 space-y-6 pb-10">
          <div className="space-y-3">
            <h1 className="text-5xl font-katsumi font-bold">{selectedProject?.name}</h1>

            <p className="w-[70%]">{selectedProject?.description}</p>
            <div className="flex gap-2 mt-5">
              {selectedProject?.tools.map((item) => (
                <div className="px-2 py-0.5  bg-[#252525] text-white text-sm" key={item.name}>
                  {item.name}
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-between">
              <div className="flex gap-1 items-center group">
                <h1 className="text-2xl group-hover:text-gray-500 transition-all cursor-pointer">EXPLORE</h1>
                <ArrowRight strokeWidth={1.2} className="-rotate-45 w-7 h-7 group-hover:rotate-0 transition-all group-hover:text-gray-500" />
              </div>
              <div className="flex gap-2">
                <p className={cn(selectedId == 1 ? "text-gray-500 cursor-not-allowed" : "cursor-pointer")} onClick={onPrev}>
                  Prev
                </p>
                <span>/</span>
                <p onClick={onNext} className={cn(projectDataLength == selectedId ? "text-gray-500 cursor-not-allowed" : "cursor-pointer")}>
                  Next
                </p>
              </div>
            </div>
          </div>

          <div className="aspect-3/2 w-full h-[400px] bg-blue-200"></div>

          <div className="absolute right-10 bottom-10">
            {selectedProject?.id} / {projectDataLength}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectDrawer;
