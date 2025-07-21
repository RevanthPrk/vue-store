import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vFocus from './directives/v-focus.js'
import vCopy from './directives/v-copy.js'
import vLongpress from './directives/v-longpress.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('focus', vFocus)
app.directive('copy', vCopy)
app.directive('longpress', vLongpress)
app.mount('#app')
