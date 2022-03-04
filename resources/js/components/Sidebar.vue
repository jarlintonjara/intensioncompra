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
                        <li class="active">
                            <router-link to="/dashboard" class="">Inicio</router-link>
                        </li>
                        <li>
                            <router-link v-if="user.role_id == 1" to="/usuarios" class="">Usuarios</router-link>
                        </li>
                        <li>
                            <router-link v-if="user.role_id == 1" to="/estacionamiento" class="">Estacionamiento</router-link>
                        </li>
                        <li>
                            <router-link v-if="user.role_id == 1 || user.role_id == 3" to="/programacion" class="">Programación</router-link>
                        </li>
                        <li>
                            <router-link v-if="user.role_id == 1 || user.role_id == 3" to="/rol" class="">Rol</router-link>
                        </li>
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
            await axios.get('/api/user').then((res)=>{
                this.user = res.data;
            })
        }
    }
}
</script>