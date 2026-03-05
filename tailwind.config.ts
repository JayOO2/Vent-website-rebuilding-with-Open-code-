import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",
        secondary: "#16213e",
        accent: "#e94560",
        gold: "#d4a574",
        sand: "#c9b896",
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-hero.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
