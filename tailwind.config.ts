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
        secondary: "#ededed",
        accent: "#0F937C",
        "accent-light": "#00FF99",
      },

      fontFamily: {
        manrope: ["var(--font-manrope)"], // paragraph font family
        gotham: ["var(--font-gotham)"], // heading font family
      },
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }
    },

    letterSpacing: {
      tightest: "-.88px",
      tighter: "-.44px",
      tight: "-.22px",
      normal: "0",
      wide: ".28px",
      wider: ".56px",
      widest: ".88px",
    },
    boxShadow: {
      "3xl": "0px 0px 300px 0px rgba(0, 255, 153, 0.1)",
    },
    dropShadow: {
      "3xl": "0 0 300px rgba(0, 255, 153, 0.3)",
    },
  },
  plugins: [],
};
export default config;
