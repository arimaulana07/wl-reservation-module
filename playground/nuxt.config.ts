export default defineNuxtConfig({
  runtimeConfig: {
    baseApiUrl: '',
    trailingApiUrl: '',
    grantType: '',
    clientId: '',
    clientSecret: '',
  },
  modules: ['../src/module', 'wl-api-collections-module'],
  myModule: {},
  devtools: { enabled: true }
})
