import {
  CreateProjectSchema,
  ProjectSchema,
  UpdateProjectSchema,
} from "@/lib/schemas/project";

import { z } from "zod";

export type ProjectType = z.infer<typeof ProjectSchema>;
export type CreateProjectDataType = z.infer<typeof CreateProjectSchema>;
export type UpdateProjectDataType = z.infer<typeof UpdateProjectSchema>;
