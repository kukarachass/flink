import {useState} from "react";
import {sendVerificationEmail} from "@/lib/auth-client.ts";
import {toast} from "sonner";
import cn from "classnames";
import {getProfileUrl} from "@/features/profile/profile.routes.ts";
import {PROFILE_VIEWS} from "@/features/profile/profile.types.ts";

interface ResendEmailButtonProps {
    email: string;
    style: "secondary" | "primary"
}

export function ResendEmailButton({ email, style }: ResendEmailButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    async function resendVerificationEmail() {
        setIsLoading(true);

        const {error} = await sendVerificationEmail({
            email,
            callbackURL: `${getProfileUrl(PROFILE_VIEWS.VERIFICATION_EMAIL)}`
        });

        setIsLoading(false);
        if (error) {
            toast.error(error.message || "Something went wrong")
        } else {
            toast.success("Verification email send successfully.")
        }
    }

    return (
        <button
            className={cn("text-white cursor-pointer", {
                ["bg-[var(--primary)] font-bold p-4 rounded-xl"]: style === "primary",
                ["bg-[#EC9900] font-medium p-1 rounded-lg text-[13px]"]: style === "secondary",
            })}
            onClick={resendVerificationEmail}>
            {isLoading ? "Loading..." : "Resend verification"}
        </button>
    )
}