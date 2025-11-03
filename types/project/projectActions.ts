export interface ProjectActions {
  createProject: (title: string, description?: string) => Promise<void>;
  updateProject: (
    id: string,
    title: string,
    description?: string,
  ) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  deleteAllProjects: () => Promise<void>;

  setSelectedProject: (projectId: string) => void;
}
