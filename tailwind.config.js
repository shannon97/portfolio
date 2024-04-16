/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'desktop-welcome': "url('/imgs/welcomeVid.gif')",
        'desktop-thanks': "url('/imgs/thanksVid.gif')",
        'mobile-welcome': "url('/imgs/welcomeVid4.gif')",
        'mobile-thanks': "url('/imgs/thanksVid2.gif')",
      },
    },
  },
  plugins: [],
}

