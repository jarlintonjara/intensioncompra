<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-pencil'></i> <span class='fw-300'>Reservados</span>
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
                        <!-- <button class="btn btn-panel waves-effect waves-themed" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button> -->
                    </div>

                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <table id="treservado" class="table table-bordered table-hover table-striped w-100">
                            <thead class="" style="background-color: rgb(227, 0, 37) !important;">
                                <tr>
                                    <th>FECHA DISTRIBUCIÓN</th>
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
    </main>
</template>
<script>

export default {
    data(){
        return{
            asignaciones:[],
            user: null
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
                    this.asignaciones = asignaciones.filter(e => e.situacion == 'FACTURADO');
                })
                .catch(error=>{
                    console.log(error);
                    this.asignaciones =[]
                })
                await this.$tablaGlobal('#treservado');
        }
    }
}

</script>