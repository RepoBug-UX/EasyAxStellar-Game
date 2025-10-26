/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
      },
      colors: {
        background: "#0a0612",
        foreground: "#e8d5f2",
        card: "#1a0f2e",
        "card-foreground": "#e8d5f2",
        popover: "#1a0f2e",
        "popover-foreground": "#e8d5f2",
        primary: "#8b5cf6",
        "primary-foreground": "#fff",
        secondary: "#ff6b35",
        "secondary-foreground": "#fff",
        muted: "#2d1b4e",
        "muted-foreground": "#a78bca",
        accent: "#ff6b35",
        "accent-foreground": "#fff",
        destructive: "#dc2626",
        "destructive-foreground": "#fff",
        border: "#8b5cf64d",
        input: "transparent",
        ring: "#8b5cf6",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        flicker: "flicker 0.15s infinite",
        shake: "shake 0.5s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px #8b5cf680" },
          "50%": { boxShadow: "0 0 40px #8b5cf6cc" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
      },
    },
  },
  plugins: [],
};
