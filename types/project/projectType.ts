import { z } from "zod";

import {
  CreateProjectSchema,
  ProjectSchema,
  UpdateProjectSchema,
} from "@/lib/schemas/projectSchema";

export type Project = z.infer<typeof ProjectSchema>;
export type CreateProject = z.infer<typeof CreateProjectSchema>;
export type UpdateProject = z.infer<typeof UpdateProjectSchema>;
