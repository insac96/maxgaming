export default defineNuxtConfig({
  devtools: { enabled: false },

  srcDir: './src/client',

  serverDir: './src/server',
  
  nitro: {
    output: { 
      dir: 'dist/output',
    }
  },

  runtimeConfig: {
    DEV: process.env.NODE_ENV === 'production' ? false : true,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_DB: process.env.MONGO_DB,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    COOKIE_CONFIG: {
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000
    },
    public: {
      CLIENT_URL: process.env.CLIENT_URL
    }
  },

  modules: [
    '@pinia/nuxt', 
    '@nuxt/ui', 
    '@nuxt/image',
    ['@nuxtjs/google-fonts', {
      display: 'swap',
      download: true,
      families: {
        Montserrat: [300,400,500,600,700]
      }
    }],
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'vi' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, interactive-widget=resizes-content',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
    '@/app.css'
  ],

  image: {
    domains: [ process.env.DOMAIN as string ]
  },
})