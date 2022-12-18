/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}"],
    safelist: ["primary-clr", "secondary-clr", "teriary-clr", "--text-clr"],
    fontFamily: {
      steelfish: ["steelfish", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('https://scontent.flhr6-1.fna.fbcdn.net/v/t31.18172-8/12828557_229562794053994_8492425959911579265_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=QXfGnkbZBF0AX-GaF4t&_nc_ht=scontent.flhr6-1.fna&oh=00_AfA_T74FU58PhToYEHjyL9FYH-anclMiVtpJx0cpH9AkNw&oe=63C64D10')",
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
