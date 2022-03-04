<template>
    <div>
        <div class="page-wrapper">
            <div class="page-inner">

                <sidebar :session="user"/>

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
            user: []
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        async init(){
            await axios.get('/api/user').then((res)=>{
                this.user = res.data;
                console.log(this.user)
            })
        }
    }
}
</script>