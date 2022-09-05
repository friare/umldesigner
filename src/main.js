import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueHighlightJS from 'vue-highlightjs'

createApp(App).use(router).use(VueHighlightJS).mount('#app')
