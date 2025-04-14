/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#e6f7ec',
          200: '#c0e8d2',
          300: '#9adab9',
          400: '#74cb9f',
          500: '#4ebd86',
          600: '#3d9769',
          700: '#0a522d',
          800: '#0a3d22',
          900: '#052816',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slow-spin': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}