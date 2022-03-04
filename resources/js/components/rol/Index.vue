<template>
    
    <main id="js-page-content" role="main" class="page-content">
        
        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-chart-area'></i> Roles 
                <small>
                </small>
            </h1>
        </div>
        <br>
        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                
                <div class="panel-container show">
                    <div class="panel-content">
                            <div class="panel-hdr">
                            <button class="btn btn-success" @click="abrirModalCrear">Nuevo</button>
                        </div><br>
                        <table id="tableUser" class="table table-bordered table-hover table-striped w-100">
                            <thead class="bg-warning-200">
                                <tr>
                                    <th>ID</th>
                                    <th>Nombres</th>
                                    <th>Descripción</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="rol in items" :key="rol.id">
                                    <td>{{ rol.id }}</td>
                                    <td>{{ rol.nombre }}</td>
                                    <td>{{ rol.description }}</td>
                                    <td>{{ rol.status }}</td>
                                    <td style="text-align: center">
                                        <button class="btn btn-warning" @click="abrirModalEditar(rol)"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="borrar(rol.id)"><i class="fa fa-trash"></i></button>
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
                    <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="fa fa-user-plus"></i> {{titulo}}
                    </h5>
                    <button type="button" @click.prevent="cerrarModal" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <form>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" class="form-control" placeholder="Nombre" required="" v-model="datos.nombre">
                        </div>
                        <div class="form-group">
                            <label for="nombres">Descripción</label>
                            <input type="text" class="form-control" placeholder="Descripción" required="" v-model="datos.description">
                        </div>
                        <div class="form-group">
                            <label for="nombress">Estado</label>
                            <input type="text" class="form-control" placeholder="Estado" required="" v-model="datos.status">
                        </div>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger"  @click.prevent="cerrarModal" data-dismiss="modal">Cerrar</button>
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
    name: "Rol",
    components: {

    },
    data(){
        return {
            items:[],
            datos: {nombre:'', description:'', status:''},
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

        crear(){
            axios.post('api/rol', this.datos).then(response=>{
                this.items.push(response.data);
                //this.getUser()
                $('#modalForm').modal('hide');
                this.$swal.fire(
                    'Rol creado correctamente!',
                    '',
                    'success'
                )
                //swal("Felicidades!", "Rol creado correctamente!", "success");
            }).catch(function (error) {
                console.log(error);
            });
        },
        editar(){
            console.log(this.id);
            axios.put('/api/rol/'+this.id, this.datos).then(response=>{
                this.items = [].concat(response.data);          
                this.id='';
                //this.getUser()
                $('#modalForm').modal('hide');
                this.$swal.fire(
                    'Rol editado correctamente!',
                    '',
                    'success'
                )
                //swal("Felicidades!", "Usuario editado correctamente!", "success");
            }).catch(function (error) {
                console.log(error);
            });
        },
        borrar(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/rol/${id}`).then(response=>{
                    this.items = [].concat(response.data);
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        abrirModalCrear(){
            this.datos= {nombre:'', description:'', status:''}
            this.titulo=' Crear rol'
            this.btnCrear=true
            this.btnEditar=false
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
            this.datos= {nombre: datos.nombre, description: datos.description, status: datos.status}
            this.titulo=' Editar rol'
            this.btnCrear=false
            this.btnEditar=true
            this.id=datos.id
            $('#modalForm').modal('show');
        },
        async mostrarItems(){
            await this.axios.get('/api/rol')
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
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        },
        dateFormat(date){
            let dt = new Date(date);
            let year  = dt.getFullYear();
            let month = (dt.getMonth() + 1).toString().padStart(2, "0");
            let day   = dt.getDate().toString().padStart(2, "0");
            return day +"-"+ month+"-"+ year
        }
    }
}
</script>