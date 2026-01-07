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
        primary: "#3B82F6", // Bright Blue (Tailwind blue-500)
        dark: "#020617",    // Deepest Slate (matches the background)
        cardDark: "#0F172A", // Slightly lighter for cards
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure Inter is used
      },
    },
  },
  plugins: [],
};
export default config;