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
          950: "#0a0a0a",
          900: "#0d0d0d",
          850: "#121212",
          800: "#161616",
          700: "#1c1c1c",
        },
        accent: {
          DEFAULT: "#5b9dff",
          soft: "#7db1ff",
          dim: "#3f7fe0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
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
