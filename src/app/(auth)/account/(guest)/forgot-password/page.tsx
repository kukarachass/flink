"use client"

import BackButton from "@/components/ui/backBtn.tsx";
import Input from "@/components/Input.tsx";
import Button from "@/components/ui/Button.tsx";
import {useForm} from "react-hook-form";
import {forgotPasswordSchema, ForgotPasswordValues} from "@/lib/validators/forgotPasswordSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {requestPasswordReset} from "@/lib/auth-client.ts";
import {toast} from "sonner";

export default function ForgotPassword() {
    const form = useForm<ForgotPasswordValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {email: ""}
    });

    async function onSubmit({email}: ForgotPasswordValues) {
        const {error} = await requestPasswordReset({
            email,
            redirectTo: "/account/reset-password",
        });

        if (error) {
            toast.error(error.message || "Something went wrong");
        } else {
            toast.success("Reset password link was sent");
            form.reset();
        }
    }


    return (
        <div className="w-full max-w-96 m-auto flex flex-col gap-8">
            <div>
                <BackButton href={"/account/profile"}/>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl text-[var(--text)]">Forgot password? </h1>
                    <span className="text-[14px] text-[var(--text-muted)]"> No problem. Enter your e-mail address below and we will send you an e-mail within a few minutes with which a new password can be created. </span>
                </div>
                <div className="flex flex-col gap-4">
                    <Input {...form.register("email")}  placeholder="Email" name="email"/>
                    <Button style="primary" text="Forgot Password"/>
                </div>
            </form>
        </div>
    )
}