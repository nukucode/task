/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      transparent: "transparent",
      silverGray: "#fcfcfc",
      whiteSmoke: "#F9F9F9",
      charcoal: "#2F2B43",
      white: "#FFFFFF",
      active: "#f1f1f1",
      icon: "#d3d2d7",
      grayText: "#a4a4a4",
      black: "#000000"
    },
    screens: {
      am: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {
      fontFamily: {
        plusSans: ["var(--font-jakarta-sans)"]
      }
    }
  },
  plugins: [require("tailwind-scrollbar-hide")]
};
