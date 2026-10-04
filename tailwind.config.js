// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,jsx}'],
//   theme: {
//     extend: {
//       colors: {
//         ink: { DEFAULT: '#0B1220', 900: '#0B1220', 800: '#101A2E', 700: '#16233D', 600: '#1F3052' },
//         gold: { DEFAULT: '#C9A24B', 300: '#E3C77E', 400: '#D4B15F', 500: '#C9A24B', 600: '#A8832F', 700: '#856621' },
//         sand: { DEFAULT: '#F6F1E7', 50: '#FBF8F2', 100: '#F6F1E7', 200: '#EDE4D3', 300: '#E0D3BB' },
//         terracotta: '#C8643C',
//       },
//       fontFamily: {
//         display: ['"Playfair Display"', 'Georgia', 'serif'],
//         sans: ['Manrope', 'system-ui', 'sans-serif'],
//       },
//       boxShadow: {
//         soft: '0 20px 60px -20px rgba(11,18,32,.35)',
//         gold: '0 10px 30px -8px rgba(201,162,75,.55)',
//       },
//       letterSpacing: { widest2: '.28em' },
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0B1220', 900: '#0B1220', 800: '#101A2E', 700: '#16233D', 600: '#1F3052' },
        gold: { DEFAULT: '#C9A24B', 300: '#E3C77E', 400: '#D4B15F', 500: '#C9A24B', 600: '#A8832F', 700: '#856621' },
        sand: { DEFAULT: '#F6F1E7', 50: '#FBF8F2', 100: '#F6F1E7', 200: '#EDE4D3', 300: '#E0D3BB' },
        terracotta: '#C8643C',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(11,18,32,.35)',
        gold: '0 10px 30px -8px rgba(201,162,75,.55)',
      },
      letterSpacing: { widest2: '.28em' },
    },
  },
  plugins: [],
}
