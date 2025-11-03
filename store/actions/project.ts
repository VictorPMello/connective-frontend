import axios from "axios";

import { KanbanStateCreator } from "@/types/kanban/kanbanStateType";
import { KanBanState } from "@/types/kanban/kanbanInterface";

import { CreateProjectSchema } from "@/lib/schemas/projectSchema";
import { ProjectActions } from "@/types/project/projectActions";

import { api } from "@/lib/api";
import { Task } from "@/types/task/taskType";
import { Project } from "@/types/project/projectType";

export const CreateProjectActions: KanbanStateCreator<ProjectActions> = (
  set,
) => ({
  createProject: async (title: string, description?: string) => {
    try {
      const validatedProject = CreateProjectSchema.parse({
        title,
        description: description || "",
      });

      const newProject = await api.post("/project", validatedProject);

      set((state: KanBanState) => ({
        ...state,
        projects: [...state.projects, newProject.data.data],
        selectedProject: newProject.data.data,
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Error to delete client: ${error.response?.data?.message || error.message}`,
        );
      }
      throw new Error(`Error to delete client: ${error}`);
    }
  },

  getAllProjects: async (accountId: string) => {
    try {
      const response = await api.get(`projects/${accountId}`);

      const projects = response.data.data.flatMap(
        ({ description, id, title, createdAt, updatedAt }: Project) => ({
          description,
          id,
          title,
          createdAt,
          updatedAt,
        }),
      );

      const tasks = response.data.data.flatMap(
        ({ tasks }: { tasks: Task[] }) => tasks,
      );

      set((state: KanBanState) => ({
        ...state,
        projects,
        selectedProject: projects[0],
        tasks,
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Error to delete client: ${error.response?.data?.message || error.message}`,
        );
      }
      throw new Error(`Error to delete client: ${error}`);
    }
  },

  updateProject: async (id: string, title: string, description?: string) => {
    try {
      set((state: KanBanState) => ({
        ...state,
        projects: state.projects.map((project) => {
          if (project.id === id)
            return {
              id: project.id,
              title,
              description: description || "",
              createdAt: project.createdAt,
              updatedAt: new Date(),
            };

          return project;
        }),
      }));
    } catch (error) {
      throw new Error(`Error to create project: ${error}`);
    }
  },

  setSelectedProject: (projectId: string): void => {
    set((state: KanBanState) => {
      const filterProject = state.projects.find(
        (project) => project.id === projectId,
      );

      return {
        ...state,
        selectedProject: filterProject ? filterProject : {},
      };
    });
  },

  deleteProject: async (id: string) => {
    try {
      await api.delete(`/project/${id}`);
      set((state: KanBanState) => ({
        ...state,
        projects: state.projects.filter((project) => project.id !== id),
        tasks: state.tasks.filter((task) => task.projectId !== id),
        selectedProject:
          (state.selectedProject.id === id && state.projects[0]) || {},
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Error to delete client: ${error.response?.data?.message || error.message}`,
        );
      }
      throw new Error(`Error to delete client: ${error}`);
    }
  },

  deleteAllProjects: async () => {
    set(() => ({
      projects: [],
      tasks: [],
      selectedProject: {},
      isLoading: false,
    }));
  },
});
