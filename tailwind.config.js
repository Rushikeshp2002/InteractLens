/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        animation: {
          blob: "blob 3s infinite",
          mop: "mop 3s infinte"
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(50px, -30px) scale(1.1)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.9)",
            },
            "100%": {
              transform: "tranlate(0px, 0px) scale(1)",
            },
          },
          mop:{
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(50px, -30px) scale(1.1)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.9)",
            },
            "100%": {
              transform: "tranlate(0px, 0px) scale(1)",
            },

          }
        },
    },
  },
  
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}