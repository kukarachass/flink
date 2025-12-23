import Image from "next/image";

export default function HelpBanner(){
    return(
        <div className="flex flex-col gap-2 w-full rounded-4xl bg-[var(--muted-bg)] p-8 max-w-[1200px] justify-center m-auto">
            <div>
                <h2 className="font-medium text-[var(--text)]">Need Help?</h2>
            </div>
            <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-2 rounded-xl border border-blue-200 bg-white px-6 py-4 max-w-[400px]">
                    <div className="flex flex-row gap-8 items-center">
                        <Image width="48" height="48" src="/help-banner/banner1.svg" alt="Banner"/>
                        <span className="text-[11px]">Still have questions? You'll find all the answers here.</span>
                    </div>
                    <Image className="rotate-180" width="24" height="24" src="/arrow.svg" alt="Banner"/>
                </div>

                <div className="flex flex-row gap-2 rounded-xl border border-blue-200 bg-white px-6 py-4 max-w-[400px]">
                    <div className="flex flex-row gap-8 items-center">
                        <Image width="48" height="48" src="/help-banner/banner2.svg" alt="Banner"/>
                        <span className="text-[11px]">Are you missing something in our app, or is your favorite product missing? Let us know!</span>
                    </div>
                    <Image className="rotate-180" width="24" height="24" src="/arrow.svg" alt="Banner"/>
                </div>

                <div className="flex flex-row gap-2 rounded-xl border border-blue-200 bg-white px-6 py-4 max-w-[400px]">
                    <div className="flex flex-row gap-8 items-center">
                        <Image width="48" height="48" src="/help-banner/banner3.svg" alt="Banner"/>
                        <span className="text-[11px]">We're here for you! Contact customer service.</span>
                    </div>
                    <Image className="rotate-180" width="24" height="24" src="/arrow.svg" alt="Banner"/>
                </div>
            </div>
        </div>
    )
}