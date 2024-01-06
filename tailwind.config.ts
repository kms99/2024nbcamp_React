import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-bg-main": "#E8344E",
        "color-font-main": "#FFFFFF",
        "color-bg-sub": "#FFFFFF",
        "color-font-sub": "#000000",
      },

      boxShadow: {
        "login-frame": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
};
export default config;
