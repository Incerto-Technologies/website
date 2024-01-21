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
        primary: "#000000",
        secondary: "#EDEDED",
        accent: "#0F937C",
        "accent-light": "#00FF99",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        gotham: ["var(--font-gotham)"],
      },
    },
  },
  plugins: [],
};
export default config;
