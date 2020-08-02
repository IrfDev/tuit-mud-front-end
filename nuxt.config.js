module.exports = {
  head: {
    title: 'Tuitmud 🦜',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Know your mood, topics and stuff you like from your Tweets',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
        integrity:
          'sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh',
        crossorigin: 'anonymous',
      },
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js',
        integrity:
          'sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n',
        crossorigin: 'anonymous',
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
        integrity:
          'sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo',
        crossorigin: 'anonymous',
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
        integrity:
          'sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6',
        crossorigin: 'anonymous',
      },
      {
        src: 'https://kit.fontawesome.com/767b73986e.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff00' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  axios: {
    proxy: true,
    baseUrl: '/',
  },
  router: {
    middleware: ['randomPeep'],
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-174279015-1',
      },
    ],
    '@nuxtjs/style-resources',
    '@nuxtjs/global-components',
    // '@nuxtjs/proxy',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
  ],
  proxy: {
    '/apis/': {
      target: 'http://localhost:8080',
      pathRewrite: { '^/apis': '' },
    },
  },
  styleResources: {
    scss: ['@assets/styles/variables.scss'],
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
