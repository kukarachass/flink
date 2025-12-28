"use client";

import { useSearchParams } from "next/navigation";
import { profileViewMap } from "@/features/profile/profile.views";
import { PROFILE_VIEWS, ProfileView } from "@/features/profile/profile.types";

export default function ProfilePage() {
    const searchParams = useSearchParams();
    const view =
        (searchParams.get("view") as ProfileView | null) ??
        PROFILE_VIEWS.OVERVIEW;

    return profileViewMap[view] ?? profileViewMap[PROFILE_VIEWS.OVERVIEW];
}