/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        script: ['WindSong', 'cursive'],
      },
      colors: {
        // Custom wedding color palette
        'wedding': {
          'navy': '#215076',      // Deep elegant blue
          'sage': '#708F7B',      // Soft sage green
          'terracotta': '#CF9D85', // Warm terracotta
          'blush': '#F1CBBC',     // Soft blush pink
          'cream': '#FFFAF3',     // Warm cream
        },
        // Extended palette with variations
        'navy': {
          50: '#f0f4f7',
          100: '#dae6ed',
          200: '#b9cedd',
          300: '#8babe5',
          400: '#5d85c5',
          500: '#3e68a8',
          600: '#2f528c',
          700: '#274573',
          800: '#215076', // Main navy
          900: '#1d3a5f',
        },
        'sage': {
          50: '#f4f7f5',
          100: '#e7ede9',
          200: '#d0ddd4',
          300: '#afc5b6',
          400: '#8ba592',
          500: '#708F7B', // Main sage
          600: '#5a7361',
          700: '#4a5d50',
          800: '#3e4d42',
          900: '#344038',
        },
        'terracotta': {
          50: '#faf7f4',
          100: '#f4ede6',
          200: '#e8d7c9',
          300: '#d9bba4',
          400: '#CF9D85', // Main terracotta
          500: '#c18462',
          600: '#b06d4a',
          700: '#92563d',
          800: '#774635',
          900: '#613a2f',
        },
        'blush': {
          50: '#fefcfb',
          100: '#fdf8f6',
          200: '#F1CBBC', // Main blush
          300: '#edb5a0',
          400: '#e69b7e',
          500: '#de7d5a',
          600: '#d2633c',
          700: '#af4f2d',
          800: '#8c4027',
          900: '#723624',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
      },
      backdropBlur: {
        'custom': '12px',
      }
    },
  },
  plugins: [],
}