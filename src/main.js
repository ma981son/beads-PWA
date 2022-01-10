import { createApp } from 'vue'
import App from './App.vue'
import wb from './registerServiceWorker'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions).use(router)
app.config.globalProperties.$workbox = wb
app.mount('#app')

