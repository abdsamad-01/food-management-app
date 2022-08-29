/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'icon-bg': '#EA7C69',
                'light-icon-bg': '#faa273',
                'bg-dark-1': '#292938',
                'bg-dark-2': '#1F1D2B',
                'input-bg': '#2D303E',
                'input-bd': '#393C49'
            },
            width: {
                215: '215px',
                357: '357px',
                557: '557px',
            },
            minWidth: {
                155: '155px',
                190: '190px',
                215: '215px',
                240: '240px',
                256: '256px',
                327: '327px',
            },
            height: {
                300: '300px',
                557: '557px',
            },
            inset: {
                45: '45%',
                65: '65px',
            },
            spacing: {
                65: '65px',
            },
            flex: {
                2: '2 2 0%',
            },
            lineHeight: {
                70: '70px',
            },
            zIndex: {
                '-5': '-5',
                0: '0',
            },
        },
        screens: {
            lg: { max: '1800px' },
            xx: {max: '1255px'},
            md: { max: '990px' },
            sm: { max: '600px' },
            xs: { max: '400px' },
            minmd: '1700px',
            minlg: '2100px',
        },
        fontFamily: {
            dmSans: ['DM Sans'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

