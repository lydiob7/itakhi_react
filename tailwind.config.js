/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            borderWidth: {
                1: "1px"
            },
            colors: {
                wine: "#6C2636",
                lile: "#DFB9F9",
                lemon: "#E0FB00",
                white: "#FFFFFF",
                oldWhite: "#F9FFFB",
                gray: "#E5EAE7",
                black: "#171717",
                lightBlack: "#2C2C2C"
            }
        }
    },
    plugins: []
};
