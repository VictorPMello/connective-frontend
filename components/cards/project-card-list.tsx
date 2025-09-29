"use client";

import { useState } from "react";

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/cards/project-card";
import { AddTaskDialog } from "@/components/dialog/addTaskDialog";
import { AllProjectsDialog } from "@/components/dialog/allProjectsDialog";
import { Separator } from "@/components/ui/separator";

import { Project } from "@/types/project/projectType";
import { Task, TaskStatus } from "@/types/task/taskType";

import { useTask } from "@/hooks/use-task";

export function ProjectCardList({
  projectId,
  projects,
}: {
  projectId: string;
  projects: Project[];
}) {
  const { todoTasks, doingTasks, doneTasks, updateTaskStatus } =
    useTask(projectId);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
  );

  const handleDragStart = (event: DragEndEvent) => {
    const { active } = event;

    const task =
      todoTasks.find((t) => t.id === active.id) ||
      doingTasks.find((t) => t.id === active.id) ||
      doneTasks.find((t) => t.id === active.id);

    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveTask(null);
      return;
    }

    const taskId = active.id as string;
    const newStatus = over.id as TaskStatus;

    const currentTask =
      todoTasks.find((t) => t.id === taskId) ||
      doingTasks.find((t) => t.id === taskId) ||
      doneTasks.find((t) => t.id === taskId);

    if (currentTask && currentTask.status !== newStatus) {
      updateTaskStatus(taskId, newStatus);
    }

    setActiveTask(null);
  };

  const handleDragCancel = () => setActiveTask(null);

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

        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <div className="flex gap-3 px-3">
            {todoTasks && (
              <ProjectCard id="todo" tasks={todoTasks} status="Todo" />
            )}
            {doingTasks && (
              <ProjectCard id="doing" tasks={doingTasks} status="Doing" />
            )}
            {doneTasks && (
              <ProjectCard id="done" tasks={doneTasks} status="Done" />
            )}
          </div>

          <DragOverlay>
            {activeTask ? (
              <div className="opacity-70 rotate-2 cursor-grabbing">
                <div className="p-6 border rounded-2xl bg-background shadow-2xl">
                  <h4 className="font-bold text-lg">{activeTask.title}</h4>
                  <p className="opacity-65 mt-2">{activeTask.description}</p>
                </div>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </Card>
    </div>
  );
}
