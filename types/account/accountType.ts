import { z } from "zod";

import { AccountSchema } from "@/lib/schemas/accountSchema";

export type Account = z.infer<typeof AccountSchema>;
