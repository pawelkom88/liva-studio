/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}"],
    safelist: ["primary-clr", "secondary-clr", "teriary-clr"],
    extend: {
      // colors: {
      //   "primary-clr": "var(--primary-clr)",
      //   "secondary-clr": "var(--secondary-clr)",
      //   "teriary-clr": "var(--teriary-clr)",
      // },
    },
  },
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};
