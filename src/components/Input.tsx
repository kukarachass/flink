interface Props{
    name: string,
    placeholder: string,
    required: boolean,
}

export default function Input({ name, placeholder, required}: Props ) {
    return (
        <input
            type="email"
            name={name}
            placeholder={placeholder}
            required={required}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-11 text-sm
                   focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
        />
    )
}