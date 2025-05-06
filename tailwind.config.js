/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./*.html", "./src/**/*.{html,js}"], 
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        biryani: ['Biryani', 'sans-serif'],
      },
      screens: {
        'xl': '1280px',    // default XL
        'lg-1200': '1200px',    // custom for 1200px
        'lg-mid-1100': '1100px', // custom for 1100px
        'md-mid-1000': '1000px', // custom for 1000px
        'sm-mid-900': '900px',
        'xs-mid-768': '768px',
        'mid-640': '640px',
        'sm-md-560': '560px',
        'sm-440': '440px',
        'xs-10': '10px',
      },
      backgroundImage: {
        'background-testimonials': "url('./images/background-image-testimonials.png')",
      },
    },
  },
  plugins: [],
}

