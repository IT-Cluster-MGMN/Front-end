/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        "bg-box-shadow": "background-color, box-shadow",
      },
      transitionDuration: {
        300: "0.3s",
      },
      boxShadow: {
        custom: "2px 2px 5px #888888",
      },
      colors: {
        white: "#fff",
        gray: {
          100: "rgba(255, 255, 255, 0.8)",
          200: "rgba(12, 12, 13, 0.9)",
        },
        black: "#000",
        darkgrey: "rgba(37,37,37,1)",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        inter: "Inter",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
