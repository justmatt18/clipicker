// Configuration for your app

module.exports = function(ctx) {
    return {
        // app plugins (/src/plugins)
        plugins: [
            'axios',
            'clipicker',
            'vuelidate',
            'cliPickerAnnouncer'
        ],
        css: [
            'app.styl'
        ],
        extras: [
            'roboto-font',
            'material-icons',
            'fontawesome',
            'ionicons',
            'mdi',
        ],
        supportIE: false,
        build: {
            scopeHoisting: true,
            vueRouterMode: 'history',
            // vueCompiler: true,
            // gzip: true,
            // analyze: true,
            // extractCSS: false,
            extendWebpack(cfg) {}
        },
        devServer: {
            // https: true,
            // port: 8080,
            port: 1818,
            open: true // opens browser window automatically
        },
        // framework: 'all' --- includes everything; for dev only!
        framework: {
            components: [
                'QLayout',
                'QLayoutHeader',
                'QLayoutDrawer',
                'QPageContainer',
                'QPage',
                'QToolbar',
                'QToolbarTitle',
                'QBtn',
                'QIcon',
                'QList',
                'QListHeader',
                'QItem',
                'QItemMain',
                'QItemSide',
                'QDialog',
                'QRadio',
                'QTabs',
                'QTab',
                'QRouteTab',
                'QTabPane',
                'QLayoutFooter',
                'QScrollArea',
                'QInput',
                'QChip',
                'QModal',
                'QModalLayout',
                'QPopover',
                'QItemTile',
                'QDatetime',
                'QSearch',
                'QJumbotron',
                'QAutocomplete',
                'QChipsInput',
                'QSelect',
                'QSlider'
            ],
            directives: [
                'Ripple',
                'CloseOverlay'
            ],
            // Quasar plugins
            plugins: [
                'Notify',
                'Dialog'
            ],
            iconSet: 'fontawesome'
                // i18n: 'de' // Quasar language
        },
        // animations: 'all' --- includes all animations
        animations: [],
        ssr: {
            pwa: false
        },
        pwa: {
            // workboxPluginMode: 'InjectManifest',
            // workboxOptions: {},
            manifest: {
                // name: 'Quasar App',
                // short_name: 'Quasar-PWA',
                // description: 'Best PWA App in town!',
                display: 'standalone',
                orientation: 'portrait',
                background_color: '#ffffff',
                theme_color: '#027be3',
                icons: [{
                        'src': 'statics/icons/icon-128x128.png',
                        'sizes': '128x128',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-192x192.png',
                        'sizes': '192x192',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-256x256.png',
                        'sizes': '256x256',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-384x384.png',
                        'sizes': '384x384',
                        'type': 'image/png'
                    },
                    {
                        'src': 'statics/icons/icon-512x512.png',
                        'sizes': '512x512',
                        'type': 'image/png'
                    }
                ]
            }
        },
        cordova: {
            id: 'com.clipicker.me',
            version: '1.0.0'
        },
        electron: {
            // bundler: 'builder', // or 'packager'
            extendWebpack(cfg) {
                // do something with Electron process Webpack cfg
            },
            packager: {
                // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

                // OS X / Mac App Store
                // appBundleId: '',
                // appCategoryType: '',
                // osxSign: '',
                // protocol: 'myapp://path',

                // Window only
                // win32metadata: { ... }
            },
            builder: {
                // https://www.electron.build/configuration/configuration

                // appId: 'quasar-app'
            }
        }
    }
}
