/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#090807",
          surface: "#14100D",
          dark: "#050403",
          brown: "#593B2A",
          beige: "#D8C4A6",
          gold: "#B49A6A",
          "gold-light": "#D8C59A",
          "gold-dark": "#7A643E",
          ivory: "#F3EBDD",
          "ivory-muted": "#C4B5A2",
          border: "rgba(180, 154, 106, 0.2)",
          "border-subtle": "rgba(243, 235, 221, 0.08)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-montserrat)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        ultra: ".35em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3EBDD 0%, #B49A6A 50%, #7A643E 100%)",
        "radial-spotlight": "radial-gradient(circle at 50% 35%, rgba(180, 154, 106, 0.15) 0%, rgba(9, 8, 7, 0) 70%)",
        "radial-glow": "radial-gradient(circle at 50% 50%, rgba(89, 59, 42, 0.25) 0%, rgba(9, 8, 7, 0) 75%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        shimmer: "shimmer 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
