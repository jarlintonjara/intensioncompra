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
            <div class="col-sm-6 col-xl-3">
                <div class="p-3 bg-primary-300 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            {{ report.totalUsers }}
                            <small class="m-0 l-h-n">Usuarios</small>
                        </h3>
                    </div>
                    <i class="fal fa-user position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" style="font-size:6rem"></i>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
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
            <div class="col-sm-6 col-xl-3">
                <div class="p-3 bg-success-200 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            {{ report.totalSchedules }}
                            <small class="m-0 l-h-n">Programaciones de hoy</small>
                        </h3>
                    </div>
                    <i class="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n5 mr-n6" style="font-size: 8rem;"></i>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="p-3 bg-success-200 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            {{ report.programacionManana }}
                            <small class="m-0 l-h-n">Programaciones para mañana</small>
                        </h3>
                    </div>
                    <i class="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n5 mr-n6" style="font-size: 8rem;"></i>
                </div>
            </div>
            <!-- <div class="col-sm-6 col-xl-3">
                <div class="p-3 bg-info-200 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            +40%
                            <small class="m-0 l-h-n">Product level increase</small>
                        </h3>
                    </div>
                    <i class="fal fa-globe position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                </div>
            </div> -->
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div id="panel-4" class="panel">
                    
                    <div class="panel-container show">
                        <div class="panel-content">
                            <h2 style="text-align: center;"><b> ESTACIONAMIENTOS OCUPADOS PARA MAÑANA</b></h2>
                            <!-- inicio datatable end -->
                            <table id="table-shedules" class="table table-bordered table-hover table-striped w-100">
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
                                    <tr v-for="pm in programacionMananalist" :key="pm.parking.numero+pm.id">
                                        <td>{{ pm.id }}</td>
                                        <td>{{ pm.parking.numero }}</td>
                                        <td>{{ pm.user.nombre + " " + pm.user.apellido }}</td>
                                        <td>{{ pm.fecha }}</td>
                                        <td>{{ pm.hora_inicio }}</td>
                                        <td>{{ pm.hora_fin }}</td>
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
                            <table id="table-shedules" class="table table-bordered table-hover table-striped w-100">
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
                                    <tr v-for="pmd in programacionMananalistd" :key="pmd.parking.numero+pmd.id">
                                        <td>{{ pmd.id }}</td>
                                        <td>{{ pmd.parking.numero }}</td>
                                        <td>{{ pmd.user.nombre + " " + pmd.user.apellido }}</td>
                                        <td>{{ pmd.fecha }}</td>
                                        <td>{{ pmd.hora_inicio }}</td>
                                        <td>{{ pmd.hora_fin }}</td>
                                        <td>{{ $dateFormat(pmd.created_at) }}</td>
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
            user: null,
            schedules: [],
            programacionMananalist: [],
            programacionMananalistd: [],
            report: {
                totalUsers : 0,
                totalParkings : 0,
                totalSchedules: 0,
                programacionManana: 0
            },
        }
    },
    methods:{
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
                        this.programacionMananalist = report.programacionMananalist;
                        this.programacionMananalistd = report.programacionMananalistd;
                        console.log(report.programacionMananalistd);
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
            this.$tablaGlobal('#table-shedules')
        });
        /* axios.get('/sanctum/csrf-cookie').then(response => {
            console.log('response:::')
            console.log(response)
            
        }) */
    }
}
</script>