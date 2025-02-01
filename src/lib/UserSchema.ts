import { z } from 'zod';

export const UserSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().nonempty(),
    // password: z.string().nonempty()
});

export type UserData = z.infer<typeof UserSchema>;
