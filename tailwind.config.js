/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                neu1: '-5px -5px 15px 2px rgb(0 0 0 / 0.1)',
                neu2: '-5px -5px 10px 2px rgb(0.9 0.9 0.9 / 0.1)',
                innerneu1: 'inset -5px -5px 10px 2px rgb(0.9 0.9 0.9 / 1)',
                innerneu2: 'inset -5px -5px 15px 2px rgb(0 0 0 / 0.1)'
              },
        },
    },
    plugins: [],
}
