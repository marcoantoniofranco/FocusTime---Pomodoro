/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-color': 'hsla(194, 40%, 98%, 1)',
        'text-color': '#hsla(194, 5%, 7%, 1)',
        'primary-color': 'hsla(194, 100%, 63%, 1)',
        'controls-bg-color': 'hsla(194, 0%, 14%, 1)',
        dark: {
          'bg-color': 'hsla(194, 5%, 7%, 1)',
          'text-color': 'hsla(194, 40%, 98%, 1)',
          'primary-color': 'hsla(194, 100%, 63%, 1)',
          'controls-bg-color': 'hsla(194, 0%, 14%, 1)',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
}
