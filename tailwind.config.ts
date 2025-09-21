import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        terminal: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Cyberpunk colors
        'cyber-cyan': "hsl(var(--neon-cyan))",
        'cyber-yellow': "hsl(var(--neon-yellow))",
        'cyber-green': "hsl(var(--neon-green))",
        'cyber-blue': "hsl(var(--neon-blue))",
        'matrix-bg': "hsl(var(--matrix-bg))",
        'matrix-grid': "hsl(var(--matrix-grid))",
        'terminal-green': "hsl(var(--terminal-green))",
        'terminal-amber': "hsl(var(--terminal-amber))",
        'terminal-red': "hsl(var(--terminal-red))",
        'terminal-blue': "hsl(var(--terminal-blue))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          glow: "hsl(var(--secondary-glow))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          border: "hsl(var(--card-border))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%": { 
            filter: "drop-shadow(0 0 20px hsl(var(--neon-cyan) / 0.8))",
          },
          "100%": { 
            filter: "drop-shadow(0 0 30px hsl(var(--neon-cyan) / 1)) drop-shadow(0 0 40px hsl(var(--neon-blue) / 0.5))",
          },
        },
        "terminal-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "scan-line": {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        "terminal-blink": "terminal-blink 1s infinite",
        "scan-line": "scan-line 2s infinite",
        "float": "float 3s ease-in-out infinite",
        "matrix-rain": "matrix-rain 3s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, hsl(var(--neon-cyan)) 0%, hsl(var(--neon-blue)) 100%)',
        'gradient-glow': 'linear-gradient(135deg, hsl(var(--neon-cyan) / 0.3) 0%, hsl(var(--neon-yellow) / 0.3) 100%)',
        'matrix-dots': 'radial-gradient(circle at center, hsl(var(--matrix-dot)) 1px, transparent 1px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
