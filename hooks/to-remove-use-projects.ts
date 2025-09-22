import { useKanbanStore } from "@/store/kanbanStore";

export const useProjects = () => {
  const projects = useKanbanStore((state) => state.projects);
  const selectedProject = useKanbanStore((state) => state.selectedProject);

  const createdProject = useKanbanStore((state) => state.createdProject);
  const updateProject = useKanbanStore((state) => state.updateProject);
  const deleteProject = useKanbanStore((state) => state.deleteProject);

  const getProjectById = useKanbanStore((state) => state.getProjectById);

  const currentProject = selectedProject
    ? getProjectById(selectedProject)
    : null;

  return {
    projects,
    selectedProject,
    currentProject,
    createdProject,
    updateProject,
    deleteProject,
    getProjectById,
  };
};
