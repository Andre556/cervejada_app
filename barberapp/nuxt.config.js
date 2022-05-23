export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'barberapp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',

    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDJfbh6TOv-DRmpNr44USz-9dnCLDjO8WQ",
          authDomain: "vue-test-c0b2f.firebaseapp.com",
          databaseURL: "https://vue-test-c0b2f.firebaseio.com",
          projectId: "vue-test-c0b2f",
          storageBucket: "vue-test-c0b2f.appspot.com",
          messagingSenderId: "988530461289",
          appId: "1:988530461289:web:60dcbedd34177a369a30f8",
          measurementId: "G-XB8685P6DQ"
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true // Just as example. Can be any other service.
        },
        auth: {
          initialize: {
            onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION'
          }
        }
      }
      ]

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},




}
