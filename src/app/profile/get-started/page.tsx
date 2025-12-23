import Link from "next/link";

export default function GetStartedPage() {
    return (
        <div className="flex flex-col justify-between w-full h-full items-center " >
            <div className="flex flex-col gap-8 max-w-96 m-auto">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--text)]">Before we go any further...</h1>
                </div>
                <div>
                    <span className="text-[var(--text-muted)]">To place your order, you'll need to log in with your Flink account. If you don't have one yet, you cancreate one here.</span>
                </div>
                <div className="flex flex-col gap-4">
                    <Link href="/profile/sign-up" className="w-full bg-[var(--primary)] text-center p-4 rounded-2xl font-bold text-white text-[16px]">
                        Create an account
                    </Link>
                    <Link href="/profile/sign-in" className="w-full bg-[var(--primary-light)] text-center p-4 rounded-2xl font-bold text-[var(--primary)] text-[16px]">
                        Login
                    </Link>
                </div>
            </div>
        </div>

    )
}