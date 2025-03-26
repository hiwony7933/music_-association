// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@pinia/nuxt', '@nuxt/image', '@vite-pwa/nuxt'],
  eslint: {
    lintOnStart: false, // 시작 시 린트 실행 여부
    cache: false, // 캐시 활성화 여부
  },
  css: ['@/assets/css/main.css'],
  image: {
    provider: 'ipx',
    quality: 80,
    format: ['webp', 'avif', 'jpeg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '기본 제목',
      meta: [
        { name: 'description', content: '기본 설명' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  build: {
    analyze: true, // 번들 분석 활성화
  },
  pwa: {
    manifest: {
      name: '앱 이름',
      short_name: '짧은 이름',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
  },
  runtimeConfig: {
    public: {
      apiCache: {
        maxAge: 60 * 60, // 1시간
      },
    },
  },
})
