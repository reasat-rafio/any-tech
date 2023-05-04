/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          ...defaultTheme.fontFamily.sans,
        ],
        Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "theme-primary": "#0A7EBB",
        "theme-muted": "#54595F",
        "theme-body": "#eaeaea",
        "theme-light": "#fff",
        "theme-dark": "#1C1B17",
        "body-text": "#7A7A7A",
        "theme-secondary": "#3A3A3A",
      },
      fontSize: {
        "head-1": ["40px", "1.4"],
        "head-2": ["42px", "1"],
        "head-3": ["24px", "1.4"],
        "head-4": ["20px", "1.5"],
        "body-p": ["15px", "1.85714285714286"],
        normal: ["16px", "1.5"],
        "button-sm": ["14px", "1"],
        "res-head-1": ["32px", "1.4"],
        "res-head-2": ["25px", "1"],
        "res-head-3": ["18px", "1.4"],
        "res-head-4": ["16px", "1.4"],
        "res-body-p": ["13.68px", "1.85714285714286"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      boxShadow: {
        menu: "0 4px 10px -2px rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
};
