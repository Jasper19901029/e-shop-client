import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
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
      },
      animation: {
        loading: "loading 300ms ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
