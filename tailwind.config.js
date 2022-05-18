module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    backgroundPosition: {
      0: 0,
    },
    extend: {
      animation: {
        fadein: 'fadein 2s both',
        jelloHorizontal: 'jelloHorizontal 0.9s both',
        shakeVertical: 'shakeVertical 7s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both',
        fadeInBottom: 'fadeInBottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both',
        slideInTop: 'slideInTop 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        typedOut: 'typing 1.5s steps(30, end) both, blinkCaret 0.75s step-end infinite both',
        zzz: 'zzz 2s ease-out infinite both',
      },
      animationDelay: {
        1: '10s',
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
        project: '#383A3F',
        card: 'rgb(17, 34, 64)',
        comp: '#808080',
        // 17, 34, 64
      },
      fontFamily: {
        LBA: ['La Belle Aurore, cursive'],
        OpenSans: ['Open Sans, sans-serif'],
        Manrope: ['Manrope, sans-serif'],
        ConcertOne: ['Concert One, cursive'],
      },
      height: {
        128: '32rem',
        160: '40rem',
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
        fadeInBottom: {
          '0%': {
            transform: 'translateY(50px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        slideInTop: {
          '0%': {
            transform: 'translateY(-1000px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        blinkCaret: {
          from: {
            borderColor: 'transparent',
          },
          '50%': {
            borderColor: 'orange',
          },
          to: {
            borderColor: 'orange',
          },
        },
        typing: {
          from: {
            width: '0',
          },
          to: {
            width: '100%',
          },
        },
        zzz: {
          '0%': {
            color: 'rgba(160,84,246,0)',
            fontSize: '20px',
            transform: 'translateY(100%)',
            opacity: '1',
          },
          '80%': {
            opacity: '1',
          },
          '100%': {
            color: 'rgba(160,84,246,1)',
            fontSize: '50px',
            transform: 'translateY(-100%)',
            opacity: '0',
          },
        },
      },
      scale: {
        1000: '10',
        1100: '11',
        1200: '12',
        1300: '13',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
