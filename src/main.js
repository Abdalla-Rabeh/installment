import "bootstrap/dist/css/bootstrap.min.css"
/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import ar from '@/locale/ar.json'
import en from '@/locale/en.json'
import VueSweetalert2 from 'vue-sweetalert2';
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@/styles/styles.scss'
import '@core/scss/index.scss'
// import pinia from './store/index';

import 'sweetalert2/dist/sweetalert2.min.css'
import { createApp } from 'vue'
import VueGoodTablePlugin from "vue-good-table-next"
import "vue-good-table-next/dist/vue-good-table-next.css"
import { createI18n } from 'vue-i18n'
const l18n = createI18n({
  locale: localStorage.getItem('lang') || 'ar', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages : {
    en,
    ar,
  },    
})





loadFonts()
const app = createApp(App)
app.use(vuetify)
app.use(VueSweetalert2);
app.use(l18n)
app.use(VueGoodTablePlugin)
// app.use(pinia)

app.use(router)
app.mount('#app')

