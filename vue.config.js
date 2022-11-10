const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Health Mate',
    workboxOptions: {
      navigateFallback: 'index.html'
    }
  }
})
