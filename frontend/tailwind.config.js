/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
            'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
            './node_modules/tw-elements/dist/js/**/*.js'
          ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    },
    zIndex: {
      '-10': '-10',
      '-20': '-20',
      '-30': '-30',
      '-40': '-40',
      '-50': '-50',
      '-60': '-60',
      '-70': '-70',
      '-80': '-80',
      '-90': '-90',
      '-100': '-100',
      '100': '100',

    }
  }
}
plugins: [
  require('flowbite/plugin'),
  require('@tailwindcss/forms'),
  require('tw-elements/dist/plugin')
]