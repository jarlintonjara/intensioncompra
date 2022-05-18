<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-pencil'></i> <span class='fw-300'>PACKING LIST</span>
            </h1>
        </div>
        
        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                <div class="panel-hdr">
                    <h2>
                        <h2 style="text-align: center; font-size: 1.125rem;"><b></b></h2>
                    </h2>
                    <div class="panel-toolbar">
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                    </div>
                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <div class="row mb-2">
                            <div class="col-md-2">
                                <button class="btn btn-success" @click.prevent="ReporteExcel"><i class="fa fa-file-excel"></i> Reporte</button>
                            </div>
                        </div>
                        <table id="tingresos" class="table table-bordered table-hover table-striped w-100" translate="no">
                            <thead>
                                <tr>
                                    <th v-if="user.role_id == 4 || user.role_id == 5 || user.role_id == 6">BLOQUEAR</th>
                                    <th>VIN</th>
                                    <th>MARCA</th>
                                    <th>MODELO</th>
                                    <th>VERSION</th>
                                    <th>AÑO MODELO</th>
                                    <th>AÑO FABRICACIÓN</th>
                                    <th>COLOR</th>
                                    <th>SITUACIÓN</th>
                                    <th>NAVE</th>
                                    <th>FECHA INGRESO</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="ingreso in ingresos" :key="ingreso.id">
                                    <td style="text-align: center" v-if="user.role_id == 4 || user.role_id == 5 || user.role_id == 6">
                                        <button class="btn btn-danger" v-if="user.role_id == 4 || user.role_id == 5 || user.role_id == 6"  @click="bloquear(ingreso.id)"><i class="fa fa-unlock"></i></button>
                                    </td>
                                    <td>{{ingreso.vin}}</td>
                                    <td>{{ingreso.marca}}</td>
                                    <td>{{ingreso.modelo}}</td>
                                    <td>{{ingreso.version}}</td>
                                    <td>{{ingreso.anio_modelo}}</td>
                                    <td>{{ingreso.anio_fabricacion}}</td>
                                    <td>{{ingreso.color}}</td>
                                    <td>{{ingreso.situacion}}</td>
                                    <td>{{ingreso.nave}}</td>
                                    <td>{{ingreso.fecha_ingreso}}</td>
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
            loading: true,
            ingresos:[],
            user: {role_id: 0}
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
            });
            await this.axios.get('/api/ingreso',{
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(response=>{
                    this.ingresos = response.data.data
                })
                .catch(error=>{
                    console.log(error);
                })
                await this.$tablaGlobal('#tingresos');
        },
        async bloquear(id){

            this.$swal.fire({
                title: '¿Seguro de bloquear?',
                showDenyButton: true,
                confirmButtonText: 'Bloquear',
                denyButtonText: `Cancelar`,
            }).then(async (result) => {

                const token = localStorage.getItem('access_token');
                if (result.isConfirmed) {
                   await axios.put(`/api/ingreso/${id}`, {
                        bearerToken: token,
                    }).then(response=>{
                        let index =  this.ingresos.map(e => e.id).indexOf(id);
                        if(index !== -1){
                            let ingresos = this.ingresos;
                            ingresos.splice(index, 1);
                            this.ingresos = [].concat(ingresos);
                        }
                        this.$swal.fire('Registro bloqueado', '', 'success');
                    }).catch(error=>{
                        console.log(error)
                    });
                }
            })
        },
        ReporteExcel(){
            //e.preventDefault();
            let dataExcel = [];
            this.ingresos.map((e)=>{
                dataExcel.push({
                    ['ID'] : e.id,
                    ['VIN'] : e.vin,
                    ['VIN ENCRIPTADO'] : e.vin_e,
                    ['Marca'] : e.marca,
                    ['Modelo'] : e.modelo,
                    ['Version'] : e.version,
                    ['Año modelo'] : e.anio_modelo,
                    ['Color'] : e.color,
                    ['Situacion'] : e.situacion,
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
                filename: 'PackingList.xlsx',
                vacios: [[]],
            };
            ExpExcel(dataExcel, "PackingList.xlsx", dataSend.name, dataSend.vacios);
        },
    }
}

</script>