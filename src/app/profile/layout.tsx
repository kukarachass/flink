import React from "react";

interface Props {
    children: React.ReactNode;
}
export default function ProfileLayout({ children }: Props) {
    return (
        <div>
            {children}
        </div>
    );
}
