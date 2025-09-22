import {
  CreateTaskDataType,
  TaskType,
  UpdateTaskDataType,
} from "@/types/toRemoveTaskTypes";

export interface TaskActions {
  createdTask: (data: CreateTaskDataType) => void;
  updateTask: (id: string, data: UpdateTaskDataType) => void;
  deleteTask: (id: string) => void;

  moveTask: (id: string | null) => void;

  getTaskById: (id: string) => TaskType | undefined;
  getTasksByProject: (projectId: string) => TaskType[];
}
