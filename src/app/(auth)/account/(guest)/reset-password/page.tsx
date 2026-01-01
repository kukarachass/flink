import {Metadata} from "next";
import ResetPasswordForm from "./reset-password-form.tsx";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Reset Password'
};

interface ResetPasswordPageProps {
    searchParams: Promise<{
        token: string;
    }>;
}

export default async function ResetPasswordPage({ searchParams }: ResetPasswordPageProps){
    const params = await searchParams;
    const token = params.token;

    console.log("Debug Params:", params); // Посмотри в консоль терминала, что реально приходит

    return(
        <main className="flex items-center justify-center py-4">
            {token ? (
                <ResetPasswordUI token={token}/>
            ): (
                <div className="text-red-600">
                    Token is missing for reset password
                </div>
            )}
        </main>
    )
}

interface ResetPasswordUIProps {
    token: string;
}

function ResetPasswordUI({ token }: ResetPasswordUIProps){
    return (
        <div className="max-w-[350px] m-auto w-full flex flex-col gap-8 pb-6">
            <h1 className="font-bold text-[var(--text)] text-3xl">Choose a new password</h1>
            <div className="flex flex-row items-center gap-3">
                <div className="bg-[var(--primary-light)] rounded-[99999px]">
                    <Image src="/profile/email.svg" alt="email" width="16" height="16"/>
                </div>
            </div>
            <ResetPasswordForm token={token}/>
        </div>
    )
}