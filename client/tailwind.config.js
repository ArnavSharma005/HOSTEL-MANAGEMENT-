// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      colors:{
        'custom-gray': '#e5e5e5',
        'custom-dark-blue':'#14213d',
        
        'custom-orange':"#fca311"
      }
    },
  },
  plugins: [],
}
