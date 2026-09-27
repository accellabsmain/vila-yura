import { z } from "zod";

export const getContactSchema = (t?: Record<string, string>) => z.object({
  name: z.string().min(2, t?.name || "Nama minimal 2 karakter"),
  email: z.string().email(t?.email || "Email tidak valid"),
  subject: z.string().min(5, t?.subject || "Subjek minimal 5 karakter"),
  message: z.string().min(10, t?.message || "Pesan minimal 10 karakter"),
});

// For generic type referencing without resolving translations
export const baseContactSchema = z.object({
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string(),
});

export type ContactFormData = z.infer<typeof baseContactSchema>;
