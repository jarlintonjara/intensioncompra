<template>
    <div>
        <div class="page-wrapper">
            <div class="page-inner">
                <!-- BEGIN Left Aside -->
                <sidebar/>
                <!-- END Left Aside -->
                <div class="page-content-wrapper">
                    <!-- BEGIN Page Header -->
                    <Navbar/>
                    <!-- END Page Header -->
                    <!-- BEGIN Page Content -->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        
                        <div class="subheader">
                            <h1 class="subheader-title">
                                <i class='subheader-icon fal fa-chart-area'></i> Programación
                            
                            </h1>
                        </div>
                        <br>
                        <div class="col-lg-12">
                                
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

                </div>
            </div>
        </div>
        <!-- END Page Wrapper -->
    </div>
</template>
<script>
import Sidebar from './../Sidebar.vue';
import Navbar from './../Navbar.vue';

export default {
    name: "Programacion",
    components: {
        Sidebar,
        Navbar
    },
    data(){
        return {
            columns: [
                    {label: 'Numero', field: 'numero'}, 
                    {label: 'Sede', field: 'sede'},
                    {label: 'Ubicacion', field: 'ubicacion'}
                ],
            page: 1,
            per_page: 10,
            items:[],
            info: [],
            datos: {numero:'', sede:'', ubicacion:''},
            titulo:'',
            btnCrear:false,
            btnEditar:false,
            id:''
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
            axios.post('api/estacionamiento', this.datos).then(response=>{
                this.items.push(response.data);
                //this.getUser()
                $('#modalForm').modal('hide');
                alert("Estacionamiento creado correctamente!");
                //swal("Felicidades!", "Estacionamiento creado correctamente!", "success");
            }).catch(function (error) {
                console.log(error);
            });
        },
        editar(){
            console.log(this.id);
            axios.put('/api/estacionamiento/'+this.id, this.datos).then(response=>{
                this.items = [].concat(response.data);          
                this.id='';
                //this.getUser()
                $('#modalForm').modal('hide');
                alert("Estacionamiento editado correctamente!");
                //swal("Felicidades!", "Usuario editado correctamente!", "success");
            }).catch(function (error) {
                console.log(error);
            });
        },
        borrar(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/estacionamiento/${id}`).then(response=>{
                    this.items = [].concat(response.data);
                }).catch(error=>{
                    console.log(error)
                })
            }
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
            this.id=datos.id
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
        },
        getTable(){
            $('#dt-basic-example').dataTable({})
        }
    }
}
</script>