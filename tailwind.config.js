/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#4EA8DE",
        secondary: "#8284FA",
        colorBtn: "#1E6F9F",
        background: "#1a1a1a",
        headerBg: "#0D0D0D",
        Item: "#262626",
        text: "#F2F2F2",
        taskNumberbg: "#333333",
        taskNumber: "#D9D9D9",
        completed: "#808080",
        checked: "#5E60CE"
      },
    },
  },
  plugins: [],
}