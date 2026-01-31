import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        glovo: {
          yellow: "#F2CC38",
          teal: "#00a082",
          dark: "#313131",
        },
      },
    },
  },
  plugins: [],
};

export default config;
