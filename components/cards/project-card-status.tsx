"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPercentCompleteTasks } from "@/components/chart/chartPercentCompleteTaks";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TaskCount } from "@/components/cards/taskCount";

import { Maximize2, SquareKanban } from "lucide-react";

import { Project } from "@/types/project/projectType";
import { useTask } from "@/hooks/use-task";
import { useProject } from "@/hooks/use-project";

export function ProjectCardStatus({
  selectedProjectId,
  projects,
  title,
  description,
}: {
  selectedProjectId?: string;
  projects: Project[];
  title: string;
  description: string;
}) {
  const { setSelectedProject } = useProject();
  const { tasks, todoTasks, doingTasks, doneTasks } =
    useTask(selectedProjectId);

  const handleChangeProject = (projectId: string) =>
    setSelectedProject(projectId);

  return (
    <Card className="@container/card flex-row">
      <div className="flex flex-col justify-center items-end text-sm p-10">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex justify-between items-center w-[20rem]
            border text-foreground rounded-2xl
            p-2 pl-5 cursor-pointer text-left text-xl"
          >
            <div>
              <span className="block text-xs">Project</span>
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
            <div className=" bg-priority-low p-1.5 rounded-full">
              <SquareKanban className="size-8" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Input type="text" placeholder="Find ..." />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex gap-3 flex-col">
              {/*Change selected project*/}
              {projects.map((project: Project) => (
                <DropdownMenuItem
                  key={project.id}
                  onClick={() => handleChangeProject(project.id)}
                >
                  <div className="p-2">
                    <Button
                      variant="ghost"
                      className="flex justify-start gap-5 items-center w-[20rem]
                   cursor-pointer text-left text-lg"
                    >
                      <SquareKanban className="size-8 text-priority-low" />
                      <div className="flex-1">
                        <h5>{project.title}</h5>
                        <TaskCount projectId={project.id} />
                      </div>
                      <Maximize2 className="size-6 self-center text-priority-low" />
                    </Button>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <CardHeader className="flex flex-1 justify-center w-[16rem]">
        <CardTitle>
          <ChartPercentCompleteTasks totalTasks={tasks} doneTasks={doneTasks} />
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex flex-col justify-start items-center gap-6 text-sm">
        <h5 className="text-xl">Tasks </h5>

        <div className="flex flex-row flex-1 flex-wrap gap-2 w-full">
          <div className="w-[48%] my-auto p-2 pl-5 rounded-2xl text-lg border">
            <span className="block">Total</span>
            <span>{tasks.length}</span>
          </div>
          <div className="w-[48%] my-auto p-2 pl-5 rounded-2xl text-lg border">
            <span className="block">Todo</span>
            <span>{todoTasks.length}</span>
          </div>
          <div className="w-[48%] my-auto p-2 pl-5 rounded-2xl text-lg border">
            <span className="block">Doing</span>
            <span>{doingTasks.length}</span>
          </div>
          <div className="w-[48%] my-auto p-2 pl-5 rounded-2xl text-lg border">
            <span className="block">Done</span>
            <span>{doneTasks.length}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
