/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'fadeIn': 'fadeIn 0.8s ease-in-out',
                'shooting-star': 'shootingStar 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                shootingStar: {
                    '0%': {
                        transform: 'translateX(0) translateY(0)',
                        opacity: '0'
                    },
                    '10%': {
                        opacity: '1'
                    },
                    '90%': {
                        transform: 'translateX(100px) translateY(100px)',
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '0'
                    },
                }
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],

}