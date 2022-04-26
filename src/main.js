import { createApp } from 'vue'
import App from './components/App.vue'
import  routes from './router/router'
import {createRouter, createWebHashHistory} from 'vue-router';
import stores from "./store/index";

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

const router = createRouter({
   history: createWebHashHistory(),
   routes: routes
});



const app = createApp(App);
app.use(router)
app.use(stores)
app.use(BalmUI);
app.use(BalmUIPlus);
app.mount('#app')
