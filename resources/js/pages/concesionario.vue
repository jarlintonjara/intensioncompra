<template>
    <main id="js-page-content" role="main" class="page-content">
        <div class="subheader">
            <h1 class="subheader-title">
                <i cwlass='subheader-icon fal fa-chart-area'></i>Concesionarios
            </h1>
        </div>
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
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Dirección</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="concesionario in concesionarios" :key="concesionario.id">
<<<<<<< HEAD
                                    <td>{{concesionario.nombre }}</td>
                                    <td>{{concesionario.descripcion}}</td>
                                    <td>{{concesionario.direccion }}</td>                               
=======
                                    <td>{{ concesionario.nombre }}</td>
                                    <td>{{ concesionario.descripcion}}</td>
                                    <td>{{ concesionario.direccion }}</td>                               
>>>>>>> 5a3a12c3a956ab814d6276aacc4969092e1ea6fd
                                    <td>
                                        <button class="btn btn-warning" @click="abrirModalEditar(concesionario)"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="borrar(concesionario.id)"><i class="fa fa-trash"></i></button>
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
                        <button @click.prevent="cerrarModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                    <div class="modal-body">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="Nombre">Nombre</label>
                                <input type="text" id="Nombre" class="form-control" placeholder="Nombre" required="" v-model="datos.nombre">
                            </div> 
                            <div class="form-group col-md-6">
                                <label for="Descripcion">Descripción</label>
                                <input type="text" id="Descripcion" class="form-control" placeholder="Descripcion" required="" v-model="datos.descripcion">
                            </div>
                        </div>       
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="Direccion">Dirección</label>
                                <input type="text" id="Direccion" class="form-control" placeholder="Direccion" v-model="datos.direccion">
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
    name: "Concesionario",
    data(){
        return {
            concesionarios:[],
            datos: {
                nombre:'', 
                descripcion:'',
                direccion: '',
            },
            btnCrear:false,
            btnEditar:false,
            id:'',
<<<<<<< HEAD
            titulo:''
=======
            titulo: ''
>>>>>>> 5a3a12c3a956ab814d6276aacc4969092e1ea6fd
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        async init(){
            const token = localStorage.getItem('access_token');
            await this.axios.get('/api/concesionario',{
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(response=>{
                    this.concesionarios = response.data;
<<<<<<< HEAD

            
=======
>>>>>>> 5a3a12c3a956ab814d6276aacc4969092e1ea6fd
            })
                .catch(error=>{
                    console.log(error);
                }) 
            await this.$tablaGlobal('#tableUser');
        },
        validarCampos(){
            if(!this.datos.nombre || !this.datos.descripcion || !this.datos.direccion){
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
                axios.post('/api/concesionario', this.datos).then(response=>{
<<<<<<< HEAD
                    this.concesionario.push(response.data);
=======
                    this.concesionarios.push(response.data);
>>>>>>> 5a3a12c3a956ab814d6276aacc4969092e1ea6fd
                    $('#modalForm').modal('hide'); 
                    this.$swal.fire(
                        'Registro creado!',
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
                axios.put('/api/concesionario/'+this.id, this.datos).then(response=>{
<<<<<<< HEAD
                    this.concesionario = [].concat(response.data);          
=======
                    this.concesionarios = [].concat(response.data);          
>>>>>>> 5a3a12c3a956ab814d6276aacc4969092e1ea6fd
                    this.id='';
                    $('#modalForm').modal('hide');
                    this.$swal.fire(
                        'Editado correctamente!',
                        '',
                        'success'
                    )
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        borrar(id){
<<<<<<< HEAD
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/concesionario/${id}`).then(response=>{
                    this.concesionario = [].concat(response.data);
                }).catch(error=>{
                    console.log(error)  
                })
            }
        },
        abrirModalCrear(){
            this.datos = {nombre:'', descripcion:'', direccion: ''};
=======
            this.$swal({
                title: "¿Seguro de eliminar?",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true
            })
            .then(async (willDelete) => {
                if (willDelete) {
                     await this.axios.delete(`/api/concesionario/${id}`).then(response=>{
                        let index =  this.concesionarios.map(e => e.id).indexOf(id);
                        if(index !== -1){
                            let concesionarios = this.concesionarios;
                            concesionarios.splice(index, 1);
                            this.concesionarios = [].concat(concesionarios);
                        }
                        this.$swal.fire(
                            'Registro eliminado',
                            '',
                            'success'
                        ) 
                    }).catch(error=>{
                        console.log(error)
                    });
                } 
            });
        },
        abrirModalCrear(){
            this.datos = {
                nombre:'', 
                descripcion: '',
                direccion: ''
            };
>>>>>>> 5a3a12c3a956ab814d6276aacc4969092e1ea6fd
            this.titulo='Crear concesionario'
            this.btnCrear=true;
            this.btnEditar=false;
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
<<<<<<< HEAD
            this.datos= {
                nombre: datos.nombre, 
                descripcion: datos.descripcion,
                direccion: datos.direccion       
            };
            this.titulo=' Editar concesionario'
            this.btnCrear=false
            this.btnEditar=true
            this.id=datos.id
=======
            this.titulo=' Editar concesionario';
            this.datos.nombre = datos.nombre;
            this.datos.descripcion = datos.descripcion;
            this.datos.direccion = datos.direccion;
            this.btnCrear=false;
            this.btnEditar = true;
            this.id = datos.id;
>>>>>>> 5a3a12c3a956ab814d6276aacc4969092e1ea6fd
            $('#modalForm').modal('show')
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        }
    }
}
</script>