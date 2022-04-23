<template>
    <main id="js-page-content" role="main" class="page-content">

        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-list'></i> <span class='fw-300'>Registros</span>
            </h1>
        </div>

        <div class="col-lg-12">
            <div id="panel-4" class="panel">
                <div class="panel-container show">
                    <div class="panel-content">
                        <table id="tnoasignado" class="table table-bordered table-hover table-striped w-100">
                            <thead>
                                <tr>
                                    <th style="width:8% !important"></th>
                                    <th style="width:22% !important">Nombre Completo</th>
                                    <th>celular</th>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Versión</th>
                                    <th>Tienda</th>
                                    <th>Fecha Creación</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="noasignado in noasignados" :key="noasignado.id">
                                    <td style="text-align: center">
                                        <button class="btn btn-warning" @click="detalle(noasignado)"><i class="fa fa-list"></i></button>
                                        <button class="btn btn-danger" @click="borrar(noasignado.id)"><i class="fa fa-trash"></i></button>
                                    </td>
                                    <td>{{noasignado.nombre_completo}}</td>
                                    <td>{{noasignado.celular}}</td>
                                    <td>{{noasignado.marca}}</td>
                                    <td>{{noasignado.modelo}}</td>
                                    <td>{{noasignado.version}}</td>
                                    <td>{{noasignado.tienda}}</td>
                                    <td>{{noasignado.fecha ? noasignado.fecha:""}}</td>
                                    
                                </tr>
                            </tbody>
                            
                        </table>
                        <!-- datatable end -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Right -->
        <div id="modalForm" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title h4">Detalle de registro</h5>
                        <button type="button" class="close" @click="cerrarModal()" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="card mb-5">
                            <div class="card-body p-3">
                                <h5 class="text-danger">
                                    Cliente
                                    <!-- <span class="badge badge-primary fw-n position-absolute pos-top pos-right mt-3 mr-3">A</span> -->
                                </h5>
                                <div class="row">
                                    <div class="row">
                                        <div class="col-md-3">Nombre Completo:</div>
                                        <div class="col-md-3"><b>{{ registro.nombreCompleto }}</b></div>
                                        <div class="col-md-3">Documento:</div>
                                        <div class="col-md-3"><b>{{ registro.documento }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Celular:</div>
                                        <div class="col-md-3"><b>{{ registro.celular }}</b></div>
                                        <div class="col-md-3">Email:</div>
                                        <div class="col-md-3"><b>{{ registro.email }}</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-g">
                            <div class="card-body p-3">
                                <h5 class="text-danger">
                                    Ejecutivo
                                </h5>
                                <div class="row">
                                    <div class="row">
                                        <div class="col-md-3">Nombre Completo:</div>
                                        <div class="col-md-3"><b>{{ registro.usuarioNombre }}</b></div>
                                        <div class="col-md-3">Tienda:</div>
                                        <div class="col-md-3"><b>{{ registro.tienda }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Email:</div>
                                        <div class="col-md-3"><b>{{ registro.usuarioEmail }}</b></div>
                                        <div class="col-md-3">Concesionario:</div>
                                        <div class="col-md-3"><b>{{ registro.concesionario }}</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-g">
                            <div class="card-body p-3">
                                <h5 class="text-danger">
                                    Detalle de la Unidad
                                </h5>
                                <div class="row">
                                    <div class="row">
                                        <div class="col-md-3">Marca:</div>
                                        <div class="col-md-3"><b>{{ registro.marca }}</b></div>
                                        <div class="col-md-3">Versión:</div>
                                        <div class="col-md-3"><b>{{ registro.version }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Modelo:</div>
                                        <div class="col-md-3"><b>{{ registro.modelo }}</b></div>
                                        <div class="col-md-3">Año Modelo:</div>
                                        <div class="col-md-3"><b>{{ registro.anio_modelo }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Año Fabricación:</div>
                                        <div class="col-md-3"><b>{{ registro.anio_fabricacion }}</b></div>
                                        <div class="col-md-3">Color 1:</div>
                                        <div class="col-md-3"><b>{{ registro.color1 }}</b></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-3">Color 2:</div>
                                        <div class="col-md-3"><b>{{ registro.color2 }}</b></div>
                                        <div class="col-md-3">Color 3:</div>
                                        <div class="col-md-3"><b>{{ registro.color3 }}</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="cerrarModal()">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>

export default {
    data(){
        return{
            noasignados:[],
            user: null,
            registro: {
                nombreCompleto: "", 
                documento: "", 
                email: "", 
                celular: "", 
                usuarioNombre: "",         
                usuarioEmail: "",          
                tienda: "",          
                concesionario: "",          
                marca: "",          
                modelo: "",          
                version: "",          
                anio_modelo: "",          
                anio_fabricacion: "",          
                color1: "",          
                color2: "", 
                color3: "" 
            }
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        async init(){
            const token = localStorage.getItem('access_token');
            await axios.get('api/getSession/'+ token).then((res)=>{
                this.user = res.data;
            })
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
                this.$tablaGlobal('#tnoasignado');
        },
        detalle(datos){
            this.registro.nombreCompleto = datos.nombre_completo
            this.registro.documento = datos.documento; 
            this.registro.email = datos.correo;
            this.registro.celular = datos.celular; 
            this.registro.usuarioNombre = datos.nombre + " " + (datos.apellido? datos.apellido : " ");        
            this.registro.usuarioEmail = datos.email;        
            this.registro.tienda = datos.tienda;          
            this.registro.concesionario = datos.concesionario;         
            this.registro.marca = datos.marca;          
            this.registro.modelo = datos.modelo;          
            this.registro.version = datos.version;        
            this.registro.anio_modelo = datos.anio_modelo;          
            this.registro.color1= datos.color1;        
            this.registro.color2= datos.color2;
            this.registro.color3= datos.color3;
            $('#modalForm').modal('show')
        },
        async borrar(id){
            this.$swal.fire({
                title: '¿Seguro de eliminar?',
                showDenyButton: true,
                confirmButtonText: 'Eliminar',
                denyButtonText: `Cancelar`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await this.axios.delete(`/api/registro/${id}`).then(response=>{
                        let index =  this.noasignados.map(e => e.id).indexOf(id);
                        if(index !== -1){
                            let noasignados = this.noasignados;
                            noasignados.splice(index, 1);
                            this.noasignados = [].concat(noasignados);
                        }
                        this.$swal.fire('Registro eliminado', '', 'success') 
                    }).catch(error=>{
                        console.log(error)
                    });
                }
            })
        },
        cerrarModal(){
            $('#modalForm').modal('hide');
        }
    }
}

</script>