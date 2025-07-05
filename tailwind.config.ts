// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],

  theme: {
    keyframes: {
      accordionDown: {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      accordionUp: {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      accordionDown: "accordionDown 200ms ease-out",
      accordionUp: "accordionUp 200ms ease-out",
    },
  },
};

export default config;
