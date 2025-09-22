import { PrioritySchema } from "@/lib/schemas/priority";
import { ProjectType } from "@/types/projectTypes";

import { TaskType } from "@/types/toRemoveTaskTypes";

import z from "zod";
export type PriorityType = z.infer<typeof PrioritySchema>;

export interface Kanban {
  projects: ProjectType[];
  tasks: TaskType[];
  selectedProject: string | null;

  isLoading: boolean;
  searchQuery: string;
}
