<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-list'></i> <span class='fw-300'>Auditoría</span>
            </h1>
        </div>

        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                <div class="panel-container show">
                    <div class="panel-content">
                        <div class="row mb-2">
                            <div class="col-md-2">
                                <button class="btn btn-success" @click.prevent="ReporteExcel"><i
                                        class="fa fa-file-excel"></i> Reporte</button>
                            </div>
                        </div>
                        <table id="table-data"
                            class="table table-bordered table-hover table-striped table-responsive w-100"
                            translate="no">
                            <thead>
                                <tr>
                                    <th>CONCESIONARIO</th>
                                    <th>TIENDA</th>
                                    <th>VIN</th>
                                    <th>FECHA FACTURACIÓN SI</th>
                                    <th>FECHA FACTURACIÓN SO</th>
                                    <th>DIFERENCIA</th>
                                    <th>DOCUMENTO INCORRECTO</th>
                                    <th>REGISTRO DOCUMENTO</th>
                                    <th>FACTURACIÓN DOCUMENTO</th>
                                    <th>REGISTRO NOMBRE</th>
                                    <th>FACTURACIÓN NOMBRE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="row in data" :key="row.id">
                                    <td>{{row.concesionario}}</td>
                                    <td>{{row.tienda}}</td>
                                    <td>{{row.vin}}</td>
                                    <td>{{row.fecha_facturacion_si}}</td>
                                    <td>{{row.fecha_facturacion_so}}</td>
                                    <td class="text-center">{{row.diferencia}}</td>
                                    <td class="text-center">{{row.incorrecto_documento}}</td>
                                    <td>{{row.registro_documento}}</td>
                                    <td>{{row.facturacion_documento}}</td>
                                    <td>{{row.registro_nombre}}</td>
                                    <td>{{row.facturacion_nombre}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>
<script>
import { ExpExcel } from '../utils.js';
export default {
    data(){
        return{
            data:[],
            user: null
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        async init(){
            const token = localStorage.getItem('access_token');
            await axios.get('api/getSession/'+ token).then((res)=>{
                this.user = res.data;
            })
             await this.axios.get('/api/auditoria', {
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(response=> {
                    this.data = response.data;
                })
                .catch(error=>{
                    console.log(error);
                })
                this.$tablaGlobal('#table-data');
        },
        ReporteExcel(){
            //e.preventDefault();
            let dataExcel = [];
            this.data.map((e)=>{
                dataExcel.push({
                    ['Concesionario'] : e.concesionario,
                    ['Tienda'] : e.tienda,
                    ['VIN'] : e.vin,
                    ['FECHA FACTURACIÓN SI'] : e.fecha_facturacion_si,
                    ['FECHA FACTURACIÓN SO'] : e.fecha_facturacion_so,
                    ['DIFERENCIA'] : e.diferencia,
                    ['DOCUMENTO INCORRECTO'] : e.incorrecto_documento,
                    ['REGISTRO DOCUMENTO'] : e.registro_documento,
                    ['FACTURACIÓN DOCUMENTO'] : e.facturacion_documento,
                    ['REGISTRO NOMBRE'] : e.registro_nombre,
                    ['FACTURACIÓN NOMBRE'] : e.facturacion_nombre
                })
            });
            let dataSend = {
                data: {
                    "Report": dataExcel,
                },
                name: ['Reporte'],
                filename: 'Auditoria.xlsx',
                vacios: [[]],
            };
            ExpExcel(dataExcel, "Auditoria.xlsx", dataSend.name, dataSend.vacios);
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        }
    }
}

</script>