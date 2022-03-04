require('./bootstrap');
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'datatables.net-dt'
import datatable from 'datatables.net'
import 'datatables.net-buttons/js/buttons.print.js'
import 'datatables.net-buttons/js/buttons.colVis.js'
import 'datatables.net-buttons/js/buttons.html5.js'

import print from 'datatables.net-buttons/js/buttons.print'
import jszip from 'jszip/dist/jszip'


import Vue from 'vue';
window.Vue = Vue;

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios); 

Vue.use(VueSweetalert2);
window.JSZip = jszip
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
        $(nombreTabla).DataTable( {
            responsive: true,
            "dom": '<"html5buttons"B>lTfgtip',
            "buttons": [
                {
                    "extend": "excelHtml5",
                    "text": "<i class='fas fa-file-excel'></i> Excel",
                    "titleAttr": "Esportar a Excel",
                    "className": "btn btn-success"
                },
                {
                    "extend": "print",
                    "text": "<i class='fas fa-file-csv'></i> Imprimir",
                    "titleAttr": "Imprimir archivo",
                    "className": "btn btn-secondary"
                }
            ]
        });
  
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