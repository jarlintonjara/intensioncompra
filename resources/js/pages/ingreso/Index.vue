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
                            <div class="col-md-1">
                                <button class="btn btn-success" @click.prevent="ReporteExcel"><i
                                        class="fa fa-file-excel"></i> Reporte</button>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-primary" @click.prevent="importModal"><i
                                        class="fa fa-file-upload"></i> Importar</button>
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
                                <button class="btn btn-warning mb-3" type="submit"><i class="fa fa-download"></i>
                                    Descargar plantilla</button>
                                <input type="file" @change="uploadFile" ref="file" accept=".xlsx"
                                    class="form-control col">
                                <button class="btn btn-success mt-3 float-right" :disabled="loading" @click="importExcel()">
                                    Cargar <div class="spinner-border" role="status" v-if="loading">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button>
                                <ul class="list-group list-group-flush p-3 mt-6">
                                    <li v-for="error in errors" :key="error.error"
                                        class="list-group-item list-group-item-action list-group-item-danger">{{ error
                                        }}
                                    </li>
                                </ul>
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
        return {
            loading: false,
            ingresos:[],
            user: { role_id: 0 },
            errors: []
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
            this.errors = [];
            this.images = null;
            this.$refs["file"].value = "";
            $('#modalDetalle').modal('show');
        },
        uploadFile() {
            this.images = this.$refs.file.files[0];
        },
        async importExcel() { 
            this.errors = [];
            this.loading = true;
            const token = localStorage.getItem('access_token');
            const formData = new FormData();
            formData.append('file', this.images);
            const headers = { 'Content-Type': 'multipart/form-data' };
            await this.axios.post('/api/importPacking', formData, headers)
                .then(({ data }) => {
                    this.images = null;
                    this.$refs["file"].value = "";
                    $('#tingresos').DataTable().destroy();
                    this.init();
                    this.$swal.fire(
                        'Packing List cargado!',
                        '',
                        'success'
                    );
                    this.loading = false;
                }) 
                .catch(({ response, message }) => {
                    if (response.status == 422 ) { 
                        this.errors = [].concat(response.data.errors);
                        this.images = null;
                        this.$refs["file"].value = "";
                    }
                    console.log(message);
                    this.loading = false;
                })
        },
        cerrarModal() { 
            $('#modalDetalle').modal('hide');
        }
    }
}

</script>