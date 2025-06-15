import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navy: {
          DEFAULT: "#1E215C",
          dark: "#090817",
        },
        lavender: "#E6E7F1",
        accent: "#AD484E",
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
        },
        secondary: {
          DEFAULT: "#EC4899",
          hover: "#DB2777",
        },
        dark: {
          DEFAULT: "#090817",
          light: "#1E215C",
        },
        steel: "#4F46E5",
        cyclamen: "#EC4899",
        violet: "#8B5CF6",
        black: "#000101",
        purple: {
          DEFAULT: "#8B5CF6", 
          light: "#A78BFA",
          dark: "#7C3AED"
        },
        blue: {
          DEFAULT: "#FF4500",
          light: "#FF6347",
          dark: "#DC143C"
        },
        pink: {
          DEFAULT: "#FF0000",
          light: "#FF69B4",
          dark: "#8B0000"
        }
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "gradient-text": {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "100% 50%" }
        },
        "particle-float": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-20px) translateX(10px)" },
          "50%": { transform: "translateY(-10px) translateX(-10px)" },
          "75%": { transform: "translateY(-30px) translateX(5px)" }
        },
        "geometric-spin": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.1)" },
          "100%": { transform: "rotate(360deg) scale(1)" }
        },
        "volcanic-eruption": {
          "0%": { transform: "translateY(100px) scale(0.5)", opacity: "0" },
          "50%": { transform: "translateY(-50px) scale(1.2)", opacity: "1" },
          "100%": { transform: "translateY(-200px) scale(0.8)", opacity: "0" }
        },
        "lava-flow": {
          "0%": { transform: "scaleY(0) translateY(0)", opacity: "1" },
          "50%": { transform: "scaleY(1) translateY(0)", opacity: "0.8" },
          "100%": { transform: "scaleY(1.5) translateY(20px)", opacity: "0" }
        },
        "ember-rise": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(-300px) rotate(360deg)", opacity: "0" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out",
        "pulse-slow": "pulse-slow 3s infinite ease-in-out",
        wave: "wave 2.5s ease-in-out infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "gradient-text": "gradient-text 3s ease infinite",
        "particle-float": "particle-float 6s ease-in-out infinite",
        "geometric-spin": "geometric-spin 8s linear infinite",
        "volcanic-eruption": "volcanic-eruption 3s ease-out infinite",
        "lava-flow": "lava-flow 4s ease-in-out infinite",
        "ember-rise": "ember-rise 5s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-blue-pink": "linear-gradient(90deg, #FF4500 0%, #FF0000 100%)",
        "gradient-steel-violet": "linear-gradient(90deg, #FF4500 0%, #DC143C 100%)",
        "gradient-steel-cyclamen": "linear-gradient(90deg, #FF4500 0%, #FF0000 100%)",
        "gradient-violet-cyclamen": "linear-gradient(90deg, #DC143C 0%, #FF0000 100%)",
        "volcanic-gradient": "radial-gradient(circle, #FF4500 0%, #FF0000 50%, #8B0000 100%)",
      },
      fontFamily: {
        sans: ['Inter', 'Nunito Sans', 'Luxora Grotesk', 'Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;