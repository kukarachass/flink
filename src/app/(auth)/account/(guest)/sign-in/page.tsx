"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PasswordInput from "@/components/PassInput";
import Input from "@/components/Input";
import HelpBanner from "@/components/ui/HelpBanner";
import BackButton from "@/components/ui/backBtn";
import SocialAuth from "@/components/SocialAuth";
import {signIn} from "@/lib/auth-client.ts";
import {SignInFormValues, signInSchema} from "@/lib/validators/signInSchema.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "sonner";

export default function SignInPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormValues>({
        resolver: zodResolver(signInSchema),
        mode: "onTouched", // Ошибки появятся, когда пользователь "потрогает" поле и уйдет с него
    });

    async function onSubmit(data: SignInFormValues) {
        const res = await signIn.email(data);

        if(res.error){
            toast.error(res.error.message || "Something went wrong.");
        } else{
            router.push("/");
            toast.success("Sign In successfully");
        }
    }

    return (
        <div className="flex flex-col gap-10 w-full h-full">
            <div className="flex flex-col gap-10 max-w-96 m-auto">
                <BackButton href={"/account/get-started"}/>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3.5">
                        <h2 className="font-bold text-[var(--text)] text-3xl">Welcome Back</h2>
                        <span className="font-medium text-[var(--text-muted)]">Please enter your details below to continue.</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <SocialAuth/>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-px bg-gray-200"/>
                            <span className="text-sm text-gray-400">or</span>
                            <div className="flex-1 h-px bg-gray-200"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-3">
                            <Input {...register("email")} name="email" type="email" placeholder="Email" required />
                            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                            <PasswordInput {...register(("password"))} placeholder="Password" name="password" required/>
                            {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                        </div>
                        <div>
                            <Link href="/account/forgot-password" className="font-medium text-[var(--primary)] text-xs">Forgot your
                                password?</Link>
                        </div>
                    </div>
                    <div>
                        <button
                            className="bg-[var(--primary)] text-white p-4 rounded-2xl text-center w-full font-bold cursor-pointer"
                        >
                            {isSubmitting ? "Logging in..." : "Login"}
                        </button>
                    </div>
                    <span className="text-[var(--text-muted)] text-center">
                        Don't have an account? <Link className="text-[var(--primary)]" href="/account/sign-up">Sign-up</Link>
                    </span>
                </form>
            </div>

            <div>
                <HelpBanner/>
            </div>
        </div>

    )
}