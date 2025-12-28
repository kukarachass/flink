"use client"

import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {resetPasswordSchema, ResetPasswordValues} from "@/lib/validators/ResetPasswordSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import PasswordInput from "@/components/PassInput.tsx";
import Button from "@/components/ui/Button.tsx";
import {resetPassword} from "@/lib/auth-client.ts";
import {toast} from "sonner";

interface ResetPasswordProps {
    token: string;
}

export default function ResetPasswordForm({token}: ResetPasswordProps) {
    const router = useRouter();
    const form = useForm<ResetPasswordValues>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {newPassword: ""},
    });
    if (!token) {
        return <div>Invalid or expired link</div>;
    }

    async function onSubmit({newPassword}: ResetPasswordValues) {
        const {error} = await resetPassword({
            newPassword,
            token
        });

        if (error) {
            toast.error(error.message || "Something went wrong");
        } else {
            toast.success("Password reset successfully!");
            setTimeout(() => {
                router.push("/account/sign-in")
            }, 3000);
            form.reset();
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <PasswordInput {...form.register("newPassword")}/>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[var(--text-muted)] marker:text-[var(--primary)]">
                    <li>Minimum 8 characters</li>
                    <li>Upper & lowercase letters</li>
                    <li>At least one number</li>
                    <li>One special character</li>
                </ul>
            </div>

            <Button text={"Save"} style={"primary"}/>
        </form>
    )
}