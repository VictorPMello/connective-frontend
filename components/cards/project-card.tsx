"use client";

import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronsDown,
  ChevronsRight,
  ChevronsUp,
  Ellipsis,
  SquarePen,
  Trash,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Task } from "@/types/task/taskType";

export function ProjectCard({
  tasks,
  status,
}: {
  tasks: Task[];
  status: string;
}) {
  const getPriorityTask = (priority: string) => {
    switch (priority) {
      case "low":
        return "text-priority-low bg-priority-low/30";
      case "medium":
        return "text-priority-medium bg-priority-medium/30";
      case "high":
        return "text-priority-high bg-priority-high/30";
    }
  };

  if (tasks.length === 0) {
    return (
      <Card className="@container/card w-1/3 border rounded-3xl">
        <CardHeader className="flex justify-between">
          <CardTitle className="text-lg font-semibold tabular-nums @[250px]/card:text-3xl">
            {status}
          </CardTitle>
          <CardAction className="flex items-center justify-center self-center w-8 h-8 bg-primary rounded-full">
            0
          </CardAction>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="@container/card w-1/3 border rounded-3xl">
      <CardHeader className="flex justify-between">
        <CardTitle className="text-lg font-semibold tabular-nums @[250px]/card:text-3xl">
          {status}
        </CardTitle>
        <CardAction className="flex items-center justify-center self-center w-8 h-8 bg-primary rounded-full">
          {tasks.length}
        </CardAction>
      </CardHeader>
      <div className="flex flex-col gap-4 p-6">
        {tasks.map((task: Task) => (
          <div key={task.id} className="p-6 border rounded-2xl">
            <div className="flex justify-between">
              <p
                className={`flex gap-2 justify-center ${getPriorityTask(task.priority)} rounded-xl py-1 px-2 `}
              >
                {task.priority === "low" ? (
                  <ChevronsDown />
                ) : task.priority === "medium" ? (
                  <ChevronsRight />
                ) : (
                  <ChevronsUp />
                )}

                {task.priority}
              </p>

              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer">
                  <Ellipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="cursor-pointer">
                    <SquarePen /> Edit task
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive cursor-pointer focus:text-destructive/80">
                    <Trash className="text-destructive" /> Delete Task
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <h4 className="mt-5 mb-2 font-bold text-lg">{task.title}</h4>
            <p className="opacity-65">{task.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
