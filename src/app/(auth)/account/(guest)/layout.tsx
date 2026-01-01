import React from "react";
import {getServerSession} from "@/lib/get-session.ts";
import {redirect} from "next/navigation";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();
    const user = session?.user;

    if (user){
        redirect("/shop");
    }

    return children;
}