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
        emerald: {
          DEFAULT: "#0A4D3C",
          light: "#0D5C47",
          soft: "#E8F3EF",
          muted: "#C5DED4",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E5C654",
        },
        cream: "#FDFBF7",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
