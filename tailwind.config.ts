import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Layered near-blacks for depth (not pure #000)
        ink: {
          950: "#10151b",
          900: "#151d26",
          850: "#19212a",
          800: "#1c2733",
          700: "#1c2c3c",
        },
        accent: {
          DEFAULT: "#9bc9e5",
          soft: "#c7e5f6",
          dim: "#a5cee7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: [
          "var(--font-space-grotesk)",
          "var(--font-inter)",
          "sans-serif",
        ],
      },
      borderColor: {
        hairline: "rgba(255,255,255,0.08)",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "glow-pulse": "glow-pulse 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
