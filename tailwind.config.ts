import type { Config } from 'tailwindcss';

const tailwindConfig = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{md,mdx}',
    './theme.config.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        'space-grotesk': ['Space Grotesk', 'monospace'],
        mono: [
          'Menlo',
          'Monaco',
          'Lucida Console',
          'Liberation Mono',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'Courier New',
          'monospace'
        ]
      },
      borderRadius: {
        none: '0',
        xs: '7px',
        sm: '9px',
        md: '12px',
        DEFAULT: '14px',
        lg: '14px',
        xl: '18px',
        '2xl': '24px',
        '3xl': '32px',
        squared: '33%',
        rounded: '50%',
        full: '9999px'
      },

      animation: {
        appear: 'appear 0.5s ease forwards'
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
} satisfies Config;

export default tailwindConfig;
