/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: "#1E293B",
                primaryLight: "#334155",
                primaryHover: "#64748B",
                primaryDark: "#0F172A",
                secondary: "#CA8A04",
                secondaryLight: "#FACC15",
                secondaryDark: "#854D0E",
                inputBg: "#94A3B8",
                text2: "#E2E8F0",
            },
        },
    },
    plugins: [],
};
