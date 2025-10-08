import { z } from "zod";

const MAX_FILE_SIZE = 5000000;

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
  email: z.string().email({ message: "Invalid email" }),
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
  avatar: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Image size should be less than 5MB.",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          file.type,
        ),
      { message: "Only .jpg, .jpeg, .png and .webp formats are supported." },
    )
    .optional(),
  address: z
    .object({
      street: z.string().optional(),
      number: z.string().optional(),
      complement: z.string().optional(),
      neighborhood: z.string().optional(),
      city: z.string().optional(),
      state: z.string().length(2).optional(),
      zipCode: z
        .string()
        .regex(/^\d{5}-?\d{3}$/)
        .optional(),
      country: z.string().default("BR"),
    })
    .optional(),

  // Commercial information
  cnpj: z
    .string()
    .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
      message: "Invalid CNPJ format",
    })
    .optional(),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "Invalid CPF format" })
    .optional(),
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
  hiringDate: z.coerce.date().optional(),
  monthlyAmount: z.string().optional(),
  nextDueDate: z.coerce.date().optional(),
  lastContact: z.coerce.date().optional(),

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
