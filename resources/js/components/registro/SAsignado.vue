<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-list'></i> <span class='fw-300'>ASIGNADOS</span>
            </h1>
        </div>

        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                <div class="panel-hdr">
                    <h2>
                        <h2 style="text-align: center; font-size: 1.125rem;"><b>Registros asignados </b></h2>
                    </h2>
                    <div class="panel-toolbar">
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                        <button class="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                        <!-- <button class="btn btn-panel waves-effect waves-themed" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button> -->
                    </div>

                </div>
                <div class="panel-container show">
                    <div class="panel-content">
                        <table id="tasignado" class="table table-bordered table-hover table-striped w-100">
                            <thead class="" style="background-color: rgb(227, 0, 37) !important;">
                                <tr>
                                    <th>Fecha Creación</th>
                                    <th>Nombre Completo</th>
                                    <th>Documento</th>
                                    <th>celular</th>
                                    <th>Correo</th>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Versión</th>
                                    <th>color 1</th>
                                    <th>color 2</th>
                                    <th>color 3</th>
                                    <th>Año Modelo</th>
                                    <th>Fecha Distribución</th>
                                    <th>VIN</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="asignado in asignados" :key="asignado.id">
                                    <td>{{$dateFormat(asignado.created_at)}}</td>
                                    <td>{{asignado.nombre_completo}}</td>
                                    <td>{{asignado.documento}}</td>
                                    <td>{{asignado.celular}}</td>
                                    <td>{{asignado.correo}}</td>
                                    <td>{{asignado.marca}}</td>
                                    <td>{{asignado.modelo}}</td>
                                    <td>{{asignado.version}}</td>
                                    <td>{{asignado.color1}}</td>
                                    <td>{{asignado.color2}}</td>
                                    <td>{{asignado.color3}}</td>
                                    <td>{{asignado.anio_modelo}}</td>
                                    <td>31-03-2022</td>
                                    <td>25d55ad283aa400af464c76d713c07ad</td>
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
            asignados:[],
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
             await this.axios.get('/api/registro')
                .then(response=> {
                    //this.caracteristicas = response.data.caracteristicas;
                    let asignados = response.data.asignados;
                    this.asignados = asignados.filter(e => e.user_id == this.user.id);
                })
                .catch(error=>{
                    console.log(error);
                })
                this.$tablaGlobal('#tasignado');
        }
    }
}

</script>