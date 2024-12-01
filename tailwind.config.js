/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                primary: '#3490dc',
                secondary: '#ffed4a',
                accent: '#f6993f',
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                playfair: ["Playfair Display", "serif"],
            },
        },
    },
    plugins: [],
};
