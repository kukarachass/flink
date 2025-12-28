import { ProfileView, PROFILE_VIEWS } from "./profile.types";

const BASE = "/account/profile";

export function getProfileUrl(view?: ProfileView) {
    if (!view || view === PROFILE_VIEWS.OVERVIEW) {
        return BASE;
    }

    return `${BASE}?view=${view}`;
}