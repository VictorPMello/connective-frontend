import { useKanbanStore } from "@/store/kanbanStore";

export const useProject = () => {
  const projects = useKanbanStore((state) => state.projects);
  const createProject = useKanbanStore((state) => state.createProject);
  const selectedProject = useKanbanStore((state) => state.selectedProject);
  const setSelectedProject = useKanbanStore(
    (state) => state.setSelectedProject,
  );

  return {
    projects,
    createProject,
    selectedProject,
    setSelectedProject,
  };
};
