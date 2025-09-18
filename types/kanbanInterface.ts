import {
  CreateProjectDataType,
  ProjectType,
  UpdateProjectDataType,
} from "@/types/projectTypes";

import {
  CreateTaskDataType,
  TaskType,
  UpdateTaskDataType,
} from "@/types/taskTypes";

export interface Kanban {
  projects: ProjectType[];
  tasks: TaskType[];
  selectedProject: string | null;

  isLoading: boolean;
  searchQuery: string;

  createdProject: (data: CreateProjectDataType) => void;
  updateProject: (id: string, data: UpdateProjectDataType) => void;
  deleteProject: (id: string) => void;
  moveProject: (id: string | null) => void;

  createdTask: (data: CreateTaskDataType) => void;
  updateTask: (id: string, data: UpdateTaskDataType) => void;
  deleteTask: (id: string) => void;
  moveTask: (id: string | null) => void;

  setSearchQuery: (query: string) => void;

  getProjectById: (id: string) => ProjectType | undefined;
  getTaskById: (id: string) => TaskType | undefined;
  getTasksByProject: (projectId: string) => TaskType[];
  getProjectStatus: (projectId: string) => {
    total: number;
    toStart: number;
    inProgress: number;
    completed: number;
  };
}
