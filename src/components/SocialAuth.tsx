import Image from "next/image";

export default function SocialAuth() {
    return (
        <div className="flex flex-col gap-2">
            <div
                className="flex flex-row items-center justify-center gap-3.5 w-full rounded-2xl text-center p-4 bg-neutral-900 cursor-pointer">
                <Image width="24" height="24" src="/apple-logo.svg" alt="apple"/>
                <span className="font-bold text-white">Continue with Apple</span>
            </div>
            <div
                className="flex flex-row items-center justify-center gap-3.5 w-full rounded-2xl text-center p-4 bg-[var(--muted-bg)] cursor-pointer">
                <Image width="24" height="24" src="/google.svg" alt="apple"/>
                <span className="font-bold text-[var(--text)]">Continue with Google</span>
            </div>
        </div>
    )
}