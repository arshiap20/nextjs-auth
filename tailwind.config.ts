import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        movingBackground: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        beam: {

          "100%": {
            opacity: "1",
            transform: "translate(-5%, -35%) scale(1)",
          },
        },
      },
      animation: {
        "spinner-ease-spin": "spin .8s ease infinite",
        "spinner-linear-spin": "spin .8s linear infinite",
        "moving-background": "movingBackground 90s linear infinite",
        beam: "beam 2s ease .75s 1 forwards",
      },
    },
  },
  plugins: [],
};
export default config;
