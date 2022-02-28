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
                                <i class='subheader-icon fal fa-chart-area'></i> Usuarios 
                                <small>
                                </small>
                            </h1>
                        </div>
                        <br>
                        <div class="col-lg-12">
                                <div id="panel-4" class="panel">
                                    <div class="panel-hdr">
                                        <button class="btn btn-success" @click="abrirModalCrear">Nuevo</button>
                                    </div>
                                    <div class="panel-container show">
                                        <div class="panel-content">
                                            <table id="dt-basic-example" class="table table-bordered table-hover table-striped w-100">
                                                <thead class="bg-warning-200">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Nombres</th>
                                                        <th>Apellidos</th>
                                                        <th>Documento</th>
                                                        <th>Email</th>
                                                        <th>Fecha</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="user in users" :key="user.id">
                                                        <td>{{ user.id }}</td>
                                                        <td>{{ user.nombre }}</td>
                                                        <td>{{ user.apellido }}</td>
                                                        <td>{{ user.documento }}</td>
                                                        <td>{{ user.email }}</td>
                                                        <td>{{ user.created_at }}</td>
                                                        <td>
                                                            <button class="btn btn-warning" @click="abrirModalEditar(user)"><i class="far fa-edit"></i></button>
                                                            <button class="btn btn-danger" @click="borrar(user.id)"><i class="far fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!-- datatable end -->
                                        </div>
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
                                            <label for="">Nombres</label>
                                            <input type="text" class="form-control" placeholder="Nombres" required="" v-model="datos.nombre">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Apellidos</label>
                                            <input type="text" class="form-control" placeholder="Apellidos" required="" v-model="datos.apellido">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Documento</label>
                                            <input type="text" class="form-control" placeholder="Documento" required="" v-model="datos.documento">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Email</label>
                                            <input type="text" class="form-control" placeholder="ubicación" required="" v-model="datos.email">
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
                       
                    </main>
                    <!-- END Page Content -->
                                        <!-- this overlay is activated only when mobile menu is triggered -->
                    <div class="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>
                    <!-- BEGIN Page Footer -->
                    <footer class="page-footer" role="contentinfo">
                        <!-- <div class="d-flex align-users-center flex-1 text-muted">
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
    name: "Usuario",
    components: {
        Sidebar,
        Navbar
    },
    data(){
        return {
            users:[],
            info: [],
            datos: {nombre:'', apellido:'', documento:'', email:''},
            titulo:'',
            btnCrear:false,
            btnEditar:false,
            id:''
        }
    },
    mounted(){
        this.mostrarusers()
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
            axios.post('api/usuario', this.datos).then(response=>{
                this.users.push(response.data);
                //this.getUser()
                $('#modalForm').modal('hide');
                alert("Usuario creado correctamente!");
                //swal("Felicidades!", "Estacionamiento creado correctamente!", "success");
            }).catch(function (error) {
                console.log(error);
            });
        },
        editar(){
            console.log(this.id);
            axios.put('/api/usuario/'+this.id, this.datos).then(response=>{
                this.users = [].concat(response.data);          
                this.id='';
                //this.getUser()
                $('#modalForm').modal('hide');
                alert("usuario editado correctamente!");
                //swal("Felicidades!", "Usuario editado correctamente!", "success");
            }).catch(function (error) {
                console.log(error);
            });
        },
        borrar(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/usuario/${id}`).then(response=>{
                    this.users = [].concat(response.data);
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        abrirModalCrear(){
            this.datos = {nombre:'', apellido:'', documento:'', email:''},
            this.titulo='Crear usuario'
            this.btnCrear=true;
            this.btnEditar=false;
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
            this.datos= {nombre: datos.nombre, apellido: datos.apellido, documento: datos.documento, email: datos.email}
            this.titulo=' Editar usuario'
            this.btnCrear=false
            this.btnEditar=true
            this.id=datos.id
            $('#modalForm').modal('show')
        },
        async mostrarusers(){
            await this.axios.get('/api/usuario')
                    .then(response=>{
                        this.users = response.data
                    })
                    .catch(error=>{
                        console.log(error);
                        this.users =[]
                    })
        },
        getTable(){
            $('#dt-basic-example').dataTable({})
        }
    }
}
</script>