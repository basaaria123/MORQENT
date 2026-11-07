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
        space: {
          950: "#020611",
          900: "#050B1A", // primary deep space background
          850: "#071224",
          800: "#0B1E3F",
          700: "#102C5A",
        },
        panel: {
          dark: "#08162E",
          royal: "#0B2A5B",
          deep: "#0E3A7A",
          glass: "rgba(11, 42, 91, 0.45)",
          glassHover: "rgba(14, 58, 122, 0.65)",
        },
        cyan: {
          glow: "#22D3EE",
          electric: "#00F0FF",
          dim: "#0891B2",
          subtle: "rgba(34, 211, 238, 0.15)",
        },
        gold: {
          energy: "#F5B731",
          bright: "#FBBF24",
          amber: "#D97706",
          subtle: "rgba(245, 183, 49, 0.15)",
        },
        muted: {
          blue: "#9FB3D1",
          dim: "#627D98",
        },
        netzero: {
          emerald: "#10B981",
          teal: "#14B8A6",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "Sora", "Outfit", "system-ui", "-apple-system", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        "cyan-glow-sm": "0 0 15px rgba(34, 211, 238, 0.25)",
        "cyan-glow-md": "0 0 30px rgba(34, 211, 238, 0.35)",
        "cyan-glow-lg": "0 0 50px rgba(34, 211, 238, 0.45)",
        "gold-glow-sm": "0 0 15px rgba(245, 183, 49, 0.3)",
        "gold-glow-md": "0 0 30px rgba(245, 183, 49, 0.45)",
        "glass-panel": "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(34, 211, 238, 0.15)",
        "glass-gold": "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(245, 183, 49, 0.25)",
      },
      backgroundImage: {
        "radial-space": "radial-gradient(circle at 50% 30%, rgba(14, 58, 122, 0.35) 0%, rgba(5, 11, 26, 0.95) 70%, #050B1A 100%)",
        "radial-cyan": "radial-gradient(circle at center, rgba(34, 211, 238, 0.2) 0%, transparent 70%)",
        "radial-gold": "radial-gradient(circle at center, rgba(245, 183, 49, 0.2) 0%, transparent 70%)",
        "grid-pattern": "linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        orbit: "orbit 24s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
