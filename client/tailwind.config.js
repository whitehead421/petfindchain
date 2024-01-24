/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gabarito", "sans-serif"],
      },
      colors: {
        primary: "#fa615b",
        secondary: "#fff5ee",
        tertiary: "#f5f5f5",
        dark: "#333333",
        light: "#ffffff",
        gray: "#807c7b",
      },
    },
  },
  plugins: [],
};
