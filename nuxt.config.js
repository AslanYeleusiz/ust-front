export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Ustaz tilegi - Ұстаз тілегі Республикалық ұастаздар сайты',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            }
    ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap'
            }
    ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '@/assets/main.css',
      '@/assets/media.css',
      '@/assets/fonts/Gilroy/gilroy.css',
  ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: '@/plugins/vue-carousel.js',
            mode: 'client',
        },
        {
            src: '@/plugins/v-mask.js',
            mode: 'client',
        },
        {
            src: '@/plugins/loginApp.js',
            mode: 'client',
        },
        {
            src: '@/plugins/loginOrRoute.js',
            mode: 'client',
        },
        {
            src: '@/plugins/customAxios.js',
            mode: 'client',
        },
        {
            src: '@/plugins/route.js',
            mode: 'client',
        },

  ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
  ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
    auth: {
        strategies: {
            'laravelJWT': {
                provider: 'laravel/jwt',
                url: '/',
                endpoints: {
                    login: {
                        url: '/auth/login',
                        method: 'post',
                        propertyName: false
                    },
                    logout: {
                        url: '/auth/logout',
                        method: 'post',
                        propertyName: false
                    },
                    refresh: {
                        url: '/auth/refresh',
                        method: 'post',
                        propertyName: false
                    },
                    user: {
                        url: '/auth/user',
                        method: 'get',
                        propertyName: false
                    }
                },
                token: {
                    property: 'access_token',
                    maxAge: 60 * 60
                },
                refreshToken: {
                    maxAge: 20160 * 60
                },
            },
        }
    },
    axios: {
        baseURL: 'http://127.0.0.1:8000/api',
        retry: true,
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            compact: true,
        },
    }
}
