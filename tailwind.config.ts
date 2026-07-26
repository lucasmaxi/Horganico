import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-archivo)", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0faf4",
          100: "#d1f0e0",
          200: "#a3e1c1",
          300: "#6fcca4",
          400: "#3aad78",
          500: "#1e7d4b",
          600: "#196840",
          700: "#145234",
          800: "#0f3d27",
          900: "#0a281a",
        },
        forest: "#12271b",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        "card-hover": "0 20px 48px rgba(30,125,75,0.14), 0 8px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
