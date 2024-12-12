/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        teko: ['Teko', 'Sans'], // Add 'Teko' as a custom font
        poppins: ['Poppins', 'Sans'],
        montserrat:['Montserrat','Sans'] ,// Add 'Teko' as a custom font
        saira:['Saira','Sans']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },screens: {
        'max-920': { max: '920px' }, 
        'max-1060': { max: '1060px' }, 
        'max-800': { max: '800px' }, 
      },
    },
  },
  plugins: [],
};
