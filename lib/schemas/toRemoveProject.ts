import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string().min(5, "Title is requered!").max(20).default(""),

  toStartTasks: z.array(z.string()).default([]),
  inProgress: z.array(z.string()).default([]),
  completed: z.array(z.string()).default([]),

  toStartTasksCount: z.number().min(0).default(0),
  inProgressCount: z.number().min(0).default(0),
  completedCount: z.number().min(0).default(0),
  totalTasks: z.number().min(0).default(0),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateProjectSchema = ProjectSchema.omit({
  id: true,
  toStartTasks: true,
  inProgress: true,
  completed: true,
  toStartTasksCount: true,
  inProgressCount: true,
  completedCount: true,
  totalTasks: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateProjectSchema = ProjectSchema.partial().omit({
  id: true,
  createdAt: true,
});
