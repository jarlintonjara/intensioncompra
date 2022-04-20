<template>
    <main id="js-page-content" role="main" class="page-content">
        <div class="subheader">
            <h1 class="subheader-title">
                <i cwlass='subheader-icon fal fa-chart-area'></i> Tienda
            </h1>
        </div>
        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                
                <div class="panel-container show">
                    <div class="panel-content">
                            <div class="panel-hdr">
                            <button class="btn btn-success" >Nuevo</button>
                        </div><br>
                        <table id="tableUser" class="table table-bordered table-hover table-striped w-100">
                            <thead class="bg-warning-200">
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Dirección</th>
                                    <!-- <th>Fecha de Creacion</th>  -->
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="tienda in tiendas" :key="tienda.id">
                                    <td>{{ tienda.id }}</td>
                                    <td>{{ tienda.nombre }}</td>
                                    <td>{{ tienda.direccion }}</td>
                                    <!-- <td>{{ user.Fecha }}</td>  -->
                                    <td>
                                        <button class="btn btn-warning" @click="abrirModalEditar(tienda)"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="borrar(tienda.id)"><i class="fa fa-trash"></i></button>
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
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="fa fa-user-plus"></i> {{titulo}}
                    </h5>
                    <button  @click.prevent="cerrarModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <form>
                    <div class="modal-body">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="Concesionario">Concesionario</label>
                                <input type="text" id="Concesionario" class="form-control" placeholder="Concesionario" required="" v-model="datos.concesionario">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="Nombre">Nombre</label>
                                <input type="text" id="Nombre" class="form-control" placeholder="Nombre" required="" v-model="datos.nombre">
                            </div> 
                            <div class="form-group col-md-6">
                            <div class="form-group col-md-4">
                                <label for="Direccion">Dirección</label>
                                <input type="text" id="Direccion" class="form-control" placeholder="Direccion" v-model="datos.direccion">
                            </div>
                        </div>                          
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" @click.prevent="cerrarModal" data-dismiss="modal">Cerrar</button>
                        <button type="submit" class="btn btn-primary" @click.prevent="crear" v-if="btnCrear">Crear</button>
                        <button type="submit" class="btn btn-primary" @click.prevent="editar" v-if="btnEditar">Editar</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        
    </main>
    
</template>
<script>

export default {
    name: "Tienda",
    data(){
        return {
            tiendas:[],
            datos: { 
                nombre:'', 
                tienda: 0,
                direccion: '',
                },
            btnCrear:false,
            btnEditar:false,
            selectTienda :"",
            id:'',
            titulo:''
        }
    },
    mounted(){
        this.init()

    },
    
    methods:{
        async init(){
            const token = localStorage.getItem('access_token');
            await this.axios.get('/api/tienda',{
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(response=>{
                    this.tiendas = response.data;
            console.log(this.tiendas)
            })
                .catch(error=>{
                    console.log(error);
                }) 
            await this.$tablaGlobal('#tableUser');
        },
        validarCampos(){
            if(!this.datos.nombre || !this.datos.tienda || !this.datos.direccion ){
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Completa los campos requeridos!',
                });
                return false;
            }
            return true;
        },
        async crear(){
            let valid = await this.validarCampos();
            if(valid){
                axios.post('api/tienda', this.datos).then(response=>{
                    this.tienda.push(response.data);
                    $('#modalForm').modal('hide'); 
                    this.$swal.fire(
                        'Tienda creada correctamente!',
                        '',
                        'success'
                    )
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        async editar(){
            let valid = await this.validarCampos();
            if(valid){
                axios.put('/api/tienda/'+this.id, this.datos).then(response=>{
                    this.tienda = [].concat(response.data);          
                    this.id='';
                    $('#modalForm').modal('hide');
                    this.$swal.fire(
                        'Tienda editada correctamente!',
                        '',
                        'success'
                    )
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        borrar(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/tienda/${id}`).then(response=>{
                    this.tienda = [].concat(response.data);
                }).catch(error=>{
                    console.log(error)  
                })
            }
        },
        abrirModalCrear(){
            this.datos = {nombre:'', tienda:'', direccion:''};
            this.titulo='Crear Tienda'
            this.btnCrear=true;
            this.btnEditar=false;
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
            this.datos= {
                nombre: datos.nombre, 
                tienda: datos.tienda,
                direccion: datos.direccion,      
            };
            this.titulo=' Editar tienda'
            this.btnCrear=false
            this.btnEditar=true
            this.id=datos.id
            $('#modalForm').modal('show')
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        }
    }
}
</script>