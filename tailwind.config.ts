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
        peacock: {
          teal: "#008080",
          blue: "#1E3A8A",
          gold: "#D4AF37",
          purple: "#6B21A8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
