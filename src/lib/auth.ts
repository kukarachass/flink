import {APIError, betterAuth} from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import prisma from '@/lib/prisma'
import {sendEmail} from "@/lib/email.ts";
import {createAuthMiddleware} from "@better-auth/core/api";
import {passwordSchema, passwordValidation} from "@/lib/validators/passwordSchema.ts";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql',
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }
    },

    emailAndPassword: {

        enabled: true,
        async sendResetPassword({ user, url }){
            await sendEmail({
                to: user.email,
                subject: "Reset your password",
                text: `Click the link to reset your password ${url}`,
            })
        }
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        async sendVerificationEmail({ user, url }){
            await sendEmail({
                to: user.email,
                subject: "Verify your email",
                text: `Click the link to verify your email ${url}`,
            })
        }
    },
    user: {
        additionalFields: {
            role: {
                type: 'string',
                input: false,
            }
        }
    },

    hooks: {
        before: createAuthMiddleware(async context => { // выполняется перед любым better auth действием
            if(context.path === '/sign-up/email' ||
                context.path === '/reset-password' ||
                context.path === '/change-password'
            ){
                console.log("хук с проверкой запустился")
                const password = context.body.password || context.body.newPassword
                const { error } = passwordValidation.safeParse(password); // Теперь сработает для строки
                if(error){
                    console.log("error came from hook check")
                    throw new APIError("BAD_REQUEST", {
                        message: "Password not strong enough"
                    }) // будет попадать в error.message и будет отображаться в ui
                }
            }
        }),
    }
})

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;