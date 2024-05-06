/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx}"
  ],
  theme: {
    extend: {
      width: {
        150: '150px',
        190: '190px',
        225: '225px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        375: '375px',
        460: '460px',
        656: '656px',
        880: '880px',
        508: '508px',
        30: '30px',
        80: '80px',
      },
      height: {
        30: '30px',
        80: '80px',
        150: '150px',
        225: '225px',
        300: '300px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        650: '650px',
        685: '685px',
        800: '800px',
        1100:'1100px',
        '90vh': '90vh',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '860px',
        xl: '1280px',
      },
      colors: {
        headingColor: '#2e2e2e',
        textColor: '#515151',
        cartNumBg: '#e80013',
        primary: '#f5f3f3',
        cardOverlay: 'rgba(256,256,256,0.4)',
        lighttextGray: '#9ca0ab',
        card: 'rgba(256,256,256,0.8)',
        cartBg: '#282a2c',
        cartItem: '#2e3033',
        cartTotal: '#343739',
        rowBg:"rgba(255,131,0,0.05)",
        card: 'rgba(256,256,256,0.8)',
      },
      backgroundImage:{
        'my-image': "url(/src/Manager/img/trongdong.jpg)",
        'la-co':"url(/src/Manager/img/coVN.jpg)",
      },
      fontFamily:{
        'fontgg':["Poppins", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

