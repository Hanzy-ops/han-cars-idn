/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/mobilbg.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        primary: '#F6F6F6',
        secPrimary: '#272829',
        thridPrimary: '#ca0a07',
        fourthPrimary: '#222222',
        darkness: '#f3f3f3',
        rgba: 'rgba(1, 1, 1, 0.8)'
      },
    },
  },
  plugins: [],
}

