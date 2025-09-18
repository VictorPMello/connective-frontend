import {
  CreateTaskSchema,
  TaskSchema,
  TaskStatusSchema,
  UpdateTaskSchema,
} from "@/lib/schemas/task";

import { z } from "zod";

export type TaskType = z.infer<typeof TaskSchema>;
export type TaskStatusType = z.infer<typeof TaskStatusSchema>;
export type CreateTaskDataType = z.infer<typeof CreateTaskSchema>;
export type UpdateTaskDataType = z.infer<typeof UpdateTaskSchema>;
