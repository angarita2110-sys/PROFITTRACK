import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        green: {
          DEFAULT: "#1D9E75",
          dark: "#0F6E56",
          light: "#E1F5EE",
        },
        ink: {
          DEFAULT: "#0D1412",
          soft: "#2A3632",
        },
      },
    },
  },
  plugins: [],
};

export default config;
