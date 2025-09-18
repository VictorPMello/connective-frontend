import { StateCreator } from "zustand";

import type { Kanban } from "@/types/kanbanInterface";
import type {
  ProjectType,
  CreateProjectDataType,
  UpdateProjectDataType,
} from "@/types/projectTypes";
import type { ProjectActions } from "@/types/projectActionsInterface";

import { generateId } from "@/utils/helpers";

export const createProjectActions: StateCreator<
  Kanban,
  [],
  [],
  ProjectActions
> = (set, get) => ({
  createdProject: (data: CreateProjectDataType) => {
    set((state) => {
      const now = new Date();

      const newProject: ProjectType = {
        id: generateId(),
        title: data.title,

        toStartTasks: [],
        inProgress: [],
        completed: [],

        toStartTasksCount: 0,
        inProgressCount: 0,
        completedCount: 0,
        totalTasks: 0,

        createdAt: now,
        updatedAt: now,
      };
      return {
        ...state,
        projects: [...state.projects, newProject],
        selectedProject: newProject.id,
      };
    });
  },

  updateProject: (id: string, data: UpdateProjectDataType) => {
    set((state) => ({
      ...state,
      projects: state.projects.map((project) =>
        project.id === id
          ? { ...project, ...data, updatedAt: new Date() }
          : project,
      ),
    }));
  },

  deleteProject: (id: string) => {
    set((state) => ({
      ...state,
      tasks: state.tasks.filter((task) => task.projectId !== id),
      projects: state.projects.filter((project) => project.id !== id),
      selectedProject:
        state.selectedProject === id ? null : state.selectedProject,
    }));
  },

  getProjectById: (id: string) => {
    return get().projects.find((project) => project.id === id);
  },
});
