export interface ProjectActions {
  createProject: (title: string, description?: string) => void;

  setSelectedProject: (projectId: string | null) => void;
}
