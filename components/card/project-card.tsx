import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

interface toolsProject {
  name: string;
}

interface projectItem {
  id: number;
  name: string;
  description: string;
  tools: toolsProject[];
}

interface projectProps {
  project: projectItem;
}

const ProjectCard = ({ project }: projectProps) => {
  return (
    <div className="w-full">
      <Card className="py-0 bg-none">
        <CardHeader className="">
          <div className="h-50 w-full bg-blue-200"></div>
        </CardHeader>
        <CardContent className="">
          <p className="text-xl font-katsumi font-semibold">{project.name}</p>
          <p className="text-sm">{project.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
