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
        primary: "#2f4427",
        accent: "#ceb37e",
        cream: "#f8f5f0",
        gold: "#ceb37e",
        sage: "#2f4427",
      },
      fontFamily: {
        serif: ["Battambang", "Georgia", "serif"],
        script: ["Moul", "Brush Script MT", "cursive"],
        khmer: ["Battambang", "serif"],
        "khmer-title": ["Moul", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
