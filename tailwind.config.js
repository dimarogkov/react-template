/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#222831',
                green: '#52881a',
                greenLight: '#eef9e2',
                blue: '#5356ff',
                blueLight: '#d4d5ff',
                yellow: '#ff9d23',
                yellowLight: '#ffe6c8',
                red: '#f1003a',
                redLight: '#ffc9d6',
                gray: '#e5e5e5',
                white: '#fff',
            },
            animation: {
                showToastAnimation: 'showToast 0.3s ease-in-out',
                hideToastAnimation: 'hideToast 0.3s ease-in-out',
            },
            keyframes: {
                showToast: {
                    from: { opacity: '0', transform: 'translateY(25%)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                hideToast: {
                    from: { opacity: '1', transform: 'translateY(0)' },
                    to: { opacity: '0', transform: 'translateY(25%)' },
                },
            },
        },
    },
    plugins: [require('daisyui')],
};
