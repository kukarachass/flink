import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-row w-full justify-between p-6 bg-[var(--muted-bg)]">
            <div>
                <Image width="110" height="30" src="/logo.svg" alt="Logo"/>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="font-bold text-[var(--text)] text-lg">About</h3>
                <div className="flex flex-col gap-3.5">
                    <span>Working at HQ - Join Us</span>
                    <span>Flink Hubs - Become a Delivery Person</span>
                    <span>Flink Hubs - Become an Ops Associate</span>
                    <span>FAQ</span>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h3 className="font-bold text-[var(--text)] text-lg">Social</h3>
                <div className="flex flex-col gap-3.5">
                    <Image width="30" height="30" src="/facebook.svg" alt="Logo"/>
                    <Image width="30" height="30" src="/instagram.svg" alt="Logo"/>
                    <Image width="30" height="30" src="/tiktok.svg" alt="Logo"/>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h3 className="font-bold text-[var(--text)] text-lg">Apps</h3>
                <div className="flex flex-col gap-3.5">
                    <Image width="145" height="40" src="/googlePlay.svg" alt="Logo"/>
                    <Image width="145" height="40" src="/appStore.svg" alt="Logo"/>
                </div>
            </div>
        </div>
    )
}