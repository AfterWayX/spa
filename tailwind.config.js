module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'rubik': ['Rubik', 'serif'] 
    },
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        '13': '13px'
      },
      borderRadius: {
        '30': '30px',
        '5': '5px'
      },
      spacing: {
        '52': '52px',
        '25': '25px',
        '50': '50px',
        '80': '80px',
        '66': '66px',
        '150': '150px',
        '120': '120px',
        '60': '60px',
        '40': '40px',
        '38': '38px',
        '30': '30px',
        '70': '70px',
        '15': '15px',
        '33': '33px',
        '90': '90px',
        '100': '100px'
      }
    },
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: { sm: '540px', md: '720px', lg: '960px', xl: '1220px', '2xl': '1220px' },
    }),
  ]
}
