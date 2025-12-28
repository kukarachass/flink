import { createAuthClient } from 'better-auth/react'
import { inferAdditionalFields } from "better-auth/client/plugins";
import {nextCookies} from "better-auth/next-js";
import {auth} from "@/lib/auth.ts";

export const { signIn, signUp, signOut, useSession, sendVerificationEmail, requestPasswordReset, resetPassword } = createAuthClient({
    plugins: [
        inferAdditionalFields<typeof auth>(),
        nextCookies(),
    ]
})