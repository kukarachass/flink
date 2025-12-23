import BackButton from "@/components/ui/backBtn";
import SocialAuth from "@/components/SocialAuth";
import Input from "@/components/Input";
import PasswordInput from "@/components/PassInput";
import Link from "next/link";
import HelpBanner from "@/components/ui/HelpBanner";
import Divider from "@/components/ui/Divider";

export default function SignUpPage() {
    return (
        <div className="flex flex-col min-h-screen gap-10">
            <div className="flex flex-col gap-10 max-w-96 m-auto w-full">
                <BackButton/>

                <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3.5">
                        <h2 className="text-3xl font-bold">Create an account</h2>
                        <span className="text-muted">An account is created very quickly.</span>
                    </div>

                    <SocialAuth/>

                    <Divider/>

                    <div className="flex flex-row gap-2.5">
                        <Input name="firstname" placeholder="First Name" required/>
                        <Input name="surname" placeholder="Surname" required/>
                    </div>

                    <Input name="email" placeholder="Email" required/>
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