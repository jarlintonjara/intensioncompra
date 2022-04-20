<template>
    <main id="js-page-content" role="main" class="page-content">
        <div class="subheader">
            <h1 class="subheader-title">
                <i cwlass='subheader-icon fal fa-chart-area'></i> Caracteristicas
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
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Color 1</th>
                                    <th>Color 2</th>
                                    <th>Color 3</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="caracteristicas in caracteristicas" :key="caracteristicas.id">
                                    <td>{{ caracteristicas.marca }}</td>
                                    <td>{{ caracteristicas.modelo }}</td>
                                    <td>{{ caracteristicas.color1 }}</td>
                                    <td>{{ caracteristicas.color2 }}</td>
                                    <td>{{ caracteristicas.color3 }}</td>
                                    <!-- <td>{{ user.Fecha }}</td>  -->
                                    <td>
                                        <button class="btn btn-warning" @click="abrirModalEditar(caracteristicas)"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="borrar(caracteristicas.id)"><i class="fa fa-trash"></i></button>
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
                                <label for="Marcas">Marca</label>
                                <input type="text" id="Marcas" class="form-control" placeholder="Marcas" required="" v-model="datos.marca">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="Modelos">Modelo</label>
                                <input type="text" id="Modelos" class="form-control" placeholder="Modelos" required="" v-model="datos.modelo">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="Color">Color 1</label>
                                <input type="text" id="Color" class="form-control" placeholder="Color" required="" v-model="datos.color1">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="Color">Color 2</label>
                                <input type="text" id="Color" class="form-control" placeholder="Color" required="" v-model="datos.color2">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="Color">Color 3</label>
                                <input type="text" id="Color" class="form-control" placeholder="Color" required="" v-model="datos.color3">
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
    name: "Caracteristica",
    data(){
        return {
            caracteristicas:[],
            datos: {
                marca:'', 
                modelo: '',
                color1: '',
                color2: '',
                color3: '',
                },
            btnCrear:false,
            btnEditar:false,
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
            await this.axios.get('/api/caracteristica',{
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(response=>{
                    this.caracteristicas = response.data;
            })
                .catch(error=>{
                    console.log(error);
                }) 
            await this.$tablaGlobal('#tableUser');
        },
        validarCampos(){
            if(!this.datos.marca || !this.datos.modelo || !this.datos.color1 ||!this.datos.color2 ||!this.datos.color3 ){
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
                axios.post('/api/caracteristica', this.datos).then(response=>{
                    this.tienda.push(response.data);
                    $('#modalForm').modal('hide'); 
                    this.$swal.fire(
                        'Caracteritica creada correctamente!',
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
                axios.put('/api/caracteristica/'+this.id, this.datos).then(response=>{
                    this.tienda = [].concat(response.data);          
                    this.id='';
                    $('#modalForm').modal('hide');
                    this.$swal.fire(
                        'Caracteritica editada correctamente!',
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
                this.axios.delete(`/api/caracteristica/${id}`).then(response=>{
                    this.caracteristicas = [].concat(response.data);
                }).catch(error=>{
                    console.log(error)  
                })
            }
        },
        abrirModalCrear(){
            this.datos = {marca:'', modelo:'', color1:'', color2:'', color3:'' };
            this.titulo='Crear caracteristica'
            this.btnCrear=true;
            this.btnEditar=false;
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
            this.datos= {
                marca: datos.marca, 
                modelo: datos.modelo,
                color1: datos.color1, 
                color2: datos.color2, 
                color3: datos.color3, 
                     
            };
            this.titulo=' Editar caracteristicas'
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