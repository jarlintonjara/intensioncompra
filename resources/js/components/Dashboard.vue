<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-chart-area'></i> <span class='fw-300'>Dashboard</span>
                <small>
                </small>
            </h1>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-6 col-md-2 col-xl-2">
                <div class="p-3 bg-primary-300 rounded overflow-hidden position-relative text-white mb-g" style="margin-bottom: 1%!important;">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            {{ report.totalUsers }}
                            <small class="m-0 l-h-n">Usuarios</small>
                        </h3>
                    </div>
                    <i class="fal fa-user position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" style="font-size:6rem; margin-bottom: 1%!important;"></i>
                </div>
                <div class="p-3 bg-warning-400 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            {{ report.totalParkings }}
                            <small class="m-0 l-h-n">Estacionamientos</small>
                        </h3>
                    </div>
                    <i class="fal fa-gem position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-md-5 col-xl-5" @click="showitem(1)">
                <div class="p-3 bg-success-200 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="d-flex mt-2">
                        <h5><b>ESTACIONES OCUPADOS HOY</b></h5>
                        <span class="d-inline-block ml-auto"><h5><b> {{ programacionhoy.length }} / {{ programacionhoy.length + estacioneshoy.length }} </b></h5></span>
                    </div>
                    <div class="progress progress-sm mb-3">
                        <div class="progress-bar bg-fusion-400" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                        <div class="d-flex">
                        <h5><b>ESTACIONES DISPONIBLES HOY</b></h5>
                        <span class="d-inline-block ml-auto"><h5><b> {{ estacioneshoy.length }} / {{ programacionhoy.length + estacioneshoy.length }} </b></h5></span>
                    </div>
                    <div class="progress progress-sm mb-3">
                        <div class="progress-bar bg-success-500" role="progressbar" style="width: 34%;" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                        <div class="d-flex">
                        <h5><b>OCUPABILIDAD HOY</b></h5>
                        <span class="d-inline-block ml-auto"> <h5><b>{{ indices.totalHoy }} %</b></h5></span>
                    </div>
                    <div class="progress progress-sm mb-3">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success-600" role="progressbar" style="width: 77%;" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <i class="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n5 mr-n6" style="font-size: 8rem;"></i>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-md-5 col-xl-5" @click="showitem(2)">
                <div class="p-3 bg-danger-200 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="d-flex mt-2">
                        <h5><b>ESTACIONES OCUPADOS MAÑANA</b></h5>
                        <span class="d-inline-block ml-auto"><h5><b> {{ programacionma.length }} / {{ programacionma.length + estacionesma.length }} </b></h5></span>
                    </div>
                    <div class="progress progress-sm mb-3">
                        <div class="progress-bar bg-fusion-400" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                        <div class="d-flex">
                        <h5><b>ESTACIONES DISPONIBLES MAÑANA</b></h5>
                        <span class="d-inline-block ml-auto"><h5><b> {{ estacionesma.length }} / {{ programacionma.length + estacionesma.length }} </b></h5></span>
                    </div>
                    <div class="progress progress-sm mb-3">
                        <div class="progress-bar bg-success-500" role="progressbar" style="width: 34%;" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                        <div class="d-flex">
                        <h5><b>OCUPABILIDAD MAÑANA</b></h5>
                        <span class="d-inline-block ml-auto"> <h5><b>{{ indices.totalManana }} %</b></h5></span>
                    </div>
                    <div class="progress progress-sm mb-3">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success-600" role="progressbar" style="width: 77%;" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <i class="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n5 mr-n6" style="font-size: 8rem;"></i>
                </div>
            </div>
        </div>
        

        <div class="row" v-if="item1">
            <div class="col-lg-12">
                <div id="panel-4" class="panel">
                    
                    <div class="panel-container show">
                        <div class="panel-content">
                            <h2 style="text-align: center;"><b> ESTACIONAMIENTOS OCUPADOS HOY</b></h2>
                            <!-- inicio datatable end -->
                            <table id="td-ocupadoshoy" class="table table-bordered table-hover table-striped w-100">
                                <thead class="bg-warning-200">
                                    <tr>
                                        <th>ID</th>
                                        <th>Estacionamiento</th>
                                        <th>Usuario</th>
                                        <th>DNI</th>
                                        <th>Fecha Programada</th>
                                        <th>Hora Incio</th>
                                        <th>Hora Final</th>
                                        <th>Propietario</th>
                                        <th>Fecha creación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="pm in programacionhoy" :key="pm.parking.numero+pm.id">
                                        <td>{{ pm.id }}</td>
                                        <td>{{ pm.parking.numero }}</td>
                                        <td>{{ pm.user.nombre + " " + pm.user.apellido }}</td>
                                        <td>{{ pm.user.documento }}</td>
                                        <td>{{ pm.fecha }}</td>
                                        <td>{{ pm.hora_inicio }}</td>
                                        <td>{{ pm.hora_fin }}</td>
                                        <td>{{ pm.created }}</td>
                                        <td>{{ $dateFormat(pm.created_at) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- datatable end -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                <div id="panel-4" class="panel">
                 
                    <div class="panel-container show">
                        <div class="panel-content">
                            <h2 style="text-align: center;"><b> ESTACIONAMIENTOS DISPONIBLES HOY</b></h2>
                            <!-- inicio datatable end -->
                            <table id="td-disponibleshoy" class="table table-bordered table-hover table-striped w-100">
                                <thead class="bg-warning-200">
                                    <tr>
                                        <th>ID</th>
                                        <th>Número</th>
                                        <th>Propietario</th>
                                        <th>Sede</th>
                                        <th>Ubicación</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="pmd in estacioneshoy" :key="pmd.numero+pmd.id">
                                        <td>{{ pmd.id }}</td>
                                        <td>{{ pmd.numero }}</td>
                                        <td>{{ pmd.nombre }}</td>
                                        <td>{{ pmd.sede }}</td>
                                        <td>{{ pmd.ubicacion }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- datatable end -->
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row"  v-if="item2">
            <div class="col-lg-12">
                <div id="panel-4" class="panel">
                    
                    <div class="panel-container show">
                        <div class="panel-content">
                            <h2 style="text-align: center;"><b> ESTACIONAMIENTOS OCUPADOS PARA MAÑANA</b></h2>
                            <!-- inicio datatable end -->
                            <table id="td-ocupadosman" class="table table-bordered table-hover table-striped w-100">
                                <thead class="bg-warning-200">
                                    <tr>
                                        <th>ID</th>
                                        <th>Estacionamiento</th>
                                        <th>Usuario</th>
                                        <th>DNI</th>
                                        <th>Fecha Programada</th>
                                        <th>Hora Incio</th>
                                        <th>Hora Final</th>
                                        <th>Propietario</th>
                                        <th>Fecha creación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="pm in programacionma" :key="pm.parking.numero+pm.id">
                                        <td>{{ pm.id }}</td>
                                        <td>{{ pm.parking.numero }}</td>
                                        <td>{{ pm.user.nombre + " " + pm.user.apellido }}</td>
                                        <td>{{ pm.user.documento }}</td>
                                        <td>{{ pm.fecha }}</td>
                                        <td>{{ pm.hora_inicio }}</td>
                                        <td>{{ pm.hora_fin }}</td>
                                        <td>{{ pm.created }}</td>
                                        <td>{{ $dateFormat(pm.created_at) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- datatable end -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                <div id="panel-4" class="panel">
                 
                    <div class="panel-container show">
                        <div class="panel-content">
                            <h2 style="text-align: center;"><b> ESTACIONAMIENTOS DISPONIBLES PARA MAÑANA</b></h2>
                            <!-- inicio datatable end -->
                            <table id="disponiblesman" class="table table-bordered table-hover table-striped w-100">
                                <thead class="bg-warning-200">
                                    <tr>
                                        <th>ID</th>
                                        <th>Número</th>
                                        <th>Propietario</th>
                                        <th>Sede</th>
                                        <th>Ubicación</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="pmd in estacionesma" :key="pmd.numero+pmd.id">
                                        <td>{{ pmd.id }}</td>
                                        <td>{{ pmd.numero }}</td>
                                        <td>{{ pmd.nombre }}</td>
                                        <td>{{ pmd.sede }}</td>
                                        <td>{{ pmd.ubicacion }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- datatable end -->
                        </div>
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
            item1:true,
            item2:false,
            user: null,
            schedules: [],
            programacionma: [],
            estacionesma: [],
            programacionhoy: [],
            estacioneshoy: [],
            report: {
                totalUsers : 0,
                totalParkings : 0,
                totalSchedules: 0,
                programacionManana: 0
            },
            indices: {
                totalHoy: 0,
                totalManana: 0
            }
        }
    },
    methods:{
        showitem(option){
            if(option == 1){
                this.item1 = true;
                this.item2 = false;
            }else{
                this.item2 = true;
                this.item1 = false;
            }
        },
        logout(){
            axios.post('/api/logout').then(()=>{
                this.$router.push({ name: "Login"})
            })
        },
        async init(){
             await this.axios.get('/api/dashboard')
                    .then(response=> {
                        let report = response.data;
                        this.report.totalUsers = report.usersTotal;
                        this.report.totalParkings = report.parkingsTotal;
                        this.report.totalSchedules = report.schedulesTotal;
                        this.report.programacionManana = report.programacionManana;
                        this.schedules = report.schedules;

                        this.programacionma = report.programacionma;
                        this.estacionesma = report.estacionesma;

                        this.programacionhoy = report.programacionhoy;
                        this.estacioneshoy = report.estacioneshoy;

                        this.indices.totalManana = Math.round((this.programacionma.length / (this.programacionma.length + this.estacionesma.length) ) * 100);
                        this.indices.totalHoy = Math.round((this.programacionhoy.length / (this.programacionhoy.length + this.estacioneshoy.length) ) * 100);

                    })
                    .catch(error=>{
                        console.log(error);
                    })
        }
    },
    mounted(){
        this.init();
        axios.get('/api/user').then((res)=>{
            this.user = res.data;
            this.$tablaGlobal('#td-ocupadoshoy');
            this.$tablaGlobal('#td-disponibleshoy');
            this.$tablaGlobal('#td-ocupadosman');
            this.$tablaGlobal('#td-disponiblesman');
        });
        /* axios.get('/sanctum/csrf-cookie').then(response => {
            console.log('response:::')
            console.log(response)
            
        }) */
    }
}
</script>