/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import ar from '@/locale/ar.json'
import en from '@/locale/en.json'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@/styles/styles.scss'
import '@core/scss/index.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
const l18n = createI18n({
  locale: 'ar', // set locale
  fallbackLocale: 'ar', // set fallback locale
  messages : {
    en,
    ar,
  },    
})



loadFonts()
const app = createApp(App)
app.use(vuetify)
app.use(l18n)
app.use(createPinia())
app.use(router)
app.mount('#app')

