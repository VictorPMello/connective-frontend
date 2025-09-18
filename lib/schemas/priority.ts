import { z } from "zod";

export const PrioritySchema = z.enum(["low", "medium", "high"]);
