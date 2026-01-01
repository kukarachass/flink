import Image from "next/image";
import Link from "next/link";

export default function BackButton({ href }: { href: string }) {
    return (
        <Link href={href} className="flex flex-row items-center text-[var(--text-muted)] w-fit">
            <Image className="pt-0.5" width="16" height="16" src="/back.svg" alt="back"/>
            Back
        </Link>
    )
}