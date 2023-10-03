/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            backgroundImage: {
                'gradient-travelers': 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
                'gradient-travelers2': 'linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
                'gradient-itemCardTour': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 54.17%, #000 100%)',
                'gradient-header-detail': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 38.46%, #000 98.99%)',
                'gradient-banner':
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.00) 50.35%, #000 91.33%)',
                'gradient-greatTrips':
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.76) 60.94%, #FFF 100%)',
                'gradient-detailTourRes':
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.50) 100%)',
            },
            colors: {
                'gray-scale-90': 'var(--gray-scale-90)',
                'gray-scale-80': 'var(--gray-scale-80)',
                'primary-80': 'var(--primary-80)',
                'primary-70': 'var(--primary-70)',
                'gray-scale-50': 'var(--gray-scale-50)',
                'gray-scale-20': 'var(--gray-scale-20)',
                'gray-scale-5': 'var(--gray-scale-5)',
                'primary-50': 'var(--primary-50)',
                'primary-5': 'var(--primary-5)',
                'secondary-green-600': 'var(--secondary-green-600)',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            boxShadow: {
                slideTrave: '0px 4px 6px 0px rgba(0, 0, 0, 0.06)',
                btnTravel: '0px 4px 16px 0px rgba(0, 0, 0, 0.06)',
                itemCardTour: '0px 0px 20px 0px rgba(0, 0, 0, 0.12)',
                boxTour: '0px 4px 12px 0px rgba(0, 0, 0, 0.24)',
                btn: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            },
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                roboto: ['var(--font-roboto)'],
                tomatoes: ['var(--font-tomatoes)'],
                heavitas: ['var(--font-heavitas)'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
