import { ProjectType } from "@/types/projectTypes";

import { TaskType } from "@/types/taskTypes";

export interface Kanban {
  projects: ProjectType[];
  tasks: TaskType[];
  selectedProject: string | null;

  isLoading: boolean;
  searchQuery: string;
}
