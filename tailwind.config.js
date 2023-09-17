/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-travelers': 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
            },
            colors: {
                'gray-scale-80': 'var(--gray-scale-80)',
                'primary-70': 'var(--primary-70)',
                'gray-scale-50': 'var(--gray-scale-50)',
                'primary-5': 'var(--primary-5)',
            },
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                roboto: ['var(--font-roboto)'],
            },
        },
    },
    plugins: [],
}
