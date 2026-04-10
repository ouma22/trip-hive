import { z } from "zod";

export const genderSchema = z.enum(["homme", "femme", "autre"]);

export const waitlistBodySchema = z.object({
  firstName: z.string().min(1, "Prénom requis").max(120),
  lastName: z.string().min(1, "Nom requis").max(120),
  email: z.string().email("Email invalide").max(320),
  gender: genderSchema,
});

export type WaitlistBody = z.infer<typeof waitlistBodySchema>;

export const loginBodySchema = z.object({
  password: z.string().min(1, "Mot de passe requis"),
});

export type LoginBody = z.infer<typeof loginBodySchema>;
