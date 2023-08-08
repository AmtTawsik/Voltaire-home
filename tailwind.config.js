/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom': "url('https://i.ibb.co/xjy4C8Z/v996-008-kroiqtdh.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

