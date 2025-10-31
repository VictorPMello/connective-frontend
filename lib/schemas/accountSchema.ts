import { z } from "zod";

export const AccountSchema = z.object({
  name: z.string().or(z.null()),
  email: z.string().or(z.null()),
});
