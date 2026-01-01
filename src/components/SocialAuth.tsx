import Image from "next/image";
import {signIn} from "@/lib/auth-client.ts";
import {toast} from "sonner";

export default function SocialAuth() {
    async function handleSocialSignIn() {
        const {error} = await signIn.social({
            provider: "google",
            callbackURL: "/", // После логина вернет сюда
        });

        if(error){
            toast.error(error.message || "Something went wrong");
        }
    }
    return (
        <div className="flex flex-col gap-2">
            <div
                className="flex flex-row items-center justify-center gap-3.5 w-full rounded-2xl text-center p-4 bg-neutral-900 cursor-pointer">
                <Image width="24" height="24" src="/apple.svg" alt="apple"/>
                <span className="font-bold text-white">Continue with Apple</span>
            </div>
            <button type="button" onClick={handleSocialSignIn}
                className="flex flex-row items-center justify-center gap-3.5 w-full rounded-2xl text-center p-4 bg-[var(--muted-bg)] cursor-pointer">
                <Image width="24" height="24" src="/google.svg" alt="google"/>
                <span className="font-bold text-[var(--text)]">Continue with Google</span>
            </button>
        </div>
    )
}