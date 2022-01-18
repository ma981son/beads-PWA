import { createApp } from 'vue'
import App from './App.vue'
import wb from './registerServiceWorker'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import mitt from 'mitt'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBMIVW_cCHlJyJR6gW3Quk9ynM2wcFKXGU",
    authDomain: "beads-app-f5b27.firebaseapp.com",
    projectId: "beads-app-f5b27",
    storageBucket: "beads-app-f5b27.appspot.com",
    messagingSenderId: "772696025777",
    appId: "1:772696025777:web:ae4d1a2f41b9ef9ef1d090",
    measurementId: "G-P436Q2SJ0B"
};

firebase.initializeApp(firebaseConfig);

const eventBus = mitt()
document.title = "HTWG Beads"

const app = createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(router)

app.config.globalProperties.eventBus = eventBus
app.config.globalProperties.$workbox = wb

app.mount('#app')

