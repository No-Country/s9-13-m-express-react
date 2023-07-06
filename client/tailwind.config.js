/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        purplePrimary: '#3A0B60',
        purpleSecondary: '#6415A1',
        purpleThirty:"#F3E3FF",
        yellowPrimary:"#F8B501",
        purpleIconsAndInputs:"#903ED0",
        purpleButtonDisable:"#674D7B",
        yellowButtonDisable:"#F4D580",
      },
    },
  },
  plugins: [],
}
