<template>
    <header class="page-header" role="banner">
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
            <span style="color: red;display: block">Concesionario : <span style="color: #425C79">{{tienda.nombre}}</span></span>
            <span style="color: red;">Tienda : <span style="color: #425C79">{{concesionario.nombre}}</span></span>
        </div>
        <div class="ml-auto d-flex">
            <!-- app user menu -->
            <div>
                <a href="#" data-toggle="dropdown" title="Usuario" class="header-icon d-flex align-items-center justify-content-center ml-2" style="height: 31px;">
                    <i class="fas fa-user"></i> {{ user.nombre }}
                </a>
                <div class="dropdown-menu dropdown-menu-animated dropdown-lg">
                    <div class="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top">
                        <div class="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                            <span class="mr-2">
                                <!-- <img src="assets/img/demo/avatars/avatar-admin.png" class="rounded-circle profile-image" alt="Dr. Codex Lantern"> -->
                            </span>
                            <div class="info-card-text">
                                <div class="fs-lg text-truncate text-truncate-lg"></div>
                            </div>
                        </div>
                    </div>
                        
                    <div class="dropdown-divider m-0"></div>
                    <router-link to="perfil" class="dropdown-item fw-500 pt-3 pb-3">
                        <span data-i18n="drpdwn.page-logout">Perfil</span> 
                    </router-link>

                    <div class="dropdown-divider m-0"></div>
                    <a class="dropdown-item fw-500 pt-3 pb-3" href="" @click.prevent="logout">
                        <span data-i18n="drpdwn.page-logout">Logout</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: "Navbar",
    props:['session'],
    data(){
        return {
            user: { nombre : ""},
            tienda: { nombre : ""},
            concesionario: { nombre : ""}
        }
    },
    watch:{
        session(val){
            this.user = val;
            this.tienda = this.user.tienda;
            this.concesionario = this.user.concesionario;
        }
    },
    methods:{
        async logout(){
            const token = localStorage.getItem('access_token');
            const access_token = token ? token : "";
            await axios.post('/api/logout', { access_token : access_token }).then(()=>{
                localStorage.removeItem("access_token");
                this.$router.push({ name: "Login"})
            })
        }
    }
}
</script>