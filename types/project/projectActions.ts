export interface ProjectActions {
  createProject: (title: string, description?: string) => void;
  updateProject: (id: string, title: string, description?: string) => void;
  deleteProject: (id: string) => void;
  deleteAllProjects: () => void;

  setSelectedProject: (projectId: string) => void;
}
