"use client";

import { useState } from "react";

import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { EditTaskDialog } from "@/components/dialog/editTask";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ChevronsDown,
  ChevronsRight,
  ChevronsUp,
  ClipboardX,
  Ellipsis,
  SquarePen,
  Trash,
} from "lucide-react";

import { Task, TaskPriority } from "@/types/task/taskType";

import { useTask } from "@/hooks/use-task";

export function ProjectCard({
  tasks,
  status,
}: {
  tasks: Task[];
  status: string;
}) {
  const { updateTask, deleteTask } = useTask();

  const [editingTask, setEditingTask] = useState<{
    id: string;
    title: string;
    priority: TaskPriority;
    description: string;
  } | null>(null);

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

  const handleEditTask = (task: Task) =>
    setEditingTask({
      id: task.id,
      title: task.title,
      priority: task.priority,
      description: task.description || "",
    });

  const handleUpdateTask = (updatedData: {
    id: string;
    title: string;
    priority: TaskPriority;
    description: string;
  }) => {
    updateTask(
      updatedData.id,
      updatedData.title,
      updatedData.priority,
      updatedData.description,
    );
    setEditingTask(null);
  };

  const handleDeleteTask = (id: string) => deleteTask(id);
  const handleCloseDialog = () => setEditingTask(null);

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
        <div className="flex flex-col justify-center items-center gap-4 p-6">
          <div className=" bg-destructive p-2 rounded-full">
            <ClipboardX size={35} className="mx-auto text-primary-foreground" />
          </div>

          <p className="text-lg">No tasks currently on this board</p>
        </div>
      </Card>
    );
  }

  return (
    <>
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
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => handleEditTask(task)}
                    >
                      <SquarePen /> Edit Task
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive cursor-pointer focus:text-destructive/80"
                      onClick={() => handleDeleteTask(task.id)}
                    >
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

      {editingTask && (
        <EditTaskDialog
          taskData={editingTask}
          onClose={handleCloseDialog}
          onUpdate={handleUpdateTask}
        />
      )}
    </>
  );
}
