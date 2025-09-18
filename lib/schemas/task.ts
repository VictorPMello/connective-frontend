import { z } from "zod";
import { PrioritySchema } from "@/lib/schemas/priority";

export const TaskStatusSchema = z.enum(["toStart", "inProgress", "completed"]);

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is requered").max(20).default(""),
  description: z.string().max(50).optional().default(""),

  projectId: z.string(),
  priority: PrioritySchema,
  status: TaskStatusSchema,

  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateTaskSchema = TaskSchema.omit({
  id: true,
  status: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateTaskSchema = TaskSchema.partial().omit({
  id: true,
  projectId: true,
  createdAt: true,
});
