/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.938rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1170px',
      },
    },
    borderRadius: {
      sm: '12px',
      md: '16px',
      lg: '24px',
      xl: '30.5px',
      full: '100%',
    },
    extend: {
      fontFamily: {
        SansPro: ['Source Sans Pro', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        blue: {
          primary: '#1F80F0',
          secondary: '#164377',
        },
        black: '#121212',
        orange: '#FE8B53',
        teal: '#00E9EA',
      },
      fontSize: {
        'head-1': [
          '96px',
          { lineHeight: '110px', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        'head-2': ['64px', { lineHeight: '74px', fontWeight: '600' }],
        'head-3': [
          '24px',
          { lineHeight: '30px', fontWeight: '700', letterSpacing: '0.16em' },
        ],
        'head-4': ['32px', { lineHeight: '39px', fontWeight: '600' }],
        'body-p': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'body-p2': ['13px', { lineHeight: '16.34px', fontWeight: '400' }],
        link: ['18px', { lineHeight: '23px', fontWeight: '600' }],
        'res-head-1': [
          '64px',
          { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        'res-head-2': ['40px', { lineHeight: '49px', fontWeight: '600' }],
        'res-head-3': [
          '24px',
          { lineHeight: '20px', fontWeight: '700', letterSpacing: '0.16em' },
        ],
        'res-head-4': ['24px', { lineHeight: '29px', fontWeight: '600' }],
        'res-body-p': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'link-res': ['16px', { lineHeight: '20px', fontWeight: '600' }],
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      dropShadow: {
        ellipse: '0px 10px 13px #D5EEFF',
        image: '0px 23px 30px rgba(22, 67, 119, 0.39)',
      },
      boxShadow: {
        button: {
          primary: '0px 3px 3px rgba(16, 62, 117, 0.37)',
          secondary: '0px 5px 7px rgba(31, 128, 240, 0.18)',
        },
        card: '0px 16px 21px rgba(207, 233, 247, 0.47)',
      },
    },
  },
  plugins: [],
};
