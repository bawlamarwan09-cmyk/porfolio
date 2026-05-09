import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        card: "#111827",
        primary: "#6366F1",
        secondary: "#8B5CF6",
        fg: "#F9FAFB",
        muted: "#9CA3AF"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at center, rgba(99,102,241,0.08), transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.4'/></svg>\")"
      },
      animation: {
        "gradient-x": "gradient-x 12s ease infinite",
        "float": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4,0,0.6,1) infinite",
        "shine": "shine 2.5s linear infinite"
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" }
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
