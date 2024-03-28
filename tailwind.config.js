/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '450px',
      // => @media (min-width: 450px) { ... }

      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        pink: {
          500: '#E4526E',
          600: '#E13F5E',
          700: '#CA3854',
        },
        dark: {
          300: '#393939',
          500: '#1b1b1f',
          700: '#1F1F1F',
          800: '#1B1B1B',
          900: '#272727',
        },
        purpose: {
          100: '#c3b4fc1a',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
