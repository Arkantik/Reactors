/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     DEFAULT: "#514A92",
      //     dark: "#3E3870",
      //     darkest: "#29264b",
      //     light: "#9087DE",
      //     lightest: "#D2CFF2",
      //   },
      //   secondary: {
      //     DEFAULT: "#BD923D",
      //     dark: "#8E6E2E",
      //     darkest: "#604B1F",
      //     light: "#CEAC69",
      //     lightest: "#DFC89B",
      //   },
      //   neutral: {
      //     DEFAULT: "#979AA2",
      //     dark: "#595D68",
      //     darkest: "#32373D",
      //     light: "#D9D9D9",
      //     lightest: "#F5F5F5",
      //   },
      // },
      // fontFamily: {
      //   cinzel: ["Cinzel Decorative", "cursive"],
      // },
      // fontSize: {
      //   base: [
      //     "1rem",
      //     { lineHeight: "1.75", letterSpacing: "0", fontWeight: "400" },
      //   ],
      // },
    },
    screens: {

      'mobile' : '320px',
      // => @media (min-width: 320px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
