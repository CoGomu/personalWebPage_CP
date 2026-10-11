/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#ffffff',
          dark: '#0f0f0f',
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#1a1a1a',
        },
        surfaceHover: {
          DEFAULT: '#f5f5f5',
          dark: '#222222',
        },
        border: {
          DEFAULT: '#e5e5e5',
          dark: '#2a2a2a',
        },
        primary: {
          DEFAULT: '#1a1a1a',
          dark: '#f0f0f0',
        },
        primaryDark: {
          DEFAULT: '#1a1a1a',
          dark: '#f0f0f0',
        },
        secondary: {
          DEFAULT: '#6b7280',
          dark: '#a0a0a0',
        },
        accent: '#818cf8',
        accentHover: '#6366f1',
        goldbeige: '#d8c3a5',
        lightgoldbeige: '#FFFFE0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom right, #0f0f0f, #1a1a1a)',
        'gradient-light': 'linear-gradient(to bottom right, #ffffff, #f5f5f5)',
      },
    },
  },
  plugins: [],
}
