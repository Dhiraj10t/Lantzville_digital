/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* slate-200 */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* blue-600 */
        background: "var(--color-background)", /* slate-50 */
        foreground: "var(--color-foreground)", /* slate-800 */
        primary: {
          DEFAULT: "var(--color-primary)", /* blue-600 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* emerald-600 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* slate-100 */
          foreground: "var(--color-muted-foreground)", /* slate-500 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* amber-500 */
          foreground: "var(--color-accent-foreground)", /* slate-800 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* slate-800 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* slate-800 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* emerald-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-500 */
          foreground: "var(--color-warning-foreground)", /* slate-800 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        // Brand-specific colors
        'coastal-blue': "var(--color-primary)", /* blue-600 */
        'forest-green': "var(--color-secondary)", /* emerald-600 */
        'sunset-orange': "var(--color-accent)", /* amber-500 */
        'emergency-red': "var(--color-destructive)", /* red-600 */
        'coastal-mist': "var(--color-background)", /* slate-50 */
        'deep-slate': "var(--color-text-primary)", /* slate-800 */
        'coastal-gray': "var(--color-text-secondary)", /* slate-500 */
      },
      borderRadius: {
        lg: "var(--radius-lg)", /* 16px */
        md: "var(--radius-md)", /* 12px */
        sm: "var(--radius-sm)", /* 8px */
        xl: "var(--radius-xl)", /* 24px */
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Crimson Text', 'Georgia', 'serif'],
        accent: ['Crimson Text', 'Georgia', 'serif'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'brand': 'var(--shadow-brand)',
        'elevated': 'var(--shadow-elevated)',
        'subtle': 'var(--shadow-subtle)',
        'card': 'var(--shadow-card)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-coastal': 'linear-gradient(135deg, #2563EB 0%, #059669 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #F59E0B 0%, #DC2626 100%)',
        'gradient-mist': 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
      },
      clipPath: {
        'ellipse': 'ellipse(100% 100% at 50% 0%)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-ellipse': {
          'clip-path': 'ellipse(100% 100% at 50% 0%)',
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'var(--color-muted)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'var(--color-border)',
            'border-radius': '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'var(--color-muted-foreground)',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}