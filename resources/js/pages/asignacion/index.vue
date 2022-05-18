<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-pencil'></i> <span class='fw-300'>Asignados</span>
            </h1>
        </div>

        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                <div class="panel-hdr">
                    <h2 style="text-align: center; font-size: 1.125rem;"><b></b></h2>
                   
                    <div class="panel-toolbar">
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                    </div>

                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <div class="row mb-2">
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="ReporteExcel"><i class="fa fa-file-excel"></i> Reporte</button>
                            </div>
                        </div>
                        <table id="asignaciones" class="table table-bordered table-hover table-striped w-100" translate="no">
                            <thead>
                                <tr>
                                    <th>ACCIONES</th>
                                    <th v-if="user.role_id == 6 || user.role_id == 1">RESERVAR</th>
                                    <th>CONCESIONARIO</th>
                                    <th>TIENDA</th>
                                    <th>ASESOR</th>
                                    <th>DOCUMENTO</th>
                                    <th>CELULAR</th>
                                    <th>VIN</th>
                                    <th>MARCA</th>
                                    <th>MODELO</th>
                                    <th>VERSIÓN</th>
                                    <th>COLOR</th>
                                    <th>AÑO MODELO</th>
                                    <th>FECHA DISTRIBUCIÓN</th>
                                    <th>FECHA LLEGADA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="asignacion in asignaciones" :key="asignacion.id">
                                    
                                    <td tyle="text-align: center; display: flex">
                                        <button class="btn btn-warning" @click="detalle(asignacion)"><i class="fa fa-list"></i></button>
                                        <button class="btn btn-danger" v-if="user.role_id != 8" @click="borrar(asignacion.id)"><i class="fa fa-trash"></i></button>
                                    </td>
                                    <td style="text-align: center" v-if="user.role_id == 6 || user.role_id == 1">
                                        <button class="btn btn-success" @click="modalReservar(asignacion)"><i class="fa fa-lock"></i></button>
                                    </td>
                                    <td>{{asignacion.concesionario}}</td>
                                    <td>{{asignacion.tienda}}</td>
                                    <td>{{asignacion.nombre}}</td>
                                    <td>{{asignacion.documento}}</td>
                                    <td>{{asignacion.celular}}</td>
                                    <td>{{asignacion.vin_e}}</td>
                                    <td>{{asignacion.marca}}</td>
                                    <td>{{asignacion.modelo}}</td>
                                    <td>{{asignacion.version}}</td>
                                    <td>{{asignacion.color}}</td>
                                    <td>{{asignacion.anio_modelo}}</td>
                                    <td>{{asignacion.fecha_distribucion ? asignacion.fecha_distribucion : ""}}</td>
                                    <td>{{asignacion.fecha_ingreso ? asignacion.fecha_ingreso : ""}}</td>
                                </tr>
                            </tbody>
                            
                        </table>
                        <!-- datatable end -->
                    </div>
                </div>
            </div>
        </div>
        <!-- MODAL ASIGNACION -->
        <div class="modal fade" id="modalForm">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <i class="fa fa-user-plus"></i> Reservar
                        </h5>
                        <button  @click.prevent="cerrarModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="Codigo">Código Reserva:</label>
                                    <input type="text" id="Codigo" class="form-control" placeholder="Codigo" required="" v-model="form.codigo_reserva">
                                    <div style="color:red;" v-if="submited && !$v.form.codigo_reserva.required">El campo es obligatorio</div>
                                    <div style="color:red;" v-if="submited && !$v.form.codigo_reserva.minLength">Tiene que ingresar mas de 1 caracteres</div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="MontoReserva">Monto Reserva en USD:</label>
                                    <input type="text" id="MontoReserva" class="form-control" placeholder="Monto Reserva" required="" v-model="form.monto_reserva">
                                    <div style="color:red;" v-if="submited && !$v.form.monto_reserva.required">El campo es obligatorio</div>
                                    <div style="color:red;" v-if="submited && !$v.form.monto_reserva.numeric">Se aceptan solo valores enteros</div>
                                    <div style="color:red;" v-if="submited && !$v.form.monto_reserva.minLength">El monto mínimo es 1000 Dólares</div>
                                </div>
                            </div>
                            <!-- financiamiento / Contado y Crédito -->
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="Anio">Tipo financiamiento:</label>
                                    <select id="Anio_modelo" class="custom-select form-control" v-model="form.tipo_financiamiento">
                                        <option value="">Selecionar una opción</option>
                                        <option value="CONTADO">CONTADO</option>
                                        <option value="CREDITO">CRÉDITO</option>
                                    </select>
                                    <div style="color:red;" v-if="submited && !$v.form.tipo_financiamiento.required">El campo es obligatorio</div>
                                </div>
                            </div>

                            <div class="form-row mt-3">
                                 <div class="form-group col-md-12">
                                    <label for="dropzone">Adjuntar documentos(max. 3):</label>
                                    <vue-dropzone
                                        ref="myVueDropzone"
                                        id="dropzone"
                                        :options="dropzoneOptions"
                                        @vdropzone-complete="afterUploadComplete"
                                        @vdropzone-sending-multiple="sendMessage"
                                        @vdropzone-success="success"
                                    ></vue-dropzone>
                                 </div>
                            </div>
                           
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click.prevent="cerrarModal" data-dismiss="modal">Cerrar</button>
                            <button type="submit" class="btn btn-primary" @click.prevent="shootMessage">Reservar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- MODAL DETALLE -->
         <div id="modalDetalle" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title h4">Detalle de registro</h5>
                        <button type="button" class="close" @click="cerrarModal()" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="card mb-5">
                            <div class="card-body p-3">
                                <h5 class="text-danger">
                                    Cliente
                                    <!-- <span class="badge badge-primary fw-n position-absolute pos-top pos-right mt-3 mr-3">A</span> -->
                                </h5>
                                <div class="row">
                                    <div class="row">
                                        <div class="col-md-3">Nombre Completo:</div>
                                        <div class="col-md-3"><b>{{ registro.nombreCompleto }}</b></div>
                                        <div class="col-md-3">Documento:</div>
                                        <div class="col-md-3"><b>{{ registro.documento }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Celular:</div>
                                        <div class="col-md-3"><b>{{ registro.celular }}</b></div>
                                        <div class="col-md-3">Email:</div>
                                        <div class="col-md-3"><b>{{ registro.email }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">VIN:</div>
                                        <div class="col-md-9"><b>{{ registro.vin }}</b></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-g">
                            <div class="card-body p-3">
                                <h5 class="text-danger">
                                    Ejecutivo
                                </h5>
                                <div class="row">
                                    <div class="row">
                                        <div class="col-md-3">Nombre Completo:</div>
                                        <div class="col-md-3"><b>{{ registro.usuarioNombre }}</b></div>
                                        <div class="col-md-3">Tienda:</div>
                                        <div class="col-md-3"><b>{{ registro.tienda }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Email:</div>
                                        <div class="col-md-3"><b>{{ registro.usuarioEmail }}</b></div>
                                        <div class="col-md-3">Concesionario:</div>
                                        <div class="col-md-3"><b>{{ registro.concesionario }}</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-g">
                            <div class="card-body p-3">
                                <h5 class="text-danger">
                                    Detalle de la Unidad
                                </h5>
                                <div class="row">
                                    <div class="row">
                                        <div class="col-md-3">Marca:</div>
                                        <div class="col-md-3"><b>{{ registro.marca }}</b></div>
                                        <div class="col-md-3">Versión:</div>
                                        <div class="col-md-3"><b>{{ registro.version }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Modelo:</div>
                                        <div class="col-md-3"><b>{{ registro.modelo }}</b></div>
                                        <div class="col-md-3">Año Modelo:</div>
                                        <div class="col-md-3"><b>{{ registro.anio_modelo }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Año Fabricación:</div>
                                        <div class="col-md-3"><b>{{ registro.anio_fabricacion }}</b></div>
                                        <div class="col-md-3">Color 1:</div>
                                        <div class="col-md-3"><b>{{ registro.color1 }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Color 2:</div>
                                        <div class="col-md-3"><b>{{ registro.color2 }}</b></div>
                                        <div class="col-md-3">Color 3:</div>
                                        <div class="col-md-3"><b>{{ registro.color3 }}</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="cerrarModal()">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import {required, minLength,helpers,numeric, minValue} from 'vuelidate/lib/validators';
const alpha = helpers.regex("alpha",/^[a-z\s]+$/i);
import { ExpExcel } from '../../utils.js';

export default {
    name: "Asignacion",
    components: {
        vueDropzone: vue2Dropzone
    },
     props:[
        'session'
    ],
    data(){
        return{
            asignaciones:[],
            id : null,
            dropzoneOptions: {
                url: "/api/gallery",
                thumbnailWidth: 150,
                maxFilesize: 2,
                parallelUploads: 3,
                maxFiles: 3,
                uploadMultiple: true,
                autoProcessQueue: false,
                addRemoveLinks: true,
                dictDefaultMessage: "Cargar archivos",
                acceptedFiles: ".jpeg, .jpg, .png, .gif, .pdf",
                clickable: true,
                
            },
            form: {
                codigo_reserva: "",
                monto_reserva: 0,
                tipo_financiamiento: "",
                images: []
            },
            registro: {
                nombreCompleto: "", 
                documento: "", 
                email: "", 
                celular: "", 
                usuarioNombre: "",         
                usuarioEmail: "",          
                tienda: "",          
                concesionario: "",          
                marca: "",          
                modelo: "",          
                version: "",          
                anio_modelo: "",          
                anio_fabricacion: "",          
                color1: "",          
                color2: "", 
                color3: "" 
            },
            submited: false,
            user: {
                role_id : 0
            }
        }
    },
    validations:{
        submited: true,
        form: {
            codigo_reserva: {required, minLength: minLength(2)},
            monto_reserva : {required, minLength: minLength(4), numeric, minValue: minValue(1000)},
            tipo_financiamiento : {required}
        }
    },
    mounted(){
        this.init();
    },
    watch:{
        session(val){
            this.user = val
        }
    },
    methods:{
        afterUploadComplete: async function (response) {
            if (response.status == "success") {
                console.log("upload successful");
                this.sendSuccess = true;
                let index =  this.asignaciones.map(function(e) { return e.id }).indexOf(this.id);
                if(index !== -1){
                    let asignaciones = this.asignaciones;
                    asignaciones.splice(index, 1);
                    this.asignaciones = [].concat(asignaciones);
                }
                this.id = null;
                $('#modalForm').modal('hide');
                this.submited=false;
                this.$swal.fire( 'Reservado', 'Se tiene 24 horas para hacer la reserva (considerar dias laborables)', 'success');
            } else {
                this.$swal.fire({
                    icon: 'Error',
                    title: '',
                    text: 'Ocurrio un error!',
                })
            }
        },
        shootMessage: async function () {
            
            this.submited=true;
            if(this.$v.$invalid){
                return false;
            }
            this.$refs.myVueDropzone.processQueue();
        },
        sendMessage: async function (files, xhr, formData) {
            formData.append("id", this.id);
            formData.append("codigo_reserva", this.form.codigo_reserva);
            formData.append("monto_reserva", this.form.monto_reserva);
            formData.append("tipo_financiamiento", this.form.tipo_financiamiento);
        },
        success: async function (file, response) {
            if(response != 0){
                // Download link
                
                var anchorEl = document.createElement('a');
                anchorEl.setAttribute('href',response);
                anchorEl.setAttribute('target','_blank');
                anchorEl.innerHTML = "<br>Download";
                file.previewTemplate.appendChild(anchorEl);
            }
        },
        async init(){
            const token = localStorage.getItem('access_token');
            await this.axios.get('/api/asignacion',{
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(response=>{
                    this.asignaciones = response.data.asignaciones;                
                    this.user.role_id = response.data.user.role_id;                
                    })
                .catch(error=>{
                    console.log(error);
                    this.asignaciones =[]
                })
                await this.$tablaGlobal('#asignaciones');
        },
        modalReservar(asignacion){
            this.submited=false;
            this.titulo='Reservar';
            this.id = asignacion.id;
            this.form.codigo_reserva = '';
            this.form.monto_reserva = '';
            this.form.tipo_financiamiento = '';
            this.$refs.myVueDropzone.removeAllFiles();
            $('#modalForm').modal('show')
        },
        detalle(datos){
            this.registro.nombreCompleto = datos.nombre_completo
            this.registro.documento = datos.documento; 
            this.registro.email = datos.correo;
            this.registro.celular = datos.celular; 
            this.registro.usuarioNombre = datos.nombre + " " + (datos.apellido? datos.apellido : " ");        
            this.registro.usuarioEmail = datos.email;        
            this.registro.tienda = datos.tienda;          
            this.registro.concesionario = datos.concesionario;         
            this.registro.marca = datos.marca;          
            this.registro.modelo = datos.modelo;          
            this.registro.version = datos.version;        
            this.registro.anio_modelo = datos.anio_modelo;          
            this.registro.color1= datos.color1;        
            this.registro.color2= datos.color2;
            this.registro.color3= datos.color3;
            this.registro.vin= datos.vin;
            $('#modalDetalle').modal('show');
        },
        async reservar(){
            this.submited=true;
            if(this.$v.$invalid){
                return false;
            }
            await axios.put('/api/asignacion/'+this.id, this.form).then(response=>{
                let index =  this.asignaciones.map(function(e) { return e.id }).indexOf(this.id);
                if(index !== -1){
                    let asignaciones = this.asignaciones;
                    asignaciones.splice(index, 1);
                    this.asignaciones = [].concat(asignaciones);
                }
                this.id = null;
                $('#modalForm').modal('hide');
                this.submited=false;
                this.$swal.fire( 'Bloqueado', 'Se tiene 24 horas para hacer la reserva (considerar dias laborables)', 'success');
            }).catch(function (error) {
                console.log(error);
            });
        },
        async borrar(id){
            this.$swal.fire({
                title: '¿Seguro de eliminar asignación?',
                showDenyButton: true,
                confirmButtonText: 'Eliminar asignación',
                denyButtonText: `Cancelar`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await this.axios.delete(`/api/asignacion/${id}`).then(response=>{
                        let index =  this.asignaciones.map(e => e.id).indexOf(id);
                        if(index !== -1){
                            let asignaciones = this.asignaciones;
                            asignaciones.splice(index, 1);
                            this.asignaciones = [].concat(asignaciones);
                        }
                        this.$swal.fire('Registro eliminado', '', 'success') 
                    }).catch(error=>{
                        console.log(error)
                    });
                }
            })
        },
        ReporteExcel(){
            //e.preventDefault();
            let dataExcel = [];
            this.asignaciones.map((e)=>{
                dataExcel.push({
                    ['ID'] : e.id,
                    ['Concesionario'] : e.concesionario,
                    ['Tienda'] : e.tienda,
                    ['Asesor'] : e.nombre + (e.apellido ? e.apellido : ''),
                    ['Nombre Completo'] : e.nombre_completo,
                    ['Documento'] : e.documento,
                    ['Celular'] : e.celular,
                    ['Marca'] : e.marca,
                    ['VIN'] : e.vin,
                    ['Modelo'] : e.modelo,
                    ['Version'] : e.version,
                    ['Año modelo'] : e.anio_modelo,
                    ['Color Asignado'] : e.color,
                    ['Color 1'] : e.color1,
                    ['Color 2'] : e.color2,
                    ['Color 3'] : e.color3,
                    ['Fecha actualizada'] : e.fecha,
                    ['Fecha creación'] : e.created_at
                })
            });
            let dataSend = {
                data: {
                    "Report": dataExcel,
                },
                name: ['Reporte'],
                filename: 'Asignaciones.xlsx',
                vacios: [[]],
            };
            ExpExcel(dataExcel, "Asignaciones.xlsx", dataSend.name, dataSend.vacios);
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
            $('#modalDetalle').modal('hide');
        }
    }
}

</script>
<style scoped>

    #dropzone{
        height :  100%;
        border-radius: 15px;
    }
  
    
</style>
