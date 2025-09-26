import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required!"),
  description: z.string().optional(),

  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["low", "medium", "high"]),

  projectId: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateTaskSchema = TaskSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateTaskSchema = TaskSchema.partial().omit({
  projectId: true,
  status: true,
  createdAt: true,
});
