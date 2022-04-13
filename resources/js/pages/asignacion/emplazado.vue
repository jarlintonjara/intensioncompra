<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-pencil'></i> <span class='fw-300'>Emplazados</span>
            </h1>
        </div>
        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                <div class="panel-hdr">
                    <button style="text-align: center;" class="btn btn-success" @click="jobFacturar()">job Facturar</button>
                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <table id="treservado" class="table table-bordered table-hover table-striped w-100">
                            <thead>
                                <tr>
                                    <th>FECHA DISTRIBUCIÓN</th>
                                    <th>CONCESIONARIO</th>
                                    <th>ASESOR</th>
                                    <th>VIN</th>
                                    <th>MARCA</th>
                                    <th>MODELO</th>
                                    <th>VERSION</th>
                                    <th>COLOR</th>
                                    <th>AÑO MODELO</th>
                                    <th>CÓDIGO SAP</th>
                                    <th>CÓDIGO RESERVA</th>
                                    <th>MONTO RESERVA</th>
                                    <th>FECHA RESERVA</th>
                                    <th>FECHA EMPLAZADO</th>
                                    <th>ESTADO</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="asignacion in asignaciones" :key="asignacion.id">
                                    <td>{{$dateFormat(asignacion.fecha_distribucion)}}</td>
                                    <td>{{asignacion.concesionario}}</td>
                                    <td>{{asignacion.nombre}}</td>
                                    <td>{{asignacion.vin}}</td>
                                    <td>{{asignacion.marca}}</td>
                                    <td>{{asignacion.modelo}}</td>
                                    <td>{{asignacion.version}}</td>
                                    <td>{{asignacion.color}}</td>
                                    <td>{{asignacion.anio_modelo}}</td>
                                    <td>{{asignacion.codigo_sap}}</td>
                                    <td>{{asignacion.codigo_reserva}}</td>
                                    <td>{{asignacion.monto_reserva}}</td>
                                    <td>{{asignacion.fecha_reserva}}</td>
                                    <td>{{ '2022-04-12'}}</td>
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
            loading: true,
            asignaciones:[]
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        async init(){
            const token = localStorage.getItem('access_token');
            await this.axios.get('/api/emplazado',{
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(response=>{
                    this.asignaciones = response.data;
                })
                .catch(error=>{
                    console.log(error);
                    this.asignaciones =[]
                })
                await this.$tablaGlobal('#treservado');
        },
        async jobFacturar(){
            await this.axios.get('/api/executeFacturado')
                .then(response=>{
                     this.$swal.fire(
                    'Facturados!',
                    '',
                    'success'
                )              
                    })
                .catch(error=>{
                    console.log(error);
                })
            
        }
    }
}

</script>