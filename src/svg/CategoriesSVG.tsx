export default function CategoriesSVG({className}: { className?: string }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M21 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M21 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    );
}