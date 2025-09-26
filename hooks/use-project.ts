import { useKanbanStore } from "@/store/kanbanStore";

export const useProject = () => {
  const projects = useKanbanStore((state) => state.projects);
  const createProject = useKanbanStore((state) => state.createProject);
  const updateProject = useKanbanStore((state) => state.updateProject);
  const deleteProject = useKanbanStore((state) => state.deleteProject);

  const selectedProject = useKanbanStore((state) => state.selectedProject);
  const setSelectedProject = useKanbanStore(
    (state) => state.setSelectedProject,
  );

  return {
    projects,
    createProject,
    updateProject,
    deleteProject,
    selectedProject,
    setSelectedProject,
  };
};
