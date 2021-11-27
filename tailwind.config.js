const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: {
        content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
        options: {}
    },
    theme: {
        theme: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                gray: colors.coolGray,
                blue: colors.lightBlue,
                red: colors.rose,
                pink: colors.fuchsia,
            },
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            extend: {
                spacing: {
                    '128': '32rem',
                    '144': '36rem',
                },
                borderRadius: {
                    '4xl': '2rem',
                }
            },
            borderRadius: {
                'none': '0',
                'sm': '.125rem',
                DEFAULT: '.25rem',
                'lg': '.5rem',
                'full': '9999px',
            },
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ],
};