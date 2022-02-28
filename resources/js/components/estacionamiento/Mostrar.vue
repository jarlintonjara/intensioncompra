<template>
    <div>
        <div class="page-wrapper">
            <div class="page-inner">
                <!-- BEGIN Left Aside -->
                <aside class="page-sidebar">
                    <div class="page-logo">
                        <a href="#" class="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
                            <!-- <img src="assets/img/logo.png" alt="SmartAdmin for PHP" aria-roledescription="logo"> -->
                            <span class="page-logo-text mr-1">DERCO</span>
                            <span class="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
                            <i class="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
                        </a>
                    </div>
                    <!-- BEGIN PRIMARY NAVIGATION -->
                    <nav id="js-primary-nav" class="primary-nav" role="navigation">
                        <div class="nav-filter">
                            <div class="position-relative">
                                <input type="text" id="nav_filter_input" placeholder="Filter menu" class="form-control" tabindex="0">
                                <a href="#" onclick="return false;" class="btn-primary btn-search-close js-waves-off" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar">
                                    <i class="fal fa-chevron-up"></i>
                                </a>
                            </div>
                        </div>
                        <!-- <div class="info-card">
                            <img src="assets/img/demo/avatars/avatar-admin.png" class="profile-image rounded-circle" alt="Dr. Codex Lantern">
                            <div class="info-card-text">
                                <a href="#" class="d-flex align-items-center text-white">
                                    <span class="text-truncate text-truncate-sm d-inline-block">
                                        Dr. Codex Lantern
                                    </span>
                                </a>
                                <span class="d-inline-block text-truncate text-truncate-sm">Toronto, Canada</span>
                            </div>
                            <img src="assets/img/card-backgrounds/cover-4-lg.png" class="cover" alt="cover">
                            <a href="#" onclick="return false;" class="pull-trigger-btn" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar" data-focus="nav_filter_input">
                                <i class="fal fa-angle-down"></i>
                            </a>
                        </div> -->
                        <ul class="nav-menu" id="js-nav-menu">
                            
                            <li class="active open">
                            
                                <ul>
                                    <li class="active">
                                        <router-link to="/" class="">Inicio</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/usuarios" class="">Usuarios</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/estacionamiento" class="">Estacionamiento</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/programacion" class="">Programación</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="filter-message js-filter-message bg-success-600"></div>
                    </nav>
                        <!-- END PRIMARY NAVIGATION -->
                        <!-- NAV FOOTER -->
                        <div class="nav-footer shadow-top">
                            <a href="#" onclick="return false;" data-action="toggle" data-class="nav-function-minify" class="hidden-md-down">
                                <i class="ni ni-chevron-right"></i>
                                <i class="ni ni-chevron-right"></i>
                            </a>
                            <ul class="list-table m-auto nav-footer-buttons">
                                <li>
                                    <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Chat logs">
                                        <i class="fal fa-comments"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Support Chat">
                                        <i class="fal fa-life-ring"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Make a call">
                                        <i class="fal fa-phone"></i>
                                    </a>
                                </li>
                            </ul>
                        </div> <!-- END NAV FOOTER -->
                    </aside>
                    <!-- END Left Aside -->
                <div class="page-content-wrapper">
                    <!-- BEGIN Page Header -->
                    <header class="page-header" role="banner">
                        <!-- we need this logo when user switches to nav-function-top -->
                        <!-- <div class="page-logo">
                            <a href="#" class="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
                                <img src="assets/img/logo.png" alt="SmartAdmin for PHP" aria-roledescription="logo">
                                <span class="page-logo-text mr-1">SmartAdmin for PHP</span>
                                <span class="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
                                <i class="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
                            </a>
                        </div> -->
                        <!-- DOC: nav menu layout change shortcut -->
                        <div class="hidden-md-down dropdown-icon-menu position-relative">
                            <a href="#" class="header-btn btn js-waves-off" data-action="toggle" data-class="nav-function-hidden" title="Hide Navigation">
                                <i class="ni ni-menu"></i>
                            </a>
                            <ul>
                                <li>
                                    <a href="#" class="btn js-waves-off" data-action="toggle" data-class="nav-function-minify" title="Minify Navigation">
                                        <i class="ni ni-minify-nav"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn js-waves-off" data-action="toggle" data-class="nav-function-fixed" title="Lock Navigation">
                                        <i class="ni ni-lock-nav"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- DOC: mobile button appears during mobile width -->
                        <div class="hidden-lg-up">
                            <a href="#" class="header-btn btn press-scale-down" data-action="toggle" data-class="mobile-nav-on">
                                <i class="ni ni-menu"></i>
                            </a>
                        </div>
                        <div class="search">
                            <form class="app-forms hidden-xs-down" role="search" action="https://smartadmin.lodev09.com/page_search.php" autocomplete="off">
                                <input type="text" id="search-field" placeholder="Search for anything" class="form-control" tabindex="1">
                                <a href="#" onclick="return false;" class="btn-danger btn-search-close js-waves-off d-none" data-action="toggle" data-class="mobile-search-on">
                                    <i class="fal fa-times"></i>
                                </a>
                            </form>
                        </div>
                        <div class="ml-auto d-flex">
                            <!-- app user menu -->
                            <div>
                                <a href="#" data-toggle="dropdown" title="drlantern@gotbootstrap.com" class="header-icon d-flex align-items-center justify-content-center ml-2">
                                    <img src="assets/img/demo/avatars/avatar-admin.png" class="profile-image rounded-circle" alt="Dr. Codex Lantern">
                                    <!-- you can also add username next to the avatar with the codes below:
                                                        <span class="ml-1 mr-1 text-truncate text-truncate-header hidden-xs-down">Me</span>
                                                        <i class="ni ni-chevron-down hidden-xs-down"></i> -->
                                </a>
                                <div class="dropdown-menu dropdown-menu-animated dropdown-lg">
                                    <div class="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top">
                                        <div class="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                                            <span class="mr-2">
                                                <img src="assets/img/demo/avatars/avatar-admin.png" class="rounded-circle profile-image" alt="Dr. Codex Lantern">
                                            </span>
                                            <div class="info-card-text">
                                                <div class="fs-lg text-truncate text-truncate-lg"></div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    
                                    <div class="dropdown-divider m-0"></div>
                                    <a class="dropdown-item fw-500 pt-3 pb-3" href="" @click.prevent="logout">
                                        <span data-i18n="drpdwn.page-logout">Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>
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
                                <i class='subheader-icon fal fa-chart-area'></i> Estacionamiento 
                                <small>
                                </small>
                            </h1>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <button class="btn btn-success" @click="abrirModalCrear">Nuevo</button>
                            </div>
                        </div><br>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <th>ID</th>
                                            <th>Número</th>
                                            <th>Sede</th>
                                            <th>Ubicación</th>
                                            <th>Acciones</th>
                                        </thead>
                                        <tbody>
                                        <tr v-for="item in items" :key="item.id">
                                                <td>{{ item.id }}</td>
                                                <td>{{ item.numero }}</td>
                                                <td>{{ item.sede }}</td>
                                                <td>{{ item.ubicacion }}</td>
                                                <td>
                                                    <button class="btn btn-info" @click="abrirModalEditar(item)"><i class="far fa-edit"></i></button>
                                                    <!--router-link :to="{name:'editarEstacionamiento', params:{id:item.id}}" class="btn btn-info"><i class="far fa-edit"></i></!--router-link-->
                                                </td>
                                        </tr>
                                        </tbody>
                                        
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="modalForm">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header bg-primary">
                                    <h5 class="modal-title">
                                        <i class="fa fa-user-plus"></i> {{titulo}}
                                    </h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <form>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label for="nombre">Número</label>
                                            <input type="text" class="form-control" placeholder="numero" required="" v-model="datos.numero">
                                        </div>
                                        <div class="form-group">
                                            <label for="nombres">Sede</label>
                                            <input type="text" class="form-control" placeholder="sede" required="" v-model="datos.sede">
                                        </div>
                                        <div class="form-group">
                                            <label for="nombress">Ubicación</label>
                                            <input type="text" class="form-control" placeholder="ubicación" required="" v-model="datos.ubicacion">
                                        </div>
                                        
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                                        <button type="submit" class="btn btn-primary" @click.prevent="crear" v-if="btnCrear">Crear</button>
                                        <button type="submit" class="btn btn-primary" @click.prevent="editar" v-if="btnEditar">Editar</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- Modal ver detalles -->
                        <div class="modal fade" id="modalDetalle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header bg-info">
                                        <h5 class="modal-title"><i class="fas fa-info-circle"></i> Detalles del usuario</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="table-responsive">
                                            <table class="table table-hover table-bordered table-striped">                  
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">Numero</th><td>{{info.name}}</td></tr>
                                                    <tr>
                                                    <th scope="row">E-Sede</th>                      
                                                        <td>{{info.email}}</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">Ubicación</th>                      

                                                    </tr>
                                                    <tr>
                                                    <th scope="row">Fecha actualización</th>
                                                
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-success" data-dismiss="modal">OK</button>
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
<!-- BEGIN Shortcuts -->
<!-- modal shortcut -->
<div class="modal fade modal-backdrop-transparent" id="modal-shortcut" tabindex="-1" role="dialog" aria-labelledby="modal-shortcut" aria-hidden="true">
    <div class="modal-dialog modal-dialog-top modal-transparent" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <ul class="app-list w-auto h-auto p-0 text-left">
                    <li>
                        <a href="intel_introduction.html" class="app-list-item text-white border-0 m-0">
                            <div class="icon-stack">
                                <i class="base base-7 icon-stack-3x opacity-100 color-primary-500 "></i>
                                <i class="base base-7 icon-stack-2x opacity-100 color-primary-300 "></i>
                                <i class="fal fa-home icon-stack-1x opacity-100 color-white"></i>
                            </div>
                            <span class="app-list-name">
                                Home
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="page_inbox_general.html" class="app-list-item text-white border-0 m-0">
                            <div class="icon-stack">
                                <i class="base base-7 icon-stack-3x opacity-100 color-success-500 "></i>
                                <i class="base base-7 icon-stack-2x opacity-100 color-success-300 "></i>
                                <i class="ni ni-envelope icon-stack-1x text-white"></i>
                            </div>
                            <span class="app-list-name">
                                Inbox
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="intel_introduction.html" class="app-list-item text-white border-0 m-0">
                            <div class="icon-stack">
                                <i class="base base-7 icon-stack-2x opacity-100 color-primary-300 "></i>
                                <i class="fal fa-plus icon-stack-1x opacity-100 color-white"></i>
                            </div>
                            <span class="app-list-name">
                                Add More
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div> <!-- END Shortcuts -->
                </div>
            </div>
        </div>
        <!-- END Page Wrapper -->
    </div>
</template>
<script>
export default {
    name: "Estacionamiento",
    data(){
        return {
            items:[],
            info: [],
            datos: {numero:'', sede:'', ubicacion:''},
            titulo:'',
            btnCrear:false,
            btnEditar:false,
            idUser:''
        }
    },
    mounted(){
        this.mostrarItems()
    },
    methods:{
        /* getUser(){
            axios.get('listar_usuarios').then(res=>{
                $('#sampleTable').DataTable().destroy()
                this.usuarios = res.data         
                this.$tablaGlobal('#sampleTable')
            });
        }, */
        crear(){
            axios.post('api/estacionamiento', this.datos).then(res=>{
                console.log(res);
                console.log(res.data);
                this.items.push(res.data);
                
                //this.getUser()
                $('#modalForm').modal('hide');
                alert("Estacionamiento creado correctamente!");
                //swal("Felicidades!", "Estacionamiento creado correctamente!", "success");
            }).catch(function (error) {
                console.log(error);
            });
        },
        editar(){
            axios.put('/api/estacionamiento/'+this.idUser,this.datos).then(res=>{          
                this.idUser=''
                //this.getUser()
                $('#modalForm').modal('hide')
                alert("Estacionamiento editado correctamente!");
                //swal("Felicidades!", "Usuario editado correctamente!", "success");
            }).catch(function (error) {
                console.log(error);
            });
        },
        abrirModalCrear(){
            this.datos= {numero:'', sede:'', ubicacion:''}
            this.titulo=' Crear usuario'
            this.btnCrear=true
            this.btnEditar=false
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
            this.datos= {numero: datos.numero, sede: datos.sede, ubicacion: datos.ubicacion}
            this.titulo=' Editar usuario'
            this.btnCrear=false
            this.btnEditar=true
            this.idUser=datos.id
            $('#modalForm').modal('show')
        },
        async mostrarItems(){
            await this.axios.get('/api/estacionamiento')
                    .then(response=>{
                        this.items = response.data
                    })
                    .catch(error=>{
                        console.log(error);
                        this.items =[]
                    })
        }
    }
}
</script>