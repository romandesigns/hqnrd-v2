import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-accent": {
          50: "hsl(var(--brand-primary-accent-50))",
          100: "hsl(var(--brand-primary-accent-100))",
          200: "hsl(var(--brand-primary-accent-200))",
          300: "hsl(var(--brand-primary-accent-300))",
          400: "hsl(var(--brand-primary-accent-400))",
          500: "hsl(var(--brand-primary-accent-500))",
          600: "hsl(var(--brand-primary-accent-600))",
          700: "hsl(var(--brand-primary-accent-700))",
          800: "hsl(var(--brand-primary-accent-800))",
          900: "hsl(var(--brand-primary-accent-900))",
          950: "hsl(var(--brand-primary-accent-950))",
        },
        "secondary-accent": {
          50: "hsl(var(--brand-secondary-accent-50))",
          100: "hsl(var(--brand-secondary-accent-100))",
          200: "hsl(var(--brand-secondary-accent-200))",
          300: "hsl(var(--brand-secondary-accent-300))",
          400: "hsl(var(--brand-secondary-accent-400))",
          500: "hsl(var(--brand-secondary-accent-500))",
          600: "hsl(var(--brand-secondary-accent-600))",
          700: "hsl(var(--brand-secondary-accent-700))",
          800: "hsl(var(--brand-secondary-accent-800))",
          900: "hsl(var(--brand-secondary-accent-900))",
          950: "hsl(var(--brand-secondary-accent-950))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
