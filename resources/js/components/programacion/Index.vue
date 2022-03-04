<template>
    <div>
        <div class="page-wrapper">
            <div class="page-inner">
                <!-- BEGIN Left Aside -->
                <sidebar/>
                <!-- END Left Aside -->
                <div class="page-content-wrapper">
                    <!-- BEGIN Page Header -->
                    <Navbar/>
                    <!-- END Page Header -->
                    <!-- BEGIN Page Content -->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        
                        <div class="subheader">
                            <h1 class="subheader-title">
                                <i class='subheader-icon fal fa-chart-area'></i> Programacion 
                                <small>
                                </small>
                            </h1>
                        </div>
                        <br>
                        <div class="col-lg-12">
                            <div id="panel-4" class="panel">
                               
                                <div class="panel-container show">
                                    <div class="panel-content">
                                         <div class="panel-hdr">
                                            <button class="btn btn-success" @click="abrirModalCrear">Nuevo</button>
                                        </div><br>
                                        <table id="table-shedule" class="table table-bordered table-hover table-striped w-100">
                                            <thead class="bg-warning-200">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Estacionamiento</th>
                                                    <th>Usuario</th>
                                                    <th>Fecha Programada</th>
                                                    <th>Hora Incio</th>
                                                    <th>Hora Final</th>
                                                    <th>Fecha creación</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="schedule in schedules" :key="schedule.id">
                                                    <td>{{ schedule.id }}</td>
                                                    <td>{{ schedule.parking.numero }}</td>
                                                    <td>{{ schedule.user.nombre + " " + schedule.user.apellido }}</td>
                                                    <td>{{ schedule.fecha }}</td>
                                                    <td>{{ schedule.hora_inicio }}</td>
                                                    <td>{{ schedule.hora_fin }}</td>
                                                    <td>{{ $dateFormat(schedule.created_at) }}</td>
                                                    <td>
                                                        <button class="btn btn-warning" @click="abrirModalEditar(schedule)"><i class="far fa-edit"></i></button>
                                                        <button class="btn btn-danger" @click="borrar(schedule.id)"><i class="far fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!-- datatable end -->
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="modal fade" id="modalForm">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title">
                                        <i class="fa fa-user-plus"></i> {{titulo}}
                                    </h5>
                                    <button  @click.prevent="cerrarModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <form>
                                    <div class="modal-body">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="Usuario">Usuario</label>
                                                <select id="Usuario" class="browser-default custom-select" v-model="datos.user_id">
                                                    <option></option>
                                                    <option v-for="user in users" :key="user.nombre+user.id" :value="user.id">{{ user.nombre + " " + user.apellido }}</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="Estacionamiento">Estacionamiento</label>
                                                <select id="Estacionamiento" class="browser-default custom-select" v-model="datos.estacionamiento_id">
                                                    <option></option>
                                                    <option v-for="parking in parkings" :key="parking.numero+parking.id" :value="parking.id">{{ parking.numero }}</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="Fecha">Fecha de programación</label>
                                                <input type="date" id="Fecha" class="form-control" placeholder="Fecha" v-model="datos.fecha">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="hora_inicio">Hora Inicio</label>
                                                <input type="time" min="06:00" max="18:00"  id="hora_inicio" class="form-control" :disabled="disabled" placeholder="Hora inicio" v-model="datos.hora_inicio">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="hora_fin">Hora Fin</label>
                                                <input type="time" min="06:00" max="18:00" id="hora_fin" class="form-control" :disabled="disabled" placeholder="Hora fin" v-model="datos.hora_fin">
                                            </div>
                                        </div>

                                        <div class="frame-wrap bg-faded mb-5">
                                            <div class="custom-control custom-checkbox d-inline-flex mr-3">
                                                <input type="checkbox" class="custom-control-input" name="bordered" id="option-bordered" v-model="allDay" @click="onChange('day')">
                                                <label class="custom-control-label" for="option-bordered">Dia completo</label>
                                            </div>
                                            <div class="custom-control custom-checkbox d-inline-flex mr-3">
                                                <input type="checkbox" class="custom-control-input" name="small" id="option-small" v-model="partialDay" @click="onChange('partial')">
                                                <label class="custom-control-label" for="option-small">Medio dia</label>
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="Observaciones">Observaciones</label>
                                                <textarea id="Observaciones" class="form-control" v-model="datos.observacion"></textarea>
                                            </div>
                                        </div>
                                        
                                       
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" @click.prevent="cerrarModal" data-dismiss="modal">Cerrar</button>
                                        <button type="submit" class="btn btn-primary" @click.prevent="crear" v-if="btnCrear">Crear</button>
                                        <button type="submit" class="btn btn-primary" @click.prevent="editar" v-if="btnEditar">Editar</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                       
                    </main>
                    <div class="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>

                    <footer class="page-footer" role="contentinfo">
                        <!-- <div class="d-flex align-users-center flex-1 text-muted">
                            <span class="hidden-md-down fw-700">2019 © servicios for PHP by&nbsp;<a href='index.html' class='text-primary fw-500' title='smartadmin.lodev09.com' target='_blank'>@lodev09</a></span>
                        </div> -->
                    </footer>
                    <!-- END Page Footer -->

                </div>
            </div>
        </div>
        <!-- END Page Wrapper -->
    </div>
</template>
<script>
import Sidebar from './../Sidebar.vue';
import Navbar from './../Navbar.vue';

export default {
    name: "Programacion",
    components: {
        Sidebar,
        Navbar
    },
    data(){
        return {
            users:[],
            parkings:[],
            schedules:[],
            allDay: false,
            partialDay: false,
            disabled: false,
            info: [],
            datos: {estacionamiento_id:'', user_id:'', fecha:'', hora_inicio:'', hora_fin: '', observacion: ''},
            titulo:'',
            btnCrear:false,
            btnEditar:false,
            id:''
        }
    },
    mounted(){
        this.init();
        this.$tablaGlobal('#table-shedule')
    },
    methods:{
        validarCampos(){
            if(!this.datos.estacionamiento_id || !this.datos.user_id || !this.datos.fecha || !this.datos.hora_inicio || !this.datos.hora_fin ){
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Completa los campos requeridos!',
                });
                return false;
            }
            return true;
        },
        onChange(param){
            this.disabled = false;
            if(param == "day"){ 
                this.allDay = !this.allDay;
                this.partialDay = false;
                if(this.allDay){
                    this.disabled = true;
                    this.datos.hora_inicio = "06:00";
                    this.datos.hora_fin = "18:00";
                }
            }else{
                this.partialDay = !this.partialDay
                this.allDay = false;
                if(this.partialDay){
                    this.disabled = true;
                    this.datos.hora_inicio = "06:00";
                    this.datos.hora_fin = "12:00";
                }
            }
        },
        async crear(){
            let valid = await this.validarCampos();
            if(valid){
                axios.post('api/programacion', this.datos).then(response=>{
                    console.log(response);
                    this.schedules.push(response.data);
                    $('#modalForm').modal('hide');
                    this.$swal.fire(
                        'Programación creado correctamente!',
                        '',
                        'success'
                    )
                   
                }).catch(function (error) {
                    console.log(error);
                });
            }
           
        },
        async editar(){
            let valid = await this.validarCampos();
            if(valid){
                axios.put('/api/programacion/'+this.id, this.datos).then(response=>{
                    this.schedules = [].concat(response.data);          
                    this.id='';
                    //this.getUser()
                    $('#modalForm').modal('hide');
                    this.$swal.fire(
                        'Programación editado correctamente!',
                        '',
                        'success'
                    )
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        borrar(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/programacion/${id}`).then(response=>{
                    this.schedules = [].concat(response.data);
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        abrirModalCrear(){
            this.allDay = false;
            this.partialDay = false;
            this.disabled = false;
            this.datos = {estacionamiento_id:'', user_id:'', fecha:'', hora_inicio:'', hora_fin: '', observacion: ''};
            this.titulo='Crear programacion'
            this.btnCrear=true;
            this.btnEditar=false;
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
            this.allDay = false;
            this.partialDay = false;
            this.disabled = false;
            this.datos= {estacionamiento_id: datos.estacionamiento_id, user_id: datos.user_id,
             fecha: datos.fecha, hora_inicio: datos.hora_inicio, hora_fin: datos.hora_fin, observacion: datos.observacion};
            this.titulo=' Editar Programación'
            this.btnCrear=false
            this.btnEditar=true
            this.id=datos.id
            $('#modalForm').modal('show')
        },
        async init(){
            await this.axios.get('/api/programacion')
                    .then(response=> {
                        
                        this.users = response.data.users;
                        this.parkings = response.data.parkings;
                        this.schedules = response.data.schedules;
                        
                    })
                    .catch(error=>{
                        console.log(error);
                        this.schedules =[]
                    })
            
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        }
    }
}
</script>