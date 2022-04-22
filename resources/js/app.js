require('./bootstrap');
import './../css/app.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'datatables.net-dt'
import datatable from 'datatables.net'
import 'datatables.net-buttons/js/buttons.print.js'
import 'datatables.net-buttons/js/buttons.colVis.js'
import 'datatables.net-buttons/js/buttons.html5.js'
import 'vue-select/dist/vue-select.css';
import jszip from 'jszip/dist/jszip'
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

Vue.prototype.$date = function(Fecha){
    let Dia = Fecha.toString().substr(6, 2);
    let Mes = Fecha.toString().substr(3, 2);
    let Anio = Fecha.toString().substr(0, 4);
    let Fecha_Registro = Dia + '-' + Mes + '-' + Anio ;
    return Fecha_Registro;
}
Vue.prototype.$dateFormat = function(date){
    let dt = new Date(date);
    let year  = dt.getFullYear();
    let month = (dt.getMonth() + 1).toString().padStart(2, "0");
    let day   = dt.getDate().toString().padStart(2, "0");
    return year +"-"+ month+"-"+ day
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
$(document).ready(function(){

    /* flot toggle example */
    var flot_toggle = function()
    {

        var data = [
        {
            label: "Target Profit",
            data: dataTargetProfit,
            color: color.info._400,
            bars:
            {
                show: true,
                align: "center",
                barWidth: 30 * 30 * 60 * 1000 * 80,
                lineWidth: 0,
                /*fillColor: {
                    colors: [color.primary._500, color.primary._900]
                },*/
                fillColor:
                {
                    colors: [
                    {
                        opacity: 0.9
                    },
                    {
                        opacity: 0.1
                    }]
                }
            },
            highlightColor: 'rgba(255,255,255,0.3)',
            shadowSize: 0
        },
        {
            label: "Actual Profit",
            data: dataProfit,
            color: color.warning._500,
            lines:
            {
                show: true,
                lineWidth: 2
            },
            shadowSize: 0,
            points:
            {
                show: true
            }
        },
        {
            label: "User Signups",
            data: dataSignups,
            color: color.success._500,
            lines:
            {
                show: true,
                lineWidth: 2
            },
            shadowSize: 0,
            points:
            {
                show: true
            }
        }]

        var options = {
            grid:
            {
                hoverable: true,
                clickable: true,
                tickColor: 'rgba(0,0,0,0.05)',
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.05)'
            },
            tooltip: true,
            tooltipOpts:
            {
                cssClass: 'tooltip-inner',
                defaultTheme: false
            },
            xaxis:
            {
                mode: "time",
                tickColor: 'rgba(0,0,0,0.05)',
            },
            yaxes:
            {
                tickColor: 'rgba(0,0,0,0.05)',
                tickFormatter: function(val, axis)
                {
                    return "$" + val;
                },
                max: 1200
            }

        };

        var plot2 = null;

        function plotNow()
        {
            var d = [];
            $("#js-checkbox-toggles").find(':checkbox').each(function()
            {
                if ($(this).is(':checked'))
                {
                    d.push(data[$(this).attr("name").substr(4, 1)]);
                }
            });
            if (d.length > 0)
            {
                if (plot2)
                {
                    plot2.setData(d);
                    plot2.draw();
                }
                else
                {
                    plot2 = $.plot($("#flot-toggles"), d, options);
                }
            }

        };

        $("#js-checkbox-toggles").find(':checkbox').on('change', function()
        {
            plotNow();
        });
        plotNow()
    }
    flot_toggle();
    /* flot toggle example -- end*/

    /* flot area */
    var flotArea = $.plot($('#flot-area'), [
    {
        data: dataSet1,
        label: 'New Customer',
        color: color.success._200
    },
    {
        data: dataSet2,
        label: 'Returning Customer',
        color: color.info._200
    }],
    {
        series:
        {
            lines:
            {
                show: true,
                lineWidth: 2,
                fill: true,
                fillColor:
                {
                    colors: [
                    {
                        opacity: 0
                    },
                    {
                        opacity: 0.5
                    }]
                }
            },
            shadowSize: 0
        },
        points:
        {
            show: true,
        },
        legend:
        {
            noColumns: 1,
            position: 'nw'
        },
        grid:
        {
            hoverable: true,
            clickable: true,
            borderColor: '#ddd',
            tickColor: 'rgba(0,0,0,0.05)',
            aboveData: true,
            borderWidth: 0,
            labelMargin: 5,
            backgroundColor: 'transparent'
        },
        yaxis:
        {
            tickLength: 1,
            min: 0,
            max: 15,
            color: '#eee',
            tickColor: 'rgba(0,0,0,0.05)',
            font:
            {
                size: 0,
                color: '#999'
            }
        },
        xaxis:
        {
            tickLength: 1,
            color: '#eee',
            tickColor: 'rgba(0,0,0,0.05)',
            font:
            {
                size: 10,
                color: '#999'
            }
        }

    });
    /* flot area -- end */

    var flotVisit = $.plot('#flotVisit', [
    {
        data: [
            [3, 0],
            [4, 1],
            [5, 3],
            [6, 3],
            [7, 10],
            [8, 11],
            [9, 12],
            [10, 9],
            [11, 12],
            [12, 8],
            [13, 5]
        ],
        color: color.success._200
    },
    {
        data: [
            [1, 0],
            [2, 0],
            [3, 1],
            [4, 2],
            [5, 2],
            [6, 5],
            [7, 8],
            [8, 12],
            [9, 9],
            [10, 11],
            [11, 5]
        ],
        color: color.info._200
    }],
    {
        series:
        {
            shadowSize: 0,
            lines:
            {
                show: true,
                lineWidth: 2,
                fill: true,
                fillColor:
                {
                    colors: [
                    {
                        opacity: 0
                    },
                    {
                        opacity: 0.12
                    }]
                }
            }
        },
        grid:
        {
            borderWidth: 0
        },
        yaxis:
        {
            min: 0,
            max: 15,
            tickColor: 'rgba(0,0,0,0.05)',
            ticks: [
                [0, ''],
                [5, '100K'],
                [10, '200K'],
                [15, '300K']
            ],
            font:
            {
                color: '#444',
                size: 10
            }
        },
        xaxis:
        {

            tickColor: 'rgba(0,0,0,0.05)',
            ticks: [
                [2, '2am'],
                [3, '3am'],
                [4, '4am'],
                [5, '5am'],
                [6, '6am'],
                [7, '7am'],
                [8, '8am'],
                [9, '9am'],
                [10, '1pm'],
                [11, '2pm'],
                [12, '3pm'],
                [13, '4pm']
            ],
            font:
            {
                color: '#999',
                size: 9
            }
        }
    });


});

import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(Vuelidate);
const app = new Vue({
    el: '#app',
    components: {App},
    router: new VueRouter(routes)
});