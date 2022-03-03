<template>
    <div>
        <div class="page-wrapper">
            <div class="page-inner">
                <!-- BEGIN Left Aside -->
                <Sidebar/>
                <!-- END Left Aside -->
                <div class="page-content-wrapper">
                    <!-- BEGIN Page Header -->
                    <Navbar :session='user'/>
                    <!-- END Page Header -->
                    <!-- BEGIN Page Content -->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <!-- <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
                            <li class="breadcrumb-item">Application Intel</li>
                            <li class="breadcrumb-item active">Marketing Dashboard</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol> -->
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
                                            <table id="sampleTable" class="table table-bordered table-hover table-striped w-100">
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
                    <!-- END Page Content -->
                    <!-- this overlay is activated only when mobile menu is triggered -->
                <div class="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>
                    <!-- BEGIN Page Footer -->
                    <footer class="page-footer" role="contentinfo">
                        <!-- <div class="d-flex align-items-center flex-1 text-muted">
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
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
export default {
  components: { Sidebar, Navbar },
    data(){
        return{
            user: null,
            schedules: [],
            report: {
                totalUsers : 0,
                totalParkings : 0,
                totalSchedules: 0
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
                        this.schedules = report.schedules;
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
            //this.$tablaGlobal('#sampleTable')
        })
    }
}
</script>