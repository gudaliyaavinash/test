/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'mobile' : '576px',

      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '992px',
      // => @media (min-width: 1024px) { ... }
      '1250' : '1250px',
      'desktop': '1200px',
      '405px' : '405px',
      '418' : "418px",
      '425' : '425px',
      '433' : '433px',
      '444' : '444px',
      '500' : '500px',
      '550' : '550px',
      '700px' : '700px',
      '703px' : '703px',
      '1150px' : '1150px',
      '950px': '950px',
      '768' : '768px',
      '702' : '702px',
      '770' : '770px',
      '803': '803px',
      '925': '925px',
      '949' : '949px',
      '680': '680px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},

  },
  plugins: [],
}

