const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  runtimeCompiler:true,
  pwa: {
    name: 'Health Mate',
    workboxOptions: {
      navigateFallback: 'index.html'
    }
  }
})
