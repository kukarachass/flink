import { z } from "zod";

// В файле validators/passwordSchema.ts
export const passwordValidation = z
    .string()
    .min(8, "Minimum 8 characters")
    .max(32, "Maximum 32 characters")
    .regex(/[a-z]/, "Must contain a lowercase letter")
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[0-9]/, "Must contain a number")
    .regex(/[^a-zA-Z0-9]/, "Must contain a special character");

export const passwordSchema = z.object({
    password: passwordValidation,
});