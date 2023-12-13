/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "8rem",
      },
    },
    colors: {
      flame: "#e8491d",
      charcoal: "#35424a",
      white: "#fff",
      cultured: "#f4f4f4",
      platinum: "#e6e6e6",
      "chinese-silver": "#ccc",
    },
    extend: {},
  },
  plugins: [],
};
