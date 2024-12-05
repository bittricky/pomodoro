/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: {
          500: "#f87070",
        },
        cyan: {
          500: "#70f3f8",
        },
        violet: {
          500: "#d881f8",
        },
        dark: {
          900: "#1e213f",
          800: "#161932",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        timer:
          "50px 50px 100px 0px rgba(0, 0, 0, 0.25), -50px -50px 100px 0px rgba(73, 76, 107, 0.25)",
      },
    },
  },
  plugins: [],
};
