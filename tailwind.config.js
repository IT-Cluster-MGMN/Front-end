/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.8)",
          "200": "rgba(12, 12, 13, 0.9)",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        inter: "Inter",
      },
    },
    fontSize: {
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
