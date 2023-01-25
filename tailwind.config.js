/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  content: [],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        red: colors.red,
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
