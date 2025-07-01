/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#b6cbce',
        heading: '#eef3db',
        base: '#033f47',
        base2: '#022a30',
        brand: '#e0f780',
        brand2: '#deff58',
      },
      fontFamily: {
        base: ['"Bai Jamjuree"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
