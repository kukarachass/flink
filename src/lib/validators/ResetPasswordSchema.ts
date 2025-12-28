import { z } from "zod";

export const resetPasswordSchema = z.object({
    newPassword: z
        .string()
        .min(8, "Minimum 8 characters")
        .max(32, "Maximum 32 characters")
        .regex(/[a-z]/, "Must contain a lowercase letter")
        .regex(/[A-Z]/, "Must contain an uppercase letter")
        .regex(/[0-9]/, "Must contain a number")
        .regex(/[^a-zA-Z0-9]/, "Must contain a special character"),
});

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;