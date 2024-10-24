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
      colors: {
        "secondary-100": "#EFEEEA",
        "secondary-300": "#C2BDAF",
        "secondary-700": "#73675B",
        "primary-950": "#1C273E",
        "primary-900": "#304A78",
        "primary-100": "#E1EDF8",
      },
      fontFamily: {
        jost: "var(--font-jost)",
        notoSansJP: "var(--font-notoSansJP)",
      },
      padding: {
        "6.67": "6.67%",
      },
      boxShadow: {
        "custom": "8px 8px 32px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
