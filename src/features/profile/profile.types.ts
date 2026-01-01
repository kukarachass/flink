export const PROFILE_VIEWS = {
    OVERVIEW: "overview",
    USER_DETAILS: "user-details",
    EDIT_NAME: "edit-name",
    EDIT_PHONE: "edit-phone",
    PAYMENT_METHODS: "payment-methods",
    VERIFICATION_EMAIL: "verification-email",
    EMAIL_VERIFIED: "email-verified",
} as const;

export type ProfileView =
    (typeof PROFILE_VIEWS)[keyof typeof PROFILE_VIEWS];