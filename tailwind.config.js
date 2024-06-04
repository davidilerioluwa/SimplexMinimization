/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "300px",
      xs: "400px",
      // => @media (min-width: 500px) {...}

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "850px",
      // => @media (min-width: 768px) { ... }

      lg: "1023px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
      dblue: "#1D5D9B",
      lblue: "#75C2F6",
      // vdblue:"#081c2d",
      vdblue: "#063a67",
      vvdblue: "#060c22",
      vlblue: "#1D5D9B1A",
      vvlblue: "#dfe8ee",
      yellow: "#ffc000",
      lyellow:  "#F4D16080",
      vlyellow: "#fef2d9",
      dyellow: "#f9ab00",
      red: "red",
      vlred: "#f9e0df",
      lred: "rgba(255, 0, 0, 0.071)",
      dred: "#d93025",
      dgray: "#808080",
      mgray: "#b2b2b2",
      lgray: "#f7f7f7",
      green: "green",
      lgreen: "rgba(0, 128, 0, 0.072)",
    },
    extend: {},
  },
  plugins: [],
};
