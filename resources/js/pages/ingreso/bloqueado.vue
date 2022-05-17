<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-pencil'></i> <span class='fw-300'>PACKING LIST - BLOQUEADOS</span>
            </h1>
        </div>

        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                <div class="panel-hdr">
                    <div class="panel-toolbar">
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                        <!-- <button class="btn btn-panel waves-effect waves-themed" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button> -->
                    </div>

                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <div class="row mb-2">
                            <div class="col-md-2">
                                <button class="btn btn-success" @click.prevent="ReporteExcel"><i class="fa fa-file-excel"></i> Excel</button>
                            </div>
                        </div>
                        <table id="bloqueados" class="table table-bordered table-hover table-striped w-100" translate="no">
                            <thead>
                                <tr>
                                    <th>VIN</th>
                                    <th>MARCA</th>
                                    <th>MODELO</th>
                                    <th>VERSION</th>
                                    <th>AÑO MODELO</th>
                                    <th>AÑO FABRICACIÓN</th>
                                    <th>RESPONSABLE</th>
                                    <th>FECHA BLOQUEO</th>
                                    <th>COLOR</th>
                                    <th>CODIGO SAP</th>
                                    <th>NAVE</th>
                                    <th>FECHA INGRESO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="bloqueado in bloqueados" :key="bloqueado.id">
                                    <td>{{bloqueado.vin}}</td>
                                    <td>{{bloqueado.marca}}</td>
                                    <td>{{bloqueado.modelo}}</td>
                                    <td>{{bloqueado.version}}</td>
                                    <td>{{bloqueado.anio_modelo}}</td>
                                    <td>{{bloqueado.anio_fabricacion}}</td>
                                    <td>{{bloqueado.nombre + " "+bloqueado.nombre}}</td>
                                    <td>{{bloqueado.fecha_bloqueo ? bloqueado.fecha_bloqueo: ""}}</td>
                                    <td>{{bloqueado.color}}</td>
                                    <td>{{bloqueado.codigo_sap}}</td>
                                    <td>{{bloqueado.nave}}</td>
                                    <td>{{bloqueado.fecha_ingreso ? bloqueado.fecha_ingreso : ""}}</td>
                                </tr>
                            </tbody>
                            
                        </table>
                        <!-- datatable end -->
                    </div>
                </div>
            </div>
        </div>
        
    </main>
</template>
<script>
import { ExpExcel } from '../../utils.js';
export default {
    data(){
        return{
            bloqueados:[],
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        async init(){
            const token = localStorage.getItem('access_token');
            await this.axios.get('/api/ingreso',{
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(response=>{
                    this.bloqueados = response.data.bloqueados
                })
                .catch(error=>{
                    console.log(error);
                    this.bloqueados =[]
                })
                await this.$tablaGlobal('#bloqueados');
        },
        ReporteExcel(){
            //e.preventDefault();
            let dataExcel = [];
            this.bloqueados.map((e)=>{
                dataExcel.push({
                    ['ID'] : e.id,
                    ['VIN'] : e.vin,
                    ['Marca'] : e.marca,
                    ['Modelo'] : e.modelo,
                    ['Version'] : e.version,
                    ['Año modelo'] : e.anio_modelo,
                    ['Color'] : e.color,
                    ['Situacion'] : e.situacion,
                    ['Responsable'] : e.nombre+ " "+ e.apellido,
                    ['Fecha bloqueado'] : e.fecha_bloqueo ? e.fecha_bloqueo: "",
                    ['Nave'] : e.nave,
                    ['Codigo SAP'] : e.codigo_sap,
                    ['Fecha ingreso'] : e.fecha_ingreso
                })
            });
            let dataSend = {
                data: {
                    "Report": dataExcel,
                },
                name: ['Reporte'],
                filename: 'Bloqueados.xlsx',
                vacios: [[]],
            };
            ExpExcel(dataExcel, "Bloqueados.xlsx", dataSend.name, dataSend.vacios);
        },
    }
}

</script>