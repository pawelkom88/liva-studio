/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}"],
    safelist: ["primary-clr", "secondary-clr", "teriary-clr"],
    fontFamily: {
      steelfish: ["steelfish", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-clr": "var(--primary-clr)",
        "secondary-clr": "var(--secondary-clr)",
        "teriary-clr": "var(--teriary-clr)",
      },

      screens: {
        mini: { max: "450px" },
        // => @media (max-width: 450px) { ... }
        large: { max: "1024px" },
        // => @media (max-width: 450px) { ... }
        xxl: { min: "2000px" },
        // => @media (max-width: 1950px) { ... }
      },
    },
  },
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};
