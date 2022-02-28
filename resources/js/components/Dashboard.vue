<template>
    <div>
        <div class="page-wrapper">
            <div class="page-inner">
                <!-- BEGIN Left Aside -->
                <Sidebar/>
                <!-- END Left Aside -->
                <div class="page-content-wrapper">
                    <!-- BEGIN Page Header -->
                    <Navbar/>
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
                                <i class='subheader-icon fal fa-chart-area'></i> Marketing <span class='fw-300'>Dashboard</span>
                                <small>
                                </small>
                            </h1>
                            <div class="d-flex mr-4">
                                <div class="mr-2">
                                    <span class="peity-donut" data-peity="{ &quot;fill&quot;: [&quot;#967bbd&quot;, &quot;#ccbfdf&quot;],  &quot;innerRadius&quot;: 14, &quot;radius&quot;: 20 }">7/10</span>
                                </div>
                                <div>
                                    <label class="fs-sm mb-0 mt-2 mt-md-0">New Sessions</label>
                                    <h4 class="font-weight-bold mb-0">70.60%</h4>
                                </div>
                            </div>
                            <div class="d-flex mr-0">
                                <div class="mr-2">
                                    <span class="peity-donut" data-peity="{ &quot;fill&quot;: [&quot;#2196F3&quot;, &quot;#9acffa&quot;],  &quot;innerRadius&quot;: 14, &quot;radius&quot;: 20 }">3/10</span>
                                </div>
                                <div>
                                    <label class="fs-sm mb-0 mt-2 mt-md-0">Page Views</label>
                                    <h4 class="font-weight-bold mb-0">14,134</h4>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-xl-3">
                                <div class="p-3 bg-primary-300 rounded overflow-hidden position-relative text-white mb-g">
                                    <div class="">
                                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                                            21.5k
                                            <small class="m-0 l-h-n">users signed up</small>
                                        </h3>
                                    </div>
                                    <i class="fal fa-user position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" style="font-size:6rem"></i>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-3">
                                <div class="p-3 bg-warning-400 rounded overflow-hidden position-relative text-white mb-g">
                                    <div class="">
                                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                                            $10,203
                                            <small class="m-0 l-h-n">Visual Index Figure</small>
                                        </h3>
                                    </div>
                                    <i class="fal fa-gem position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-3">
                                <div class="p-3 bg-success-200 rounded overflow-hidden position-relative text-white mb-g">
                                    <div class="">
                                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                                            - 103.72
                                            <small class="m-0 l-h-n">Offset Balance Ratio</small>
                                        </h3>
                                    </div>
                                    <i class="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n5 mr-n6" style="font-size: 8rem;"></i>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-3">
                                <div class="p-3 bg-info-200 rounded overflow-hidden position-relative text-white mb-g">
                                    <div class="">
                                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                                            +40%
                                            <small class="m-0 l-h-n">Product level increase</small>
                                        </h3>
                                    </div>
                                    <i class="fal fa-globe position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                           
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
            user: null
        }
    },
    methods:{
        logout(){
            axios.post('/api/logout').then(()=>{
                this.$router.push({ name: "Login"})
            })
        }
    },
    mounted(){
        axios.get('/api/user').then((res)=>{
            this.user = res.data
        })
    }
}
</script>