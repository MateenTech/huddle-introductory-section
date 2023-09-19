/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      backgroundColor: {
        'soft-magenta': 'hsl(300, 69%, 71%)',
        "violet":"hsl(257, 40%, 49%)",
      }
    },
  },
  plugins: [],
}

