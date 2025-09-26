import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required!"),
  description: z.string().optional(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateProjectSchema = ProjectSchema.omit({
  id: true,

  createdAt: true,
  updatedAt: true,
});

export const UpdateProjectSchema = ProjectSchema.partial().omit({
  id: true,
  createdAt: true,
});
