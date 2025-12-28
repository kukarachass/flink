import ProfileOverview from "@/components/profile_ui/ProfileOverview";
import UserDetails from "@/components/profile_ui/UserDetails";
import EditUserName from "@/components/profile_ui/EditUserName";
import EditPhoneNumber from "@/components/profile_ui/EditPhoneNumber";
import { PROFILE_VIEWS } from "./profile.types";
import PaymentMethods from "@/components/profile_ui/PaymentMethods.tsx";
import EmailVerificationPage from "@/components/profile_ui/EmailVerificationPage.tsx";

export const profileViewMap = {
    [PROFILE_VIEWS.OVERVIEW]: <ProfileOverview />,
    [PROFILE_VIEWS.USER_DETAILS]: <UserDetails />,
    [PROFILE_VIEWS.EDIT_NAME]: <EditUserName />,
    [PROFILE_VIEWS.EDIT_PHONE]: <EditPhoneNumber />,
    [PROFILE_VIEWS.PAYMENT_METHODS]: <PaymentMethods/>,
    [PROFILE_VIEWS.VERIFICATION_EMAIL]: <EmailVerificationPage/>,
} as const;