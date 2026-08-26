import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().max(150).optional(),
  message: z.string().min(10, "Message should be at least 10 characters").max(5000),
  // Honeypot field — real users never fill this in. Bots often do.
  company: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
