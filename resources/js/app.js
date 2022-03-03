require('./bootstrap');
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import dataTable from 'datatables.net'



import Vue from 'vue';
window.Vue = Vue;

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios); 

Vue.use(VueSweetalert2);

import App from './components/App.vue';

Vue.prototype.$dateFormat = function(date){
    let dt = new Date(date);
    let year  = dt.getFullYear();
    let month = (dt.getMonth() + 1).toString().padStart(2, "0");
    let day   = dt.getDate().toString().padStart(2, "0");
    return day +"-"+ month+"-"+ year
}
Vue.prototype.$tablaGlobal = function(nombreTabla) {
    this.$nextTick(() => {
        $(nombreTabla).DataTable();
    })
}

import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    components: {App},
    router: new VueRouter(routes)
});