import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router) // This is mandatory for routes to work!

app.mount('#app')