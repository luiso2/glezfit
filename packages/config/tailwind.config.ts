import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#E8965A",
        "accent-glow": "rgba(232,150,90,0.3)",
        "accent-soft": "rgba(232,150,90,0.22)",
        "bg-warm": "#BCB5A5",
        "bg-dark": "#0F0F0F",
        "bg-darker": "#0A0A0A",
        "bg-light": "#F0EBE3",
        "bg-card": "#1A1917",
        "text-dark": "#1A1918",
        "text-dark-secondary": "#3D3A37",
        "text-dark-muted": "#6B6560",
        "text-light": "#FAF8F5",
        "text-light-secondary": "#D4CFC7",
        "text-light-muted": "#9A958D",
        "text-footer-muted": "#7D7D82",
        "text-placeholder": "#55555A",
        "border-subtle": "#2A2824",
        "border-input": "#2A2A2E",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "-apple-system", "sans-serif"],
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
