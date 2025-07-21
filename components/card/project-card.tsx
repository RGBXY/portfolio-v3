import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
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
}

interface projectProps {
  project: projectItem;
  onClickTitle: () => void;
}

const ProjectCard = ({ project, onClickTitle }: projectProps) => {
  return (
    <div className="w-full">
      <Card className="py-0 bg-none">
        <CardHeader className="">
          <div className="h-50 w-full bg-blue-200"></div>
        </CardHeader>
        <CardContent className="">
          <p onClick={onClickTitle} className="text-xl font-katsumi font-semibold hover:text-gray-500 transition-all cursor-pointer">
            {project.name}
          </p>
          <p className="text-sm">{project.sub_title}</p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
