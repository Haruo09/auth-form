import { z } from 'zod';

export const SignInFormSchema = z.object({
    email: z.string()
        .nonempty("Required.")
        .email("Field must be in email format (ex: example@ex.com)"),

    password: z.string()
        .nonempty("Required")
        .min(6, "Password must have at least 6 characters.")
});

export type SignInFormData = z.infer<typeof SignInFormSchema>;