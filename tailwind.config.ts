import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        loading: {
          "0%": {
            "border-right": "2px solid #000",
            opacity: "1",
            borderRadius: "100%",
          },
          "25%": {
            "border-bottom": "2px solid #000",
            opacity: "1",
            borderRadius: "100%",
          },
          "50%": {
            "border-left": "2px solid #000",
            opacity: "1",
            borderRadius: "100%",
          },
          "100%": {
            "border-top": "2px solid #000",
            opacity: "1",
            borderRadius: "100%",
          },
        },
        fadein: {
          "0%": {
            opacity: "0.1",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeout: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        loading: "loading 300ms ease-in-out infinite",
        fadein: "fadein 200ms ease-in",
        fadeout: "fadeout 200ms ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
