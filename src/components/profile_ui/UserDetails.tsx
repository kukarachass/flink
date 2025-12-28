"use client"

import BackButton from "@/components/ui/backBtn.tsx";
import ProfileSVG from "@/svg/ProfileSVG.tsx";
import {useSession} from "@/lib/auth-client.ts";
import Link from "next/link";
import {PROFILE_VIEWS} from "@/features/profile/profile.types.ts";
import ArrowSVG from "@/svg/ArrowSVG.tsx";
import EmailSVG from "@/svg/EmailSVG.tsx";
import PhoneSVG from "@/svg/PhoneSVG.tsx";
import {getProfileUrl} from "@/features/profile/profile.routes.ts";

export default function UserDetails() {
    const { data, isPending } = useSession()
    if (isPending) return <>Loading...</>
    return (
        <div className="max-w-[800px] w-full flex flex-col gap-8 pb-6">
            <BackButton href="/account/profile"/>
            <div className="flex flex-col gap-3 w-full">
                <h1 className="font-bold text-[var(--text)] text-[20px]">My account</h1>

                <div className="flex flex-col gap-3">
                    <Link href={getProfileUrl(PROFILE_VIEWS.EDIT_NAME)} className="group flex flex-row cursor-pointer items-center justify-between border-b border-gray-200 pb-2">
                        <div className="group flex flex-row items-center gap-4 ">
                            <ProfileSVG className="group-hover:text-[var(--primary)]"/>
                            <div className="flex flex-col">
                                <span className="font-medium text-[var(--text)] text-[16px] group-hover:text-[var(--primary)]">Name</span>
                                <span className="text-var(--text)] text-[13px] group-hover:text-[var(--primary)]">{data?.user.name}</span>
                            </div>
                        </div>
                        <ArrowSVG className="group-hover:text-[var(--primary)]"/>
                    </Link>

                    <div className="group flex flex-row cursor-pointer items-center justify-between border-b border-gray-200 pb-2">
                        <div className="group flex flex-row items-center gap-4 ">
                            <EmailSVG className="group-hover:text-[var(--primary)]"/>
                            <div className="flex flex-col">
                                <span className="font-medium text-[var(--text)] text-[16px] group-hover:text-[var(--primary)]">Email</span>
                                <span className="text-var(--text)] text-[13px] group-hover:text-[var(--primary)]">{data?.user.email}</span>
                            </div>
                        </div>
                        <ArrowSVG className="group-hover:text-[var(--primary)]"/>
                    </div>

                    <Link href={PROFILE_VIEWS.EDIT_PHONE} className="group flex flex-row cursor-pointer items-center justify-between border-b border-gray-200 pb-2">
                        <div className="group flex flex-row items-center gap-4 ">
                            <PhoneSVG className="group-hover:text-[var(--primary)]"/>
                            <div className="flex flex-col">
                                <span className="font-medium text-[var(--text)] text-[16px] group-hover:text-[var(--primary)]">Mobile number</span>
                                <span className="text-var(--text)] text-[13px] group-hover:text-[var(--primary)]">Add your number to place an order</span>
                            </div>
                        </div>
                        <ArrowSVG className="group-hover:text-[var(--primary)]"/>
                    </Link>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}