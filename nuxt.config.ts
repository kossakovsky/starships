import NuxtConfiguration from '@nuxt/config'
import { API_URL, NODE_ENV } from './config'

const config: NuxtConfiguration = {
  axios: { baseURL: API_URL, debug: NODE_ENV !== 'production' },
  mode: 'universal',
  env: { API_URL, NODE_ENV },
  loading: { color: '#3ea6f5', continuous: true, height: '3px' },
  pageTransition: { name: 'fade', mode: 'out-in' },
  server: { port: 5000, host: 'localhost' },
  modules: ['@nuxtjs/vuetify', '@nuxtjs/axios', '@nuxtjs/eslint-module'],
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}

export default config
