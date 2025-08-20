import { BriefcaseIcon, HexagonIcon, HouseIcon, LegoSmileyIcon, List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Dock = () => {
  return (
    <nav className="fixed bottom-0 group  w-full z-30">
      <div className="relative py-1 translate-y-5 transition-all overflow-hidden group-hover:-translate-y-4 bg-zinc-900 rounded-lg border mx-auto w-fit px-1 flex flex-col items-center justify-between tracking-widest">
        <List className="group-hover:invisible opacity-100 group-hover:opacity-0 transition-all absolute" />
        <div className="group-hover:visible invisible flex w-fit items-center rounded-xl text-xs gap-1 text-center justify-center ">
          <Link href="#about">
            <div className="px-2 py-2 hover:bg-gray-200/10 rounded-sm font-medium">
              <HouseIcon size={18} color="#e5e7eb" weight="duotone" />
            </div>
          </Link>
          <Link href="#about">
            <div className="px-2 py-2 hover:bg-gray-200/10 rounded-sm font-medium">
              <BriefcaseIcon size={18} color="#e5e7eb" weight="duotone" />
            </div>
          </Link>
          <Link href="#about">
            <div className="px-2 py-2 hover:bg-gray-200/10 rounded-sm font-medium">
              <LegoSmileyIcon size={18} color="#e5e7eb" weight="duotone" />
            </div>
          </Link>
          <Link href="#about">
            <div className="px-2 py-2 hover:bg-gray-200/10 rounded-sm font-medium">
              <HexagonIcon size={18} color="#e5e7eb" weight="duotone" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Dock;
