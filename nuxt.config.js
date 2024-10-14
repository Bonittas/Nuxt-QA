import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lite-youtube'].includes(tag),
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/storybook',
    '@pinia/nuxt' 
  ],
  components: true,
})
