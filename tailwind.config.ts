import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Design tokens — Marcelle Pacheco Nails (paleta Navy / Beige / Gold)
        ink: "#1F2A44",        // texto principal — navy
        paper: "#FCFAF6",      // fundo da página — off-white quente
        blush: "#F3ECE0",      // fundo de seções alternadas — beige claro
        sky: {
          DEFAULT: "#1F2A44",  // navy (primário) — header, botões primários
          light: "#2E3C60",    // navy claro — hovers suaves
          dark: "#141B2E",     // navy escuro — hover de botões primários
        },
        rose: {
          DEFAULT: "#C6A75E",  // soft gold (acento) — CTAs, links, ícones, hover
          light: "#D6BE85",    // gold claro — detalhes suaves
          dark: "#AD8C48",     // gold escuro — hover de CTAs
        },
        mist: "#6B6455",       // texto secundário — bronze acinzentado
        line: "#E4D9C4",       // bordas e divisores — beige
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(26, 26, 46, 0.25)",
        card: "0 10px 30px -15px rgba(255, 42, 140, 0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        fadeIn: "fadeIn 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
