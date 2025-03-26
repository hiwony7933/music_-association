// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module'],
  eslint: {
    lintOnStart: false, // 시작 시 린트 실행 여부
    cache: false, // 캐시 활성화 여부
  },
  css: ['@/assets/css/main.css'],
})
