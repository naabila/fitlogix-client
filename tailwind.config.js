const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      deepOrange:'#FF5E00',
      lightOrange:'#FF9A3A',
      customBg:'#1A1A1A',
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
