<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-chart-area'></i> <span class='fw-300'>Dashboard</span>
            </h1>
        </div>
        <div class="row">
            <!-- <div class="col-lg-12">
                <div id="panel-1" class="panel">
                    <div class="panel-hdr">
                        <h2>
                            Marketing profits
                        </h2>
                    </div>
                    <div class="panel-container show">
                        <div class="panel-content bg-subtlelight-fade">
                            <div id="js-checkbox-toggles" class="d-flex mb-3">
                                <div class="custom-control custom-switch mr-2">
                                    <input type="checkbox" class="custom-control-input" name="gra-0" id="gra-0" checked="checked">
                                    <label class="custom-control-label" for="gra-0">Target Profit</label>
                                </div>
                                <div class="custom-control custom-switch mr-2">
                                    <input type="checkbox" class="custom-control-input" name="gra-1" id="gra-1" checked="checked">
                                    <label class="custom-control-label" for="gra-1">Actual Profit</label>
                                </div>
                                <div class="custom-control custom-switch mr-2">
                                    <input type="checkbox" class="custom-control-input" name="gra-2" id="gra-2" checked="checked">
                                    <label class="custom-control-label" for="gra-2">User Signups</label>
                                </div>
                            </div>
                            <div id="flot-toggles" class="w-100 mt-4" style="height: 300px"></div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="row">
                            <div class="col-sm-6 col-xl-3">
                                <div class="p-3 bg-primary-300 rounded overflow-hidden position-relative text-white mb-g">
                                    <div class="">
                                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                                            21.5k
                                            <small class="m-0 l-h-n">Registros</small>
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
                                            <small class="m-0 l-h-n">Asignados</small>
                                        </h3>
                                    </div>
                                    <i class="fal fa-gem position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-3">
                                <div class="p-3 bg-success-200 rounded overflow-hidden position-relative text-white mb-g">
                                    <div class="">
                                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                                            - 10.72
                                            <small class="m-0 l-h-n">Emplazados</small>
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
                                            <small class="m-0 l-h-n">Facturado</small>
                                        </h3>
                                    </div>
                                    <i class="fal fa-globe position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                                </div>
                            </div>
                        </div>
    </main>
</template>
<script>

export default {
    data(){
        return{
            
        }
    },
    mounted(){
        
    },
    methods:{
    }
}
</script>