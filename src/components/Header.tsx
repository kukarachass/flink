'use client'

import Image from "next/image";
import CategoryDropdown from "@/components/DropDownBtn";
import {NavLink} from "@/components/NavLink";
import DiscoverSVG from "@/svg/DiscoverSVG";
import OfferSVG from "@/svg/OfferSVG";
import ProfileSVG from "@/svg/ProfileSVG";

export default function Header() {

    return (
        <div className="p-6 flex flex-col gap-7">
            <div className="flex flex-row items-center gap-9">
                <div>
                    <Image width="130" height="32" src="/logo.svg" alt="Logo"/>
                </div>

                <div className="flex flex-row items-center gap-2 bg-gray-100 px-3 py-1.5 w-fit rounded-2xl">
                    <Image width="15" height="15" src="/location.svg" alt="location"/>

                    <span className="text-[var(--text-muted)] font-bold">
                        Middenstraat 2, Utrecht
                    </span>
                </div>
            </div>

            <div className="flex flex-row items-center gap-3">
                <CategoryDropdown/>
                <NavLink href={"/"} icon={DiscoverSVG} variant={"discover"}>
                    Discover
                </NavLink>
                <NavLink href={"/offers"} icon={OfferSVG} offerIcon={true}>
                    Offers
                </NavLink>
                <NavLink href={"/account"} icon={ProfileSVG}>
                    Profile
                </NavLink>

            </div>
        </div>
    );
}