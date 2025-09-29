"use client";

import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";

import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { EditTaskDialog } from "@/components/dialog/editTask";
import { DraggableTaskCard } from "@/components/cards/draggableTaskCard";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { ClipboardX } from "lucide-react";

import { Task, TaskPriority } from "@/types/task/taskType";

import { useTask } from "@/hooks/use-task";

export function ProjectCard({
  id,
  tasks,
  status,
}: {
  id: string;
  tasks: Task[];
  status: string;
}) {
  const { updateTask, deleteTask } = useTask();
  const { setNodeRef, isOver } = useDroppable({ id: id });

  const [editingTask, setEditingTask] = useState<{
    id: string;
    title: string;
    priority: TaskPriority;
    description: string;
  } | null>(null);

  const [deletingTask, setDeletingTask] = useState<{
    isOpen: boolean;
    id: string;
  } | null>(null);

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

    // Add Error | Success message
    setEditingTask(null);
  };

  const handleCloseDialog = () => setEditingTask(null);

  const handleDeleteTask = (id: string) => {
    deleteTask(id);

    // Add Error | Success message
    setDeletingTask(null);
  };

  if (tasks.length === 0) {
    return (
      <Card
        ref={setNodeRef}
        className={`@container/card border rounded-3xl w-1/3 transition-colors ${
          isOver ? "border-primary border-2 bg-primary/5" : ""
        }`}
      >
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
      <Card
        ref={setNodeRef}
        className={`@container/card border rounded-3xl w-1/3 transition-colors ${
          isOver ? "border-primary border-2 bg-primary/5" : ""
        }`}
      >
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
            <DraggableTaskCard
              key={task.id}
              task={task}
              onEdit={() => handleEditTask(task)}
              onDelete={() => setDeletingTask({ isOpen: true, id: task.id })}
            />
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

      {deletingTask && (
        <AlertDialog open={deletingTask.isOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete This Project?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this
                project and tasks from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className="cursor-pointer"
                onClick={() => setDeletingTask(null)}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleDeleteTask(deletingTask.id)}
                className="bg-destructive hover:bg-destructive/80 cursor-pointer"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
