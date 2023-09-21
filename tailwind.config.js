/** @type {import('tailwindcss').Config} */
import customTheme from './src/lib/theme/theme.mjs';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...customTheme,
  },
  plugins: [],
}

