/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080808',
        secondary: '#0a0a0a',
        ternary: '#060606'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'fira-code': ['Fira Code', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
