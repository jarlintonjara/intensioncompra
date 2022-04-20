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
                        <!-- <button class="btn btn-panel waves-effect waves-themed" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button> -->
                    </div>

                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <table id="asignaciones" class="table table-bordered table-hover table-striped w-100">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th v-if="user.role_id == 6 || user.role_id == 1">RESERVAR</th>
                                    <th>CONCESIONARIO</th>
                                    <th>ASESOR</th>
                                    <th>DOCUMENTO</th>
                                    <!-- <th>VIN</th> -->
                                    <th>MARCA</th>
                                    <th>MODELO</th>
                                    <!-- <th>VERSION</th>
                                    <th>COLOR</th>
                                    <th>AÑO MODELO</th>
                                    <th>CÓDIGO SAP</th> -->
                                    <th>FECHA DISTRIBUCIÓN</th>
                                    <th>FECHA LLEGADA</th>
                                    <!-- <th>CÓDIGO RESERVA</th>
                                    <th>CÓDIGO SAP</th>
                                    <th>FECHA ESTIMADA LLEGADA</th>
                                    <th>CÓDIGO RESERVA</th>
                                    <th>MONTO RESERVA</th>
                                    <th>FECHA RESERVA</th> -->
                                    <th>ESTADO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="asignacion in asignaciones" :key="asignacion.id">
                                    <td tyle="text-align: center"><button class="btn btn-warning" @click="detalle(asignacion)"><i class="fa fa-list"></i></button></td>
                                    <td style="text-align: center" v-if="user.role_id == 6 || user.role_id == 1">
                                        <button class="btn btn-success" @click="abrirModalEditar(asignacion)"><i class="fa fa-lock"></i></button>
                                    </td>
                                    <td>{{asignacion.concesionario}}</td>
                                    <td>{{asignacion.nombre}}</td>
                                    <td>{{asignacion.documento}}</td>
                                    <!-- <td>{{asignacion.vin}}</td> -->
                                    <td>{{asignacion.marca}}</td>
                                    <td>{{asignacion.modelo}}</td>
                                    <!-- <td>{{asignacion.version}}</td>
                                    <td>{{asignacion.color}}</td>
                                    <td>{{asignacion.anio_modelo}}</td>
                                    <td>{{asignacion.codigo_sap}}</td> -->
                                    <td>{{asignacion.fecha_distribucion ? asignacion.fecha_distribucion : ""}}</td>
                                    <td>{{asignacion.fecha_ingreso ? asignacion.fecha_ingreso : ""}}</td>
                                    <!-- <td>{{asignacion.codigo_reserva}}</td>
                                    <td>{{asignacion.monto_reserva}}</td>
                                    <td>{{asignacion.fecha_reserva}}</td> -->
                                    <td>{{asignacion.situacion}}</td>
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
                                    <label for="Codigo">Código Reserva</label>
                                    <input type="text" id="Codigo" class="form-control" placeholder="Codigo" required="" v-model="form.codigo_reserva">
                                    <div style="color:red;" v-if="submited && !$v.form.codigo_reserva.required">El campo es obligatorio</div>
                                    <div style="color:red;" v-if="submited && !$v.form.codigo_reserva.minLength">Tiene que ingresar mas de 1 caracteres</div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="MontoReserva">Monto Reserva en USD</label>
                                    <input type="text" id="MontoReserva" class="form-control" placeholder="Monto Reserva" required="" v-model="form.monto_reserva">
                                    <div style="color:red;" v-if="submited && !$v.form.monto_reserva.required">El campo es obligatorio</div>
                                    <div style="color:red;" v-if="submited && !$v.form.monto_reserva.minLength">Tiene que ingresar mas de 3 caracteres</div>
                                    <div style="color:red;" v-if="submited && !$v.form.monto_reserva.minLength">El monto mínimo es 1000 Dólares</div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click.prevent="cerrarModal" data-dismiss="modal">Cerrar</button>
                            <button type="submit" class="btn btn-primary" @click.prevent="reservar">Reservar</button>
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

import {required, minLength,helpers,numeric, minValue} from 'vuelidate/lib/validators';
const alpha = helpers.regex("alpha",/^[a-z\s]+$/i);

export default {
    name: "Asignacion",
     props:[
        'session'
    ],
    data(){
        return{
            asignaciones:[],
            id : null,
            form: {
                codigo_reserva: "",
                monto_reserva: 0,
                // fecha_reserva: "",
                situacion: "RESERVADO"
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
            codigo_reserva: {required,minLength: minLength(2)},
            monto_reserva : {required,minLength: minLength(4),numeric,minValue: minValue(1000)},
        }
    },
    mounted(){
        this.init();
    },
    methods:{
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
        abrirModalEditar(asignacion){
            this.titulo='Reservar';
            this.id = asignacion.id;
            this.form.codigo_reserva = asignacion.codigo_reserva;
            this.form.monto_reserva = asignacion.monto_reserva;
            // this.form.fecha_reserva = Date.now();
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
            $('#modalDetalle').modal('show')
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
                this.$swal.fire(
                    'Bloqueado',
                    'Se tiene 24 horas para hacer la reserva (considerar dias laborables)',
                    'success'
                )
            }).catch(function (error) {
                console.log(error);
            });
            
            /* $('#asignaciones').DataTable().destroy();
            await this.$tablaGlobal('#asignaciones'); */
            
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
            $('#modalDetalle').modal('hide');
        }
    },
    watch:{
        session(val){
            this.user = val
        }
    },
}

</script>