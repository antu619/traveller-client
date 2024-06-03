/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#008DDA",
          "secondary": "#41C9E2",
          "accent": "#ACE2E1",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light"
    ],
  },
}

