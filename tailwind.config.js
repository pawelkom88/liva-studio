/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    purge: [
      "./pages/**/*.tsx",
      "./pages/**/*.js",
      "./pages/**/*.ts",
      "./components/**/*.tsx",
      "./components/**/*.js",
      "./components/**/*.ts",
    ],
    safelist: ["primary-clr", "secondary-clr", "teriary-clr", "--text-clr"],
    fontFamily: {
      steelfish: ["steelfish", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/loading.webp')",
      },
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
