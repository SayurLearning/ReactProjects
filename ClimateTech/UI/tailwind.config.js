/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        body:['Crafty Girls'],
        head:['Gloria Hallelujah'],
        marker:['Permanent Marker'],
        header:['Russo One'],
        navhead:['Courgette'],
        sidehead:['Courgette'],
        sidebody:['Sriracha']
      },
      transitionDelay: {
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
        transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
        },
        listStyleImage: {
          checkmark: 'url("/img/checkmark.png")',
        },
    },
  },
  plugins: [],
}

