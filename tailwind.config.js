/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        norisk: {
          dark: "#0D6F9E",
          light: "#00B9E8",
        }
      }
    },
  },
  plugins: [],
}

