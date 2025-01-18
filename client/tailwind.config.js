/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zomato:
        {
          50: '#ffe5e8',
          100: '#fdb7be',
          200: '#f68994',
          300: '#f15b69',
          400: '#ec2e40',
          500: '#d21526',
          600: '#a40e1d',
          700: '#760815',
          800: '#48030a',
          900: '#1e0001',
          1000:'#6e5722',
        }
      }

    },
  },
  plugins: [],
}

