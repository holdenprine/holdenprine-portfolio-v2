/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4c24",
        neutral: {
          100: "#ffffff",
          200: "#efeeec",
          300: "#e3e1de",
          400: "#cbc8c5",
          500: "#818180",
          600: "#2c2c2c",
          700: "#1f1f1f",
          800: "#131313",
          900: "#000000",
        },
        error: "#ff4c24",
        success: "#0ba954",
      },
      spacing: {
        gap: "2em",
        section: "calc(3.5em + (2 * 2em))", // Based on --section-padding
        container: "2em",
        header: "calc(1.5em + (2 * 2em))",
        footer: "calc(2.785em + (2 * 2em))",
      },
      fontSize: {
        base: "var(--size-font)",
        h1: "7.5em",
        h2: "5em",
        h3: "2.5em",
        h4: "1.75em",
        h5: "1.25em",
      },
      fontFamily: {
        sans: ["PP Neue Montreal", "Arial", "sans-serif", "Montserrat"],
      },
    },
  },
  plugins: [],
};
