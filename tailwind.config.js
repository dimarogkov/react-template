module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                title: '#d4d4d4',
                text: '#a1a1a1',
                border: '#ffffff1a',
                yellow: '#facc15',
                green: '#52881a',
                red: '#ff6467',
                bg: '#0a0a0a',
            },
            animation: {
                enter: 'enter 0.2s forwards',
                leave: 'leave 0.2s forwards',
            },
            keyframes: {
                enter: {
                    '0%': { opacity: '0', visibility: 'hidden', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', visibility: 'visible', transform: 'translateY(0)' },
                },
                leave: {
                    '0%': { opacity: '1', visibility: 'visible', transform: 'translateY(0)' },
                    '100%': { opacity: '0', visibility: 'hidden', transform: 'translateY(20px)' },
                },
            },
        },
    },
    plugins: [require('daisyui')],
};
