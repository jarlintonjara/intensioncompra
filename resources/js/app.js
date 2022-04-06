require('./bootstrap');
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'datatables.net-dt'
import datatable from 'datatables.net'
import 'datatables.net-buttons/js/buttons.print.js'
import 'datatables.net-buttons/js/buttons.colVis.js'
import 'datatables.net-buttons/js/buttons.html5.js'
import 'vue-select/dist/vue-select.css';
import jszip from 'jszip/dist/jszip'
import App from './components/App.vue';

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
document.title = "Programación de estacionamiento";

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
            dom: `<'row'<'col-sm-12 mb-3'B>>
                    <'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6 text-right'f>>" +
                        "<'row'<'col-sm-12'tr>>" +
                             "<'row'<'col-sm-12 col-md-12'i><'col-sm-12 col-md-12'p>>`,
            "buttons": [
                {
                    "extend":    'copyHtml5',
                    "text": "<i class='fas fa-copy'></i> Copiar",
                    "titleAttr": 'Copy',
                    "className": "btn btn-primary"
                },
                {
                    "extend": "excelHtml5",
                    "text": "<i class='fas fa-file-excel'></i> Excel",
                    "titleAttr": "Esportar a Excel",
                    "className": "btn btn-success"
                },
                {
                    "extend": "print",
                    "text": "<i class='fas fa-print'></i> Imprimir",
                    "titleAttr": "Imprimir archivo",
                    "className": "btn btn-secondary"
                }
            ],
            "language": {
                "url": "https://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
            }
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