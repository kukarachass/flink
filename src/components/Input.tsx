import React from "react";

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className={`peer w-full rounded-lg border border-gray-300 px-4 py-2 pr-11 text-base
                       focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all ${props.className}`}
        />
    );
});

Input.displayName = "Input";
export default Input;