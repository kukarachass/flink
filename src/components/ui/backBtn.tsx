import Image from "next/image";
import Link from "next/link";

export default function BackButton({ href }: { href: string }) {
    return (
        <Link href={href} className="flex flex-row items-center text-[var(--text-muted)] w-fit">
            <Image width="16" height="16" src="/arrow.svg" alt="back"/>
            Back
        </Link>
    )
}