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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        verdana: ["Verdana", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        saira: ["Saira Semi Condensed", "sans-serif"],
        teko: ["Teko", "sans-serif"],
      },
      screens: {
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices
        "sm-md": "704px", // Middle of small and medium
        md: "768px", // Medium devices
        "md-lg": "896px", // Middle of medium and large
        lg: "1024px", // Large devices
        "lg-xl": "1152px", // Middle of large and extra large
        xl: "1280px", // Extra large devices
        "xl-2xl": "1408px", // Middle of extra large and 2xl
        "2xl": "1536px", // Default 2xl
        "3xl": "1920px", // Custom large screen
      },
    },
  },
  plugins: [],
};
