/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#1c4c74',
        'my-mud': '#dbd8e3',
      },
    },
  },
  plugins: [],
}

