/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxl: "2.5rem", // Custom font size
        xl: "1.25rem", // Custom font size
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"], // Add your font family here
      },
    },
  },
  plugins: [],
};
