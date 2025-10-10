import { z } from "zod";

import {
  ClientSchema,
  CreateClientSchema,
  UpdateClientSchema,
} from "@/lib/schemas/clientSchema";

export type Client = z.infer<typeof ClientSchema>;

export type ClientStatus = "active" | "negotiation" | "inactive" | "prospectus";

export type ClientCategory = "basic" | "premium" | "enterprise";

export type ClientPaymentMethod = "credit_card" | "boleto" | "pix" | "transfer";

export type CreateClient = z.infer<typeof CreateClientSchema>;

export type UpdateClient = z.infer<typeof UpdateClientSchema>;
