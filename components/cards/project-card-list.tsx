"use client";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";

import { ProjectCard } from "@/components/cards/project-card";
import { AddTaskDialog } from "@/components/dialog/addTaskDialog";
import { AllProjectsDialog } from "@/components/dialog/allProjectsDialog";

import { Separator } from "@/components/ui/separator";

// import { useProject } from "@/hooks/use-project";
// import { useTask } from "@/hooks/use-task";

export function ProjectCardList() {
  // const { createProject } = useProject();
  // const { createTask } = useTask();
  //
  // const handleTest = () => {
  //   createProject("teste", "teste description");
  // };
  //
  // const handleTest2 = () => {
  //   createTask(
  //     "testeTask22",
  //     "A3Uw82meq1ryomlknhsMx",
  //     "high",
  //     "teste task description",
  //   );
  // };

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
