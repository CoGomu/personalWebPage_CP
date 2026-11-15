/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          // DEFAULT: '#ffffff',
          DEFAULT: '#ebf2fa',
          // dark: '#0f0f0f',
          dark: '#1a1a1a',
        },
        surface: {
          // DEFAULT: '#ffffff',
          DEFAULT: '#ebf2fa',
          dark: '#1a1a1a',
        },
        surfaceHover: {
          // DEFAULT: '#f5f5f5',
          DEFAULT: '#ebf2fa',
          dark: '#222222',
        },
        border: {
          DEFAULT: '#ebf2fa',
          dark: '#2a2a2a',
        },
        primary: {
          // DEFAULT: '#1a1a1a',
          DEFAULT: '#14467b',
          // dark: '#f0f0f0',
          dark: '#ffffff',
        },
        primaryDark: {
          DEFAULT: '#1a1a1a',
          dark: '#ffffff',
        },
        secondary: {
          // DEFAULT: '#6b7280',
          DEFAULT: '#14467b',
          dark: '#ffffff',
        },
        accent: '#818cf8',
        accentHover: '#6366f1',
      },
      // fontFamily: {
      //   sans: ['Inter', 'system-ui', 'sans-serif'],
      // },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        visby: ['Visby CF', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        cardHover: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
        cardDark: '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
        cardHoverDark: '0 10px 15px -3px rgba(0,0,0,0.5), 0 4px 6px -2px rgba(0,0,0,0.4)',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
      },
    },
  },
  plugins: [],
}
