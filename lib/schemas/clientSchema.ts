import { z } from "zod";

// const MAX_FILE_SIZE = 5000000;

export const ClientSchema = z.object({
  id: z.string(),

  // Metadata
  createdAt: z.date(),
  updatedAt: z.date(),

  // basic information
  name: z.string().min(1, { message: "Name is required!" }).trim(),
  contactPerson: z
    .string()
    .min(1, { message: "Contact person is required!" })
    .trim(),

  // contact
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), {
      message: "Invalid email format",
    }),
  phone: z
    .string()
    .regex(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/, { message: "Invalid phone format" }),

  // status and category
  status: z.enum(["active", "negotiation", "inactive", "prospectus"]),
  category: z.enum(["basic", "premium", "enterprise"]),

  // Relationship
  manager: z.string().min(1, { message: "Manager is required!" }),

  // OPTIONAL
  // basic information
  // avatar: z
  //   .instanceof(File)
  //   .refine((file) => file.size <= MAX_FILE_SIZE, {
  //     message: "Image size should be less than 5MB.",
  //   })
  //   .refine(
  //     (file) =>
  //       ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
  //         file.type,
  //       ),
  //     { message: "Only .jpg, .jpeg, .png and .webp formats are supported." },
  //   )
  //   .optional(),
  address: z
    .object({
      street: z.string().optional().or(z.literal("")),
      number: z.string().optional().or(z.literal("")),
      complement: z.string().optional().or(z.literal("")),
      neighborhood: z.string().optional().or(z.literal("")),
      city: z.string().optional().or(z.literal("")),
      state: z.string().length(2).optional().or(z.literal("")),
      zipCode: z
        .string()
        .regex(/^\d{5}-?\d{3}$/)
        .optional()
        .or(z.literal("")),
      country: z.string().default("BR"),
    })
    .optional(),

  // Commercial information
  cnpj: z
    .string()
    .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
      message: "Invalid CNPJ format",
    })
    .optional()
    .or(z.literal("")),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "Invalid CPF format" })
    .optional()
    .or(z.literal("")),
  website: z
    .union([z.string().url({ message: "Invalid URL" }).or(z.literal(""))])
    .optional(),
  linkedin: z
    .union([z.string().url({ message: "Invalid URL" }).or(z.literal(""))])
    .optional(),

  // contact
  secundaryEmail: z
    .string()
    .email({ message: "Invalid email" })
    .optional()
    .or(z.literal("")),
  secundaryPhone: z.string().optional().or(z.literal("")),

  // Dates and values
  hiringDate: z.date().optional(),
  nextDueDate: z.date().optional(),
  lastContact: z.date().optional(),
  monthlyAmount: z.string().optional(),

  // Payment Settings
  paymentMethod: z
    .enum(["credit_card", "boleto", "pix", "transfer"])
    .optional(),

  // Notes
  notes: z.string().optional(),
});

export const CreateClientSchema = ClientSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateClientSchema = ClientSchema.partial().omit({
  id: true,
  createdAt: true,
});
