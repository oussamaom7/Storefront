/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        color0: "#FFFFFF",
        color1: "#1e272e",
        color2: '#FF6C22',
        color3: '#f4e0d9',
        color4: "#f4e0d9",
        color5: {
          'background': 'rgb(255,119,0)',
          'background': 'linear-gradient(90deg, rgba(255,119,0,1) 30%, rgba(193,145,225,1) 83%)'
        }
      },
    },
  },
  plugins: [],
};


