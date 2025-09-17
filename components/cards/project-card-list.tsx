import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";

import { ProjectCard } from "@/components/cards/project-card";
import { AddTaskDialog } from "@/components/dialog/addTaskDialog";
import { AllProjectsDialog } from "@/components/dialog/allProjectsDialog";

import { Separator } from "@/components/ui/separator";
export function ProjectCardList() {
  return (
    <div>
      <Card className="@container/card">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Projects
            <AllProjectsDialog />
          </CardTitle>
          <CardAction>
            <AddTaskDialog />
          </CardAction>
        </CardHeader>
        <Separator className="mx-auto !w-[95%]" />

        <div className="flex gap-3 px-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Card>
    </div>
  );
}
