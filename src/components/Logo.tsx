import { twMerge } from 'tailwind-merge';

interface LogoProps {
    className?: string;
    variant?: 'dark' | 'light';
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
    const textColor = variant === 'dark' ? 'text-primary' : 'text-white';

    return (
        <div className={twMerge("flex items-center gap-2", className)}>
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 md:w-10 md:h-10 text-secondary"
            >
                <path
                    d="M6 10H26L28 26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26L6 10Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 14V8C10 4.68629 12.6863 2 16 2C19.3137 2 22 4.68629 22 8V14"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 18V20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
            </svg>
            <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight ${textColor}`}>
                <span className="italic">One</span>Bag.
            </span>
        </div>
    );
}
