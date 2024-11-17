import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faArrowRight , faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'

library.add(faXmark, faHeart, faArrowRight, faAngleLeft);
const appName = import.meta.env.VITE_APP_NAME || 'Wesele - Magdalena & Hubert';
const app = createApp(App);

app.use(createPinia())
app.use(router)
app.use(VueReCaptcha, {siteKey: '6LdK4fApAAAAANSwQKUq2A0fChdh4OXrmEY42PSk'})
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('pulse-loader', PulseLoader);
app.mount('#app')
