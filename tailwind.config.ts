import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#4268b1',
          hover: '#3e74dc',
        },
        'accent': {
          DEFAULT: '#ff6b6b',
          hover: '#dc5151',
        },
        'error': {
          DEFAULT: '#e64646',
          light: '#ff9191',
        },
        'green': {
          DEFAULT: '#259f30',
          hover: '#1e8c27',
        },
        'custom-gray': '#a0a5b6',
        'light-blue': '#e8edf3',
        'bg': '#fff',
      },
      fontFamily: {
        montserrat: 'var(--font-montserrat)',
        poppins: 'var(--font-poppins)',
      },
      fontSize: {
        '48-700': ['48px', { fontWeight: '700', lineHeight: 'normal' }],
        '42-700': ['42px', { fontWeight: '700', lineHeight: 'normal' }],
        '36-700': ['36px', { fontWeight: '700', lineHeight: 'normal' }],
        '32-700': ['32px', { fontWeight: '700', lineHeight: 'normal' }],

        '26-700': ['26px', { fontWeight: '700', lineHeight: 'normal' }],
        '26-400': ['26px', { fontWeight: '400', lineHeight: 'normal' }],

        '24-700': ['24px', { fontWeight: '700', lineHeight: 'normal' }],
        '24-400': ['24px', { fontWeight: '400', lineHeight: 'normal' }],

        '20-700': ['20px', { fontWeight: '700', lineHeight: 'normal' }],
        '20-400': ['20px', { fontWeight: '400', lineHeight: 'normal' }],

        '18-700': ['18px', { fontWeight: '700', lineHeight: 'normal' }],

        '16-700': ['16px', { fontWeight: '700', lineHeight: 'normal' }],
        '16-400': ['16px', { fontWeight: '400', lineHeight: 'normal' }],

        '14-400': ['14px', { fontWeight: '400', lineHeight: 'normal' }],
        '14-700': ['14px', { fontWeight: '700', lineHeight: 'normal' }],
      },
      height: {
        header: '80px',
        58: '58px',
      },
      borderRadius: {
        5: '20px',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 2s ease infinite',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #dc5151 0%, #3e74dc 100%)',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1080px',
      xl: '1608px',
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '768px',
        lg: '1080px',
        xl: '1608px',
      },
      padding: {
        DEFAULT: '10px',
        sm: '15px',
        xl: '20px',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
export default config
