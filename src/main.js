import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './i18n'
import { Icon } from '@iconify/vue'
import './assets/index.css'

const app = createApp(App)

// Register Iconify component globally
app.component('Icon', Icon)

app.use(i18n)
app.mount('#app')
