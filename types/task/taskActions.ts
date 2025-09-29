import { TaskPriority, TaskStatus } from "@/types/task/taskType";

export interface TaskActions {
  createTask: (
    title: string,
    projectId: string,
    priority: TaskPriority,
    description?: string,
  ) => void;

  updateTask: (
    id: string,
    title: string,
    priority: TaskPriority,
    description?: string,
  ) => void;

  updateTaskStatus: (id: string, newStatus: TaskStatus) => void;

  deleteTask: (id: string) => void;
}
