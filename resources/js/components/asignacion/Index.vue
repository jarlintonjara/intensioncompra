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
                    <h2>
                        <h2 style="text-align: center; font-size: 1.125rem;"><b>Todos</b></h2>
                    </h2>
                    <div class="panel-toolbar">
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                        <!-- <button class="btn btn-panel waves-effect waves-themed" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button> -->
                    </div>

                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <table id="asignaciones" class="table table-bordered table-hover table-striped w-100">
                            <thead class="" style="background-color: rgb(227, 0, 37) !important;">
                                <tr>
                                    <th>FECHA DISTRIBUCIÓN</th>
                                    <th>RESERVAR</th>
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
                                    <td style="text-align: center">
                                        <button class="btn btn-success" @click="abrirModalEditar(asignacion)"><i class="fa fa-check"></i></button>
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
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="MontoReserva">Monto Reserva</label>
                                    <input type="text" id="MontoReserva" class="form-control" placeholder="Monto Reserva" required="" v-model="form.monto_reserva">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="Fecha">Fecha Reserva</label>
                                    <input type="date" id="Fecha" class="form-control" placeholder="Fecha" v-model="form.fecha_reserva">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click.prevent="cerrarModal" data-dismiss="modal">Cerrar</button>
                            <button type="submit" class="btn btn-primary" @click.prevent="editar">Editar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>
<script>

export default {
    name: "Asignacion",
    data(){
        return{
            asignaciones:[],
            id : null,
            form: {
                codigo_reserva: "",
                monto_reserva: 0,
                fecha_reserva: "",
                situacion: "RESERVADO"
            }
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
            })
            await this.axios.get('/api/asignacion')
                .then(response=>{
                    let asignaciones = response.data;
                    this.asignaciones = asignaciones.filter(e => e.situacion == 'ASIGNADO').filter(e => e.user_id == this.user.id);                })
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
            this.form.fecha_reserva = asignacion.fecha_reserva;
            $('#modalForm').modal('show')
        },
        async editar(){
            let valid = await this.validarCampos();
            if(valid){
                await axios.put('/api/asignacion/'+this.id, this.form).then(response=>{
                    let index =  this.asignaciones.map(function(e) {
                        return e.id;
                    }).indexOf(this.id);
                    if(index !== -1){
                        this.asignaciones[index].codigo_reserva =  response.data.codigo_reserva;
                        this.asignaciones[index].monto_reserva =  response.data.monto_reserva;
                        this.asignaciones[index].fecha_reserva =  response.data.fecha_reserva;
                        this.asignaciones[index].situacion =  response.data.situacion;
                        this.asignaciones = [].concat(this.asignaciones);
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
            }
        },
        validarCampos(){
            if(!this.form.codigo_reserva || !this.form.monto_reserva || !this.form.fecha_reserva ){
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Completa los campos requeridos!',
                });
                return false;
            }
            return true;
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        }
    }
}

</script>