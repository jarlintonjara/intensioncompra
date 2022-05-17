require('./bootstrap');
import './../css/app.css';
import { ExpExcel } from './utils.js';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'datatables.net-dt';
import datatable from 'datatables.net';
import 'datatables.net-buttons/js/buttons.print.js';
import 'datatables.net-buttons/js/buttons.colVis.js';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'vue-select/dist/vue-select.css';
import jszip from 'jszip/dist/jszip';
import App from './pages/App.vue';
import { Vuelidate } from 'vuelidate';
import Vue from 'vue';
window.Vue = Vue;

import VueAxios from 'vue-axios';
import axios from 'axios';

import vSelect from 'vue-select';
Vue.config.productionTip = false;

Vue.component('v-select', vSelect)
Vue.use(VueAxios, axios); 
   
Vue.use(VueSweetalert2);
window.JSZip = jszip;

Vue.prototype.$dateFormat = function(date){
    let dt = new Date(date);
    let year  = dt.getFullYear();
    let month = (dt.getMonth() + 1).toString().padStart(2, "0");
    let day   = dt.getDate().toString().padStart(2, "0");
    return day +"-"+ month+"-"+ year
}
Vue.prototype.$tablaGlobal = function(nombreTabla) {
    this.$nextTick(() => {
        $(nombreTabla).DataTable({
            //"scrollX": true,
            //"bAutoWidth" : true,
            //responsive: true,
            "initComplete": function (settings, json) {  
                $(nombreTabla).wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
            },
            "language": {
                "url": "https://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
            }
        });
  
    })
}

Vue.prototype.$exportExcel = function(dataSend){
    ExpExcel(dataSend.dataExcel, dataSend.filename, dataSend.name, dataSend.vacios);
}

import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(Vuelidate);
const app = new Vue({
    el: '#app',
    components: {App},
    router: new VueRouter(routes)
});