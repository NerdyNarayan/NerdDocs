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
      colors: {
        transparent: 'transparent',
        white: '#D9E0EE', // Latte: #4C4F69, Frappe: #F5E0DC, Macchiato: #F4DBD6, Mocha: #D9E0EE
        black: '#1E1E2E', // Latte: #EFF1F5, Frappe: #303446, Macchiato: #161320, Mocha: #1E1E2E
        background: {
          light: '#F5E0DC', // Latte: #EFF1F5, Frappe: #292C3C, Macchiato: #181926, Mocha: #1E1E2E
          DEFAULT: '#1E1E2E',
          dark: '#1E1E2E'
        },
        foreground: {
          light: '#A6ADC8', // Latte: #4C4F69, Frappe: #B5BFE2, Macchiato: #F4DBD6, Mocha: #D9E0EE
          DEFAULT: '#D9E0EE',
          dark: '#F5E0DC'
        },
        border: {
          light: '#1E1E2E80', // Latte: #B5BFE2, Frappe: #C6D0F5, Macchiato: #F5E0DC, Mocha: #F5E0DC
          DEFAULT: '#1E1E2E80',
          dark: '#D9E0EE80'
        },
        neutral: {
          // Use a suitable neutral color from the Catppuccin palette
          DEFAULT: '#B4B4BB'
        },
        primary: {
          light: '#8AADF4', // Latte: #D28BEF, Frappe: #B5BFE2, Macchiato: #F4DBD6, Mocha: #F4D0AB
          DEFAULT: '#8AADF4',
          dark: '#8AADF4'
        },
        secondary: {
          light: '#C6AAE8', // Latte: #F4D0AB, Frappe: #A6ADC8, Macchiato: #F5E0DC, Mocha: #A6ADC8
          DEFAULT: '#C6AAE8',
          dark: '#B4BEFE'
        },
        success: {
          light: '#A6DA95', // Latte: #9D79D6, Frappe: #C6D0F5, Macchiato: #F5E0DC, Mocha: #F4D0AB
          DEFAULT: '#A6DA95',
          dark: '#A6DA95'
        },
        warning: {
          light: '#E5C890', // Latte: #E49B0F, Frappe: #C6D0F5, Macchiato: #F4D0AB, Mocha: #F4D0AB
          DEFAULT: '#E5C890',
          dark: '#DCA561'
        },
        error: {
          light: '#ED8796', // Latte: #DDB6F2, Frappe: #E78284, Macchiato: #F4D0AB, Mocha: #F4D0AB
          DEFAULT: '#ED8796',
          dark: '#ED8796'
        },
        red: {
          // Use a suitable red color from the Catppuccin palette
          DEFAULT: '#ED8796'
        },
        yellow: {
          // Use a suitable yellow color from the Catppuccin palette
          DEFAULT: '#EED49F'
        },
        green: {
          // Use a suitable green color from the Catppuccin palette
          DEFAULT: '#A6DA95'
        },
        blue: {
          // Use a suitable blue color from the Catppuccin palette
          DEFAULT: '#8AADF4'
        },
        purple: {
          // Use a suitable purple color from the Catppuccin palette
          DEFAULT: '#B4BEFE'
        },
        pink: {
          // Use a suitable pink color from the Catppuccin palette
          DEFAULT: '#F5E0DC'
        }
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
