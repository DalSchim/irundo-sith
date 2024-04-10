const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/form',
        '/qui-sommes-nous',
        '/mentions-legales',
        '/politique-de-confidentialite'
      ],
      useRenderEvent: true,
      headless: false,
      onlyProduction: true
    }
  }
})







