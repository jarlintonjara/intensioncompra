<template>
    
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
                        <table id="td-schedule" class="table table-bordered table-hover table-secondary m-0">
                            <thead class="table-secondary">
                                <tr>
                                    <th>N_Estac</th>
                                    <th>Usuario</th>
                                    <th>Fecha</th>
                                    <th>Hora Incio</th>
                                    <th>Hora Final</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="schedule in schedules" :key="schedule.id">
                                    <td>{{ schedule.parking.numero }}</td>
                                    <td>{{ schedule.user.nombre + " " + schedule.user.apellido }}</td>
                                    <td>{{ schedule.fecha }}</td>
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
                                <label class="custom-control-label" for="option-bordered">Todo el día</label>
                            </div>
                            <div class="custom-control custom-checkbox d-inline-flex mr-3">
                                <input type="checkbox" class="custom-control-input" name="small" id="option-small" v-model="morning" @click="onChange('morning')">
                                <label class="custom-control-label" for="option-small">Mañana</label>
                            </div>
                            <div class="custom-control custom-checkbox d-inline-flex mr-3">
                                <input type="checkbox" class="custom-control-input" name="small" id="option-small" v-model="afternoon" @click="onChange('afternoon')">
                                <label class="custom-control-label" for="option-small">Tarde</label>
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

export default {
    name: "Programacion",
    components: {
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

            $(document).ready(function () {
                // Setup - add a text input to each footer cell
                $('#td-schedule thead tr')
                    .clone(true)
                    .addClass('filters')
                    .appendTo('#td-schedule thead');
            
                var table = $('#td-schedule').DataTable({
                    orderCellsTop: true,
                    fixedHeader: true,
                    initComplete: function () {
                        var api = this.api();
            
                        // For each column
                        api
                            .columns()
                            .eq(0)
                            .each(function (colIdx) {
                                // Set the header cell to contain the input element
                                var cell = $('.filters th').eq(
                                    $(api.column(colIdx).header()).index()
                                );
                                var title = $(cell).text();
                                $(cell).html('<input type="text" placeholder="' + title + '" style="width:100%;" />');
            
                                // On every keypress in this input
                                $(
                                    'input',
                                    $('.filters th').eq($(api.column(colIdx).header()).index())
                                )
                                    .off('keyup change')
                                    .on('keyup change', function (e) {
                                        e.stopPropagation();
            
                                        // Get the search value
                                        $(this).attr('title', $(this).val());
                                        var regexr = '({search})'; //$(this).parents('th').find('select').val();
            
                                        var cursorPosition = this.selectionStart;
                                        // Search the column for that value
                                        api
                                            .column(colIdx)
                                            .search(
                                                this.value != ''
                                                    ? regexr.replace('{search}', '(((' + this.value + ')))')
                                                    : '',
                                                this.value != '',
                                                this.value == ''
                                            )
                                            .draw();
            
                                        $(this)
                                            .focus()[0]
                                            .setSelectionRange(cursorPosition, cursorPosition);
                                    });
                            });
                            
                    },
                                responsive: true,
                dom: `<'row'<'col-sm-12 mb-3'B>>
                        <'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6 text-right'f>>" +
                            "<'row'<'col-sm-12'tr>>" +
                                "<'row'<'col-sm-12 col-md-12'i><'col-sm-12 col-md-12'p>>`,
                "buttons": [
                    {
                        "extend":    'copyHtml5',
                        "text": "<i class='fas fa-copy'></i> Copiar",
                        "titleAttr": 'Copy',
                        "className": "btn btn-primary"
                    },
                    {
                        "extend": "excelHtml5",
                        "text": "<i class='fas fa-file-excel'></i> Excel",
                        "titleAttr": "Esportar a Excel",
                        "className": "btn btn-success"
                    },
                    {
                        "extend": "print",
                        "text": "<i class='fas fa-print'></i> Imprimir",
                        "titleAttr": "Imprimir archivo",
                        "className": "btn btn-secondary"
                    }
                ],
                "language": {
                    "url": "https://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
                }
                    });
            });

        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        }
    }
}

</script>