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
        },
        fontFamily: {
            inter: ["Inter"],
            anton: ["Anton"]
        },
        fontSize: {
            xs: ["0.75rem", "0.875rem"],
            sm: ["0.875rem", "1.5rem"],
            base: "1rem",
            xl: ["1.125rem", "1.875rem"],
            "2xl": ["1.25rem", "2rem"],
            "3xl": ["2rem", "2.5rem"],
            "4xl": ["2.25rem", "3rem"],
            "5xl": ["3rem", "3.5rem"],
            "6xl": ["3.5rem", "4rem"],
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem"
        }
    },
    plugins: []
};
