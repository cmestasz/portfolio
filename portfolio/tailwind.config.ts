import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
        },
        secondary: {
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
        },
        primwriting: {
          100: "var(--primwriting-100)",
          200: "var(--primwriting-200)",
          300: "var(--primwriting-300)",
          400: "var(--primwriting-400)",
          500: "var(--primwriting-500)",
        },
        secwriting: {
          100: "var(--secwriting-100)",
          200: "var(--secwriting-200)",
          300: "var(--secwriting-300)",
          400: "var(--secwriting-400)",
          500: "var(--secwriting-500)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
