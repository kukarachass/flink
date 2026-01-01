import Input from "@/components/Input.tsx";
import Button from "@/components/ui/Button.tsx";
import BackButton from "@/components/ui/backBtn.tsx";

export default function EditUserName() {
    return (
        <div className="max-w-[380px] w-full flex flex-col gap-6 pb-6">
            <BackButton href={"/account/profile"}/>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[var(--text)] text-2xl">Name</h1>
                <span className="text-[var(--text-muted)]">Enter the name you want to use.</span>
            </div>
            <form className="flex flex-col gap-3">
                <div className="relative">
                    <Input
                        id="name"
                        name="name"
                        placeholder="First Name"
                        className="placeholder-transparent px-4 pb-2 pt-6" // Скрываем родной плейсхолдер, чтобы логика peer работала корректно
                    />
                    <label
                        htmlFor="name"
                        className="absolute left-4 top-2 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]
                       transition-all duration-200
                       opacity-0 peer-focus:opacity-100 peer-[:not(:placeholder-shown)]:opacity-100"
                    >
                        First Name
                    </label>

                    {/* Имитация плейсхолдера, который уходит, когда появляется лейбл */}
                    <span className="pointer-events-none absolute left-4 top-4 text-sm text-gray-400 transition-all peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden">First Name</span>
                </div>

                <div className="relative">
                    <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        className="placeholder-transparent px-4 pb-2 pt-6" // Скрываем родной плейсхолдер, чтобы логика peer работала корректно
                    />
                    <label
                        htmlFor="lastName"
                        className="absolute left-4 top-2 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]
                       transition-all duration-200
                       opacity-0 peer-focus:opacity-100 peer-[:not(:placeholder-shown)]:opacity-100"
                    >
                        Last Name
                    </label>

                    {/* Имитация плейсхолдера, который уходит, когда появляется лейбл */}
                    <span className="pointer-events-none absolute left-4 top-4 text-sm text-gray-400 transition-all peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden">Last Name</span>
                </div>
                <Button text={"Edit"} style={"primary"}/>

            </form>

        </div>
    )
}