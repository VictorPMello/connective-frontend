import { PrioritySchema } from "@/lib/schemas/priority";
import { z } from "zod";

export type PriorityType = z.infer<typeof PrioritySchema>;
