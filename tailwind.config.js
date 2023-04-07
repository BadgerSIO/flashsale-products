/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#5B9982",
        secondary: "#96AEA1",
        timerText: "#554FA6",
        timerbg: "#D3D1F3",
      },
    },
  },
  plugins: [],
};
