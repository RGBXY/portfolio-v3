import React from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer";
import { project_data } from "@/lib/constant";

interface projectDrawerProp {
  selectedId: number | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectDrawer = ({ selectedId, isOpen, onClose, onNext, onPrev }: projectDrawerProp) => {
  const selectedProject = project_data.find((item) => item.id == selectedId);

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent className="flex flex-col justify-center items-center pe-3">
        <DrawerHeader className="h-24 flex flex-row justify-between items-center max-w-2xl w-full p-0">
          <DrawerTitle className="text-xl">DERREN .A</DrawerTitle>
          <DrawerClose asChild>
            <p className="text-xl">CLOSE</p>
          </DrawerClose>
        </DrawerHeader>
        <div className="h-screen overflow-y-auto max-w-2xl w-full scrollbar-hide pt-10 space-y-6 pb-10">
          <div className="space-y-3">
            <h1 className="text-5xl font-katsumi font-bold">{selectedProject?.name}</h1>
            <p className="w-[70%] text-gray-800">{selectedProject?.description}</p>
            <div className="flex gap-2 mt-5">
              {selectedProject?.tools.map((item) => (
                <div className="border px-2 rounded-full border-gray-700" key={item.name}>
                  {item.name}
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-between">
              <h1 className="text-2xl">Explore</h1>
              <div className="flex gap-2">
                <p onClick={onPrev} >Prev</p>
                <span>/</span>
                <p onClick={onNext} >Next</p>
              </div>
            </div>
          </div>

          <div className="aspect-3/2 w-full h-[400px] bg-blue-200"></div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectDrawer;
