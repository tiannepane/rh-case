import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#00B2A9",
        "teal-light": "#f0fafa",
        "teal-border": "#b3e5e3",
        "dark-text": "#1a1a1a",
        "body-text": "#444444",
        "sub-text": "#888888",
        border: "#e5e5e5",
        "yellow-tag-bg": "#FFF3CC",
        "yellow-tag-text": "#7a5c00",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
