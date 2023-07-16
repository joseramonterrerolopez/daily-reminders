import 'mdb-vue-ui-kit/css/mdb.min.css'
import './_global/assets/app.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
