import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <div className="h-42 w-full bg-blue-200 border"></div>
        </CardHeader>
        <CardContent>
          <p>Cashira</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
