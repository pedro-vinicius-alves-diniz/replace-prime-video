/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul-claro': '#0F79AF',
        'azul-escuro': '#00050D',
        'cinza-escuro': '#191E25'
      },

      backgroundImage: {
        'home': 'url("/src/assets/img/bg.jpg")',
        'uefa': 'url("/src/assets/img/bg-uefa.jpg")'
      },
      
      fontFamily: {
        'poppins': ['Poppins', 'san-serif']
      }
    },
  },
  plugins: [],
}

