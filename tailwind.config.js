/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul-claro': '#0F79AF',
        'azul-escuro': '#00050D',
        'cinza-escuro': '#191E25',
        'black-medium': '#222222',
        'azul-lighter': '#90DFFE' 
      },

      backgroundImage: {
        'home': 'url("/src/assets/img/bg.jpg")',
        'uefa': 'url("/src/assets/img/bg-uefa.jpg")'
      },
      
      fontFamily: {
        'poppins': ['Poppins', 'san-serif']
      },
      boxShadow: {
        'shadow-channel': '0 0px 7px 3px rgba(0,0,0)'
      }
    },
  },
  plugins: [],
}

