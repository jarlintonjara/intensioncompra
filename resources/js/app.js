require('./bootstrap');
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Vue from 'vue';
window.Vue = Vue;

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios); 

Vue.use(VueSweetalert2);

import App from './components/App.vue';

import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    components: {App},
    router: new VueRouter(routes)
});