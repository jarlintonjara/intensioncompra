<template>
    
    <main id="js-page-content" role="main" class="page-content">
        
        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-chart-area'></i> PROGRAMACIÓN DE ESTACIONAMIENTOS
                <small>
                </small>
            </h1>
        </div>
        <br>
        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                <div class="panel-hdr">
                        <h2 style="text-align: center; font-size: 1.125rem;"><b> SEMANA ACTUAL</b></h2>
                    <div class="panel-toolbar">
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                    </div>
                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                            <div class="panel-hdr">
                            <button class="btn btn-success" @click="abrirModalCrear">Nuevo</button>
                        </div><br>
                     
                        <table id="td-schedule" class="table table-bordered table-hover table-striped w-100">
                            <thead class="bg-warning-200">
                                <tr>
                                    <th>N_Estac</th>
                                    <th>Asignado</th>
                                    <th>Dia de semana</th>
                                    <th>Hora Incio</th>
                                    <th>Hora Final</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="schedule in schedulesFilter" :key="schedule.id">
                                    <td>{{ schedule.parking.numero }}</td>
                                    <td>{{ schedule.user.nombre + " " + schedule.user.apellido }}</td>
                                    <td>{{ schedule.dia }}</td>
                                    <td>{{ schedule.hora_inicio }}</td>
                                    <td>{{ schedule.hora_fin }}</td>
                                    <td>
                                        <button class="btn btn-warning" @click="abrirModalEditar(schedule)"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="borrar(schedule.id)"><i class="fa fa-trash"></i></button>
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
                                <v-select class="vue-select2" name="select2" 
                                    :options="usersFilter" v-model="datos.user_id" :reduce="label => label.code">
                                </v-select>

                            </div>
                            <div class="form-group col-md-6">
                                <label for="Estacionamiento">Estacionamiento</label>
                                <select id="Estacionamiento" class="browser-default custom-select" v-model="datos.estacionamiento_id">
                                    <option></option>
                                    <option v-for="parking in parkingsFilter" :key="parking.numero+parking.id" :value="parking.id">{{ parking.numero }}</option>
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
                                <label class="custom-control-label" for="option-bordered">Todo el día</label>
                            </div>
                            <div class="custom-control custom-checkbox d-inline-flex mr-3">
                                <input type="checkbox" class="custom-control-input" name="small" id="option-small" v-model="morning" @click="onChange('morning')">
                                <label class="custom-control-label" for="option-small">Mañana</label>
                            </div>
                            <div class="custom-control custom-checkbox d-inline-flex mr-3">
                                <input type="checkbox" class="custom-control-input" name="small" id="option-small2" v-model="afternoon" @click="onChange('afternoon')">
                                <label class="custom-control-label" for="option-small2">Tarde</label>
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
                    
</template>
<script>
//import Select2 from '../common/select2.vue'

export default {
    name: "Programacion",
    components: {

    },
    data(){
        return {
            users:[],
            session: {},
            parkings:[],
            usersFilter: [],
            parkingsFilter: [],
            schedules:[],
            schedulesFilter:[],
            allDay: false,
            morning: false,
            afternoon: false,
            disabled: false,
            info: [],
            datos: {estacionamiento_id:'', user_id:'', fecha:'', hora_inicio:'', hora_fin: '', observacion: '', created_by : ''},
            titulo:'',
            btnCrear:false,
            btnEditar:false,
            id:''
        }
    },
    mounted(){
        this.session = this.$route.query.ps;
        this.datos.created_by = this.session.id
        this.init();
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
        validarRole(){
            this.parkingsFilter = [];
            this.usersFilter = [];
            this.schedulesFilter = [];
            if(this.session.role_id === 1){
                this.usersFilter = this.users;
                this.usersFilter = this.usersFilter.map(e => { return { code : e.id, label: e.nombre + " " + e.apellido } })
                this.parkingsFilter = this.parkings;
                this.schedulesFilter = this.schedules;
                
            }else if(this.session.role_id == 3){
                this.parkingsFilter = [].concat(this.parkings.filter(e => e.id == this.session.parking_id))
                this.usersFilter = this.users;
                this.usersFilter = this.usersFilter.map(e => { return { code : e.id, label: e.nombre + " " + e.apellido } })
                this.schedulesFilter = [].concat(this.schedules.filter(e => e.created_by == this.session.id));
                this.datos.estacionamiento_id = this.session.parking_id;
                this.datos.user_id = this.session.id;
            }
        },
        onChange(param){
            this.disabled = false;
            switch(param){
                case "day":
                    this.allDay = !this.allDay;
                    this.morning = false;
                    this.afternoon = false;
                    if(this.allDay){
                        this.disabled = true;
                        this.datos.hora_inicio = "06:00";
                        this.datos.hora_fin = "18:00";
                    }
                    break;
                case "morning":
                    this.morning = !this.morning
                    this.allDay = false;
                    this.afternoon = false;
                    if(this.morning){
                        this.disabled = true;
                        this.datos.hora_inicio = "06:00";
                        this.datos.hora_fin = "12:00";
                    }
                    break;
                case "afternoon":
                    console.log(this.afternoon)
                    this.afternoon = !this.afternoon;
                    this.morning = false;
                    this.allDay = false;
                    if(this.afternoon){
                        this.disabled = true;
                        this.datos.hora_inicio = "12:00";
                        this.datos.hora_fin = "18:00";
                    }
                    break
            }
        },
        async crear(){
            
            let valid = await this.validarCampos();
            if(valid){
                axios.post('api/programacion', this.datos).then(response=>{
                    this.schedulesFilter.push(response.data);
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
                    this.schedulesFilter = [].concat(response.data);          
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
            this.datos.estacionamiento_id = '';
            this.datos.user_id = '';
            this.datos.fecha = '';
            this.datos.hora_inicio = '';
            this.datos.hora_fin = '';
            this.datos.observacion = '';
            this.titulo='Crear programacion';
            this.btnCrear=true;
            this.btnEditar=false;
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
            this.allDay = false;
            this.partialDay = false;
            this.disabled = false;
            this.datos.estacionamiento_id = datos.estacionamiento_id;
            this.datos.user_id = datos.user_id;
            this.datos.fecha = datos.fecha;
            this.datos.hora_inicio = datos.hora_inicio;
            this.datos.hora_fin = datos.hora_fin;
            this.datos.observacion = datos.observacion;
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
                    //$('#td-schedule').DataTable();
                })
                .catch(error=>{
                    console.log(error);
                    this.schedules =[]
                })
                await this.validarRole();
                this.$tablaGlobal('#td-schedule');
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        }
    }
}

</script>