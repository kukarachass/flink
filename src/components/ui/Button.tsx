import cn from "classnames";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    style: "primary" | "secondary";
}

export default function Button({text, onClick, style}: ButtonProps) {
    return (
        <button
            className={cn(`w-full font-bold p-4 rounded-2xl cursor-pointer`, {
                ["bg-[var(--primary-light)] text-[var(--primary)]"]: style === "secondary",
                ["bg-[var(--primary)] text-white"]: style === "primary",
            })}
            onClick={onClick}
        >
            {text}
        </button>
    )
}