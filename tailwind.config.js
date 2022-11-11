/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",

          secondary: "#19d3ae",

          accent: "#71e8a4",

          neutral: "#252F3C",

          "base-100": "#F8F8FC",

          info: "#5AAEE2",

          success: "#1BC562",

          warning: "#975107",

          error: "#E84630",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
