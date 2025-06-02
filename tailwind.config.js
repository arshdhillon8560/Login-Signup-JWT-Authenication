/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./views/**/*.{ejs}", // Add this line to include your EJS files
    "./src/**/*.{html,js}" // Keep this if you're also using HTML/JS in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
