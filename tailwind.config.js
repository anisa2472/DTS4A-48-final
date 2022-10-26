/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
        colors: {
            'dark' : '#283c44',
            'orange-1': '#f1725c',
            'orange-2': '#f8a073',
            'gothic': '#6d848a'
        }
    },
    plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};
