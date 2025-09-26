"use client";

import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/cards/project-card";
import { AddTaskDialog } from "@/components/dialog/addTaskDialog";
import { AllProjectsDialog } from "@/components/dialog/allProjectsDialog";
import { Separator } from "@/components/ui/separator";

import { Project } from "@/types/project/projectType";

import { useTask } from "@/hooks/use-task";

export function ProjectCardList({
  projectId,
  projects,
}: {
  projectId: string;
  projects: Project[];
}) {
  const { todoTasks, doingTasks, doneTasks } = useTask(projectId);
  return (
    <div>
      <Card className="@container/card">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Projects
            <AllProjectsDialog projectId={projectId} projects={projects} />
          </CardTitle>
          <CardAction>
            <AddTaskDialog projectId={projectId} />
          </CardAction>
        </CardHeader>
        <Separator className="mx-auto !w-[95%]" />

        <div className="flex gap-3 px-3">
          {todoTasks && <ProjectCard tasks={todoTasks} status="Todo" />}
          {doingTasks && <ProjectCard tasks={doingTasks} status="Doing" />}
          {doneTasks && <ProjectCard tasks={doneTasks} status="Done" />}
        </div>
      </Card>
    </div>
  );
}
