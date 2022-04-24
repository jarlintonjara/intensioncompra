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
                        <table id="tablaListado" class="table table-bordered table-hover table-striped w-100">
                            <thead class="bg-warning-200">
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Dirección</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="tienda in tiendas" :key="tienda.id">
                                    <td>{{ tienda.id }}</td>
                                    <td>{{ tienda.nombre }}</td>
                                    <td>{{ tienda.direccion }}</td>
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
                                <select id="Concesionario" class="browser-default custom-select" v-model="datos.concesionario_id" :disabled="btnEditar">
                                    <option>Seleccione una Concesionario</option>
                                    <option v-for="concesionario in concesionarios" :key="concesionario.id + 11" :value="concesionario.id">{{ concesionario.nombre }}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="Nombre">Nombre</label>
                                <input type="text" id="Nombre" class="form-control" placeholder="Nombre" required="" v-model="datos.nombre">
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
    name: "Tienda",
    data(){
        return {
            concesionarios:[],
            tiendas:[],
            datos: { 
                concesionario_id:'', 
                nombre:'', 
                direccion: '',
            },
            id:'',
            titulo:'',
            btnCrear:false,
            btnEditar:false,
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
                    this.tiendas = response.data.tiendas;
                    this.concesionarios = response.data.concesionarios;
            })
                .catch(error=>{
                    console.log(error);
                }) 
            await this.$tablaGlobal('#tablaListado');
        },
        async crear(){
            let valid = await this.validarCampos();
            if(valid){
                axios.post('api/tienda', this.datos).then(response => {
                    this.tienda.push(response.data);
                    $('#modalForm').modal('hide'); 
                    this.$swal.fire('Registro creado!', '', 'success');
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        async editar(){
            let valid = await this.validarCampos();
            if(valid){
                axios.put('/api/tienda/' + this.id, this.datos).then(response => { 
                    let index =  this.tiendas.map(e => e.id).indexOf(this.id);
                    if(index !== -1){
                        let tiendas = this.tiendas;
                        tiendas[index] = response.data;
                        this.tiendas = [].concat(tiendas);
                    }
                    this.id='';
                    $('#modalForm').modal('hide');
                    this.$swal.fire( 'Registro editado!', '', 'success');
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        borrar(id){
            this.$swal.fire({
                title: '¿Seguro de eliminar?',
                showDenyButton: true,
                confirmButtonText: 'Eliminar',
                denyButtonText: `Cancelar`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                   this.axios.delete(`/api/tienda/${id}`).then(response=>{
                        let index =  this.tiendas.map(e => e.id).indexOf(id);
                        if(index !== -1){
                            let tiendas = this.tiendas;
                            tiendas.splice(index, 1);
                            this.tiendas = [].concat(tiendas);
                        }
                        this.$swal.fire('Registro eliminado', '', 'success');
                    }).catch(error=>{
                        console.log(error)
                    });
                }
            })
        },
        abrirModalCrear(){
            this.datos.concesionario_id = 0;
            this.datos.nombre = '';
            this.datos.direccion = '';
            this.titulo='Crear Tienda'
            this.btnCrear=true;
            this.btnEditar=false;
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
            this.datos.concesionario_id = datos.concesionario_id;
            this.datos.nombre = datos.nombre;
            this.datos.direccion = datos.direccion;
            this.titulo = 'Editar tienda'
            this.btnCrear=false
            this.btnEditar=true
            this.id = datos.id
            $('#modalForm').modal('show')
        },
        validarCampos(){
            if(!this.datos.nombre || !this.datos.concesionario_id || !this.datos.direccion ){
                this.$swal.fire({icon: 'error', title: 'Error', text: 'Completa los campos requeridos!',});
                return false;
            }
            return true;
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        }
    }
}
</script>