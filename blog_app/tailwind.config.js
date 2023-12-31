/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': "url('./src/assets/images/banner.jpeg')",
       
      },
      client1_img:{
        'banner-img': "url('./src/assets/images/teno_1.jpeg')",

      },
      client2_img:{
        'banner-img': "url('./src/assets/images/teno_2.jpeg')",

      },
      client3_img:{
        'banner-img': "url('./src/assets/images/teno_3.jpeg')",

      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '100%': '110%',
        '16': '4rem',
      }
    },
  },
  plugins: [],
}
// import ima from './src/assets/images/'