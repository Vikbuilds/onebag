/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1e3a29", // Dark Green
                    light: "#2a4f38",
                    dark: "#14261b",
                },
                secondary: {
                    DEFAULT: "#d4c5a8", // Beige/Gold
                    light: "#e2d9c4",
                    dark: "#b8a680",
                },
                background: {
                    DEFAULT: "#f9f9f7", // Off-White
                    alt: "#e8f5e9", // Light Green
                },
                text: {
                    primary: "#1e3a29",
                    secondary: "#4a5d50",
                    light: "#f9f9f7",
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
