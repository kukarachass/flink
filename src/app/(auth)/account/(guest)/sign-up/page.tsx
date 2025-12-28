"use client";

import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import BackButton from "@/components/ui/backBtn";
import SocialAuth from "@/components/SocialAuth";
import Input from "@/components/Input";
import PasswordInput from "@/components/PassInput";
import HelpBanner from "@/components/ui/HelpBanner";
import Divider from "@/components/ui/Divider";

import {signUp} from "@/lib/auth-client";
import {SignUpFormValues, signUpSchema} from "@/lib/validators/signUpSchema.ts";
import {useState} from "react";
import Link from "next/link";


export default function SignUpPage() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        mode: "onTouched"
    });

    async function onSubmit(data: SignUpFormValues) {
        setError(null);

        const { error } = await signUp.email({
            email: data.email,
            password: data.password,
            name: data.name,
        });

        if (error){
            setError(error.message || "Something went wrong.");
        } else{
            router.push("/");
        }

    }

    return (
        <div className="flex flex-col gap-10 min-h-screen">
            <div className="flex flex-col gap-10 max-w-96 m-auto w-full">
                <BackButton href={"/account/get-started"}/>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3.5">
                        <h2 className="text-3xl font-bold text-[var(--text)]">Create an account</h2>
                        <span className="text-[var(--text-muted)]">An account is created very quickly.</span>
                    </div>

                    <SocialAuth/>
                    <Divider/>

                    {/* NAME */}
                    <div className="flex flex-col gap-1">
                        <Input type="text"
                               placeholder="Full Name"
                               {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-xs text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-1">
                        <Input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-xs text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* PASSWORD */}
                    <div className="flex flex-col gap-3">
                        <PasswordInput placeholder="Password" {...register("password")} />
                        {errors.password && (
                            <p className="text-xs text-red-500">
                                {errors.password.message}
                            </p>
                        )}

                        <ul className="list-disc pl-5 space-y-1 text-xs text-[var(--text-muted)] marker:text-[var(--primary)]">
                            <li>Minimum 8 characters</li>
                            <li>Upper & lowercase letters</li>
                            <li>At least one number</li>
                            <li>One special character</li>
                        </ul>


                        <span className="text-center text-xs text-[var(--text-muted)]">By creating an account, you agree to our Terms and Conditions</span>
                    </div>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[var(--primary)] text-white p-4 rounded-2xl font-bold disabled:opacity-50"
                    >
                        {isSubmitting ? "Creating..." : "Create account"}
                    </button>
                    <span className="text-[var(--text-muted)] text-center">
                        Already have an account? <Link className="text-[var(--primary)]" href="/account/sign-in">Sign-in</Link>
                    </span>
                </form>
            </div>

            <div className="mt-auto">
                <HelpBanner/>
            </div>
        </div>
    );
}