"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import BackButton from "@/components/ui/backBtn";
import SocialAuth from "@/components/SocialAuth";
import Input from "@/components/Input";
import PasswordInput from "@/components/PassInput";
import HelpBanner from "@/components/ui/HelpBanner";
import Divider from "@/components/ui/Divider";
import {signUp} from "@/lib/auth-client";

export default function SignUpPage() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.currentTarget);

        const res = await signUp.email({
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        });

        if (res.error) {
            setError(res.error.message || "Something went wrong.");
        } else {
            router.push("/dashboard");
        }
    }

    return (
        <div className="flex flex-col min-h-screen gap-10">
            <div className="flex flex-col gap-10 max-w-96 m-auto w-full">
                <BackButton/>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3.5">
                        <h2 className="text-3xl font-bold">Create an account</h2>
                        <span className="text-muted">An account is created very quickly.</span>
                    </div>

                    <SocialAuth/>

                    <Divider/>
                    <Input type="text" name="name" placeholder="First Name" required/>

                    {/*<div className="flex flex-row gap-2.5">*/}
                    {/*    <Input name="surname" placeholder="Surname" required/>*/}
                    {/*</div>*/}

                    <Input type="email" name="email" placeholder="Email" required/>
                    <div className="flex flex-col gap-3">
                        <PasswordInput name="password" required/>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-[var(--text-muted)] marker:text-[var(--primary)]">
                            <li>Minimum 8 characters</li>
                            <li>Upper & lowercase letters</li>
                            <li>At least one number</li>
                            <li>One special character</li>
                        </ul>
                        <span className="text-center text-xs text-[var(--text-muted)]">By creating an account, you agree to our Terms and Condtitions</span>
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <button
                        type="submit"
                        className="bg-[var(--primary)] text-white p-4 rounded-2xl font-bold cursor-pointer"
                    >
                        Create account
                    </button>
                </form>
            </div>
            <div className="mt-auto">
                <HelpBanner />
            </div>
        </div>
    );
}