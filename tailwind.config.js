/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Marcellus', 'serif'],
        'body': ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'base': ['9pt', { lineHeight: '1.5' }],
      }
    },
  },
  plugins: [],
}