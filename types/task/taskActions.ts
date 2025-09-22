import { TaskPriority, TaskStatus } from "@/types/task/taskType";

export interface TaskActions {
  createTask: (
    title: string,
    projectId: string,
    status: TaskStatus,
    priority: TaskPriority,
    description?: string,
  ) => void;
}
