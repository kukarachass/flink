import Button from "@/components/ui/Button.tsx";
import Link from "next/link";

export default function OrdersOverview(){
    return (
        <div className="max-w-[800px] w-full flex flex-col gap-6 pb-6 text-center items-center">
            <div>
                <h1 className="font-bold text-[var(--text)] text-2xl">Haven't ordered anything yet?</h1>
                <span className="text-[var(--text-muted)]">Have groceries delivered directly to you </span>
            </div>

            <Link className="max-w-52 bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 rounded-xl" href="/">Browse products</Link>
        </div>
    )
}