<template>
    <div>
        <div class="page-wrapper">
            <div class="page-inner">

                <Sidebar :session="user"/>

                <div class="page-content-wrapper">

                    <Navbar :session="user"/>

                    <router-view/>

                    <div class="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>

                    <footer class="page-footer" role="contentinfo"></footer>

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
    name: "Layout",
    components: {
        Sidebar,
        Navbar
    },
    data(){
        return {
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
        }
    }
}
</script>