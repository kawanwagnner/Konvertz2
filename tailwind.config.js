/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "power-blue": "#002366",
        lightning: "#00f5d4",
        thunder: "#ff4d00",
        midnight: "#0b1f4d",
        deep: "#00173a",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "ui-sans-serif", "system-ui"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "bounce-slow": "bounce 2s infinite",
        gradient: "gradient 15s ease infinite",
        blob: "blob 24s infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blob: {
          "0%": { transform: "translate(0px,0px) scale(1)" },
          "25%": { transform: "translate(40px,-30px) scale(1.05)" },
          "50%": { transform: "translate(-20px,20px) scale(0.98)" },
          "75%": { transform: "translate(30px,10px) scale(1.04)" },
          "100%": { transform: "translate(0px,0px) scale(1)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#00f5d4" },
        },
      },
      boxShadow: {
        neon: "0 0 0 2px rgba(0,245,212,0.3), 0 10px 30px -10px rgba(0,245,212,0.5)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(0,245,212,0.8)",
      },
    },
  },
  safelist: [
    // gradients & arbitrary utilities used in JSX
    'from-power-blue','to-black','from-thunder','to-lightning','bg-power-blue','text-lightning',
    'bg-[radial-gradient(closest-side,rgba(0,245,212,0.35),transparent)]',
    'bg-[radial-gradient(closest-side,rgba(255,77,0,0.28),transparent)]',
    'bg-[radial-gradient(closest-side,rgba(0,35,102,0.5),transparent)]'
  ],
  plugins: [],
};