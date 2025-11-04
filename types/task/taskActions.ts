import { TaskPriority, TaskStatus } from "@/types/task/taskType";

export interface TaskActions {
  createTask: (
    title: string,
    projectId: string,
    priority: TaskPriority,
    description?: string,
  ) => Promise<void>;

  updateTask: (
    id: string,
    title: string,
    priority: TaskPriority,
    description?: string,
  ) => Promise<void>;

  updateTaskStatus: (id: string, newStatus: TaskStatus) => Promise<void>;

  deleteTask: (id: string) => Promise<void>;
}
