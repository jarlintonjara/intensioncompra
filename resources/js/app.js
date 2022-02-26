require('./bootstrap');
import Vue from 'vue';
window.Vue = Vue;
import App from './components/App.vue';

import VueAxios from 'vue-axios';
import axios from 'axios';

import VueRouter from 'vue-router';
import { routes } from './route';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
const router = new VueRouter({
    mode: 'history',
    routes: routes
})

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
