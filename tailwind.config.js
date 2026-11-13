/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salon: {
          dark: '#1c1d20',
          footer: '#272422',
          gold: '#e8bf96',
          peach: '#f6d9bb',
          coral: '#f07a60',
          muted: '#b8b0bb',
        }
      },
      fontFamily: {
        newsreader: ['Newsreader', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
