export function TermsSVG({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
        >
            <path
                d="M5.81984 3.80099L4.21984 19.801C4.1021 20.9784 5.02667 22 6.20992 22H16.2343C17.243 22 18.0938 21.2489 18.2189 20.2481L19.8786 6.97061C19.9551 6.3582 19.7446 5.74474 19.3082 5.30833L16.5857 2.58579C16.2106 2.21071 15.7019 2 15.1715 2H7.80992C6.78241 2 5.92208 2.77859 5.81984 3.80099Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M12 6H9" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16.25 11H10.25" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15.75 13.75H9.75" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15.25 16.5H9.25" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15.5 2L15 7H19.5" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}