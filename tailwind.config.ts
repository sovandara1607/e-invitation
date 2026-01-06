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
        cream: "#F5F0E8",
        gold: "#D4AF37",
        sage: "#8A9A5B",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        script: ["Brush Script MT", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
