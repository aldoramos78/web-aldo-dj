/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        principal: '#0D0D11',
        card: '#1A1A22',
        acento: {
          DEFAULT: '#8B5CF6',
          hover: '#9D75F8',
          glow: 'rgba(139, 92, 246, 0.7)'
        },
        plata: {
          premium: '#E2E8F0',
          muted: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Outfit', 'sans-serif']
      },
      boxShadow: {
        'neon': '0 0 25px rgba(139, 92, 246, 0.45)',
        'neon-lg': '0 0 45px rgba(139, 92, 246, 0.65)',
        'card-glow': '0 10px 30px -10px rgba(139, 92, 246, 0.3)'
      }
    },
  },
  plugins: [],
}
