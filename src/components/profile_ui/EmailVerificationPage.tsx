import Link from "next/link";

export default function EmailVerificationPage() {
    return (
        <div className="max-w-[350px] w-full flex flex-col gap-4 pb-6 items-center">
            <h1 className="font-bold text-[var(--text)] text-2xl">Email is successfully verified!</h1>
            <Link className="text-center w-full bg-[var(--primary)] text-white font-bold p-2 rounded-xl" href="/">Go shopping</Link>
        </div>
    );
}