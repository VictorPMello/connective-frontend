import { Project } from "@/types/project/projectType";
import { Task } from "@/types/task/taskType";

export interface KanBanState {
  projects: Project[];
  tasks: Task[];

  selectedProject: Partial<Project>;
  isLoading: boolean;
}
