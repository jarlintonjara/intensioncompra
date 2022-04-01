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
                        <table id="ingreso" class="table table-bordered table-hover table-striped w-100">
                            <thead class="" style="background-color: rgb(227, 0, 37) !important;">
                                <tr>
                                    <th>VIN</th>
                                    <th>MARCA</th>
                                    <th>MODELO</th>
                                    <th>VERSION</th>
                                    <th>AÑO MODELO</th>
                                    <th>AÑO FABRICACIÓN</th>
                                    <th>COLOR</th>
                                    <th>CODIGO SAP</th>
                                    <th>SITUACIÓN</th>
                                    <th>BLOQUEADO?</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="ingreso in ingresos" :key="ingreso.id">
                                    <td>{{ingreso.vin}}</td>
                                    <td>{{ingreso.marca}}</td>
                                    <td>{{ingreso.modelo}}</td>
                                    <td>{{ingreso.version}}</td>
                                    <td>{{$dateFormat(ingreso.anio_modelo)}}</td>
                                    <td>{{$dateFormat(ingreso.anio_fabricacion)}}</td>
                                    <td>{{ingreso.color}}</td>
                                    <td>{{ingreso.codigo_sap}}</td>
                                    <td>{{ingreso.situacion}}</td>
                                    <td>{{ingreso.bloqueado}}</td>
                                    <td style="text-align: center">
                                        <button class="btn btn-warning"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
                                    </td>
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
            ingresos:[],
            user: null
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        async init(){
            await this.axios.get('/api/ingreso')
                    .then(response=>{
                        this.ingresos = response.data
                    })
                    .catch(error=>{
                        console.log(error);
                        this.ingresos =[]
                    })
                   await this.$tablaGlobal('#ingreso');
        }
    }
}

</script>