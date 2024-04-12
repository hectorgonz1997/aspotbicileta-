module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      },
    },
    fontFamily: {
      'stalinist': ['"Stalinist One"', 'sans-serif'],
    },
  },
  plugins: [],
};
