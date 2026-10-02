/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/layouts/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f1714',
          light: '#f7f3f5',
          primary: '#9D2065',
          secondary: '#1c2924',
          gray: '#8a9992',
        },
      },
    },
  },
  plugins: [],
};
