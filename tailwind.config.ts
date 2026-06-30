import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        iyeon: {
          orange: "#ff4b12",
          amber: "#ffb400",
          red: "#ef2f24",
          navy: "#07101f",
          ink: "#0b1220",
          muted: "#667085",
          line: "#e7eaf0",
          soft: "#f7f8fb"
        }
      },
      boxShadow: {
        glass: "0 24px 80px rgba(7,16,31,0.12)",
        glow: "0 20px 70px rgba(255,75,18,0.25)"
      },
      borderRadius: {
        xxl: "2rem"
      }
    }
  },
  plugins: []
};

export default config;
