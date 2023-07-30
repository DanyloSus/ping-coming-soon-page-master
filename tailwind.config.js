/** @type {import('tailwindcss')".Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(223, 87%, 63%)",

        "pale-blue": "hsl(223, 100%, 88%)",
        "light-red": "hsl(354, 100%, 66%)",

        gray: "hsl(0, 0%, 59%)",
        "very-dark-blue": "hsl(209, 33%, 12%)",
      },
      screens: {
        md: { max: "768px" },
      },
    },
  },
  plugins: [],
};
