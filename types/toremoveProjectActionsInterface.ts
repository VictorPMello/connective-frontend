import {
  CreateProjectDataType,
  ProjectType,
  UpdateProjectDataType,
} from "@/types/projectTypes";

export interface ProjectActions {
  createdProject: (data: CreateProjectDataType) => void;
  updateProject: (id: string, data: UpdateProjectDataType) => void;
  deleteProject: (id: string) => void;

  getProjectById: (id: string) => ProjectType | undefined;
}
