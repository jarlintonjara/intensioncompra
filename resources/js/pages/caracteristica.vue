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
                        <table id="tablaListado" class="table table-bordered table-hover table-striped w-100">
                            <thead class="bg-warning-200">
                                <tr>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Versión</th>
                                    <th>Año modelo</th>
                                    <th>Color</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="caracteristica in caracteristicas" :key="caracteristica.id">
                                    <td>{{ caracteristica.marca }}</td>
                                    <td>{{ caracteristica.modelo }}</td>
                                    <td>{{ caracteristica.version }}</td>
                                    <td>{{ caracteristica.anio_modelo }}</td>
                                    <td>{{ caracteristica.color }}</td>
                                    <td>
                                        <button class="btn btn-warning" @click="abrirModalEditar(caracteristica)"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="borrar(caracteristica.id)"><i class="fa fa-trash"></i></button>
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
                                <label for="marca">Marca</label>
                                <select id="marca" class="browser-default custom-select" v-model="datos.marca" :disabled="btnEditar">
                                    <option>Seleccione una marca</option>
                                    <option v-for="item in marcas" :key="item.marca" :value="item.marca">{{ item.marca }}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="modelo">Modelo:</label>
                                <input type="text" id="modelo" class="form-control" v-model="datos.modelo" :disabled="btnEditar">
                            </div>
                        </div>  
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="version">Versión:</label>
                                <input type="text" id="version" class="form-control" v-model="datos.version" :disabled="btnEditar">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="color">Color:</label>
                                <input type="text" id="color" class="form-control" v-model="datos.color" :disabled="btnEditar">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="anioModelo">Año del modelo</label>
                                <select id="anioModelo" class="browser-default custom-select" v-model="datos.anio_modelo" >
                                    <option>Seleccione año modelo</option>
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="anioModelo">Año de fabricación</label>
                                <select id="anioModelo" class="browser-default custom-select" v-model="datos.anio_fabricacion">
                                    <option>Seleccione año fabricación</option>
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
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
            marcas:[],
            datos: {
                marca:'', 
                modelo: '',
                version: '',
                anio_modelo: '',
                anio_fabricacion: '',
                color: ''
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
                    this.caracteristicas = response.data.caracteristicas;
                    this.marcas = response.data.marcas;
            })
                .catch(error=>{
                    console.log(error);
                }) 
            await this.$tablaGlobal('#tablaListado');
        },
        async crear(){
            let valid = await this.validarCampos();
            if(valid){
                axios.post('/api/caracteristica', this.datos).then(response=>{
                    this.caracteristicas.push(response.data);
                    $('#modalForm').modal('hide'); 
                    this.$swal.fire('Registro creada!', '', 'success');
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        async editar(){
            let valid = await this.validarCampos();
            if(valid){
                axios.put('/api/caracteristica/'+this.id, this.datos).then(response=>{
                    let index =  this.caracteristicas.map(e => e.id).indexOf(this.id);
                    if(index !== -1){
                        let caracteristicas = this.caracteristicas;
                        caracteristicas[index] = response.data;
                        this.caracteristicas = [].concat(caracteristicas);
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
                   this.axios.delete(`/api/caracteristica/${id}`).then(response=>{
                        let index =  this.caracteristicas.map(e => e.id).indexOf(id);
                        if(index !== -1){
                            let caracteristicas = this.caracteristicas;
                            caracteristicas.splice(index, 1);
                            this.caracteristicas = [].concat(caracteristicas);
                        }
                        this.$swal.fire('Registro eliminado', '', 'success');
                    }).catch(error=>{
                        console.log(error)
                    });
                }
            })
        },
        abrirModalCrear(){
            this.datos.marca = '';
            this.datos.modelo ='';
            this.datos.version ='';
            this.datos.anio_modelo ='';
            this.datos.anio_fabricacion ='';
            this.datos.color = '';
            this.titulo='Crear caracteristica'
            this.btnCrear=true;
            this.btnEditar=false;
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
            this.datos.marca = datos.marca;
            this.datos.modelo = datos.modelo;
            this.datos.version = datos.version;
            this.datos.anio_modelo = datos.anio_modelo;
            this.datos.anio_fabricacion = datos.anio_fabricacion;
            this.datos.color = datos.color;
            this.titulo=' Editar caracteristicas'
            this.btnCrear=false
            this.btnEditar=true
            this.id=datos.id
            $('#modalForm').modal('show')
        },
        validarCampos(){
            if(!this.datos.marca || !this.datos.modelo || !this.datos.version || !this.datos.color){
                this.$swal.fire({icon: 'error', title: 'Error', text: 'Completa los campos requeridos!'});
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