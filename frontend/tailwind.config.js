/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overlock: ["Overlock", "serif"],
      },
      colors: {
        primary: "#006D77",
        secondary: "#83C5BE",
        button : "#4DA1A9",
        success: "#38A169",
        danger: "#E53E3E",
        warning: "#F6AD55",
      },
      fontWeight: {
        normal: "400",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
