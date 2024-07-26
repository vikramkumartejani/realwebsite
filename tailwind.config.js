/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily:{
        'odibee': ['"Odibee Sans"', 'cursive'],
       },
       backgroundImage: {
        'custom-gradient': 'radial-gradient(50% 50% at 50% 50%, #333333 0%, #15273F 100%)',
      },
      screens: {
        'xsm': '400px',
        'sm': '640px',
        'smlg': '680px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
