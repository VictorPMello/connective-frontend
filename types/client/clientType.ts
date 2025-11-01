import { z } from "zod";

import {
  ClientSchema,
  CreateClientSchema,
  UpdateClientSchema,
} from "@/lib/schemas/clientSchema";

export type Client = z.infer<typeof ClientSchema>;

export type ClientStatus = "ACTIVE" | "NEGOTIATION" | "INACTIVE" | "PROSPECTUS";

export type ClientCategory = "BASIC" | "PREMIUM" | "ENTERPRISE";

export type ClientPaymentMethod = "CREDIT_CARD" | "BOLETO" | "PIX" | "TRANSFER";

export type CreateClient = z.infer<typeof CreateClientSchema>;

export type UpdateClient = z.infer<typeof UpdateClientSchema>;
