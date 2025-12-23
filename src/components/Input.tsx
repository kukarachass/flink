interface Props{
    name: string,
    placeholder: string,
    required: boolean,
    type: string,
}

export default function Input({ name, placeholder, required, type}: Props ) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-11 text-sm
                   focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
        />
    )
}