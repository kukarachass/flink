import Image from "next/image";
import BackButton from "@/components/ui/backBtn.tsx";

export default function PaymentMethods(){
    return (
        <div className="max-w-[800px] w-full flex flex-col gap-8 pb-6">
            <BackButton href={"/account/profile"}/>
            <h1 className="font-bold text-[var(--text)] text-xl">Payment Methods</h1>

            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-[var(--text)]">Add payment method</h2>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 p-2 bg-[#ebeefb] rounded-[8px]">
                        <Image src="/info.svg" alt="info" width="24" height="24"/>
                        <div>
                            <h3 className="font-medium text-[var(--text)]">Do you want to add a new card?</h3>
                            <span className="text-[var(--text-muted)]">You can't add tickets here yet, but don't worry – just add them at checkout, and they'll appear here once they're saved.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 border-b border-[#ebeefb]">
                        <div className="flex items-center gap-4 p-5">
                            <Image src="/applepay.svg" alt="info" width="40" height="26"/>
                            <span className="text-[var(--text)]">Apple Pay</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 border-b border-[#ebeefb]">
                        <div className="flex items-center gap-4 p-5">
                            <Image src="/ideal.svg" alt="info" width="40" height="26"/>
                            <span className="text-[var(--text)]">iDEAL</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}