<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-chart-area'></i> <span class='fw-300'>Dashboard</span>
            </h1>
        </div>
        
        <div class="row">
            <div class="col-sm-6 col-xl-2">
                <div class="p-3 bg-primary-300 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            {{ totalRegistros }}
                            <small class="m-0 l-h-n">Registros</small>
                        </h3>
                    </div>
                    <i class="fal fa-user position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" style="font-size:6rem"></i>
                </div>
            </div>
            <div class="col-sm-6 col-xl-2">
                <div class="p-3 bg-warning-400 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            {{ totalNoAsignados }}
                            <small class="m-0 l-h-n">No Asignados</small>
                        </h3>
                    </div>
                    <i class="fal fa-ballot position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                </div>
            </div>
            <div class="col-sm-6 col-xl-2">
                <div class="p-3 bg-success-400 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            {{ totalAsignados }}
                            <small class="m-0 l-h-n">Asignados</small>
                        </h3>
                    </div>
                    <i class="fal fa-ballot position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                </div>
            </div>
            <div class="col-sm-6 col-xl-2">
                <div class="p-3 bg-info-200 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            {{ totalReservados }}
                            <small class="m-0 l-h-n">Reservados</small>
                        </h3>
                    </div>
                    <i class="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n5 mr-n6" style="font-size: 8rem;"></i>
                </div>
            </div>
            <div class="col-sm-6 col-xl-2">
                <div class="p-3 bg-primary-200 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            {{ totalEmplazados }}
                            <small class="m-0 l-h-n">Emplazados</small>
                        </h3>
                    </div>
                    <i class="fal fa-check-double position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                </div>
            </div>
            <div class="col-sm-6 col-xl-2">
                <div class="p-3 bg-warning-300 rounded overflow-hidden position-relative text-white mb-g">
                    <div class="">
                        <h3 class="display-4 d-block l-h-n m-0 fw-500">
                            {{ totalFacturados }}
                            <small class="m-0 l-h-n">Facturados</small>
                        </h3>
                    </div>
                    <i class="fal fa-barcode-alt position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" style="font-size:6rem"></i>
                </div>
            </div>
        </div>
        <div class="row" v-if="user.role_id == 6">
            <div class="col-md-12">
                <h2>ALERTAS</h2>
                <div v-if="packingDuplicado.length > 0" class="alert border-danger bg-transparent text-secondary fade show" role="alert">
                    <div class="d-flex align-items-center">
                        <div class="alert-icon">
                            <span class="icon-stack icon-stack-md">
                                <i class="base-7 icon-stack-3x color-danger-900"></i>
                                <i class="fal fa-times icon-stack-1x text-white"></i>
                            </span>
                        </div>
                        <div class="flex-1">
                            <span class="h5 color-danger-900">Registros asignados con el mismo VIN : {{packingDuplicado.length}}</span>
                            <br>
                            Registros que tienen asignado un mismo VIN del packing List
                        </div>
                        <button class="btn btn-outline-danger btn-sm btn-w-m waves-effect waves-themed">Report</button>
                    </div>
                </div>
                <div v-if="packingDuplicado.length == 0" class="alert border-success bg-transparent text-secondary fade show" role="alert">
                    <div class="d-flex align-items-center">
                        <div class="alert-icon">
                            <span class="icon-stack icon-stack-md">
                                <i class="base-7 icon-stack-3x color-success-600"></i>
                                <i class="fal fa-check icon-stack-1x text-white"></i>
                            </span>
                        </div>
                        <div class="flex-1">
                            <span class="h5 color-success-600">Registros asignados con el mismo VIN : {{packingDuplicado.length}}</span>
                            <br>
                            Registros que tienen asignado un mismo VIN del packing List
                        </div>
                    </div>
                </div> 
                
                <div v-if="noAsignados.length > 0" class="alert border-danger bg-transparent text-secondary fade show" role="alert">
                    <div class="d-flex align-items-center">
                        <div class="alert-icon">
                            <span class="icon-stack icon-stack-md">
                                <i class="base-7 icon-stack-3x color-danger-900"></i>
                                <i class="fal fa-times icon-stack-1x text-white"></i>
                            </span>
                        </div>
                        <div class="flex-1">
                            <span class="h5 color-danger-900">egistros con problema de asignación : {{noAsignados.length}}</span>
                            <br>
                            Registros que deberian estar en estado 'SINASIGNAR' pero se encuentran en estado ASIGNADO, RESERVADO, EMPLAZADO o FACTURADO
                        </div>
                        <button class="btn btn-outline-danger btn-sm btn-w-m waves-effect waves-themed">Report</button>
                    </div>
                </div>
                <div v-if="noAsignados.length == 0" class="alert border-success bg-transparent text-secondary fade show" role="alert">
                    <div class="d-flex align-items-center">
                        <div class="alert-icon">
                            <span class="icon-stack icon-stack-md">
                                <i class="base-7 icon-stack-3x color-success-600"></i>
                                <i class="fal fa-check icon-stack-1x text-white"></i>
                            </span>
                        </div>
                        <div class="flex-1">
                            <span class="h5 color-success-600">Registros con problema de asignación : {{noAsignados.length}}</span>
                            <br>
                           Registros que deberian estar en estado 'SINASIGNAR' pero se encuentran en estado ASIGNADO, RESERVADO, EMPLAZADO o FACTURADO
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <!-- <JqxGrid :theme="'material'" :width="getWidth" :source="dataAdapter" :columns="columns"
                 :pageable="true" :autoheight="true" :sortable="true" :filterable="true" :altrows="true" 
                 :editable="true" :selectionmode="'multiplecellsadvanced'" >
        </JqxGrid> -->
        <!-- div class="row">
            <div class="col-lg-12">
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
            </div>
        </div-->
        
    </main>
</template>
<script>
import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
export default {
    components: {
        JqxGrid
    },
    data(){
        return{
            user: {role_id: 0},
            packingDuplicado: [],
            noAsignados: [],
            totalRegistros: 0,
            totalNoAsignados: 0,
            totalAsignados: 0,
            totalEmplazados: 0,
            totalReservados: 0,
            totalFacturados: 0,
            getWidth: '99%',
            /* dataAdapter: new jqx.dataAdapter(),
            columns: [
                { text: 'Product Name', datafield: 'marca', width: 250 },
                { text: 'Quantity per Unit', datafield: 'modelo', align: 'right', cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'nombre_completo', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Units In Stock', datafield: 'correo', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100 },
            ] */
        }
    },
    beforeCreate: async function () {
        /* const token = localStorage.getItem('access_token');
            await this.axios.get('/api/registro', {
                withCredentials: true,
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(response=> {
                this.source = {
                    localdata: response.data.noasignados,
                    datafields: [
                        { name: 'marca', type: 'string', map: '0' },
                        { name: 'modelo', type: 'string', map: '1' },
                        { name: 'nombre_completo', type: 'string', map: '2' },
                        { name: 'correo', type: 'string', map: '3' }
                    ],
                    datatype: 'json'
                };
                this.dataAdapter = new jqx.dataAdapter(this.source)
                //this.noasignados = response.data.noasignados;
            })
            .catch(error=>{
                console.log(error);
            }); */
     },
    mounted(){
        this.init();
    },
    methods:{
        async init(){
            const token = localStorage.getItem('access_token');
            await axios.get('api/getSession/'+ token).then((res)=>{
                this.user = res.data;
            });
            await this.axios.get('/api/home',{
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
            })
            .then(response=>{
                this.packingDuplicado = response.data.packingDuplicado;
                this.noAsignados = response.data.noAsignados;
                this.totalRegistros = response.data.totalRegistros;
                this.totalNoAsignados = response.data.totalNoAsignados;
                this.totalAsignados = response.data.totalAsigandos;
                this.totalReservados = response.data.totalReservados;
                this.totalEmplazados = response.data.totalEmplazados;
                this.totalFacturados = response.data.totalFacturados;
            })
            .catch(error=>{
                console.log(error);
            });

            await this.axios.get('/api/registro', {
                withCredentials: true,
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(response=> {
                this.noasignados = response.data.noasignados;
            })
            .catch(error=>{
                console.log(error);
            })
        },
        cellsrenderer: function (row, columnsfield, value, defaulthtml, columnproperties, rowdata) {
            if (value < 20) {
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
            }
            else {
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
            }
        }
    }
}
</script>