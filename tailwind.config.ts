module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["var(--font-dancing-script)", "cursive"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-libertinus-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
