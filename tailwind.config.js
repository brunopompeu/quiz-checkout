/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['"Open Sans"', 'sans-serif'],
        roboto: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        eduzz: {
          blue: '#0D2772',
          lightblue: '#00CAF9',
          yellow: '#FFBC00',
          bubble: '#F0F7FF',
          border: '#D9D9D9',
          gray: '#6B7280',
          amber: '#F2A900',
          textDark: '#192542',
          pageBg: '#FAFAFA',
          alertBg: '#FFF2F0',
          alertBorder: '#FFCCC7',
          alertRed: '#DC2626',
        },
      },
    },
  },
  plugins: [],
}
