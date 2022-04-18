<template>
    <main id="js-page-content" role="main" class="page-content">
        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-chart-area'></i> Usuarios 
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
                                    <th>Nombre Completo</th>
                                    <th>Tienda</th>
                                    <th>Rol</th>
                                    <th>Documento</th> 
                                    <th>Email</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{ user.nombre + " "+ (user.apellido != null? user.apellido: '') }}</td>
                                    <td>{{ user.tienda.nombre }}</td>
                                    <td>{{ user.role.descripcion }}</td>
                                    <td>{{ user.documento }}</td> 
                                    <td>{{ user.email }}</td>
                                    <td>
                                        <button class="btn btn-warning" @click="abrirModalEditar(user)"><i class="far fa-edit"></i></button>
                                        <button class="btn btn-danger" @click="borrar(user.id)"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
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
                                <label for="Nombres">Nombres</label>
                                <input type="text" id="Nombres" class="form-control" v-model="datos.nombre">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="Apellidos">Apellidos</label>
                                <input type="text" id="Apellidos" class="form-control" v-model="datos.apellido">
                            </div>
                           
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="Documento">Documento</label>
                                <input type="text" id="Documento" class="form-control"  v-model="datos.documento">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Telefono">Telefono</label>
                                <input type="text" id="Telefono" class="form-control" v-model="datos.telefono">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Email">Email</label>
                                <input type="email" id="Email" class="form-control"  v-model="datos.email">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="Concesionario">Concesionario</label>
                                <select id="Concesionario" class="browser-default custom-select" v-model="datos.concesionario_id">
                                    <option>Seleccione una Concesionario</option>
                                    <option v-for="concesionario in concesionarios" :key="concesionario.nombre + concesionario.id" :value="concesionario.id">{{ concesionario.nombre }}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Tienda">Tienda</label>
                                <select id="Tienda" class="browser-default custom-select" v-model="datos.tienda_id">
                                    <option>Seleccione una Tienda</option>
                                    <option v-for="tienda in tiendasFilter" :key="tienda.nombre + tienda.id" :value="tienda.id">{{ tienda.nombre }}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Role">Rol</label>
                                <select id="Perfil" class="browser-default custom-select" v-model="datos.role_id">
                                    <option>Seleccione un rol</option>
                                    <option v-for="role in roles" :key="role.nombre+role.id" :value="role.id">{{ role.nombre }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="usuario">Usuario</label>
                                <input type="text" id="usuario" class="form-control" v-model="datos.usuario">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="password">Contraseña</label>
                                <input type="password" id="password" class="form-control" v-model="datos.password">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="confirmar_password">Confirmar contraseña</label>
                                <input type="password" id="confirmar_password" class="form-control" v-model="datos.confirmar_password">
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
    name: "Usuario",
    data(){
        return {
            users:[],
            roles:[],
            concesionarios:[],
            tiendas:[],
            tiendasFilter:[],
            datos: {
                nombre:'', 
                apellido:'', 
                concesionario_id: 0,
                tienda: 0,
                documento:'', 
                email:'', 
                role_id: '',
                telefono:'', 
                usuario:'',
                password: '',
                confirmar_password: ''
            },
            titulo:'',
            btnCrear:false,
            btnEditar:false,
            id:''
        }
    },
    mounted(){
        this.init()
    },
    watch: {
        'datos.concesionario_id': function(value) {
            if(value){
                this.tiendasFilter = this.tiendas.filter(e => e.concesionario_id == value);
                this.datos.tienda_id = '';
            }
        }
    },
    methods:{
        async init(){
            const token = localStorage.getItem('access_token');
            await this.axios.get('/api/usuario',{
                   withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(response=>{
                    this.users = response.data.users;
                    this.roles = response.data.roles;
                    this.concesionarios = response.data.concesionarios;
                    this.tiendas = response.data.tiendas;
                    this.roles = response.data.roles;
                })
                .catch(error=>{
                    console.log(error);
                }) 
            await this.$tablaGlobal('#tableUser');
        },
        validarCampos(){
            if(!this.datos.nombre || !this.datos.apellido || !this.datos.email || !this.datos.role_id || !this.datos.usuario ){
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
                axios.post('api/usuario', this.datos).then(response=>{
                    this.users.push(response.data);
                    $('#modalForm').modal('hide'); 
                    this.$swal.fire(
                        'Usuario creado correctamente!',
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
                axios.put('/api/usuario/'+this.id, this.datos).then(response=>{
                    this.users = [].concat(response.data);          
                    this.id='';
                    $('#modalForm').modal('hide');
                    this.$swal.fire(
                        'Usuario editado correctamente!',
                        '',
                        'success'
                    )
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        borrar(id){
            this.$swal({
                title: "¿Seguro de eliminar?",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then(async (willDelete) => {
                if (willDelete) {
                     this.axios.delete(`/api/usuario/${id}`).then(response=>{
                        let index =  this.users.map(e => e.id).indexOf(id);
                        if(index !== -1){
                            let users = this.users;
                            users.splice(index, 1);
                            this.users = [].concat(users);
                        }
                        this.$swal.fire(
                            'Usuario eliminado',
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
            this.datos = {nombre:'', apellido:'', documento:'', email:'', role_id: '', cargo: '', area: ''};
            this.titulo='Crear usuario'
            this.btnCrear=true;
            this.btnEditar=false;
            $('#modalForm').modal('show')
        },
        abrirModalEditar(datos){
            this.titulo=' Editar usuario'
            this.datos.nombre = datos.nombre; 
            this.datos.apellido = datos.apellido;
            this.datos.documento = datos.documento; 
            this.datos.email = datos.email; 
            this.datos.role_id = datos.role_id;          
            this.datos.tienda_id = datos.tienda_id;          
            this.datos.concesionario_id = datos.concesionario_id;          
            this.datos.usuario = datos.usuario;
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