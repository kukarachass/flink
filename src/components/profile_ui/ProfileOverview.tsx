"use client"

import {useRouter} from "next/navigation";
import {signOut, useSession} from "@/lib/auth-client";
import Link from "next/link";
import ProfileSVG from "@/svg/ProfileSVG.tsx";
import ArrowSVG from "@/svg/ArrowSVG.tsx";
import PaymentSVG from "@/svg/PaymentSVG.tsx";
import {PromoSVG} from "@/svg/PromoSVG.tsx";
import {PrivacySVG} from "@/svg/PrivacySVG.tsx";
import {TermsSVG} from "@/svg/TermsSVG.tsx";
import {AboutSVG} from "@/svg/AboutSVG.tsx";
import {getProfileUrl} from "@/features/profile/profile.routes.ts";
import {PROFILE_VIEWS} from "@/features/profile/profile.types.ts";
import Image from "next/image";
import {ResendEmailButton} from "@/components/ResendEmailButton.tsx";

export default function ProfileOverview() {
    const router = useRouter();
    const { data, isPending } = useSession();
    if (isPending) return <>Loading...</>

    const isEmailVerified = data?.user.emailVerified;
    const email = data?.user.email;

    if(!email){
        console.log("no email")
        return null;
    }


    const handleLogOut = async () => {
        await signOut();
        router.push("/");
    }

    return (
        <div className="max-w-[800px] w-full flex flex-col gap-10 pb-6">
            <div className="flex flex-row justify-between">
                <h1 className="font-bold text-[var(--text)] text-xl">Manage account</h1>
                <button onClick={handleLogOut} className="bg-none border-none text-[var(--primary)] cursor-pointer">
                    Log out
                </button>
            </div>

            {!isEmailVerified && (
                <div className="bg-[var(--attention-color)] flex flex-row justify-between items-center p-2 rounded-[8px]">
                    <div className="flex flex-row items-center gap-2">
                        <div>
                            <Image width="24" height="24" src="/profile/attention.svg" alt="attention"/>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[13px] font-bold text-[var(--text)]">Check your email</span>
                            <span className="text-[13px] font-medium text-[var(--text-muted)]">Please check your email address</span>
                        </div>
                    </div>

                    <ResendEmailButton email={email} style={"secondary"}/>
                </div>
            )}

            <div className="flex flex-col gap-5">
                <div
                    onClick={() =>
                        router.push(getProfileUrl(PROFILE_VIEWS.USER_DETAILS))
                    }
                    className="group flex flex-row justify-between border-b border-gray-200 pb-2 cursor-pointer"
                >
                    <div className="flex flex-row gap-3 items-center group-hover:text-[var(--primary)]">
                        <ProfileSVG className="group-hover:stroke-[var(--primary)]"/>
                        <span className="text-[var(--text)] group-hover:text-[var(--primary)]">My account</span>
                    </div>

                    <div>
                        <ArrowSVG className="text-[var(--text)] group-hover:text-[var(--primary)]" />
                    </div>
                </div>
                <div onClick={() => router.push(getProfileUrl(PROFILE_VIEWS.PAYMENT_METHODS))}
                     className="group flex flex-row justify-between cursor-pointer">
                    <div className="flex flex-row gap-3 items-center">
                        <PaymentSVG className="group-hover:text-[var(--primary)]" />

                        <span className="text-[var(--text)] group-hover:text-[var(--primary)]">Payment method</span>
                    </div>
                    <div>
                        <ArrowSVG className="text-[var(--text)] group-hover:text-[var(--primary)]" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-[var(--text)] text-xl">Offers</h1>
                <Link href="/" className="group flex flex-row justify-between">
                    <div className="flex flex-row gap-3 items-center">
                        <PromoSVG className="group-hover:stroke-[var(--primary)]"/>
                        <span className="text-[var(--text)] group-hover:text-[var(--primary)]">Codes</span>
                    </div>
                    <div>
                        <ArrowSVG className="text-[var(--text)] group-hover:text-[var(--primary)]" />
                    </div>
                </Link>
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-[var(--text)] text-xl">Legal & Privacy</h1>
                <Link href="/privacy" className="group flex flex-row justify-between border-b border-gray-200 pb-2   ">
                    <div className="flex flex-row gap-3 items-center">
                        <PrivacySVG className="group-hover:stroke-[var(--primary)]"/>
                        <span className="text-[var(--text)] group-hover:text-[var(--primary)]">Privacy Policy</span>
                    </div>
                    <div>
                        <ArrowSVG className="text-[var(--text)] group-hover:text-[var(--primary)]" />
                    </div>
                </Link>

                <Link href="/" className="group flex flex-row justify-between border-b border-gray-200 pb-2   ">
                    <div className="flex flex-row gap-3 items-center">
                        <TermsSVG className="group-hover:stroke-[var(--primary)]"/>
                        <span className="text-[var(--text)] group-hover:text-[var(--primary)]">General Terms and Conditions</span>
                    </div>
                    <div>
                        <ArrowSVG className="text-[var(--text)] group-hover:text-[var(--primary)]" />
                    </div>
                </Link>

                <Link href="/" className="group flex flex-row justify-between">
                    <div className="flex flex-row gap-3 items-center">
                        <AboutSVG className="group-hover:stroke-[var(--primary)]"/>
                        <span className="text-[var(--text)] group-hover:text-[var(--primary)]">Colophon</span>
                    </div>
                    <div>
                        <ArrowSVG className="text-[var(--text)] group-hover:text-[var(--primary)]" />
                    </div>
                </Link>
            </div>
        </div>
    )
}