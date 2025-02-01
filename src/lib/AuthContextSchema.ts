import { z } from 'zod';
import { UserSchema } from './UserSchema';
import { SignInFormSchema } from './SignInFormSchema';

export const AuthContextSchema = z.object({
    isAuthenticated: z.boolean().default(false),
    userState: z.union([z.null(), UserSchema]),
    signIn: z.function()
        .args(SignInFormSchema)
        .returns(z.promise(
            z.object({ message: z.string() })
        ))
});

export type AuthContextType = z.infer<typeof AuthContextSchema>;