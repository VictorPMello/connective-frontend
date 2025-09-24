import { KanbanStateCreator } from "@/types/kanban/kanbanStateType";
import { KanBanState } from "@/types/kanban/kanbanInterface";

import { CreateProjectSchema } from "@/lib/schemas/projectSchema";
import { ProjectActions } from "@/types/project/projectActions";

import { generateId } from "@/utils/helpers";

export const CreateProjectActions: KanbanStateCreator<ProjectActions> = (
  set,
) => ({
  createProject: (title: string, description?: string) => {
    try {
      const validatedProject = CreateProjectSchema.parse({
        title,
        description: description || "",
      });

      const newProject = {
        ...validatedProject,
        id: generateId(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      set((state: KanBanState) => ({
        ...state,
        projects: [...state.projects, newProject],
        selectedProject: newProject,
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
});
