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
                                    <th>FECHA DISTRIBUCIÓN</th>
                                    <th v-if="user.role_id == 6 || user.role_id == 1">RESERVAR</th>
                                    <th>CONCESIONARIO</th>
                                    <th>ASESOR</th>
                                    <th>DOCUMENTO</th>
                                    <th>VIN</th>
                                    <th>MARCA</th>
                                    <th>MODELO</th>
                                    <th>VERSION</th>
                                    <th>COLOR</th>
                                    <th>AÑO MODELO</th>
                                    <th>CÓDIGO SAP</th>
                                    <th>FECHA LLEGADA</th>
                                    <th>CÓDIGO RESERVA</th>
                                    <th>MONTO RESERVA</th>
                                    <th>FECHA RESERVA</th>
                                    <th>ESTADO</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="asignacion in asignaciones" :key="asignacion.id">
                                    <td>{{$dateFormat(asignacion.fecha_distribucion)}}</td>
                                    <td style="text-align: center" v-if="user.role_id == 6 || user.role_id == 1">
                                        <button class="btn btn-success" @click="abrirModalEditar(asignacion)"><i class="fa fa-lock"></i></button>
                                        <!-- <button class="btn btn-danger" ><i class="fa fa-trash"></i></button> -->
                                    </td>
                                    <td>{{asignacion.concesionario}}</td>
                                    <td>{{asignacion.nombre}}</td>
                                    <td>{{asignacion.documento}}</td>
                                    <td>{{asignacion.vin}}</td>
                                    <td>{{asignacion.marca}}</td>
                                    <td>{{asignacion.modelo}}</td>
                                    <td>{{asignacion.version}}</td>
                                    <td>{{asignacion.color}}</td>
                                    <td>{{asignacion.anio_modelo}}</td>
                                    <td>{{asignacion.codigo_sap}}</td>
                                    <td>{{$dateFormat(asignacion.fecha_ingreso)}}</td>
                                    <td>{{asignacion.codigo_reserva}}</td>
                                    <td>{{asignacion.monto_reserva}}</td>
                                    <td>{{asignacion.fecha_reserva}}</td>
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
        async reservar(){
            this.submited=true;
            if(this.$v.$invalid){
                return false;
            }
            await axios.put('/api/asignacion/'+this.id, this.form).then(response=>{
                let index =  this.asignaciones.map(function(e) { return e.id }).indexOf(this.id);
                if(index !== -1){
                    let asiganciones = this.asignaciones;
                    asiganciones.splice(index, 1);
                    /* this.asignaciones[index].codigo_reserva =  response.data.codigo_reserva;
                    this.asignaciones[index].monto_reserva =  response.data.monto_reserva;
                    this.asignaciones[index].fecha_reserva =  response.data.fecha_reserva;
                    this.asignaciones[index].situacion =  response.data.situacion; */
                    this.asignaciones = [].concat(asignaciones);
                }
                this.id = null;
                $('#modalForm').modal('hide');
                this.$swal.fire(
                    'Reservado!',
                    '',
                    'success'
                )
            }).catch(function (error) {
                console.log(error);
            });
            $('#asignaciones').DataTable().destroy();
            this.$tablaGlobal('#asignaciones');
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        }
    },
    watch:{
        session(val){
            this.user = val
        }
    },
}

</script>