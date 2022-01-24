module.exports = {
    pwa: {
        name: "HTWG Beads",
        short_name: "Beads",
        themeColor: "#42b983",
        appleMobileWebAppCache: "yes",
        manifestOptions: {
            background_color: "#42b983"
        },
        workboxOptions: {
            navigateFallback: 'index.html'
        },
        iconPaths: {
            favicon32: 'img/icons/flower.png',
            favicon16: 'img/icons/flower.png',
        },
        icons: [
            {
                src: "src/public/img/icons/flower.png",
                sizes: "512x512",
                purpose: "image/png",
            },
        ],
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
