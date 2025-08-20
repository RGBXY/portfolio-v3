import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface toolsProject {
  name: string;
}

interface projectItem {
  id: number;
  name: string;
  sub_title: string;
  description: string;
  tools: toolsProject[];
  link: string;
  image: string;
}

interface projectProps {
  project: projectItem;
  onClickTitle: () => void;
}

const ProjectCard = ({ project, onClickTitle }: projectProps) => {
  return (
    <div className="w-full">
      <Card className="py-0 bg-none cursor-pointer" onClick={onClickTitle}>
        <CardHeader>
          {/* <div className="md:h-50 w-full aspect-3/2 bg-blue-200"></div> */}
          <Image src={project.image} alt={project.name} height={200} width={200} className="md:h-50 w-full aspect-3/2 object-" />
        </CardHeader>
        <CardContent className="">
          <div className="flex gap-1 group">
            <h1 className="text-xl font-katsumi font-semibold group-hover:text-gray-500 transition-all cursor-pointer">{project.name}</h1>
            <ArrowRight strokeWidth={1.2} className="-rotate-45 group-hover:rotate-0 transition-all group-hover:text-gray-500" />
          </div>
          <p className="text-sm">{project.sub_title}</p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
