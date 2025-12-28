import "server-only"
import {auth} from "@/lib/auth.ts";
import {headers} from "next/headers";
import {cache} from "react";

export const getServerSession = cache( async () => {
    console.log("getServerSession()");
    return await auth.api.getSession({ headers: await headers() });
})