import Image from "next/image";
import Link from "next/link";
import PasswordInput from "@/components/PassInput";
import Input from "@/components/Input";
import HelpBanner from "@/components/ui/HelpBanner";
import BackButton from "@/components/ui/backBtn";
import SocialAuth from "@/components/SocialAuth";

export default function SignInPage() {
    return (
        <div className="flex flex-col gap-10 w-full h-full">
            <div className="flex flex-col gap-10 max-w-96 m-auto">
                <BackButton/>
                <div className="flex flex-col gap-5">
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
                            <Input/>
                            <PasswordInput/>
                        </div>
                        <div>
                            <Link href="/" className="font-medium text-[var(--primary)] text-xs">Forgot your
                                password?</Link>
                        </div>
                    </div>
                    <div>
                        <button
                            className="bg-[var(--primary)] text-white p-4 rounded-2xl text-center w-full font-bold cursor-pointer"
                        >
                            Login
                        </button>
                    </div>

                </div>
            </div>

            <div>
                <HelpBanner/>
            </div>
        </div>

    )
}