import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faArrowRight , faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'
import store from './store'

library.add(faXmark, faHeart, faArrowRight, faAngleLeft);
const appName = import.meta.env.VITE_APP_NAME || 'Wesele - Magdalena & Hubert';

const app = createApp({
    extends: App
})

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
