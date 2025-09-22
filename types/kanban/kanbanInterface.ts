import { Project } from "@/types/project/projectType";
import { Task } from "@/types/task/taskType";

export interface KanBanState {
  projects: Project[];
  tasks: Task[];

  selectedProject: string | null;
  isLoading: boolean;
}
