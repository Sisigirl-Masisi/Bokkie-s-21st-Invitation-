/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        blush:      { DEFAULT: '#F2C4C4', deep: '#E8A598', light: '#FAE8E8' },
        sage:       { DEFAULT: '#8FAF8A', deep: '#6B9465', light: '#C8DCC5' },
        ochre:      { DEFAULT: '#D4A853', deep: '#C8943A', light: '#EDD89A' },
        cream:      { DEFAULT: '#FAF6F0', warm: '#F5EDE0', deep: '#EDE0CE' },
        ink:        { DEFAULT: '#2C2118', soft: '#5C4A38', faint: '#9C8A78' },
        paper:      '#FAF6F0',
      },
      backgroundImage: {
        'watercolor-hero':
          'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(242,196,196,0.6) 0%, transparent 60%), radial-gradient(ellipse 60% 70% at 75% 60%, rgba(143,175,138,0.5) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 50% 90%, rgba(212,168,83,0.35) 0%, transparent 50%)',
      },
      animation: {
        'bleed-blush': 'bleedBlush 3.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'bleed-sage':  'bleedSage 4s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s both',
        'bleed-ochre': 'bleedOchre 3.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.8s both',
        'blob-float':  'blobFloat 12s ease-in-out infinite',
        'marquee':     'marqueeScroll 28s linear infinite',
      },
    },
  },
  plugins: [],
}