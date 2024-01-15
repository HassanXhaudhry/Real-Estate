/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    fontFamily:{
      Montserrat:['Montserrat', 'sans-serif'],
      Inter:['Inter', 'sans-serif'],
      Poppins:['Poppins', 'sans-serif']
    },
    colors:{
      'neutralSilver': '#F5F7FA',
      'brandPrimary': 'green',
      'neutralDGrey': 'black',
      'gray': '#A9A9A9',
      'white': '#FFFFFF'
    },
   
  },
  plugins: [require('flowbite/plugin')],
}

