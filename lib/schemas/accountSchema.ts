import { z } from "zod";

export const AccountSchema = z.object({
  name: z.string(),
  email: z.string(),
});
