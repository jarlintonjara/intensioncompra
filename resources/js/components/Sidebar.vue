<template>
    <aside class="page-sidebar">
        <div class="page-logo">
            <a href="#" class="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
                <img src="admin/logo.jfif" alt="derco" aria-roledescription="logo" style="width: 20%">
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
            
            <ul class="nav-menu" id="js-nav-menu">
                <li class="active open">
                    <ul>
                        <router-link tag="li" to="/dashboard" active-class="active">
                            <a >Inicio</a>
                        </router-link>
                        <router-link tag="li" v-if="user.role_id == 1" to="/usuarios" active-class="active">
                            <a >Usuarios</a>
                        </router-link>
                        <router-link tag="li" v-if="user.role_id == 1" to="/estacionamiento" active-class="active">
                            <a>Estacionamiento</a>
                        </router-link>
                        <router-link tag="li" v-if="user.role_id == 1 || user.role_id == 3" :to="{ name: 'programacion', query: { ps: session } }" active-class="active">
                            <a >Programación</a>
                        </router-link>
                        <router-link tag="li" v-if="user.role_id == 1" to="/rol" active-class="active">
                            <a >Rol</a>
                        </router-link>
                        <router-link tag="li" v-if="user.role_id == 1" to="/settings" active-class="active">
                            <a >Configuración</a>
                        </router-link>
                    </ul>
                </li>
            </ul>
            <div class="filter-message js-filter-message bg-success-600"></div>
        </nav>
        <!-- END PRIMARY NAVIGATION -->
        <!-- NAV FOOTER -->
            
    </aside>
</template>
<script>
export default {
    name: "sidebar",
    props:['session'],
    mounted(){
        this.init();
    },
    data(){
        return {
            user: []
        }
    },
    methods:{
        async init(){
            /* await axios.get('/api/user').then((res)=>{
                this.user = res.data;
            }) */
        }
    }
}
</script>