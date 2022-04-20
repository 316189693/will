import { createApp } from 'vue'
import App from './components/App.vue'
import  routes from './router/router'
import {createRouter, createWebHashHistory} from 'vue-router';
import stores from "./store/index";
const router = createRouter({
   history: createWebHashHistory(),
   routes: routes
});

const app = createApp(App);
app.use(router)
app.use(stores)
app.mount('#app')
