/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#222831',
                green: '#52881a',
                blue: '#5356ff',
                red: '#f1003a',
                gray: '#e5e5e5',
                white: '#fff',
            },
        },
    },
    plugins: [require('daisyui')],
};
