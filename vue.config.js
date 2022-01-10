module.exports = {
    pwa: {
        name: "Beads-App",
        themeColor: "#42b983",
        appleMobileWebAppCache: "yes",
        manifestOptions: {
            background_color: "#42b983"
        }
    },

    pluginOptions: {
      quasar: {
        importStrategy: 'kebab',
        rtlSupport: true
      }
    },

    transpileDependencies: [
      'quasar'
    ]
};
