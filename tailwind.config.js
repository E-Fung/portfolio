module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      height: {
        128: '32rem',
      },
      keyframes: {
        fadein: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        jelloHorizontal: {
          '0%': {
            transform: 'scale3d(1, 1, 1)',
          },
          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },
          ' 40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },
          '50% ': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },
          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },
          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)',
          },
        },
        shakeVertical: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '10%, 30%, 50%, 70%': {
            transform: 'translateY(-8px)',
          },
          '20%, 40%, 60%': {
            transform: 'translateY(8px)',
          },
          '80%': {
            transform: 'translateY(6.4px)',
          },
          '90%': {
            transform: 'translateY(-6.4px)',
          },
        },
      },
      animation: {
        fadein: 'fadein 2s both',
        jelloHorizontal: 'jelloHorizontal 0.9s both',
        shakeVertical: 'shakeVertical 7s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both',
      },
      fontFamily: {
        LBA: ['La Belle Aurore, cursive'],
        OpenSans: ['Open Sans, sans-serif'],
        Manrope: ['Manrope, sans-serif'],
      },
      colors: {
        dark: 'rgb(4, 11, 20)',
        light: 'rgb(76,76,76)',
        accent: 'rgb(0,0,0)',
        primary: '#667080',
        secondary: '#EEF1F4',
        primaryDeep: '#393F48',
        secondaryDeep: '#C3C6C9',
        background: 'rgb(29,29,29)',
        sidebar: 'rgb(24,24,24)',
        highlight: '#08fdd8',
      },
      animationDelay: {
        1: '10s',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
