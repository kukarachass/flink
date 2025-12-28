import ProfileNav from "@/components/ProfileNav.tsx";
import {redirect} from "next/navigation";
import {getServerSession} from "@/lib/get-session.ts";

export default async function ProfileLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();
    const user = session?.user;

    if (!user) {
        redirect("/account/get-started");
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="relative -mx-8 -my-8 bg-pink-100 py-10">
                <div className="max-w-7xl px-8">
                    <h1 className="text-3xl font-bold text-pink-600">
                        Hey, welcome back{`, ${user.name}`}!
                    </h1>
                </div>
            </div>

            <ProfileNav/>

            <div className="flex justify-center">
                { children }
            </div>
        </div>
    )
}