import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

axios.interceptors.response.use(r => r, e => e.response);

createApp(App).use(store).use(router).mount('#app')
