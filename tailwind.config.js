/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#42b8d4",
            secondary: "#337ab7",
            fourth: "#858585",
         },
      },
   },
   plugins: [],
};
