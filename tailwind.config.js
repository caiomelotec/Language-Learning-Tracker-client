/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
        82: "24rem",
      },
      width: {
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
