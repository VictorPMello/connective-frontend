import { z } from "zod";

import {
  CreateTaskSchema,
  TaskSchema,
  UpdateTaskSchema,
} from "@/lib/schemas/taskSchema";

export type Task = z.infer<typeof TaskSchema>;

export type TaskStatus = "todo" | "doing" | "done";

export type TaskPriority = "low" | "medium" | "high";

export type CreateTask = z.infer<typeof CreateTaskSchema>;

export type UpdateTask = z.infer<typeof UpdateTaskSchema>;
