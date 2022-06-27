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
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-collapse"
                            data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen"
                            data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                    </div>
                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <div class="row mb-2">
                            <div class="col-md-2">
                                <button class="btn btn-success" @click.prevent="ReporteExcel"><i
                                        class="fa fa-file-excel"></i> Reporte</button>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click.prevent="importModal"><i
                                        class="fa fa-file-excel"></i> Importar</button>
                            </div>
                        </div>
                        <table id="tingresos" class="table table-bordered table-hover table-striped w-100"
                            translate="no">
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
                                    <td style="text-align: center"
                                        v-if="user.role_id == 4 || user.role_id == 5 || user.role_id == 6">
                                        <button class="btn btn-danger"
                                            v-if="user.role_id == 4 || user.role_id == 5 || user.role_id == 6"
                                            @click="bloquear(ingreso.id)"><i class="fa fa-unlock"></i></button>
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

        <!-- MODAL DETALLE -->
        <div id="modalDetalle" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title h4">Importar Packing List</h5>
                        <button type="button" class="close" @click="cerrarModal()" data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true"><i class="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="card mb-5">
                            <div class="card-body p-3">
                                <input type="file" name="file" accept=".xlsx" class="form-control col">
                                <button class="btn btn-success m-1"  @click="importExcel()" type="submit">Import</button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"
                            @click="cerrarModal()">Close</button>
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
                   await axios.post(`/api/ingreso/bloquear`,{'ingreso_id' : id } , {
                        withCredentials: true,
                        headers: { Authorization: `Bearer ${token}` },
                }).then(response=>{
                        let index =  this.ingresos.map(e => e.id).indexOf(id);
                        if(index !== -1){
                            let ingresos = this.ingresos;
                            ingresos.splice(index, 1);
                            this.ingresos = [].concat(ingresos);
                        }
                        this.$swal.fire('Registro bloqueado', '', 'success');
                    }).catch(error=>{
                        if(error.response.status == 400){
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Packing List',
                                text: error.response.data,
                            })
                        }
                        if(error.response.status == 401){
                            this.$swal.fire({
                                icon: '',
                                title: '',
                                text: 'Session terminada',
                            });
                            this.$router.push({ name: "Login"}); 
                        }
                    });
                }
            })
        },
        ReporteExcel(){
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
        importModal() { 
            $('#modalDetalle').modal('show');
        },
        async importExcel() { 
            const token = localStorage.getItem('access_token');
            await this.axios.post('/api/importPacking', {
                withCredentials: true,
                headers: { Authorization: `Bearer ${token}` },
            })
                .then(({ data }) => {
                    console.log(data);
                }) 
                .catch(error => {
                    console.log(error);
                })
        }
    }
}

</script>