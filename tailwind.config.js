/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],

  theme: {
    colors: {
      "green-beige": "#D7DFCF",
      "matas-blue": "#002643",
      "matas-white": "#FFFFFF",
      "matas-grey": "#F0EDEB",
      "no-red": "#D54C32",
      "yes-green": "#2DE273",
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      centuryGothic: ["century-gothic", "sans-serif"],
      headings: ["ltc-caslon-pro", "serif"],
    },
  },
};
